import { test } from "@playwright/test";

test("File upload", async ({ page }) => {
  // TODO We are learning how to use async to let us upload a file
  // 1. Create a file path to the file use
  // TIP: "import path from "path" -> filePath = path.join("src/data/", fileName);
  // 2. Create a locator for the file input button
  // 3. Go to the file upload page
  // 4. Create a promise for event "filechooser"
  // TIP: could you print the fileChooserEvent to see what it is?
  // 5. Click on the file input button
  // 6. Wait for the filechooser event
  // TIP: page.waitForEvent("filechooser")
  // 7. Set the file path to the fileChooser
  // 8. Verify the file is properly uploaded

  await page.goto("https://qaplayground.dev/apps/upload/");
});
