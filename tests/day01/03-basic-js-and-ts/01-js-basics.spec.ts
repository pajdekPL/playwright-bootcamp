// boolean: a boolean value, either true or false
// string: a sequence of characters
// number: represents both integer and floating-point (fractional) numbers
// undefined: a variable that has not been assigned a value
import { expect, test } from "@playwright/test";

test("Basic types", () => {
  const someNumber = 42;
  const someBoolean = true;
  const someString = "Hello, World!";
  const someUndefined = undefined;

  console.log("Some number is a " + typeof someNumber);
  console.log("Some boolean is a " + typeof someBoolean);
  console.log("Some string is a " + typeof someString);
  console.log("And nothing" + typeof someUndefined);
});

// 1) exercise basic types
test("Basic types exercise", () => {
  const numberOne = 42;
  const numberTwo = 55;
  const sumOfMyNumbers = 0;

  expect.soft(sumOfMyNumbers).toEqual(97);

  // some pitfalls ^^
  const stringNumber1 = "42";
  const stringNumber2 = "55";
  const sumOfMyStringNumbers = 0;

  expect.soft(sumOfMyStringNumbers).toEqual(97);
});

test("String literal templates", () => {
  const someNumber = 42;
  const someString = "Hello, World!";
  const someOption = "option";

  const someStringLiteral = `My number ${someNumber} and my string ${someString} with my ${someOption}`;
  console.log(someStringLiteral);
});

// 2) exercise string literal
test("create string literal with given variables", () => {
  const someNumber = 55;
  const someString = "Hello, World!";
  const someBoolean = true;

  const yourStringLiteral = `your code goes here`;
  expect(yourStringLiteral).toEqual(
    `My number 55 and my string Hello, World! with my true boolean`,
  );
});

test("JS lists, for loops and if statements", () => {
  // Declare an array of numbers
  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // Iterate over the array - classic for loop
  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }

  // Iterate over the array - for of loop
  for (const number of numbers) {
    console.log(number);
  }

  // Print even numbers
  console.log("Even numbers:");
  for (const number of numbers) {
    if (number % 2 === 0) {
      console.log(number);
    }
  }

  // Create a new array with even numbers
  const evenNumbers: number[] = [];
  for (const number of numbers) {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    }
  }
});

test("JS objects", () => {
  const someNumber = 42;
  const someString = "Hello, World!";
  const someOption = "option";

  const someObject = {
    keyNumber: someNumber,
    keyString: someString,
    keyOption: someOption,
  };

  console.log(someObject.keyNumber);
  console.log(someObject.keyString);
  console.log(someObject.keyOption);

  console.log(someObject);
});
