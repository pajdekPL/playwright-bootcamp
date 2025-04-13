import { expect, test } from "@playwright/test";
import fs from "fs";
import path from "path";

test("File Download", async ({ page }) => {
  const buttonLocator = page.locator("#file");
  const filesDir = "src/data/";

  await page.goto("https://qaplayground.dev/apps/download/");
  const downloadEvent = page.waitForEvent("download");
  await buttonLocator.click();
  const downloadedFile = await downloadEvent;
  const suggestedPath = downloadedFile.suggestedFilename();
  const downloadPath = `${filesDir}${suggestedPath}`;
  await downloadedFile.saveAs(path.join(downloadPath));

  expect(fs.existsSync(downloadPath)).toBeTruthy();
});
