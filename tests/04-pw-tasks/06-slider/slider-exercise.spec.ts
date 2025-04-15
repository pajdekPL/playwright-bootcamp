import { test } from "@playwright/test";

test("Slider demo", async ({ page }) => {
  // TODO
  // 1. Pick slider locator
  // 2. Get slider width
  // TIP: use evaluate method to get the width of the slider
  //      locator.evaluate((el) => el.getBoundingClientRect().width);
  // 3. Hover over the slider
  // 4. Mouse down
  // 5. Hover over the slider with offset
  // 6. Mouse up
  // 7. Check the set value
  // 8. Abstract the slider logic into a function
  // 9. Test the slider with different values
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/drag-drop-range-sliders-demo",
  );
});
