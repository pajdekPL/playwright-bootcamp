import { expect } from "@playwright/test";
import { test } from "playwright/test";

test("basic object assertions", () => {
  const user = { name: "John", age: 30 };

  expect(user).toHaveProperty("name");
  expect(user.name).toBe("John");
  expect(user.age).toBeGreaterThan(18);
});

test("array assertions", () => {
  const fruits = ["apple", "banana", "orange"];

  expect(fruits).toContain("banana");
  expect(fruits).toHaveLength(3);
});

test("object equality", () => {
  const obj1 = { a: 1, b: { c: 3 } };
  const obj2 = { a: 1, b: { c: 3 } };
  const obj3 = { a: 1, b: { c: 4 } };

  expect(obj1).toEqual(obj2);
  expect(obj1).not.toEqual(obj3);
  expect(obj1).not.toBe(obj2); // toBe checks reference equality
});

test("string assertions", () => {
  const message = "Hello Playwright!";
  expect(message).toContain("Playwright");
  expect(message).toMatch(/^Hello/); // regex match
  expect(message.length).toBeGreaterThan(10);
});

test("truthy/falsy assertions", () => {
  expect(true).toBeTruthy();
  expect(false).toBeFalsy();
  expect(null).toBeFalsy();
  expect(undefined).toBeFalsy();
  expect("").toBeFalsy();
  expect(0).toBeFalsy();
  expect("hello").toBeTruthy();
  expect(1).toBeTruthy();
  expect({}).toBeTruthy();
});

test("deep equality object reference vs value", () => {
  const user = { user: { name: "John", age: 30 } };
  const expectedUser = { name: "John", age: 30 };
  expect.soft(user.user).toBe(expectedUser);
  expect(user.user).toEqual(expectedUser);
});
