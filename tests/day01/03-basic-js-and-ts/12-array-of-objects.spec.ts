import { expect, test } from "playwright/test";

interface Value {
  size: string;
  price: number;
}

test("get the banana size L price", () => {
  const items = [
    {
      name: "apple",
      value: '[{"size": "L", "price": 20}, {"size": "M", "price": 10}]',
    },
    {
      name: "banana",
      value: '[{"size": "L", "price": 15}, {"size": "M", "price": 5}]',
    },
    {
      name: "orange",
      value: '[{"size": "L", "price": 25}, {"size": "M", "price": 15}]',
    },
  ];

  const bananaData = items.find((item) => item.name === "banana");
  if (bananaData === undefined) {
    throw new Error("banana not found");
  }
  const bananaValue = bananaData.value;
  const bananaPrices = JSON.parse(bananaValue) as Value[];

  const bananaSizeLPrice = bananaPrices.find((price) => price.size === "L");

  expect(bananaSizeLPrice?.price).toBe(15);
});

test("get the apple size M price", () => {
  const items = [
    {
      name: "apple",
      value: '[{"size": "L", "price": 20}, {"size": "M", "price": 10}]',
    },
    {
      name: "banana",
      value: '[{"size": "L", "price": 15}, {"size": "M", "price": 5}]',
    },
    {
      name: "orange",
      value: '[{"size": "L", "price": 25}, {"size": "M", "price": 15}]',
    },
  ];

  // your code goes here
});

// Exercise 2
// Are you able to abstract the logic to a function?

test("test your abstraction", () => {
  const items = [
    {
      name: "apple",
      value: '[{"size": "L", "price": 20}, {"size": "M", "price": 10}]',
    },
    {
      name: "banana",
      value: '[{"size": "L", "price": 15}, {"size": "M", "price": 5}]',
    },
    {
      name: "orange",
      value: '[{"size": "L", "price": 25}, {"size": "M", "price": 15}]',
    },
  ];

  const price = getPriceByNameAndSize(items, "banana", "L");

  expect(price).toBe(15);
});

function getPriceByNameAndSize(
  items: { name: string; value: string }[],
  name: string,
  size: string,
): number {
  // your code goes here

  return 15;
}
