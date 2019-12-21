var obj = {
  @foo
  @bar
  foo: "bar",

  @foo
  @bar
  foo() {},

  @foo
  get foo() {},

  @bar
  set bar(foo) {}
};

class Foo {
  @foo
  @bar
  foo() {}

  @foo
  @bar
  foo() {}

  @foo
  get foo() {}

  @bar
  set bar(foo) {}
}

@foo
export default class Foo2 {
  bar() {
    class Baz {}
  }
}

@foo
export class Foo3 {
  bar() {
    class Baz {}
  }
}
