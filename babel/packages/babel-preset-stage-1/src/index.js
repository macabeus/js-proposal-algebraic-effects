export default function() {
  throw new Error(`
As of v7.0.0-beta.55, we've removed Babel's Stage presets.
Please consider reading our blog post on this decision at
https://babeljs.io/blog/2018/07/27/removing-babels-stage-presets
for more details. TL;DR is that it's more beneficial in the
  long run to explicitly add which proposals to use.

For a more automatic migration, we have updated babel-upgrade,
https://github.com/babel/babel-upgrade to do this for you with
"npx babel-upgrade".

If you want the same configuration as before:

{
  "plugins": [
    // Stage 1
    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-proposal-logical-assignment-operators",
    ["@babel/plugin-proposal-optional-chaining", { "loose": false }],
    ["@babel/plugin-proposal-pipeline-operator", { "proposal": "minimal" }],
    ["@babel/plugin-proposal-nullish-coalescing-operator", { "loose": false }],
    "@babel/plugin-proposal-do-expressions",

    // Stage 2
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    "@babel/plugin-proposal-function-sent",
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-proposal-numeric-separator",
    "@babel/plugin-proposal-throw-expressions",

    // Stage 3
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-syntax-import-meta",
    ["@babel/plugin-proposal-class-properties", { "loose": false }],
    "@babel/plugin-proposal-json-strings"
  ]
}

If you're using the same configuration across many separate projects,
keep in mind that you can also create your own custom presets with
whichever plugins and presets you're looking to use.

module.exports = function() {
  return {
    plugins: [
      require("@babel/plugin-syntax-dynamic-import"),
      [require("@babel/plugin-proposal-decorators"), { "legacy": true }],
      [require("@babel/plugin-proposal-class-properties"), { "loose": false }],
    ],
    presets: [
      // ...
    ],
  };
};
`);
}
