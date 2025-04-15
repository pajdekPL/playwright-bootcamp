import { expect, test } from "playwright/test";

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
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  }
  if (number % 3 === 0) {
    return "Fizz";
  }
  if (number % 5 === 0) {
    return "Buzz";
  }
  return number;
}
