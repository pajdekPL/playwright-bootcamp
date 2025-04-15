import { IframePage } from "@pages/solutions/iframe.page";
import { expect, test } from "@playwright/test";

test(
  "The main page loads nested frames properly and interaction is possible",
  { tag: "@IFRAME" },
  async ({ page }) => {
    const firstLevelIframeExpectedLegendText = "First Level Iframe";
    const secondLevelIframeExpectedLegendText = "Second Level Iframe";
    const iframePage = new IframePage(page);

    await iframePage.goto();

    await test.step("check the first iframe", async () => {
      await expect(iframePage.firstLevelIframe.legend).toContainText(
        firstLevelIframeExpectedLegendText,
      );
      await expect(iframePage.secondLevelIframe.legend).toContainText(
        secondLevelIframeExpectedLegendText,
      );
    });

    await test.step("check the second iframe", async () => {
      await expect(
        iframePage.secondLevelIframe.buttonClickedMessage,
      ).toBeHidden();

      await iframePage.secondLevelIframe.clickMeButton.click();

      await expect(
        iframePage.secondLevelIframe.buttonClickedMessage,
      ).toBeVisible();
    });
  },
);
