import { test } from "@playwright/test";

test("Locator basics", async ({ page }) => {
  await page.goto("https://ultimateqa.com/filling-out-forms/");

  // let's use playwright pick locator to pick a locator for the left side name
  // let's fill it with some value
  // let's pick the message field and fill it with some value
  // let's pick the submit button and click on it
  // let's verify that the form has been submitted successfully

  // now do the same for the right side form but use different type of locators
  // if you want to solve a captcha without hardcoding results you can base on:
  // https://tsplay.dev/Wy02Km
});
