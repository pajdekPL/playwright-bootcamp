import { test } from "@playwright/test";

const URL = "https://www.clockfaceonline.co.uk/clocks/digital/";

test.describe("browser clock manipulation", () => {
  // let's explore playwright clock module and how we can we use it

  test("test page with fixed time", async ({ page }) => {
    // JS date example: new Date(2025, 0, 1, 12, 20, 0)
    // Playwright clock documentation: https://playwright.dev/docs/api/class-clock
    // await page.clock.setFixedTime(Date.now());
    // try opening the page and see if the clock is moving
    // try to manipulate the clock
    // set fixed time
    // add expect to check if the clock has the set value

    await page.goto(URL);
  });
});
