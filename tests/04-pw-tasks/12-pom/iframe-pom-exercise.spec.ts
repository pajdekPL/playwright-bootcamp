import { test } from "@playwright/test";

// Exercise: Create a page object for the iframe page
// 1. Create a class called ChangingIframePage
// 2. Add a constructor that accepts a Page object
// 3. Add a url property with the value "https://qaplayground.dev/apps/changing-iframe/"
// 4. Add a method called waitForPage that waits for the page to load( some anchor element to be visible)
// 5. Add a method called goto that navigates to the url and then calls waitForPage

// 6. Create a class called Iframe that accepts a FrameLocator object
// 7. Add a legendLocator property that locates the legend element
// 8. Add a msgDivLocator property that locates the div element with class "flex-center"
// 9. Add a constructor that accepts a FrameLocator object
// 10. Add a field iframe to the ChangingIframePage class that is an instance of the Iframe class

// Test should check the following:
// - The first iframe loads properly and contains the expected text and legend
// - The second iframe loads properly and contains the expected text and legend

// 11. For the first iteration, you can use page.waitForTimeout(x) to wait until the iframe is changed -> .toBeVisible({timeout: 10000})
// 12. Then try to use the except with custom timeout for the iframe to be changed
// 13. Finally try to use page.clock.install() and page.lock.pauseAt(Date.now()) and page.lock.runFor(10000) to simulate the time passing and accelerate the test
// 14. Move you page object to the src/pages/solutions/changing-iframe.page.ts file and import it here

test(
  "The main page loads nested frames properly and interaction is possible",
  { tag: "@IFRAME" },
  async ({ page }) => {
    // you code goes here
  },
);

class ChangingIframePage {
  url: string;
  iframe: Iframe;
  // you code goes here

  constructor() {
    this.url = "https://qaplayground.dev/apps/changing-iframe/";
    // you code goes here
  }

  // you code goes here
}

class Iframe {
  // you code goes here
}
