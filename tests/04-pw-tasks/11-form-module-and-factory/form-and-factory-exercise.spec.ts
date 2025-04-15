import { test } from "@playwright/test";

// import {factoryPracticeForm} from "@/utils/my-first-factory";

test("Fill the form using our factory and check it's values", async ({
  page,
}) => {
  // create locators for all required fields and submit button

  // create factory:
  // let's create my-first-factory.ts file in the src/utils
  // it should export a function factoryPracticeForm that create a new object with the required properties from this form
  // https://demoqa.com/automation-practice-form
  // use faker to generate random data
  // prepare interface of the returned object
  // fill the form using the factory, you can create another function that will take the created object and fill the form

  // submit the form

  // check that filed values are visible in the pop-up

  await page.goto("https://demoqa.com/automation-practice-form");
});
