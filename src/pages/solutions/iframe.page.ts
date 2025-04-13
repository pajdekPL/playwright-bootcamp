import { FrameLocator, Locator, Page } from "@playwright/test";

export class IframePage {
  page: Page;
  url = "https://qaplayground.dev/apps/iframe/";
  firstLevelIframeLocator: FrameLocator;
  secondLevelIframeLocator: FrameLocator;
  firstLevelIframe: FirstLevelIframe;
  secondLevelIframe: SecondLevelIframe;
  anchorElement: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstLevelIframeLocator = this.page.frameLocator("#frame1");
    this.secondLevelIframeLocator =
      this.firstLevelIframeLocator.frameLocator("#frame2");
    this.firstLevelIframe = new FirstLevelIframe(this.firstLevelIframeLocator);
    this.secondLevelIframe = new SecondLevelIframe(
      this.secondLevelIframeLocator,
    );
    this.anchorElement = this.secondLevelIframe.legend;
  }

  async waitForPage(): Promise<void> {
    await this.page.waitForURL(this.url, {
      waitUntil: "domcontentloaded",
    });
    await this.anchorElement.waitFor();
  }

  async goto(): Promise<void> {
    await this.page.goto(this.url);
    await this.waitForPage();
  }
}

class FirstLevelIframe {
  legend: Locator;
  constructor(protected frameLocator: FrameLocator) {
    this.legend = this.frameLocator.locator("legend");
  }
}

class SecondLevelIframe {
  legend: Locator;
  clickMeButton: Locator;
  buttonClickedMessage = this.frameLocator.locator("#msg");
  constructor(protected frameLocator: FrameLocator) {
    this.legend = this.frameLocator.locator("legend");
    this.clickMeButton = this.frameLocator.getByRole("link", {
      name: "Click Me",
    });
  }
}
