import { expect, test } from "@playwright/test";

test.describe("Locators Exercises - Solutions", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      "https://www.lambdatest.com/selenium-playground/simple-form-demo",
    );
  });

  // Solution 1: Single Input Field
  test("Solution 1: Single Input Field", async ({ page }) => {
    // Fill in the input field with text
    // / / is used as a regex to find the placeholder
    await page.getByPlaceholder(/enter your Message/).fill("Hello Playwright!");

    // Click the "Get Checked Value" button
    await page.getByRole("button", { name: "Get Checked Value" }).click();

    // Verify the message
    await expect(
      page.getByText("Your Message: Hello Playwright!"),
    ).toBeVisible();
  });

  // Solution 2: Two Input Fields
  test("Solution 2: Two Input Fields", async ({ page }) => {
    // Fill in both input fields
    await page.getByPlaceholder("Enter first value").fill("5");
    await page.getByPlaceholder("Enter second value").fill("3");

    // Click the "Get Sum" button
    await page.getByRole("button", { name: "Get Sum" }).click();

    // Verify the sum
    await expect(page.getByText("Result: 8")).toBeVisible();
  });

  // Solution 3: Multiple Locator Strategies
  test("Solution 3: Multiple Locator Strategies", async ({ page }) => {
    // Find heading using text locator
    const heading = page.getByText("Single Input Field");
    await expect(heading).toBeVisible();

    // Find input field using CSS selector
    const inputField = page.locator("input#user-message");
    await expect(inputField).toBeVisible();

    // Find button using role locator
    const button = page.getByRole("button", { name: "Get Checked Value" });
    await expect(button).toBeEnabled();

    // Find message area using ID locator
    const messageArea = page.locator("#user-message");
    await expect(messageArea).toBeVisible();
  });

  // Solution 4: Dynamic Content
  test("Solution 4: Dynamic Content", async ({ page }) => {
    // Fill in the input field
    await page.getByPlaceholder(/enter your Message/).fill("Dynamic Test");

    // Click the button
    await page.getByRole("button", { name: "Get Checked Value" }).click();

    // Wait for and verify the message
    const message = page.getByText("Your Message: Dynamic Test");
    await expect(message).toBeVisible();
  });

  // Solution 5: Multiple Assertions
  test("Solution 5: Multiple Assertions", async ({ page }) => {
    // Verify input sections are visible
    await expect(page.getByText("Single Input Field")).toBeVisible();
    await expect(page.getByText("Two Input Fields")).toBeVisible();

    // Verify buttons are enabled
    await expect(
      page.getByRole("button", { name: "Get Checked Value" }),
    ).toBeEnabled();
    await expect(page.getByRole("button", { name: "Get Sum" })).toBeEnabled();

    // Verify page title
    await expect(page).toHaveTitle(/Selenium Grid Online/);
  });
});
