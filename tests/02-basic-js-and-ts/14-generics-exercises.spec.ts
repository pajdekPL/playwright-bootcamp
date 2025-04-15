import { expect, test } from "playwright/test";

// Generics playground: https://tsplay.dev/mA9LQm

// Exercise: TypeScript Generics
function createArray<T>(first: T, second: T): T[] {
  // Your code here
  // Create and return an array containing the two elements
  return [];
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
