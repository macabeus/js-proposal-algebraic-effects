import path from "path";
import resolve from "resolve";
import { declare } from "@babel/helper-plugin-utils";
import { addDefault, isModule } from "@babel/helper-module-imports";
import { types as t } from "@babel/core";

import getCoreJS2Definitions from "./runtime-corejs2-definitions";
import getCoreJS3Definitions from "./runtime-corejs3-definitions";
import { typeAnnotationToString } from "./helpers";

function resolveAbsoluteRuntime(moduleName: string, dirname: string) {
  try {
    return path.dirname(
      resolve.sync(`${moduleName}/package.json`, { basedir: dirname }),
    );
  } catch (err) {
    if (err.code !== "MODULE_NOT_FOUND") throw err;

    throw Object.assign(
      new Error(`Failed to resolve "${moduleName}" relative to "${dirname}"`),
      {
        code: "BABEL_RUNTIME_NOT_FOUND",
        runtime: moduleName,
        dirname,
      },
    );
  }
}

function supportsStaticESM(caller) {
  return !!(caller && caller.supportsStaticESM);
}

export default declare((api, options, dirname) => {
  api.assertVersion(7);

  const {
    corejs,
    helpers: useRuntimeHelpers = true,
    regenerator: useRuntimeRegenerator = true,
    useESModules = false,
    version: runtimeVersion = "7.0.0-beta.0",
    absoluteRuntime = false,
  } = options;

  let proposals = false;
  let rawVersion;

  if (typeof corejs === "object" && corejs !== null) {
    rawVersion = corejs.version;
    proposals = Boolean(corejs.proposals);
  } else {
    rawVersion = corejs;
  }

  const corejsVersion = rawVersion ? Number(rawVersion) : false;

  if (![false, 2, 3].includes(corejsVersion)) {
    throw new Error(
      `The \`core-js\` version must be false, 2 or 3, but got ${JSON.stringify(
        rawVersion,
      )}.`,
    );
  }

  if (proposals && (!corejsVersion || corejsVersion < 3)) {
    throw new Error(
      "The 'proposals' option is only supported when using 'corejs: 3'",
    );
  }

  if (typeof useRuntimeRegenerator !== "boolean") {
    throw new Error(
      "The 'regenerator' option must be undefined, or a boolean.",
    );
  }

  if (typeof useRuntimeHelpers !== "boolean") {
    throw new Error("The 'helpers' option must be undefined, or a boolean.");
  }

  if (typeof useESModules !== "boolean" && useESModules !== "auto") {
    throw new Error(
      "The 'useESModules' option must be undefined, or a boolean, or 'auto'.",
    );
  }

  if (
    typeof absoluteRuntime !== "boolean" &&
    typeof absoluteRuntime !== "string"
  ) {
    throw new Error(
      "The 'absoluteRuntime' option must be undefined, a boolean, or a string.",
    );
  }

  if (typeof runtimeVersion !== "string") {
    throw new Error(`The 'version' option must be a version string.`);
  }

  function has(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
  }

  function hasMapping(methods, name) {
    return has(methods, name) && (proposals || methods[name].stable);
  }

  function hasStaticMapping(object, method) {
    return (
      has(StaticProperties, object) &&
      hasMapping(StaticProperties[object], method)
    );
  }

  function isNamespaced(path) {
    const binding = path.scope.getBinding(path.node.name);
    if (!binding) return false;
    return binding.path.isImportNamespaceSpecifier();
  }

  function maybeNeedsPolyfill(path, methods, name) {
    if (isNamespaced(path.get("object"))) return false;
    if (!methods[name].types) return true;

    const typeAnnotation = path.get("object").getTypeAnnotation();
    const type = typeAnnotationToString(typeAnnotation);
    if (!type) return true;

    return methods[name].types.some(name => name === type);
  }

  function resolvePropertyName(path, computed) {
    const { node } = path;
    if (!computed) return node.name;
    if (path.isStringLiteral()) return node.value;
    const result = path.evaluate();
    return result.value;
  }

  if (has(options, "useBuiltIns")) {
    if (options.useBuiltIns) {
      throw new Error(
        "The 'useBuiltIns' option has been removed. The @babel/runtime " +
          "module now uses builtins by default.",
      );
    } else {
      throw new Error(
        "The 'useBuiltIns' option has been removed. Use the 'corejs'" +
          "option to polyfill with `core-js` via @babel/runtime.",
      );
    }
  }

  if (has(options, "polyfill")) {
    if (options.polyfill === false) {
      throw new Error(
        "The 'polyfill' option has been removed. The @babel/runtime " +
          "module now skips polyfilling by default.",
      );
    } else {
      throw new Error(
        "The 'polyfill' option has been removed. Use the 'corejs'" +
          "option to polyfill with `core-js` via @babel/runtime.",
      );
    }
  }

  if (has(options, "moduleName")) {
    throw new Error(
      "The 'moduleName' option has been removed. @babel/transform-runtime " +
        "no longer supports arbitrary runtimes. If you were using this to " +
        "set an absolute path for Babel's standard runtimes, please use the " +
        "'absoluteRuntime' option.",
    );
  }

  const esModules =
    useESModules === "auto" ? api.caller(supportsStaticESM) : useESModules;

  const injectCoreJS2 = corejsVersion === 2;
  const injectCoreJS3 = corejsVersion === 3;
  const injectCoreJS = corejsVersion !== false;

  const moduleName = injectCoreJS3
    ? "@babel/runtime-corejs3"
    : injectCoreJS2
    ? "@babel/runtime-corejs2"
    : "@babel/runtime";

  const corejsRoot = injectCoreJS3 && !proposals ? "core-js-stable" : "core-js";

  const { BuiltIns, StaticProperties, InstanceProperties } = (injectCoreJS2
    ? getCoreJS2Definitions
    : getCoreJS3Definitions)(runtimeVersion);

  const HEADER_HELPERS = ["interopRequireWildcard", "interopRequireDefault"];

  let modulePath = moduleName;
  if (absoluteRuntime !== false) {
    modulePath = resolveAbsoluteRuntime(
      moduleName,
      path.resolve(dirname, absoluteRuntime === true ? "." : absoluteRuntime),
    );
  }

  return {
    name: "transform-runtime",

    pre(file) {
      if (useRuntimeHelpers) {
        file.set("helperGenerator", name => {
          // If the helper didn't exist yet at the version given, we bail
          // out and let Babel either insert it directly, or throw an error
          // so that plugins can handle that case properly.
          if (
            file.availableHelper &&
            !file.availableHelper(name, runtimeVersion)
          ) {
            return;
          }

          const isInteropHelper = HEADER_HELPERS.indexOf(name) !== -1;

          // Explicitly set the CommonJS interop helpers to their reserve
          // blockHoist of 4 so they are guaranteed to exist
          // when other things used them to import.
          const blockHoist =
            isInteropHelper && !isModule(file.path) ? 4 : undefined;

          const helpersDir =
            esModules && file.path.node.sourceType === "module"
              ? "helpers/esm"
              : "helpers";

          return this.addDefaultImport(
            `${modulePath}/${helpersDir}/${name}`,
            name,
            blockHoist,
          );
        });
      }

      const cache = new Map();

      this.addDefaultImport = (source, nameHint, blockHoist) => {
        // If something on the page adds a helper when the file is an ES6
        // file, we can't reused the cached helper name after things have been
        // transformed because it has almost certainly been renamed.
        const cacheKey = isModule(file.path);
        const key = `${source}:${nameHint}:${cacheKey || ""}`;

        let cached = cache.get(key);
        if (cached) {
          cached = t.cloneNode(cached);
        } else {
          cached = addDefault(file.path, source, {
            importedInterop: "uncompiled",
            nameHint,
            blockHoist,
          });

          cache.set(key, cached);
        }
        return cached;
      };
    },

    visitor: {
      ReferencedIdentifier(path) {
        const { node, parent, scope } = path;
        const { name } = node;

        // transform `regeneratorRuntime`
        if (name === "regeneratorRuntime" && useRuntimeRegenerator) {
          path.replaceWith(
            this.addDefaultImport(
              `${modulePath}/regenerator`,
              "regeneratorRuntime",
            ),
          );
          return;
        }

        if (!injectCoreJS) return;

        if (t.isMemberExpression(parent)) return;
        if (!hasMapping(BuiltIns, name)) return;
        if (scope.getBindingIdentifier(name)) return;

        // transform global built-ins like `Symbol()`, `new Promise`
        path.replaceWith(
          this.addDefaultImport(
            `${modulePath}/${corejsRoot}/${BuiltIns[name].path}`,
            name,
          ),
        );
      },

      CallExpression(path) {
        if (!injectCoreJS) return;

        const { node } = path;
        const { callee } = node;

        if (!t.isMemberExpression(callee)) return;

        const { object } = callee;
        const propertyName = resolvePropertyName(
          path.get("callee.property"),
          callee.computed,
        );

        // transform calling instance methods like `something.includes()`
        if (injectCoreJS3 && !hasStaticMapping(object.name, propertyName)) {
          if (
            hasMapping(InstanceProperties, propertyName) &&
            maybeNeedsPolyfill(
              path.get("callee"),
              InstanceProperties,
              propertyName,
            )
          ) {
            let context1, context2;
            if (t.isIdentifier(object)) {
              context1 = object;
              context2 = t.cloneNode(object);
            } else {
              context1 = path.scope.generateDeclaredUidIdentifier("context");
              context2 = t.assignmentExpression("=", context1, object);
            }
            node.callee = t.memberExpression(
              t.callExpression(
                this.addDefaultImport(
                  `${moduleName}/${corejsRoot}/instance/${InstanceProperties[propertyName].path}`,
                  `${propertyName}InstanceProperty`,
                ),
                [context2],
              ),
              t.identifier("call"),
            );
            node.arguments.unshift(context1);
            return;
          }
        }
        // we can't compile this
        if (node.arguments.length) return;
        if (!callee.computed) return;
        if (!path.get("callee.property").matchesPattern("Symbol.iterator")) {
          return;
        }

        // transform `something[Symbol.iterator]()` to calling `getIterator(something)` helper
        path.replaceWith(
          t.callExpression(
            this.addDefaultImport(
              `${modulePath}/core-js/get-iterator`,
              "getIterator",
            ),
            [object],
          ),
        );
      },

      // transform `Symbol.iterator in something` to calling `isIterable(something)` helper
      BinaryExpression(path) {
        if (!injectCoreJS) return;
        if (path.node.operator !== "in") return;
        if (!path.get("left").matchesPattern("Symbol.iterator")) return;

        path.replaceWith(
          t.callExpression(
            this.addDefaultImport(
              `${modulePath}/core-js/is-iterable`,
              "isIterable",
            ),
            [path.node.right],
          ),
        );
      },

      // transform static built-ins methods like `Array.from`
      MemberExpression: {
        enter(path) {
          if (!injectCoreJS) return;
          if (!path.isReferenced()) return;

          const { node } = path;
          const { object } = node;

          if (!t.isReferenced(object, node)) return;

          // transform `something[Symbol.iterator]` to calling `getIteratorMethod(something)` helper
          if (
            !injectCoreJS2 &&
            node.computed &&
            path.get("property").matchesPattern("Symbol.iterator")
          ) {
            path.replaceWith(
              t.callExpression(
                this.addDefaultImport(
                  `${moduleName}/core-js/get-iterator-method`,
                  "getIteratorMethod",
                ),
                [object],
              ),
            );
            return;
          }

          const objectName = object.name;
          const propertyName = resolvePropertyName(
            path.get("property"),
            node.computed,
          );
          // doesn't reference the global
          if (
            path.scope.getBindingIdentifier(objectName) ||
            !hasStaticMapping(objectName, propertyName)
          ) {
            // transform getting of instance methods like `method = something.includes`
            if (
              injectCoreJS3 &&
              hasMapping(InstanceProperties, propertyName) &&
              maybeNeedsPolyfill(path, InstanceProperties, propertyName)
            ) {
              path.replaceWith(
                t.callExpression(
                  this.addDefaultImport(
                    `${moduleName}/${corejsRoot}/instance/${InstanceProperties[propertyName].path}`,
                    `${propertyName}InstanceProperty`,
                  ),
                  [object],
                ),
              );
            }
            return;
          }

          path.replaceWith(
            this.addDefaultImport(
              `${modulePath}/${corejsRoot}/${StaticProperties[objectName][propertyName].path}`,
              `${objectName}$${propertyName}`,
            ),
          );
        },

        exit(path) {
          if (!injectCoreJS) return;
          if (!path.isReferenced()) return;
          if (path.node.computed) return;

          const { node } = path;
          const { object } = node;
          const { name } = object;

          if (!hasMapping(BuiltIns, name)) return;
          if (path.scope.getBindingIdentifier(name)) return;

          path.replaceWith(
            t.memberExpression(
              this.addDefaultImport(
                `${modulePath}/${corejsRoot}/${BuiltIns[name].path}`,
                name,
              ),
              node.property,
            ),
          );
        },
      },
    },
  };
});
