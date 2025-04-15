import { faker } from "@faker-js/faker";
import { test } from "@playwright/test";

test("Let's try faker", () => {
  const email = faker.internet.email();
  console.log(email);

  const name = faker.person.firstName();
  console.log(name);

  // let's try to generate more random data, phone number, lastName, address, country etc.
  // https://fakerjs.dev/api/
});
