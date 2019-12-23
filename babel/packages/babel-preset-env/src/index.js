//@flow

import { SemVer } from "semver";
import { logPluginOrPolyfill } from "./debug";
import getOptionSpecificExcludesFor from "./get-option-specific-excludes";
import filterItems, { removeUnnecessaryItems } from "./filter-items";
import moduleTransformations from "./module-transformations";
import normalizeOptions from "./normalize-options";
import pluginList from "../data/plugins.json";
import { proposalPlugins, pluginSyntaxMap } from "../data/shipped-proposals";
import overlappingPlugins from "../data/overlapping-plugins";

import addCoreJS2UsagePlugin from "./polyfills/corejs2/usage-plugin";
import addCoreJS3UsagePlugin from "./polyfills/corejs3/usage-plugin";
import addRegeneratorUsagePlugin from "./polyfills/regenerator/usage-plugin";
import replaceCoreJS2EntryPlugin from "./polyfills/corejs2/entry-plugin";
import replaceCoreJS3EntryPlugin from "./polyfills/corejs3/entry-plugin";
import removeRegeneratorEntryPlugin from "./polyfills/regenerator/entry-plugin";

import getTargets from "./targets-parser";
import availablePlugins from "./available-plugins";
import { filterStageFromList, prettifyTargets } from "./utils";
import { declare } from "@babel/helper-plugin-utils";

import typeof ModuleTransformationsType from "./module-transformations";
import type { BuiltInsOption, Targets, ModuleOption } from "./types";

export { isPluginRequired } from "./filter-items";

const pluginListWithoutProposals = filterStageFromList(
  pluginList,
  proposalPlugins,
);

const getPlugin = (pluginName: string) => {
  const plugin = availablePlugins[pluginName];

  if (!plugin) {
    throw new Error(
      `Could not find plugin "${pluginName}". Ensure there is an entry in ./available-plugins.js for it.`,
    );
  }

  return plugin;
};

export const transformIncludesAndExcludes = (opts: Array<string>): Object => {
  return opts.reduce(
    (result, opt) => {
      const target = opt.match(/^(es|es6|es7|esnext|web)\./)
        ? "builtIns"
        : "plugins";
      result[target].add(opt);
      return result;
    },
    {
      all: opts,
      plugins: new Set(),
      builtIns: new Set(),
    },
  );
};

export const getModulesPluginNames = ({
  modules,
  transformations,
  shouldTransformESM,
  shouldTransformDynamicImport,
  shouldParseTopLevelAwait,
}: {
  modules: ModuleOption,
  transformations: ModuleTransformationsType,
  shouldTransformESM: boolean,
  shouldTransformDynamicImport: boolean,
  shouldParseTopLevelAwait: boolean,
}) => {
  const modulesPluginNames = [];
  if (modules !== false && transformations[modules]) {
    if (shouldTransformESM) {
      modulesPluginNames.push(transformations[modules]);
    }

    if (
      shouldTransformDynamicImport &&
      shouldTransformESM &&
      modules !== "umd"
    ) {
      modulesPluginNames.push("proposal-dynamic-import");
    } else {
      if (shouldTransformDynamicImport) {
        console.warn(
          "Dynamic import can only be supported when transforming ES modules" +
            " to AMD, CommonJS or SystemJS. Only the parser plugin will be enabled.",
        );
      }
      modulesPluginNames.push("syntax-dynamic-import");
    }
  } else {
    modulesPluginNames.push("syntax-dynamic-import");
  }

  if (shouldParseTopLevelAwait) {
    modulesPluginNames.push("syntax-top-level-await");
  }

  return modulesPluginNames;
};

export const getPolyfillPlugins = ({
  useBuiltIns,
  corejs,
  polyfillTargets,
  include,
  exclude,
  proposals,
  shippedProposals,
  regenerator,
  debug,
}: {
  useBuiltIns: BuiltInsOption,
  corejs: typeof SemVer | null | false,
  polyfillTargets: Targets,
  include: Set<string>,
  exclude: Set<string>,
  proposals: boolean,
  shippedProposals: boolean,
  regenerator: boolean,
  debug: boolean,
}) => {
  const polyfillPlugins = [];
  if (useBuiltIns === "usage" || useBuiltIns === "entry") {
    const pluginOptions = {
      corejs,
      polyfillTargets,
      include,
      exclude,
      proposals,
      shippedProposals,
      regenerator,
      debug,
    };

    if (corejs) {
      if (useBuiltIns === "usage") {
        if (corejs.major === 2) {
          polyfillPlugins.push([addCoreJS2UsagePlugin, pluginOptions]);
        } else {
          polyfillPlugins.push([addCoreJS3UsagePlugin, pluginOptions]);
        }
        if (regenerator) {
          polyfillPlugins.push([addRegeneratorUsagePlugin, pluginOptions]);
        }
      } else {
        if (corejs.major === 2) {
          polyfillPlugins.push([replaceCoreJS2EntryPlugin, pluginOptions]);
        } else {
          polyfillPlugins.push([replaceCoreJS3EntryPlugin, pluginOptions]);
          if (!regenerator) {
            polyfillPlugins.push([removeRegeneratorEntryPlugin, pluginOptions]);
          }
        }
      }
    }
  }
  return polyfillPlugins;
};

