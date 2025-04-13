import { expect, test } from "@playwright/test";

test("Slider demo", async ({ page }) => {
  const sliderLocator = page.locator("#slider1").getByRole("slider");
  const sliderValueLocator = page.locator("#range");

  await page.goto(
    "https://www.lambdatest.com/selenium-playground/drag-drop-range-sliders-demo",
  );

  const sliderOffsetWidth = await sliderLocator.evaluate(
    (el) => el.getBoundingClientRect().width,
  );

  await sliderLocator.hover({ force: true, position: { x: 0, y: 0 } });
  await page.mouse.down();
  await sliderLocator.hover({
    force: true,
    position: { x: sliderOffsetWidth / 2, y: 0 },
  });
  await page.mouse.up();
  await expect(sliderValueLocator).toHaveText("51");
  console.log("Page URL: ", page.url());
});
