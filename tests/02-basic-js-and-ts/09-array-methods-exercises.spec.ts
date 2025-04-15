import { expect, test } from "playwright/test";

// Exercise 1: Filter - Get all positive numbers
function getPositiveNumbers(numbers: number[]): number[] {
  // Your code here
  // Use filter to return only positive numbers
  return [];
}

test("Exercise 1: Get positive numbers", () => {
  expect(getPositiveNumbers([-1, 2, -3, 4, -5, 6])).toEqual([2, 4, 6]);
  expect(getPositiveNumbers([-1, -2, -3])).toEqual([]);
  expect(getPositiveNumbers([1, 2, 3])).toEqual([1, 2, 3]);
});

// Exercise 2: Filter - Get all words starting with 'a'
function getWordsStartingWithA(words: string[]): string[] {
  // Your code here
  // Use filter to return only words that start with 'a' (case insensitive)
  return [];
}

test("Exercise 2: Get words starting with 'a'", () => {
  expect(
    getWordsStartingWithA(["apple", "banana", "apricot", "orange"]),
  ).toEqual(["apple", "apricot"]);
  expect(getWordsStartingWithA(["banana", "orange", "pear"])).toEqual([]);
  expect(getWordsStartingWithA(["Apple", "apricot"])).toEqual([
    "Apple",
    "apricot",
  ]);
});

// Exercise 3: Map - Add exclamation mark to each word
function addExclamationMark(words: string[]): string[] {
  // Your code here
  // Use map to add '!' to each word
  return [];
}

test("Exercise 3: Add exclamation mark to words", () => {
  expect(addExclamationMark(["hello", "world"])).toEqual(["hello!", "world!"]);
  expect(addExclamationMark(["test"])).toEqual(["test!"]);
  expect(addExclamationMark([])).toEqual([]);
});

// Exercise 4: Map - Convert numbers to strings
function numbersToStrings(numbers: number[]): string[] {
  // Your code here
  // Use map to convert each number to a string
  return [];
}

test("Exercise 4: Convert numbers to strings", () => {
  expect(numbersToStrings([1, 2, 3])).toEqual(["1", "2", "3"]);
  expect(numbersToStrings([0, -1, 5])).toEqual(["0", "-1", "5"]);
  expect(numbersToStrings([])).toEqual([]);
});

// Exercise 5: Filter and Map - Get uppercase active items
interface Item {
  name: string;
  isActive: boolean;
}

function getUppercaseActiveItems(items: Item[]): string[] {
  // Your code here
  // First filter active items, then map to get uppercase names
  return [];
}

test("Exercise 5: Get uppercase active items", () => {
  const items: Item[] = [
    { name: "item1", isActive: true },
    { name: "item2", isActive: false },
    { name: "item3", isActive: true },
  ];

  expect(getUppercaseActiveItems(items)).toEqual(["ITEM1", "ITEM3"]);
  expect(getUppercaseActiveItems([])).toEqual([]);
});
