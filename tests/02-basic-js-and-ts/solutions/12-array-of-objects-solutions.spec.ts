import { expect, test } from "@playwright/test";

interface Value {
  size: string;
  price: number;
}

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
  const itemData = items.find((item) => item.name === name);
  if (itemData === undefined) {
    throw new Error(`${name} not found`);
  }
  const itemValue = itemData.value;
  const itemPrices = JSON.parse(itemValue) as Value[];

  const itemSizePrice = itemPrices.find((price) => price.size === size);
  if (itemSizePrice === undefined) {
    throw new Error(`${size} not found`);
  }
  return itemSizePrice.price;
}
