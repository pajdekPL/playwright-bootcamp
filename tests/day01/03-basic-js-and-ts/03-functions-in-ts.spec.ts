import { test } from "playwright/test";

test("Functions examples", () => {
  console.log(greetClassic("World"));
  console.log(greetAnonymous("World"));
  console.log(greetArrow("World"));

  console.log(greetWithOptional("World"));
  console.log(greetWithOptional("World", 42));

  console.log(welcome());
  console.log(welcome("John"));

  const returnOfFunctionThatNotReturn = logMessage("Hello, World!");
  console.log(returnOfFunctionThatNotReturn);
});

// claccic function
function greetClassic(name: string): string {
  return `Hello, ${name}!`;
}

// anonymous function
const greetAnonymous = function (name: string): string {
  return `Hello, ${name}!`;
};

// arrow function
const greetArrow = (name: string): string => `Hello, ${name}!`;

// optional parameter
function greetWithOptional(name: string, age?: number): string {
  return age ? `Hello, ${name}. You are ${age} years old.` : `Hello, ${name}.`;
}

// default parameter
function welcome(name = "Guest"): string {
  return `Welcome, ${name}!`;
}

// void return
function logMessage(message: string): void {
  console.log(`Log: ${message}`);
}
