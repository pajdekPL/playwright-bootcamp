import { expect, test } from "playwright/test";

// Exercise 1: Create a function that checks if a number is positive, negative, or zero
function checkNumber(num: number): string {
  if (num > 0) {
    return "positive";
  } else if (num < 0) {
    return "negative";
  } else {
    return "zero";
  }
}

test("Exercise 1: Check if number is positive, negative, or zero", () => {
  expect(checkNumber(5)).toBe("positive");
  expect(checkNumber(-3)).toBe("negative");
  expect(checkNumber(0)).toBe("zero");
});

// Exercise 2: Create a function that finds the largest number in an array
function findLargestNumber(numbers: number[]): number {
  let largest = numbers[0];
  for (const num of numbers) {
    if (num > largest) {
      largest = num;
    }
  }
  return largest;
}

test("Exercise 2: Find the largest number in an array", () => {
  expect(findLargestNumber([1, 5, 3, 9, 2])).toBe(9);
  expect(findLargestNumber([-1, -5, -3])).toBe(-1);
  expect(findLargestNumber([1])).toBe(1);
});

// Exercise 3: Create a function that counts vowels in a string
function countVowels(str: string): number {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (const char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

test("Exercise 3: Count vowels in a string", () => {
  expect(countVowels("Hello World")).toBe(3);
  expect(countVowels("AEIOU")).toBe(5);
  expect(countVowels("rhythm")).toBe(0);
});

// Exercise 4: TypeScript Union Types
type InputType = string | number | boolean;

function processInput(input: InputType): string {
  if (typeof input === "string") {
    return `String: ${input}`;
  } else if (typeof input === "number") {
    return `Number: ${input}`;
  } else {
    return `Boolean: ${input}`;
  }
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
  const user: User = { name, age };
  if (email) {
    user.email = email;
  }
  return user;
}

test("Exercise 5: Create user with optional email", () => {
  const user1 = createUser("John", 30);
  expect(user1).toEqual({ name: "John", age: 30 });

  const user2 = createUser("Jane", 25, "jane@example.com");
  expect(user2).toEqual({ name: "Jane", age: 25, email: "jane@example.com" });
});
