import { expect, test } from "playwright/test";

// if / else if / else - statements playground: https://tsplay.dev/WKDb8w
// Functions playground:                        https://tsplay.dev/WJdBRN

test("Create your own function", () => {
  // TODO
  // Write a function that takes a number as an argument.
  // If the number is divisible by 3, return "Fizz".
  // If the number is divisible by 5, return "Buzz".
  // If the number is divisible by 3 and 5, return "FizzBuzz".
  // Otherwise, return the number.

  expect(fizzBuzz(3)).toBe("Fizz");
  expect(fizzBuzz(5)).toBe("Buzz");
  expect(fizzBuzz(15)).toBe("FizzBuzz");
  expect(fizzBuzz(7)).toBe(7);
});

// Write your function here you can use any type of function
function fizzBuzz(number: number): string | number {
  return "";
}
