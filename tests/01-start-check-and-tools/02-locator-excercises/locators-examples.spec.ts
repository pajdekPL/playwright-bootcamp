import { expect, test } from "@playwright/test";

test.describe("Login Page Tests", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the login page before each test
    await page.goto("https://the-internet.herokuapp.com/login");
  });

  test("Successful login with valid credentials", async ({ page }) => {
    const expectedLoggedText = "You logged into a secure area!";
    // Fill in the login form with valid credentials
    await page.getByLabel("Username").fill("tomsmith");
    await page.getByLabel("Password").fill("SuperSecretPassword!");

    // Click the login button
    await page.getByRole("button", { name: "Login" }).click();

    // Verify successful login
    await expect(page.getByText("Welcome to the Secure Area")).toBeVisible();

    const flashMessageCSSLocator = page.locator(".flash.success");
    const flashMessageIDLocator = page.locator("#flash");

    await expect(flashMessageCSSLocator).toContainText(expectedLoggedText);
    await expect(flashMessageIDLocator).toContainText(expectedLoggedText);
    // and the other way to check the same thing
    await expect(page.getByText(expectedLoggedText)).toBeVisible();
  });

  test("Failed login with invalid username", async ({ page }) => {
    // Fill in the login form with invalid username
    await page.getByLabel("Username").fill("wronguser");
    await page.getByLabel("Password").fill("SuperSecretPassword!");

    // Click the login button
    await page.getByRole("button", { name: "Login" }).click();

    // Verify error message
    await expect(page.getByText("Your username is invalid!")).toBeVisible();
  });

  test("Failed login with invalid password", async ({ page }) => {
    // Fill in the login form with invalid password
    await page.getByLabel("Username").fill("tomsmith");
    await page.getByLabel("Password").fill("wrongpassword");

    // Click the login button
    await page.getByRole("button", { name: "Login" }).click();

    // Verify error message
    await expect(page.getByText("Your password is invalid!")).toBeVisible();
  });

  test("Failed login with empty fields", async ({ page }) => {
    // Click the login button without filling in any fields
    await page.getByRole("button", { name: "Login" }).click();

    // Verify error message
    await expect(page.getByText("Your username is invalid!")).toBeVisible();
  });

  test("Login form elements are visible and enabled", async ({ page }) => {
    // Verify username field
    const usernameField = page.getByLabel("Username");
    await expect(usernameField).toBeVisible();
    await expect(usernameField).toBeEnabled();

    // Verify password field
    const passwordField = page.getByLabel("Password");
    await expect(passwordField).toBeVisible();
    await expect(passwordField).toBeEnabled();

    // Verify login button
    const loginButton = page.getByRole("button", { name: "Login" });
    await expect(loginButton).toBeVisible();
    await expect(loginButton).toBeEnabled();
  });

  test("Password field is masked", async ({ page }) => {
    // Fill in the password field
    await page.getByLabel("Password").fill("SuperSecretPassword!");

    // Verify that the password is masked
    const passwordField = page.getByLabel("Password");
    await expect(passwordField).toHaveAttribute("type", "password");
  });
});
