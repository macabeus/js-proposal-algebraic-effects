// @flow

import { mergeOptions } from "./util";
import * as context from "../index";
import Plugin from "./plugin";
import { getItemDescriptor } from "./item";
import {
  buildPresetChain,
  type ConfigContext,
  type ConfigChain,
  type PresetInstance,
} from "./config-chain";
import type { UnloadedDescriptor } from "./config-descriptors";
import traverse from "@babel/traverse";
import { makeWeakCache, type CacheConfigurator } from "./caching";
import { validate, type CallerMetadata } from "./validation/options";
import { validatePluginObject } from "./validation/plugins";
import makeAPI from "./helpers/config-api";

import loadPrivatePartialConfig from "./partial";
import type { ValidatedOptions } from "./validation/options";

type LoadedDescriptor = {
  value: {},
  options: {},
  dirname: string,
  alias: string,
};

export type { InputOptions } from "./validation/options";

export type ResolvedConfig = {
  options: Object,
  passes: PluginPasses,
};

export type { Plugin };
export type PluginPassList = Array<Plugin>;
export type PluginPasses = Array<PluginPassList>;

// Context not including filename since it is used in places that cannot
// process 'ignore'/'only' and other filename-based logic.
type SimpleContext = {
  envName: string,
  caller: CallerMetadata | void,
};

export default function loadFullConfig(
  inputOpts: mixed,
): ResolvedConfig | null {
  const result = loadPrivatePartialConfig(inputOpts);
  if (!result) {
    return null;
  }
  const { options, context } = result;

  const optionDefaults = {};
  const passes = [[]];
  try {
    const { plugins, presets } = options;

    if (!plugins || !presets) {
      throw new Error("Assertion failure - plugins and presets exist");
    }

    const ignored = (function recurseDescriptors(
      config: {
        plugins: Array<UnloadedDescriptor>,
        presets: Array<UnloadedDescriptor>,
      },
      pass: Array<Plugin>,
    ) {
      const plugins = config.plugins.reduce((acc, descriptor) => {
        if (descriptor.options !== false) {
          acc.push(loadPluginDescriptor(descriptor, context));
        }
        return acc;
      }, []);
      const presets = config.presets.reduce((acc, descriptor) => {
        if (descriptor.options !== false) {
          acc.push({
            preset: loadPresetDescriptor(descriptor, context),
            pass: descriptor.ownPass ? [] : pass,
          });
        }
        return acc;
      }, []);

      // resolve presets
      if (presets.length > 0) {
        // The passes are created in the same order as the preset list, but are inserted before any
        // existing additional passes.
        passes.splice(
          1,
          0,
          ...presets.map(o => o.pass).filter(p => p !== pass),
        );

        for (const { preset, pass } of presets) {
          if (!preset) return true;

          const ignored = recurseDescriptors(
            {
              plugins: preset.plugins,
              presets: preset.presets,
            },
            pass,
          );
          if (ignored) return true;

          preset.options.forEach(opts => {
            mergeOptions(optionDefaults, opts);
          });
        }
      }

      // resolve plugins
      if (plugins.length > 0) {
        pass.unshift(...plugins);
      }
    })(
      {
        plugins: plugins.map(item => {
          const desc = getItemDescriptor(item);
          if (!desc) {
            throw new Error("Assertion failure - must be config item");
          }

          return desc;
        }),
        presets: presets.map(item => {
          const desc = getItemDescriptor(item);
          if (!desc) {
            throw new Error("Assertion failure - must be config item");
          }

          return desc;
        }),
      },
      passes[0],
    );

    if (ignored) return null;
  } catch (e) {
    // There are a few case where thrown errors will try to annotate themselves multiple times, so
    // to keep things simple we just bail out if re-wrapping the message.
    if (!/^\[BABEL\]/.test(e.message)) {
      e.message = `[BABEL] ${context.filename || "unknown"}: ${e.message}`;
    }

    throw e;
  }

  const opts: Object = optionDefaults;
  mergeOptions(opts, options);

  opts.plugins = passes[0];
  opts.presets = passes
    .slice(1)
    .filter(plugins => plugins.length > 0)
    .map(plugins => ({ plugins }));
  opts.passPerPreset = opts.presets.length > 0;

  return {
    options: opts,
    passes: passes,
  };
}

/**
 * Load a generic plugin/preset from the given descriptor loaded from the config object.
 */
