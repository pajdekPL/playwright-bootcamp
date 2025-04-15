// TODO ^^
import { test } from "@playwright/test";

test("Fill the form using our factory and check it's values", async ({
  page,
}) => {
  await page.goto("https://demoqa.com/automation-practice-form");
});
