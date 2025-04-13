import { expect, test } from "playwright/test";

// Exercise 1: Create a function that checks if a number is positive, negative, or zero
function checkNumber(num: number): string {
  // Your code here
  return "";
}

test("Exercise 1: Check if number is positive, negative, or zero", () => {
  expect(checkNumber(5)).toBe("positive");
  expect(checkNumber(-3)).toBe("negative");
  expect(checkNumber(0)).toBe("zero");
});

// Exercise 2: Create a function that finds the largest number in an array
function findLargestNumber(numbers: number[]): number {
  // Your code here
  return 0;
}

test("Exercise 2: Find the largest number in an array", () => {
  expect(findLargestNumber([1, 5, 3, 9, 2])).toBe(9);
  expect(findLargestNumber([-1, -5, -3])).toBe(-1);
  expect(findLargestNumber([1])).toBe(1);
});

// Exercise 3: Create a function that counts vowels in a string
function countVowels(str: string): number {
  // Your code here
  return 0;
}

test("Exercise 3: Count vowels in a string", () => {
  expect(countVowels("Hello World")).toBe(3);
  expect(countVowels("AEIOU")).toBe(5);
  expect(countVowels("rhythm")).toBe(0);
});

// Exercise 4: TypeScript Union Types
// Create a function that handles different types of input
type InputType = string | number | boolean;

function processInput(input: InputType): string {
  // Your code here
  // Return different messages based on the type of input
  // use typeof to check the type of the input
  // For string: "String: [input]"
  // For number: "Number: [input]"
  // For boolean: "Boolean: [input]"
  return "";
}

test("Exercise 4: Handle different input types", () => {
  expect(processInput("Hello")).toBe("String: Hello");
  expect(processInput(42)).toBe("Number: 42");
  expect(processInput(true)).toBe("Boolean: true");
});

// Exercise 5: TypeScript Interface
interface User {
  name: string;
  age: number;
  email?: string; // Optional property
}

function createUser(name: string, age: number, email?: string): User {
  // Your code here
  // Create and return a User object
  // If email is provided, include it in the object
  return { name: "", age: 0 };
}

test("Exercise 5: Create user with optional email", () => {
  const user1 = createUser("John", 30);
  expect(user1).toEqual({ name: "John", age: 30 });

  const user2 = createUser("Jane", 25, "jane@example.com");
  expect(user2).toEqual({ name: "Jane", age: 25, email: "jane@example.com" });
});
