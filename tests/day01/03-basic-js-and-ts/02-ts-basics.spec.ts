/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-unused-vars */

// BASIC TYPES
// examples:
// https://tsplay.dev/w1vL8N
// exercises:
// https://tsplay.dev/wX8yDw

const username: string = "Adam";
const age: number = 35;
const isAdmin: boolean = true;
const hobbies: string[] = ["gym", "reading", "coding"];
const userData: any = { name: "Adam", loggedIn: true };

// FUNCTION TYPING

function greet(name: string): string {
  return `Hello, ${name}!`;
}

function add(a: number, b: number): number {
  return a + b;
}

// TYPE ALIASES
type User = {
  name: string;
  age: number;
  isPremium: boolean;
};

const user1: User = {
  name: "Adam",
  age: 31,
  isPremium: true,
};

type SomeType = string | number;

const someTypeInstance: SomeType = {};
const someTypeInstance2: SomeType = [];
const someTypeInstance3: SomeType = 123;
const someTypeInstance4: SomeType = "123";

// INTERFACES
interface Product {
  id: number;
  name: string;
  price: number;
}

function displayProduct(product: Product): void {
  console.log(`${product.name} costs $${product.price}`);
}

// UNION TYPES
function printId(id: number | string): void {
  console.log(`Your ID is: ${id}`);
}

// OPTIONAL AND DEFAULT PARAMETERS

function logMessage(message: string, user?: string): void {
  console.log(`${user || "System"}: ${message}`);
}

function multiply(a: number, b: number = 1): number {
  return a * b;
}

// custom type

// https://tsplay.dev/Wv9zrm
type Year = number;
type Month = number;
type Day = number;

type DashDate = `${Day}-${Month}-${Year}`;

const dashDate: DashDate = "23-12-1993";
