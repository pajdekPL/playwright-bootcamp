import { expect, test } from "@playwright/test";

// exercise 1
// let's run the test and check the screenshot was created
// run it again and it should pass
const URL = "https://qaplayground.dev/";
test(
  "Enter main page, check top bar and navigate to mini apps section",
  { tag: ["@SMOKE", "@SNAP"] },
  async ({ page }) => {
    await page.goto(URL);

    await expect(page).toHaveScreenshot({ maxDiffPixelRatio: 0.05 });
  },
);

// exercise 3
// pick some element on the page and write another test that will check visual regression of this element
// await expect(locator).toHaveScreenshot(screenshotName);
test("Checking the single locator visual regression", async ({ page }) => {
  await page.goto(URL);
  // your code here
});

// some settings to discuss playwright.config.ts regarding screenshots
// snapshot dir in playwright.config.ts
// expect: {
//     toHaveScreenshot: {
//       maxDiffPixelRatio: 0.001,
//     },
//   },

// exercise 3
// let's run tests twice, for the first time the new screenshot will be created
// and for the second time the test will compare the new screenshot with the old one and should pass
// then uncomment the lines that remove the gradient-text class from the span
// and run the test again, it should fail
// run it again using tag from console and we will check the trace file
// npx playwright test --grep "@your-tag" --trace on
// next we can regenerate the screenshot if we accept it
// npx playwright test --grep "@your-tag" --update-snapshots

test(
  "should match specific element screenshot",
  { tag: "@failing-screenshot" },
  async ({ page }) => {
    const screenshot = "header.png";
    const header = page.locator('h1:has-text("QA Playground")');

    await page.goto(URL);

    // Remove the gradient-text class from the span
    // await page.evaluate(() => {
    //   const element = document.querySelector("span.gradient-text");
    //   if (element) {
    //     element.classList.remove("gradient-text");
    //   }
    // });

    await expect(header).toBeVisible();
    await expect(header).toHaveScreenshot(screenshot);
  },
);
