/* eslint-disable prefer-const */
import { expect, test } from "playwright/test";

// Exercise: Passing by reference vs by value
// Simple types (number, string, boolean, null, undefined, symbol, bigint) are passed by value
// Complex types (objects, arrays, functions) are passed by reference

test("Passing by reference", () => {
  function updateValue(x: number): void {
    x = x + 1;
    console.log("Inside function:", x);
  }

  let a = 10;
  updateValue(a);
  console.log("Outside function:", a);
});

test("Passing by value", () => {
  function updatePerson(person: { name: string }): void {
    person.name = "Ewa";
    console.log("Inside function:", person.name);
  }

  let user = { name: "Adam" };
  updatePerson(user);
  console.log("Outside function:", user.name);
});

// exercises

test("Exercise double", () => {
  function double(n: number): void {
    n = n * 2;
  }

  let score = 10;
  double(score);

  expect(score).toBe(20);
});

test("Exercise object", () => {
  function rename(user: { name: string }): void {
    user.name = "Bartek";
  }

  let person = { name: "Adam" };
  rename(person);

  expect(person.name).toBe("Bartek");
});

test("Exercise object creating new object in function", () => {
  function reset(user: { name: string }): void {
    user = { name: "Nowy" };
  }

  let member = { name: "Kasia" };
  reset(member);

  expect(member.name).toBe("Nowy");
});
