import { test as base, Page } from "@playwright/test";

interface MyData {
  id: number;
  name: string;
  completed: boolean;
  someText?: string;
}

// Declare the types of your fixtures.
interface MyFixtures {
  myData: MyData;
  examplePage: Page;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
type Posts = Post[];
// Extend base test by providing "myData" and "examplePage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({
  myData: async ({ request }, use) => {
    // Set up the fixture.
    console.log("myData fixture is going to be set up");
    const response = await request.get(
      "https://jsonplaceholder.typicode.com/posts",
    ); // for example you can request some data from the API
    const data = (await response.json()) as Posts;

    const myData: MyData = {
      id: 1,
      name: "Adam",
      completed: false,
      someText: data[0].title,
    };

    await use(myData);

    console.log("myData fixture is going to clean up after the test");
  },

  examplePage: async ({ page }, use) => {
    await page.goto("https://example.com");

    await use(page);

    await page.close();
  },
});
