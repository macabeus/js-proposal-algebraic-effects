"use strict";

module.exports = function(api) {
  const env = api.env();

  const includeCoverage = process.env.BABEL_COVERAGE === "true";

  const envOptsNoTargets = {
    loose: true,
    modules: false,
    exclude: ["transform-typeof-symbol"],
  };
  const envOpts = Object.assign({}, envOptsNoTargets);

  let convertESM = true;
  let ignoreLib = true;
  const nodeVersion = "6.9";
  // The vast majority of our src files are modules, but we use
  // unambiguous to keep things simple until we get around to renaming
  // the modules to be more easily distinguished from CommonJS
  const unambiguousSources = [
    "packages/*/src",
    "packages/*/test",
    "codemods/*/src",
    "codemods/*/test",
    "eslint/*/src",
    "eslint/*/test",
  ];

  switch (env) {
    // Configs used during bundling builds.
    case "rollup":
      convertESM = false;
      ignoreLib = false;
      // rollup-commonjs will converts node_modules to ESM
      unambiguousSources.push(
        "**/node_modules",
        // todo: remove this after it is rewritten into ESM
        "packages/babel-preset-env/data"
      );
      envOpts.targets = {
        node: nodeVersion,
      };
      break;
    case "standalone":
      convertESM = false;
      ignoreLib = false;
      unambiguousSources.push(
        "**/node_modules",
        "packages/babel-preset-env/data"
      );
      // targets to browserslists: defaults
      break;
    case "production":
      // Config during builds before publish.
      envOpts.targets = {
        node: nodeVersion,
      };
      break;
    case "development":
      envOpts.debug = true;
      envOpts.targets = {
        node: "current",
      };
      break;
    case "test":
      envOpts.targets = {
        node: "current",
      };
      break;
  }

  const config = {
    // Our dependencies are all standard CommonJS, along with all sorts of
    // other random files in Babel's codebase, so we use script as the default,
    // and then mark actual modules as modules farther down.
    sourceType: "script",
    comments: false,
    ignore: [
      // These may not be strictly necessary with the newly-limited scope of
      // babelrc searching, but including them for now because we had them
      // in our .babelignore before.
      "packages/*/test/fixtures",
      ignoreLib ? "packages/*/lib" : null,
      "packages/babel-standalone/babel.js",
      "packages/babel-preset-env-standalone/babel-preset-env.js",
    ].filter(Boolean),
    presets: [["@babel/env", envOpts]],
    plugins: [
      // TODO: Use @babel/preset-flow when
      // https://github.com/babel/babel/issues/7233 is fixed
      "@babel/plugin-transform-flow-strip-types",
      ["@babel/proposal-class-properties", { loose: true }],
      "@babel/proposal-export-namespace-from",
      "@babel/proposal-numeric-separator",
      [
        "@babel/proposal-object-rest-spread",
        { useBuiltIns: true, loose: true },
      ],
      ["@babel/plugin-proposal-optional-chaining", { loose: true }],
      ["@babel/plugin-proposal-nullish-coalescing-operator", { loose: true }],

      convertESM ? "@babel/transform-modules-commonjs" : null,
    ].filter(Boolean),
    overrides: [
      {
        test: "packages/babel-parser",
        plugins: [
          "babel-plugin-transform-charcodes",
          ["@babel/transform-for-of", { assumeArray: true }],
        ],
      },
      {
        test: ["./packages/babel-cli", "./packages/babel-core"],
        plugins: [
          // Explicitly use the lazy version of CommonJS modules.
          convertESM
            ? ["@babel/transform-modules-commonjs", { lazy: true }]
            : null,
        ].filter(Boolean),
      },
      {
        test: "./packages/babel-polyfill",
        presets: [["@babel/env", envOptsNoTargets]],
      },
      {
        test: unambiguousSources,
        sourceType: "unambiguous",
      },
    ].filter(Boolean),
  };

  // we need to do this as long as we do not test everything from source
  if (includeCoverage) {
    config.auxiliaryCommentBefore = "istanbul ignore next";
    config.plugins.push("babel-plugin-istanbul");
  }

  return config;
};