const loadDescriptor = makeWeakCache(
  (
    { value, options, dirname, alias }: UnloadedDescriptor,
    cache: CacheConfigurator<SimpleContext>,
  ): LoadedDescriptor => {
    // Disabled presets should already have been filtered out
    if (options === false) throw new Error("Assertion failure");

    options = options || {};

    let item = value;
    if (typeof value === "function") {
      const api = {
        ...context,
        ...makeAPI(cache),
      };
      try {
        item = value(api, options, dirname);
      } catch (e) {
        if (alias) {
          e.message += ` (While processing: ${JSON.stringify(alias)})`;
        }
        throw e;
      }
    }

    if (!item || typeof item !== "object") {
      throw new Error("Plugin/Preset did not return an object.");
    }

    if (typeof item.then === "function") {
      throw new Error(
        `You appear to be using an async plugin, ` +
          `which your current version of Babel does not support. ` +
          `If you're using a published plugin, ` +
          `you may need to upgrade your @babel/core version.`,
      );
    }

    return { value: item, options, dirname, alias };
  },
);

/**
 * Instantiate a plugin for the given descriptor, returning the plugin/options pair.
 */
function loadPluginDescriptor(
  descriptor: UnloadedDescriptor,
  context: SimpleContext,
): Plugin {
  if (descriptor.value instanceof Plugin) {
    if (descriptor.options) {
      throw new Error(
        "Passed options to an existing Plugin instance will not work.",
      );
    }

    return descriptor.value;
  }

  return instantiatePlugin(loadDescriptor(descriptor, context), context);
}

const instantiatePlugin = makeWeakCache(
  (
    { value, options, dirname, alias }: LoadedDescriptor,
    cache: CacheConfigurator<SimpleContext>,
  ): Plugin => {
    const pluginObj = validatePluginObject(value);

    const plugin = {
      ...pluginObj,
    };
    if (plugin.visitor) {
      plugin.visitor = traverse.explode({
        ...plugin.visitor,
      });
    }

    if (plugin.inherits) {
      const inheritsDescriptor = {
        name: undefined,
        alias: `${alias}$inherits`,
        value: plugin.inherits,
        options,
        dirname,
      };

      // If the inherited plugin changes, reinstantiate this plugin.
      const inherits = cache.invalidate(data =>
        loadPluginDescriptor(inheritsDescriptor, data),
      );

      plugin.pre = chain(inherits.pre, plugin.pre);
      plugin.post = chain(inherits.post, plugin.post);
      plugin.manipulateOptions = chain(
        inherits.manipulateOptions,
        plugin.manipulateOptions,
      );
      plugin.visitor = traverse.visitors.merge([
        inherits.visitor || {},
        plugin.visitor || {},
      ]);
    }

    return new Plugin(plugin, options, alias);
  },
);

const validateIfOptionNeedsFilename = (
  options: ValidatedOptions,
  descriptor: UnloadedDescriptor,
): void => {
  if (options.test || options.include || options.exclude) {
    const formattedPresetName = descriptor.name
      ? `"${descriptor.name}"`
      : "/* your preset */";
    throw new Error(
      [
        `Preset ${formattedPresetName} requires a filename to be set when babel is called directly,`,
        `\`\`\``,
        `babel.transform(code, { filename: 'file.ts', presets: [${formattedPresetName}] });`,
        `\`\`\``,
        `See https://babeljs.io/docs/en/options#filename for more information.`,
      ].join("\n"),
    );
  }
};

const validatePreset = (
  preset: PresetInstance,
  context: ConfigContext,
  descriptor: UnloadedDescriptor,
): void => {
  if (!context.filename) {
    const { options } = preset;
    validateIfOptionNeedsFilename(options, descriptor);
    if (options.overrides) {
      options.overrides.forEach(overrideOptions =>
        validateIfOptionNeedsFilename(overrideOptions, descriptor),
      );
    }
  }
};

/**
 * Generate a config object that will act as the root of a new nested config.
 */
const loadPresetDescriptor = (
  descriptor: UnloadedDescriptor,
  context: ConfigContext,
): ConfigChain | null => {
  const preset = instantiatePreset(loadDescriptor(descriptor, context));
  validatePreset(preset, context, descriptor);
  return buildPresetChain(preset, context);
};

const instantiatePreset = makeWeakCache(
  ({ value, dirname, alias }: LoadedDescriptor): PresetInstance => {
    return {
      options: validate("preset", value),
      alias,
      dirname,
    };
  },
);

function chain(a, b) {
  const fns = [a, b].filter(Boolean);
  if (fns.length <= 1) return fns[0];

  return function(...args) {
    for (const fn of fns) {
      fn.apply(this, args);
    }
  };
}
