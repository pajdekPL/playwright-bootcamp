import { test } from "playwright/test";

// exercise 1
// let's try to mock the API response
// and return the mock data instead of the real API response
// presentation and network tab in chrome dev tools
// lest's open the url in chrome and open network tab

const URL = "https://qaplayground.dev/apps/fetch/";

// refresh the page and copy POST request URL

const API_URL = "request url to mock";

// check response data and create our mock data
const mockData = "our mock data";

test.describe("API mocking", () => {
  test("should mock the API response", async ({ page }) => {
    // let's try to mock the API response with our mock data and check if it works
    // https://playwright.dev/docs/api/class-route#route-fulfill

    // your route fulfill code here

    await page.goto(URL);

    // your expect code here
  });

  // exercise 2
  // let's mock the API response and create a visual regression test
  test("visual regression with mocked data", async ({ page }) => {
    // your route fulfill code here

    await page.goto(URL);

    // your expect and snapshot checking code here
  });
});
