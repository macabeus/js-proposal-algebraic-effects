# Changelog

> **Tags:**
> - :boom:       [Breaking Change]
> - :eyeglasses: [Spec Compliance]
> - :rocket:     [New Feature]
> - :bug:        [Bug Fix]
> - :memo:       [Documentation]
> - :house:      [Internal]
> - :nail_care:  [Polish]

_Note: Gaps between patch versions are faulty, broken or test releases._

See [CHANGELOG - v4](/.github/CHANGELOG-v4.md), [CHANGELOG - v5](/.github/CHANGELOG-v5.md), and [CHANGELOG - v6](/.github/CHANGELOG-v6.md) for v4.x-v6.x changes.
See [CHANGELOG - 6to5](/.github/CHANGELOG-6to5.md) for the pre-4.0.0 version changelog.
See [Babylon's CHANGELOG](packages/babel-parser/CHANGELOG.md) for the Babylon pre-7.0.0-beta.29 version changelog.
See [`babel-eslint`'s releases](https://github.com/babel/babel-eslint/releases) for the changelog before `@babel/eslint-parser` 7.8.0.
See [`eslint-plugin-babel`'s releases](https://github.com/babel/eslint-plugin-babel/releases) for the changelog before `@babel/eslint-plugin` 7.8.0.

<!-- DO NOT CHANGE THESE COMMENTS - See .github/actions/trigger-github-release/update-changelog.js -->
<!-- insert-new-changelog-here -->
## v7.7.7 (2019-12-19)

#### :eyeglasses: Spec Compliance
* `babel-parser`
  * [#10576](https://github.com/babel/babel/pull/10576) [parser] validation for parentheses in the left-hand side of assignment expressions ([@boweihan](https://github.com/boweihan))

#### :bug: Bug Fix
* `babel-plugin-proposal-object-rest-spread`
  * [#10863](https://github.com/babel/babel/pull/10863) fix: add computed property support for object Ref ([@JLHwung](https://github.com/JLHwung))
* `babel-core`
  * [#10890](https://github.com/babel/babel/pull/10890) fix: skip merging large input sourcemaps ([@JLHwung](https://github.com/JLHwung))
  * [#10885](https://github.com/babel/babel/pull/10885) fix: avoid string copy when processing input source-map ([@JLHwung](https://github.com/JLHwung))
* `babel-node`
  * [#10871](https://github.com/babel/babel/pull/10871) Allow -r from node_modules with @babel/node ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-plugin-transform-parameters`
  * [#10053](https://github.com/babel/babel/pull/10053) Check shadow variable to identifier in default parameters ([@JLHwung](https://github.com/JLHwung))
* `babel-parser`
  * [#10828](https://github.com/babel/babel/pull/10828) @babel/eslint-parser: fix ImportExpression node to match ESTree spec  ([@kaicataldo](https://github.com/kaicataldo))
  * [#10827](https://github.com/babel/babel/pull/10827) @babel/eslint-parser: fix BigIntLiteral node to match ESTree spec ([@kaicataldo](https://github.com/kaicataldo))

#### :nail_care: Polish
* `babel-plugin-transform-react-jsx`
  * [#10868](https://github.com/babel/babel/pull/10868) Fix pragmaFrag spelling in error message ([@azizhk](https://github.com/azizhk))

#### :house: Internal
* `babel-generator`, `babel-plugin-proposal-pipeline-operator`, `babel-plugin-proposal-unicode-property-regex`, `babel-plugin-syntax-pipeline-operator`, `babel-plugin-transform-dotall-regex`, `babel-preset-env-standalone`, `babel-preset-typescript`, `babel-standalone`
  * [#10882](https://github.com/babel/babel/pull/10882) Ignore some files in npm package ([@JLHwung](https://github.com/JLHwung))
* Other
  * [#10874](https://github.com/babel/babel/pull/10874) chore: cache chocolatey installation temporary files ([@JLHwung](https://github.com/JLHwung))
  * [#10880](https://github.com/babel/babel/pull/10880) chore: add PR Intent checkbox [ci-skip] ([@JLHwung](https://github.com/JLHwung))
  * [#10870](https://github.com/babel/babel/pull/10870) chore: update babel-eslint to 11.0.0-beta.2 ([@JLHwung](https://github.com/JLHwung))
  * [#10848](https://github.com/babel/babel/pull/10848) Tune eslint packages test configuration ([@JLHwung](https://github.com/JLHwung))
* `babel-preset-env`
  * [#10873](https://github.com/babel/babel/pull/10873) chore: download compat-table when build-data is run ([@JLHwung](https://github.com/JLHwung))
  * [#10846](https://github.com/babel/babel/pull/10846) Update corejs fixtures ([@JLHwung](https://github.com/JLHwung))
  * [#10837](https://github.com/babel/babel/pull/10837) refactor: rewrite available-plugins to esm ([@JLHwung](https://github.com/JLHwung))
* `babel-parser`
  * [#10858](https://github.com/babel/babel/pull/10858) Properly serialize non-json values in parser tests ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-cli`, `babel-node`, `babel-register`
  * [#10847](https://github.com/babel/babel/pull/10847) Add missing dev dependencies ([@JLHwung](https://github.com/JLHwung))

#### :leftwards_arrow_with_hook: Revert
* `babel-plugin-transform-classes`, `babel-plugin-transform-regenerator`, `babel-preset-env`
  * [#10839](https://github.com/babel/babel/pull/10839) Use `async-to-generator` even when `regenerator` is enabled ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
## v7.7.6 (2019-12-08)

#### :house: Internal
* [#10836](https://github.com/babel/babel/pull/10836) chore: add PR Revert labels to changelog [ci-skip] ([@JLHwung](https://github.com/JLHwung))

#### :leftwards_arrow_with_hook: Revert
* `babel-plugin-transform-modules-commonjs`, `babel-plugin-transform-regenerator`, `babel-plugin-transform-runtime`, `babel-preset-env`, `babel-runtime-corejs2`
  * [#10835](https://github.com/babel/babel/pull/10835) Revert "Add ".js" extension to injected polyfill imports" ([@JLHwung](https://github.com/JLHwung))
## v7.7.5 (2019-12-06)

#### :bug: Bug Fix
* `babel-plugin-transform-modules-commonjs`, `babel-plugin-transform-regenerator`, `babel-plugin-transform-runtime`, `babel-preset-env`, `babel-runtime-corejs2`
  * [#10549](https://github.com/babel/babel/pull/10549) Add ".js" extension to injected polyfill imports ([@shimataro](https://github.com/shimataro))
* `babel-cli`
  * [#10283](https://github.com/babel/babel/pull/10283) `babel --watch` should have equivalent file selection logic with `babel` ([@JLHwung](https://github.com/JLHwung))
* `babel-parser`
  * [#10801](https://github.com/babel/babel/pull/10801) Use scope flags to check arguments ([@JLHwung](https://github.com/JLHwung))
  * [#10800](https://github.com/babel/babel/pull/10800) Allow tuple rest trailing comma ([@yeonjuan](https://github.com/yeonjuan))
  * [#10475](https://github.com/babel/babel/pull/10475) Correctly disambiguate / after async fuctions ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-parser`, `babel-plugin-proposal-optional-chaining`, `babel-plugin-transform-modules-amd`
  * [#10806](https://github.com/babel/babel/pull/10806) fix(optional chaining): Optional delete returns true with nullish base ([@mpaarating](https://github.com/mpaarating))
* `babel-helper-module-transforms`, `babel-plugin-transform-modules-amd`
  * [#10764](https://github.com/babel/babel/pull/10764) fix: rewriteBindingInitVisitor should skip on scopable node ([@JLHwung](https://github.com/JLHwung))

#### :nail_care: Polish
* `babel-plugin-transform-runtime`
  * [#10788](https://github.com/babel/babel/pull/10788) Do not transpile typeof helper with itself in babel/runtime ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-core`
  * [#10778](https://github.com/babel/babel/pull/10778) refactor: Improve error message in @babel/core ([@jaroslav-kubicek](https://github.com/jaroslav-kubicek))

#### :house: Internal
* `babel-preset-env-standalone`
  * [#10779](https://github.com/babel/babel/pull/10779) Bundle standalone using rollup ([@JLHwung](https://github.com/JLHwung))
* Other
  * [#10781](https://github.com/babel/babel/pull/10781) Tune makefile scripts ([@JLHwung](https://github.com/JLHwung))
* `babel-helper-transform-fixture-test-runner`
  * [#10566](https://github.com/babel/babel/pull/10566) Incorrect trace position in fixture runner ([@JLHwung](https://github.com/JLHwung))

## v7.7.4 (2019-11-23)

#### :bug: Bug Fix
* `babel-runtime-corejs2`, `babel-runtime-corejs3`, `babel-runtime`
  * [#10748](https://github.com/babel/babel/pull/10748) Add support for native esm to @babel/runtime. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-preset-env`
  * [#10742](https://github.com/babel/babel/pull/10742) Update preset-env mappings. ([@existentialism](https://github.com/existentialism))
* `babel-parser`
  * [#10737](https://github.com/babel/babel/pull/10737) Flow enums: fix enum body location. ([@gkz](https://github.com/gkz))
  * [#10657](https://github.com/babel/babel/pull/10657) Fix some incorrect typeof parsing in flow. ([@existentialism](https://github.com/existentialism))
  * [#10582](https://github.com/babel/babel/pull/10582) [parser] Allow optional async methods. ([@gonzarodriguezt](https://github.com/gonzarodriguezt))
  * [#10710](https://github.com/babel/babel/pull/10710) register import equals specifier. ([@JLHwung](https://github.com/JLHwung))
  * [#10592](https://github.com/babel/babel/pull/10592) Allow TypeScript type assertions in array destructuring. ([@SakibulMowla](https://github.com/SakibulMowla))
* `babel-preset-env-standalone`
  * [#10732](https://github.com/babel/babel/pull/10732) fix: add missing available plugins to babel-preset-env-standalone. ([@JLHwung](https://github.com/JLHwung))
* `babel-plugin-transform-function-name`, `babel-plugin-transform-modules-umd`, `babel-preset-env`
  * [#10701](https://github.com/babel/babel/pull/10701) Circumvent typeof transform for umd build template. ([@JLHwung](https://github.com/JLHwung))
* `babel-cli`
  * [#10698](https://github.com/babel/babel/pull/10698) Babel should not silently remove unknown options after commander arguments. ([@JLHwung](https://github.com/JLHwung))
* `babel-plugin-proposal-optional-chaining`
  * [#10694](https://github.com/babel/babel/pull/10694) Fix optional method chaining in derived classes. ([@Shriram-Balaji](https://github.com/Shriram-Balaji))
* `babel-parser`, `babel-types`
  * [#10677](https://github.com/babel/babel/pull/10677) Add `asserts this [is type]` parsing support. ([@JLHwung](https://github.com/JLHwung))
* `babel-traverse`
  * [#10598](https://github.com/babel/babel/pull/10598) Fix parentheses on replaceWithMultiple for JSX. ([@khoumani](https://github.com/khoumani))
* `babel-helpers`, `babel-plugin-proposal-object-rest-spread`, `babel-preset-env`
  * [#10683](https://github.com/babel/babel/pull/10683) Fix: Don't call Object.keys on non-objects (babel#10482). ([@chrishinrichs](https://github.com/chrishinrichs))

#### :nail_care: Polish
* `babel-plugin-proposal-nullish-coalescing-operator`
  * [#10720](https://github.com/babel/babel/pull/10720) polish: skip creating extra reference for safely re-used node. ([@JLHwung](https://github.com/JLHwung))

#### :house: Internal
* Other
  * [#10731](https://github.com/babel/babel/pull/10731) Removed duplicate key in package.json. ([@rajasekarm](https://github.com/rajasekarm))
  * [#10718](https://github.com/babel/babel/pull/10718) chore: use loose mode of transform. ([@JLHwung](https://github.com/JLHwung))
  * [#10579](https://github.com/babel/babel/pull/10579) Implement PR workflow for running test262 on babel PRs. ([@jbhoosreddy](https://github.com/jbhoosreddy))
  * [#10648](https://github.com/babel/babel/pull/10648) bump @babel/* dev dependencies. ([@JLHwung](https://github.com/JLHwung))
  * [#10569](https://github.com/babel/babel/pull/10569) E2E test Babel with itself before publishing. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-core`
  * [#10668](https://github.com/babel/babel/pull/10668) Reduce standalone build size. ([@JLHwung](https://github.com/JLHwung))
* `babel-plugin-transform-literals`, `babel-preset-env-standalone`
  * [#10725](https://github.com/babel/babel/pull/10725) fix typo [ci-skip]. ([@JLHwung](https://github.com/JLHwung))
* `babel-cli`
  * [#10692](https://github.com/babel/babel/pull/10692) Add missing flow type to babel-cli for consistency. ([@ZYSzys](https://github.com/ZYSzys))

## v7.7.3 (2019-11-08)

#### :bug: Bug Fix
* `babel-parser`
  * [#10682](https://github.com/babel/babel/pull/10682) Don't recover from "adjacent jsx elements" parser error ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
## v7.7.2 (2019-11-07)

#### :bug: Bug Fix
* `babel-parser`
  * [#10669](https://github.com/babel/babel/pull/10669) Parse arrows with params annotations in conditional expressions ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-plugin-transform-typescript`
  * [#10658](https://github.com/babel/babel/pull/10658) fix: remove accessibility of constructor ([@JLHwung](https://github.com/JLHwung))
* `babel-traverse`
  * [#10656](https://github.com/babel/babel/pull/10656) fix: add inList setter for compatibility with babel-minify ([@JLHwung](https://github.com/JLHwung))
## v7.7.1 (2019-11-05)

#### :bug: Bug Fix
* `babel-types`
  * [#10650](https://github.com/babel/babel/pull/10650) Revert "throw a TypeError if identifier validation fails (#10621)" ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-preset-env`
  * [#10649](https://github.com/babel/babel/pull/10649) Fix(babel-preset-env): check api.caller is a function to avoid to thr… ([@love2me](https://github.com/love2me))

## v7.7.0 (2019-11-05)

#### :eyeglasses: Spec Compliance
* `babel-types`
  * [#10621](https://github.com/babel/babel/pull/10621) throw a TypeError if identifier validation fails. ([@dentrado](https://github.com/dentrado))
* `babel-parser`
  * [#10559](https://github.com/babel/babel/pull/10559) fix: Exclude catch clause from let identifier error. ([@gonzarodriguezt](https://github.com/gonzarodriguezt))
  * [#10567](https://github.com/babel/babel/pull/10567) [parser] Exception to 8 and 9 in tagged template. ([@pnowak](https://github.com/pnowak))
  * [#10532](https://github.com/babel/babel/pull/10532) Allow duplicate __proto__ keys in patterns, simple case (#6705). ([@alejo90](https://github.com/alejo90))

#### :rocket: New Feature
* `babel-generator`, `babel-helper-create-class-features-plugin`, `babel-parser`, `babel-plugin-transform-typescript`, `babel-preset-typescript`, `babel-types`
  * [#10545](https://github.com/babel/babel/pull/10545) Add support for TS declare modifier on fields. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-core`, `babel-parser`, `babel-preset-typescript`
  * [#10363](https://github.com/babel/babel/pull/10363) @babel/parser error recovery. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-core`
  * [#10599](https://github.com/babel/babel/pull/10599) Add support for .cjs config files. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#10501](https://github.com/babel/babel/pull/10501) Add support for babel.config.json. ([@devongovett](https://github.com/devongovett))
  * [#10361](https://github.com/babel/babel/pull/10361) feat: if code frame error is on a single line, highlight the whole path. ([@SimenB](https://github.com/SimenB))
* `babel-plugin-syntax-top-level-await`, `babel-preset-env`
  * [#10573](https://github.com/babel/babel/pull/10573) Create @babel/plugin-syntax-top-level-await. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-helper-builder-react-jsx`, `babel-plugin-transform-react-jsx`, `babel-preset-react`
  * [#10572](https://github.com/babel/babel/pull/10572) [transform-react-jsx] Add useSpread option to transform JSX. ([@ivandevp](https://github.com/ivandevp))
* `babel-generator`, `babel-parser`, `babel-plugin-proposal-decorators`, `babel-plugin-syntax-flow`, `babel-types`
  * [#10344](https://github.com/babel/babel/pull/10344) Flow enums parsing. ([@gkz](https://github.com/gkz))
* `babel-plugin-transform-function-name`, `babel-plugin-transform-modules-umd`, `babel-preset-env`
  * [#10477](https://github.com/babel/babel/pull/10477) Changes UMD callsite to be more likely to pass in the intended object.. ([@MicahZoltu](https://github.com/MicahZoltu))
* `babel-parser`
  * [#10449](https://github.com/babel/babel/pull/10449) Create parser plugin "topLevelAwait". ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#10521](https://github.com/babel/babel/pull/10521) [parser] Enable "exportNamespaceFrom" by default. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#10483](https://github.com/babel/babel/pull/10483) [parser] Add support for private fields in TypeScript. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-generator`, `babel-parser`, `babel-types`
  * [#10543](https://github.com/babel/babel/pull/10543) add assertions signature for TypeScript. ([@tanhauhau](https://github.com/tanhauhau))
* `babel-cli`, `babel-register`
  * [#8622](https://github.com/babel/babel/pull/8622) Make dir for babel --out-file. ([@TrySound](https://github.com/TrySound))
* `babel-cli`
  * [#10399](https://github.com/babel/babel/pull/10399) Closes [#8326](https://github.com/babel/babel/issues/8326), add back --quiet option.. ([@chris-peng-1244](https://github.com/chris-peng-1244))

#### :bug: Bug Fix
* `babel-helpers`, `babel-plugin-proposal-async-generator-functions`, `babel-plugin-proposal-function-sent`, `babel-preset-env`
  * [#10422](https://github.com/babel/babel/pull/10422) Correctly delegate .return() in async generator. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-helper-module-transforms`, `babel-plugin-transform-modules-commonjs`
  * [#10628](https://github.com/babel/babel/pull/10628) Don't throw when destructuring into a var named as an import. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-plugin-transform-modules-systemjs`
  * [#10638](https://github.com/babel/babel/pull/10638) fix: remove ExportNamedDeclaration when the specifier is empty. ([@JLHwung](https://github.com/JLHwung))
* `babel-parser`
  * [#10631](https://github.com/babel/babel/pull/10631) [TS] Parse calls with type args in optional chains. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#10607](https://github.com/babel/babel/pull/10607) fixed missing errors on assignment pattern in object expression. ([@vivek12345](https://github.com/vivek12345))
  * [#10594](https://github.com/babel/babel/pull/10594) [parser] Parse only modifiers of actual methods. ([@gonzarodriguezt](https://github.com/gonzarodriguezt))
* `babel-plugin-transform-typescript`
  * [#10555](https://github.com/babel/babel/pull/10555) [TS] Correctly transform computed strings and templates in enums. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-core`
  * [#10623](https://github.com/babel/babel/pull/10623) Fix: inputSourceMap should work when it is an external file. ([@JLHwung](https://github.com/JLHwung))
  * [#10539](https://github.com/babel/babel/pull/10539) fix: remove filename annotation in buildCodeFrameError. ([@JLHwung](https://github.com/JLHwung))
* `babel-plugin-proposal-decorators`
  * [#10578](https://github.com/babel/babel/pull/10578) [decorators] fix: support string literal properties. ([@mwhitworth](https://github.com/mwhitworth))
* `babel-helpers`, `babel-plugin-proposal-dynamic-import`, `babel-plugin-transform-modules-commonjs`, `babel-preset-env`
  * [#10574](https://github.com/babel/babel/pull/10574) fix: _interopRequireWildcard should only cache objects. ([@samMeow](https://github.com/samMeow))
* `babel-traverse`
  * [#9777](https://github.com/babel/babel/pull/9777) [traverse] Allow skipping nodes inserted with .replaceWith(). ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-preset-env`
  * [#10146](https://github.com/babel/babel/pull/10146) Inject core-js@3 imports in Program:exit instead of on post(). ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-generator`
  * [#10519](https://github.com/babel/babel/pull/10519) Fix generator missing parens around an arrow returning function type. ([@existentialism](https://github.com/existentialism))
* `babel-plugin-transform-async-to-generator`, `babel-preset-env`, `babel-traverse`
  * [#9939](https://github.com/babel/babel/pull/9939) Don't use args rest/spread to hoist super method calls. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :nail_care: Polish
* `babel-plugin-transform-classes`, `babel-plugin-transform-regenerator`, `babel-preset-env`
  * [#9481](https://github.com/babel/babel/pull/9481) [preset-env] Don't use async-to-generator when already using regenerator. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-helpers`, `babel-plugin-transform-modules-commonjs`, `babel-preset-env`
  * [#10585](https://github.com/babel/babel/pull/10585) fix(babel‑helpers/interopRequireWildcard): Avoid double nullish check. ([@ExE-Boss](https://github.com/ExE-Boss))
* `babel-register`
  * [#10557](https://github.com/babel/babel/pull/10557) fix: disable caching when babel could not read/write cache. ([@JLHwung](https://github.com/JLHwung))

#### :house: Internal
* `babel-cli`, `babel-node`
  * [#10619](https://github.com/babel/babel/pull/10619) chore: remove output-file-sync dependency. ([@JLHwung](https://github.com/JLHwung))
* `babel-register`
  * [#10614](https://github.com/babel/babel/pull/10614) chore: bump source-map-support to 0.5.14. ([@JLHwung](https://github.com/JLHwung))
* `babel-helper-create-regexp-features-plugin`, `babel-plugin-proposal-unicode-property-regex`, `babel-plugin-transform-dotall-regex`, `babel-plugin-transform-named-capturing-groups-regex`, `babel-plugin-transform-unicode-regex`, `babel-preset-env`
  * [#10447](https://github.com/babel/babel/pull/10447) Merge multiple regex transform plugin. ([@JLHwung](https://github.com/JLHwung))
* `babel-preset-env`
  * [#10612](https://github.com/babel/babel/pull/10612) chore: update web.immediate support fixtures. ([@JLHwung](https://github.com/JLHwung))
* `babel-helper-module-imports`
  * [#10608](https://github.com/babel/babel/pull/10608) Use .find instead of .filter to get targetPath in ImportInjector. ([@Andarist](https://github.com/Andarist))
* Other
  * [#10600](https://github.com/babel/babel/pull/10600) Test node@13 on circle. ([@existentialism](https://github.com/existentialism))
  * [#10593](https://github.com/babel/babel/pull/10593) chore: replace outdated travis-ci.org badges [ci skip]. ([@JLHwung](https://github.com/JLHwung))
  * [#10591](https://github.com/babel/babel/pull/10591) chore: test against Node.js 13. ([@JLHwung](https://github.com/JLHwung))
  * [#10556](https://github.com/babel/babel/pull/10556) Add master branch workflow for test262 tests. ([@jbhoosreddy](https://github.com/jbhoosreddy))
  * [#10553](https://github.com/babel/babel/pull/10553) chore: introduce envinfo into environment section. ([@JLHwung](https://github.com/JLHwung))
* `babel-runtime`
  * [#10418](https://github.com/babel/babel/pull/10418) docs: add homepage link. ([@DanArthurGallagher](https://github.com/DanArthurGallagher))
* `babel-helper-annotate-as-pure`, `babel-helper-bindify-decorators`, `babel-helper-builder-binary-assignment-operator-visitor`, `babel-helper-builder-react-jsx`, `babel-helper-call-delegate`, `babel-helper-define-map`, `babel-helper-explode-assignable-expression`, `babel-helper-explode-class`, `babel-helper-function-name`, `babel-helper-get-function-arity`, `babel-helper-hoist-variables`, `babel-helper-member-expression-to-functions`, `babel-helper-module-imports`, `babel-helper-module-transforms`, `babel-helper-optimise-call-expression`, `babel-helper-remap-async-to-generator`, `babel-helper-replace-supers`, `babel-helper-simple-access`, `babel-helper-split-export-declaration`, `babel-helper-wrap-function`, `babel-helpers`, `babel-template`
  * [#10568](https://github.com/babel/babel/pull/10568) Bump babel-types to ^7.6.3. ([@JLHwung](https://github.com/JLHwung))

#### :running_woman: Performance
* `babel-traverse`
  * [#10480](https://github.com/babel/babel/pull/10480) Traverse performance. ([@JLHwung](https://github.com/JLHwung))

## v7.6.4 (2019-10-10)

#### :eyeglasses: Spec Compliance
* `babel-parser`
  * [#10491](https://github.com/babel/babel/pull/10491) Trailing comma after rest - The final fix ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :bug: Bug Fix
* `babel-cli`, `babel-core`, `babel-generator`, `babel-helper-transform-fixture-test-runner`
  * [#10536](https://github.com/babel/babel/pull/10536) Revert "chore: Upgrade source-map to 0.6.1 (#10446)" ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
## v7.6.3 (2019-10-08)

#### :eyeglasses: Spec Compliance
* `babel-parser`
  * [#10469](https://github.com/babel/babel/pull/10469) Disallow await inside async arrow params ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#10493](https://github.com/babel/babel/pull/10493) [parser] Disallow numeric separators in legacy octal like integers ([@gonzarodriguezt](https://github.com/gonzarodriguezt))

#### :rocket: New Feature
* `babel-types`
  * [#10504](https://github.com/babel/babel/pull/10504) Add declarations for more of @babel/types exports ([@Jessidhia](https://github.com/Jessidhia))

#### :bug: Bug Fix
* `babel-plugin-transform-block-scoping`
  * [#10343](https://github.com/babel/babel/pull/10343) Do not remove let bindings even they are wrapped in closure ([@JLHwung](https://github.com/JLHwung))
* `babel-parser`
  * [#10119](https://github.com/babel/babel/pull/10119) add scope to TSModuleDeclaration ([@tanhauhau](https://github.com/tanhauhau))
  * [#10332](https://github.com/babel/babel/pull/10332) Do not allow member expressions to start async arrows ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#10490](https://github.com/babel/babel/pull/10490) [parser] Don't crash on comment after trailing comma after elision ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-plugin-transform-react-constant-elements`, `babel-traverse`
  * [#10529](https://github.com/babel/babel/pull/10529) Do not hoist jsx referencing a mutable binding ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-generator`, `babel-parser`, `babel-plugin-transform-block-scoping`, `babel-plugin-transform-flow-comments`, `babel-plugin-transform-flow-strip-types`, `babel-plugin-transform-typescript`
  * [#10220](https://github.com/babel/babel/pull/10220) Flow: interface identifier should be declared in the scope ([@JLHwung](https://github.com/JLHwung))

#### :nail_care: Polish
* `babel-core`
  * [#10419](https://github.com/babel/babel/pull/10419) assertNoDuplicates throw with more context ([@hjdivad](https://github.com/hjdivad))
  * [#10511](https://github.com/babel/babel/pull/10511) Add filename to transform error ([@JLHwung](https://github.com/JLHwung))

#### :house: Internal
* Other
  * [#10506](https://github.com/babel/babel/pull/10506) Use `make -j` for parallel build ([@JLHwung](https://github.com/JLHwung))
  * [#10443](https://github.com/babel/babel/pull/10443) perf: only apply lazy cjs module transform on cli and core ([@JLHwung](https://github.com/JLHwung))
  * [#10494](https://github.com/babel/babel/pull/10494) Enable optional chaining and nullish coalescing plugins ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-cli`, `babel-core`, `babel-generator`, `babel-helper-fixtures`, `babel-helper-transform-fixture-test-runner`, `babel-node`, `babel-plugin-transform-react-jsx-source`, `babel-plugin-transform-runtime`, `babel-preset-env`, `babel-preset-react`
  * [#10249](https://github.com/babel/babel/pull/10249) Add windows to travis ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :running_woman: Performance
* `babel-parser`
  * [#10371](https://github.com/babel/babel/pull/10371) perf: replace lookahead by lookaheadCharCode ([@JLHwung](https://github.com/JLHwung))
* Other
  * [#10443](https://github.com/babel/babel/pull/10443) perf: only apply lazy cjs module transform on cli and core ([@JLHwung](https://github.com/JLHwung))
## v7.6.2 (2019-09-23)

#### :eyeglasses: Spec Compliance
* `babel-parser`
  * [#10472](https://github.com/babel/babel/pull/10472) added check to disallow super.private variable access and test case added. ([@vivek12345](https://github.com/vivek12345))
  * [#10468](https://github.com/babel/babel/pull/10468) [parser] Disallow numeric separator in unicode scape sequences. ([@ivandevp](https://github.com/ivandevp))
  * [#10467](https://github.com/babel/babel/pull/10467) [parser] Invalid NonOctal Decimal. ([@gonzarodriguezt](https://github.com/gonzarodriguezt))
  * [#10461](https://github.com/babel/babel/pull/10461) [parser] Disallow static fields named `constructor`. ([@guywaldman](https://github.com/guywaldman))
  * [#10455](https://github.com/babel/babel/pull/10455) [parser] Report escapes in kws only if they won't be used as identifiers. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :bug: Bug Fix
* `babel-parser`
  * [#10445](https://github.com/babel/babel/pull/10445) Leave trailing comments after handling a possible trailing comma. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-cli`
  * [#10400](https://github.com/babel/babel/pull/10400) fix: allow the process to exit naturally. ([@JLHwung](https://github.com/JLHwung))
* `babel-core`
  * [#10402](https://github.com/babel/babel/pull/10402) fix: pass optionLoc when validating plugin object. ([@JLHwung](https://github.com/JLHwung))
* `babel-plugin-transform-block-scoping`, `babel-plugin-transform-spread`, `babel-traverse`
  * [#10417](https://github.com/babel/babel/pull/10417) Do not guess relative execution status for exported fns. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-plugin-proposal-object-rest-spread`, `babel-preset-env`
  * [#10275](https://github.com/babel/babel/pull/10275) fix object rest in array pattern. ([@tanhauhau](https://github.com/tanhauhau))

#### :house: Internal
* `babel-plugin-transform-named-capturing-groups-regex`
  * [#10430](https://github.com/babel/babel/pull/10430) refactor: replace regexp-tree by regexpu. ([@JLHwung](https://github.com/JLHwung))
* Other
  * [#10441](https://github.com/babel/babel/pull/10441) Update GitHub actions to v2. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#10427](https://github.com/babel/babel/pull/10427) chore: add lint-ts rule. ([@JLHwung](https://github.com/JLHwung))
* `babel-helper-fixtures`
  * [#10428](https://github.com/babel/babel/pull/10428) chore: remove tryResolve dependency. ([@JLHwung](https://github.com/JLHwung))
* `babel-node`
  * [#10429](https://github.com/babel/babel/pull/10429) Remove babel polyfill dependency of babel-node. ([@bdwain](https://github.com/bdwain))
* `babel-generator`, `babel-helper-fixtures`
  * [#10420](https://github.com/babel/babel/pull/10420) chore: remove trim-right dependency. ([@JLHwung](https://github.com/JLHwung))
* `babel-core`, `babel-plugin-transform-runtime`, `babel-register`
  * [#10405](https://github.com/babel/babel/pull/10405) Remove circular dependency. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :running_woman: Performance
* `babel-parser`
  * [#10421](https://github.com/babel/babel/pull/10421) Miscellaneous perf tweak. ([@JLHwung](https://github.com/JLHwung))

## v7.6.1 (2019-09-06)

#### :bug: Bug Fix
* `babel-types`
  * [#10404](https://github.com/babel/babel/pull/10404) fix(types): correct typescript function headers ([@forstermatth](https://github.com/forstermatth))
* `babel-node`
  * [#9758](https://github.com/babel/babel/pull/9758) Remove process.exit(1) from babel-node ([@dword-design](https://github.com/dword-design))

## v7.6.0 (2019-09-06)

#### :eyeglasses: Spec Compliance
* `babel-generator`, `babel-parser`
  * [#10269](https://github.com/babel/babel/pull/10269) Fix parenthesis for nullish coalescing ([@vivek12345](https://github.com/vivek12345))
* `babel-helpers`, `babel-plugin-transform-block-scoping`, `babel-traverse`
  * [#9498](https://github.com/babel/babel/pull/9498) Fix tdz checks in transform-block-scoping plugin ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :rocket: New Feature
* `babel-core`
  * [#10181](https://github.com/babel/babel/pull/10181) feat(errors): validate preset when filename is absent ([@JLHwung](https://github.com/JLHwung))
* `babel-helper-create-class-features-plugin`, `babel-helpers`, `babel-plugin-proposal-private-methods`
  * [#10217](https://github.com/babel/babel/pull/10217) Class Private Static Accessors ([@tim-mc](https://github.com/tim-mc))
* `babel-generator`, `babel-parser`, `babel-types`
  * [#10148](https://github.com/babel/babel/pull/10148) V8intrinsic syntax plugin ([@JLHwung](https://github.com/JLHwung))
* `babel-preset-typescript`
  * [#10382](https://github.com/babel/babel/pull/10382) Allow setting 'allowNamespaces' in typescript preset ([@dsgkirkby](https://github.com/dsgkirkby))
* `babel-parser`
  * [#10352](https://github.com/babel/babel/pull/10352) Do not register ambient classes to the TS scope ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-types`
  * [#10248](https://github.com/babel/babel/pull/10248) Add static to class property builder ([@yuri-karadzhov](https://github.com/yuri-karadzhov))

#### :bug: Bug Fix
* `babel-helpers`, `babel-plugin-transform-destructuring`, `babel-plugin-transform-modules-commonjs`, `babel-preset-env`
  * [#10396](https://github.com/babel/babel/pull/10396) fix: early return when instance is not iterable ([@JLHwung](https://github.com/JLHwung))
* `babel-plugin-transform-runtime`
  * [#10398](https://github.com/babel/babel/pull/10398) Add supports for polyfill computed methods ([@rhyzx](https://github.com/rhyzx))
* `babel-preset-env`
  * [#10397](https://github.com/babel/babel/pull/10397) Don't polyfill when evaluation is not confident ([@rhyzx](https://github.com/rhyzx))
  * [#10218](https://github.com/babel/babel/pull/10218) [preset-env] Include / exclude module plugins properly ([@AdamRamberg](https://github.com/AdamRamberg))
  * [#10284](https://github.com/babel/babel/pull/10284) Replace es.string.reverse with es.array.reverse ([@epicfaace](https://github.com/epicfaace))
* `babel-plugin-transform-named-capturing-groups-regex`
  * [#10395](https://github.com/babel/babel/pull/10395) fix: transform name capturing regex once ([@JLHwung](https://github.com/JLHwung))
* `babel-types`
  * [#10098](https://github.com/babel/babel/pull/10098) fix typescript for babel-types ([@tanhauhau](https://github.com/tanhauhau))
  * [#10319](https://github.com/babel/babel/pull/10319) Add a builder definition including name for tsTypeParameter ([@deificx](https://github.com/deificx))
* `babel-parser`
  * [#10380](https://github.com/babel/babel/pull/10380) Refactor trailing comment adjustment ([@banga](https://github.com/banga))
  * [#10369](https://github.com/babel/babel/pull/10369) Retain trailing comments in array expressions ([@banga](https://github.com/banga))
  * [#10292](https://github.com/babel/babel/pull/10292) fix: assign trailing comment to ObjectProperty only when inside an ObjectExpression ([@JLHwung](https://github.com/JLHwung))
* `babel-parser`, `babel-types`
  * [#10366](https://github.com/babel/babel/pull/10366) Don't allow JSXNamespacedName to chain ([@jridgewell](https://github.com/jridgewell))
* `babel-generator`, `babel-plugin-transform-typescript`, `babel-types`
  * [#10341](https://github.com/babel/babel/pull/10341) Add TSBigIntKeyword to @babel/types ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-core`, `babel-types`
  * [#9960](https://github.com/babel/babel/pull/9960) Do not delete "fake" source map comments from strings ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-plugin-transform-flow-comments`
  * [#10329](https://github.com/babel/babel/pull/10329) Fix flow comments plugin issues ([@zaygraveyard](https://github.com/zaygraveyard))
* `babel-helpers`, `babel-plugin-transform-react-constant-elements`
  * [#10307](https://github.com/babel/babel/pull/10307) [fix] jsx helper calls order ([@Sinewyk](https://github.com/Sinewyk))
* `babel-plugin-proposal-decorators`
  * [#10302](https://github.com/babel/babel/pull/10302) fix: register inserted class declaration ([@thiagoarrais](https://github.com/thiagoarrais))
* `babel-plugin-proposal-do-expressions`, `babel-traverse`
  * [#10070](https://github.com/babel/babel/pull/10070) Do expressions transform for switch statements ([@tanhauhau](https://github.com/tanhauhau))
  * [#10277](https://github.com/babel/babel/pull/10277) remove finally from completion record in try statement ([@tanhauhau](https://github.com/tanhauhau))
* `babel-helpers`, `babel-plugin-transform-named-capturing-groups-regex`
  * [#10136](https://github.com/babel/babel/pull/10136) fix capturing group for matchAll ([@tanhauhau](https://github.com/tanhauhau))

#### :nail_care: Polish
* `babel-plugin-transform-runtime`, `babel-preset-env`
  * [#10372](https://github.com/babel/babel/pull/10372) Don't allow instance properties transformation on namespace ([@rhyzx](https://github.com/rhyzx))

#### :memo: Documentation
* [#10313](https://github.com/babel/babel/pull/10313) Adds note about two approval policy to PR template ([@thiagoarrais](https://github.com/thiagoarrais))

#### :house: Internal
* `babel-register`
  * [#9847](https://github.com/babel/babel/pull/9847) Remove core-js dependency from @babel/register ([@coreyfarrell](https://github.com/coreyfarrell))
* `babel-helper-fixtures`, `babel-helper-transform-fixture-test-runner`, `babel-preset-env`
  * [#10401](https://github.com/babel/babel/pull/10401) Use "validateLogs" for preset-env's debug fixtures ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-parser`
  * [#10380](https://github.com/babel/babel/pull/10380) Refactor trailing comment adjustment ([@banga](https://github.com/banga))
* `babel-helper-fixtures`, `babel-helper-transform-fixture-test-runner`, `babel-plugin-proposal-dynamic-import`, `babel-preset-env`
  * [#10326](https://github.com/babel/babel/pull/10326) Allow testing logs with `@babel/helper-transform-fixture-test-runner` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-runtime-corejs2`, `babel-runtime`, `babel-types`
  * [#10331](https://github.com/babel/babel/pull/10331) Commit generated code ([@JLHwung](https://github.com/JLHwung))
* `babel-cli`, `babel-core`, `babel-generator`, `babel-helper-create-class-features-plugin`, `babel-helper-fixtures`, `babel-node`, `babel-parser`, `babel-plugin-proposal-do-expressions`, `babel-plugin-proposal-pipeline-operator`, `babel-plugin-transform-modules-commonjs`, `babel-plugin-transform-runtime`, `babel-preset-env`, `babel-standalone`, `babel-template`, `babel-traverse`, `babel-types`
  * [#10228](https://github.com/babel/babel/pull/10228) Update dev dependencies and fix linting errors ([@danez](https://github.com/danez))
* `babel-cli`
  * [#10244](https://github.com/babel/babel/pull/10244) added flow to babel cli ([@Letladi](https://github.com/Letladi))

#### :running_woman: Performance
* `babel-helpers`, `babel-plugin-transform-modules-commonjs`, `babel-preset-env`
  * [#10161](https://github.com/babel/babel/pull/10161) Improves the logic to import objects in helpers ([@ifsnow](https://github.com/ifsnow))
* `babel-traverse`
  * [#10243](https://github.com/babel/babel/pull/10243) perf: always return `void 0` as undefined node ([@JLHwung](https://github.com/JLHwung))

## v7.5.5 (2019-07-17)

#### :bug: Bug Fix
* `babel-code-frame`
  * [#10211](https://github.com/babel/babel/pull/10211) fix code-frame marker with highlighting ([@tanhauhau](https://github.com/tanhauhau))
* `babel-plugin-proposal-object-rest-spread`
  * [#10200](https://github.com/babel/babel/pull/10200) Workaround #10179 in proposal-object-rest-spread ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-types`
  * [#10198](https://github.com/babel/babel/pull/10198) add assertShape to validate templateElement ([@tanhauhau](https://github.com/tanhauhau))
* `babel-helper-create-class-features-plugin`, `babel-helper-member-expression-to-functions`, `babel-helper-replace-supers`, `babel-helpers`, `babel-plugin-proposal-class-properties`, `babel-plugin-transform-classes`, `babel-plugin-transform-object-super`, `babel-types`
  * [#10017](https://github.com/babel/babel/pull/10017) destructuring private fields with array pattern / object pattern ([@tanhauhau](https://github.com/tanhauhau))
* `babel-plugin-transform-flow-comments`
  * [#9901](https://github.com/babel/babel/pull/9901) fix transform-flow-comments for import types ([@tanhauhau](https://github.com/tanhauhau))
* `babel-core`, `babel-helpers`
  * [#10208](https://github.com/babel/babel/pull/10208) always throw when add missing helpers ([@tanhauhau](https://github.com/tanhauhau))
* `babel-plugin-transform-runtime`
  * [#10207](https://github.com/babel/babel/pull/10207) Closes [#10205](https://github.com/babel/babel/issues/10205) ([@sag1v](https://github.com/sag1v))
* `babel-helpers`, `babel-plugin-transform-instanceof`
  * [#10197](https://github.com/babel/babel/pull/10197) fix: custom instOfHandler result should be cast to boolean ([@JLHwung](https://github.com/JLHwung))

#### :house: Internal
* `babel-parser`, `babel-plugin-transform-typescript`
  * [#10014](https://github.com/babel/babel/pull/10014) Use correct extension for typescript fixtures ([@danez](https://github.com/danez))

#### :running_woman: Performance
* `babel-helpers`, `babel-plugin-proposal-object-rest-spread`, `babel-preset-env`
  * [#10189](https://github.com/babel/babel/pull/10189) perf: match ownKeys perf to the one of objectSpread ([@JLHwung](https://github.com/JLHwung))

## v7.5.4 (2019-07-09)

#### :bug: Bug Fix
* `babel-helpers`, `babel-plugin-proposal-object-rest-spread`, `babel-preset-env`
  * [#10188](https://github.com/babel/babel/pull/10188) Fix _objectSpread2 for real ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

## v7.5.3 (2019-07-09)

#### :bug: Bug Fix
* `babel-helpers`, `babel-plugin-proposal-object-rest-spread`, `babel-preset-env`
  * [#10180](https://github.com/babel/babel/pull/10180) [_objectSpread2] Do not use hoisted var from prev iteration ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

## v7.5.2 (2019-07-08)

#### :bug: Bug Fix
* `babel-plugin-transform-typescript`
  * [#10174](https://github.com/babel/babel/pull/10174) Do not trust Scope when removing TypeScript types ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-helpers`, `babel-plugin-proposal-object-rest-spread`, `babel-preset-env`
  * [#10171](https://github.com/babel/babel/pull/10171) Don't rely on getOwnPropertyDescriptors in objectSpread2 ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-plugin-proposal-export-default-from`, `babel-plugin-proposal-export-namespace-from`
  * [#10172](https://github.com/babel/babel/pull/10172) fix: register injected importDeclaration ([@JLHwung](https://github.com/JLHwung))

## v7.5.1 (2019-07-06)

#### :bug: Bug Fix
* `babel-helpers`, `babel-plugin-proposal-object-rest-spread`
  * [#10170](https://github.com/babel/babel/pull/10170) Fix objectSpread2 backward compatibility ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-plugin-transform-typescript`
  * [#10167](https://github.com/babel/babel/pull/10167) Retain typescript export-from-source ([@Wolvereness](https://github.com/Wolvereness))

## v7.5.0 (2019-07-04)

#### :eyeglasses: Spec Compliance
* `babel-parser`
  * [#10099](https://github.com/babel/babel/pull/10099) Disallow "let" as name at lexical bindings ([@g-plane](https://github.com/g-plane))

#### :rocket: New Feature
* `babel-parser`
  * [#10091](https://github.com/babel/babel/pull/10091) BigInt type for Flow ([@tanhauhau](https://github.com/tanhauhau))
  * [#9450](https://github.com/babel/babel/pull/9450) Implement f# pipeline in parser ([@mAAdhaTTah](https://github.com/mAAdhaTTah))
  * [#9912](https://github.com/babel/babel/pull/9912) [legacy decorators] Allow decorating generator methods ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#9864](https://github.com/babel/babel/pull/9864) [@babel/parser] Add "allowUndeclaredExports" option ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-plugin-proposal-dynamic-import`, `babel-preset-env-standalone`, `babel-preset-env`
  * [#10109](https://github.com/babel/babel/pull/10109) Add @babel/plugin-proposal-dynamic-import to @babel/preset-env ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-plugin-proposal-dynamic-import`, `babel-plugin-transform-modules-amd`, `babel-plugin-transform-modules-commonjs`, `babel-plugin-transform-modules-systemjs`
  * [#9552](https://github.com/babel/babel/pull/9552) Create @babel/plugin-proposal-dynamic-import ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-plugin-proposal-pipeline-operator`, `babel-plugin-syntax-pipeline-operator`
  * [#9984](https://github.com/babel/babel/pull/9984) Transform for F# Pipeline ([@thiagoarrais](https://github.com/thiagoarrais))
* `babel-plugin-transform-typescript`, `babel-types`
  * [#9785](https://github.com/babel/babel/pull/9785) Implement TypeScript namespace support ([@Wolvereness](https://github.com/Wolvereness))

#### :bug: Bug Fix
* `babel-plugin-proposal-do-expressions`, `babel-traverse`
  * [#10072](https://github.com/babel/babel/pull/10072) fix await and yield for do expression ([@tanhauhau](https://github.com/tanhauhau))
* `babel-helpers`, `babel-plugin-transform-react-constant-elements`
  * [#10155](https://github.com/babel/babel/pull/10155) Added es3 backward compatibility for react helper code ([@sormy](https://github.com/sormy))
* `babel-preset-env`
  * [#10127](https://github.com/babel/babel/pull/10127) Bump compat-table and updating preset-env mappings ([@existentialism](https://github.com/existentialism))
  * [#8897](https://github.com/babel/babel/pull/8897) Allow `defaults` query in preset-env ([@existentialism](https://github.com/existentialism))
* `babel-parser`
  * [#10132](https://github.com/babel/babel/pull/10132) fix import typeof in declare module ([@tanhauhau](https://github.com/tanhauhau))
  * [#10084](https://github.com/babel/babel/pull/10084) flow - allow type parameter defaults in function declarations ([@tanhauhau](https://github.com/tanhauhau))
* `babel-types`
  * [#10126](https://github.com/babel/babel/pull/10126) fix exportKind declaration in babel-types ([@zxbodya](https://github.com/zxbodya))
* `babel-node`
  * [#9951](https://github.com/babel/babel/pull/9951) Prevents exception on PnP ([@arcanis](https://github.com/arcanis))
* `babel-generator`
  * [#10041](https://github.com/babel/babel/pull/10041) Fix printer for explicitly inexact Flow types ([@mrtnzlml](https://github.com/mrtnzlml))
* `babel-plugin-transform-typescript`
  * [#10034](https://github.com/babel/babel/pull/10034) Use scope for typescript export removals ([@Wolvereness](https://github.com/Wolvereness))
  * [#10019](https://github.com/babel/babel/pull/10019) fix(typescript): erase default export if exporting a TS type ([@airato](https://github.com/airato))
* `babel-helper-create-class-features-plugin`, `babel-plugin-proposal-class-properties`, `babel-traverse`
  * [#10029](https://github.com/babel/babel/pull/10029) Fixed computed keys for class expression ([@tanhauhau](https://github.com/tanhauhau))
* `babel-helpers`, `babel-plugin-proposal-object-rest-spread`, `babel-preset-env`
  * [#9384](https://github.com/babel/babel/pull/9384) Retry to fix object spread helper compatibility ([@saschanaz](https://github.com/saschanaz))
* `babel-plugin-transform-destructuring`
  * [#10013](https://github.com/babel/babel/pull/10013) fix destructuring rest with template literal ([@tanhauhau](https://github.com/tanhauhau))
* `babel-helper-create-class-features-plugin`, `babel-plugin-transform-typescript`
  * [#9610](https://github.com/babel/babel/pull/9610) Use `injectInitialization` to generate ts parameter properties ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :nail_care: Polish
* `babel-core`
  * [#10157](https://github.com/babel/babel/pull/10157) Fix incorrect usage of $o instead of %o in debug ([@ChlorideCull](https://github.com/ChlorideCull))
* `babel-helpers`
  * [#10117](https://github.com/babel/babel/pull/10117) Simplify the helpers for classPrivateField{Get,Set} ([@arv](https://github.com/arv))
* `babel-plugin-transform-typescript`
  * [#10047](https://github.com/babel/babel/pull/10047) Refactor isImportTypeOnly helper function ([@Andarist](https://github.com/Andarist))

#### :memo: Documentation
* `babel-plugin-proposal-partial-application`, `babel-plugin-syntax-partial-application`
  * [#10103](https://github.com/babel/babel/pull/10103) docs: update readmes ([@xtuc](https://github.com/xtuc))

## v7.4.5 (2019-05-21)

#### :bug: Bug Fix
* `babel-parser`
  * [#9998](https://github.com/babel/babel/pull/9998) Fix location for optional params in arrow functions ([@danez](https://github.com/danez))
  * [#9982](https://github.com/babel/babel/pull/9982) Avoid unnecessary work during lookahead ([@danez](https://github.com/danez))
  * [#9922](https://github.com/babel/babel/pull/9922) fix: allow shebang directive ([@tanhauhau](https://github.com/tanhauhau))
* `babel-preset-env`
  * [#10002](https://github.com/babel/babel/pull/10002) Update preset-env dependencies and fix fixtures ([@danez](https://github.com/danez))
  * [#9978](https://github.com/babel/babel/pull/9978) Fix mobile browsers support in preset-env ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#9902](https://github.com/babel/babel/pull/9902) Fix destructuring assignments being transpiled for edge 15 ([@eps1lon](https://github.com/eps1lon))
* `babel-plugin-transform-typescript`
  * [#9944](https://github.com/babel/babel/pull/9944) fix(typescript): erase type exports ([@airato](https://github.com/airato))

#### :nail_care: Polish
* `babel-parser`
  * [#9995](https://github.com/babel/babel/pull/9995) Do not use lookahead when parsing construct signature declarations in TS ([@danez](https://github.com/danez))
  * [#9989](https://github.com/babel/babel/pull/9989) Only compute Position if not already in state ([@danez](https://github.com/danez))
  * [#9988](https://github.com/babel/babel/pull/9988) Do not use lookahead when parsing jsx expression containers ([@danez](https://github.com/danez))
  * [#9987](https://github.com/babel/babel/pull/9987) Do not use lookahead when parsing imports in declare module in flow ([@danez](https://github.com/danez))
  * [#9985](https://github.com/babel/babel/pull/9985) Do not use lookahead when parsing declare module or declare module.exports in flow ([@danez](https://github.com/danez))
  * [#9983](https://github.com/babel/babel/pull/9983) Do not use lookahead when parsing dynamic import or import.meta ([@danez](https://github.com/danez))
  * [#9979](https://github.com/babel/babel/pull/9979) Remove guardedHandlers from ASTs ([@danez](https://github.com/danez))
* `babel-preset-env`
  * [#9992](https://github.com/babel/babel/pull/9992) use console.warn for warning ([@schu34](https://github.com/schu34))
* `babel-core`
  * [#9945](https://github.com/babel/babel/pull/9945) Fixed null error in plugin opts and added a test for it ([@divbhasin](https://github.com/divbhasin))
* `babel-core`, `babel-traverse`
  * [#9909](https://github.com/babel/babel/pull/9909) Add missing space in error messages ([@pnavarrc](https://github.com/pnavarrc))

#### :house: Internal
* `babel-node`
  * [#9914](https://github.com/babel/babel/pull/9914) [babel-node] Do not hardcode node flags ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

## v7.4.4 (2019-04-26)

#### :bug: Bug Fix
* `babel-plugin-transform-flow-comments`
  * [#9897](https://github.com/babel/babel/pull/9897) fix flow-comments - class type paramters and implements ([@tanhauhau](https://github.com/tanhauhau))
  * [#9893](https://github.com/babel/babel/pull/9893) fix flow-comment - object destructuring ([@tanhauhau](https://github.com/tanhauhau))
* `babel-parser`
  * [#9766](https://github.com/babel/babel/pull/9766) Add TS support to @babel/parser's Scope ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#9865](https://github.com/babel/babel/pull/9865) Always register global bindings as exportable ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#9887](https://github.com/babel/babel/pull/9887) Fix TypeScript readonly error location ([@existentialism](https://github.com/existentialism))
  * [#9869](https://github.com/babel/babel/pull/9869) ! remove constant context assertions ([@tanhauhau](https://github.com/tanhauhau))
  * [#9890](https://github.com/babel/babel/pull/9890) Fix parsing typescript bodiless methods with the estree plugin also enabled ([@devongovett](https://github.com/devongovett))
* `babel-traverse`
  * [#9870](https://github.com/babel/babel/pull/9870) Fix flow types in traverse/path/family and enable flow ([@danez](https://github.com/danez))
* `babel-plugin-proposal-class-properties`, `babel-plugin-transform-modules-commonjs`, `babel-types`
  * [#9861](https://github.com/babel/babel/pull/9861) Fix: PrivateName Identifier should not be isReferenced. ([@coreyfarrell](https://github.com/coreyfarrell))
* `babel-types`
  * [#9832](https://github.com/babel/babel/pull/9832) Fix typo in cloneNode. ([@evandervalk](https://github.com/evandervalk))


## v7.4.3 (2019-04-02)

#### :eyeglasses: Spec Compliance
* `babel-parser`
  * [#9769](https://github.com/babel/babel/pull/9769) Don't accept '\08' or '\09' in strict mode. ([@danez](https://github.com/danez))
  * [#9768](https://github.com/babel/babel/pull/9768) Correctly check for-in and for-of loop for invalid left-hand side. ([@danez](https://github.com/danez))
  * [#9767](https://github.com/babel/babel/pull/9767) Parse right-hand-side of for/of as an assignment expression. ([@danez](https://github.com/danez))
  * [#9748](https://github.com/babel/babel/pull/9748) [typescript] parsing template literal as type . ([@tanhauhau](https://github.com/tanhauhau))

#### :rocket: New Feature
* `babel-plugin-transform-runtime`
  * [#9754](https://github.com/babel/babel/pull/9754) [runtime-corejs3] Only polyfill instance methods when it might be needed. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :bug: Bug Fix
* `babel-polyfill`
  * [#9780](https://github.com/babel/babel/pull/9780) Closes [#9232](https://github.com/babel/babel/issues/9232), add some missed modules to `@babel/polyfill/noConflict`. ([@zloirock](https://github.com/zloirock))
* `babel-cli`
  * [#9807](https://github.com/babel/babel/pull/9807) Upgrade lodash to 4.17.11. ([@danez](https://github.com/danez))
* `babel-helper-module-transforms`, `babel-plugin-transform-modules-commonjs`
  * [#9802](https://github.com/babel/babel/pull/9802) Fix lazy option of babel-plugin-transform-modules-commonjs. ([@AndreasCag](https://github.com/AndreasCag))
* `babel-helper-create-class-features-plugin`, `babel-plugin-proposal-private-methods`
  * [#9801](https://github.com/babel/babel/pull/9801) Fix super method call in private instance method calling overridden method. ([@MattiasBuelens](https://github.com/MattiasBuelens))
* `babel-plugin-proposal-object-rest-spread`, `babel-plugin-transform-destructuring`
  * [#9416](https://github.com/babel/babel/pull/9416) Destructuring: Fix handling of impure computed keys with object rest. ([@motiz88](https://github.com/motiz88))
* `babel-plugin-transform-destructuring`
  * [#9412](https://github.com/babel/babel/pull/9412) Destructuring: Fix array unpacking assignments with holes on RHS. ([@motiz88](https://github.com/motiz88))
* `babel-traverse`
  * [#9415](https://github.com/babel/babel/pull/9415) @babel/traverse: Fix NodePath.getData. ([@71](https://github.com/71))
* `babel-parser`
  * [#9760](https://github.com/babel/babel/pull/9760) Allow HTML comments on first line. ([@danez](https://github.com/danez))
  * [#9700](https://github.com/babel/babel/pull/9700) Fix compatibility between estree and TS plugin. ([@danez](https://github.com/danez))
* `babel-helpers`
  * [#9756](https://github.com/babel/babel/pull/9756) Allow coreJS Symbol to be type object. ([@conartist6](https://github.com/conartist6))
* `babel-preset-env`
  * [#9752](https://github.com/babel/babel/pull/9752) Normalize `core-js` entry points. ([@zloirock](https://github.com/zloirock))

#### :nail_care: Polish
* `babel-parser`
  * [#9762](https://github.com/babel/babel/pull/9762) Optimize parseBindingAtom code to get better error messages. ([@danez](https://github.com/danez))
* `babel-core`, `babel-plugin-transform-for-of`
  * [#9698](https://github.com/babel/babel/pull/9698) Move array reference into `for` head initializer. ([@danez](https://github.com/danez))

#### :house: Internal
* Other
  * [#9806](https://github.com/babel/babel/pull/9806) Update test262. ([@danez](https://github.com/danez))
* `babel-parser`, `babel-preset-typescript`
  * [#9761](https://github.com/babel/babel/pull/9761) Explicit labels for tokenTypes. ([@danez](https://github.com/danez))


## v7.4.2 (2019-03-21)

#### :bug: Bug Fix
* `babel-parser`
  * [#9725](https://github.com/babel/babel/pull/9725) Modules might be in loose mode when checking for undecl exports ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#9719](https://github.com/babel/babel/pull/9719) Fix scope checks with enabled flow plugin ([@danez](https://github.com/danez))
* `babel-helpers`, `babel-plugin-transform-named-capturing-groups-regex`
  * [#9726](https://github.com/babel/babel/pull/9726) Fix typo in wrapRegExp helper ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-preset-env`
  * [#9724](https://github.com/babel/babel/pull/9724) Closes [#9713](https://github.com/babel/babel/issues/9713) ([@zloirock](https://github.com/zloirock))

#### :nail_care: Polish
* `babel-preset-env`
  * [#9732](https://github.com/babel/babel/pull/9732) Mark the core-js warning as such ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#9716](https://github.com/babel/babel/pull/9716) Tweak preset-env corejs/useBuiltIns warning and error messages ([@existentialism](https://github.com/existentialism))

#### :house: Internal
* [#9718](https://github.com/babel/babel/pull/9718) Bump Babel deps ([@existentialism](https://github.com/existentialism))

## v7.4.1 (2019-03-20)

#### :bug: Bug Fix
* `babel-preset-env`
  * [#9711](https://github.com/babel/babel/pull/9711) Alias @babel/preset-env/data/built-ins.json.js ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#9709](https://github.com/babel/babel/pull/9709) Bring back isPluginRequired ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

## v7.4.0 (2019-03-19)

#### :eyeglasses: Spec Compliance
* `babel-parser`
  * [#9529](https://github.com/babel/babel/pull/9529) Add `readonly` to TypeScript type modifier ([@tanhauhau](https://github.com/tanhauhau))
  * [#9534](https://github.com/babel/babel/pull/9534) TypeScript Constant contexts ([@tanhauhau](https://github.com/tanhauhau))
  * [#9637](https://github.com/babel/babel/pull/9637) Update identifier parsing per Unicode v12 ([@mathiasbynens](https://github.com/mathiasbynens))
  * [#9616](https://github.com/babel/babel/pull/9616) Allow any reserved word in `export {} from` specifiers ([@danez](https://github.com/danez))
  * [#9612](https://github.com/babel/babel/pull/9612) [TS] Disallow type casts in arrow parameters ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#9607](https://github.com/babel/babel/pull/9607) Refactor parsing object members ([@danez](https://github.com/danez))
  * [#9599](https://github.com/babel/babel/pull/9599) Disallow duplicate params in methods ([@danez](https://github.com/danez))
  * [#9586](https://github.com/babel/babel/pull/9586) Treat for loop body as part of loop scope ([@danez](https://github.com/danez))
* `babel-parser`, `babel-plugin-transform-typescript`
  * [#9641](https://github.com/babel/babel/pull/9641) Allow context type annotation on getters/setters ([@matt-tingen](https://github.com/matt-tingen))
* `babel-plugin-proposal-unicode-property-regex`, `babel-plugin-transform-dotall-regex`, `babel-plugin-transform-unicode-regex`
  * [#9636](https://github.com/babel/babel/pull/9636) Update babel-plugin-proposal-unicode-property-regex for Unicode v12 ([@mathiasbynens](https://github.com/mathiasbynens))
* `babel-generator`, `babel-parser`, `babel-plugin-transform-flow-strip-types`, `babel-plugin-transform-modules-systemjs`
  * [#9589](https://github.com/babel/babel/pull/9589) Check exported bindings are defined ([@danez](https://github.com/danez))
* `babel-generator`, `babel-parser`, `babel-plugin-transform-classes`, `babel-plugin-transform-flow-comments`, `babel-plugin-transform-flow-strip-types`, `babel-plugin-transform-new-target`
  * [#9493](https://github.com/babel/babel/pull/9493) Introduce scope tracking in the parser ([@danez](https://github.com/danez))

#### :rocket: New Feature
* `babel-helpers`, `babel-plugin-proposal-class-properties`, `babel-plugin-proposal-decorators`, `babel-plugin-proposal-object-rest-spread`, `babel-plugin-transform-runtime`, `babel-plugin-transform-typescript`, `babel-polyfill`, `babel-preset-env`, `babel-register`, `babel-runtime-corejs2`, `babel-runtime-corejs3`
  * [#7646](https://github.com/babel/babel/pull/7646) Update to `core-js@3` ([@zloirock](https://github.com/zloirock))
* `babel-template`
  * [#9648](https://github.com/babel/babel/pull/9648) Add %%placeholders%% support to @babel/template ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-parser`, `babel-plugin-proposal-partial-application`
  * [#9474](https://github.com/babel/babel/pull/9474) Partial application plugin ([@byara](https://github.com/byara))
* `babel-generator`, `babel-helper-create-class-features-plugin`, `babel-helpers`, `babel-plugin-proposal-private-methods`
  * [#9446](https://github.com/babel/babel/pull/9446) Private Static Class Methods (Stage 3) ([@tim-mc](https://github.com/tim-mc))
* `babel-generator`, `babel-types`
  * [#9542](https://github.com/babel/babel/pull/9542) Add placeholders support to @babel/types and @babel/generator ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-parser`
  * [#9364](https://github.com/babel/babel/pull/9364) Add parser support for placeholders ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-generator`, `babel-parser`, `babel-plugin-syntax-partial-application`, `babel-types`
  * [#9343](https://github.com/babel/babel/pull/9343) Partial Application Syntax: Stage 1 ([@byara](https://github.com/byara))

#### :bug: Bug Fix
* `babel-helper-create-class-features-plugin`, `babel-helper-replace-supers`, `babel-plugin-proposal-private-methods`
  * [#9704](https://github.com/babel/babel/pull/9704) Fix `super` Method Calls in Class Private Methods ([@tim-mc](https://github.com/tim-mc))
* `babel-parser`
  * [#9699](https://github.com/babel/babel/pull/9699) Correctly parse TS TypeAssertions around arrow functions ([@danez](https://github.com/danez))
  * [#9600](https://github.com/babel/babel/pull/9600) Fix scope check for 2nd+ lexical bindings ([@danez](https://github.com/danez))
  * [#9593](https://github.com/babel/babel/pull/9593) [TS] Correctly forget `await`s after parsing async arrows with type args ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#9585](https://github.com/babel/babel/pull/9585) Fix strict mode prescanning with EmptyStatement ([@danez](https://github.com/danez))
* `babel-core`, `babel-plugin-transform-for-of`
  * [#9697](https://github.com/babel/babel/pull/9697) Correctly preserve reference to array in for-of loop ([@danez](https://github.com/danez))
* `babel-plugin-transform-typescript`
  * [#9693](https://github.com/babel/babel/pull/9693) [plugin-transform-typescript] Fix transpiling of TS abstract classes with decorators  ([@agoldis](https://github.com/agoldis))
* `babel-traverse`, `babel-types`
  * [#9692](https://github.com/babel/babel/pull/9692) Fix TSFunctionType visitors definition ([@penielse](https://github.com/penielse))
* `babel-plugin-proposal-object-rest-spread`
  * [#9628](https://github.com/babel/babel/pull/9628) [proposal-object-rest-spread] fix templateLiteral in extractNormalizedKeys  ([@pnowak](https://github.com/pnowak))
* `babel-plugin-transform-modules-systemjs`
  * [#9639](https://github.com/babel/babel/pull/9639) System modules - Hoist classes like other variables ([@guybedford](https://github.com/guybedford))
* `babel-generator`, `babel-parser`
  * [#9618](https://github.com/babel/babel/pull/9618) Disallow escape sequences in contextual keywords ([@danez](https://github.com/danez))
* `babel-helper-split-export-declaration`, `babel-plugin-transform-modules-commonjs`, `babel-traverse`
  * [#9613](https://github.com/babel/babel/pull/9613) Don't add params of anonymous exported function decls to the outer scope ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-plugin-transform-parameters`, `babel-plugin-transform-typescript`, `babel-types`
  * [#9605](https://github.com/babel/babel/pull/9605) [plugin-transform-typescript] Strip type imports used in Enums and object types ([@echenley](https://github.com/echenley))
* `babel-helper-call-delegate`, `babel-plugin-transform-parameters`
  * [#9601](https://github.com/babel/babel/pull/9601) Don't loose "this" in helper-call-delegate ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-plugin-proposal-object-rest-spread`, `babel-plugin-transform-modules-commonjs`, `babel-traverse`, `babel-types`
  * [#9492](https://github.com/babel/babel/pull/9492) Mark FOO in "var { x: FOO }˝ as a binding, not as a reference ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-preset-env`
  * [#9595](https://github.com/babel/babel/pull/9595) preset-env: Sort versions before determining lowest ([@jridgewell](https://github.com/jridgewell))
* `babel-helper-define-map`, `babel-helper-hoist-variables`, `babel-parser`, `babel-plugin-proposal-object-rest-spread`, `babel-plugin-transform-block-scoping`, `babel-plugin-transform-destructuring`, `babel-plugin-transform-modules-systemjs`, `babel-traverse`, `babel-types`
  * [#9518](https://github.com/babel/babel/pull/9518) Use `for..of Object.keys` instead of `for..in` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :nail_care: Polish
* `babel-parser`
  * [#9646](https://github.com/babel/babel/pull/9646) Remove input and length from state ([@danez](https://github.com/danez))
  * [#9645](https://github.com/babel/babel/pull/9645) Reorganize token types and use a map for them ([@danez](https://github.com/danez))
  * [#9591](https://github.com/babel/babel/pull/9591) Remove always false param allowExpressionBody ([@danez](https://github.com/danez))
* `babel-standalone`, `babel-types`
  * [#9025](https://github.com/babel/babel/pull/9025) Make babel-standalone an ESModule and enable flow ([@danez](https://github.com/danez))
* `babel-generator`
  * [#9579](https://github.com/babel/babel/pull/9579) change var name for coherence ([@tanohzana](https://github.com/tanohzana))

#### :house: Internal
* Other
  * [#9588](https://github.com/babel/babel/pull/9588) Publish to npm using a GitHub action ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#9640](https://github.com/babel/babel/pull/9640) Switch from rollup-stream to rollup ([@danez](https://github.com/danez))
  * [#9647](https://github.com/babel/babel/pull/9647) Add WarningsToErrorsPlugin to webpack to avoid missing build problems on CI ([@danez](https://github.com/danez))
  * [#9624](https://github.com/babel/babel/pull/9624) Update dependencies ([@danez](https://github.com/danez))
  * [#9623](https://github.com/babel/babel/pull/9623) Add editorconfig for Makefile ([@danez](https://github.com/danez))
  * [#9587](https://github.com/babel/babel/pull/9587) Update test262 ([@danez](https://github.com/danez))
  * [#9582](https://github.com/babel/babel/pull/9582) Minify bundles on circle for repl ([@danez](https://github.com/danez))
* `babel-register`
  * [#9678](https://github.com/babel/babel/pull/9678) Remove dependency on home-or-tmp package ([@AmirS](https://github.com/AmirS))

## v7.3.4 (2019-02-25)

#### :bug: Bug Fix
* `babel-parser`
  * [#9572](https://github.com/babel/babel/pull/9572) Fix TypeScript parsers missing token check (#9571) ([@elevatebart](https://github.com/elevatebart))
  * [#9521](https://github.com/babel/babel/pull/9521) Also check AssignmentPatterns for duplicate export name ([@danez](https://github.com/danez))
* `babel-helper-create-class-features-plugin`, `babel-helper-replace-supers`, `babel-plugin-proposal-class-properties`, `babel-traverse`
  * [#9508](https://github.com/babel/babel/pull/9508) Use correct "this" in static fields ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-preset-env`
  * [#9566](https://github.com/babel/babel/pull/9566) Closes [#9465](https://github.com/babel/babel/issues/9465) ([@zloirock](https://github.com/zloirock))
* `babel-types`
  * [#9539](https://github.com/babel/babel/pull/9539) babel-types is* type checks accept null | undefiend as value TS type ([@ian-craig](https://github.com/ian-craig))
* `babel-plugin-transform-block-scoping`, `babel-traverse`
  * [#9532](https://github.com/babel/babel/pull/9532) Migrate some duplicate binding tests to traverse ([@danez](https://github.com/danez))
* `babel-generator`
  * [#9524](https://github.com/babel/babel/pull/9524) Fix typescript generator params ([@tanhauhau](https://github.com/tanhauhau))
  * [#9523](https://github.com/babel/babel/pull/9523) Fix flow babel-generator function parantheses ([@tanhauhau](https://github.com/tanhauhau))

#### :house: Internal
* Other
  * [#9561](https://github.com/babel/babel/pull/9561) Update CHANGELOG.md using the "Trigger GitHub release" action ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-plugin-proposal-object-rest-spread`, `babel-plugin-transform-modules-systemjs`
  * [#9541](https://github.com/babel/babel/pull/9541) Enable eqeqeq rule in eslint ([@danez](https://github.com/danez))
* `babel-generator`, `babel-parser`, `babel-plugin-transform-flow-strip-types`, `babel-traverse`
  * [#9522](https://github.com/babel/babel/pull/9522) Make tests spec compliant by avoiding duplicate declarations in input files ([@danez](https://github.com/danez))
* `babel-plugin-transform-proto-to-assign`
  * [#9533](https://github.com/babel/babel/pull/9533) Add import/no-extraneous-dependencies to ESLint ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

## v7.3.3 (2019-02-15)

#### :eyeglasses: Spec Compliance
* `babel-generator`
  * [#9501](https://github.com/babel/babel/pull/9501) Correctly output escapes in directives ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :bug: Bug Fix
* `babel-parser`
  * [#9477](https://github.com/babel/babel/pull/9477) Fix regression with let ([@danez](https://github.com/danez))
  * [#9431](https://github.com/babel/babel/pull/9431) Typescript function destructured params ([@mhcgrq](https://github.com/mhcgrq))
  * [#9463](https://github.com/babel/babel/pull/9463) Fix range for TypeScript optional parameter in arrow function ([@existentialism](https://github.com/existentialism))

#### :nail_care: Polish
* `babel-plugin-proposal-class-properties`, `babel-plugin-transform-classes`, `babel-plugin-transform-parameters`
  * [#9458](https://github.com/babel/babel/pull/9458) Fix duplicated assertThisInitialized calls in constructors ([@rubennorte](https://github.com/rubennorte))

#### :house: Internal
* Other
  * [#9517](https://github.com/babel/babel/pull/9517) Add duplicate-package-checker-webpack-plugin ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#9469](https://github.com/babel/babel/pull/9469) Exclude generate @babel/types files from coverage report ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-parser`
  * [#9491](https://github.com/babel/babel/pull/9491) Better error output in parser tests ([@danez](https://github.com/danez))
## v7.3.2 (2019-02-04)

Various spec compliance fixes and better support for smart pipelines and private methods.

Thanks @gverni, @naffiq, @spondbob and @dstaley for their first PRs!

#### :eyeglasses: Spec Compliance
* `babel-parser`
  * [#9403](https://github.com/babel/babel/pull/9403) Fix line continuation with Unicode line terminators. ([@danez](https://github.com/danez))
  * [#9400](https://github.com/babel/babel/pull/9400) Make yield a contextual keyword. ([@danez](https://github.com/danez))
  * [#9398](https://github.com/babel/babel/pull/9398) Correctly fail for invalid yield in for. ([@danez](https://github.com/danez))
  * [#9375](https://github.com/babel/babel/pull/9375) Make let a contextual keyword. ([@danez](https://github.com/danez))

#### :rocket: New Feature
* `babel-plugin-proposal-pipeline-operator`
  * [#9401](https://github.com/babel/babel/pull/9401) Support for await and yield in pipelines. ([@thiagoarrais](https://github.com/thiagoarrais))

#### :bug: Bug Fix
* `babel-plugin-proposal-private-methods`, `babel-types`
  * [#9453](https://github.com/babel/babel/pull/9453) Fix duplicate definition error in private class methods. ([@gverni](https://github.com/gverni))
* `babel-helper-create-class-features-plugin`, `babel-plugin-proposal-private-methods`
  * [#9423](https://github.com/babel/babel/pull/9423) Transform private async and generator functions. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-plugin-proposal-object-rest-spread`, `babel-plugin-transform-destructuring`
  * [#9414](https://github.com/babel/babel/pull/9414) Destructuring: Create assignments from ForX non-declaration patterns. ([@motiz88](https://github.com/motiz88))
* `babel-plugin-transform-typescript`
  * [#9095](https://github.com/babel/babel/pull/9095) Retain JSX pragma if defined as a comment. ([@dstaley](https://github.com/dstaley))
* `babel-parser`
  * [#9406](https://github.com/babel/babel/pull/9406) Fix location/range on TypeScript ExportNamedDeclarations. ([@existentialism](https://github.com/existentialism))
  * [#9371](https://github.com/babel/babel/pull/9371) Allow toplevel await with option and correctly mark await keyword as unexpected. ([@danez](https://github.com/danez))
* `babel-plugin-transform-typescript`, `babel-types`
  * [#8738](https://github.com/babel/babel/pull/8738) Fix typescript side effects. ([@yuri-karadzhov](https://github.com/yuri-karadzhov))
* `babel-generator`, `babel-types`
  * [#9396](https://github.com/babel/babel/pull/9396) Fix support for Flow's QualifiedTypeIdentifier. ([@existentialism](https://github.com/existentialism))

#### :nail_care: Polish
* `babel-parser`
  * [#9405](https://github.com/babel/babel/pull/9405) Simplify await and yield tracking in params. ([@danez](https://github.com/danez))
* `babel-parser`, `babel-preset-typescript`
  * [#9402](https://github.com/babel/babel/pull/9402) Unify reserved word checking and update error messages. ([@danez](https://github.com/danez))

## v7.3.1 (2019-01-22)

This release fixes some regressions introduced in v7.3.0

#### :bug: Bug Fix
* `babel-helpers`, `babel-plugin-proposal-object-rest-spread`, `babel-preset-env`
  * [#9379](https://github.com/babel/babel/pull/9379) Revert "Differentiate object spread and non-spread properties (#9341)". ([@danez](https://github.com/danez))
* `babel-parser`
  * [#9377](https://github.com/babel/babel/pull/9377) fix new keyword broken by recent refactoring. ([@danez](https://github.com/danez))

## v7.3.0 (2019-01-21)

Thanks to @jamesgeorge007 and @armano2 for their first PR!

#### :eyeglasses: Spec Compliance
* `babel-parser`
  * [#9314](https://github.com/babel/babel/pull/9314) Disallow async functions as loop body. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#9315](https://github.com/babel/babel/pull/9315) Parse class heritage as strict mode code. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#9313](https://github.com/babel/babel/pull/9313) Disallow `new import(x)` and `import(x,)`. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#9311](https://github.com/babel/babel/pull/9311) Disallow trailing comma after rest. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :rocket: New Feature
* `babel-helper-create-class-features-plugin`, `babel-helpers`, `babel-plugin-proposal-private-methods`
  * [#9101](https://github.com/babel/babel/pull/9101) Private Class Methods Stage 3: Private Accessors. ([@tim-mc](https://github.com/tim-mc))
* `babel-plugin-proposal-pipeline-operator`, `babel-plugin-syntax-pipeline-operator`
  * [#9179](https://github.com/babel/babel/pull/9179) Transform for the smart pipeline operator proposal. ([@thiagoarrais](https://github.com/thiagoarrais))
* `babel-preset-env-standalone`, `babel-preset-env`
  * [#9345](https://github.com/babel/babel/pull/9345) Add support for transform-named-capturing-groups-regex in preset-env. ([@existentialism](https://github.com/existentialism))
* `babel-helpers`, `babel-plugin-transform-named-capturing-groups-regex`
  * [#7105](https://github.com/babel/babel/pull/7105) Add @babel/plugin-transform-named-capturing-groups-regex. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-preset-env`
  * [#9323](https://github.com/babel/babel/pull/9323) Add support for proposal-json-strings in preset-env. ([@existentialism](https://github.com/existentialism))
* `babel-generator`, `babel-types`
  * [#9309](https://github.com/babel/babel/pull/9309) Add emit and builder for TSImportType. ([@hzoo](https://github.com/hzoo))
* `babel-parser`
  * [#9302](https://github.com/babel/babel/pull/9302) @babel/parser(ts): Add parsing of type import. ([@armano2](https://github.com/armano2))

#### :bug: Bug Fix
* `babel-parser`
  * [#9336](https://github.com/babel/babel/pull/9336) Disallow usage of invalid keyword after export abstract statement in Typescript. ([@armano2](https://github.com/armano2))
  * [#9328](https://github.com/babel/babel/pull/9328) Fix handling newline with TypeScript declare and abstract classes. ([@existentialism](https://github.com/existentialism))
  * [#9335](https://github.com/babel/babel/pull/9335) Fix range on TypeScript index signature parameters. ([@existentialism](https://github.com/existentialism))
  * [#9292](https://github.com/babel/babel/pull/9292) Throw error if TypeScript class has empty implements. ([@existentialism](https://github.com/existentialism))
  * [#9284](https://github.com/babel/babel/pull/9284) Fix location for typescript type assertions in AST. ([@danez](https://github.com/danez))
  * [#9276](https://github.com/babel/babel/pull/9276) Ensure modifiers are included in TSParameterProperty ranges. ([@existentialism](https://github.com/existentialism))
  * [#9230](https://github.com/babel/babel/pull/9230) babel-parser: typescript: add missing bigint keyword. ([@armano2](https://github.com/armano2))
* `babel-types`
  * [#9333](https://github.com/babel/babel/pull/9333) Copy "optional" property when cloning Identifier node. ([@unconfident](https://github.com/unconfident))
* `babel-helper-create-class-features-plugin`, `babel-helpers`, `babel-plugin-proposal-decorators`
  * [#9244](https://github.com/babel/babel/pull/9244) [decorators] Set method names at compile time instead of at runtime. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-helper-builder-react-jsx`, `babel-plugin-transform-react-jsx`
  * [#9119](https://github.com/babel/babel/pull/9119) Revert "Revert babel-helper-builder-react-jsx change from #4988". ([@danez](https://github.com/danez))
* `babel-helper-create-class-features-plugin`, `babel-plugin-proposal-private-methods`
  * [#9248](https://github.com/babel/babel/pull/9248) [private methods] Define private methods before executing initializers. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-preset-env`
  * [#9219](https://github.com/babel/babel/pull/9219) Fix handling scoped packages in preset-env include/exclude options. ([@existentialism](https://github.com/existentialism))

#### :nail_care: Polish
* `babel-parser`
  * [#9348](https://github.com/babel/babel/pull/9348) Parser Performance Collection. ([@danez](https://github.com/danez))

#### :memo: Documentation
* [#9370](https://github.com/babel/babel/pull/9370) add v7 downloads [skip ci]. ([@hzoo](https://github.com/hzoo))

#### :house: Internal
* `babel-parser`
  * [#9312](https://github.com/babel/babel/pull/9312) Merge declaration and init of props in parser's state. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-types`
  * [#9245](https://github.com/babel/babel/pull/9245) [@babel/types] Moved generators related to babel-types into the babel-types package directory.. ([@cameron-martin](https://github.com/cameron-martin))
* Other
  * [#9288](https://github.com/babel/babel/pull/9288) Test262 update. ([@existentialism](https://github.com/existentialism))
  * [#9290](https://github.com/babel/babel/pull/9290) Use 2014-present in license. ([@xtuc](https://github.com/xtuc))
  * [#9271](https://github.com/babel/babel/pull/9271) Bump license years for 2019. ([@berlamhenderson](https://github.com/berlamhenderson))
* `babel-helpers`
  * [#9166](https://github.com/babel/babel/pull/9166) Add mixins support to the _decorate helper. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

## v7.2.5 (2018-12-21)

`@babel/polyfill` didn't get published correctly in v7.2.3 (#9227).

## v7.2.4 (2018-12-20)

Minify `@babel/standalone` and `@babel/preset-env-standalone`.

## v7.2.3 (2018-12-20)

This is a small release, mainly to test Lerna 3.
We force-published `@babel/polyfill` and `@babel/preset-env`, since they should have been released respectively in v7.1.0 and v7.2.2 but for different reasons they didn't get updated.

Half of the commits in this release are made by first time contributors! Thanks to @cameron-martin, @cphamlet, @tanhauhau and @jedwards1211. :tada:

#### :rocket: New Feature
* [#9110](https://github.com/babel/babel/pull/9110) Added type-level mapping between aliases and nodes that have that alias. ([@cameron-martin](https://github.com/cameron-martin))

#### :bug: Bug Fix
* `babel-plugin-transform-flow-strip-types`
  * [#9197](https://github.com/babel/babel/pull/9197) Strips flow directive fully. ([@tanhauhau](https://github.com/tanhauhau))
* `babel-parser`
  * [#9184](https://github.com/babel/babel/pull/9184) Allow keywords to be used in type annotations. ([@danez](https://github.com/danez))

#### :house: Internal
* `babel-plugin-proposal-class-properties`, `babel-plugin-proposal-decorators`, `babel-plugin-proposal-private-methods`, `babel-traverse`
  * [#9206](https://github.com/babel/babel/pull/9206) Use @babel/eslint-plugin-developement. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

## v7.2.2 (2018-12-15)

Mostly bug fixes and internal changes.
Thanks to @paleite, @saschanaz and @joeldenning for their first PRs!

#### :bug: Bug Fix
* `babel-plugin-transform-destructuring`, `babel-plugin-transform-spread`
  * [#9108](https://github.com/babel/babel/pull/9108) Correctly transform spreads to use proper concat method. ([@danez](https://github.com/danez))
* `babel-parser`
  * [#9168](https://github.com/babel/babel/pull/9168) [parser] Handle flow comments with leading spaces. ([@vikr01](https://github.com/vikr01))
* `babel-helper-module-transforms`, `babel-plugin-transform-modules-commonjs`
  * [#9171](https://github.com/babel/babel/pull/9171) Fix transforming empty export statement. ([@danez](https://github.com/danez))
* `babel-node`
  * [#9148](https://github.com/babel/babel/pull/9148) Fix --root-mode option in babel-node. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-plugin-transform-classes`
  * [#9135](https://github.com/babel/babel/pull/9135) Inherit properties in function from method in loose mode. ([@rubennorte](https://github.com/rubennorte))
* `babel-preset-env`
  * [#9140](https://github.com/babel/babel/pull/9140) Disable parameter-destructuring in Edge 18. ([@saschanaz](https://github.com/saschanaz))
* `babel-plugin-transform-arrow-functions`, `babel-traverse`
  * [#9060](https://github.com/babel/babel/pull/9060) Not depending on return value of super(). Closes [#9020](https://github.com/babel/babel/issues/9020).. ([@joeldenning](https://github.com/joeldenning))

#### :house: Internal
* `babel-helper-create-class-features-plugin`, `babel-plugin-proposal-nullish-coalescing-operator`, `babel-plugin-syntax-bigint`, `babel-plugin-transform-dotall-regex`
  * [#9176](https://github.com/babel/babel/pull/9176) Fix package.json repository URLs. ([@paleite](https://github.com/paleite))
* Other
  * [#9158](https://github.com/babel/babel/pull/9158) add triage label to new issues [skip ci]. ([@danez](https://github.com/danez))
  * [#9143](https://github.com/babel/babel/pull/9143) Fix a typo from the issue template for bugs. ([@saschanaz](https://github.com/saschanaz))
  * [#9133](https://github.com/babel/babel/pull/9133) Move to travis vm based builds. ([@danez](https://github.com/danez))
  * [#9132](https://github.com/babel/babel/pull/9132) Ensure we always use repository versions of babel dependencies in tests. ([@danez](https://github.com/danez))
  * [#9131](https://github.com/babel/babel/pull/9131) Update issue templates [skip ci]. ([@hzoo](https://github.com/hzoo))
* `babel-helper-create-class-features-plugin`, `babel-plugin-proposal-class-properties`, `babel-plugin-proposal-decorators`
  * [#9059](https://github.com/babel/babel/pull/9059) Move decorators transform to @babel/helper-create-class-features-plugin. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-core`, `babel-parser`, `babel-template`
  * [#9128](https://github.com/babel/babel/pull/9128) Fix running flow on travis and update flow. ([@danez](https://github.com/danez))

## v7.2.1 (2018-12-04)

This release fixes a regression introduced in v7.2.0 (https://github.com/babel/babel/issues/9120)

#### :bug: Bug Fix
* `babel-helper-create-class-features-plugin`
  * [#9121](https://github.com/babel/babel/pull/9121) Don't use isClassPrivateMethod because it isn't supported in <7.2.0. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

## v7.2.0 (2018-12-03)

You can read more about this release at https://babeljs.io/blog/2018/12/03/7.2.0.

#### :rocket: New Feature
* `babel-parser`
  * [#8289](https://github.com/babel/babel/pull/8289) Implement Smart Pipeline proposal in @babel/parser. ([@mAAdhaTTah](https://github.com/mAAdhaTTah))
* `babel-core`
  * [#8986](https://github.com/babel/babel/pull/8986) Export @babel/parser#tokTypes in @babel/core. ([@kaicataldo](https://github.com/kaicataldo))
* `babel-node`
  * [#9078](https://github.com/babel/babel/pull/9078) Pass `rootMode` from `@babel/node`.. ([@wtgtybhertgeghgtwtg](https://github.com/wtgtybhertgeghgtwtg))
* `babel-generator`, `babel-helpers`, `babel-plugin-class-features`, `babel-plugin-proposal-private-methods`, `babel-plugin-syntax-class-properties`, `babel-types`
  * [#8654](https://github.com/babel/babel/pull/8654) Private class methods stage 3. ([@tim-mc](https://github.com/tim-mc))
* `babel-preset-env`
  * [#9048](https://github.com/babel/babel/pull/9048) Update mappings for node 10 in preset-env. ([@existentialism](https://github.com/existentialism))

#### :bug: Bug Fix
* `babel-parser`
  * [#9114](https://github.com/babel/babel/pull/9114) Parse non-octals with leading zeros in non strict mode correctly. ([@danez](https://github.com/danez))
  * [#9074](https://github.com/babel/babel/pull/9074) Disallow await inside arrow functions. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#9069](https://github.com/babel/babel/pull/9069) [flow] Allow type casts in array patterns inside arrow parameters. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#9058](https://github.com/babel/babel/pull/9058) Fix compatibility between typescript and jsx plugins in interface declarations. ([@danez](https://github.com/danez))
  * [#9055](https://github.com/babel/babel/pull/9055) Fix bug with parsing TS generic async arrow function. ([@existentialism](https://github.com/existentialism))
  * [#9035](https://github.com/babel/babel/pull/9035) Fix parsing typescript function types with destructuring. ([@danez](https://github.com/danez))
* `babel-helper-fixtures`, `babel-parser`
  * [#9113](https://github.com/babel/babel/pull/9113) Ignore empty fixture directories and fix fixtures in the parser. ([@danez](https://github.com/danez))
* `babel-preset-env`
  * [#9091](https://github.com/babel/babel/pull/9091) Update mapping for regex unicode plugin in preset-env. ([@existentialism](https://github.com/existentialism))
* `babel-plugin-transform-destructuring`
  * [#8916](https://github.com/babel/babel/pull/8916) Fix destructuring assignment in arrow functions without block. ([@RubenVerborgh](https://github.com/RubenVerborgh))
* `babel-plugin-proposal-optional-chaining`
  * [#9073](https://github.com/babel/babel/pull/9073) Microbouji patch/8136. ([@jridgewell](https://github.com/jridgewell))
* `babel-core`, `babel-helper-wrap-function`, `babel-plugin-proposal-async-generator-functions`, `babel-plugin-proposal-function-sent`, `babel-plugin-transform-async-to-generator`, `babel-plugin-transform-classes`
  * [#9039](https://github.com/babel/babel/pull/9039) Fix recursive async function expressions. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-core`
  * [#9034](https://github.com/babel/babel/pull/9034) Normalize presets before merging config with others.. ([@loganfsmyth](https://github.com/loganfsmyth))

#### :nail_care: Polish
* `babel-generator`
  * [#9089](https://github.com/babel/babel/pull/9089) Remove unused variable. ([@Gcaufy](https://github.com/Gcaufy))
* `babel-node`
  * [#9079](https://github.com/babel/babel/pull/9079) Move `fs-readdir-recursive` and `output-file-sync` to `devDependencies` for `@babel/node`.. ([@wtgtybhertgeghgtwtg](https://github.com/wtgtybhertgeghgtwtg))
* `babel-parser`
  * [#9046](https://github.com/babel/babel/pull/9046) a better error message for disallowed trailing commas/additional parameters after rest elements in function params. ([@morozRed](https://github.com/morozRed))
* `babel-*`
  * [#8769](https://github.com/babel/babel/pull/8769) Add plugins name. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :house: Internal
* `babel-helper-create-class-features-plugin`, `babel-plugin-proposal-class-properties`, `babel-plugin-proposal-private-methods`
  * [#9083](https://github.com/babel/babel/pull/9083) Make @babel/plugin-class-features a normal helper package. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* Other
  * [#9096](https://github.com/babel/babel/pull/9096) Add node 11 to CI and remove node 9. ([@danez](https://github.com/danez))
  * [#9094](https://github.com/babel/babel/pull/9094) Skip minifying standalone in non-publish runs. ([@danez](https://github.com/danez))
* `babel-types`
  * [#9093](https://github.com/babel/babel/pull/9093) Fix warning when using prettier in code generators. ([@danez](https://github.com/danez))
* `babel-generator`
  * [#9089](https://github.com/babel/babel/pull/9089) Remove unused variable. ([@Gcaufy](https://github.com/Gcaufy))

## v7.1.6 (2018-11-13)

#### :bug: Bug Fix
* `babel-generator`
  * [#9003](https://github.com/babel/babel/pull/9003) Fix retainLines regression for arrow functions. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-types`
  * [#8997](https://github.com/babel/babel/pull/8997) Fix cloneNode with typeAnnotation.. ([@neoziro](https://github.com/neoziro))
* `babel-plugin-transform-flow-strip-types`, `babel-plugin-transform-react-jsx`
  * [#8701](https://github.com/babel/babel/pull/8701) Fix "TypeError: comments is not iterable". ([@AlicanC](https://github.com/AlicanC))
* `babel-core`
  * [#9004](https://github.com/babel/babel/pull/9004) Fix browser files to have the same API as the nodejs ones. ([@danez](https://github.com/danez))
* Other
  * [#9007](https://github.com/babel/babel/pull/9007) [Types] fix generated TS/Flow comment types. ([@ljqx](https://github.com/ljqx))
* `babel-preset-env`
  * [#8555](https://github.com/babel/babel/pull/8555) preset-env: fix `opera` from `esmodules` target and Browserslist not used. ([@ylemkimon](https://github.com/ylemkimon))
* `babel-plugin-proposal-decorators`, `babel-traverse`
  * [#8970](https://github.com/babel/babel/pull/8970) [decorators] Correctly insert `_initialize(this)` after `super()`.. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-parser`
  * [#8972](https://github.com/babel/babel/pull/8972) Fix several edge cases with context expression state. ([@danez](https://github.com/danez))

#### :nail_care: Polish
* `babel-parser`
  * [#8984](https://github.com/babel/babel/pull/8984) Rename primitive types to reserved types. ([@danez](https://github.com/danez))

#### :house: Internal
* [#8982](https://github.com/babel/babel/pull/8982) fix publish command [skip ci]. ([@hzoo](https://github.com/hzoo))
* [#8988](https://github.com/babel/babel/pull/8988) Remove definition of micromatch which was removed.. ([@danez](https://github.com/danez))

## v7.1.5 (2018-11-06)

#### :eyeglasses: Spec Compliance
* `babel-parser`, `babylon`
  * [#7727](https://github.com/babel/babel/pull/7727) Fix await in function name and parameters. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :rocket: New Feature
* `babel-parser`
  * [#8828](https://github.com/babel/babel/pull/8828) Typescript: Validate tuple type element positions. ([@Retsam](https://github.com/Retsam))
  * [#8883](https://github.com/babel/babel/pull/8883) [flow] Add support for parsing `_` as implicit instantiation in call/new. ([@jbrown215](https://github.com/jbrown215))
* `babel-core`, `babel-generator`, `babel-parser`, `babel-plugin-syntax-typescript`, `babel-traverse`
  * [#8448](https://github.com/babel/babel/pull/8448) Remove Babylon plugins for features already merged to the ECMAScript spec. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-parser`, `babel-types`
  * [#8884](https://github.com/babel/babel/pull/8884) [flow] Explicit inexact objects with `...`. ([@jbrown215](https://github.com/jbrown215))
* `babel-preset-env`
  * [#8898](https://github.com/babel/babel/pull/8898) Update preset-env data. ([@existentialism](https://github.com/existentialism))

#### :bug: Bug Fix
* `babel-parser`
  * [#8956](https://github.com/babel/babel/pull/8956) Do not allow TypeCastExpressions w/o parens . ([@danez](https://github.com/danez))
  * [#8954](https://github.com/babel/babel/pull/8954) Allow function types in type params within arrow return types. ([@danez](https://github.com/danez))
  * [#8866](https://github.com/babel/babel/pull/8866) Closes [#8865](https://github.com/babel/babel/issues/8865). ([@byronluk](https://github.com/byronluk))
* `babel-core`
  * [#8910](https://github.com/babel/babel/pull/8910) Resolve babel.config.js 'babelrcRoots' values relative to the config file.. ([@loganfsmyth](https://github.com/loganfsmyth))
  * [#8950](https://github.com/babel/babel/pull/8950) Fix message when plugin of a wrong type is passed. ([@everdimension](https://github.com/everdimension))
* `babel-plugin-transform-block-scoping`
  * [#8937](https://github.com/babel/babel/pull/8937) rename colliding let bindings with for loop init. ([@byronluk](https://github.com/byronluk))
  * [#8914](https://github.com/babel/babel/pull/8914) Treat break inside block inside loop. ([@thiagoarrais](https://github.com/thiagoarrais))
* `babel-preset-env`
  * [#8926](https://github.com/babel/babel/pull/8926) preset-env: Edge support for arrow param destructuring. ([@benmosher](https://github.com/benmosher))
* `babel-generator`
  * [#8868](https://github.com/babel/babel/pull/8868) fix single-arg async arrows when retainLines=true. ([@ryanwmarsh](https://github.com/ryanwmarsh))
* `babel-traverse`
  * [#8880](https://github.com/babel/babel/pull/8880) fix: Expression x === 'y' && '' should not evaluate to undefined.. ([@Cyp](https://github.com/Cyp))

#### :nail_care: Polish
* [#8873](https://github.com/babel/babel/pull/8873) fixed an extra word. ([@vvyomjjain](https://github.com/vvyomjjain))

## v7.1.4 (2018-10-11)

Just re-published `@babel/traverse` without `**` so that it works in Node 6.

## v7.1.3 (2018-10-11)

#### :bug: Bug Fix
* `babel-generator`, `babel-parser`, `babel-plugin-transform-typescript`, `babel-types`
  * [#8720](https://github.com/babel/babel/pull/8720) Typescript - Tuple elements can be optional. ([@Retsam](https://github.com/Retsam))
* `babel-traverse`
  * [#8833](https://github.com/babel/babel/pull/8833) Insertafter jsx fix. ([@kevintab95](https://github.com/kevintab95))
* `babel-parser`
  * [#8830](https://github.com/babel/babel/pull/8830) Correct handling of newline after async with paren-less arrow func. ([@Retsam](https://github.com/Retsam))
  * [#8756](https://github.com/babel/babel/pull/8756) class private methods and properties: should not allow spaces between # and identifier. ([@macabeus](https://github.com/macabeus))
  * [#8804](https://github.com/babel/babel/pull/8804) Fix parsing of slash after class expression. ([@existentialism](https://github.com/existentialism))
  * [#8767](https://github.com/babel/babel/pull/8767) [decorators] [typescript] Parse type parameters. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#8792](https://github.com/babel/babel/pull/8792) Fix perf issue in typescript parser plugin. ([@matthewrobertson](https://github.com/matthewrobertson))
* `babel-generator`, `babel-parser`, `babel-plugin-transform-typescript`, `babel-types`
  * [#8805](https://github.com/babel/babel/pull/8805) Typescript - Tuples can include rest elements. ([@Retsam](https://github.com/Retsam))
* `babel-types`
  * [#8791](https://github.com/babel/babel/pull/8791) types: allow jsxEmptyExpression inside jsxExpressionContainer. ([@tvooo](https://github.com/tvooo))
* `babel-plugin-transform-modules-systemjs`
  * [#8820](https://github.com/babel/babel/pull/8820) System module format - fixes function hoisting failure case. ([@guybedford](https://github.com/guybedford))
* `babel-plugin-transform-destructuring`
  * [#8793](https://github.com/babel/babel/pull/8793) Ensure destructuring's computed key handling matches object-rest-spread. ([@existentialism](https://github.com/existentialism))

## 7.1.2 (2018-09-28)

Same as v7.1.1, except compiled against Node 6 instead of Node 8 by accident (e.g had `async functions`).

## v7.1.1 (2018-09-28)

> EDIT: had a publish issue here as well where it compiled against Node 8 instead of Node 6 so 7.1.2 will fix this.
> Also force publish `@babel/runtime` and `@babel/runtime-corejs2`. We need to fix the publishing around that since Lerna doesn't pickup the `@babel/helpers` changes as there is no "dependency"

#### :bug: Bug Fix
* `babel-generator`, `babel-parser`, `babel-types`
  * [#8755](https://github.com/babel/babel/pull/8755) TypeScript: reserve `unknown` as TSUnknownKeyword. ([@g-plane](https://github.com/g-plane))
* `babel-plugin-transform-destructuring`
  * [#8535](https://github.com/babel/babel/pull/8535)  Do not unpack array patterns that update a referenced binding. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-plugin-proposal-decorators`
  * [#8742](https://github.com/babel/babel/pull/8742) [decorators] Support async and generator methods. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-helpers`, `babel-plugin-proposal-decorators`
  * [#8761](https://github.com/babel/babel/pull/8761) [decorators] Fields are enumerable. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-generator`
  * [#8751](https://github.com/babel/babel/pull/8751) Fix some missing parens cases with OptionalMemberExpression in generator. ([@existentialism](https://github.com/existentialism))
  * [#8727](https://github.com/babel/babel/pull/8727) Handle throw expressions in generator. ([@existentialism](https://github.com/existentialism))

#### :house: Internal
* Other
  * [#8780](https://github.com/babel/babel/pull/8780) Run test262 tests for exportNamespaceFrom. ([@existentialism](https://github.com/existentialism))
* `babel-helper-transform-fixture-test-runner`
  * [#8768](https://github.com/babel/babel/pull/8768) Use babel-check-duplicated-nodes. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

## v7.1.0 (2018-09-17)

Check http://babeljs.io/blog/2018/09/17/7.1.0

#### :rocket: New Feature
* `babel-cli`, `babel-core`
  * [#8660](https://github.com/babel/babel/pull/8660) Better support monorepos by allowing users to opt into automatically resolving 'root' with `rootMode: "upward"`.. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-helper-transform-fixture-test-runner`
  * [#7582](https://github.com/babel/babel/pull/7582) Allow regular plugins/presets resolution algorithm for packages outsi…. ([@Andarist](https://github.com/Andarist))
* `babel-helpers`, `babel-plugin-proposal-decorators`, `babel-plugin-syntax-decorators`
  * [#7976](https://github.com/babel/babel/pull/7976) Add support for the new decorators proposal. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-helpers`, `babel-plugin-proposal-class-properties`
  * [#8205](https://github.com/babel/babel/pull/8205) Private Static Fields Features: Stage 3. ([@rricard](https://github.com/rricard))

#### :bug: Bug Fix
* `babel-parser`
  * [#8698](https://github.com/babel/babel/pull/8698) Fix parsing of newline between 'async' and 'function'. ([@existentialism](https://github.com/existentialism))
  * [#8677](https://github.com/babel/babel/pull/8677) Fix typescript parsing typed object shorthand methods. ([@existentialism](https://github.com/existentialism))
* `babel-plugin-transform-typescript`
  * [#8682](https://github.com/babel/babel/pull/8682) Fix TSParameterProperty getting lost with transform-classes. ([@existentialism](https://github.com/existentialism))
  * [#8695](https://github.com/babel/babel/pull/8695) Adjust TSParameterProperty handling to work with transform-parameters. ([@existentialism](https://github.com/existentialism))
  * [#8666](https://github.com/babel/babel/pull/8666) Fix typescript import elision. ([@Retsam](https://github.com/Retsam))
* `babel-preset-env`
  * [#8693](https://github.com/babel/babel/pull/8693) Fix es6.string.iterator mapping in babel-preset-env. ([@existentialism](https://github.com/existentialism))
* `babel-core`, `babel-plugin-proposal-class-properties`, `babel-plugin-proposal-decorators`, `babel-plugin-transform-runtime`
  * [#8659](https://github.com/babel/babel/pull/8659) Fix version checks in .availableHelper and transform-runtime definitions.. ([@loganfsmyth](https://github.com/loganfsmyth))
* Other
  * [#8627](https://github.com/babel/babel/pull/8627) ts generator: allow reserved keywords in interfaces. ([@43081j](https://github.com/43081j))
* `babel-plugin-transform-parameters`
  * [#8414](https://github.com/babel/babel/pull/8414) Allow patterns as argument of RestElement. ([@microbouji](https://github.com/microbouji))
* `babel-core`, `babel-plugin-transform-runtime`
  * [#8624](https://github.com/babel/babel/pull/8624) Verify 'sourceMap' option with hasOwnProperty, and verify string-typed 'version'. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-helpers`, `babel-plugin-proposal-class-properties`
  * [#8614](https://github.com/babel/babel/pull/8614) [static private] Unify loose handling of static and instance props. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :nail_care: Polish
* `babel-plugin-transform-runtime`
  * [#8581](https://github.com/babel/babel/pull/8581) Fix grammar in error message at @babel/plugin-transform-runtime. ([@tricknotes](https://github.com/tricknotes))
* `babel-parser`
  * [#8576](https://github.com/babel/babel/pull/8576) More helpful errorr message for missing decoratorsBeforeExport in parser. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :memo: Documentation
* [#8561](https://github.com/babel/babel/pull/8561) Added pronounciation of babel. ([@siddhant1](https://github.com/siddhant1))

#### :house: Internal
* `babel-core`
  * [#8714](https://github.com/babel/babel/pull/8714) Fix Flow error with new versionRange test.. ([@loganfsmyth](https://github.com/loganfsmyth))
* Other
  * [#8679](https://github.com/babel/babel/pull/8679) remove force publish, temp tag [skip ci]. ([@hzoo](https://github.com/hzoo))
* `babel-plugin-transform-runtime`
  * [#8661](https://github.com/babel/babel/pull/8661) Makefile: run fix json on fix. ([@xtuc](https://github.com/xtuc))
* `babel-*`
  * [#8658](https://github.com/babel/babel/pull/8658) Format fixture options.json with Prettier.. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-parser`
  * [#8630](https://github.com/babel/babel/pull/8630) Bump flow to 0.80 and fix sourceType error. ([@existentialism](https://github.com/existentialism))
  * [#8610](https://github.com/babel/babel/pull/8610) types: missing `unambiguous` sourceType. ([@xtuc](https://github.com/xtuc))
  * [#8170](https://github.com/babel/babel/pull/8170) @babel/parser: expose a TypeScript definition file from package. ([@AviVahl](https://github.com/AviVahl))
* `babel-*`
  * [#8573](https://github.com/babel/babel/pull/8573) add access public to all packages [skip ci]. ([@hzoo](https://github.com/hzoo))

## v7.0.1 (2018-09-11)

Doing a quick patch regarding helpers versioning to prevent future issues: https://github.com/babel/babel/pull/8659

## v7.0.0 (2018-08-27)

No change from rc.4. Finally released as https://babeljs.io/blog/2018/08/27/7.0.0!

## v7.0.0-rc.4 (2018-08-27)

> Similar to removing proposals in `@babel/polyfill`, we are removing them in `transform-runtime`

#### :boom: Breaking Change
* `babel-plugin-transform-runtime`
  * [#8547](https://github.com/babel/babel/pull/8547) Remove nonstandard functions and fake prototype methods from babel-runtime. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-parser`
  * [#8539](https://github.com/babel/babel/pull/8539) Update parser whitespace for clarity. ([@jridgewell](https://github.com/jridgewell))

#### :bug: Bug Fix
* `babel-register`
  * [#8553](https://github.com/babel/babel/pull/8553) bump source-map-support. ([@hzoo](https://github.com/hzoo))
* `babel-core`
  * [#8546](https://github.com/babel/babel/pull/8546) Default highlightCode:true for the parser highlighting.. ([@loganfsmyth](https://github.com/loganfsmyth))

#### :house: Internal
* Other
  * [#8554](https://github.com/babel/babel/pull/8554) Lerna: remove exact [skip ci]. ([@hzoo](https://github.com/hzoo))
* `babel-parser`
  * [#8540](https://github.com/babel/babel/pull/8540) Cleanup getLineInfo. ([@jridgewell](https://github.com/jridgewell))
  * [#8541](https://github.com/babel/babel/pull/8541) Update to ES6 String methods. ([@jridgewell](https://github.com/jridgewell))
  * [#8537](https://github.com/babel/babel/pull/8537) Flatten TokenType class hierarchy. ([@jridgewell](https://github.com/jridgewell))
  * [#8539](https://github.com/babel/babel/pull/8539) Update parser whitespace for clarity. ([@jridgewell](https://github.com/jridgewell))

## v7.0.0-rc.3 (2018-08-24)

#### :boom: Breaking Change
* `babel-preset-env`
  * [#8509](https://github.com/babel/babel/pull/8509) Add browserslist 4 support.. ([@yavorsky](https://github.com/yavorsky))
* `babel-plugin-transform-runtime`
  * [#8518](https://github.com/babel/babel/pull/8518) Make 'useESModules' only toggle CJS vs ESM helpers when importing file is ESM.. ([@loganfsmyth](https://github.com/loganfsmyth))

#### :rocket: New Feature
* `babel-plugin-transform-runtime`
  * [#8520](https://github.com/babel/babel/pull/8520) Expose opt-in useESModules:"auto" from transform-runtime to toggle based on 'supportsStaticESM'. ([@loganfsmyth](https://github.com/loganfsmyth))

#### :bug: Bug Fix
* `babel-helpers`, `babel-plugin-transform-classes`, `babel-preset-env`
  * [#8501](https://github.com/babel/babel/pull/8501) [_wrapNativeSuper] Don't wrap non-native constructors. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-generator`, `babel-traverse`, `babel-types`
  * [#8478](https://github.com/babel/babel/pull/8478) Fix path.scope.rename() to not change break clauses. ([@rafeca](https://github.com/rafeca))
* `babel-plugin-proposal-object-rest-spread`
  * [#8514](https://github.com/babel/babel/pull/8514) fix: object rest with default values bug. ([@jquense](https://github.com/jquense))
* `babel-traverse`
  * [#8505](https://github.com/babel/babel/pull/8505) Rename exported functions where name conflicts with param.. ([@loganfsmyth](https://github.com/loganfsmyth))

#### :house: Internal
* `babel-plugin-transform-object-set-prototype-of-to-assign`
  * [#8409](https://github.com/babel/babel/pull/8409) Add LICENSE file to published npm packages [skip ci]. ([@opichals](https://github.com/opichals))
* Other
  * [#8504](https://github.com/babel/babel/pull/8504) Update Babel to rc.2. ([@hzoo](https://github.com/hzoo))

## v7.0.0-rc.2 (2018-08-21)

A notable change is the addition of https://github.com/babel/babel/pull/8485 which enables https://github.com/babel/babel-loader/pull/660 (automatically doing `modules: false` for `@babel/preset-env` when using `babel-loader`.

#### :boom: Breaking Change
* `babel-core`
  * [#8470](https://github.com/babel/babel/pull/8470) Remove File#resolveModuleSource. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#8473](https://github.com/babel/babel/pull/8473) Allow babel-plugin/preset prefix to not be a prefix, when used in a scope.. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-core`, `babel-parser`, `babel-plugin-syntax-decorators`
  * [#8465](https://github.com/babel/babel/pull/8465) Require decoratorsBeforeExport option for decorators. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :rocket: New Feature
* `babel-preset-env`
  * [#8500](https://github.com/babel/babel/pull/8500) Add missing es7.promise.finally polyfill when using useBuiltIns: usage. ([@jsnajdr](https://github.com/jsnajdr))
* `babel-cli`, `babel-core`, `babel-node`, `babel-preset-env`, `babel-register`
  * [#8485](https://github.com/babel/babel/pull/8485) Allow preset-env to toggle module handling based on flags from the caller (like babel-loader). ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-core`
  * [#8474](https://github.com/babel/babel/pull/8474) Preserve 'false'-options for disabled plugins/presets.. ([@loganfsmyth](https://github.com/loganfsmyth))
  * [#8473](https://github.com/babel/babel/pull/8473) Allow babel-plugin/preset prefix to not be a prefix, when used in a scope.. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-helper-transform-fixture-test-runner`, `babel-plugin-transform-runtime`
  * [#8435](https://github.com/babel/babel/pull/8435) Allow transform-runtime to insert runtime references with absolute paths.. ([@loganfsmyth](https://github.com/loganfsmyth))

#### :bug: Bug Fix
* `babel-parser`
  * [#8488](https://github.com/babel/babel/pull/8488) Fix trailingComments for FunctionExpression that is CallExpression arguments. ([@jiaxuan](https://github.com/jiaxuan))
* `babel-core`
  * [#8493](https://github.com/babel/babel/pull/8493) Take top-level config source into consideration when processing nested env/overrides.. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-helpers`, `babel-plugin-proposal-decorators`
  * [#7429](https://github.com/babel/babel/pull/7429) Fix default descriptor setting for class properties with decorators. ([@yhpark](https://github.com/yhpark))
* `babel-plugin-transform-parameters`
  * [#8479](https://github.com/babel/babel/pull/8479) Fixes setter paratemer default value. ([@nikolayemrikh](https://github.com/nikolayemrikh))

#### :nail_care: Polish
* `babel-core`
  * [#8494](https://github.com/babel/babel/pull/8494) Cache individual programmatic descriptors along with the overall list.. ([@loganfsmyth](https://github.com/loganfsmyth))
  * [#8493](https://github.com/babel/babel/pull/8493) Take top-level config source into consideration when processing nested env/overrides.. ([@loganfsmyth](https://github.com/loganfsmyth))

#### :house: Internal
* `babel-core`
  * [#8493](https://github.com/babel/babel/pull/8493) Take top-level config source into consideration when processing nested env/overrides.. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-plugin-transform-classes`
  * [#8472](https://github.com/babel/babel/pull/8472) Remove unused file. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

## v7.0.0-rc.1 (2018-08-09)

Same as rc.0 but fixes the peerDep issue #8443. It's changed to just be ^7.0.0-0

## v7.0.0-rc.0 (2018-08-09)

> This had an issue with `peerDependencies` so please use `rc.1`.

Alright finally at the end 🙂. Shouldn't have anymore breaking changes and going to wait some time to fix bugs/regressions

> Summary: `@babel/polyfill` will not include proposal polyfills by default and fixed a regression.

#### :boom: Breaking Change
* `babel-polyfill`
  * [#8440](https://github.com/babel/babel/pull/8440) remove proposals polyfills from default import [skip ci]. ([@hzoo](https://github.com/hzoo))

> Will add this to the upgrade guide/polyfill docs. I guess we could include a `babel-upgrade` for this too, not sure.

#### :bug: Bug Fix
* `babel-cli`
  * [#8436](https://github.com/babel/babel/pull/8436) Require v1.1.0 so that correct filter params are passed.. ([@loganfsmyth](https://github.com/loganfsmyth))

## v7.0.0-beta.56 (2018-08-03)

- Separate `@babel/runtime`: should work for helpers alone and opt-into core-js if necessary.
- More details in http://babeljs.io/docs/en/next/babel-runtime, http://babeljs.io/docs/en/next/babel-plugin-transform-runtime (via https://github.com/babel/babel/pull/8266, https://github.com/babel/website/pull/1714)
- `babel-upgrade` issue: https://github.com/babel/babel-upgrade/issues/70

#### :boom: Breaking Change
* `babel-plugin-transform-regenerator`, `babel-plugin-transform-runtime`, `babel-runtime-corejs2`, `babel-runtime`
  * [#8266](https://github.com/babel/babel/pull/8266) Split @babel/runtime into 2 modules via @babel/runtime-corejs2. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-core`, `babel-helper-module-imports`, `babel-helpers`, `babel-plugin-external-helpers`, `babel-plugin-transform-runtime`
  * [#8398](https://github.com/babel/babel/pull/8398) Only reference helpers from external/runtime helpers if they are known to be available.. ([@loganfsmyth](https://github.com/loganfsmyth))

#### :rocket: New Feature
* `babel-plugin-transform-regenerator`, `babel-plugin-transform-runtime`, `babel-runtime-corejs2`, `babel-runtime`
  * [#8266](https://github.com/babel/babel/pull/8266) Split @babel/runtime into 2 modules via @babel/runtime-corejs2. ([@loganfsmyth](https://github.com/loganfsmyth))

#### :bug: Bug Fix
* `babel-parser`, `babel-plugin-transform-typescript`
  * [#8408](https://github.com/babel/babel/pull/8408) Allow TSInterfaceDeclaration to be default export. ([@existentialism](https://github.com/existentialism))
* `babel-preset-env`
  * [#8403](https://github.com/babel/babel/pull/8403) Ensure esmodule targets are parsed by browserslist. ([@existentialism](https://github.com/existentialism))
* Other
  * [#8024](https://github.com/babel/babel/pull/8024) Run transform-runtime on the standalone bundle so it stays ES5-compatible.. ([@loganfsmyth](https://github.com/loganfsmyth))

#### :memo: Documentation
* [#8412](https://github.com/babel/babel/pull/8412) Update Documentation[skip ci]. ([@leongjiameng](https://github.com/leongjiameng))

## v7.0.0-beta.55 (2018-07-28)

Breaking Change in beta:

> Throws an error on using Stage presets: https://babeljs.io/blog/2018/07/27/removing-babels-stage-presets

#### :boom: Breaking Change
* `babel-core`, `babel-plugin-proposal-class-properties`, `babel-plugin-proposal-decorators`, `babel-preset-stage-0`, `babel-preset-stage-1`, `babel-preset-stage-2`, `babel-preset-stage-3`, `babel-standalone`
  * [#8293](https://github.com/babel/babel/pull/8293) Remove Stage presets. ([@hzoo](https://github.com/hzoo))

#### :rocket: New Feature
* `babel-generator`, `babel-parser`, `babel-plugin-transform-typescript`, `babel-types`
  * [#7754](https://github.com/babel/babel/pull/7754) TypeScript: Support type arguments on tagged templates. ([@andy-ms](https://github.com/andy-ms))

#### :bug: Bug Fix
* `babel-cli`, `babel-core`, `babel-generator`
  * [#8380](https://github.com/babel/babel/pull/8380) Ensure that Identifier source mappings explicitly start and stop on the generated range. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-preset-env`
  * [#8391](https://github.com/babel/babel/pull/8391) Ensure preset-env doesn't clobber browserslist defaults. ([@existentialism](https://github.com/existentialism))
* `babel-core`
  * [#8376](https://github.com/babel/babel/pull/8376) Fix order of optional argument reordering. ([@Qix-](https://github.com/Qix-))
  * [#8381](https://github.com/babel/babel/pull/8381) Allow an Array for `babelrcRoots`.. ([@wtgtybhertgeghgtwtg](https://github.com/wtgtybhertgeghgtwtg))
  * [#8342](https://github.com/babel/babel/pull/8342) Do not mutate ast. ([@thiagoarrais](https://github.com/thiagoarrais))
* `babel-parser`
  * [#8374](https://github.com/babel/babel/pull/8374) Correctly parse interface methods named 'static'. ([@bakkot](https://github.com/bakkot))

#### :nail_care: Polish
* `babel-parser`
  * [#8355](https://github.com/babel/babel/pull/8355) remove .then from `dynamic import` parser exception message. ([@dnalborczyk](https://github.com/dnalborczyk))

#### :house: Internal
* `babel-core`, `babel-preset-stage-0`, `babel-preset-stage-1`, `babel-preset-stage-2`, `babel-preset-stage-3`, `babel-standalone`
  * [#8397](https://github.com/babel/babel/pull/8397) Remove our own use of stage presets. ([@hzoo](https://github.com/hzoo))
* `babel-helpers`, `babel-plugin-proposal-class-properties`
  * [#8318](https://github.com/babel/babel/pull/8318) Save full descriptor instead of only value for private fields.. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-core`
  * [#8381](https://github.com/babel/babel/pull/8381) Allow an Array for `babelrcRoots`.. ([@wtgtybhertgeghgtwtg](https://github.com/wtgtybhertgeghgtwtg))
* `babel-cli`, `babel-core`, `babel-generator`, `babel-helper-define-map`, `babel-helper-fixtures`, `babel-helper-module-imports`, `babel-helper-module-transforms`, `babel-helper-regex`, `babel-helper-simple-access`, `babel-helper-transform-fixture-test-runner`, `babel-node`, `babel-plugin-transform-block-scoping`, `babel-register`, `babel-template`, `babel-traverse`, `babel-types`
  * [#8377](https://github.com/babel/babel/pull/8377) Bumped lodash to 4.17.10. ([@Berkmann18](https://github.com/Berkmann18))

## v7.0.0-beta.54 (2018-07-16)

> Regarding https://github.com/babel/babel/issues/8184, we aren't using `micromatch` for paths, just basic `*/**` substitution now. For anything more complicated we will recommend using a regex/`.js` config.
> Fixed a bug in the stage presets (https://github.com/babel/babel/issues/8307), so we just removed the requirements for setting options in the meantime for ease of use. We are removing the Stage presets next release. https://github.com/babel/babel/pull/8293

#### :boom: Breaking Change
* `babel-core`, `babel-register`, `babel-traverse`
  * [#8327](https://github.com/babel/babel/pull/8327) Treat string ignore/only/test/include/exclude values as paths with only basic pattern matching. ([@loganfsmyth](https://github.com/loganfsmyth))

#### :bug: Bug Fix
* `babel-core`, `babel-register`, `babel-traverse`
  * [#8327](https://github.com/babel/babel/pull/8327) Treat string ignore/only/test/include/exclude values as paths with only basic pattern matching. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-preset-stage-0`, `babel-preset-stage-1`
  * [#8317](https://github.com/babel/babel/pull/8317) Fix stage-0/1 import of pipeline proposals array. ([@mAAdhaTTah](https://github.com/mAAdhaTTah))
* `babel-helper-module-transforms`, `babel-plugin-transform-modules-commonjs`
  * [#8316](https://github.com/babel/babel/pull/8316) Ensure that the wildcard interop is used with re-export + default.. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-core`
  * [#8315](https://github.com/babel/babel/pull/8315) Remove option-filtering options from the final options results.. ([@loganfsmyth](https://github.com/loganfsmyth))

#### :memo: Documentation
* [#8320](https://github.com/babel/babel/pull/8320) Add link to audio version of song. ([@rugk](https://github.com/rugk))

## v7.0.0-beta.53 (2018-07-11)

- Fix for regression with paths on windows due to micromatch upgrade, remove yearly presets (not published)
- (There was an issue with the Stage presets in this release, but it is also deprecated)

#### :boom: Breaking Change
* `babel-*`
  * [#8274](https://github.com/babel/babel/pull/8274) Remove yearly presets from repo. ([@hzoo](https://github.com/hzoo))

#### :rocket: New Feature
* `babel-generator`, `babel-parser`, `babel-plugin-transform-typescript`, `babel-types`
  * [#7799](https://github.com/babel/babel/pull/7799) TypeScript: Support type arguments on JSX opening and self-closing tags. ([@andy-ms](https://github.com/andy-ms))
* `babel-parser`
  * [#8291](https://github.com/babel/babel/pull/8291) Support pipeline proposal flag in  `@babel/parser`. ([@mAAdhaTTah](https://github.com/mAAdhaTTah))
* `babel-plugin-proposal-object-rest-spread`
  * [#8264](https://github.com/babel/babel/pull/8264) Remove unused bindings when excluding keys with rest in loose mode. ([@Andarist](https://github.com/Andarist))
* `babel-helpers`, `babel-plugin-proposal-object-rest-spread`, `babel-plugin-transform-destructuring`, `babel-preset-env`
  * [#8261](https://github.com/babel/babel/pull/8261) Introduce objectWithoutPropertiesLoose helper. ([@Andarist](https://github.com/Andarist))

#### :bug: Bug Fix
* `babel-core`
  * [#8281](https://github.com/babel/babel/pull/8281) Revert micromatch upgrade (regression) [skip ci]. ([@hzoo](https://github.com/hzoo))
* `babel-types`
  * [#8165](https://github.com/babel/babel/pull/8165) [babel-types] Fix isNodesEquivalent() behavior for TemplateElements. ([@timkendrick](https://github.com/timkendrick))

#### :nail_care: Polish
* `babel-plugin-syntax-pipeline-operator`, `babel-preset-stage-0`, `babel-preset-stage-1`
  * [#8279](https://github.com/babel/babel/pull/8279) Improve error messages around pipeline option. ([@mAAdhaTTah](https://github.com/mAAdhaTTah))

#### :memo: Documentation
* [#8286](https://github.com/babel/babel/pull/8286) Move v4-v6 changelog to another file and all prerelease 7.0 logs [ski…. ([@hzoo](https://github.com/hzoo))

#### :house: Internal
* `babel-preset-env`
  * [#8299](https://github.com/babel/babel/pull/8299) Make env preset build-data scripts reproducible. ([@rtsao](https://github.com/rtsao))
* `babel-plugin-proposal-object-rest-spread`
  * [#8287](https://github.com/babel/babel/pull/8287) Fixed fixture tests after merge. ([@Andarist](https://github.com/Andarist))
* Other
  * [#8187](https://github.com/babel/babel/pull/8187) Invoke Jest main file directly. ([@ishitatsuyuki](https://github.com/ishitatsuyuki))

## v7.0.0-beta.52 (2018-07-06)

Deprecating the yearly/stage presets in v7 (will remove next beta). Ran `npm deprecate` on `@babel/preset-es2015`, `@babel/preset-es2016`, `@babel/preset-es2017`, `@babel/preset-stage-0`, `@babel/preset-stage-1`, `@babel/preset-stage-2`, `@babel/preset-stage-3` only for versions `>v7.0.0-beta.52`. This means this will only break your build if you are using `^` in Babel v7 beta (which we have recommended against each release). (It is unfortunate that the default behavior of npm is to use `^` when using `npm install` though; haven't made an RFC for it yet).

Also various bugfixes, change to force the pipeline plugin to have an option.

The pipeline plugin must be configured with the `minimal` option. This is so people explicitly know the implementation that is being used, and someone will be able to implement and test out the other proposal options. After all, this proposal is in Stage 1 still and the semantics are being figured out: this is a great opportunity to specify via the config what people are using.

```js
{
  "plugins": [["@babel/plugin-proposal-pipeline-operator", { "proposal": "minimal" }]]
}
```

#### :boom: Breaking Change
* `babel-core`
  * [#8198](https://github.com/babel/babel/pull/8198) Prefer explicit object maps, and properly load relative maps.. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-plugin-proposal-class-properties`, `babel-plugin-proposal-decorators`, `babel-plugin-proposal-pipeline-operator`, `babel-plugin-syntax-pipeline-operator`, `babel-preset-stage-0`, `babel-preset-stage-1`
  * [#8196](https://github.com/babel/babel/pull/8196) Require proposal flag for pipeline plugin. ([@mAAdhaTTah](https://github.com/mAAdhaTTah))

#### :bug: Bug Fix
* `babel-types`
  * [#8273](https://github.com/babel/babel/pull/8273) Add visitor key for Flow typeArguments in call expressions. ([@rubennorte](https://github.com/rubennorte))
* `babel-core`
  * [#8198](https://github.com/babel/babel/pull/8198) Prefer explicit object maps, and properly load relative maps.. ([@loganfsmyth](https://github.com/loganfsmyth))
  * [#8197](https://github.com/babel/babel/pull/8197) Allow @foo/babel-plugin as an unexpanded plugin name, and @foo as a shorthand for it.. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-plugin-transform-typescript`
  * [#8238](https://github.com/babel/babel/pull/8238) Typescript: Avoid stripping class properties when a decorator is set. ([@pmdartus](https://github.com/pmdartus))

#### :nail_care: Polish
* `babel-cli`, `babel-preset-env`
  * [#8250](https://github.com/babel/babel/pull/8250) remove emojis from cli output. ([@johnbuffington](https://github.com/johnbuffington))

#### :house: Internal
* `babel-core`, `babel-helpers`, `babel-plugin-transform-async-to-generator`, `babel-plugin-transform-react-constant-elements`, `babel-preset-env`
  * [#8267](https://github.com/babel/babel/pull/8267) Optimize async to generator. ([@jridgewell](https://github.com/jridgewell))
* `babel-core`, `babel-parser`
  * [#8259](https://github.com/babel/babel/pull/8259) upgrades eslint v5 (major), babel-eslint, eslint-plugin-flowtype, eslint-plugin-prettier. ([@dnalborczyk](https://github.com/dnalborczyk))
* `babel-plugin-transform-modules-commonjs`, `babel-plugin-transform-runtime`
  * [#8265](https://github.com/babel/babel/pull/8265) Rename some test fixtures so they run properly.. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-helper-fixtures`, `babel-plugin-proposal-class-properties`, `babel-plugin-transform-classes`
  * [#8208](https://github.com/babel/babel/pull/8208) Ensure that we don't get unexpected output files for tests that throw.. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-helper-transform-fixture-test-runner`
  * [#8220](https://github.com/babel/babel/pull/8220) Remove regenerator hacks in checkDuplicatedNodes. ([@Andarist](https://github.com/Andarist))
* Other
  * [#8158](https://github.com/babel/babel/pull/8158) Compile against beta 51. ([@existentialism](https://github.com/existentialism))
* `babel-parser`
  * [#8176](https://github.com/babel/babel/pull/8176) babel/parser: use charCodes throughout for improved sourcecode readability in tokenizer/parser.. ([@GerHobbelt](https://github.com/GerHobbelt))
  * [#8177](https://github.com/babel/babel/pull/8177) babel/parser: remove dead code: constant condition. ([@GerHobbelt](https://github.com/GerHobbelt))

## v7.0.0-beta.51 (2018-06-12)

Fixed a peerDep issue

## v7.0.0-beta.50 (2018-06-12)

Mostly bug fixes and some decorator updates

#### :eyeglasses: Spec Compliance
* `babel-plugin-proposal-unicode-property-regex`
  * [#8127](https://github.com/babel/babel/pull/8127) Update plugin-proposal-unicode-property-regex for Unicode v11. ([@mathiasbynens](https://github.com/mathiasbynens))
* `babel-parser`
  * [#8125](https://github.com/babel/babel/pull/8125) Update identifier parsing per Unicode v11. ([@mathiasbynens](https://github.com/mathiasbynens))
* `babel-core`, `babel-generator`, `babel-parser`, `babel-plugin-proposal-decorators`, `babel-types`
  * [#8037](https://github.com/babel/babel/pull/8037)  Remove parser support for decorators optional parentheses. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :boom: Breaking Change
* `babel-generator`, `babel-parser`, `babel-plugin-syntax-decorators`
  * [#8113](https://github.com/babel/babel/pull/8113) Change decoratorsBeforeExport default to false. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-core`, `babel-generator`, `babel-parser`, `babel-plugin-proposal-decorators`, `babel-types`
  * [#8037](https://github.com/babel/babel/pull/8037)  Remove parser support for decorators optional parentheses. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-core`, `babel-plugin-syntax-decorators`
  * [#7938](https://github.com/babel/babel/pull/7938) Update syntax-decorators options. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-helper-builder-react-jsx`, `babel-plugin-transform-react-inline-elements`, `babel-plugin-transform-react-jsx`
  * [#8045](https://github.com/babel/babel/pull/8045) Do not quote JSX attribute keys for IdentifierName. ([@arv](https://github.com/arv))

#### :rocket: New Feature
* `babel-generator`
  * [#8143](https://github.com/babel/babel/pull/8143) add jsesc options support. ([@vincentdchan](https://github.com/vincentdchan))
* `babel-preset-env`
  * [#8031](https://github.com/babel/babel/pull/8031) Validate @babel/preset-env options. ([@sun1x](https://github.com/sun1x))
* `babel-core`, `babel-plugin-syntax-decorators`
  * [#7938](https://github.com/babel/babel/pull/7938) Update syntax-decorators options. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-generator`, `babel-plugin-proposal-decorators`
  * [#7948](https://github.com/babel/babel/pull/7948) Add "decoratorsBeforeExport" option to @babel/generator. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-generator`, `babel-parser`, `babel-types`, `babylon`
  * [#7978](https://github.com/babel/babel/pull/7978) Support Flow's proto modifier syntax for declared classes. ([@samwgoldman](https://github.com/samwgoldman))

#### :bug: Bug Fix
* `babel-helper-hoist-variables`, `babel-plugin-transform-modules-systemjs`
  * [#8104](https://github.com/babel/babel/pull/8104) System module format hoisting and export refinements. ([@guybedford](https://github.com/guybedford))
* `babel-plugin-proposal-class-properties`, `babel-traverse`
  * [#8051](https://github.com/babel/babel/pull/8051) Don't split an exported class when renaming an inner binding. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#8122](https://github.com/babel/babel/pull/8122)  isConstantExpression should return true for immuable bindings. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-plugin-transform-typescript`
  * [#7996](https://github.com/babel/babel/pull/7996) Adds JSXFragment to plugin-transform-typescript check for the presence of jsx. ([@malbernaz](https://github.com/malbernaz))
* `babel-plugin-proposal-class-properties`, `babel-plugin-transform-typescript`
  * [#8007](https://github.com/babel/babel/pull/8007) Fix 'Missing class properties transform' error when parsing class properties with Typescript syntax. ([@pterolex](https://github.com/pterolex))
* `babel-parser`
  * [#8030](https://github.com/babel/babel/pull/8030) Allow ts modifier names to be used as function argument names. ([@existentialism](https://github.com/existentialism))
* `babel-preset-env`
  * [#8132](https://github.com/babel/babel/pull/8132) Fix Safari TP and regular versions comparison. ([@yuri-karadzhov](https://github.com/yuri-karadzhov))
  * [#8138](https://github.com/babel/babel/pull/8138) Ensure regex-dot-all runs before unicode-regex in preset-env. ([@existentialism](https://github.com/existentialism))
* `babel-helpers`, `babel-plugin-transform-classes`
  * [#8100](https://github.com/babel/babel/pull/8100) Fix ReferenceError in the wrapNativeSuper helper. ([@chocolateboy](https://github.com/chocolateboy))
* `babel-types`
  * [#8060](https://github.com/babel/babel/pull/8060) make isReferenced() recognise ObjectTypeProperty. ([@peter-leonov](https://github.com/peter-leonov))
* `babel-cli`
  * [#8082](https://github.com/babel/babel/pull/8082) Avoid a race condition in CLI directory creation.. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-helper-builder-react-jsx`, `babel-plugin-transform-react-inline-elements`, `babel-plugin-transform-react-jsx`
  * [#8045](https://github.com/babel/babel/pull/8045) Do not quote JSX attribute keys for IdentifierName. ([@arv](https://github.com/arv))

#### :nail_care: Polish
* `babel-plugin-proposal-class-properties`, `babel-plugin-transform-classes`, `babel-plugin-transform-parameters`, `babel-plugin-transform-react-constant-elements`
  * [#8123](https://github.com/babel/babel/pull/8123) [class-properties] Remove unnecessary return and temp variable. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-parser`
  * [#8074](https://github.com/babel/babel/pull/8074) nit: fix folder name. ([@dnalborczyk](https://github.com/dnalborczyk))

#### :memo: Documentation
* `babel-*`
  * [#8108](https://github.com/babel/babel/pull/8108) Refactor move docs. ([@xtuc](https://github.com/xtuc))

#### :house: Internal
* Other
  * [#8142](https://github.com/babel/babel/pull/8142) Don't regenerate babel-types docs in the readme. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#8139](https://github.com/babel/babel/pull/8139) Bump test262-stream and update test262 tests. ([@existentialism](https://github.com/existentialism))
* `babel-generator`, `babel-node`, `babel-standalone`, `babel-template`
  * [#8144](https://github.com/babel/babel/pull/8144) Add Labels to READMEs Generator & Update README's w. Links To Open Issues (for some pkg's). ([@BeniCheni](https://github.com/BeniCheni))
* `babel-node`
  * [#7908](https://github.com/babel/babel/pull/7908) Test on node 10. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

## v7.0.0-beta.49 (2018-05-25)

Mostly bugfix release for a regression in decorators, and a quick fix for some new `babel-node` options in the last release that just didn't work right. Also one small addition to the API for official promise-returning versions of our async transform/parsing functions.

#### :rocket: New Feature
* `babel-core`
  * [#8023](https://github.com/babel/babel/pull/8023) Add a promise-returning *Async version of the transform and parse fns. ([@loganfsmyth](https://github.com/loganfsmyth))

#### :bug: Bug Fix
* `babel-node`
  * [#8046](https://github.com/babel/babel/pull/8046) Handle kebab-case args in babel-node.. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-plugin-proposal-decorators`
  * [#8047](https://github.com/babel/babel/pull/8047) Transform decorated classes from the export visitor. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-cli`, `babel-core`, `babel-plugin-transform-react-jsx-source`, `babel-preset-env`, `babel-preset-react`
  * [#8044](https://github.com/babel/babel/pull/8044) Expose all filenames as absolute paths, rather than relative.. ([@loganfsmyth](https://github.com/loganfsmyth))

#### :house: Internal
* [#8036](https://github.com/babel/babel/pull/8036) Compile against beta 48. ([@hzoo](https://github.com/hzoo))

## v7.0.0-beta.48 (2018-05-24)

- Renamed `babylon` to `@babel/parser` for clarity (I will still commonly refer to it as babylon though!)
- Add Private Fields implementations (now Stage 3) `class A { #a = 1 }`
- Add small Stage 3 (now Stage 4) Subsume JSON change https://github.com/babel/proposals/issues/43
- Fix IE10 class regression
- Various fixes, many TS fixes

#### :eyeglasses: Spec Compliance
* `babel-parser`, `babel-plugin-proposal-json-strings`, `babel-plugin-syntax-json-strings`, `babel-preset-stage-3`
  * [#7985](https://github.com/babel/babel/pull/7985) Subsume json. ([@jridgewell](https://github.com/jridgewell))

#### :boom: Breaking Change
* `babel-core`, `babel-helper-fixtures`, `babel-helper-transform-fixture-test-runner`, `babel-plugin-syntax-flow`, `babel-plugin-syntax-jsx`, `babel-plugin-syntax-typescript`, `babel-plugin-transform-typescript`, `babel-preset-react`, `babel-preset-typescript`, `babel-standalone`
  * [#7955](https://github.com/babel/babel/pull/7955) Verify that files are .ts/.tsx before treating as Typescript files.. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-cli`, `babel-core`, `babel-plugin-transform-react-jsx-source`, `babel-preset-react`
  * [#7956](https://github.com/babel/babel/pull/7956) Make the filename option, as exposed to the plugins, consistently relative to the working directory. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-traverse`, `babel-types`
  * [#7900](https://github.com/babel/babel/pull/7900) Re-add support for local Flow bindings (TypeAlias, OpaqueTypeAlias and Interface). ([@rubennorte](https://github.com/rubennorte))

#### :rocket: New Feature
* `babel-node`
  * [#8010](https://github.com/babel/babel/pull/8010) Add more of babel-cli's options to babel-node too for consistency.. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-cli`, `babel-node`
  * [#5621](https://github.com/babel/babel/pull/5621) Add no-babelrc option in babel-node. ([@xtuc](https://github.com/xtuc))
* `babel-core`, `babel-generator`, `babel-parser`, `babel-types`, `babylon`
  * [#7928](https://github.com/babel/babel/pull/7928) Create InterpreterDirective AST node type and use to replace babel/core File's 'shebang' handling. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-parser`, `babel-plugin-proposal-json-strings`, `babel-plugin-syntax-json-strings`, `babel-preset-stage-3`
  * [#7985](https://github.com/babel/babel/pull/7985) Subsume json. ([@jridgewell](https://github.com/jridgewell))
* `babel-generator`, `babel-plugin-syntax-flow`, `babel-plugin-transform-flow-strip-types`, `babel-types`, `babylon`
  * [#7934](https://github.com/babel/babel/pull/7934) Add support for explicit type arguments in new and call expressions. ([@samwgoldman](https://github.com/samwgoldman))
* `babel-generator`, `babel-types`, `babylon`
  * [#7959](https://github.com/babel/babel/pull/7959) Allow internal slot properties to be optional. ([@samwgoldman](https://github.com/samwgoldman))
  * [#7947](https://github.com/babel/babel/pull/7947) Internal slot properties. ([@samwgoldman](https://github.com/samwgoldman))
* `babylon`
  * [#7869](https://github.com/babel/babel/pull/7869) Add an option to Babylon to have decorators before export. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :bug: Bug Fix
* `babel-parser`
  * [#7994](https://github.com/babel/babel/pull/7994) [Babylon] Take the first set of options for plugins. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#7968](https://github.com/babel/babel/pull/7968) Set exprAllowed to false when parsing TSNonNullExpression. ([@existentialism](https://github.com/existentialism))
* `babel-core`, `babel-helpers`, `babel-plugin-proposal-class-properties`, `babel-plugin-proposal-decorators`, `babel-plugin-transform-classes`, `babel-plugin-transform-exponentiation-operator`, `babel-plugin-transform-function-name`, `babel-plugin-transform-object-super`, `babel-plugin-transform-parameters`, `babel-plugin-transform-react-jsx`, `babel-plugin-transform-runtime`, `babel-preset-env`
  * [#7969](https://github.com/babel/babel/pull/7969) Fix class inheritance in IE10. ([@jridgewell](https://github.com/jridgewell))
* `babel-types`
  * [#8005](https://github.com/babel/babel/pull/8005) Handle Infinity, -Infinity, NaN, and -0 in t.valueToNode().. ([@loganfsmyth](https://github.com/loganfsmyth))
  * [#7982](https://github.com/babel/babel/pull/7982) Build InterfaceTypeAnnotation generated type code. ([@jridgewell](https://github.com/jridgewell))
* `babel-generator`, `babel-plugin-syntax-bigint`, `babel-types`
  * [#8006](https://github.com/babel/babel/pull/8006) Bigint Support (no transform). ([@hzoo](https://github.com/hzoo))
* `babel-core`, `babel-generator`, `babel-parser`, `babel-types`, `babylon`
  * [#7928](https://github.com/babel/babel/pull/7928) Create InterpreterDirective AST node type and use to replace babel/core File's 'shebang' handling. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-cli`, `babel-core`, `babel-plugin-transform-react-jsx-source`, `babel-preset-react`
  * [#7956](https://github.com/babel/babel/pull/7956) Make the filename option, as exposed to the plugins, consistently relative to the working directory. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-preset-typescript`
  * [#7990](https://github.com/babel/babel/pull/7990) passes the jsxPragma options from preset-typescript to plugin-transform-typescript. ([@malbernaz](https://github.com/malbernaz))
* `babel-types`, `babylon`
  * [#7967](https://github.com/babel/babel/pull/7967) TypeScript: Fix TSInferType .typeParameter type.. ([@benjamn](https://github.com/benjamn))
* `babel-helpers`, `babel-plugin-transform-classes`, `babel-preset-env`
  * [#7533](https://github.com/babel/babel/pull/7533) Fix bugs in the _wrapNativeSuper helper. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-register`
  * [#7930](https://github.com/babel/babel/pull/7930) Ensure that calling register() fully resets the extension state.. ([@loganfsmyth](https://github.com/loganfsmyth))

#### :nail_care: Polish
* `babel-parser`
  * [#7986](https://github.com/babel/babel/pull/7986) Better error message for invalid decorators syntax. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :memo: Documentation
* `babel-preset-env`
  * [#8020](https://github.com/babel/babel/pull/8020) Fix include/exclude syntax in preset-env README. ([@taion](https://github.com/taion))
* `babel-parser`
  * [#8009](https://github.com/babel/babel/pull/8009) update AST spec - interpreter. ([@xtuc](https://github.com/xtuc))

#### :house: Internal
* `babel-parser`
  * [#7999](https://github.com/babel/babel/pull/7999) [babylon] Refactor mixin plugins handling & validation. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#8002](https://github.com/babel/babel/pull/8002) Fix some flow issues in @babel/parser flow plugin. ([@existentialism](https://github.com/existentialism))
* `babel-plugin-proposal-decorators`
  * [#7975](https://github.com/babel/babel/pull/7975) Add "legacy" prefix to legacy decorators tests. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-cli`, `babel-core`
  * [#7929](https://github.com/babel/babel/pull/7929) Refactor babel-cli to use async functions for async handling, and centralize option loading. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-helper-transform-fixture-test-runner`
  * [#7931](https://github.com/babel/babel/pull/7931) Test running bug fixing for Node 10. ([@loganfsmyth](https://github.com/loganfsmyth))

## v7.0.0-beta.47 (2018-05-14)

- Compile Babel itself to target Node 6 syntax given we dropped Node 4 support to run (this is unrelated to the output code)
-  Allow `babelrc` and `babelrcRoots` in config files
- Various bug fixes

#### :boom: Breaking Change
* `babel-generator`, `babel-plugin-syntax-decorators`, `babylon`
  * [#7821](https://github.com/babel/babel/pull/7821) Rename decorators&decorators2 plugins to decorators-legacy&decorators.. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* Other
  * [#7782](https://github.com/babel/babel/pull/7782) Target Node 6 in production. ([@hzoo](https://github.com/hzoo))

#### :rocket: New Feature
* `babel-core`
  * [#7911](https://github.com/babel/babel/pull/7911) Allow 'babelrc' and 'babelrcRoots' in config files (but not .babelrc/extends). ([@loganfsmyth](https://github.com/loganfsmyth))

#### :bug: Bug Fix
* `babel-plugin-transform-typescript`
  * [#7878](https://github.com/babel/babel/pull/7878) Fix handling of different JSX pragmas in Typescript. ([@calebeby](https://github.com/calebeby))
  * [#7833](https://github.com/babel/babel/pull/7833) fix(transform-typescript): do not elide injected imports. ([@jeysal](https://github.com/jeysal))
* `babel-core`
  * [#7911](https://github.com/babel/babel/pull/7911) Allow 'babelrc' and 'babelrcRoots' in config files (but not .babelrc/extends). ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-cli`
  * [#7875](https://github.com/babel/babel/pull/7875) Fix watch bug with output-dir paths.. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-preset-env`
  * [#7809](https://github.com/babel/babel/pull/7809) Clean up and add some additional polyfill mappings in preset-env. ([@existentialism](https://github.com/existentialism))
  * [#7884](https://github.com/babel/babel/pull/7884) Fix bug with handling minor versions when parsing compat-data. ([@existentialism](https://github.com/existentialism))
  * [#7810](https://github.com/babel/babel/pull/7810) Improve useBuiltIns: usage mappins in preset-env. ([@existentialism](https://github.com/existentialism))
* `babel-plugin-transform-typescript`, `babylon`
  * [#7888](https://github.com/babel/babel/pull/7888) TypeScript: Allow non-null and type assertions as lvalues. (Closes [#7638](https://github.com/babel/babel/issues/7638)). ([@mmantel](https://github.com/mmantel))
* `babel-preset-stage-3`
  * [#7819](https://github.com/babel/babel/pull/7819) fix(preset-stage-3): pass along loose flag to proposal-object-rest-spread. ([@yyx990803](https://github.com/yyx990803))
* `babel-cli`, `babel-core`, `babel-helper-fixtures`, `babel-helper-transform-fixture-test-runner`
  * [#7761](https://github.com/babel/babel/pull/7761) Reimplement input sourcemap merging using range matching instead of closest-position matching. ([@loganfsmyth](https://github.com/loganfsmyth))

#### :nail_care: Polish
* `babel-plugin-transform-modules-commonjs`, `babel-plugin-transform-template-literals`
  * [#7855](https://github.com/babel/babel/pull/7855) Lazy load tagged template literal strings. ([@dczombera](https://github.com/dczombera))
* `babylon`
  * [#7898](https://github.com/babel/babel/pull/7898) Fix a typo in a babylon flow plugin comment. ([@taveras](https://github.com/taveras))
* `babel-plugin-proposal-class-properties`
  * [#7813](https://github.com/babel/babel/pull/7813) Class Props: Don't rename constructor collisions with static props. ([@jridgewell](https://github.com/jridgewell))
* `babel-cli`, `babel-code-frame`, `babel-core`, `babel-helper-member-expression-to-functions`, `babel-helper-module-imports`, `babel-helper-plugin-utils`, `babel-preset-env`, `babel-register`, `babel-template`, `babel-types`, `babylon`
  * [#7777](https://github.com/babel/babel/pull/7777) Use Object Spread Syntax. ([@jridgewell](https://github.com/jridgewell))

#### :memo: Documentation
* `babel-node`
  * [#7897](https://github.com/babel/babel/pull/7897) Fix typo [skip-ci]. ([@rockymeza](https://github.com/rockymeza))
* `babel-plugin-transform-destructuring`, `babel-plugin-transform-exponentiation-operator`, `babel-plugin-transform-property-mutators`, `babel-plugin-transform-proto-to-assign`, `babel-plugin-transform-reserved-words`, `babel-plugin-transform-spread`
  * [#7844](https://github.com/babel/babel/pull/7844) Improve README's for several plugins. [skip ci]. ([@mmantel](https://github.com/mmantel))
* `babel-preset-env`
  * [#7835](https://github.com/babel/babel/pull/7835) Change babel-preset-env docs according Browserslist best practices. ([@ai](https://github.com/ai))
  * [#7807](https://github.com/babel/babel/pull/7807) Update shippedProposals in preset-env docs [skip ci]. ([@existentialism](https://github.com/existentialism))
  * [#7790](https://github.com/babel/babel/pull/7790) update targets [skip ci]. ([@hzoo](https://github.com/hzoo))
* `babel-plugin-transform-instanceof`
  * [#7827](https://github.com/babel/babel/pull/7827) Expand README for plugin-transform-instanceof [skip ci]. ([@mmantel](https://github.com/mmantel))

#### :house: Internal
* Other
  * [#7925](https://github.com/babel/babel/pull/7925) Update test262 and flow tests. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#7916](https://github.com/babel/babel/pull/7916) Use the correct Babylon plugins for Test262 tests. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#7906](https://github.com/babel/babel/pull/7906) Update @babel/plugin-codemod-object-assign-to-object-spread version. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#7851](https://github.com/babel/babel/pull/7851) remove since we have other issue templates [skip ci]. ([@hzoo](https://github.com/hzoo))
  * [#7839](https://github.com/babel/babel/pull/7839) add lock bot for closed issues [skip ci]. ([@hzoo](https://github.com/hzoo))
  * [#7811](https://github.com/babel/babel/pull/7811) Upgrade to gulp@4. ([@existentialism](https://github.com/existentialism))
  * [#7794](https://github.com/babel/babel/pull/7794) add loose to object spread. ([@hzoo](https://github.com/hzoo))
  * [#7792](https://github.com/babel/babel/pull/7792) Fix indent in .travis.yml. ([@shirohana](https://github.com/shirohana))
* `babel-core`, `babylon`
  * [#7904](https://github.com/babel/babel/pull/7904) Fix typescript decorator test. ([@existentialism](https://github.com/existentialism))
* `babel-plugin-transform-classes`
  * [#7893](https://github.com/babel/babel/pull/7893) fix typo in a comment. ([@aaronabramov](https://github.com/aaronabramov))
* `babel-core`, `babel-plugin-proposal-logical-assignment-operators`, `babel-plugin-proposal-nullish-coalescing-operator`, `babel-plugin-syntax-logical-assignment-operators`, `babel-plugin-syntax-nullish-coalescing-operator`
  * [#7825](https://github.com/babel/babel/pull/7825) Unify `main` property in package.json [ci skip]. ([@shirohana](https://github.com/shirohana))
* `babel-core`, `babel-helper-module-imports`, `babel-helper-transform-fixture-test-runner`, `babel-plugin-transform-modules-commonjs`, `babel-preset-es2015`
  * [#7784](https://github.com/babel/babel/pull/7784) Upgrade Babel to self-host with beta.46. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-plugin-proposal-class-properties`
  * [#7814](https://github.com/babel/babel/pull/7814) Don't fold class property calls. ([@jridgewell](https://github.com/jridgewell))

## v7.0.0-beta.46 (2018-04-23)

* Fix regression by landing [#7783](https://github.com/babel/babel/pull/7783)

## v7.0.0-beta.45 (2018-04-23)

- Drop Node 4 Support (ends 4/30).
- Make Stage 2 decorators "default" (implementation is still WIP), and require people use the `decoratorsLegacy` option for easier migration.
- Change `@babel/polyfill` to not throw an error but a warning if it is imported multiple times. Also introduce another entry point without the warning
- Change how Babel handles config files regarding a lot of cases, especially for compiling `node_modules`. Introduce `babel.config.js`
  - If you are using a monorepo an a single `.babelrc`, you will need to change to `babel.config.js` like Babel itself is doing (https://github.com/babel/babel/pull/7784)
- Add ES2018 to `@babel/preset-env`: like object rest/spread, etc.
- Lots of spec and bug fixes! Shoutout to Justin (@jridgewell) and Josh (@CodingItWrong) for all the PR work for private properties!

#### :boom: Breaking Change
* `babel-cli`, `babel-core`, `babel-preset-env`, `babel-register`
  * [#7358](https://github.com/babel/babel/pull/7358) Allow more flexible file-based configuration while preventing .babelrcs from breaking things. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babylon`
  * [#7755](https://github.com/babel/babel/pull/7755) drop support for Node.js v4. ([@boneskull](https://github.com/boneskull))
* `babel-core`, `babel-plugin-proposal-class-properties`, `babel-plugin-proposal-decorators`, `babel-plugin-syntax-decorators`, `babel-plugin-transform-function-name`, `babel-preset-stage-0`, `babel-preset-stage-1`, `babel-preset-stage-2`
  * [#7734](https://github.com/babel/babel/pull/7734) Decorators legacy option. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :rocket: New Feature
* `babel-polyfill`
  * [#6371](https://github.com/babel/babel/pull/6371) Add noConflict entry mode to @babel/polyfill. ([@evan-scott-zocdoc](https://github.com/evan-scott-zocdoc))
* `babel-cli`, `babel-core`, `babel-preset-env`, `babel-register`
  * [#7358](https://github.com/babel/babel/pull/7358) Allow more flexible file-based configuration while preventing .babelrcs from breaking things. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-generator`, `babel-types`, `babylon`
  * [#7741](https://github.com/babel/babel/pull/7741) Add support for flow implements. ([@existentialism](https://github.com/existentialism))
* `babel-preset-env`
  * [#7658](https://github.com/babel/babel/pull/7658) Add initial support for ES2018 in preset-env. ([@existentialism](https://github.com/existentialism))
* `babel-core`, `babel-plugin-proposal-class-properties`, `babel-plugin-proposal-decorators`, `babel-plugin-proposal-function-bind`, `babel-plugin-transform-classes`, `babel-plugin-transform-flow-comments`, `babel-plugin-transform-flow-strip-types`, `babel-plugin-transform-function-name`, `babel-plugin-transform-jscript`, `babel-plugin-transform-parameters`, `babel-plugin-transform-react-jsx`, `babel-plugin-transform-runtime`, `babel-standalone`
  * [#7411](https://github.com/babel/babel/pull/7411) Add "use strict" directive. ([@MarkusToe](https://github.com/MarkusToe))
* `babel-helper-transform-fixture-test-runner`
  * [#7679](https://github.com/babel/babel/pull/7679) Add option to overwrite failing output fixtures. ([@jridgewell](https://github.com/jridgewell))
* `babel-generator`, `babel-helper-define-map`, `babel-plugin-syntax-class-properties`, `babel-plugin-transform-parameters`, `babel-plugin-transform-react-constant-elements`, `babel-traverse`, `babel-types`
  * [#7666](https://github.com/babel/babel/pull/7666) Private Properties phase 1. ([@jridgewell](https://github.com/jridgewell))

#### :eyeglasses: Spec Compliance
* `babel-helper-simple-access`, `babel-plugin-transform-modules-commonjs`, `babel-plugin-transform-modules-systemjs`
  * [#7766](https://github.com/babel/babel/pull/7766) Correct update expression Number coercion. ([@jridgewell](https://github.com/jridgewell))
* `babel-core`, `babel-generator`, `babel-plugin-proposal-decorators`, `babel-types`, `babylon`
  * [#7719](https://github.com/babel/babel/pull/7719) Update decorators parsing. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-plugin-transform-classes`
  * [#7732](https://github.com/babel/babel/pull/7732) Fix default class super inheritance. ([@jridgewell](https://github.com/jridgewell))
* `babel-plugin-transform-template-literals`
  * [#7722](https://github.com/babel/babel/pull/7722) Remove tagged template literal global caching. ([@jridgewell](https://github.com/jridgewell))
* `babel-helper-replace-supers`, `babel-plugin-proposal-class-properties`, `babel-plugin-transform-classes`, `babel-plugin-transform-exponentiation-operator`, `babel-plugin-transform-object-super`
  * [#7691](https://github.com/babel/babel/pull/7691) Fix super nested class bugs. ([@jridgewell](https://github.com/jridgewell))
* `babel-helper-replace-supers`, `babel-helpers`, `babel-plugin-proposal-class-properties`, `babel-plugin-transform-classes`, `babel-plugin-transform-exponentiation-operator`, `babel-plugin-transform-object-super`, `babel-preset-env`
  * [#7687](https://github.com/babel/babel/pull/7687) Get set helpers. ([@jridgewell](https://github.com/jridgewell))

#### :bug: Bug Fix
* `babel-helper-simple-access`, `babel-plugin-transform-modules-commonjs`, `babel-plugin-transform-modules-systemjs`
  * [#7766](https://github.com/babel/babel/pull/7766) Correct update expression Number coercion. ([@jridgewell](https://github.com/jridgewell))
* `babel-helper-replace-supers`, `babel-plugin-transform-classes`, `babel-plugin-transform-object-super`
  * [#7774](https://github.com/babel/babel/pull/7774) Update super property get/set/call in loose mode. ([@jridgewell](https://github.com/jridgewell))
* `babel-helper-member-expression-to-functions`, `babel-helper-replace-supers`, `babel-plugin-transform-classes`
  * [#7776](https://github.com/babel/babel/pull/7776) Memoize computed super properties. ([@jridgewell](https://github.com/jridgewell))
* `babel-core`, `babel-helpers`, `babel-plugin-proposal-class-properties`, `babel-plugin-proposal-decorators`, `babel-plugin-transform-classes`, `babel-plugin-transform-function-name`, `babel-plugin-transform-parameters`, `babel-plugin-transform-react-jsx`, `babel-plugin-transform-runtime`, `babel-preset-env`
  * [#7772](https://github.com/babel/babel/pull/7772) Move subclass inheritance to end. ([@jridgewell](https://github.com/jridgewell))
* `babel-generator`
  * [#7769](https://github.com/babel/babel/pull/7769) [bebal-generator] fix: don't write ': ' token when name is null. ([@Quramy](https://github.com/Quramy))
* `babylon`
  * [#7752](https://github.com/babel/babel/pull/7752) Fix type error. ([@andy-ms](https://github.com/andy-ms))
* `babel-helper-replace-supers`, `babel-plugin-proposal-class-properties`, `babel-plugin-transform-classes`, `babel-plugin-transform-exponentiation-operator`, `babel-plugin-transform-object-super`
  * [#7691](https://github.com/babel/babel/pull/7691) Fix super nested class bugs. ([@jridgewell](https://github.com/jridgewell))
* `babel-types`
  * [#7706](https://github.com/babel/babel/pull/7706) Fix literal type annotation argument number. ([@hendrikniemann](https://github.com/hendrikniemann))
* `babel-helper-function-name`, `babel-plugin-transform-function-name`
  * [#7435](https://github.com/babel/babel/pull/7435) Fix function name computation for literal values. ([@Axnyff](https://github.com/Axnyff))
* `babel-plugin-proposal-class-properties`
  * [#7659](https://github.com/babel/babel/pull/7659) Fix super in class fields.. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-plugin-proposal-optional-chaining`, `babel-types`
  * [#7668](https://github.com/babel/babel/pull/7668) OptionalMemberExpression properties are not referenced. ([@jridgewell](https://github.com/jridgewell))

#### :nail_care: Polish
* `babel-helpers`
  * [#7745](https://github.com/babel/babel/pull/7745) Improve asyncIterator error. ([@jquense](https://github.com/jquense))
* `babel-helper-replace-supers`, `babel-plugin-transform-classes`, `babel-plugin-transform-exponentiation-operator`, `babel-plugin-transform-object-super`, `babel-traverse`
  * [#7737](https://github.com/babel/babel/pull/7737) Classes cleanup. ([@jridgewell](https://github.com/jridgewell))
* `babel-plugin-proposal-class-properties`, `babel-plugin-transform-parameters`
  * [#6656](https://github.com/babel/babel/pull/6656) Optimize class properties output. ([@Andarist](https://github.com/Andarist))
* `babylon`
  * [#7717](https://github.com/babel/babel/pull/7717) Provide better error message for invalid default export declaration. ([@dczombera](https://github.com/dczombera))
* `babel-helper-replace-supers`, `babel-plugin-transform-classes`
  * [#7714](https://github.com/babel/babel/pull/7714) Use new isInStrictMode. ([@jridgewell](https://github.com/jridgewell))
* `babel-plugin-transform-object-super`
  * [#7681](https://github.com/babel/babel/pull/7681) Cleanup object super traversal. ([@jridgewell](https://github.com/jridgewell))

#### :memo: Documentation
* `babel-plugin-proposal-decorators`, `babel-preset-stage-0`, `babel-preset-stage-1`, `babel-preset-stage-2`
  * [#7762](https://github.com/babel/babel/pull/7762) Fix small typo with decorators legacy option [skip ci]. ([@existentialism](https://github.com/existentialism))
* Other
  * [#7713](https://github.com/babel/babel/pull/7713) Add slack links to CONTRIBUTING.md. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#7676](https://github.com/babel/babel/pull/7676) update sponsors, move up [skip ci]. ([@hzoo](https://github.com/hzoo))

#### :house: Internal
* `babel-helper-replace-supers`, `babel-plugin-proposal-class-properties`, `babel-plugin-transform-classes`, `babel-plugin-transform-parameters`
  * [#7750](https://github.com/babel/babel/pull/7750) Move more class state out of replaceSupers. ([@jridgewell](https://github.com/jridgewell))
* `babel-helper-member-expression-to-functions`, `babel-helper-replace-supers`, `babel-plugin-transform-classes`, `babel-plugin-transform-exponentiation-operator`, `babel-plugin-transform-object-super`
  * [#7763](https://github.com/babel/babel/pull/7763) Implement MemberExpressionToFunctions helper. ([@jridgewell](https://github.com/jridgewell))
* `babel-helper-replace-supers`, `babel-plugin-transform-classes`, `babel-plugin-transform-exponentiation-operator`, `babel-plugin-transform-object-super`, `babel-traverse`
  * [#7737](https://github.com/babel/babel/pull/7737) Classes cleanup. ([@jridgewell](https://github.com/jridgewell))
* `babel-helper-transform-fixture-test-runner`
  * [#7729](https://github.com/babel/babel/pull/7729) Drop Chai from packages. ([@jridgewell](https://github.com/jridgewell))
* `babel-helper-transform-fixture-test-runner`, `babel-plugin-proposal-class-properties`, `babel-plugin-proposal-optional-catch-binding`, `babel-plugin-transform-block-scoping`, `babel-plugin-transform-classes`, `babel-plugin-transform-computed-properties`, `babel-plugin-transform-jscript`, `babel-plugin-transform-object-super`
  * [#7720](https://github.com/babel/babel/pull/7720) Migrate more packages' tests to use jest expect assertions. ([@devenbansod](https://github.com/devenbansod))
* `babel-cli`, `babel-core`, `babel-generator`, `babel-plugin-proposal-decorators`, `babel-plugin-proposal-logical-assignment-operators`, `babel-preset-es2015`
  * [#7549](https://github.com/babel/babel/pull/7549) Migrate `babel-cli` and `babel-generator` tests to use jest-expect. ([@devenbansod](https://github.com/devenbansod))
* `babel-plugin-transform-classes`, `babel-traverse`
  * [#7712](https://github.com/babel/babel/pull/7712) Add Path#isInStrictMode. ([@jridgewell](https://github.com/jridgewell))
* Other
  * [#7708](https://github.com/babel/babel/pull/7708) ESLint: Ignore lerna.json and .git. ([@jridgewell](https://github.com/jridgewell))
  * [#7704](https://github.com/babel/babel/pull/7704) Use yarn provided by circle. ([@existentialism](https://github.com/existentialism))
* `babel-traverse`, `babel-types`
  * [#7685](https://github.com/babel/babel/pull/7685) Make babel-types type checking functions 36% faster. ([@devongovett](https://github.com/devongovett))

## v7.0.0-beta.44 (2018-04-02)

* Publish regression: was compiled against Node 8 instead of Node 4 due to an ENV mixup

## v7.0.0-beta.43 (2018-04-02)

Various fixes, also lazy-load `@babel/core` dependencies (should make config lookup and other API methods fast for other projects to use).

#### :eyeglasses: Spec Compliance
* `babel-plugin-proposal-logical-assignment-operators`
  * [#7604](https://github.com/babel/babel/pull/7604) Logical Assignment: ensure computed key isn't recomputed. ([@jridgewell](https://github.com/jridgewell))

#### :rocket: New Feature
* `babel-node`
  * [#7471](https://github.com/babel/babel/pull/7471) added support Node's --require and -r flags in babel-node. ([@yakotika](https://github.com/yakotika))
* `babel-generator`, `babylon`
  * [#7383](https://github.com/babel/babel/pull/7383) TypeScript: support mapped type modifiers syntax. ([@andy-ms](https://github.com/andy-ms))
* `babel-template`
  * [#7583](https://github.com/babel/babel/pull/7583) Allow placeholders in JSXElements when parsing templates. ([@Andarist](https://github.com/Andarist))
* `babel-preset-env`
  * [#7242](https://github.com/babel/babel/pull/7242) Add regexp support to include/exclude. ([@aminmarashi](https://github.com/aminmarashi))

#### :bug: Bug Fix
* `babel-types`
  * [#7639](https://github.com/babel/babel/pull/7639) Allow StringLiteral and NumericLiteral as ObjectTypeProperty.key. ([@unconfident](https://github.com/unconfident))
* `babylon`
  * [#7617](https://github.com/babel/babel/pull/7617) Prevent duplicate regex flags. ([@existentialism](https://github.com/existentialism))
* `babel-preset-env`
  * [#7586](https://github.com/babel/babel/pull/7586) Tweak es2015-related plugin order in preset-env. ([@existentialism](https://github.com/existentialism))

#### :nail_care: Polish
* [#7615](https://github.com/babel/babel/pull/7615) clean makefile a bit. ([@xtuc](https://github.com/xtuc))

#### :house: Internal
* `babel-*`
  * [#7579](https://github.com/babel/babel/pull/7579) Migrate a few packages' tests to use Jest Expect (see below). ([@devenbansod](https://github.com/devenbansod))
* `babel-node`, `babel-register`
  * [#7588](https://github.com/babel/babel/pull/7588) Have @babel/core lazy-load all dependencies and make @babel/register not explode because of that. ([@loganfsmyth](https://github.com/loganfsmyth))
* Other
  * [#7609](https://github.com/babel/babel/pull/7609) Update to beta.42. ([@existentialism](https://github.com/existentialism))
  * [#7599](https://github.com/babel/babel/pull/7599) Centralize Babel's own compilation config to make it easier to follow.. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-plugin-transform-classes`, `babel-preset-env`
  * [#7605](https://github.com/babel/babel/pull/7605) Disable flow on transformClass, fix preset-env errors. ([@thymikee](https://github.com/thymikee))
* `babel-cli`, `babel-core`, `babel-helpers`, `babel-node`, `babel-plugin-transform-for-of`, `babel-preset-env`, `babylon`
  * [#7602](https://github.com/babel/babel/pull/7602) Remove obsolete max-len eslint rule and reformat some stuff to fit. ([@danez](https://github.com/danez))
* `babel-plugin-transform-classes`
  * [#7444](https://github.com/babel/babel/pull/7444) Refactor inheritance in babel-plugin-transform-classes. ([@thymikee](https://github.com/thymikee))

## v7.0.0-beta.42 (2018-03-15)

#### :boom: Breaking Change
* `babel-helper-module-transforms`, `babel-plugin-transform-classes`, `babel-plugin-transform-modules-commonjs`
  * [#7545](https://github.com/babel/babel/pull/7545) Make `import`s in `.mjs` files use node-like behavior where 'exports' is '.default' only. . ([@loganfsmyth](https://github.com/loganfsmyth))

#### :rocket: New Feature
* `babel-helper-module-transforms`, `babel-plugin-transform-classes`, `babel-plugin-transform-modules-commonjs`
  * [#7545](https://github.com/babel/babel/pull/7545) Make `import`s in `.mjs` files use node-like behavior where 'exports' is '.default' only. . ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-plugin-proposal-object-rest-spread`, `babel-plugin-transform-destructuring`
  * [#7390](https://github.com/babel/babel/pull/7390) Favour extends helper over objectWithoutProperties when whole object …. ([@Andarist](https://github.com/Andarist))

#### :bug: Bug Fix
* `babel-preset-env`
  * [#7562](https://github.com/babel/babel/pull/7562) Use helper-module-import inside preset-env. ([@existentialism](https://github.com/existentialism))
* `babel-core`, `babel-helper-plugin-utils`
  * [#7580](https://github.com/babel/babel/pull/7580) Ensure that the backward-compat logic for plugin-utils copies over the version API properly.. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-plugin-proposal-async-generator-functions`
  * [#7575](https://github.com/babel/babel/pull/7575) Fix "Module build failed: Error: Cannot find module '@babel/types'". ([@mgroenhoff](https://github.com/mgroenhoff))
* `babel-helpers`, `babel-plugin-transform-classes`, `babel-preset-env`
  * [#7570](https://github.com/babel/babel/pull/7570) Fix incorrect value of _cache in _wrapNativeSuper. ([@simonkberg](https://github.com/simonkberg))

#### :nail_care: Polish
* `babel-helpers`, `babel-plugin-transform-classes`, `babel-preset-env`
  * [#7188](https://github.com/babel/babel/pull/7188) Wrap wrapNativeSuper helpers in redefining functions for better tree-…. ([@Andarist](https://github.com/Andarist))
* `babel-plugin-proposal-object-rest-spread`, `babel-plugin-transform-destructuring`
  * [#7390](https://github.com/babel/babel/pull/7390) Favour extends helper over objectWithoutProperties when whole object …. ([@Andarist](https://github.com/Andarist))

#### :memo: Documentation
* `babylon`
  * [#7571](https://github.com/babel/babel/pull/7571) Remove outdated spec deviation note. ([@benwiley4000](https://github.com/benwiley4000))

#### :house: Internal
* `babel-generator`, `babel-plugin-transform-typescript`
  * [#7578](https://github.com/babel/babel/pull/7578) Rename actual/expected test files to input/output. ([@CodingItWrong](https://github.com/CodingItWrong))
* Other
  * [#7568](https://github.com/babel/babel/pull/7568) update to beta.41. ([@hzoo](https://github.com/hzoo))

## v7.0.0-beta.41 (2018-03-14)

#### :boom: Breaking Change
* `babel-cli`, `babel-core`, `babel-generator`, `babel-helper-transform-fixture-test-runner`
  * [#7500](https://github.com/babel/babel/pull/7500) Remove the sourceMapTarget option from core and implement it in babel-cli.. ([@loganfsmyth](https://github.com/loganfsmyth))

We'll need to update tooling for this ^. Also published `gulp-babel@8.0.0-beta.2`

* `babel-helpers`, `babel-plugin-transform-modules-commonjs`, `babel-traverse`
  * [#7491](https://github.com/babel/babel/pull/7491) Explicitly throw if the array rest/spread items are not iterable.. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babylon`
  * [#7498](https://github.com/babel/babel/pull/7498) Disallow setters to have RestElement. ([@danez](https://github.com/danez))
* `babel-helper-remap-async-to-generator`, `babel-plugin-proposal-async-generator-functions`, `babel-plugin-transform-async-to-generator`, `babel-preset-env`
  * [#7446](https://github.com/babel/babel/pull/7446) Always transform for-await in async functions[rebase of #6953].. ([@Gvozd](https://github.com/Gvozd))
* `babel-core`, `babel-helper-module-imports`, `babel-helper-transform-fixture-test-runner`, `babel-plugin-transform-modules-amd`, `babel-plugin-transform-modules-commonjs`, `babel-plugin-transform-modules-umd`, `babel-preset-env-standalone`, `babel-preset-env`, `babel-standalone`
  * [#7417](https://github.com/babel/babel/pull/7417) Rely entirely on sourceType for module vs script differentiation.. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-core`, `babel-helpers`, `babel-plugin-transform-modules-commonjs`
  * [#7436](https://github.com/babel/babel/pull/7436) Default to `ast:false` and do less work when loading core. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-register`
  * [#7416](https://github.com/babel/babel/pull/7416) Replace instead of merging babel-register options, and resolve cwd up front. ([@loganfsmyth](https://github.com/loganfsmyth))

#### :eyeglasses: Spec Compliance
* `babylon`
  * [#7503](https://github.com/babel/babel/pull/7503) Update test262 test script and a few keyword escape fixes. ([@existentialism](https://github.com/existentialism))
  * [#7498](https://github.com/babel/babel/pull/7498) Disallow setters to have RestElement. ([@danez](https://github.com/danez))
  * [#7392](https://github.com/babel/babel/pull/7392) Spec Violation: Fix var initializer in for-in loop. ([@ksashikumar](https://github.com/ksashikumar))

#### :rocket: New Feature
* `babel-core`
  * [#7472](https://github.com/babel/babel/pull/7472) Expose the partial Babel config for callers to load and mutate.. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-*`
  * [#7450](https://github.com/babel/babel/pull/7450) Allow plugins to assert that a specific babel version has loaded the plugin.. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-cli`, `babel-preset-env`
  * [#7439](https://github.com/babel/babel/pull/7439) feat(babel-cli): add a brief summary to build output. ([@thymikee](https://github.com/thymikee))
* `babel-generator`, `babel-plugin-transform-typescript`, `babel-types`, `babylon`
  * [#7159](https://github.com/babel/babel/pull/7159) typescript: Support definite assignment assertion. ([@andy-ms](https://github.com/andy-ms))
* `babel-generator`, `babel-types`, `babylon`
  * [#7404](https://github.com/babel/babel/pull/7404) TypeScript: Support conditional types syntax. ([@andy-ms](https://github.com/andy-ms))
* `babel-core`, `babel-plugin-proposal-logical-assignment-operators`, `babel-plugin-syntax-logical-assignment-operators`, `babel-preset-stage-0`, `babylon`
  * [#7385](https://github.com/babel/babel/pull/7385) Proposal: Logical Assignment Operators. ([@jridgewell](https://github.com/jridgewell))

#### :bug: Bug Fix
* `babel-core`
  * [#7561](https://github.com/babel/babel/pull/7561) Fix import of type ConfigItem. ([@danez](https://github.com/danez))
* `babel-preset-env`
  * [#7548](https://github.com/babel/babel/pull/7548) preset-env - add Symbol.asyncIterator to shippedProposals builtIns. ([@yaelhe](https://github.com/yaelhe))
  * [#7421](https://github.com/babel/babel/pull/7421) Add Number.parseFloat/parseInt mappins for preset-env 'usage'. ([@existentialism](https://github.com/existentialism))
  * [#7438](https://github.com/babel/babel/pull/7438) Ensure babel-preset-env targets input object is not mutated. ([@guybedford](https://github.com/guybedford))
  * [#7400](https://github.com/babel/babel/pull/7400) Add missing promise polyfill deps for preset-env's useBuiltIns: usage. ([@existentialism](https://github.com/existentialism))
* `babylon`
  * [#7538](https://github.com/babel/babel/pull/7538) Make 'sourceType:unambiguous' use 'module' when import.meta is used.. ([@loganfsmyth](https://github.com/loganfsmyth))
  * [#7392](https://github.com/babel/babel/pull/7392) Spec Violation: Fix var initializer in for-in loop. ([@ksashikumar](https://github.com/ksashikumar))
  * [#7473](https://github.com/babel/babel/pull/7473) Remove broken check in checkFunctionNameAndParams. ([@ksashikumar](https://github.com/ksashikumar))
* `babel-plugin-transform-destructuring`
  * [#7333](https://github.com/babel/babel/pull/7333) Assign another temp var when parsing assignment patterns in destructuring. ([@existentialism](https://github.com/existentialism))
* `babel-helpers`, `babel-plugin-transform-modules-commonjs`, `babel-traverse`
  * [#7491](https://github.com/babel/babel/pull/7491) Explicitly throw if the array rest/spread items are not iterable.. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-node`
  * [#7511](https://github.com/babel/babel/pull/7511) Restore passing SIGINT signals to spawned child processes. ([@existentialism](https://github.com/existentialism))
* `babel-helper-remap-async-to-generator`, `babel-plugin-proposal-async-generator-functions`, `babel-plugin-transform-async-to-generator`, `babel-preset-env`
  * [#7446](https://github.com/babel/babel/pull/7446) Always transform for-await in async functions[rebase of #6953].. ([@Gvozd](https://github.com/Gvozd))
* `babel-cli`
  * [#7461](https://github.com/babel/babel/pull/7461) Require users to pass a filename, or specify --no-babelrc when using CLI with stdin.. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-helper-module-transforms`, `babel-plugin-transform-modules-commonjs`
  * [#7418](https://github.com/babel/babel/pull/7418) Avoid re-traversing inserted references to the namespace binding.. ([@loganfsmyth](https://github.com/loganfsmyth))
  * [#7378](https://github.com/babel/babel/pull/7378) Preserve import binding locations during module rewriting. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-plugin-proposal-object-rest-spread`
  * [#7364](https://github.com/babel/babel/pull/7364) Don't extract rest elements from nested expressions. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#7388](https://github.com/babel/babel/pull/7388) Fix over-zealous traversal by object-rest-spread. ([@jamesreggio](https://github.com/jamesreggio))
* `babel-helpers`, `babel-plugin-proposal-object-rest-spread`, `babel-preset-env`
  * [#7034](https://github.com/babel/babel/pull/7034) Fix object spread according to spec. ([@nuragic](https://github.com/nuragic))

#### :nail_care: Polish
* `babel-generator`
  * [#7550](https://github.com/babel/babel/pull/7550) Replace lodash/map with array equivalent. ([@danez](https://github.com/danez))
* `babylon`
  * [#7538](https://github.com/babel/babel/pull/7538) Make 'sourceType:unambiguous' use 'module' when import.meta is used.. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-helpers`, `babel-plugin-proposal-class-properties`, `babel-plugin-proposal-decorators`, `babel-plugin-transform-classes`, `babel-plugin-transform-parameters`
  * [#7493](https://github.com/babel/babel/pull/7493) Reuse the `assertThisInitialized` helper in `possibleConstructorReturn`. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-core`, `babel-plugin-transform-modules-commonjs`, `babylon`
  * [#7490](https://github.com/babel/babel/pull/7490) Give helpful errors if the wrong sourceType is detected. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-core`
  * [#7238](https://github.com/babel/babel/pull/7238) Better error message for invalid plugin/preset. ([@SpainTrain](https://github.com/SpainTrain))
* `babel-plugin-transform-async-to-generator`, `babel-plugin-transform-react-constant-elements`, `babel-plugin-transform-react-jsx`, `babel-traverse`
  * [#7372](https://github.com/babel/babel/pull/7372) Mark hoisted react constant elements as #__PURE__. ([@Andarist](https://github.com/Andarist))
* `babel-helpers`, `babel-plugin-transform-modules-commonjs`, `babel-plugin-transform-template-literals`
  * [#7379](https://github.com/babel/babel/pull/7379) Solves Tagged template literal size optimization. ([@debugpai2](https://github.com/debugpai2))

#### :memo: Documentation
* `README.md`
  * [#7496](https://github.com/babel/babel/pull/7496) Docs: Use namespace packages in all links. ([@danez](https://github.com/danez))
* `babel-plugin-transform-typescript`
  * [#7469](https://github.com/babel/babel/pull/7469) TS transform plugin README updatex2. ([@orta](https://github.com/orta))
  * [#7443](https://github.com/babel/babel/pull/7443) Update README for Babel TypeScript Plugin. ([@orta](https://github.com/orta))
* `babel-generator`
  * [#7380](https://github.com/babel/babel/pull/7380) Link generator readme to Babylon AST spec [skip ci]. ([@modernserf](https://github.com/modernserf))

#### :house: Internal
* Other
  * [#7560](https://github.com/babel/babel/pull/7560) Run node 9 on circleci and remove from travis. ([@danez](https://github.com/danez))
  * [#7556](https://github.com/babel/babel/pull/7556) Re-add TEST_ONLY and use Jest's -t for TEST_GREP.. ([@loganfsmyth](https://github.com/loganfsmyth))
  * [#7530](https://github.com/babel/babel/pull/7530) Run build-no-bundle in the watcher to get the right files.. ([@loganfsmyth](https://github.com/loganfsmyth))
  * [#7510](https://github.com/babel/babel/pull/7510) Use jest workers on travis-ci and circleCI. ([@danez](https://github.com/danez))
  * [#7499](https://github.com/babel/babel/pull/7499) Wmertens add prettier config. ([@danez](https://github.com/danez))
  * [#7191](https://github.com/babel/babel/pull/7191) Add eslint plugin to disallow `t.clone` and `t.cloneDeep`. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#7454](https://github.com/babel/babel/pull/7454) Dependency cleanup. ([@danez](https://github.com/danez))
  * [#7451](https://github.com/babel/babel/pull/7451) Update to circleci v2. ([@danez](https://github.com/danez))
  * [#7453](https://github.com/babel/babel/pull/7453) Install peerDependencies and remove unused async dependency. ([@danez](https://github.com/danez))
* `babel-preset-env`
  * [#7543](https://github.com/babel/babel/pull/7543) update preset-env after build-data. ([@yaelhe](https://github.com/yaelhe))
  * [#7401](https://github.com/babel/babel/pull/7401) Bump compat-table and regen preset-env data. ([@existentialism](https://github.com/existentialism))
* `babel-core`, `babel-helper-transform-fixture-test-runner`
  * [#7513](https://github.com/babel/babel/pull/7513) Migrate babel-core tests to use jest-expect. ([@devenbansod](https://github.com/devenbansod))
* `babel-helper-transform-fixture-test-runner`
  * [#7520](https://github.com/babel/babel/pull/7520) Show a more useful diff when comparing fixture files.. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-register`
  * [#7494](https://github.com/babel/babel/pull/7494) Fix reseting modules in jest and config. ([@danez](https://github.com/danez))
  * [#7487](https://github.com/babel/babel/pull/7487) Enable and fix babel-register tests. ([@danez](https://github.com/danez))
* `babel-*`
  * [#7484](https://github.com/babel/babel/pull/7484) Require tests to use input.mjs for modules, and output.js/.mjs based on active transforms. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-code-frame`
  * [#7485](https://github.com/babel/babel/pull/7485) Migrate `babel-code-frame` tests to use `expect`. ([@devenbansod](https://github.com/devenbansod))
* `babel-cli`, `babel-code-frame`, `babel-core`, `babel-helper-transform-fixture-test-runner`, `babel-preset-env-standalone`, `babel-preset-env`, `babel-register`, `babel-standalone`, `babel-traverse`, `babel-types`
  * [#7455](https://github.com/babel/babel/pull/7455) Use jest. ([@danez](https://github.com/danez))
* `babel-types`, `babylon`
  * [#7431](https://github.com/babel/babel/pull/7431) Upgrade flow to 0.66 and fix a few minor errors.. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-template`, `babel-types`, `babylon`
  * [#7227](https://github.com/babel/babel/pull/7227) Fix up flow errors. ([@existentialism](https://github.com/existentialism))
* `babel-helper-module-transforms`, `babel-helper-split-export-declaration`, `babel-plugin-proposal-class-properties`, `babel-plugin-transform-classes`, `babel-plugin-transform-function-name`, `babel-traverse`
  * [#7313](https://github.com/babel/babel/pull/7313) Added babel-helper-split-export-declaration. ([@Andarist](https://github.com/Andarist))

## v7.0.0-beta.40 (2018-02-12)

#### :rocket: New Feature
* `babel-preset-env`
  * [#7315](https://github.com/babel/babel/pull/7315) Add core-js as valid polyfill source. ([@danez](https://github.com/danez))
* `babel-highlight`
  *[#7351](https://github.com/babel/babel/pull/7351) Extract `@babel/highlight` package from `@babel/code-frame` ([@suchipi](https://github.com/suchipi))

#### :bug: Bug Fix
* `babel-cli`
  * [#7366](https://github.com/babel/babel/pull/7366) Fix CLI compilation callback calling. ([@VojtechStep](https://github.com/VojtechStep))
* `babel-code-frame`
  * [#7341](https://github.com/babel/babel/pull/7341) Allow falsey, yet valid options for codeFrameColumns(). ([@hulkish](https://github.com/hulkish))
* `babel-generator`, `babel-plugin-proposal-optional-chaining`, `babel-types`, `babylon`
  * [#7288](https://github.com/babel/babel/pull/7288) [BugFix] : OptionalChaining Bug fixes. ([@nveenjain](https://github.com/nveenjain))
* `babel-core`, `babel-template`, `babel-traverse`
  * [#7314](https://github.com/babel/babel/pull/7314) Add location information to parsing errors. ([@kaicataldo](https://github.com/kaicataldo))
* `babel-plugin-proposal-pipeline-operator`
  * [#7319](https://github.com/babel/babel/pull/7319) Do not optimize away async/gen arrow functions. ([@jridgewell](https://github.com/jridgewell))
* `babel-traverse`
  * [#7312](https://github.com/babel/babel/pull/7312) Preserve identifier location information when mapping this and arguments.. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babylon`
  * [#7297](https://github.com/babel/babel/pull/7297) [Typescript] - Fix SyntaxError in async arrow functions with rest params. ([@ksashikumar](https://github.com/ksashikumar))

#### :memo: Documentation
* `babel-plugin-proposal-unicode-property-regex`
  * [#7311](https://github.com/babel/babel/pull/7311) Remove outdated sentence from README. ([@mathiasbynens](https://github.com/mathiasbynens))

#### :house: Internal
* `babel-preset-env`
  * [#7344](https://github.com/babel/babel/pull/7344) Fix failing test. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* Other
  * [#7302](https://github.com/babel/babel/pull/7302) Update babel to beta.39. ([@hzoo](https://github.com/hzoo))
* `babylon`
  * [#7240](https://github.com/babel/babel/pull/7240) Compile Babylon with the normal workflow and use "overrides" in our c…. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

## v7.0.0-beta.39 (2018-01-30)

#### :eyeglasses: Spec Compliance
* `babel-plugin-proposal-optional-chaining`
  * [#6345](https://github.com/babel/babel/pull/6345) Remove old optional chain features. ([@jridgewell](https://github.com/jridgewell))

#### :rocket: New Feature
* `babel-polyfill`, `babel-preset-env`, `babel-register`, `babel-runtime`
  * [#6526](https://github.com/babel/babel/pull/6526) Add some es5 features to babel-preset-env. ([@existentialism](https://github.com/existentialism))
* `babel-core`
  * [#7291](https://github.com/babel/babel/pull/7291) babel-core: Add parse method. ([@kaicataldo](https://github.com/kaicataldo))
* `babel-preset-env`, `babel-preset-es2015`
  * [#7283](https://github.com/babel/babel/pull/7283) Support cjs shorthand for modules option in preset-es2015 & preset-env. ([@Andarist](https://github.com/Andarist))
* `babel-register`
  * [#7273](https://github.com/babel/babel/pull/7273) make babel injectable in babel-register. ([@Janpot](https://github.com/Janpot))
* `babel-preset-env`
  * [#7212](https://github.com/babel/babel/pull/7212) Add preset-env target esmodules. ([@kristoferbaxter](https://github.com/kristoferbaxter))
* `babel-generator`, `babylon`
  * [#7239](https://github.com/babel/babel/pull/7239) TypeScript: Support parsing 'unique' type operator. ([@andy-ms](https://github.com/andy-ms))
* `babel-code-frame`
  * [#7243](https://github.com/babel/babel/pull/7243) Add opts.message option to code frames. ([@thejameskyle](https://github.com/thejameskyle))

#### :bug: Bug Fix
* `babel-register`
  * [#7298](https://github.com/babel/babel/pull/7298) Revert "make babel injectable in babel-register". ([@hzoo](https://github.com/hzoo))
* `babel-plugin-proposal-decorators`, `babylon`
  * [#7189](https://github.com/babel/babel/pull/7189) Bug-fix: export default decorated class parsed as class expression. ([@nveenjain](https://github.com/nveenjain))
* `babel-plugin-transform-typescript`
  * [#7160](https://github.com/babel/babel/pull/7160) typescript: Fix enum emit when values are strings. ([@andy-ms](https://github.com/andy-ms))
* `babel-helper-annotate-as-pure`
  * [#7245](https://github.com/babel/babel/pull/7245) Tweak and add tests to babel-helper-annotate-as-pure. ([@existentialism](https://github.com/existentialism))

#### :nail_care: Polish
* `babel-template`
  * [#7255](https://github.com/babel/babel/pull/7255) update substitution placeholder message in babel-template. ([@thescientist13](https://github.com/thescientist13))

#### :memo: Documentation
* `babel-preset-env`
  * [#7271](https://github.com/babel/babel/pull/7271) babel-preset-env: Fixed links in readme and improved "Built-ins" example. ([@apepper](https://github.com/apepper))

#### :house: Internal
* `babel-*`
  * [#7149](https://github.com/babel/babel/pull/7149) Disallow duplicated nodes (only in tests output). ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-helper-transform-fixture-test-runner`
  * [#7149](https://github.com/babel/babel/pull/7149) Disallow duplicated nodes (only in tests output). ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-plugin-check-constants`, `babel-plugin-transform-block-scoping`, `babel-preset-env`, `babel-preset-es2015`, `babel-standalone`
  * [#6987](https://github.com/babel/babel/pull/6987) Remove check-constants plugin. ([@maurobringolf](https://github.com/maurobringolf))
* `babylon`
  * [#7246](https://github.com/babel/babel/pull/7246) Make comment props more consistent. ([@existentialism](https://github.com/existentialism))
* `babel-plugin-transform-eval`, `babel-standalone`
  * [#7262](https://github.com/babel/babel/pull/7262) Removed transform eval plugin. ([@rajzshkr](https://github.com/rajzshkr))
* Other
  * [#7231](https://github.com/babel/babel/pull/7231) Update to beta.38. ([@hzoo](https://github.com/hzoo))

## v7.0.0-beta.38 (2018-01-17)

#### :bug: Bug Fix
* `babylon`
  * [#7225](https://github.com/babel/babel/pull/7225) typescript: Properly set this.state.inType one token before parsing a type. ([@andy-ms](https://github.com/andy-ms))
  * [#7179](https://github.com/babel/babel/pull/7179) Issue #6691 - Fix: unicode characters not allowed in regexes. ([@perinikhil](https://github.com/perinikhil))
  * [#7098](https://github.com/babel/babel/pull/7098) Support 'assert and assign' TypeScript syntax. ([@maaz93](https://github.com/maaz93))
* `babel-traverse`
  * [#7219](https://github.com/babel/babel/pull/7219) Fix dependencies in @babel/traverse. ([@Andarist](https://github.com/Andarist))
* `babel-plugin-transform-async-to-generator`, `babel-traverse`
  * [#7213](https://github.com/babel/babel/pull/7213) Fixed _containerInsertAfter setting path key as stringified index. ([@Andarist](https://github.com/Andarist))
* `babel-code-frame`
  * [#7216](https://github.com/babel/babel/pull/7216) bugfix: set color level when color is forced. ([@Timer](https://github.com/Timer))
* `babel-generator`, `babel-plugin-transform-flow-strip-types`, `babylon`
  * [#7058](https://github.com/babel/babel/pull/7058) Add support for @@iterator. ([@rajzshkr](https://github.com/rajzshkr))
* `babel-plugin-transform-block-scoping`
  * [#6782](https://github.com/babel/babel/pull/6782) Minor improvements to block-scoping/tdz. ([@maurobringolf](https://github.com/maurobringolf))
* `babel-plugin-transform-react-inline-elements`
  * [#7166](https://github.com/babel/babel/pull/7166) Bail out on JSX fragments instead of throwing. ([@mdebbar](https://github.com/mdebbar))
* `babel-helper-builder-react-jsx`, `babel-plugin-transform-react-jsx`
  * [#7173](https://github.com/babel/babel/pull/7173) Preserve namespaced attributes when throwIfNamespace is false. ([@mtpc](https://github.com/mtpc))

#### :nail_care: Polish
* `babel-helpers`, `babel-plugin-transform-react-constant-elements`
  * [#7170](https://github.com/babel/babel/pull/7170) babel-helpers: prevent object shape change in jsx. ([@jorrit](https://github.com/jorrit))
* `babylon`
  * [#7184](https://github.com/babel/babel/pull/7184) Cleaning up some TS parsing tests. ([@maaz93](https://github.com/maaz93))
* `*`
  * [#7181](https://github.com/babel/babel/pull/7181) Rename actual/expected to input/output in fixtures.. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :memo: Documentation
* `babel-helper-plugin-test-runner`
  * [#7185](https://github.com/babel/babel/pull/7185) Doc changes for https://github.com/babel/babel/issues/7063. ([@rajzshkr](https://github.com/rajzshkr))
* `babylon`
  * [#7182](https://github.com/babel/babel/pull/7182) Fix syntax plugins in babylon readme [skip ci]. ([@hzoo](https://github.com/hzoo))

#### :house: Internal
* `babel-types`
  * [#7220](https://github.com/babel/babel/pull/7220) Remove old comment. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#7164](https://github.com/babel/babel/pull/7164) Fixes React isCompatTag validator accepting leading dash character. ([@claudiopro](https://github.com/claudiopro))
* `babel-traverse`
  * [#7218](https://github.com/babel/babel/pull/7218) Added custom NodePath.prototype.toString method as debug utility. ([@Andarist](https://github.com/Andarist))
* `babel-cli`
  * [#6826](https://github.com/babel/babel/pull/6826) Use the async version of transform in babel-cli. ([@aprieels](https://github.com/aprieels))
* `*`
  * [#7187](https://github.com/babel/babel/pull/7187) Remove old expected.{js,json} files. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-preset-env`
  * [#7183](https://github.com/babel/babel/pull/7183) Remove excess check for hidden files.. ([@yavorsky](https://github.com/yavorsky))
* Other
  * [#7180](https://github.com/babel/babel/pull/7180) Regen lib/types. ([@existentialism](https://github.com/existentialism))
  * [#7104](https://github.com/babel/babel/pull/7104) update to v7-beta.37. ([@hzoo](https://github.com/hzoo))
* `babel-generator`
  * [#7174](https://github.com/babel/babel/pull/7174) Remove "quotes" internal flag from babel-generator. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

## v7.0.0-beta.37 (2018-01-08)

Fixes + [overrides](https://github.com/babel/babel/pull/7091) config feature

#### :rocket: New Feature
* `babel-core`
  * [#7091](https://github.com/babel/babel/pull/7091) Allow configs to have an 'overrides' array. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babylon`
  * [#7007](https://github.com/babel/babel/pull/7007) Flow comment parsing. ([@rajzshkr](https://github.com/rajzshkr))
* `babel-generator`, `babel-types`
  * [#7107](https://github.com/babel/babel/pull/7107) Add validators for Flow AST node fields. ([@bcherny](https://github.com/bcherny))
* `babel-standalone`
  * [#7119](https://github.com/babel/babel/pull/7119) Add syntax-typescript and transform-typescript to babel-standalone. ([@alangpierce](https://github.com/alangpierce))

#### :bug: Bug Fix
* `babel-core`
  * [#7161](https://github.com/babel/babel/pull/7161) Process .babelignore before .babelrc. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-standalone`
  * [#7094](https://github.com/babel/babel/pull/7094) [@babel/standalone] Remove additional function context. ([@stevefan1999](https://github.com/stevefan1999))
* `babel-generator`
  * [#7155](https://github.com/babel/babel/pull/7155) Preserve jsx comment . ([@rajzshkr](https://github.com/rajzshkr))
  * [#7131](https://github.com/babel/babel/pull/7131) Fix turning division operator into line comment in compact mode. ([@karottenreibe](https://github.com/karottenreibe))
* `babel-plugin-proposal-class-properties`
  * [#7147](https://github.com/babel/babel/pull/7147) Fix computed properties being inserted after the class, thus making t…. ([@Andarist](https://github.com/Andarist))
* `babylon`
  * [#7121](https://github.com/babel/babel/pull/7121) Regex parsing issue fix  after function declaration.. ([@rajzshkr](https://github.com/rajzshkr))
* `babel-plugin-transform-computed-properties`, `babel-traverse`
  * [#7116](https://github.com/babel/babel/pull/7116) Fix a regression introduced in #7040. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-helper-remap-async-to-generator`, `babel-plugin-transform-async-to-generator`
  * [#7043](https://github.com/babel/babel/pull/7043) Avoid adding #__PURE__ annotation to .bind(this)() expressions. ([@Kovensky](https://github.com/Kovensky))

#### :nail_care: Polish
* `babel-plugin-proposal-decorators`
  * [#7124](https://github.com/babel/babel/pull/7124) [decorators] Only transform declarations to expressions when needed. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babylon`
  * [#7152](https://github.com/babel/babel/pull/7152) Suggest JSX fragment syntax in adjacent tag error. ([@sophiebits](https://github.com/sophiebits))

#### :memo: Documentation
* Other
  * [#7141](https://github.com/babel/babel/pull/7141) Update license year. ([@danielbayerlein](https://github.com/danielbayerlein))
* `babel-register`
  * [#7140](https://github.com/babel/babel/pull/7140) Update README.md. ([@eladchen](https://github.com/eladchen))

#### :house: Internal
* `babylon`
  * [#7144](https://github.com/babel/babel/pull/7144) Remove redundant property declarations. ([@andy-ms](https://github.com/andy-ms))
* `babel-preset-env`
  * [#7130](https://github.com/babel/babel/pull/7130) Remove hasBeenLogged flag from preset-env. ([@h1b9b](https://github.com/h1b9b))
* `babel-generator`, `babel-plugin-proposal-class-properties`, `babel-plugin-transform-flow-strip-types`, `babel-plugin-transform-react-jsx`, `babel-plugin-transform-template-literals`, `babel-plugin-transform-typescript`, `babel-preset-env`, `babel-preset-flow`
  * [#7120](https://github.com/babel/babel/pull/7120) Regenerate fixtures. ([@Kovensky](https://github.com/Kovensky))

## v7.0.0-beta.36 (2017-12-25)

- First release to allow support for `class A extends Array`
- Add `babel-plugin-transform-dotall-regex`
- Add `lazy` option to `modules-commonjs`
- Various fixes + decorator regression fix

#### :rocket: New Feature
* `babel-helpers`, `babel-plugin-transform-classes`, `babel-preset-es2015`
  * [#7020](https://github.com/babel/babel/pull/7020) Add support for extending builtins. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-preset-env`, `babel-standalone`
  * [#7065](https://github.com/babel/babel/pull/7065) Add dot-all regex support to preset-env and standalone. ([@existentialism](https://github.com/existentialism))
* `babel-plugin-transform-dotall-regex`
  * [#7059](https://github.com/babel/babel/pull/7059) Import babel-plugin-transform-dotall-regex. ([@mathiasbynens](https://github.com/mathiasbynens))
* `babel-helper-module-transforms`, `babel-plugin-transform-modules-commonjs`
  * [#6952](https://github.com/babel/babel/pull/6952) Add a 'lazy' options to modules-commonjs. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-plugin-syntax-import-meta`, `babel-preset-stage-3`, `babel-standalone`
  * [#7008](https://github.com/babel/babel/pull/7008) expose import.meta syntax parser option as plugin. ([@dnalborczyk](https://github.com/dnalborczyk))

#### :bug: Bug Fix
* `babel-generator`
  * [#7095](https://github.com/babel/babel/pull/7095) Fix generation flow unnamed computed property. ([@TrySound](https://github.com/TrySound))
* `babel-generator`, `babel-plugin-transform-typescript`, `babylon`
  * [#7075](https://github.com/babel/babel/pull/7075) Support parsing `export default abstract class {}`. ([@andy-ms](https://github.com/andy-ms))
* `babel-generator`, `babel-plugin-transform-flow-strip-types`, `babylon`
  * [#7061](https://github.com/babel/babel/pull/7061) Treat import type * as a parser error. ([@existentialism](https://github.com/existentialism))
* `babel-types`
  * [#6960](https://github.com/babel/babel/pull/6960) babel-types lists JSXIdentifier as an Expression. ([@tolmasky](https://github.com/tolmasky))
* `babel-plugin-proposal-decorators`
  * [#7032](https://github.com/babel/babel/pull/7032) [decorators] Don't transform every AssignmentExpression. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :nail_care: Polish
* `babel-plugin-transform-typescript`
  * [#7079](https://github.com/babel/babel/pull/7079) Better error messages when Babel fails to parse import = and export =…. ([@gs-akhan](https://github.com/gs-akhan))
* `babel-core`
  * [#6961](https://github.com/babel/babel/pull/6961) Handling babylon parsing errors in a better way. ([@maaz93](https://github.com/maaz93))

#### :memo: Documentation
* `babel-plugin-proposal-unicode-property-regex`
  * [#7064](https://github.com/babel/babel/pull/7064) Fix installation instructions. ([@mathiasbynens](https://github.com/mathiasbynens))

#### :house: Internal
* `babel-preset-env`
  * [#6576](https://github.com/babel/babel/pull/6576) Remove extraneous console output when running preset-env tests. ([@xjlim](https://github.com/xjlim))
  * [#7084](https://github.com/babel/babel/pull/7084) [preset-env] Move all defaults to the separate module. ([@yavorsky](https://github.com/yavorsky))
* `babel-core`
  * [#7090](https://github.com/babel/babel/pull/7090) Refactor config processing more. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-helper-wrap-function`, `babel-plugin-proposal-class-properties`, `babel-plugin-transform-typescript`, `babel-traverse`
  * [#7040](https://github.com/babel/babel/pull/7040) Make .insert{Before,After} work by default when the parent is an eport declaration. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-plugin-transform-block-scoping`
  * [#7028](https://github.com/babel/babel/pull/7028) Fix O(n^2) getLetReferences – 40% faster on large flat files. ([@sophiebits](https://github.com/sophiebits))

## v7.0.0-beta.35 (2017-12-14)

Various bug fixes, first version of Babel to use the MIT version of `regenerator`

#### :eyeglasses: Spec Compliance
* `babylon`
  * [#6986](https://github.com/babel/babel/pull/6986) Fix destructuring assignment spec violation. ([@ksashikumar](https://github.com/ksashikumar))
* `babel-helper-replace-supers`, `babel-helpers`, `babel-plugin-proposal-class-properties`, `babel-plugin-transform-classes`, `babel-plugin-transform-parameters`
  * [#6467](https://github.com/babel/babel/pull/6467) `this` before `super()` is a runtime error, not a static one.. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :rocket: New Feature
* `babel-generator`, `babylon`
  * [#7005](https://github.com/babel/babel/pull/7005) Add method property to ObjectTypeProperty. ([@existentialism](https://github.com/existentialism))
* Other
  * [#6994](https://github.com/babel/babel/pull/6994) Add Babel's song: Hallelujah (thanks to Angus). ([@hzoo](https://github.com/hzoo))
* `babylon`
  * [#6958](https://github.com/babel/babel/pull/6958) Update babylon to use unicode 10. ([@danez](https://github.com/danez))

#### :bug: Bug Fix
* `babel-core`, `babel-helper-remap-async-to-generator`, `babel-helper-wrap-function`, `babel-plugin-proposal-async-generator-functions`, `babel-plugin-proposal-class-properties`, `babel-plugin-proposal-function-sent`, `babel-plugin-transform-async-to-generator`, `babel-preset-env`
  * [#6984](https://github.com/babel/babel/pull/6984) Wrap FunctionDeclarations with FunctionDeclarations, instead of using _blockHoist.. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-types`
  * [#6939](https://github.com/babel/babel/pull/6939) Fix type definitions to fully support Typescript. ([@dpoindexter](https://github.com/dpoindexter))
* `babel-helper-remap-async-to-generator`, `babel-plugin-transform-async-to-generator`
  * [#6999](https://github.com/babel/babel/pull/6999) Async to generator fixes. ([@Kovensky](https://github.com/Kovensky))
* `babel-generator`
  * [#6998](https://github.com/babel/babel/pull/6998) Fix code generation for async generator methods. ([@Kovensky](https://github.com/Kovensky))
* `babylon`
  * [#6986](https://github.com/babel/babel/pull/6986) Fix destructuring assignment spec violation. ([@ksashikumar](https://github.com/ksashikumar))
  * [#6969](https://github.com/babel/babel/pull/6969) For babylon typescript parser, fix false positive for `!` after a line break. ([@andy-ms](https://github.com/andy-ms))
* `babel-helper-replace-supers`, `babel-helpers`, `babel-plugin-proposal-class-properties`, `babel-plugin-transform-classes`, `babel-plugin-transform-parameters`
  * [#6467](https://github.com/babel/babel/pull/6467) `this` before `super()` is a runtime error, not a static one.. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :nail_care: Polish
* `babel-helpers`, `babel-plugin-proposal-decorators`
  * [#7017](https://github.com/babel/babel/pull/7017) Fixes 6965. ([@perinikhil](https://github.com/perinikhil))
* `babel-types`
  * [#7001](https://github.com/babel/babel/pull/7001) Improve error message in types assert. ([@existentialism](https://github.com/existentialism))
* `babylon`
  * [#6962](https://github.com/babel/babel/pull/6962) Better error message for `import.meta` and `import()` without plugin. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :house: Internal
* `babel-core`, `babel-helper-fixtures`, `babel-plugin-transform-modules-amd`, `babel-plugin-transform-modules-commonjs`, `babel-plugin-transform-modules-umd`, `babel-preset-env`, `babel-template`, `babel-traverse`, `babel-types`, `babylon`
  * [#6991](https://github.com/babel/babel/pull/6991) Bump prettier. ([@existentialism](https://github.com/existentialism))
* `babel-plugin-transform-regenerator`, `babel-polyfill`, `babel-runtime`
  * [#6992](https://github.com/babel/babel/pull/6992) Update to the latest version of regenerator that uses the MIT license. ([@hzoo](https://github.com/hzoo))
* `babel-plugin-transform-react-jsx-self`, `babel-plugin-transform-react-jsx-source`, `babel-plugin-transform-react-jsx`, `babel-traverse`, `babel-types`
  * [#6967](https://github.com/babel/babel/pull/6967) Generate better builder names for JSX* and TS*. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babylon`
  * [#6982](https://github.com/babel/babel/pull/6982) publish babylon as next tag since it's not a scoped module yet [ski…. ([@hzoo](https://github.com/hzoo))

## v7.0.0-beta.34 (2017-12-02)

#### Regression Fix
* `babel-preset-stage-1`, `babel-preset-stage-2`
  * [#6949](https://github.com/babel/babel/pull/6949) Fix stage refs to exportNamespaceFrom and exportDefaultFrom. ([@existentialism](https://github.com/existentialism))

#### :eyeglasses: Spec Compliance
* `babel-preset-stage-0`, `babel-preset-stage-1`
  * [#6943](https://github.com/babel/babel/pull/6943) Moving Do expression to stage 1. ([@rajzshkr](https://github.com/rajzshkr))

#### :house: Internal
* `babylon`
  * [#6957](https://github.com/babel/babel/pull/6957) Update flow to 0.59 and fix some flow issues. ([@danez](https://github.com/danez))
* Other
  * [#6948](https://github.com/babel/babel/pull/6948) update to beta.33. ([@hzoo](https://github.com/hzoo))
* `babel-types`
  * [#6741](https://github.com/babel/babel/pull/6741) Refactor @babel/types to be 100% ES-module. ([@danez](https://github.com/danez))

## v7.0.0-beta.33 (2017-12-01)

#### :eyeglasses: Spec Compliance
* `babel-generator`, `babel-plugin-proposal-export-default-from`, `babel-plugin-proposal-export-default`, `babel-plugin-proposal-export-namespace-from`, `babel-plugin-proposal-export-namespace`, `babel-plugin-syntax-export-default-from`, `babel-plugin-syntax-export-extensions`, `babel-plugin-syntax-export-namespace-from`, `babel-standalone`, `babylon`
  * [#6920](https://github.com/babel/babel/pull/6920) Split exportExtensions into exportDefault and exportNamespace plugins…. ([@existentialism](https://github.com/existentialism))
* `babylon`
  * [#6725](https://github.com/babel/babel/pull/6725) Fix some reserved type handling and declare class with multiple extends. ([@existentialism](https://github.com/existentialism))

#### :boom: Breaking Change
* `babel-core`
  * [#6905](https://github.com/babel/babel/pull/6905) Merge all config & programmatic plugins/preset rather than duplicating. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babylon`
  * [#6836](https://github.com/babel/babel/pull/6836) removing expression field from ArrowFunctionExpression. ([@mmckeaveney](https://github.com/mmckeaveney))
* `babel-traverse`
  * [#6881](https://github.com/babel/babel/pull/6881) Remove double exports of NodePath, Scope and Hub in traverse. ([@danez](https://github.com/danez))
* Other
  * [#6831](https://github.com/babel/babel/pull/6831) [preset-env] Exclude transform-typeof-symbol with `loose` option.. ([@yavorsky](https://github.com/yavorsky))

#### :rocket: New Feature
* `babel-plugin-transform-for-of`
  * [#6914](https://github.com/babel/babel/pull/6914) Porting babel-plugin-transform-for-of-as-array into transform-for-of as option. ([@rajzshkr](https://github.com/rajzshkr))
* `babel-core`
  * [#6905](https://github.com/babel/babel/pull/6905) Merge all config & programmatic plugins/preset rather than duplicating. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-core`, `babel-preset-es2015`
  * [#6904](https://github.com/babel/babel/pull/6904) Add a 'cwd' option, and misc refactoring and tweaks before simple config merging. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-cli`, `babel-core`
  * [#6834](https://github.com/babel/babel/pull/6834) Expose `envName` as a top-level Babel option to avoid using environmental variables. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-helper-module-imports`
  * [#6744](https://github.com/babel/babel/pull/6744) Allowed hintedNames for namespaced imports, changed some other defaul…. ([@Andarist](https://github.com/Andarist))
* Other
  * [#6791](https://github.com/babel/babel/pull/6791) Add safari technology preview for babel-preset-env.. ([@yavorsky](https://github.com/yavorsky))
  * [#6438](https://github.com/babel/babel/pull/6438) Move babel-preset-env-standalone to the monorepo.. ([@yavorsky](https://github.com/yavorsky))
* `babel-core`, `babel-helper-remap-async-to-generator`, `babel-plugin-proposal-async-generator-functions`, `babel-plugin-proposal-class-properties`, `babel-plugin-proposal-function-sent`, `babel-plugin-transform-async-to-generator`, `babel-plugin-transform-parameters`
  * [#6803](https://github.com/babel/babel/pull/6803) Add /*#__PURE__*/ annotatiotion for babel-plugin-async-to-generator. ([@satya164](https://github.com/satya164))

#### :bug: Bug Fix
* `babel-helpers`, `babel-plugin-transform-modules-commonjs`
  * [#6850](https://github.com/babel/babel/pull/6850)  Copy getters and setters correctly in interopWildcard. ([@danez](https://github.com/danez))
* `babel-helper-module-transforms`, `babel-plugin-transform-modules-amd`, `babel-plugin-transform-modules-commonjs`, `babel-plugin-transform-modules-umd`
  * [#6863](https://github.com/babel/babel/pull/6863) Fix `export from` assignment order for loose mode.. ([@yavorsky](https://github.com/yavorsky))
* `babel-generator`
  * [#6922](https://github.com/babel/babel/pull/6922) UpdateExpressions as callees must be parenthesized. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#6897](https://github.com/babel/babel/pull/6897) Add handling parens for extends clause in generator. ([@existentialism](https://github.com/existentialism))
* `babel-plugin-transform-regenerator`
  * [#6917](https://github.com/babel/babel/pull/6917) update regenerator (removed explicit babel-types dep). ([@hzoo](https://github.com/hzoo))
* `babel-traverse`
  * [#6882](https://github.com/babel/babel/pull/6882) Fix setting deopt properly after evaluating multiple expressions. ([@existentialism](https://github.com/existentialism))
* `babylon`
  * [#6877](https://github.com/babel/babel/pull/6877) Allow yielding an arrow function withour parens around the param. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#6802](https://github.com/babel/babel/pull/6802) Parse async arrows with flow type parameters. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-types`
  * [#6852](https://github.com/babel/babel/pull/6852) Fix validation of WithStatement and enable flow in definitions. ([@danez](https://github.com/danez))
* `babel-core`
  * [#6842](https://github.com/babel/babel/pull/6842) Add missing generator argument and remove nonexistent one.. ([@loganfsmyth](https://github.com/loganfsmyth))
* Other
  * [#6663](https://github.com/babel/babel/pull/6663) Maintain plugin order with items in the `include` option. ([@existentialism](https://github.com/existentialism))
  * [#6662](https://github.com/babel/babel/pull/6662) Fix bug in preset-env usage plugin with destructure in for-of. ([@existentialism](https://github.com/existentialism))
* `babel-plugin-transform-block-scoping`
  * [#6814](https://github.com/babel/babel/pull/6814) Fix shadow variables reassignment for block scoping in loops.. ([@yavorsky](https://github.com/yavorsky))

#### :nail_care: Polish
* `babylon`
  * [#6836](https://github.com/babel/babel/pull/6836) removing expression field from ArrowFunctionExpression. ([@mmckeaveney](https://github.com/mmckeaveney))
  * [#6727](https://github.com/babel/babel/pull/6727) [Babylon] Use char codes contants. ([@xtuc](https://github.com/xtuc))
  * [#6754](https://github.com/babel/babel/pull/6754) Better error message for super when not using an object method. ([@rajzshkr](https://github.com/rajzshkr))
* `babel-helper-module-imports`
  * [#6744](https://github.com/babel/babel/pull/6744) Allowed hintedNames for namespaced imports, changed some other defaul…. ([@Andarist](https://github.com/Andarist))
* `babel-cli`, `babel-core`, `babylon`
  * [#6875](https://github.com/babel/babel/pull/6875) Fix "Better error messaging for unexpected tokens #6715". ([@gmmorris](https://github.com/gmmorris))
* `babel-helpers`, `babel-plugin-check-constants`
  * [#6862](https://github.com/babel/babel/pull/6862) Define readOnlyError helper and use in check-constants plugin. ([@maurobringolf](https://github.com/maurobringolf))
* `babel-types`
  * [#6853](https://github.com/babel/babel/pull/6853) Make SpreadProperty and RestProperty a deprecatedAlias. ([@danez](https://github.com/danez))
* `babel-plugin-transform-arrow-functions`, `babel-plugin-transform-parameters`
  * [#6792](https://github.com/babel/babel/pull/6792) Do not access out of bounds arguments. ([@apapirovski](https://github.com/apapirovski))
* `babel-core`, `babel-traverse`
  * [#6818](https://github.com/babel/babel/pull/6818) Add some nice warnings if plugins happen to return promises instead of sync values.. ([@loganfsmyth](https://github.com/loganfsmyth))

#### :memo: Documentation
* `babel-plugin-transform-for-of`, `babylon`
  * [#6942](https://github.com/babel/babel/pull/6942) add readme entry for for-of assumeArray, use it. ([@hzoo](https://github.com/hzoo))
* `babel-plugin-proposal-class-properties`
  * [#6941](https://github.com/babel/babel/pull/6941) [plugin-proposal-class-properties] Fix small loose docs typo. ([@sdgluck](https://github.com/sdgluck))
* `babel-register`
  * [#6899](https://github.com/babel/babel/pull/6899) Fixed ignore in readme for babel-register. ([@MarkShulhin](https://github.com/MarkShulhin))
* Other
  * [#6868](https://github.com/babel/babel/pull/6868) [skip ci] Update CONTRIBUTING.md. ([@yeefom](https://github.com/yeefom))
  * [#6756](https://github.com/babel/babel/pull/6756) Documentation PR: description about building and testing babylon in CONTRIBUTING.md. ([@vincentdchan](https://github.com/vincentdchan))
  * [#6843](https://github.com/babel/babel/pull/6843) README: Use HTTPS and relative links when possible. ([@mc10](https://github.com/mc10))
  * [#6825](https://github.com/babel/babel/pull/6825) docs: [skip-ci] Remove @babel scope from babel-preset-env include/exc…. ([@marcioj](https://github.com/marcioj))
* `babel-*`
  * [#6820](https://github.com/babel/babel/pull/6820) Replaced legacy babel-* & shorthand package name usage with @babel/* in README.md's. ([@hulkish](https://github.com/hulkish))
* `babel-cli`
  * [#6829](https://github.com/babel/babel/pull/6829) @babel/cli: removed babel-node mention in README.md [skip ci]. ([@viatsko](https://github.com/viatsko))

#### :house: Internal
* `babel-core`
  * [#6909](https://github.com/babel/babel/pull/6909) Rewrite config chain tests to use public loadOptions API.. ([@loganfsmyth](https://github.com/loganfsmyth))
* Other
  * [#6866](https://github.com/babel/babel/pull/6866) Add `.github` and `.idea` to `.npmignore`. ([@aaharu](https://github.com/aaharu))
  * [#6844](https://github.com/babel/babel/pull/6844) Add "make watch-babylon" [skip ci]. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#6819](https://github.com/babel/babel/pull/6819) use pr instead of tag for changelog/prs [skip ci]. ([@hzoo](https://github.com/hzoo))
  * [#6804](https://github.com/babel/babel/pull/6804) Update to v7-beta.31. ([@hzoo](https://github.com/hzoo))
* `babylon`
  * [#6727](https://github.com/babel/babel/pull/6727) [Babylon] Use char codes contants. ([@xtuc](https://github.com/xtuc))

## v7.0.0-beta.32 (2017-11-12)

> Regression with loose modules + export https://github.com/babel/babel/issues/6805

#### :boom: Breaking Change
* `babel-traverse`
  * [#6528](https://github.com/babel/babel/pull/6528) Remove support for flow bindings (remove deprecation). ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :rocket: New Feature
* `babel-core`, `babylon`
  * [#6789](https://github.com/babel/babel/pull/6789) Allow sourceType:unambiguous as a way to tell Babylon to guess the type.. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-core`, `babel-plugin-transform-modules-umd`, `babel-plugin-transform-react-display-name`, `babel-plugin-transform-react-jsx-source`
  * [#6777](https://github.com/babel/babel/pull/6777) Add an official 'state.filename' and be more explicit about option passing.. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-helper-module-transforms`, `babel-plugin-transform-modules-amd`, `babel-plugin-transform-modules-commonjs`, `babel-plugin-transform-modules-umd`
  * [#6742](https://github.com/babel/babel/pull/6742) Add additional support for loose mode in helper-module-transforms. ([@existentialism](https://github.com/existentialism))

#### :bug: Bug Fix
* `babel-helper-function-name`, `babel-plugin-transform-arrow-functions`, `babel-plugin-transform-function-name`, `babel-traverse`
  * [#6760](https://github.com/babel/babel/pull/6760) Fix transform-arrow-functions in { spec: true } shadowing. ([@Kovensky](https://github.com/Kovensky))

#### :nail_care: Polish
* `babel-register`
  * [#6651](https://github.com/babel/babel/pull/6651) Lazy-install sourceMapSupport. ([@aminmarashi](https://github.com/aminmarashi))
* `babel-plugin-transform-destructuring`, `babel-plugin-transform-spread`
  * [#6763](https://github.com/babel/babel/pull/6763) No unneeded empty arrays in transform spread. ([@apapirovski](https://github.com/apapirovski))
* `babylon`
  * [#6748](https://github.com/babel/babel/pull/6748) Avoid copying properties from the prototype chain.. ([@bmeurer](https://github.com/bmeurer))

#### :memo: Documentation
* `babel-plugin-proposal-unicode-property-regex`
  * [#6796](https://github.com/babel/babel/pull/6796) Link to README on GitHub rather than the npm copy. ([@mathiasbynens](https://github.com/mathiasbynens))
* `babel-core`
  * [#6794](https://github.com/babel/babel/pull/6794) Update README with new Sync-suffix functions.. ([@loganfsmyth](https://github.com/loganfsmyth))

#### :house: Internal
* `babel-generator`
  * [#6801](https://github.com/babel/babel/pull/6801) Prefix XJS test directories with JSX instead. ([@clemmy](https://github.com/clemmy))
  * [#6749](https://github.com/babel/babel/pull/6749) Move typscript test copy script to scripts folder and run once. ([@danez](https://github.com/danez))
* `babel-core`, `babel-register`
  * [#6783](https://github.com/babel/babel/pull/6783) Apply option defaults when transforming, not up front.. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-plugin-proposal-object-rest-spread`, `babel-plugin-proposal-unicode-property-regex`, `babel-plugin-transform-block-scoping`, `babel-plugin-transform-destructuring`
  * [#6776](https://github.com/babel/babel/pull/6776) Hoist more plugin options and default useUnicodeFlag to 'true'.. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-plugin-*`
  * [#6778](https://github.com/babel/babel/pull/6778) Use the peerDep to load types/template/traverse in plugins. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-polyfill`
  * [#6755](https://github.com/babel/babel/pull/6755) Remove core-js/regenerator-runtime stubs. ([@existentialism](https://github.com/existentialism))
* `.eslintrc`, `babel-helper-transform-fixture-test-runner`, `babylon`
  * [#6747](https://github.com/babel/babel/pull/6747) Unify eslint/prettier config. ([@danez](https://github.com/danez))
* Other
  * [#6738](https://github.com/babel/babel/pull/6738) Publish to the latest dist tag [skip ci]. ([@hzoo](https://github.com/hzoo))

## v7.0.0-beta.31 (2017-11-03)

> Yes, this was a jump from v7.0.0-beta.5 to v7.0.0-beta.31
> We moved babylon into the main repo, and it was already at beta.30.

#### :rocket: New Feature
* `babel-preset-react`, `babel-preset-stage-0`, `babel-preset-stage-1`, `babel-preset-stage-2`, `babel-preset-stage-3`, `babylon`
  * [#6733](https://github.com/babel/babel/pull/6733) add loose/useBuiltIns option to stage presets, use it. ([@hzoo](https://github.com/hzoo))
* `babel-generator`, `babel-helper-builder-react-jsx`, `babel-plugin-transform-react-jsx-compat`, `babel-plugin-transform-react-jsx`, `babel-types`
  * [#6552](https://github.com/babel/babel/pull/6552) Add JSX Fragment syntax support. ([@clemmy](https://github.com/clemmy))

#### :bug: Bug Fix
* `babel-preset-env`
  * [#6478](https://github.com/babel/babel/pull/6478) Fix global reference for use-built-ins plugin. ([@yavorsky](https://github.com/yavorsky))
* `babel-plugin-transform-spread`
  * [#6657](https://github.com/babel/babel/pull/6657) Avoid node duplication to fix spread bug with import.. ([@loganfsmyth](https://github.com/loganfsmyth))

#### :house: Internal
* `babel-cli`, `babel-core`, `babel-helper-transform-fixture-test-runner`
  * [#6556](https://github.com/babel/babel/pull/6556) Strictly validate Babel's options to centralize Flow refinement of datatype. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-*`
  * [#6655](https://github.com/babel/babel/pull/6655) Use peerDeps in register and babel-node, add missing peerDependencies, and declare devDependencies. ([@loganfsmyth](https://github.com/loganfsmyth))
* Other
  * [#6654](https://github.com/babel/babel/pull/6654) Update to beta.5 with scoped packages 👻. ([@hzoo](https://github.com/hzoo))
  * [#6736](https://github.com/babel/babel/pull/6736) Run with loose, exclude typeof in standalone. ([@hzoo](https://github.com/hzoo))

## v7.0.0-beta.5 (2017-10-30)

> Note: don't use ^ in your dependencies when using a beta. It can still break between (we should try not to do it but it can), so pin all the packages like `"@babel/cli" : "7.0.0-beta.4"`

#### :eyeglasses: Spec Compliance
* `babel-plugin-transform-optional-chaining`
  * [#6525](https://github.com/babel/babel/pull/6525) Optional Chaining: Account for document.all. ([@azz](https://github.com/azz))
* `babel-preset-env`, `babel-helper-remap-async-to-generator`, `babel-helpers`, `babel-plugin-transform-async-generator-functions`, `babel-plugin-transform-async-to-generator`, `babel-plugin-transform-function-sent`
  * [#6452](https://github.com/babel/babel/pull/6452) Adhering to async generator yield behavior change. ([@Andarist](https://github.com/Andarist))

#### :boom: Breaking Change
* `babel-*`
  * [#6575](https://github.com/babel/babel/pull/6575) remove es20xx prefixes from plugins and rename folders. ([@hzoo](https://github.com/hzoo))
* `babel-plugin-transform-async-to-generator`, `babel-plugin-transform-async-to-module-method`, `babel-standalone`
  * [#6573](https://github.com/babel/babel/pull/6573) Merge transform-async-to-module-method into transform-async-to-generator. ([@hzoo](https://github.com/hzoo))
* `babel-*`
  * [#6570](https://github.com/babel/babel/pull/6570) Rename Proposal Plugins. ([@hzoo](https://github.com/hzoo))
* `babel-preset-env`, `babel-helper-remap-async-to-generator`, `babel-helpers`, `babel-plugin-transform-async-generator-functions`, `babel-plugin-transform-async-to-generator`, `babel-plugin-transform-function-sent`
  * [#6452](https://github.com/babel/babel/pull/6452) Adhering to async generator yield behavior change. ([@Andarist](https://github.com/Andarist))
* `babel-helper-module-transforms`, `babel-helper-remap-async-to-generator`, `babel-helpers`, `babel-plugin-transform-class-properties`, `babel-plugin-transform-es2015-classes`, `babel-plugin-transform-es2015-for-of`, `babel-plugin-transform-es2015-modules-amd`, `babel-plugin-transform-es2015-modules-commonjs`, `babel-plugin-transform-es2015-modules-systemjs`, `babel-plugin-transform-es2015-parameters`, `babel-template`, `babel-types`
  * [#6492](https://github.com/babel/babel/pull/6492) Make babel-template nicer in a bunch of ways. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-core`
  * [#6436](https://github.com/babel/babel/pull/6436) Simplify dirname option in plugins/presets?. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-*`
  * [#6495](https://github.com/babel/babel/pull/6495) Rename everything: use scoped packages. ([@hzoo](https://github.com/hzoo))

#### :rocket: New Feature
* `babel-helper-builder-react-jsx`, `babel-plugin-transform-react-jsx`, `babel-types`
  * [#6563](https://github.com/babel/babel/pull/6563) Add a 'throwIfNamespace' option for JSX transform. ([@jukben](https://github.com/jukben))
* `babel-*`
  * [#6549](https://github.com/babel/babel/pull/6549) Add peerDep on specific babel-core version in transform plugins, pres…. ([@hzoo](https://github.com/hzoo))
* `babel-plugin-transform-es3-member-expression-literals`, `babel-plugin-transform-es3-property-literals`, `babel-plugin-transform-es3-reserved-words`, `babel-types`
  * [#6479](https://github.com/babel/babel/pull/6479) Rename variables es3 reserved words. ([@maurobringolf](https://github.com/maurobringolf))
* `babel-preset-env`, `babel-plugin-transform-unicode-property-regex`, `babel-preset-stage-3`, `babel-standalone`
  * [#6499](https://github.com/babel/babel/pull/6499) Import babel-plugin-transform-unicode-property-regex. ([@mathiasbynens](https://github.com/mathiasbynens))
* `babel-plugin-syntax-nullish-coalescing-operator`, `babel-plugin-transform-nullish-coalescing-operator`, `babel-preset-stage-1`, `babel-types`
  * [#6483](https://github.com/babel/babel/pull/6483) Implement transform for nullish-coalescing operator. ([@azz](https://github.com/azz))

#### :bug: Bug Fix
* `babel-plugin-proposal-unicode-property-regex`, `babel-template`
  * [#6646](https://github.com/babel/babel/pull/6646) fixup places that aren not scoped [skip ci]. ([@hzoo](https://github.com/hzoo))
* `babel-plugin-proposal-class-properties`, `babel-traverse`
  * [#6530](https://github.com/babel/babel/pull/6530) Fixed incorrect static class field initialization order. ([@Andarist](https://github.com/Andarist))
* `babel-*`
  * [#6644](https://github.com/babel/babel/pull/6644) Fix peerDep to ^ for now. ([@hzoo](https://github.com/hzoo))
* `babel-core`
  * [#6524](https://github.com/babel/babel/pull/6524) fix(babel-core): add missing extension to package.json dependency. ([@alexjoverm](https://github.com/alexjoverm))
  * [#6503](https://github.com/babel/babel/pull/6503) babel-core: Pass the right err to callback in transformFile(). ([@robertrossmann](https://github.com/robertrossmann))
* `babel-plugin-transform-react-jsx`
  * [#6519](https://github.com/babel/babel/pull/6519) Fix regression that leaks JSX pragma config between files.. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-plugin-transform-class-properties`
  * [#6517](https://github.com/babel/babel/pull/6517) Cloning reused node in class properties transform. ([@Andarist](https://github.com/Andarist))
* `babel-plugin-transform-pipeline-operator`
  * [#6515](https://github.com/babel/babel/pull/6515) Fix destructuring in pipeline operator. ([@jridgewell](https://github.com/jridgewell))

#### :nail_care: Polish
* `babel-plugin-transform-es2015-parameters`
  * [#6581](https://github.com/babel/babel/pull/6581) Fix hasRest to not try to load "-1" from params array.. ([@bmeurer](https://github.com/bmeurer))
* `babel-code-frame`
  * [#6550](https://github.com/babel/babel/pull/6550) Make syntax highlighting for `@` and `#` nicer. ([@lydell](https://github.com/lydell))

#### :memo: Documentation
* Other
  * [#6579](https://github.com/babel/babel/pull/6579) remove warning (still applies but don't need it there) [skip ci]. ([@hzoo](https://github.com/hzoo))
* `babel-*`
  * [#6569](https://github.com/babel/babel/pull/6569) Fix readmes to use @babel/ [skip ci]. ([@hzoo](https://github.com/hzoo))
* `babel-preset-env`
  * [#6527](https://github.com/babel/babel/pull/6527) Update README: `useBuiltins: true` is changed to "entry". ([@exarus](https://github.com/exarus))
  * [#6508](https://github.com/babel/babel/pull/6508) Update reference from babel- to @babel/ in README.md. ([@knittingcodemonkey](https://github.com/knittingcodemonkey))
* `babel-helper-get-function-arity`
  * [#6532](https://github.com/babel/babel/pull/6532) docs - Add helper-get-function-arity readme  [skip ci]. ([@athomann](https://github.com/athomann))
* `babel-helper-bindify-decorators`
  * [#6533](https://github.com/babel/babel/pull/6533) Add API to helper-bindify-decorators README [skip ci]. ([@athomann](https://github.com/athomann))
* `babel-helper-hoist-variables`
  * [#6534](https://github.com/babel/babel/pull/6534) Add API to babel-helper-hoist-vars README [skip ci]. ([@athomann](https://github.com/athomann))

#### :house: Internal
* `babel-core`, `babel-generator`, `babel-template`, `babel-traverse`, `babel-types`
  * [#6587](https://github.com/babel/babel/pull/6587) Update to babylon v7 beta.30. ([@hzoo](https://github.com/hzoo))
* `babel-preset-env`
  * [#6551](https://github.com/babel/babel/pull/6551) Re-add electron-to-chromium as preset-env devdep. ([@existentialism](https://github.com/existentialism))
* Other
  * [#6557](https://github.com/babel/babel/pull/6557) Lerna: Add publishConfig access public [skip ci]. ([@hzoo](https://github.com/hzoo))
  * [#6488](https://github.com/babel/babel/pull/6488) update to beta.3. ([@hzoo](https://github.com/hzoo))
* `babel-plugin-transform-unicode-property-regex`
  * [#6548](https://github.com/babel/babel/pull/6548) Remove stale emoji tests in plugin-transform-unicode-property-regex. ([@syldlb](https://github.com/syldlb))
* `babel-preset-env`, `babel-preset-es2017`
  * [#6513](https://github.com/babel/babel/pull/6513) Remove syntax-trailing-function-commas from Babel presets. ([@existentialism](https://github.com/existentialism))
* `babel-runtime`
  * [#6509](https://github.com/babel/babel/pull/6509) Updating references to @babel/ and adding dependencies to package.json. ([@knittingcodemonkey](https://github.com/knittingcodemonkey))
* `babel-core`, `babel-helpers`, `babel-plugin-transform-es2015-block-scoping`, `babel-runtime`
  * [#6379](https://github.com/babel/babel/pull/6379) Fix helper dependencies in babel runtime. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-core`
  * [#6474](https://github.com/babel/babel/pull/6474) Removed index.js stub from packages/babel-core. ([@zacharysang](https://github.com/zacharysang))
* `babel-register`
  * [#6391](https://github.com/babel/babel/pull/6391) simplify register test. ([@hzoo](https://github.com/hzoo))

## v7.0.0-beta.4 (2017-10-30)

> Had a bug with peerDeps, moving changelog to beta.5

## v7.0.0-beta.3 (2017-10-15)

> Update from beta.2 -> beta.3 looks like this: https://github.com/babel/babel/pull/6488

---

> Wanted to get this release out first, but next release we should make necessary breaking changes for later: using peerDeps on babel-core so that people don't install incompatible versions of plugins/babel itself and get weird errors reported, using scoped npm packages like `@babel/core` due to issues with npm squatting, knowing what is an official package or not, etc, and renaming proposal plugins to `babel-plugin-proposal-x` instead of `babel-plugin-transform-x`

> Note: don't use `^` in your dependencies when using a beta. It can still break between (we should try not to do it but it can), so pin all the packages

- Pipeline Operator: (a |> b), also in the Stage 1 Preset
- Throw Expressions: (() => throw 'hi'), also in Stage 2
- Preset/Plugin options are available top level rather than previously only in the visitor state
- Many fixes

#### :boom: Breaking Change
* `babel-helper-remap-async-to-generator`
  * [#6451](https://github.com/babel/babel/pull/6451) Drop old compatibility if statement targeting babel@6.15 and earlier. ([@Andarist](https://github.com/Andarist))
* `babel-core`
  * [#6350](https://github.com/babel/babel/pull/6350) Cache plugins and presets based on their identity. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-core`, `babel-helper-module-imports`, `babel-traverse`
  * [#6343](https://github.com/babel/babel/pull/6343) Remove core .metadata properties and resolveModuleSource. ([@loganfsmyth](https://github.com/loganfsmyth))

#### :rocket: New Feature
* `babel-template`
  * [#5001](https://github.com/babel/babel/pull/5001) Extend babel-template to work as a template tag. ([@Kovensky](https://github.com/Kovensky))
* `babel-core`, `babel-generator`, `babel-plugin-syntax-pipeline-operator`, `babel-plugin-transform-pipeline-operator`, `babel-preset-stage-1`, `babel-template`, `babel-traverse`, `babel-types`
  * [#6335](https://github.com/babel/babel/pull/6335) Pipeline operator. ([@jridgewell](https://github.com/jridgewell))
* `babel-cli`
  * [#6232](https://github.com/babel/babel/pull/6232) Add --include-dotfiles option to babel-cli. ([@existentialism](https://github.com/existentialism))
* `babel-plugin-transform-es2015-modules-commonjs`, `babel-plugin-transform-es2015-template-literals`
  * [#6327](https://github.com/babel/babel/pull/6327) Annotating taggedTemplateLiteral calls as #\_\_PURE\_\_. ([@Andarist](https://github.com/Andarist))
* `babel-standalone`
  * [#6322](https://github.com/babel/babel/pull/6322) Add transform-new-target and missed stage-3 plugins to babel-standalone.. ([@yavorsky](https://github.com/yavorsky))
* `babel-core`, `babel-generator`, `babel-plugin-syntax-throw-expressions`, `babel-plugin-transform-throw-expressions`, `babel-preset-stage-2`, `babel-template`, `babel-traverse`, `babel-types`
  * [#6325](https://github.com/babel/babel/pull/6325) Add throw expressions. ([@jridgewell](https://github.com/jridgewell))

#### :bug: Bug Fix
* `babel-plugin-transform-function-bind`
  * [#6481](https://github.com/babel/babel/pull/6481) Don't insert duplicated nodes when transforming function bind. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-plugin-transform-class-properties`
  * [#6466](https://github.com/babel/babel/pull/6466) Evaluate computed class props only once. ([@Qantas94Heavy](https://github.com/Qantas94Heavy))
* `babel-plugin-transform-do-expressions`, `babel-traverse`
  * [#6372](https://github.com/babel/babel/pull/6372) Fix the issue #6331. ([@wcastand](https://github.com/wcastand))
* `babel-core`
  * [#6377](https://github.com/babel/babel/pull/6377) Fix "module" external helpers output. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-plugin-transform-es2015-destructuring`
  * [#6374](https://github.com/babel/babel/pull/6374) Fixed reusing node in destructuring plugin, which caused caching issu…. ([@Andarist](https://github.com/Andarist))
* `babel-plugin-transform-es2015-parameters`, `babel-traverse`
  * [#6351](https://github.com/babel/babel/pull/6351) Requeueing sometimes has wrong scope. ([@jridgewell](https://github.com/jridgewell))
* `babel-traverse`
  * [#6354](https://github.com/babel/babel/pull/6354) unshiftContainer seems to incorrectly handle function params #6150. ([@daft300punk](https://github.com/daft300punk))
* `babel-plugin-check-es2015-constants`, `babel-plugin-transform-class-properties`, `babel-plugin-transform-es2015-block-scoping`, `babel-plugin-transform-es2015-parameters`, `babel-traverse`
  * [#6337](https://github.com/babel/babel/pull/6337) Path#ensureBlock keeps path context. ([@jridgewell](https://github.com/jridgewell))
* `babel-generator`
  * [#6334](https://github.com/babel/babel/pull/6334) Fix generator missing parens on Flow union types. ([@existentialism](https://github.com/existentialism))

#### :nail_care: Polish
* `babel-traverse`
  * [#6349](https://github.com/babel/babel/pull/6349) Remove debug closures. ([@jridgewell](https://github.com/jridgewell))

#### :memo: Documentation
* Other
  * [#6439](https://github.com/babel/babel/pull/6439) [skip ci] fix typo in README.md. ([@gberaudo](https://github.com/gberaudo))
* `babel-preset-typescript`
  * [#6365](https://github.com/babel/babel/pull/6365) note about .ts extension in the preset [skip ci]. ([@hzoo](https://github.com/hzoo))
* `babel-helper-module-imports`
  * [#6323](https://github.com/babel/babel/pull/6323) add docs for other import syntax [skip ci]. ([@hzoo](https://github.com/hzoo))

#### :house: Internal
* `.eslintrc`
  * [#6457](https://github.com/babel/babel/pull/6457) Use no-undefined-identifier eslint rule in packages. ([@existentialism](https://github.com/existentialism))
* `babel-plugin-transform-async-to-module-method`, `babel-plugin-transform-class-properties`, `babel-plugin-transform-es2015-arrow-functions`, `babel-plugin-transform-es2015-classes`, `babel-plugin-transform-es2015-computed-properties`, `babel-plugin-transform-es2015-for-of`, `babel-plugin-transform-es2015-modules-amd`, `babel-plugin-transform-es2015-modules-commonjs`, `babel-plugin-transform-es2015-modules-systemjs`, `babel-plugin-transform-es2015-modules-umd`, `babel-plugin-transform-es2015-parameters`, `babel-plugin-transform-es2015-spread`, `babel-plugin-transform-es2015-template-literals`, `babel-plugin-transform-optional-chaining`, `babel-plugin-transform-react-constant-elements`, `babel-plugin-transform-react-jsx`, `babel-plugin-transform-runtime`
  * [#6381](https://github.com/babel/babel/pull/6381) centralize plugin options. ([@RusinovAnton](https://github.com/RusinovAnton))
* `babel-cli`
  * [#6440](https://github.com/babel/babel/pull/6440) Misc. ([@hzoo](https://github.com/hzoo))
* `babel-core`
  * [#6435](https://github.com/babel/babel/pull/6435) Always pass an options object to presets and plugins.. ([@loganfsmyth](https://github.com/loganfsmyth))
  * [#6326](https://github.com/babel/babel/pull/6326) Preserve object identity when loading config, for improved future caching.. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-helpers`, `babel-runtime`
  * [#6366](https://github.com/babel/babel/pull/6366) Fix runtime helpers generator. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-cli`, `babel-core`, `babel-helper-transform-fixture-test-runner`, `babel-template`, `babel-traverse`
  * [#6359](https://github.com/babel/babel/pull/6359) Split up babel-core's File class and add Flowtype annotations. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-core`, `babel-helpers`, `babel-runtime`
  * [#6254](https://github.com/babel/babel/pull/6254) Add support for helper dependencies. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-core`, `babel-generator`, `babel-helper-replace-supers`, `babel-messages`, `babel-plugin-check-es2015-constants`, `babel-plugin-transform-es2015-classes`, `babel-plugin-transform-es2015-for-of`, `babel-traverse`
  * [#6356](https://github.com/babel/babel/pull/6356) Remove babel-messages and inline the usages. ([@JeromeFitz](https://github.com/JeromeFitz))
* `babel-helper-module-imports`, `babel-plugin-transform-decorators`, `babel-plugin-transform-typescript`
  * [#6355](https://github.com/babel/babel/pull/6355) Bump prettier. ([@existentialism](https://github.com/existentialism))
* Other
  * [#6348](https://github.com/babel/babel/pull/6348) remove inline plugin from Babel's .babelrc. ([@xjlim](https://github.com/xjlim))
* `babel-traverse`
  * [#6349](https://github.com/babel/babel/pull/6349) Remove debug closures. ([@jridgewell](https://github.com/jridgewell))
* `babel-standalone`
  * [#6338](https://github.com/babel/babel/pull/6338) transform-es2015-template-literals doesn't have spec mode anymore, ch…. ([@Andarist](https://github.com/Andarist))

## v7.0.0-beta.2 (2017-09-26)

#### :boom: Breaking Change
* `babel-core`, `babel-plugin-transform-es2015-template-literals`
  * [#6307](https://github.com/babel/babel/pull/6307) Move template object creation from core into the template transform.. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-core`, `babel-generator`, `babel-plugin-transform-class-properties`, `babel-template`, `babel-traverse`, `babel-types`
  * [#6306](https://github.com/babel/babel/pull/6306) update generator printing, babylon [skip ci]. ([@hzoo](https://github.com/hzoo))

#### :rocket: New Feature
* `babel-helper-annotate-as-pure`, `babel-plugin-transform-es2015-classes`, `babel-traverse`, `babel-types`
  * [#6267](https://github.com/babel/babel/pull/6267) Extracted babel-helper-annotate-as-pure. ([@Andarist](https://github.com/Andarist))

#### :bug: Bug Fix
* `babel-core`
  * [#6310](https://github.com/babel/babel/pull/6310) addMapping method call missing name parameter. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-helper-builder-react-jsx`, `babel-plugin-transform-react-inline-elements`
  * [#6294](https://github.com/babel/babel/pull/6294) Use helper-builder-react-jsx inside plugin-transform-react-inline-elements. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-plugin-transform-es2015-parameters`
  * [#6274](https://github.com/babel/babel/pull/6274) Fixed loose option of transform-es2015-parameters handling only Assig…. ([@Andarist](https://github.com/Andarist))
* `babel-core`, `babel-helpers`, `babel-plugin-transform-async-to-generator`, `babel-plugin-transform-react-constant-elements`
  * [#6289](https://github.com/babel/babel/pull/6289) Fixed asyncToGenerator helper using arrow function. ([@Andarist](https://github.com/Andarist))

#### :memo: Documentation
* [#6305](https://github.com/babel/babel/pull/6305) update readme [skip ci]. ([@hzoo](https://github.com/hzoo))

#### :house: Internal
* [#6279](https://github.com/babel/babel/pull/6279) Updates for handling codemods folder. ([@existentialism](https://github.com/existentialism))

## v7.0.0-beta.1 (2017-09-19)

Mostly bug fixes

#### :boom: Breaking Change
* `babel-helper-modules`, `babel-plugin-transform-es2015-modules-commonjs`, `babel-plugin-transform-strict-mode`
  * [#6244](https://github.com/babel/babel/pull/6244) Remove strict toggling wildcard interop. ([@loganfsmyth](https://github.com/loganfsmyth))

#### :rocket: New Feature
* `babel-plugin-codemod-optional-catch-binding`
  * [#6048](https://github.com/babel/babel/pull/6048) Remove unused catch binding. ([@MarckK](https://github.com/MarckK))

#### :bug: Bug Fix
* `babel-core`, `babel-helpers`
  * [#6260](https://github.com/babel/babel/pull/6260) Fixed buildExternalHelpers tool for var and module output types. ([@Andarist](https://github.com/Andarist))
* `babel-register`
  * [#6268](https://github.com/babel/babel/pull/6268) Make babel-register 7.x backward-compatible with 6.x.. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-plugin-transform-es2015-unicode-regex`
  * [#6263](https://github.com/babel/babel/pull/6263) Update regexpu-core to v4.1.3. ([@mathiasbynens](https://github.com/mathiasbynens))
* `babel-generator`
  * [#6259](https://github.com/babel/babel/pull/6259) Fix newlines before the update suffix operator in babel-generator. ([@zestime](https://github.com/zestime))
  * [#5651](https://github.com/babel/babel/pull/5651) Make terminator paren comment check more strict. ([@existentialism](https://github.com/existentialism))
* `babel-plugin-transform-react-jsx-source`
  * [#6239](https://github.com/babel/babel/pull/6239) Fix jsx-source to not fail without filename. ([@danez](https://github.com/danez))

#### :nail_care: Polish
* `babel-helpers`, `babel-plugin-transform-async-to-generator`, `babel-plugin-transform-class-properties`, `babel-plugin-transform-es2015-parameters`, `babel-plugin-transform-es2015-spread`, `babel-plugin-transform-react-constant-elements`, `babel-runtime`
  * [#6250](https://github.com/babel/babel/pull/6250) Use new Array instead of Array for V8 optimization. ([@pranavpr](https://github.com/pranavpr))

#### :house: Internal
* `babel-core`, `babel-plugin-syntax-async-functions`, `babel-plugin-syntax-exponentiation-operator`, `babel-plugin-syntax-trailing-function-commas`, `babel-plugin-transform-es2015-classes`, `babel-plugin-transform-es2015-parameters`, `babel-plugin-transform-flow-strip-types`, `babel-preset-es2015`
  * [#6229](https://github.com/babel/babel/pull/6229) move out syntax plugins to babel/babel-archive, they don't need to be…. ([@hzoo](https://github.com/hzoo))
* `babel-polyfill`
  * [#6256](https://github.com/babel/babel/pull/6256) Add core-js stubs for parseFloat and parseInt to babel-polyfill. ([@existentialism](https://github.com/existentialism))
  * [#6255](https://github.com/babel/babel/pull/6255) Bump regenerator-runtime version in babel-polyfill. ([@existentialism](https://github.com/existentialism))

## v7.0.0-alpha.20 (2017-08-30)

- Handle `Symbol` in `transform-es2015-computed-properties`
- Disallow `...[` & `...{` inside object destructuring

> http://tc39.github.io/tc39-notes/2017-05_may-23.html#16ih-why-allow-bindingpattern-for-bindingrestparameter-for-object-rest-maybe-we-should-just-allow-identifiers

```js
// Invalid
( {...{}} = {} ); ( {...[]} = {} );
let {...{}} = {}; let {...[]} = {};
```
- Split `transform-export-extensions` into `transform-export-namespace` and `transform-export-default` plugins
- Move `transform-numeric-separator` to Stage 2
- Move `transform-class-properties` to Stage 3
  - Change the default transform to use `Object.defineProperty` and `loose` option to use assignment (`this.a = 1`)
  - Use `configurable: true`
- Change `es2015-template-literals` to use `.concat` by default and concatenation in `loose` mode.
- Remove deprecated jsx pragma check in `transform-react-jsx`
- Remove `preset-flow` from the `preset-react` (there was confusion on why type syntax was allowed, and it also made it incompatible with `preset-typescript`
- Add `--config-file` CLI flag to explicitly pass a config location
- Move `babel-standalone` into the repo (another form of this used to be `babel-browser`)

#### :eyeglasses: Spec Compliance
* `babel-plugin-transform-async-to-generator`, `babel-*`
  * [#6094](https://github.com/babel/babel/pull/6094) Spec compatibility for iteratorClose condition.. ([@yavorsky](https://github.com/yavorsky))
* `babel-helpers`, `babel-plugin-transform-es2015-computed-properties`
  * [#6159](https://github.com/babel/babel/pull/6159) Allow native Symbols as computed property names. ([@jridgewell](https://github.com/jridgewell))
* `babel-plugin-check-es2015-constants`, `babel-traverse`, `babel-types`
  * [#6100](https://github.com/babel/babel/pull/6100) Consistent const violations. ([@maurobringolf](https://github.com/maurobringolf))
* `babel-generator`, `babel-plugin-transform-es2015-destructuring`, `babel-plugin-transform-object-rest-spread`
  * [#6102](https://github.com/babel/babel/pull/6102) Adjusted Object Rest/Spread tests to use only allowed syntax from the…. ([@Andarist](https://github.com/Andarist))
* `babel-plugin-transform-export-default`, `babel-plugin-transform-export-extensions`, `babel-plugin-transform-export-namespace`, `babel-preset-stage-1`, `babel-preset-stage-2`
  * [#6080](https://github.com/babel/babel/pull/6080) Split export extensions into 2. ([@echo304](https://github.com/echo304))
* `babel-plugin-transform-class-properties`
  * [#6123](https://github.com/babel/babel/pull/6123) Add 'configurable' property to class fields. ([@reznord](https://github.com/reznord))
* `babel-plugin-transform-class-properties`, `babel-plugin-transform-decorators`, `babel-plugin-transform-es2015-parameters`, `babel-plugin-transform-flow-comments`, `babel-plugin-transform-new-target`, `babel-plugin-transform-react-constant-elements`, `babel-preset-stage-2`, `babel-preset-stage-3`
  * [#6076](https://github.com/babel/babel/pull/6076) Update Class Fields to Stage 3 and change default behavior. ([@kedromelon](https://github.com/kedromelon))
* `babel-preset-stage-1`, `babel-preset-stage-2`
  * [#6071](https://github.com/babel/babel/pull/6071) Add numeric separator to stage 2 preset. ([@rwaldron](https://github.com/rwaldron))

#### :boom: Breaking Change
* `babel-plugin-transform-es2015-template-literals`
  * [#6098](https://github.com/babel/babel/pull/6098) default to spec mode for template literal transform. ([@kedromelon](https://github.com/kedromelon))
* `babel-generator`, `babel-plugin-transform-es2015-destructuring`, `babel-plugin-transform-object-rest-spread`
  * [#6145](https://github.com/babel/babel/pull/6145) Removed the deprecated jsx pragma detection code. ([@asthas](https://github.com/asthas))
* `babel-plugin-transform-flow-strip-types`, `babel-preset-flow`, `babel-preset-react`
  * [#6118](https://github.com/babel/babel/pull/6118) Remove Flow support in React preset. ([@ramasilveyra](https://github.com/ramasilveyra))
* `babel-helper-fixtures`, `babel-*`
  * [#6157](https://github.com/babel/babel/pull/6157) Don't merge test options.. ([@jridgewell](https://github.com/jridgewell))

#### :rocket: New Feature
* `babel-cli`
  * [#6133](https://github.com/babel/babel/pull/6133) add --config-file option to CLI to pass in .babelrc location. ([@bdwain](https://github.com/bdwain))

#### :bug: Bug Fix
* `babel-core`
  * [#5586](https://github.com/babel/babel/pull/5586) Handle cycles of plugins compiling themselves and .babelrc.js files loading themselves. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-plugin-transform-es2015-destructuring`, `babel-traverse`
  * [#5743](https://github.com/babel/babel/pull/5743) Fix issue replacement nodes not requeued for transforming after destructuring. ([@buunguyen](https://github.com/buunguyen))
* `babel-plugin-check-es2015-constants`, `babel-plugin-transform-es2015-block-scoping`, `babel-traverse`
  * [#6156](https://github.com/babel/babel/pull/6156) Fix overshadowing local binding. ([@jridgewell](https://github.com/jridgewell))
* `babel-helper-replace-supers`, `babel-plugin-transform-class-properties`, `babel-traverse`
  * [#6158](https://github.com/babel/babel/pull/6158) Class instance properties define their own context. ([@jridgewell](https://github.com/jridgewell))
* `babel-plugin-transform-export-default`, `babel-plugin-transform-export-namespace`, `babel-types`
  * [#6139](https://github.com/babel/babel/pull/6139) Complete export transform split. ([@jridgewell](https://github.com/jridgewell))
* `babel-plugin-transform-es2015-parameters`, `babel-traverse`
  * [#5741](https://github.com/babel/babel/pull/5741) Fix relative execution location introspection. ([@jridgewell](https://github.com/jridgewell))
* `babel-helper-replace-supers`, `babel-plugin-transform-es2015-classes`
  * [#6103](https://github.com/babel/babel/pull/6103) Don't use _possibleConstructorReturn inside arrow functions. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-plugin-transform-class-properties`
  * [#6082](https://github.com/babel/babel/pull/6082) babel-plugin-transform-class-properties: Ignore type annotations when looking for name collisions. ([@andy-ms](https://github.com/andy-ms))
* `babel-preset-stage-2`
  * [#6088](https://github.com/babel/babel/pull/6088) remove left transform-class-properties from stage. ([@echo304](https://github.com/echo304))
* `babel-plugin-transform-es2015-block-scoping`, `babel-types`
  * [#5980](https://github.com/babel/babel/pull/5980) Fix scope of catch block. ([@boopathi](https://github.com/boopathi))

#### :nail_care: Polish
* `babel-plugin-transform-es2015-classes`, `babel-plugin-transform-flow-comments`, `babel-plugin-transform-flow-strip-types`
  * [#5560](https://github.com/babel/babel/pull/5560) Closes [#4840](https://github.com/babel/babel/issues/4840): Alias class prototype for methods in loose mode. ([@oliverdon](https://github.com/oliverdon))

#### :memo: Documentation
* `babel-plugin-transform-class-properties`
  * [#6124](https://github.com/babel/babel/pull/6124) Update README.md. ([@uxter](https://github.com/uxter))
* Other
  * [#6121](https://github.com/babel/babel/pull/6121) Update babel/website link. ([@maurobringolf](https://github.com/maurobringolf))
* `babel-plugin-transform-react-inline-elements`
  * [#6078](https://github.com/babel/babel/pull/6078) [docs] Added clarification note about transform-react-inline-elements usage …. ([@Andarist](https://github.com/Andarist))

#### :house: Internal
* `babel-standalone`
  * [#6168](https://github.com/babel/babel/pull/6168) Refactor es2015-loose and es2015-no-commonjs presets to use preset op…. ([@bmax](https://github.com/bmax))
  * [#6137](https://github.com/babel/babel/pull/6137) Fix babel-standalone for realz. ([@Daniel15](https://github.com/Daniel15))
  * [#6029](https://github.com/babel/babel/pull/6029) Move babel-standalone into main Babel repo. ([@Daniel15](https://github.com/Daniel15))
* `babel-plugin-transform-es2015-template-literals`
  * [#6169](https://github.com/babel/babel/pull/6169) re-add template literals tests, add ones that were missing. ([@kedromelon](https://github.com/kedromelon))
* `babel-core`, `babel-generator`, `babel-template`, `babel-traverse`, `babel-types`
  * [#6167](https://github.com/babel/babel/pull/6167) update babylon beta.22. ([@hzoo](https://github.com/hzoo))
* `babel-*`
  * [#6096](https://github.com/babel/babel/pull/6096) linting: disallow t.identifier("undefined") in plugins. ([@kedromelon](https://github.com/kedromelon))
* Other
  * [#6138](https://github.com/babel/babel/pull/6138) Allow nightly Yarn builds to be used. ([@Daniel15](https://github.com/Daniel15))
  * [#6079](https://github.com/babel/babel/pull/6079) Allow substrings for TEST_ONLY in make. ([@Qantas94Heavy](https://github.com/Qantas94Heavy))
  * [#6064](https://github.com/babel/babel/pull/6064) Yarn engines. ([@hzoo](https://github.com/hzoo))
* `babel-core`, `babel-plugin-transform-es2015-classes`, `babel-plugin-transform-regenerator`, `babel-plugin-transform-runtime`, `babel-runtime`
  * [#6113](https://github.com/babel/babel/pull/6113) Fix/regenerator fixtures. ([@Andarist](https://github.com/Andarist))
* `babel-plugin-transform-es2015-parameters`
  * [#6116](https://github.com/babel/babel/pull/6116) Fix rest-member-expression-optimisation fixture. ([@existentialism](https://github.com/existentialism))
* `babel-plugin-transform-class-properties`
  * [#6090](https://github.com/babel/babel/pull/6090) Fix class prop test fixture. ([@existentialism](https://github.com/existentialism))
* `babel-register`
  * [#6085](https://github.com/babel/babel/pull/6085) Replace decache with direct removal in babel-register tests. ([@existentialism](https://github.com/existentialism))
* `babel-generator`
  * [#6074](https://github.com/babel/babel/pull/6074) Add "classProperties" plugin to babel-generator typescript tests. ([@andy-ms](https://github.com/andy-ms))
* `babel-plugin-syntax-typescript`, `babel-preset-typescript`
  * [#6070](https://github.com/babel/babel/pull/6070) Move parser plugin from babel-preset-typescript to babel-plugin-syntax-typescript. ([@andy-ms](https://github.com/andy-ms))

## v7.0.0-alpha.19 (2017-08-07)

> Can help us documented any undocumented changes or issues at https://github.com/babel/notes/issues/30 or make an issue

#### :boom: Breaking Change
* `babel-plugin-transform-flow-strip-types`, `babel-preset-react`
  * [#5468](https://github.com/babel/babel/pull/5468) Add requireDirective to strip-flow-types for use in React preset. ([@existentialism](https://github.com/existentialism))

`babel-preset-react` now will only handle flow if the file has a `// @flow`

#### :rocket: New Feature
* `babel-plugin-syntax-typescript`, `babel-plugin-transform-typescript`, `babel-preset-typescript`
  * [#5899](https://github.com/babel/babel/pull/5899) Add babel-plugin-syntax-typescript, babel-plugin-transform-typescript, and babel-preset-typescript. ([@andy-ms](https://github.com/andy-ms))

Initial release of typescript equivalent of how Babel handles flow with a new `babel-preset-typescript`

```json
{
  "presets": ["typescript"]
}
```

#### :bug: Bug Fix
* `babel-plugin-transform-es2015-modules-commonjs`
  * [#6054](https://github.com/babel/babel/pull/6054) Don't insert the same node into the AST multiple times (fixes babel/babili#556). ([@not-an-aardvark](https://github.com/not-an-aardvark))
* `babel-plugin-transform-es2015-modules-commonjs`, `babel-plugin-transform-es2015-spread`
  * [#6052](https://github.com/babel/babel/pull/6052) Array destructuring hole. ([@hzoo](https://github.com/hzoo))

#### :house: Internal
* `babel-plugin-syntax-typescript`, `babel-plugin-transform-typescript`, `babel-preset-typescript`
  * [#6061](https://github.com/babel/babel/pull/6061) Update gulp. ([@hzoo](https://github.com/hzoo))
* `babel-core`, `babel-helper-wrap-function`, `babel-plugin-transform-es2015-arrow-functions`
  * [#6056](https://github.com/babel/babel/pull/6056) Use Yarn Workspaces. ([@hzoo](https://github.com/hzoo))
* `babel-plugin-transform-es2015-destructuring`, `babel-plugin-transform-es2015-parameters`, `babel-plugin-transform-object-rest-spread`, `babel-plugin-transform-react-constant-elements`, `babel-traverse`
  * [#6051](https://github.com/babel/babel/pull/6051) Rewrite parameter transform and drop _blockHoist reliance. ([@existentialism](https://github.com/existentialism))
* `babel-core`, `babel-generator`, `babel-traverse`, `babel-types`
  * [#6053](https://github.com/babel/babel/pull/6053) babylon beta.19. ([@hzoo](https://github.com/hzoo))
* Other
  * [#6050](https://github.com/babel/babel/pull/6050) update to alpha.18. ([@hzoo](https://github.com/hzoo))

## v7.0.0-alpha.18 (2017-08-03)

#### :eyeglasses: Spec Compliance
* `babel-generator`, `babel-plugin-transform-flow-comments`, `babel-plugin-transform-flow-strip-types`, `babel-types`
  * [#5990](https://github.com/babel/babel/pull/5990) Flow opaque type aliases. ([@jbrown215](https://github.com/jbrown215))
* `babel-preset-stage-3`
  * [#6032](https://github.com/babel/babel/pull/6032) Add optional catch binding to stage 3 preset. ([@existentialism](https://github.com/existentialism))

#### :boom: Breaking Change
* `babel-plugin-transform-es2015-block-scoping`, `babel-traverse`, `babel-types`
  * [#5923](https://github.com/babel/babel/pull/5923) Prevent getFunctionParent from returning Program. ([@sarupbanskota](https://github.com/sarupbanskota))

#### :rocket: New Feature
* `babel-node`
  * [#6023](https://github.com/babel/babel/pull/6023) Make babel-node a standalone package. ([@existentialism](https://github.com/existentialism))
* `babel-generator`
  * [#5896](https://github.com/babel/babel/pull/5896) babel-generator: Add TypeScript support. ([@andy-ms](https://github.com/andy-ms))

#### :bug: Bug Fix
* `babel-plugin-transform-es2015-block-scoping`, `babel-preset-es2015`
  * [#6046](https://github.com/babel/babel/pull/6046) Fix invalid block-scoped loop. ([@jridgewell](https://github.com/jridgewell))
* `babel-types`
  * [#6031](https://github.com/babel/babel/pull/6031) Fix generate interfaces script. ([@existentialism](https://github.com/existentialism))
* `babel-core`
  * [#6022](https://github.com/babel/babel/pull/6022) allow PluginPass.file.addImport to create empty import statements. ([@chocolateboy](https://github.com/chocolateboy))

#### :memo: Documentation
* `babel-plugin-transform-optional-chaining`
  * [#6035](https://github.com/babel/babel/pull/6035) Fix refs in transform-optional-chaining docs [skip ci]. ([@existentialism](https://github.com/existentialism))
* Other
  * [#6024](https://github.com/babel/babel/pull/6024) add proposals repo [skip ci]. ([@hzoo](https://github.com/hzoo))
  * [#6013](https://github.com/babel/babel/pull/6013) add TEST_GREP example clarification. ([@kedromelon](https://github.com/kedromelon))

#### :house: Internal
* `babel-*`
  * [#6044](https://github.com/babel/babel/pull/6044) Newlines in fixtures. ([@hzoo](https://github.com/hzoo))
* `babel-generator`
  * [#6026](https://github.com/babel/babel/pull/6026) babel-generator: Comment TypeScript-specific code. ([@andy-ms](https://github.com/andy-ms))
  * [#6018](https://github.com/babel/babel/pull/6018) babel-generator: Make plugins list explicit for test cases. ([@andy-ms](https://github.com/andy-ms))
* `babel-plugin-transform-function-sent`, `babel-preset-stage-2`
  * [#6020](https://github.com/babel/babel/pull/6020) Function sent. ([@hzoo](https://github.com/hzoo))
* `babel-types`
  * [#6019](https://github.com/babel/babel/pull/6019) babel-types: Have NewExpression inherit from CallExpression. ([@andy-ms](https://github.com/andy-ms))

## v7.0.0-alpha.17 (2017-07-26)

- Lots of bug fixes
- `function.sent` (temporary at `babel-plugin-transform-function-sent2` until we get access to the npm package) EDIT: republished `babel-plugin-transform-function-sent`
- Optional catch binding `try {} catch {}`: `babel-plugin-transform-optional-catch-binding`
- es2015-parameters `loose` mode that doesn't use `arguments`

#### :eyeglasses: Spec Compliance
* `babel-plugin-check-es2015-constants`
  * [#5930](https://github.com/babel/babel/pull/5930) Spec compliance of check-es2015-constants plugin. ([@maurobringolf](https://github.com/maurobringolf))

> Instead of throwing a compile time error when const is violated, Babel should insert a throw statement before the violation.

#### :boom: Breaking Change
* `babel-plugin-transform-flow-comments`
  * [#5970](https://github.com/babel/babel/pull/5970) Remove noop. ([@jridgewell](https://github.com/jridgewell))

> Removes the "Noop" AST node, which was only used in the flow-comments plugin and probably unlikely in the ecosystem.

#### :rocket: New Feature
* `babel-plugin-transform-react-constant-elements`
  * [#5307](https://github.com/babel/babel/pull/5307) feature: Support whitelisting mutable props for react-constant-elements. ([@STRML](https://github.com/STRML))

> If you know a certain property will be ok to hoist

```js
{
  "plugins": [
    ["transform-react-constant-elements", {"allowMutablePropsOnTags": ["FormattedMessage"]}],
  ]
}
```

* `babel-generator`, `babel-types`
  * [#5856](https://github.com/babel/babel/pull/5856) babel-types: Add TypeScript definitions. ([@andy-ms](https://github.com/andy-ms))
* `babel-generator`, `babel-plugin-transform-flow-strip-types`, `babel-types`
  * [#5984](https://github.com/babel/babel/pull/5984) Add support for flow predicates in babel-generator. ([@existentialism](https://github.com/existentialism))

```js
declare function foo(x: mixed): boolean %checks(x !== null);
```

* `babel-generator`, `babel-plugin-transform-flow-strip-types`
  * [#5985](https://github.com/babel/babel/pull/5985) Add support for export type star in babel-generator. ([@existentialism](https://github.com/existentialism))

```js
declare module "foo" { declare export type * from "bar"; }
```

* `babel-helper-remap-async-to-generator`, `babel-helper-wrap-function`, `babel-helpers`, `babel-plugin-transform-function-sent`, `babel-preset-stage-2`
  * [#5920](https://github.com/babel/babel/pull/5920) Function sent. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

```js
function* gen() {
  let a = function.sent;
}
```

```js
let gen = _skipFirstGeneratorNext(function* gen() {
  const _functionSent = yield;
  let a = _functionSentt;
})
```

* `babel-core`, `babel-generator`, `babel-plugin-syntax-optional-catch-binding`, `babel-plugin-transform-optional-catch-binding`, `babel-template`, `babel-traverse`, `babel-types`
  * [#5956](https://github.com/babel/babel/pull/5956) Add optionality to catch bindings. ([@MarckK](https://github.com/MarckK))

```js
try {} catch {}
```

* `babel-plugin-transform-es2015-parameters`
  * [#5943](https://github.com/babel/babel/pull/5943) 2nd try: Add loose option for es2015-parameters transformation. ([@maurobringolf](https://github.com/maurobringolf))

> Non-spec compliant transform (disregards arity) but doesn't use `arguments`

```js
var t = function (f = "foo") {
  return f + " bar";
};
```

```js
var t = function (f) {
  if (f === void 0) {
    f = "foo";
  }

  return f + " bar";
};
```

#### :bug: Bug Fix
* `babel-core`, `babel-helpers`, `babel-plugin-transform-object-rest-spread`, `babel-plugin-transform-react-constant-elements`
  * [#5757](https://github.com/babel/babel/pull/5757) Non string computed keys in object-rest-spread. ([@peey](https://github.com/peey))
* `babel-traverse`
  * [#5745](https://github.com/babel/babel/pull/5745) Use first binding for multiple var declarations. ([@peey](https://github.com/peey))
* `babel-helper-builder-binary-assignment-operator-visitor`, `babel-helper-explode-assignable-expression`, `babel-plugin-transform-exponentiation-operator`
  * [#5969](https://github.com/babel/babel/pull/5969) Fixup builder-binary-assignment-operator-visitor. ([@jridgewell](https://github.com/jridgewell))
* `babel-plugin-transform-es2015-for-of`, `babel-traverse`
  * [#5835](https://github.com/babel/babel/pull/5835) Fix a few type inferences. ([@jridgewell](https://github.com/jridgewell))
* `babel-plugin-transform-numeric-separator`, `babel-types`
  * [#5968](https://github.com/babel/babel/pull/5968) Fix numeric-separator transform. ([@jridgewell](https://github.com/jridgewell))
* `babel-plugin-transform-es2015-modules-amd`, `babel-plugin-transform-es2015-modules-commonjs`, `babel-plugin-transform-es2015-modules-umd`
  * [#5953](https://github.com/babel/babel/pull/5953) Support exporting deep destructuring. ([@jridgewell](https://github.com/jridgewell))
* `babel-plugin-transform-es2015-for-of`
  * [#5964](https://github.com/babel/babel/pull/5964) Fix for-of loose optimization. ([@jridgewell](https://github.com/jridgewell))
* `babel-core`, `babel-plugin-transform-object-rest-spread`, `babel-traverse`
  * [#5945](https://github.com/babel/babel/pull/5945) Remove maybePopFromStatements. ([@jridgewell](https://github.com/jridgewell))
* `babel-generator`
  * [#5950](https://github.com/babel/babel/pull/5950) [generator] remove parens from break & continue. ([@sarupbanskota](https://github.com/sarupbanskota))
* `babel-helpers`, `babel-plugin-transform-es2015-classes`, `babel-plugin-transform-es2015-typeof-symbol`
  * [#5955](https://github.com/babel/babel/pull/5955) Optimize and remove state from typeof-symbol transform. ([@jridgewell](https://github.com/jridgewell))
* `babel-plugin-transform-react-inline-elements`
  * [#5958](https://github.com/babel/babel/pull/5958) Fix react-inline-elements bug. ([@jridgewell](https://github.com/jridgewell))

#### :house: Internal
* `babel-helper-transform-fixture-test-runner`
  * [#6002](https://github.com/babel/babel/pull/6002) Update chai to 4.x. ([@danez](https://github.com/danez))
* `babel-code-frame`
  * [#6003](https://github.com/babel/babel/pull/6003) Update chalk to 2.x. ([@danez](https://github.com/danez))
* `babel-register`
  * [#5999](https://github.com/babel/babel/pull/5999) Update find-cache-dir to 1.0. ([@danez](https://github.com/danez))
  * [#6000](https://github.com/babel/babel/pull/6000) Update default-require-extensions to 2.0. ([@danez](https://github.com/danez))
* `babel-types`
  * [#5997](https://github.com/babel/babel/pull/5997) Update to-fast-properties to 2.0. ([@danez](https://github.com/danez))
* `babel-cli`
  * [#5996](https://github.com/babel/babel/pull/5996) Update output-file-sync to 2.0. ([@danez](https://github.com/danez))
  * [#5975](https://github.com/babel/babel/pull/5975) Update v8flags to version 3.0.0. ([@Siilwyn](https://github.com/Siilwyn))
* `babel-generator`
  * [#5995](https://github.com/babel/babel/pull/5995) Update jsesc to the latest version. ([@danez](https://github.com/danez))
* `babel-traverse`
  * [#5993](https://github.com/babel/babel/pull/5993) Update globals to v10. ([@danez](https://github.com/danez))
* Other
  * [#5991](https://github.com/babel/babel/pull/5991) Fix clean to remove package-lock files. ([@danez](https://github.com/danez))
  * [#5959](https://github.com/babel/babel/pull/5959) Bump istanbul and nyc. ([@existentialism](https://github.com/existentialism))
* `babel-core`, `babel-generator`, `babel-helper-builder-react-jsx`, `babel-helper-function-name`, `babel-helper-replace-supers`, `babel-plugin-transform-es2015-block-scoping`, `babel-plugin-transform-es2015-classes`, `babel-plugin-transform-jscript`, `babel-plugin-transform-react-constant-elements`, `babel-plugin-transform-react-jsx`, `babel-template`, `babel-traverse`, `babel-types`
  * [#5963](https://github.com/babel/babel/pull/5963) Stop mutating nodes. ([@jridgewell](https://github.com/jridgewell))
* `babel-plugin-transform-es2015-modules-systemjs`
  * [#5954](https://github.com/babel/babel/pull/5954) Add several test cases for systemjs exports. ([@jridgewell](https://github.com/jridgewell))

## v7.0.0-alpha.16 (2017-07-25)

> Publish issue

## v7.0.0-alpha.15 (2017-07-11)

- [babel-plugin-transform-optional-chaining](https://github.com/babel/babel/tree/7.0/packages/babel-plugin-transform-optional-chaining)

> This is a Stage 0 TC39 Proposal (subject to change/removal and your feedback!)

```js
const obj = {
  foo: {
    bar: {
      baz: 42,
    },
  },
};

const baz = obj?.foo?.bar?.baz; // 42

const safe = obj?.qux?.baz; // undefined

// Optional chaining and normal chaining can be intermixed
obj?.foo.bar?.baz; // Only access `foo` if `obj` exists, and `baz` if
                   // `bar` exists
```

- [babel-plugin-transform-new-target](https://github.com/babel/babel/blob/7.0/packages/babel-plugin-transform-new-target/README.md)

```
function Foo() {
  console.log(new.target);
}

Foo(); // => undefined
new Foo(); // => Foo
```

- better `for of` optimization (if inferred array)

```js
// these kinds of scenarios will compile to a regular for loop
const x = [];
for (const y of x) {}
const arr = Object.entries(x);
for (const y of arr) {}
```
- loose mode for classes is a lot looser

Input

```js
class A {}
```

Output (loose)

```js
let A = function A() {}; // loose
```

Output (normal)

```js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var A = function A() {
  _classCallCheck(this, A);
};
```

#### :boom: Breaking Change
* `babel-*`
  * [#5824](https://github.com/babel/babel/pull/5824) Hardcode to double quotes, indent to 2 spaces. ([@hzoo](https://github.com/hzoo))

> This is just the babel-generator output, not a big deal.

#### :rocket: New Feature
* `babel-traverse`
  * [#5914](https://github.com/babel/babel/pull/5914) babel-traverse: Mark appropriate template literals as pure. ([@ashsearle](https://github.com/ashsearle))
  * [#5681](https://github.com/babel/babel/pull/5681) Add support for evaluating `String.raw` expressions. ([@josephfrazier](https://github.com/josephfrazier))
* `babel-plugin-transform-new-target`
  * [#5906](https://github.com/babel/babel/pull/5906) Add new.target transform. ([@jridgewell](https://github.com/jridgewell))
* `babel-core`, `babel-generator`, `babel-plugin-syntax-optional-chaining`, `babel-plugin-transform-optional-chaining`, `babel-preset-stage-1`, `babel-template`, `babel-traverse`, `babel-types`
  * [#5813](https://github.com/babel/babel/pull/5813) Optional Chaining Operator (Stage 1). ([@jridgewell](https://github.com/jridgewell))
* `babel-core`, `babel-plugin-transform-es2015-for-of`
  * [#4747](https://github.com/babel/babel/pull/4747) test for for-of optimization on arrays and add it for array type anno…. ([@hzoo](https://github.com/hzoo))
* `babel-helpers`, `babel-plugin-transform-es2015-classes`, `babel-plugin-transform-flow-comments`, `babel-plugin-transform-flow-strip-types`
  * [#4850](https://github.com/babel/babel/pull/4850) Remove ClassCallCheck, possibleConstructorReturn in loose mode. ([@hzoo](https://github.com/hzoo))
* `babel-generator`, `babel-plugin-transform-flow-strip-types`, `babel-types`
  * [#5589](https://github.com/babel/babel/pull/5589) Support declare export statements. ([@danez](https://github.com/danez))

#### :bug: Bug Fix
* `babel-helpers`, `babel-plugin-transform-class-properties`, `babel-plugin-transform-es2015-classes`
  * [#5885](https://github.com/babel/babel/pull/5885) Fix returning an object in a derived class constructor without super. ([@jridgewell](https://github.com/jridgewell))
* `babel-helper-remap-async-to-generator`, `babel-plugin-transform-async-to-generator`
  * [#5932](https://github.com/babel/babel/pull/5932) Fix async-to-generator ForAwait transform. ([@jridgewell](https://github.com/jridgewell))
* `babel-plugin-transform-es2015-modules-commonjs`
  * [#5891](https://github.com/babel/babel/pull/5891) Fix 5768 (to 7.0 branch). ([@joshwnj](https://github.com/joshwnj))
  * [#5886](https://github.com/babel/babel/pull/5886) 7.0 port: Fix commonjs exports with destructuring.. ([@yavorsky](https://github.com/yavorsky))
* `babel-plugin-transform-es2015-classes`
  * [#5801](https://github.com/babel/babel/pull/5801) Fix bug `super` ref check doesn’t honor spec evaluation order. ([@buunguyen](https://github.com/buunguyen))
  * [#5802](https://github.com/babel/babel/pull/5802) Remove check for super calls in arrow function. ([@existentialism](https://github.com/existentialism))
* `babel-cli`
  * [#5861](https://github.com/babel/babel/pull/5861) Pass SIGINT signals to the spawned child process. ([@bill-improbableio](https://github.com/bill-improbableio))
  * [#5867](https://github.com/babel/babel/pull/5867) fix issue as a result of refactor. ([@hzoo](https://github.com/hzoo))
* `babel-types`
  * [#5865](https://github.com/babel/babel/pull/5865) Fix type errors for destructuring assignments(#4227). ([@MarckK](https://github.com/MarckK))
* `babel-generator`
  * [#5830](https://github.com/babel/babel/pull/5830) Fix parens issues with exponentiation in generator. ([@existentialism](https://github.com/existentialism))
  * [#5820](https://github.com/babel/babel/pull/5820) Wrap an arrow function in parentheses if it the test of a conditional expression. ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-plugin-transform-numeric-separator`
  * [#5825](https://github.com/babel/babel/pull/5825) Fix numeric separator Number transform. ([@jridgewell](https://github.com/jridgewell))
* `babel-plugin-transform-es2015-template-literals`, `babel-preset-es2015`
  * [#5791](https://github.com/babel/babel/pull/5791) Spec compatibility for template literals.. ([@yavorsky](https://github.com/yavorsky))
* `babel-plugin-transform-es2015-parameters`
  * [#5810](https://github.com/babel/babel/pull/5810) Fix bug incorrect dereferencing rest argument. ([@buunguyen](https://github.com/buunguyen))
* `babel-plugin-syntax-optional-chaining`
  * [#5942](https://github.com/babel/babel/pull/5942) move to src. ([@hzoo](https://github.com/hzoo))

#### :nail_care: Polish
* `babel-plugin-transform-es2015-parameters`
  * [#5721](https://github.com/babel/babel/pull/5721) Fix optimisation of shadowed rest parameters. ([@Qantas94Heavy](https://github.com/Qantas94Heavy))
* `babel-helper-builder-react-jsx`, `babel-plugin-transform-es2015-spread`, `babel-traverse`
  * [#5837](https://github.com/babel/babel/pull/5837) Hoist several closures. ([@jridgewell](https://github.com/jridgewell))
* `babel-traverse`, `babel-types`
  * [#5826](https://github.com/babel/babel/pull/5826) Matches pattern cleanup. ([@jridgewell](https://github.com/jridgewell))
* `babel-types`
  * [#5821](https://github.com/babel/babel/pull/5821) babel-types: avoid recreating validator closures. ([@jridgewell](https://github.com/jridgewell))

#### :memo: Documentation
* `babel-types`
  * [#5941](https://github.com/babel/babel/pull/5941) Update babel-types docs [skip ci]. ([@existentialism](https://github.com/existentialism))
  * [#5940](https://github.com/babel/babel/pull/5940) Removed update operators from number unary operators. ([@maurobringolf](https://github.com/maurobringolf))
  * [#5855](https://github.com/babel/babel/pull/5855) Minor enhancements around spacing. ([@sarupbanskota](https://github.com/sarupbanskota))

#### :house: Internal
* `babel-polyfill`
  * [#5939](https://github.com/babel/babel/pull/5939) Change trailing comma option for polyfill scripts. ([@existentialism](https://github.com/existentialism))
* Other
  * [#5937](https://github.com/babel/babel/pull/5937) Remove codecov node package and use bash uploader. ([@danez](https://github.com/danez))
  * [#5918](https://github.com/babel/babel/pull/5918) Gitignore package-lock. ([@sarupbanskota](https://github.com/sarupbanskota))
* `babel-core`, `babel-generator`
  * [#5892](https://github.com/babel/babel/pull/5892) Fix some unneeded semis in test fixtures. ([@existentialism](https://github.com/existentialism))
* `babel-*`
  * [#5833](https://github.com/babel/babel/pull/5833) Remove whitespace generation. ([@danez](https://github.com/danez))
* `babel-core`, `babel-generator`, `babel-traverse`, `babel-types`
  * [#5889](https://github.com/babel/babel/pull/5889) Update babylon. ([@hzoo](https://github.com/hzoo))
* `babel-*`
  * [#5412](https://github.com/babel/babel/pull/5412) Use prettier. ([@existentialism](https://github.com/existentialism))
* `babel-generator`, `babel-traverse`
  * [#5866](https://github.com/babel/babel/pull/5866) update babel-eslint, try out numeric separators. ([@hzoo](https://github.com/hzoo))
* `babel-generator`
  * [#5845](https://github.com/babel/babel/pull/5845) Add tests for babel-generator. ([@1egoman](https://github.com/1egoman))
* `babel-cli`
  * [#5807](https://github.com/babel/babel/pull/5807) Include node 8.0 to travis config & update tests. ([@sarupbanskota](https://github.com/sarupbanskota))
* `babel-core`, `babel-helper-transform-fixture-test-runner`, `babel-traverse`
  * [#5815](https://github.com/babel/babel/pull/5815) Don't call deprecated code frame export. ([@SimenB](https://github.com/SimenB))
* `babel-core`, `babel-traverse`
  * [#5808](https://github.com/babel/babel/pull/5808) ⬆️ Alpha 12. ([@hzoo](https://github.com/hzoo))

## v7.0.0-alpha.14

* Skipped

## v7.0.0-alpha.13

* Skipped

## v7.0.0-alpha.12 (2017-05-31)

#### :eyeglasses: Spec Compliance
* `babel-core`, `babel-generator`, `babel-plugin-syntax-numeric-separator`, `babel-plugin-transform-numeric-separator`, `babel-preset-stage-1`, `babel-template`, `babel-traverse`, `babel-types`
  * [#5793](https://github.com/babel/babel/pull/5793) Support for NumericLiteralSeparator, Stage 1 feature. ([@rwaldron](https://github.com/rwaldron))

#### :rocket: New Feature
* `babel-code-frame`
  * [#5646](https://github.com/babel/babel/pull/5646) Add column range to babel-code-frame. ([@SimenB](https://github.com/SimenB))
* `babel-core`, `babel-generator`, `babel-plugin-syntax-numeric-separator`, `babel-plugin-transform-numeric-separator`, `babel-preset-stage-1`, `babel-template`, `babel-traverse`, `babel-types`
  * [#5793](https://github.com/babel/babel/pull/5793) Support for NumericLiteralSeparator, Stage 1 feature. ([@rwaldron](https://github.com/rwaldron))
* `babel-cli`
  * [#5785](https://github.com/babel/babel/pull/5785) Allow --inspect-brk option to be used with babel-node. ([@noinkling](https://github.com/noinkling))

#### :bug: Bug Fix
* `babel-plugin-transform-async-to-generator`, `babel-plugin-transform-es2015-destructuring`, `babel-plugin-transform-es2015-modules-commonjs`, `babel-plugin-transform-react-constant-elements`
  * [#5763](https://github.com/babel/babel/pull/5763) Fix incorrect destructuring in for loop `let` initialization. ([@buunguyen](https://github.com/buunguyen))
* `babel-core`, `babel-plugin-transform-es2015-block-scoping`
  * [#5775](https://github.com/babel/babel/pull/5775) Switch continue. ([@peey](https://github.com/peey))
* `babel-plugin-transform-flow-strip-types`
  * [#5782](https://github.com/babel/babel/pull/5782) Remove import declaration when stripping flowtypes if flow specifiers. ([@existentialism](https://github.com/existentialism))

#### :memo: Documentation
* `babel-plugin-check-es2015-constants`, `babel-plugin-syntax-async-functions`, `babel-plugin-syntax-async-generators`, `babel-plugin-syntax-class-properties`, `babel-plugin-syntax-decorators`, `babel-plugin-syntax-do-expressions`, `babel-plugin-syntax-dynamic-import`, `babel-plugin-syntax-exponentiation-operator`, `babel-plugin-syntax-export-extensions`, `babel-plugin-syntax-function-bind`, `babel-plugin-syntax-function-sent`, `babel-plugin-syntax-jsx`, `babel-plugin-syntax-object-rest-spread`, `babel-plugin-syntax-trailing-function-commas`, `babel-plugin-transform-async-functions`
  * [#5798](https://github.com/babel/babel/pull/5798) Make all packages/*/README.md descriptions consistent.. ([@rwaldron](https://github.com/rwaldron))
* Other
  * [#5790](https://github.com/babel/babel/pull/5790) Contributing troubleshooting. ([@peey](https://github.com/peey))

#### :house: Internal
* `babel-traverse`
  * [#5746](https://github.com/babel/babel/pull/5746) Remove duplicated getStatementParent and refactor requires to imports in tests. ([@maurobringolf](https://github.com/maurobringolf))
  * [#5779](https://github.com/babel/babel/pull/5779) Added individual test cases for possible errors with path.replaceWith. ([@maurobringolf](https://github.com/maurobringolf))

## v7.0.0-alpha.11 (2017-05-31)

* Publish issues

## v7.0.0-alpha.10 (2017-05-25)

* Publish issues, use alpha.12

Update Babylon: https://github.com/babel/babylon/releases/tag/v7.0.0-beta.9, https://github.com/babel/babylon/releases/tag/v7.0.0-beta.10

#### :eyeglasses: Spec Compliance
* `babel-generator`, `babel-plugin-transform-flow-strip-types`, `babel-types`
  * [#5525](https://github.com/babel/babel/pull/5525) Add support for object type spread. ([@conartist6](https://github.com/conartist6))

#### :boom: Breaking Change
* `babel-*`
  * [#5677](https://github.com/babel/babel/pull/5677) Kill the "shadow-functions.js" internal plugin in favor of an explicit helper. ([@loganfsmyth](https://github.com/loganfsmyth))

#### :rocket: New Feature
* `babel-*`
  * [#5761](https://github.com/babel/babel/pull/5761) Babylon 7 alpha.10. ([@hzoo](https://github.com/hzoo))
* `babel-plugin-transform-es2015-arrow-functions`, `babel-plugin-transform-es2015-function-name`
  * [#5620](https://github.com/babel/babel/pull/5620) Add function name to spec-transformed arrow functions. ([@Kovensky](https://github.com/Kovensky))
* `babel-plugin-transform-react-display-name`
  * [#5554](https://github.com/babel/babel/pull/5554) Updated transform-react-display-name for createReactClass addon. ([@bvaughn](https://github.com/bvaughn))
* `babel-register`
  * [#5669](https://github.com/babel/babel/pull/5669) Find cache dir. ([@pwmckenna](https://github.com/pwmckenna))

#### :bug: Bug Fix
* `babel-types`
  * [#5762](https://github.com/babel/babel/pull/5762) Fix ObjectProperty patterns. ([@citycide](https://github.com/citycide))
  * [#5753](https://github.com/babel/babel/pull/5753) Hoist toSequenceExpression's convert helper (#5693). ([@jridgewell](https://github.com/jridgewell))
  * [#5693](https://github.com/babel/babel/pull/5693) Hoist toSequenceExpression's convert helper. ([@jridgewell](https://github.com/jridgewell))
  * [#5722](https://github.com/babel/babel/pull/5722) Correct the validator for ArrayPattern. ([@Kovensky](https://github.com/Kovensky))
* `babel-plugin-transform-flow-comments`
  * [#5675](https://github.com/babel/babel/pull/5675) Flow comments import export. ([@lightsofapollo](https://github.com/lightsofapollo))
* `babel-plugin-transform-do-expressions`
  * [#5694](https://github.com/babel/babel/pull/5694) Transform do-expressions on exit. ([@jridgewell](https://github.com/jridgewell))
* `babel-plugin-transform-es2015-classes`, `babel-plugin-transform-es2015-destructuring`, `babel-traverse`
  * [#5749](https://github.com/babel/babel/pull/5749) Fix issue semi-colon gets inserted unnecessarily. ([@buunguyen](https://github.com/buunguyen))
* `babel-core`, `babel-helpers`, `babel-plugin-transform-async-to-generator`, `babel-plugin-transform-react-constant-elements`
  * [#5688](https://github.com/babel/babel/pull/5688) Fix for #4943 "Calling an async function with default parameter as function for arguments checking handled synchonous". ([@hulkish](https://github.com/hulkish))
* `babel-plugin-transform-object-rest-spread`
  * [#5685](https://github.com/babel/babel/pull/5685) Fix incorrect property ordering with obj rest spread on nested. ([@existentialism](https://github.com/existentialism))
  * [#5650](https://github.com/babel/babel/pull/5650) Fix object destructuring in param arrays. ([@CKarper](https://github.com/CKarper))

#### :nail_care: Polish
* `babel-plugin-transform-es2015-template-literals`
  * [#5748](https://github.com/babel/babel/pull/5748) Cleanup template-literals transform. ([@jridgewell](https://github.com/jridgewell))

#### :memo: Documentation
* `babel-plugin-transform-runtime`
  * [#5767](https://github.com/babel/babel/pull/5767) [Documentation change] regeneratorRuntime -> _regenerator2.default. ([@adityavohra7](https://github.com/adityavohra7))
* `babel-plugin-transform-es2015-arrow-functions`
  * [#5698](https://github.com/babel/babel/pull/5698) Add spec option example for transform-es2015-arrow-functions [skip ci]. ([@existentialism](https://github.com/existentialism))
* Other
  * [#5729](https://github.com/babel/babel/pull/5729) Lowercase "business model" in badge. ([@Daniel15](https://github.com/Daniel15))
* `babel-core`
  * [#5659](https://github.com/babel/babel/pull/5659) [Doc PR] naming fix in example. ([@aretecode](https://github.com/aretecode))

#### :house: Internal
* `babel-helper-fixtures`
  * [#5765](https://github.com/babel/babel/pull/5765) Support specifying minimum Node version a test requires. ([@buunguyen](https://github.com/buunguyen))
* `babel-helper-transform-fixture-test-runner`
  * [#5410](https://github.com/babel/babel/pull/5410) Add process to test sandbox. ([@existentialism](https://github.com/existentialism))
* `babel-preset-es2015`
  * [#5720](https://github.com/babel/babel/pull/5720) Add test cases for bad options in babel-preset-es2015. ([@maurobringolf](https://github.com/maurobringolf))
* `babel-register`
  * [#3670](https://github.com/babel/babel/pull/3670) Switch to pirates for babel-register.. ([@danez](https://github.com/danez))
* `babel-core`
  * [#5649](https://github.com/babel/babel/pull/5649) Remove merge helper and add more type declarations.. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-core`, `babel-plugin-transform-react-jsx`
  * [#5642](https://github.com/babel/babel/pull/5642) Typecheck much more of the config loading process. ([@loganfsmyth](https://github.com/loganfsmyth))
* Other
  * [#5639](https://github.com/babel/babel/pull/5639) update to alpha.9. ([@hzoo](https://github.com/hzoo))

## v7.0.0-alpha.9 (2017-04-18)

#### :bug: Bug Fix
* `babel-core`
  * [#5641](https://github.com/babel/babel/pull/5641) Fix a regression from adding negation support in #5625.. ([@loganfsmyth](https://github.com/loganfsmyth))

## v7.0.0-alpha.8 (2017-04-17)

#### :eyeglasses: Spec Compliance
* `babel-preset-stage-2`, `babel-preset-stage-3`
  * [#5610](https://github.com/babel/babel/pull/5610) Move syntax-dynamic-import to stage-3. ([@dkaoster](https://github.com/dkaoster))

#### :boom: Breaking Change
* `babel-core`
  * [#5547](https://github.com/babel/babel/pull/5547) [7.0] Require babel-(preset|plugin) or module: on plugins/presets. ([@loganfsmyth](https://github.com/loganfsmyth))

#### :rocket: New Feature
* `babel-core`
  * [#5608](https://github.com/babel/babel/pull/5608) Cache configs based on mtime and allow .babelrc.js functions. ([@loganfsmyth](https://github.com/loganfsmyth))
  * [#5625](https://github.com/babel/babel/pull/5625) Allow negation of ignore and only patterns.. ([@loganfsmyth](https://github.com/loganfsmyth))

#### :bug: Bug Fix
* `babel-plugin-transform-class-properties`, `babel-plugin-transform-es2015-classes`, `babel-plugin-transform-es2015-function-name`
  * [#5488](https://github.com/babel/babel/pull/5488) Ensure default exported classes keep entry in export table. ([@existentialism](https://github.com/existentialism))
* `babel-generator`
  * [#5562](https://github.com/babel/babel/pull/5562) Avoid creating a new line comment when a block comment is preceded by a forward slash. ([@tgecho](https://github.com/tgecho))
* `babel-plugin-transform-async-to-generator`
  * [#5536](https://github.com/babel/babel/pull/5536) Always use the native (or polyfilled) Promise in transform-async-to-generator. ([@Kovensky](https://github.com/Kovensky))

#### :nail_care: Polish
* `babel-core`, `babel-helpers`
  * [#5548](https://github.com/babel/babel/pull/5548) Remove unnecessary returns in asyncToGenerator helper. ([@zertosh](https://github.com/zertosh))

#### :memo: Documentation
* `babel-plugin-transform-es2015-arrow-functions`
  * [#5573](https://github.com/babel/babel/pull/5573) Improve example of babel-plugin-transform-es2015-arrow-functions. ([@exacs](https://github.com/exacs))

#### :house: Internal
* `babel-core`, `babel-messages`
  * [#5602](https://github.com/babel/babel/pull/5602) Refactor OptionManager to be a short class with a bunch of pure helper functions.. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-plugin-transform-regenerator`
  * [#5605](https://github.com/babel/babel/pull/5605) Test arrow function inside generator.. ([@yavorsky](https://github.com/yavorsky))
* Other
  * [#5619](https://github.com/babel/babel/pull/5619) Set an 80% coverage goal instead of 'auto'?. ([@loganfsmyth](https://github.com/loganfsmyth))

# v7.0.0-alpha.7 (2017-04-05)

- Updated babylon, fixed babel-register issue, and make babel-polyfill publish the core-js polyfills individually for babel-preset-env

#### :rocket: New Feature
* `babel-polyfill`
  * [#5584](https://github.com/babel/babel/pull/5584) add individual polyfill files. ([@hzoo](https://github.com/hzoo))

#### :bug: Bug Fix
* `babel-register`
  * [#5583](https://github.com/babel/babel/pull/5583) Change babel-register default ignore to cwd content. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-generator`, `babel-helper-builder-react-jsx`, `babel-plugin-transform-react-jsx`
  * [#5256](https://github.com/babel/babel/pull/5256) Use raw value of JSXText and JSXAttribute. ([@rattrayalex](https://github.com/rattrayalex))
* `babel-core`, `babel-generator`, `babel-template`, `babel-traverse`, `babel-types`
  * [#5585](https://github.com/babel/babel/pull/5585) Update babylon to latest beta. ([@danez](https://github.com/danez))

#### :memo: Documentation
* `babel-plugin-transform-es2015-modules-commonjs`
  * [#5588](https://github.com/babel/babel/pull/5588) Update transform-es2015-modules-commonjs doc. ([@xtuc](https://github.com/xtuc))
* `babel-plugin-transform-es2015-spread`
  * [#5580](https://github.com/babel/babel/pull/5580) Remove incorrect docs.. ([@loganfsmyth](https://github.com/loganfsmyth))

#### :house: Internal
* `babel-core`
  * [#5563](https://github.com/babel/babel/pull/5563) Separate config-file/plugin loading from config processing.. ([@loganfsmyth](https://github.com/loganfsmyth))
  * [#5571](https://github.com/babel/babel/pull/5571) Add tests to test the plugin/preset ordering.. ([@loganfsmyth](https://github.com/loganfsmyth))
* Other
  * [#5561](https://github.com/babel/babel/pull/5561) Ensure that incremental builds work with 'gulp build'.. ([@loganfsmyth](https://github.com/loganfsmyth))
  * [#5555](https://github.com/babel/babel/pull/5555) Use a standard .babelignore and babel-register in tests.. ([@loganfsmyth](https://github.com/loganfsmyth))
  * [#5551](https://github.com/babel/babel/pull/5551) use latest babel-core. ([@hzoo](https://github.com/hzoo))

## v7.0.0-alpha.6 (2017-03-27)

Fix issue with `babel-core` not picking up the .babelrc correctly

Also started Babel to compile itself with Babel 7! (We'll be working on making it compile the last good version from master soon so we don't need to wait until after publishing to find a regression)

#### :bug: Bug Fix
* `babel-core`
  * [#5550](https://github.com/babel/babel/pull/5550) Fix: config lookup logic in babel-core. ([@kaicataldo](https://github.com/kaicataldo))

#### :house: Internal
* Other
  * [#5543](https://github.com/babel/babel/pull/5543) 🐶 🍲. ([@hzoo](https://github.com/hzoo))
* `babel-*`
  * [#5545](https://github.com/babel/babel/pull/5545) Misc. ([@hzoo](https://github.com/hzoo))

## v7.0.0-alpha.5 (2017-03-24)

`babel-runtime` helpers weren't built correctly, and I found extra dep on `babel-runtime` in 2 packages.

> At the point of this publish, all other packages are at `v7.0.0-alpha.3`
> `babel-register` is at `v7.0.0-alpha.4`

#### :bug: Bug Fix
* `babel-runtime`
  * [#5539](https://github.com/babel/babel/pull/5539) Fix babel-runtime helpers gererator. ([@azrael25](https://github.com/azrael25))

#### :house: Internal
* `babel-plugin-transform-decorators`, `babel-plugin-transform-react-inline-elements`, `babel-runtime`
  * [#5540](https://github.com/babel/babel/pull/5540) keep one core-js helper file in git, remove babel-runtime from deps. ([@hzoo](https://github.com/hzoo))

## v7.0.0-alpha.4 (2017-03-23)

> At the point of this publish, all other packages are at `v7.0.0-alpha.3`

#### :bug: Bug Fix
* `babel-register`
  * [#5534](https://github.com/babel/babel/pull/5534) Ensure the ignore regex is consistent and initialized fully.. ([@loganfsmyth](https://github.com/loganfsmyth))

## v7.0.0-alpha.3 (2017-03-23)

#### :boom: Breaking Change
* `babel-traverse`
  * [#5494](https://github.com/babel/babel/pull/5494) Cleanup traverse cache APIs. ([@boopathi](https://github.com/boopathi))
* `babel-runtime`
  * [#5516](https://github.com/babel/babel/pull/5516) removed unused alias in babel-runtime. ([@JulianJason](https://github.com/JulianJason))
* `babel-core`, `babel-generator`, `babel-plugin-transform-es2015-template-literals`, `babel-template`, `babel-traverse`, `babel-types`
  * [#5523](https://github.com/babel/babel/pull/5523) Account for template literals revision. ([@hzoo](https://github.com/hzoo))
* `babel-core`, `babel-preset-react`, `babel-runtime`
  * [#5489](https://github.com/babel/babel/pull/5489) Misc fixes + Move babel-core config processing from transformation/file/options into top-level folder. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-cli`, `babel-core`, `babel-register`, `babel-types`
  * [#5487](https://github.com/babel/babel/pull/5487) Make only/ignore relative to cwd/config file and move only/ignore checking all to core.. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-core`, `babel-plugin-transform-es2015-modules-umd`, `babel-plugin-transform-react-display-name`, `babel-plugin-transform-react-jsx-source`
  * [#5467](https://github.com/babel/babel/pull/5467) Misc reorganizing and prep for ignore/only refactoring. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-core`
  * [#5466](https://github.com/babel/babel/pull/5466) Resolve programmatic/CLI arguments from cwd, not file being compiled.. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-cli`, `babel-core`
  * [#5463](https://github.com/babel/babel/pull/5463) More strictly parse configs and explicitly handle arguments in babel-cli. ([@loganfsmyth](https://github.com/loganfsmyth))

#### :rocket: New Feature
* `babel-plugin-transform-runtime`, `babel-runtime`
  * [#5442](https://github.com/babel/babel/pull/5442) Add useBuiltIns and useESModules options to transform-runtime. ([@Kovensky](https://github.com/Kovensky))
* `babel-core`, `babel-register`
  * [#5448](https://github.com/babel/babel/pull/5448) Export Babel's environment. ([@xtuc](https://github.com/xtuc))

#### :bug: Bug Fix
* `babel-plugin-transform-react-inline-elements`, `babel-traverse`
  * [#5504](https://github.com/babel/babel/pull/5504) Fix path.remove() leading & trailing comments sharing. ([@dmail](https://github.com/dmail))
* `babel-core`, `babel-runtime`
  * [#5528](https://github.com/babel/babel/pull/5528) Fix babel runtime helpers. ([@hzoo](https://github.com/hzoo))
* `babel-plugin-transform-react-constant-elements`, `babel-traverse`
  * [#5415](https://github.com/babel/babel/pull/5415) Fix PathHoister attaching to default parameters.. ([@STRML](https://github.com/STRML))
* `babel-plugin-transform-es2015-modules-amd`, `babel-plugin-transform-es2015-modules-commonjs`
  * [#5474](https://github.com/babel/babel/pull/5474) Properly preserve import ordering with AMD format.. ([@rwjblue](https://github.com/rwjblue))
* `babel-plugin-transform-do-expressions`, `babel-types`
  * [#5499](https://github.com/babel/babel/pull/5499) Fix throw error in do-expression. ([@xtuc](https://github.com/xtuc))
* `babel-plugin-transform-es2015-function-name`, `babel-types`
  * [#4954](https://github.com/babel/babel/pull/4954) Treat "await" as an invalid identifier. ([@Kovensky](https://github.com/Kovensky))

#### :nail_care: Polish
* `babel-register`
  * [#5411](https://github.com/babel/babel/pull/5411) Separate version env cache files. ([@pwmckenna](https://github.com/pwmckenna))

#### :memo: Documentation
* `babel-plugin-transform-runtime`
  * [#5481](https://github.com/babel/babel/pull/5481) Add useBuiltins and useESModules options to transform-runtime README. ([@existentialism](https://github.com/existentialism))
  * [#5401](https://github.com/babel/babel/pull/5401) Improve options documentation for `babel-plugin-transform-runtime`. ([@aaronang](https://github.com/aaronang))
* `babel-register`
  * [#5475](https://github.com/babel/babel/pull/5475) Update coffescript/register reference link address. ([@sergeybekrin](https://github.com/sergeybekrin))
* `babel-generator`
  * [#5477](https://github.com/babel/babel/pull/5477) Update babel-generator documentation. ([@xtuc](https://github.com/xtuc))
* `babel-plugin-transform-es2015-*`
  * [#5393](https://github.com/babel/babel/pull/5393) added examples for transforms. [skip ci]. ([@nitin42](https://github.com/nitin42))

#### :house: Internal
* `babel-cli`
  * [#5205](https://github.com/babel/babel/pull/5205) Ensure babel-cli tests compare generated output with out-files. ([@existentialism](https://github.com/existentialism))
* Other
  * [#5530](https://github.com/babel/babel/pull/5530) devEngines: Bump node to 4.x.. ([@yavorsky](https://github.com/yavorsky))
* `babel-plugin-transform-regenerator`
  * [#5341](https://github.com/babel/babel/pull/5341) Bump regenerator-transform version to 0.9.11.. ([@yavorsky](https://github.com/yavorsky))
* `babel-core`, `babel-plugin-transform-es2015-classes`, `babel-template`, `babel-traverse`
  * [#5522](https://github.com/babel/babel/pull/5522) Update babylon. ([@hzoo](https://github.com/hzoo))
* `babel-plugin-transform-es2015-classes`
  * [#5450](https://github.com/babel/babel/pull/5450) Changes the throw error for test in super-illegal-non-constructor-call. ([@arshabh](https://github.com/arshabh))
* `babel-helper-builder-react-jsx`
  * [#5484](https://github.com/babel/babel/pull/5484) Removes unused lodash dep from babel-helper-builder-react-jsx. ([@segphault](https://github.com/segphault))

## babel@7.0.0-alpha.2 (2017-03-08)

#### :rocket: New Feature
* `babel-core`, `babel-generator`, `babel-plugin-transform-object-rest-spread`
  * [#4892](https://github.com/babel/babel/pull/4892) Add support for .babelrc.js files. ([@kaicataldo](https://github.com/kaicataldo))
* `babel-plugin-transform-es2015-modules-amd`, `babel-plugin-transform-es2015-modules-commonjs`
  * [#5427](https://github.com/babel/babel/pull/5427) Backport `noInterop` flag for modules to 6.x.. ([@rwjblue](https://github.com/rwjblue))

#### :memo: Documentation
* `babel-plugin-transform-object-rest-spread`
  * [#5409](https://github.com/babel/babel/pull/5409) Fix transform-object-rest-spread README. ([@existentialism](https://github.com/existentialism))
  * [#5409](https://github.com/babel/babel/pull/5409) Fix transform-object-rest-spread README. ([@existentialism](https://github.com/existentialism))

#### :house: Internal
* `babel-core`, `babel-helper-transform-fixture-test-runner`
  * [#5416](https://github.com/babel/babel/pull/5416) Use 'resolve' from npm instead of private 'module' methods.. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-*`
  * [#5413](https://github.com/babel/babel/pull/5413) Run new lint rules. ([@existentialism](https://github.com/existentialism))

## v7.0.0-alpha.1 (2017-03-02)

#### :boom: Breaking Change
* `babel-core`, `babel-generator`, `babel-helper-remap-async-to-generator`, `babel-plugin-transform-async-to-generator`, `babel-template`, `babel-traverse`, `babel-types`
  * [#5399](https://github.com/babel/babel/pull/5399) Update babylon beta 4. ([@hzoo](https://github.com/hzoo))
* `babel-core`, `babel-generator`, `babel-plugin-transform-es2015-destructuring`, `babel-plugin-transform-es2015-duplicate-keys`, `babel-plugin-transform-object-rest-spread`, `babel-template`, `babel-traverse`, `babel-types`
  * [#5394](https://github.com/babel/babel/pull/5394) Update babylon beta 3. ([@hzoo](https://github.com/hzoo))
* `babel-core`
  * [#5376](https://github.com/babel/babel/pull/5376) [7.0] Remove the unneeded Pipeline class.. ([@loganfsmyth](https://github.com/loganfsmyth))
  * [#5132](https://github.com/babel/babel/pull/5132) [7.0] Deprecate babel-core/register.js. ([@chicoxyzzy](https://github.com/chicoxyzzy))
* `babel-core`, `babel-preset-es2015`, `babel-preset-es2016`, `babel-preset-es2017`, `babel-preset-flow`, `babel-preset-latest`, `babel-preset-react`, `babel-preset-stage-0`, `babel-preset-stage-1`, `babel-preset-stage-2`, `babel-preset-stage-3`
  * [#5128](https://github.com/babel/babel/pull/5128) [7.0] Remove bc code from preset handling and preset-es2015. ([@danez](https://github.com/danez))
* `babel-core`, `babel-generator`, `babel-helper-remap-async-to-generator`, `babel-plugin-transform-object-rest-spread`, `babel-template`, `babel-traverse`, `babel-types`
  * [#5317](https://github.com/babel/babel/pull/5317) Update to babylon@7.0.0-beta.0. ([@hzoo](https://github.com/hzoo))
* `babel-generator`, `babel-helper-remap-async-to-generator`, `babel-plugin-transform-object-rest-spread`, `babel-types`
  * [#5321](https://github.com/babel/babel/pull/5321) Change for-await to use new AST. ([@danez](https://github.com/danez))
* `babel-generator`
  * [#5320](https://github.com/babel/babel/pull/5320) Fix variance. ([@danez](https://github.com/danez))
  * [#5154](https://github.com/babel/babel/pull/5154) [7.0] Remove quotes option. ([@4rlekin](https://github.com/4rlekin))
  * [#5226](https://github.com/babel/babel/pull/5226) Bump `detect-indent` for `babel-generator`.. ([@wtgtybhertgeghgtwtg](https://github.com/wtgtybhertgeghgtwtg))
* `babel-plugin-transform-decorators`
  * [#5290](https://github.com/babel/babel/pull/5290) [7.0] Replacing current decorators. ([@alxpy](https://github.com/alxpy))
* `babel-generator`, `babel-types`
  * [#5199](https://github.com/babel/babel/pull/5199) Rename flow AST Type ExistentialTypeParam to ExistsTypeAnnotation. ([@koba04](https://github.com/koba04))
  * [#5229](https://github.com/babel/babel/pull/5229) Rename NumericLiteralTypeAnnotation to NumberLiteralTypeAnnotation. ([@phpnode](https://github.com/phpnode))
* `babel-*`
  * [#5218](https://github.com/babel/babel/pull/5218) Remove babel-runtime from packages' dependencies. ([@kaicataldo](https://github.com/kaicataldo))
* `babel-preset-stage-1`, `babel-preset-stage-2`
  * [#5225](https://github.com/babel/babel/pull/5225) [7.0] Add legacy-decorators to stage1. Closes [#5220](https://github.com/babel/babel/issues/5220). ([@yavorsky](https://github.com/yavorsky))
* `babel-register`
  * [#5189](https://github.com/babel/babel/pull/5189) Bump `home-or-tmp` for `babel-register`.. ([@wtgtybhertgeghgtwtg](https://github.com/wtgtybhertgeghgtwtg))
* `babel-runtime`
  * [#5187](https://github.com/babel/babel/pull/5187) [7.0] Remove old babel-runtime code. ([@vkbansal](https://github.com/vkbansal))
* `babel-generator`, `babel-plugin-syntax-class-constructor-call`, `babel-plugin-transform-class-constructor-call`, `babel-preset-stage-1`
  * [#5119](https://github.com/babel/babel/pull/5119) Remove "class-constructor-call" syntax and transform plugins. ([@ColinRTaylor](https://github.com/ColinRTaylor))
* `babel-preset-stage-3`
  * [#5126](https://github.com/babel/babel/pull/5126) [7.0] Remove stage 4 plugins from stage 3 preset. ([@varemenos](https://github.com/varemenos))
* Other
  * [#5131](https://github.com/babel/babel/pull/5131) [7.0] Remove add module exports internally. ([@chicoxyzzy](https://github.com/chicoxyzzy))
  * [#5025](https://github.com/babel/babel/pull/5025) Drop support for Node 0.12 :skull:. ([@siddharthkp](https://github.com/siddharthkp))
  * [#5041](https://github.com/babel/babel/pull/5041) Remove node 0.10 support (CI). ([@xtuc](https://github.com/xtuc))
* `babel-cli`, `babel-core`, `babel-plugin-transform-react-constant-elements`, `babel-traverse`
  * [#5124](https://github.com/babel/babel/pull/5124) Closes [#5108](https://github.com/babel/babel/issues/5108), browser.js and browser.js test removed. ([@Pr0x1m4](https://github.com/Pr0x1m4))
* `babel-plugin-transform-es2015-unicode-regex`
  * [#5028](https://github.com/babel/babel/pull/5028) Dependencies: Upgrade regexpu-core to ^4.0.2. ([@ysangkok](https://github.com/ysangkok))
* `babel-polyfill`
  * [#5122](https://github.com/babel/babel/pull/5122) Remove old code used for backwards compatibility. ([@Anderson-Vasques](https://github.com/Anderson-Vasques))
* `babel-generator`, `babel-plugin-transform-flow-comments`
  * [#5123](https://github.com/babel/babel/pull/5123) [7.0] Drop flowUsesCommas option from babel-generator. ([@ChauTNguyen](https://github.com/ChauTNguyen))
* `babel-plugin-transform-runtime`
  * [#5142](https://github.com/babel/babel/pull/5142) removed old cold from transform-runtime. ([@shubheksha](https://github.com/shubheksha))

#### :rocket: New Feature
* `babel-core`
  * [#5385](https://github.com/babel/babel/pull/5385) [7.0] Allow presets to be objects. ([@danez](https://github.com/danez))
  * [#4834](https://github.com/babel/babel/pull/4834) Pass `dirname` as extra metadata to preset constructor.. ([@izaakschroeder](https://github.com/izaakschroeder))
* `babel-preset-stage-2`
  * [#3683](https://github.com/babel/babel/pull/3683) babel-preset-stage-2: Add transform-unicode-property-regex. ([@mathiasbynens](https://github.com/mathiasbynens))

#### :bug: Bug Fix
* `babel-generator`
  * [#5339](https://github.com/babel/babel/pull/5339) Wrap some generated do expressions in parens. ([@zjmiller](https://github.com/zjmiller))
* `babel-generator`, `babel-plugin-transform-object-rest-spread`
  * [#5322](https://github.com/babel/babel/pull/5322) Fix for-await printing. ([@danez](https://github.com/danez))
* `babel-core`
  * [#5164](https://github.com/babel/babel/pull/5164) [7.0] Update babel-core browserify fixture. ([@chicoxyzzy](https://github.com/chicoxyzzy))

#### :memo: Documentation
* `babel-plugin-transform-runtime`
  * [#5400](https://github.com/babel/babel/pull/5400) [doc] Fix: comments in usage w/ options. ([@JPeer264](https://github.com/JPeer264))
* `babel-plugin-transform-async-to-module-method`, `babel-plugin-transform-es2015-computed-properties`, `babel-plugin-transform-es2015-for-of`, `babel-plugin-transform-es2015-modules-systemjs`, `babel-plugin-transform-es2015-spread`, `babel-plugin-transform-es2015-template-literals`, `babel-plugin-transform-object-rest-spread`, `babel-plugin-transform-react-jsx`, `babel-plugin-transform-runtime`, `babel-plugin-transform-strict-mode`, `babel-preset-latest`, `babel-register`, `babel-template`
  * [#5379](https://github.com/babel/babel/pull/5379) Lint code snippets in READMEs. ([@xtuc](https://github.com/xtuc))
* `babel-plugin-transform-es2015-shorthand-properties`
  * [#5334](https://github.com/babel/babel/pull/5334) Shorthand properties examples. ([@bhoule](https://github.com/bhoule))
* Other
  * [#5329](https://github.com/babel/babel/pull/5329) Update CONTRIBUTING.md with respect to coverage check [skip ci]. ([@zjmiller](https://github.com/zjmiller))

#### :house: Internal
* `babel-plugin-undeclared-variables-check`
  * [#5407](https://github.com/babel/babel/pull/5407) remove undeclared plugin [skip ci]. ([@hzoo](https://github.com/hzoo))
* `babel-plugin-transform-class-constructor-call`
  * [#5406](https://github.com/babel/babel/pull/5406) cleanup + update to lerna 38. ([@hzoo](https://github.com/hzoo))
* `babel-generator`
  * [#5338](https://github.com/babel/babel/pull/5338) Improve babel-generator's code coverage. ([@alxpy](https://github.com/alxpy))
  * [#5231](https://github.com/babel/babel/pull/5231) [7.0] List babylon plugins instead of * in babel-generator tests. ([@existentialism](https://github.com/existentialism))
* Other
  * [#5336](https://github.com/babel/babel/pull/5336) Enable codecov partial coverage. ([@danez](https://github.com/danez))
  * [#5350](https://github.com/babel/babel/pull/5350) Remove redundant NODE_ENV=test in Makefile. ([@aaronang](https://github.com/aaronang))
  * [#5312](https://github.com/babel/babel/pull/5312) [skip ci] Add devEngines to package.json. ([@yavorsky](https://github.com/yavorsky))
  * [#5165](https://github.com/babel/babel/pull/5165) Add Node 7 to CI. ([@chicoxyzzy](https://github.com/chicoxyzzy))
  * [#5254](https://github.com/babel/babel/pull/5254) test lerna@2-beta.37. ([@hzoo](https://github.com/hzoo))
  * [#5175](https://github.com/babel/babel/pull/5175) Added yarn.lock. ([@ChauTNguyen](https://github.com/ChauTNguyen))
* `babel-cli`
  * [#5342](https://github.com/babel/babel/pull/5342) Add test for passing arguments to babel-node (#5163). ([@outsideris](https://github.com/outsideris))
* `babel-core`, `babel-template`, `babel-traverse`
  * [#5356](https://github.com/babel/babel/pull/5356) Replace lodash/assign with Object.assign. ([@mdapper](https://github.com/mdapper))
* `babel-cli`, `babel-core`, `babel-generator`, `babel-plugin-transform-async-functions`, `babel-plugin-transform-async-generator-functions`, `babel-plugin-transform-async-to-generator`, `babel-plugin-transform-async-to-module-method`, `babel-plugin-transform-class-properties`, `babel-plugin-transform-decorators`, `babel-plugin-transform-do-expressions`, `babel-plugin-transform-es2015-modules-amd`, `babel-plugin-transform-es2015-modules-commonjs`, `babel-plugin-transform-es2015-modules-umd`, `babel-plugin-transform-exponentiation-operator`, `babel-plugin-transform-export-extensions`, `babel-plugin-transform-flow-comments`, `babel-plugin-transform-flow-strip-types`, `babel-plugin-transform-function-bind`, `babel-plugin-transform-object-rest-spread`, `babel-plugin-transform-regenerator`, `babel-plugin-transform-runtime`, `babel-traverse`
  * [#5351](https://github.com/babel/babel/pull/5351) Avoid usage of exports/module.exports/require().. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-preset-stage-1`
  * [#5319](https://github.com/babel/babel/pull/5319) Switch decorators-legacy to decorators in the Stage 1 Preset (#5318). ([@sashashakun](https://github.com/sashashakun))
* `babel-traverse`
  * [#5296](https://github.com/babel/babel/pull/5296) Add test for reference paths. ([@jasonLaster](https://github.com/jasonLaster))
* `babel`
  * [#5293](https://github.com/babel/babel/pull/5293) [7.0] remove standalone babel package. ([@hzoo](https://github.com/hzoo))
* `babel-helper-transform-fixture-test-runner`
  * [#5263](https://github.com/babel/babel/pull/5263) [7.0] Run Babel's unittests in a custom sandbox (take 2).. ([@loganfsmyth](https://github.com/loganfsmyth))
* `babel-register`
  * [#5189](https://github.com/babel/babel/pull/5189) Bump `home-or-tmp` for `babel-register`.. ([@wtgtybhertgeghgtwtg](https://github.com/wtgtybhertgeghgtwtg))
* `babel-cli`, `babel-core`
  * [#5179](https://github.com/babel/babel/pull/5179) [7.0] No path is absolute. ([@zertosh](https://github.com/zertosh))
* `babel-polyfill`
  * [#5122](https://github.com/babel/babel/pull/5122) Remove old code used for backwards compatibility. ([@Anderson-Vasques](https://github.com/Anderson-Vasques))
