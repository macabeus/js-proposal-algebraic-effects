const path = require("path");
const fs = require("fs").promises;
const ts = require("typescript");
const TestRunner = require("../utils/parser-test-runner");

async function* loadTests(dir) {
  const names = await fs.readdir(dir);

  for (const name of names) {
    const contents = await fs.readFile(path.join(dir, name), "utf8");
    yield { name, contents };
  }
}

const plugins = [
  "typescript",
  "classProperties",
  "decorators-legacy",
  "bigInt",
  "dynamicImport",
];

const runner = new TestRunner({
  testDir: path.join(
    __dirname,
    "../../../build/typescript/tests/cases/compiler"
  ),
  whitelist: path.join(__dirname, "whitelist.txt"),
  logInterval: 50,
  shouldUpdate: process.argv.includes("--update-whitelist"),

  async *getTests() {
    for await (const test of loadTests(this.testDir)) {
      const isTSX = test.name.slice(-4) === ".tsx";
      const ast = ts.createSourceFile(
        test.name,
        test.contents,
        ts.ScriptTarget.Latest,
        false,
        isTSX ? ts.ScriptKind.TSX : ts.ScriptKind.TS
      );

      yield {
        contents: test.contents,
        fileName: test.name,
        id: test.name,
        expectedError: ast.parseDiagnostics.length > 0,
        sourceType: "module",
        plugins: isTSX ? plugins.concat("jsx") : plugins,
      };
    }
  },
});

runner.run().catch(err => {
  console.error(err);
  process.exitCode = 1;
});
