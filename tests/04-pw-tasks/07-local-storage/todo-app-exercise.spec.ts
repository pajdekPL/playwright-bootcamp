import { test } from "@playwright/test";

const URL = "https://demo.playwright.dev/todomvc/#/";

interface LocalStorageTODOItem {
  id: string;
  title: string;
  completed: boolean;
}

test.describe("todo list", () => {
  // let's explore local storage and how we can interact with it

  // Task 1
  test("our very first test", async ({ page }) => {
    await page.goto(URL);
    // try to record a test
    // add one element and check if it is visible
    // explore local storage and how it changes while adding a new element
  });

  // Task 2
  test("use getByTestId", async ({ page }) => {
    await page.goto("https://demo.playwright.dev/todomvc/#/");
    // is there any data-testid attribute that we can use?
    // how to press the "enter" key?
  });

  // Task 3
  test("add to local storage and check items are visible after reload", async ({
    page,
  }) => {
    await page.goto("https://demo.playwright.dev/todomvc/#/");
    // how the interface LocalStorageTODOItem can help us?
    // how to fill it with data based on local storage content
    const localStorageItems: LocalStorageTODOItem[] = [];
    // set the local storage with our items
    // page.evaluate() can help us with that
    // https://playwright.dev/docs/evaluating
    // to set localStorage on the page we cane use localStorage.setItem("key", "some value")
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage#examples
    // JSON.stringify() can help us with converting our array to string

    await page.reload();

    // check if the added items are visible
    // can we create setLocalStorage function to abstract the logic?
  });

  // Task 4
  test("add items by UI and check if their are visible in local storage", async ({
    page,
  }) => {
    await page.goto("https://demo.playwright.dev/todomvc/#/");
    // add items by UI
    // get the items from local storage
    // page.evaluate() can help us with that
    // to get localStorage on the page we cane use localStorage.getItem("key")
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage#examples

    // check if the added items are in local storage, check length of the returned array
    // can we create getTodosFromLocalStorage function to abstract the logic?
    // can we create setLocalStorage function to abstract the logic?
  });
});
