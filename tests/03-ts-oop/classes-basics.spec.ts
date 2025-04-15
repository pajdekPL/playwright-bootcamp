// https://www.typescript-training.com/course/fundamentals-v4/11-classes/
import { expect, test } from "playwright/test";

// Examples Playground: https://tsplay.dev/WJdBrN
// Exercises Playground: https://tsplay.dev/wjKllN
// Exercises Solutions: https://tsplay.dev/we3jdm

// Basic Class Example
class Dog {
  // Properties
  name: string;
  age: number;

  // Constructor
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Method
  bark(): string {
    return `${this.name} says Woof!`;
  }
}

test("Basic class example", () => {
  const myDog = new Dog("Rex", 3);
  expect(myDog.name).toBe("Rex");
  expect(myDog.age).toBe(3);
  expect(myDog.bark()).toBe("Rex says Woof!");
});

// Exercise 1: Create a Cat class
class Cat {
  // Your code here
  // Add properties: name (string) and lives (number)
  // Add constructor to initialize these properties
  // Add method meow() that returns "[name] says Meow!"
}

test("Exercise 1: Create a Cat class", () => {
  const myCat = new Cat("Whiskers", 9);
  expect(myCat.name).toBe("Whiskers");
  expect(myCat.lives).toBe(9);
  expect(myCat.meow()).toBe("Whiskers says Meow!");
});

// Class with Private Properties
class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

test("Class with private properties", () => {
  const account = new BankAccount(100);
  account.deposit(50);
  expect(account.getBalance()).toBe(150);
});

// Exercise 2: Create a Counter class
class Counter {
  // Your code here
  // Add private property count (number)
  // Add constructor that initializes count to 0
  // Add methods:
  // - increment(): void (increases count by 1)
  // - decrement(): void (decreases count by 1)
  // - getCount(): number (returns current count)
}

test("Exercise 2: Create a Counter class", () => {
  const counter = new Counter();
  counter.increment();
  counter.increment();
  counter.decrement();
  expect(counter.getCount()).toBe(1);
});

// Class with Static Members
class MathHelper {
  static PI: number = 3.14159;

  static square(n: number): number {
    return n * n;
  }
}

test("Class with static members", () => {
  expect(MathHelper.PI).toBe(3.14159);
  expect(MathHelper.square(4)).toBe(16);
});

// Exercise 3: Create a StringHelper class
class StringHelper {
  // Your code here
  // Add static method reverse(str: string): string
  // Add static method toUpperCase(str: string): string
}

test("Exercise 3: Create a StringHelper class", () => {
  expect(StringHelper.reverse("hello")).toBe("olleh");
  expect(StringHelper.toUpperCase("world")).toBe("WORLD");
});

// Class with Inheritance
class Animal {
  constructor(protected name: string) {}

  makeSound(): string {
    return "Some sound";
  }
}

class Lion extends Animal {
  makeSound(): string {
    return `${this.name} roars!`;
  }
}

test("Class with inheritance", () => {
  const lion = new Lion("Simba");
  expect(lion.makeSound()).toBe("Simba roars!");
});

// Exercise 4: Create a Bird class that extends Animal
class Bird extends Animal {
  // Your code here
  // Override makeSound() to return "[name] chirps!"
}

test("Exercise 4: Create a Bird class", () => {
  const bird = new Bird("Tweety");
  expect(bird.makeSound()).toBe("Tweety chirps!");
});
