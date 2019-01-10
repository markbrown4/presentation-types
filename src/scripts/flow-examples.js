// @flow

// Primitive types
let a: boolean = true;
let b: string = "yep";
let c: number = 1.2; // NaN, Infinity
let d: null = null;
let e: void = undefined;

// a = "test";
// d.test();

// Maybe types
function maybe(value: ?number) {}

maybe(1);
maybe(null);
maybe(undefined);
maybe();

// Optional properties
type OptionalProperties = {
  name: string,
  description?: string
};

function optionalProperties(properties: OptionalProperties) {}

optionalProperties({ name: "test" });
optionalProperties({ name: "test", description: "test" });

// Optional function parameters
function optionalParams(param?: string) {}

optionalParams("test");
optionalParams();

// Enums
function getColor(name: "success" | "warning" | "danger") {
  // if (name === "asdf") {
  // }
}

// Union types
function mixedType(value: string | number) {
  return "" + value;
}

mixedType("Yep");
mixedType(1);

// Generic types
function identity<T>(value: T): T {
  return value;
}

// identity({}).hasOwnProperty("a");
// identity(1.333).toFixed(1);

// mixed type
function mixed(value: mixed) {
  if (typeof value == "string") {
    return value.substr(1, 2);
  } else if (typeof value == "number") {
    return value.toFixed(1);
  }
}

mixed("Yep");
mixed(1.234);

// any type (not recommended)
function getNestedProperty(obj: any) {
  return obj.not.here;
}

getNestedProperty({});

// const checks
const constant: number = 2;
// constant = 3;

// return values
function returnValue(): string {
  return "yep";
}

returnValue().substr(1, 1);

// Function types
function functionTypes(fn: string => string) {
  const result = fn("Yep");
}

functionTypes(value => value.substr(1));

// rest params
function rest(...args: number[]) {}
rest(1, 2, 3);

// sealed object
const sealed = {
  foo: 1
};
// sealed.bar = true;

const unsealed = {};
unsealed.bar = true;

// Objects as Maps
const errors: { [fieldName: string]: string } = {};
errors["email"] = "That doesn't look right";

// Array types
const arr1: string[] = ["A", "B", "C"];
const arr2: mixed[] = [1, true, "three"];

// Tuples
const tuple1: [number] = [1];
const tuple2: [number, boolean] = [1, true];
const tuple3: [number, boolean, string] = [1, true, "three"];

// Intersection types
type A = { foo: number };
type B = { bar: boolean };
type Both = A & B;

let intersection: Both = {
  foo: 1,
  bar: true
};

// typeof as type
let obj1 = { foo: 1, bar: true, baz: "three" };
let obj2: typeof obj1 = { foo: 42, bar: false, baz: "hello" };

let arr3 = [1, 2, 3];
let arr4: typeof arr3 = [3, 2, 1];

// Modules
// export default class Foo {}
// export type MyObject = {};
// export interface MyInterface {}

// import type Foo, { MyObject, MyInterface } from "./exports";

// class properties
class ClassProperties {
  prop: number;

  method() {
    this.prop = 1;
  }
}

// class Generics
class GenericClass<A, B, C> {
  constructor(arg1: A, arg2: B, arg3: C) {}
}
const generic: GenericClass<number, boolean, string> = new GenericClass(
  1,
  true,
  "three"
);

// Interfaces
interface Serializable {
  serialize(): number;
}
class Doo implements Serializable {
  serialize() {
    return 1;
  }
}
class Bar implements Serializable {
  serialize() {
    return 2;
  }
}

// read / write access
interface ReadWriteType {
  +readOnly: number;
  -writeOnly: number;
}

// function method1(value: ReadWriteType) {
//   value.readOnly;
//   value.readOnly = 3.14; // Error
// }
//
// function method2(value: ReadWriteType) {
//   value.writeOnly; // Error
//   value.writeOnly = 3.14;
// }
