import { expect, test } from "playwright/test";

const URL = "https://qaplayground.dev/apps/fetch/";
const API_URL = "https://jsonplaceholder.typicode.com/posts";

const mockData = [
  {
    userId: 1,
    id: 1,
    title: "Mój super tytuł",
    body: "i jakaś tam treść",
  },
  {
    userId: 1,
    id: 2,
    title: "Inny tytuł",
    body: "iinna treść",
  },
];

test.describe("API mocking", () => {
  test("should mock the API response", async ({ page }) => {
    await page.route(API_URL, async (route) => {
      await route.fulfill({
        contentType: "application/json",
        body: JSON.stringify(mockData),
        status: 200,
      });
    });

    await page.goto(URL);

    await expect(page.getByText(mockData[0].title)).toBeVisible();
  });
});
