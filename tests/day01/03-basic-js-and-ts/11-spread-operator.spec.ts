// 🔹 Spread Operator
// Used to unpack properties of an object (or elements of an array) into another object (or array).
import { expect, test } from "@playwright/test";

interface Settings {
  theme: string;
  notifications: boolean;
  volume: number;
  language: string;
}

const userSettings: Settings = {
  theme: "dark",
  notifications: true,
  volume: 75,
  language: "en",
};

test("Spread operator with objects example", () => {
  const updatedSettings = { ...userSettings, notifications: false, volume: 50 };

  expect(updatedSettings).toEqual({
    theme: "dark",
    notifications: false,
    volume: 50,
  });
});

// exercise 1
test("Spread operator with objects exercise", () => {
  // Create a new object with the same properties as userSettings but change the theme to "white" and language to "pl"
  const updatedSettings: Settings = {}; // your code goes here

  expect(updatedSettings).toEqual({
    theme: "white",
    notifications: true,
    volume: 75,
    language: "pl",
  });
});
