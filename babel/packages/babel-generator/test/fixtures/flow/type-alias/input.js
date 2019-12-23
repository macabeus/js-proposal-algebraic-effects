type FBID = number;
type Foo<T> = Bar<T>;
type Maybe<T> = _Maybe<T, *>;
export type Foo2 = number;

type union =
 | {type: "A"}
 | {type: "B"}
;

type overloads =
  & ((x: string) => number)
  & ((x: number) => string)
;

type func = string => string;

type D = X.Y<Z>;
