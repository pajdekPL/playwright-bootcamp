// boolean: a boolean value, either true or false
// string: a sequence of characters
// number: represents both integer and floating-point (fractional) numbers
// undefined: a variable that has not been assigned a value
import { expect, test } from "@playwright/test";

test("Filter example", () => {
  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const evenNumbers = numbers.filter((number) => {
    return number % 2 === 0;
  });

  console.log(evenNumbers);
  expect(evenNumbers).toEqual([2, 4, 6, 8]);
});

test("Filter exercise ages", () => {
  const ages: number[] = [
    1, 20, 50, 30, 18, 20, 15, 21, 22, 23, 15, 12, 15, 14, 12, 11,
  ];

  const adults: number[] = []; // your filter goes here

  expect(adults).toEqual([20, 50, 30, 18, 20, 21, 22, 23]);
});

test("Filter exercise with object", () => {
  interface Product {
    name: string;
    price: number;
  }

  const products: Product[] = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 45 },
    { name: "Monitor", price: 150 },
    { name: "USB Cable", price: 10 },
  ];

  // get products that are more expensive than 50
  const expensiveProducts: Product[] = []; // your products.filter  goes here
  //tip use the product.price to filter the products

  expect(expensiveProducts).toEqual([
    { name: "Laptop", price: 1000 },
    { name: "Monitor", price: 150 },
  ]);
});

// test("Filter examples", async () => {
//   const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//   const evenNumbers = numbers.filter((number) => {
//     return number % 2 === 0;
//   });

//   console.log(evenNumbers);
// });
