import { test } from "@playwright/test";

test.describe("Locators Exercises", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      "https://www.lambdatest.com/selenium-playground/simple-form-demo",
    );
  });

  // Exercise 1: Fill in the single input field and verify the message
  test("Exercise 1: Single Input Field", async ({ page }) => {
    // TODO: Fill in the input field with text "Hello Playwright!"
    // TODO: Click the "Get Checked Value" button
    // TODO: Verify that the message "Your Message: Hello Playwright!" is displayed
  });

  // Exercise 2: Fill in two input fields and verify the sum
  test("Exercise 2: Two Input Fields", async ({ page }) => {
    // TODO: Fill in the first input field with number 5
    // TODO: Fill in the second input field with number 3
    // TODO: Click the "Get Sum" button
    // TODO: Verify that the result shows "Result: 8"
  });

  // Exercise 3: Practice different locator strategies
  test("Exercise 3: Multiple Locator Strategies", async ({ page }) => {
    // TODO: Find the "Single Input Field" heading using text locator
    // TODO: Find the first input field using CSS selector
    // TODO: Find the "Get Checked Value" button using role locator
    // TODO: Find the message display area using ID locator
    // You will experience strict mode violation for the last one ^^
  });

  // Exercise 4: Handle dynamic content
  test("Exercise 4: Dynamic Content", async ({ page }) => {
    // TODO: Fill in the single input field with text "Dynamic Test"
    // TODO: Click the "Get Checked Value" button
    // TODO: Wait for the message to appear and verify it contains "Dynamic Test"
  });

  // Exercise 5: Multiple assertions
  test("Exercise 5: Multiple Assertions", async ({ page }) => {
    // TODO: Verify that both input sections are visible
    // TODO: Verify that both "Get" buttons are enabled
    // TODO: Verify that the page title contains "Simple Form Demo"
  });
});
