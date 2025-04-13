import { expect, test } from "playwright/test";

test("Map double numbers", () => {
  const numbers: number[] = [1, 2, 3, 4, 5];

  const doubledNumbers = numbers.map((number) => number * 2);

  console.log(doubledNumbers);
  expect(doubledNumbers).toEqual([2, 4, 6, 8, 10]);
});

test("Map to uppercase", () => {
  const words: string[] = ["one", "two", "three", "four", "five"];

  const upperCaseWord: string[] = []; // your code goes here

  expect(upperCaseWord).toEqual(["ONE", "TWO", "THREE", "FOUR", "FIVE"]);
});

test("Map convert prices from PLN to EUR", () => {
  // assume 1 EUR = 4.5 PLN
  const pricesPLN: number[] = [1, 2, 10, 20, 50, 100, 55, 300];

  const pricesEUR: number[] = []; // your code goes here
  // TIP Use number.toFixed to round to 2 decimal places
  // and parseFloat to and convert to number -> parseFloat(price.toFixed(2))

  expect(pricesEUR).toEqual([
    0.22, 0.44, 2.22, 4.44, 11.11, 22.22, 12.22, 66.67,
  ]);
});
