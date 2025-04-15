import { expect, FrameLocator, Locator, Page, test } from "@playwright/test";

test(
  "The main page loads nested frames properly and interaction is possible",
  { tag: "@IFRAME" },
  async ({ page }) => {
    await page.clock.install();
    await page.clock.pauseAt(Date.now());
    const firstIframeExpectText = "Registration closes in";
    const firstIframeLegend = "First Iframe";
    const secondIframeExpectText = "This is the end of the journey";
    const secondIframeLegend = "Second Iframe";
    const changingIframePage = new ChangingIframePage(page);

    await changingIframePage.goto();

    await test.step("check the first iframe", async () => {
      await expect(changingIframePage.iframe.legendLocator).toContainText(
        firstIframeLegend,
      );
      await expect(changingIframePage.iframe.msgDivLocator).toContainText(
        firstIframeExpectText,
      );
    });

    await test.step("move clock forward to change iframe", async () => {
      await page.clock.runFor(10000);
    });

    await test.step("check the second iframe", async () => {
      await expect(changingIframePage.iframe.legendLocator).toContainText(
        secondIframeLegend,
      );
      await expect(changingIframePage.iframe.msgDivLocator).toContainText(
        secondIframeExpectText,
      );
    });
  },
);

class ChangingIframePage {
  url: string;
  page: Page;
  anchorElement: Locator;
  iframeLocator: FrameLocator;
  iframe: Iframe;

  constructor(page: Page) {
    this.page = page;
    this.url = "https://qaplayground.dev/apps/changing-iframe/";
    this.anchorElement = this.page.getByRole("link", { name: "QA Playground" });
    this.iframeLocator = this.page.frameLocator("#frame1");
    this.iframe = new Iframe(this.iframeLocator);
  }

  async goto(): Promise<void> {
    await this.page.goto(this.url);
    await this.waitForPage();
  }
  async waitForPage(): Promise<void> {
    await this.page.waitForURL(this.url, {
      waitUntil: "domcontentloaded",
    });
    await this.anchorElement.waitFor();
  }
}

class Iframe {
  iframeLocator: FrameLocator;
  legendLocator: Locator;
  msgDivLocator: Locator;
  constructor(iframeLocator: FrameLocator) {
    this.iframeLocator = iframeLocator;
    this.legendLocator = this.iframeLocator.locator("legend");
    this.msgDivLocator = this.iframeLocator.locator(".flex-center");
  }
}
