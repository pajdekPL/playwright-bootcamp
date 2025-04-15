import { test } from "@playwright/test";

test("File Download", async ({ page }) => {
  // TODO We are learning how check if a file is downloaded
  // 1. Create a const that contains locator for the file download button
  // 2. Create a const that contains the directory where the file will be saved
  // 3. Go to the file download page
  // 4. Create a promise for event "download"
  // 5. Click on the file download button
  // 6. Wait for the download event
  // 7. Save the file
  // 8. Verify the file is downloaded
  // TIP: fs.existsSync(downloadPath)  (remember to import fs  and path)
  // import fs from "fs"; import path from "path";
  await page.goto("https://qaplayground.dev/apps/download/");
});
