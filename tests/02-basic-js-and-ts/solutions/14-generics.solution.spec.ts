import { expect, test } from "playwright/test";

// Exercise: TypeScript Generics
function createArray<T>(first: T, second: T): T[] {
  return [first, second];
}

test("Exercise: Create generic array", () => {
  expect(createArray(1, 2)).toEqual([1, 2]);
  expect(createArray("a", "b")).toEqual(["a", "b"]);
  expect(createArray(true, false)).toEqual([true, false]);
});

// Exercise: TypeScript Type Guards
type StringOrNumber = string | number;

function isString(value: StringOrNumber): value is string {
  return typeof value === "string";
}

test("Exercise: Type guard for string", () => {
  expect(isString("hello")).toBe(true);
  expect(isString(42)).toBe(false);
});
