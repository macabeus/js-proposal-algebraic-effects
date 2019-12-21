// build-babel-standalone in CI coverage tests is skipped, so we skip this test as well
(process.env.TEST_TYPE === "cov" ? describe.skip : describe)(
  "babel-preset-env-standalone",
  () => {
    const Babel = require("@babel/standalone/babel");
    jest.mock("Babel", () => require("@babel/standalone/babel"), {
      virtual: true,
    });
    require("../babel-preset-env");

    it("works w/o targets", () => {
      const output = Babel.transform("const a = 1;", {
        sourceType: "script",
        presets: ["env"],
      }).code;
      expect(output).toBe("var a = 1;");
    });

    it("doesn't transpile `const` with chrome 60", () => {
      const output = Babel.transform("const a = 1;", {
        sourceType: "script",
        presets: [
          [
            "env",
            {
              targets: {
                chrome: 60,
              },
            },
          ],
        ],
      }).code;
      expect(output).toBe("const a = 1;");
    });

    it("transpiles `const` with chrome 60 and preset-es2015", () => {
      const output = Babel.transform("const a = 1;", {
        sourceType: "script",
        presets: [
          [
            "env",
            {
              targets: {
                chrome: 60,
              },
            },
          ],
          "es2015",
        ],
      }).code;
      expect(output).toBe("var a = 1;");
    });

    it("uses transform-new-targets plugin", () => {
      const output = Babel.transform("function Foo() {new.target}", {
        sourceType: "script",
        presets: ["env"],
      }).code;
      expect(output).toBe(
        "function Foo() {\n  this instanceof Foo ? this.constructor : void 0;\n}",
      );
    });
  },
);
