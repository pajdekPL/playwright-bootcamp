import { expect, test } from "@playwright/test";
import path from "path";

test("File upload", async ({ page }) => {
  // TODO We are learning how to use promises to let us upload a file
  // 1. Create a file path to the file use
  // TIP: "import path from "path" -> filePath = path.join("src/data/", fileName);
  // 2. Create a locator for the file input button
  // 3. Go to the file upload page
  // 4. Create a promise for event "filechooser"
  // 5. Click on the file input button
  // 6. Wait for the filechooser event
  // TIP: page.waitForEvent("filechooser")
  // 7. Set the file path to the fileChooser
  // Verify the file is properly uploaded

  const fileName = "random-pig.jpg";
  const fileInputButton = page.locator(".btn-green-outline");
  await page.goto("https://qaplayground.dev/apps/upload/");
  const fileChooserEvent = page.waitForEvent("filechooser");
  console.log(fileChooserEvent);
  await fileInputButton.click();
  const fileChooser = await fileChooserEvent;
  const filePath = path.join("src/data/", fileName);
  await fileChooser.setFiles(filePath);

  await expect(page.getByText("random-pig.jpg")).toBeVisible();
});
