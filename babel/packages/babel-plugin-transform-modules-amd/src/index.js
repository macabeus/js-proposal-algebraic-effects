import { declare } from "@babel/helper-plugin-utils";
import {
  isModule,
  rewriteModuleStatementsAndPrepareHeader,
  hasExports,
  isSideEffectImport,
  buildNamespaceInitStatements,
  ensureStatementsHoisted,
  wrapInterop,
} from "@babel/helper-module-transforms";
import { template, types as t } from "@babel/core";
import { getImportSource } from "babel-plugin-dynamic-import-node/utils";

const buildWrapper = template(`
  define(MODULE_NAME, AMD_ARGUMENTS, function(IMPORT_NAMES) {
  })
`);

const buildAnonymousWrapper = template(`
  define(["require"], function(REQUIRE) {
  })
`);

function injectWrapper(path, wrapper) {
  const { body, directives } = path.node;
  path.node.directives = [];
  path.node.body = [];
  const amdWrapper = path.pushContainer("body", wrapper)[0];
  const amdFactory = amdWrapper
    .get("expression.arguments")
    .filter(arg => arg.isFunctionExpression())[0]
    .get("body");
  amdFactory.pushContainer("directives", directives);
  amdFactory.pushContainer("body", body);
}

export default declare((api, options) => {
  api.assertVersion(7);

  const { loose, allowTopLevelThis, strict, strictMode, noInterop } = options;
  return {
    name: "transform-modules-amd",

    pre() {
      this.file.set("@babel/plugin-transform-modules-*", "amd");
    },

    visitor: {
      CallExpression(path, state) {
        if (!this.file.has("@babel/plugin-proposal-dynamic-import")) return;
        if (!path.get("callee").isImport()) return;

        let { requireId, resolveId, rejectId } = state;
        if (!requireId) {
          requireId = path.scope.generateUidIdentifier("require");
          state.requireId = requireId;
        }
        if (!resolveId || !rejectId) {
          resolveId = path.scope.generateUidIdentifier("resolve");
          rejectId = path.scope.generateUidIdentifier("reject");
          state.resolveId = resolveId;
          state.rejectId = rejectId;
        }

        let result = t.identifier("imported");
        if (!noInterop) result = wrapInterop(path, result, "namespace");

        path.replaceWith(
          template.expression.ast`
            new Promise((${resolveId}, ${rejectId}) =>
              ${requireId}(
                [${getImportSource(t, path.node)}],
                imported => ${resolveId}(${result}),
                ${rejectId}
              )
            )`,
        );
      },

      Program: {
        exit(path, { requireId }) {
          if (!isModule(path)) {
            if (requireId) {
              injectWrapper(
                path,
                buildAnonymousWrapper({ REQUIRE: requireId }),
              );
            }
            return;
          }

          const amdArgs = [];
          const importNames = [];
          if (requireId) {
            amdArgs.push(t.stringLiteral("require"));
            importNames.push(requireId);
          }

          let moduleName = this.getModuleName();
          if (moduleName) moduleName = t.stringLiteral(moduleName);

          const { meta, headers } = rewriteModuleStatementsAndPrepareHeader(
            path,
            {
              loose,
              strict,
              strictMode,
              allowTopLevelThis,
              noInterop,
            },
          );

          if (hasExports(meta)) {
            amdArgs.push(t.stringLiteral("exports"));

            importNames.push(t.identifier(meta.exportName));
          }

          for (const [source, metadata] of meta.source) {
            amdArgs.push(t.stringLiteral(source));
            importNames.push(t.identifier(metadata.name));

            if (!isSideEffectImport(metadata)) {
              const interop = wrapInterop(
                path,
                t.identifier(metadata.name),
                metadata.interop,
              );
              if (interop) {
                const header = t.expressionStatement(
                  t.assignmentExpression(
                    "=",
                    t.identifier(metadata.name),
                    interop,
                  ),
                );
                header.loc = metadata.loc;
                headers.push(header);
              }
            }

            headers.push(
              ...buildNamespaceInitStatements(meta, metadata, loose),
            );
          }

          ensureStatementsHoisted(headers);
          path.unshiftContainer("body", headers);

          injectWrapper(
            path,
            buildWrapper({
              MODULE_NAME: moduleName,

              AMD_ARGUMENTS: t.arrayExpression(amdArgs),
              IMPORT_NAMES: importNames,
            }),
          );
        },
      },
    },
  };
});
