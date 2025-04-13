import { expect, test } from "@playwright/test";

const URL = "https://www.clockfaceonline.co.uk/clocks/digital/";

test.describe("browser clock manipulation", () => {
  test("test page with fixed time", async ({ page }) => {
    const clockValueLocator = page.locator("#clock");
    const time = "10:20:00";
    const date = new Date(`2020-02-02 ${time}`);
    await page.clock.setFixedTime(date);

    await page.goto(URL);

    await expect(clockValueLocator).toHaveText(time);
  });
});
