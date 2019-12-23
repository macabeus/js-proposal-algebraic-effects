import { declare } from "@babel/helper-plugin-utils";
import transformReactJSX from "@babel/plugin-transform-react-jsx";
import transformReactDisplayName from "@babel/plugin-transform-react-display-name";
import transformReactJSXSource from "@babel/plugin-transform-react-jsx-source";
import transformReactJSXSelf from "@babel/plugin-transform-react-jsx-self";

export default declare((api, opts) => {
  api.assertVersion(7);

  const pragma = opts.pragma || "React.createElement";
  const pragmaFrag = opts.pragmaFrag || "React.Fragment";
  const throwIfNamespace =
    opts.throwIfNamespace === undefined ? true : !!opts.throwIfNamespace;
  const development = !!opts.development;
  const useBuiltIns = !!opts.useBuiltIns;
  const { useSpread } = opts;

  if (typeof development !== "boolean") {
    throw new Error(
      "@babel/preset-react 'development' option must be a boolean.",
    );
  }

  return {
    plugins: [
      [
        transformReactJSX,
        { pragma, pragmaFrag, throwIfNamespace, useBuiltIns, useSpread },
      ],
      transformReactDisplayName,

      development && transformReactJSXSource,
      development && transformReactJSXSelf,
    ].filter(Boolean),
  };
});
