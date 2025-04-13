import { expect, test } from "playwright/test";

interface User {
  name: string;
  age: number;
  isActive: boolean;
}
const users: User[] = [
  { name: "Alice", age: 28, isActive: true },
  { name: "Bob", age: 17, isActive: false },
  { name: "Charlie", age: 35, isActive: true },
  { name: "Diana", age: 15, isActive: true },
  { name: "Edward", age: 22, isActive: false },
];

test("Filter users to get active users", () => {
  const activeUsers = users.filter((user) => user.isActive);

  expect(activeUsers).toEqual([
    { name: "Alice", age: 28, isActive: true },
    { name: "Charlie", age: 35, isActive: true },
    { name: "Diana", age: 15, isActive: true },
  ]);
});

test("Filter users to get adult users", () => {
  const adultUsers = users.filter((user) => user.age >= 18);

  expect(adultUsers).toEqual([
    { name: "Alice", age: 28, isActive: true },
    { name: "Charlie", age: 35, isActive: true },
    { name: "Edward", age: 22, isActive: false },
  ]);
});
