import { test } from "@fixtures/example-fixture";

test("example fixture data", ({ myData }) => {
  console.log("myData", myData);
});

test("example fixture page", ({ examplePage }) => {
  console.log("examplePage", examplePage.url());
});
