import eslint from "eslint";
import fs from "fs";
import path from "path";
import * as parser from "../src";

eslint.linter.defineParser("current-babel-eslint", parser);

const paths = {
  fixtures: path.join(__dirname, "fixtures", "rules"),
};

const encoding = "utf8";
const errorLevel = 2;

const baseEslintOpts = {
  parser: "current-babel-eslint",
  parserOptions: {
    sourceType: "script",
    requireConfigFile: false,
    babelOptions: { configFile: false }
  },
};

/**
 * Load a fixture and run eslint.linter.verify() on it.
 * Pass the return value to done().
 * @param object opts
 * @param function done
 */
function lint(opts, done) {
  readFixture(opts.fixture, (err, src) => {
    if (err) return done(err);
    done(null, eslint.linter.verify(src, opts.eslint));
  });
}

/**
 * Read a fixture file, passing the content to done().
 * @param string|array id
 * @param function done
 */
function readFixture(id, done) {
  if (Array.isArray(id)) id = path.join.apply(path, id);
  if (!path.extname(id)) id += ".js";
  fs.readFile(path.join(paths.fixtures, id), encoding, done);
}
// readFixture

describe("Rules:", () => {
  describe("`strict`", strictSuite);
});
// describe

function strictSuite() {
  const ruleId = "strict";

  describe("when set to 'never'", () => {
    const eslintOpts = Object.assign({}, baseEslintOpts, {
      rules: {},
    });
    eslintOpts.rules[ruleId] = [errorLevel, "never"];

    ["global-with", "function-with"].forEach(fixture => {
      it(`should error on ${fixture.match(/^[^-]+/)[0]} directive`, done => {
        lint(
          {
            fixture: ["strict", fixture],
            eslint: eslintOpts,
          },
          (err, report) => {
            if (err) return done(err);
            expect(report[0].ruleId).toBe(ruleId);
            done();
          },
        );
      });
      // it
    });
  });
  // describe

  describe("when set to 'global'", () => {
    const eslintOpts = Object.assign({}, baseEslintOpts, {
      rules: {},
    });
    eslintOpts.rules[ruleId] = [errorLevel, "global"];

    it("shouldn't error on single global directive", done => {
      lint(
        {
          fixture: ["strict", "global-with"],
          eslint: eslintOpts,
        },
        (err, report) => {
          if (err) return done(err);
          expect(report.length).toBe(0);
          done();
        },
      );
    });
    // it

    it("should error twice on global directive: no and function directive: yes", done => {
      lint(
        {
          fixture: ["strict", "function-with"],
          eslint: eslintOpts,
        },
        (err, report) => {
          if (err) return done(err);
          [0, 1].forEach(i => {
            expect(report[0].ruleId).toBe(ruleId);
          });
          done();
        },
      );
    });
    // it

    it("should error on function directive", done => {
      lint(
        {
          fixture: ["strict", "global-with-function-with"],
          eslint: eslintOpts,
        },
        (err, report) => {
          if (err) return done(err);
          expect(report[0].ruleId).toBe(ruleId);
          // This is to make sure the test fails prior to adapting Babel AST
          // directive representation to ESLint format. Otherwise it reports an
          // error for missing global directive that masquerades as the expected
          // result of the previous assertion.
          expect(report[0].nodeType).not.toBe("Program");
          done();
        },
      );
    });
    // it

    it("should error on no directive", done => {
      lint(
        {
          fixture: ["strict", "none"],
          eslint: eslintOpts,
        },
        (err, report) => {
          if (err) return done(err);
          expect(report[0].ruleId).toBe(ruleId);
          done();
        },
      );
    });
    // it
  });
  // describe

  describe("when set to 'function'", () => {
    const eslintOpts = Object.assign({}, baseEslintOpts, {
      rules: {},
    });
    eslintOpts.rules[ruleId] = [errorLevel, "function"];

    it("shouldn't error on single function directive", done => {
      lint(
        {
          fixture: ["strict", "function-with"],
          eslint: eslintOpts,
        },
        (err, report) => {
          if (err) return done(err);
          expect(report.length).toBe(0);
          done();
        },
      );
    });
    // it

    it("should error twice on function directive: no and global directive: yes", done => {
      lint(
        {
          fixture: ["strict", "global-with-function-without"],
          eslint: eslintOpts,
        },
        (err, report) => {
          if (err) return done(err);
          [0, 1].forEach(i => {
            expect(report[i].ruleId).toBe(ruleId);
          });
          done();
        },
      );
    });
    // it

    it("should error on only global directive", done => {
      lint(
        {
          fixture: ["strict", "global-with"],
          eslint: eslintOpts,
        },
        (err, report) => {
          if (err) return done(err);
          expect(report[0].ruleId).toBe(ruleId);
          done();
        },
      );
    });
    // it

    it("should error on extraneous global directive", done => {
      lint(
        {
          fixture: ["strict", "global-with-function-with"],
          eslint: eslintOpts,
        },
        (err, report) => {
          if (err) return done(err);
          expect(report[0].ruleId).toBe(ruleId);
          expect(report[0].nodeType.indexOf("Function")).toBe(-1);
          done();
        },
      );
    });
    // it
  });
}

describe("https://github.com/babel/babel-eslint/issues/558", () => {
  it("doesn't crash with eslint-plugin-import", () => {
    const engine = new eslint.CLIEngine({ ignore: false });
    const files = ["a.js", "b.js", "c.js"];
    let fileWithPath = files.map(file =>
      path.resolve(__dirname, `./fixtures/eslint-plugin-import/${file}`),
    );
    engine.executeOnFiles(fileWithPath);
  });
});
