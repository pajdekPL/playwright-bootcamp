import { expect, test } from "@playwright/test";

test.describe("Test structure", () => {
  test("test structure", async ({ page }) => {
    // Arrange - prepare the test data and environment
    const url = "https://example.com";
    const headerLocator = page.getByRole("heading", { name: "Example Domain" });

    // Act
    await page.goto(url);

    // Assert
    await expect(headerLocator).toBeVisible();
  });

  test("drag and drop with test steps", async ({ page }) => {
    // Arrange
    const url =
      "https://www.lambdatest.com/selenium-playground/drag-and-drop-demo";
    const firstElementText = "Draggable 1";
    const elementToDrag = page.getByText("Draggable 1");
    const dropZone = page.locator("#mydropzone");
    const droppedItems = page.locator("#droppedlist");

    // Act
    await page.goto(url);

    // step step can contain its own arrange, act and assert
    await test.step("drag and drop the first element and check it is visible in the drop zone", async () => {
      // Act
      await elementToDrag.dragTo(dropZone);

      // Assert
      await expect(droppedItems.getByText(firstElementText)).toBeVisible();
    });

    // exercise write your own test step to drag and drop the second element
    // you code goes here
  });
});
