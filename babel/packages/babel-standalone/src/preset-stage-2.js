// @flow
import presetStage3 from "./preset-stage-3";
import * as babelPlugins from "./generated/plugins";

export default (_: any, opts: Object = {}) => {
  const {
    loose = false,
    useBuiltIns = false,
    decoratorsLegacy = false,
    decoratorsBeforeExport,
  } = opts;

  return {
    presets: [[presetStage3, { loose, useBuiltIns }]],
    plugins: [
      [
        babelPlugins.proposalDecorators,
        { legacy: decoratorsLegacy, decoratorsBeforeExport },
      ],
      babelPlugins.proposalFunctionSent,
      babelPlugins.proposalExportNamespaceFrom,
      babelPlugins.proposalNumericSeparator,
      babelPlugins.proposalThrowExpressions,
    ],
  };
};
