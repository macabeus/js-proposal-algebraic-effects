// @flow

import corejs2Polyfills from "../../../data/corejs2-built-ins.json";
import getPlatformSpecificDefaultFor from "./get-platform-specific-default";
import filterItems from "../../filter-items";
import {
  BuiltIns,
  StaticProperties,
  InstanceProperties,
} from "./built-in-definitions";
import {
  createImport,
  getType,
  has,
  isPolyfillSource,
  getImportSource,
  getRequireSource,
  isNamespaced,
} from "../../utils";
import { logUsagePolyfills } from "../../debug";

import type { InternalPluginOptions } from "../../types";
import type { NodePath } from "@babel/traverse";

const NO_DIRECT_POLYFILL_IMPORT = `
  When setting \`useBuiltIns: 'usage'\`, polyfills are automatically imported when needed.
  Please remove the \`import '@babel/polyfill'\` call or use \`useBuiltIns: 'entry'\` instead.`;

export default function(
  { types: t }: { types: Object },
  { include, exclude, polyfillTargets, debug }: InternalPluginOptions,
) {
  const polyfills = filterItems(
    corejs2Polyfills,
    include,
    exclude,
    polyfillTargets,
    getPlatformSpecificDefaultFor(polyfillTargets),
  );

  const addAndRemovePolyfillImports = {
    ImportDeclaration(path: NodePath) {
      if (isPolyfillSource(getImportSource(path))) {
        console.warn(NO_DIRECT_POLYFILL_IMPORT);
        path.remove();
      }
    },

    Program(path: NodePath) {
      path.get("body").forEach(bodyPath => {
        if (isPolyfillSource(getRequireSource(bodyPath))) {
          console.warn(NO_DIRECT_POLYFILL_IMPORT);
          bodyPath.remove();
        }
      });
    },

    // Symbol()
    // new Promise
    ReferencedIdentifier({ node: { name }, parent, scope }: NodePath) {
      if (t.isMemberExpression(parent)) return;
      if (!has(BuiltIns, name)) return;
      if (scope.getBindingIdentifier(name)) return;

      const BuiltInDependencies = BuiltIns[name];
      this.addUnsupported(BuiltInDependencies);
    },

    // arr[Symbol.iterator]()
    CallExpression(path: NodePath) {
      // we can't compile this
      if (path.node.arguments.length) return;

      const callee = path.node.callee;

      if (!t.isMemberExpression(callee)) return;
      if (!callee.computed) return;
      if (!path.get("callee.property").matchesPattern("Symbol.iterator")) {
        return;
      }

      this.addImport("web.dom.iterable");
    },

    // Symbol.iterator in arr
    BinaryExpression(path: NodePath) {
      if (path.node.operator !== "in") return;
      if (!path.get("left").matchesPattern("Symbol.iterator")) return;

      this.addImport("web.dom.iterable");
    },

    // yield*
    YieldExpression(path: NodePath) {
      if (path.node.delegate) {
        this.addImport("web.dom.iterable");
      }
    },

    // Array.from
    MemberExpression: {
      enter(path: NodePath) {
        const { node } = path;
        const { object, property } = node;

        // ignore namespace
        if (isNamespaced(path.get("object"))) return;

        let evaluatedPropType = object.name;
        let propertyName = "";
        let instanceType = "";

        if (node.computed) {
          if (t.isStringLiteral(property)) {
            propertyName = property.value;
          } else {
            const result = path.get("property").evaluate();
            if (result.confident && result.value) {
              propertyName = result.value;
            }
          }
        } else {
          propertyName = property.name;
        }

        if (path.scope.getBindingIdentifier(object.name)) {
          const result = path.get("object").evaluate();
          if (result.value) {
            instanceType = getType(result.value);
          } else if (result.deopt && result.deopt.isIdentifier()) {
            evaluatedPropType = result.deopt.node.name;
          }
        }

        if (has(StaticProperties, evaluatedPropType)) {
          const BuiltInProperties = StaticProperties[evaluatedPropType];
          if (has(BuiltInProperties, propertyName)) {
            const StaticPropertyDependencies = BuiltInProperties[propertyName];
            this.addUnsupported(StaticPropertyDependencies);
          }
        }

        if (has(InstanceProperties, propertyName)) {
          let InstancePropertyDependencies = InstanceProperties[propertyName];
          if (instanceType) {
            InstancePropertyDependencies = InstancePropertyDependencies.filter(
              module => module.includes(instanceType),
            );
          }
          this.addUnsupported(InstancePropertyDependencies);
        }
      },

      // Symbol.match
      exit(path: NodePath) {
        const { name } = path.node.object;

        if (!has(BuiltIns, name)) return;
        if (path.scope.getBindingIdentifier(name)) return;

        const BuiltInDependencies = BuiltIns[name];
        this.addUnsupported(BuiltInDependencies);
      },
    },

    // var { repeat, startsWith } = String
    VariableDeclarator(path: NodePath) {
      const { node } = path;
      const { id, init } = node;

      if (!t.isObjectPattern(id)) return;

      // doesn't reference the global
      if (init && path.scope.getBindingIdentifier(init.name)) return;

      for (const { key } of id.properties) {
        if (
          !node.computed &&
          t.isIdentifier(key) &&
          has(InstanceProperties, key.name)
        ) {
          const InstancePropertyDependencies = InstanceProperties[key.name];
          this.addUnsupported(InstancePropertyDependencies);
        }
      }
    },
  };

  return {
    name: "corejs2-usage",
    pre({ path }: { path: NodePath }) {
      this.polyfillsSet = new Set();

      this.addImport = function(builtIn) {
        if (!this.polyfillsSet.has(builtIn)) {
          this.polyfillsSet.add(builtIn);
          createImport(path, builtIn);
        }
      };

      this.addUnsupported = function(builtIn) {
        const modules = Array.isArray(builtIn) ? builtIn : [builtIn];
        for (const module of modules) {
          if (polyfills.has(module)) {
            this.addImport(module);
          }
        }
      };
    },
    post() {
      if (debug) {
        logUsagePolyfills(
          this.polyfillsSet,
          this.file.opts.filename,
          polyfillTargets,
          corejs2Polyfills,
        );
      }
    },
    visitor: addAndRemovePolyfillImports,
  };
}
