// Object examples playground: https://tsplay.dev/mbb1Bm
// Object exercises playground: https://tsplay.dev/NB91kw
import { expect } from "@playwright/test";
import { test } from "playwright/test";

test("Object Creation and Manipulation Exercise", () => {
  const user = {
    name: "John Doe",
    age: 25,
    isActive: true,
  };

  // Testing initial object properties
  expect(user.name).toBe("John Doe");
  expect(user.age).toBe(25);
  expect(user.isActive).toBe(true);

  // Exercise 2: Modify object properties

  // your code here

  // Testing modified properties
  expect(user.name).toBe("Jane Doe");
  expect(user.age).toBe(26);
  expect(user.isActive).toBe(false);

  // Exercise 3: Add new properties to the object - roles (array of strings) and email (string)

  // your code here

  // Testing new properties
  expect(user.email).toBe("jane.doe@example.com");
  expect(user.roles).toEqual(["user", "admin"]);
  expect(user.roles.length).toBe(2);
  expect(user.roles.includes("admin")).toBe(true);
});