function supportsStaticESM(caller) {
  return !!(caller && caller.supportsStaticESM);
}

function supportsDynamicImport(caller) {
  return !!(caller && caller.supportsDynamicImport);
}

function supportsTopLevelAwait(caller) {
  return !!(caller && caller.supportsTopLevelAwait);
}

export default declare((api, opts) => {
  api.assertVersion(7);

  const {
    configPath,
    debug,
    exclude: optionsExclude,
    forceAllTransforms,
    ignoreBrowserslistConfig,
    include: optionsInclude,
    loose,
    modules,
    shippedProposals,
    spec,
    targets: optionsTargets,
    useBuiltIns,
    corejs: { version: corejs, proposals },
  } = normalizeOptions(opts);
  // TODO: remove this in next major
  let hasUglifyTarget = false;

  if (optionsTargets && optionsTargets.uglify) {
    hasUglifyTarget = true;
    delete optionsTargets.uglify;

    console.log("");
    console.log("The uglify target has been deprecated. Set the top level");
    console.log("option `forceAllTransforms: true` instead.");
    console.log("");
  }

  if (optionsTargets && optionsTargets.esmodules && optionsTargets.browsers) {
    console.log("");
    console.log(
      "@babel/preset-env: esmodules and browsers targets have been specified together.",
    );
    console.log(
      `\`browsers\` target, \`${optionsTargets.browsers}\` will be ignored.`,
    );
    console.log("");
  }

  const targets = getTargets(optionsTargets, {
    ignoreBrowserslistConfig,
    configPath,
  });
  const include = transformIncludesAndExcludes(optionsInclude);
  const exclude = transformIncludesAndExcludes(optionsExclude);

  const transformTargets = forceAllTransforms || hasUglifyTarget ? {} : targets;

  const modulesPluginNames = getModulesPluginNames({
    modules,
    transformations: moduleTransformations,
    // TODO: Remove the 'api.caller' check eventually. Just here to prevent
    // unnecessary breakage in the short term for users on older betas/RCs.
    shouldTransformESM:
      modules !== "auto" || !api.caller || !api.caller(supportsStaticESM),
    shouldTransformDynamicImport:
      modules !== "auto" || !api.caller || !api.caller(supportsDynamicImport),
    shouldParseTopLevelAwait: !api.caller || api.caller(supportsTopLevelAwait),
  });

  const pluginNames = filterItems(
    shippedProposals ? pluginList : pluginListWithoutProposals,
    include.plugins,
    exclude.plugins,
    transformTargets,
    modulesPluginNames,
    getOptionSpecificExcludesFor({ loose }),
    pluginSyntaxMap,
  );
  removeUnnecessaryItems(pluginNames, overlappingPlugins);

  const polyfillPlugins = getPolyfillPlugins({
    useBuiltIns,
    corejs,
    polyfillTargets: targets,
    include: include.builtIns,
    exclude: exclude.builtIns,
    proposals,
    shippedProposals,
    regenerator: pluginNames.has("transform-regenerator"),
    debug,
  });

  const pluginUseBuiltIns = useBuiltIns !== false;
  const plugins = Array.from(pluginNames)
    .map(pluginName => [
      getPlugin(pluginName),
      { spec, loose, useBuiltIns: pluginUseBuiltIns },
    ])
    .concat(polyfillPlugins);

  if (debug) {
    console.log("@babel/preset-env: `DEBUG` option");
    console.log("\nUsing targets:");
    console.log(JSON.stringify(prettifyTargets(targets), null, 2));
    console.log(`\nUsing modules transform: ${modules.toString()}`);
    console.log("\nUsing plugins:");
    pluginNames.forEach(pluginName => {
      logPluginOrPolyfill(pluginName, targets, pluginList);
    });

    if (!useBuiltIns) {
      console.log(
        "\nUsing polyfills: No polyfills were added, since the `useBuiltIns` option was not set.",
      );
    } else {
      // NOTE: Polyfill plugins are outputting debug info internally
      console.log(`\nUsing polyfills with \`${useBuiltIns}\` option:`);
    }
  }

  return { plugins };
});
