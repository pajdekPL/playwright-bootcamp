import { expect, Page, test } from "@playwright/test";

interface LocalStorageTODOItem {
  id: string;
  title: string;
  completed: boolean;
}

test.describe("todo list", () => {
  // Task 3
  test("add to local storage and check items are visible after reload", async ({
    page,
  }) => {
    const localStorageItems: LocalStorageTODOItem[] = [
      {
        id: "ea831298-6d15-4f8f-a13a-d171dd109b86",
        title: "moje super ciezkie zadanie",
        completed: false,
      },
      {
        id: "49a7adf8-c540-4792-a3cd-5919398eac7e",
        title: "asdasdas",
        completed: false,
      },
    ];

    await page.goto("https://demo.playwright.dev/todomvc/#/");

    await setLocalStorage(page, localStorageItems);
    await page.reload();

    await expect(page.getByText(localStorageItems[0].title)).toBeVisible();
    await expect(page.getByText(localStorageItems[1].title)).toBeVisible();
  });
  // Task 4
  test("add items by UI and check if their are visible in local storage", async ({
    page,
  }) => {
    const todos: string[] = [
      "moje super ciezkie zadanie",
      "moje przyjemne, ale ciezkie zadanie",
    ];
    await page.goto("https://demo.playwright.dev/todomvc/#/");

    await addTodoItems(page, todos);

    await checkTodoItemsAreVisible(page, todos);

    const todosLocalStorage = await getTodosFromLocalStorage(page);

    expect(todosLocalStorage).toHaveLength(todos.length);
    expect(todosLocalStorage.map((todo) => todo.title)).toEqual(todos);
  });
});

async function addTodoItems(page: Page, todos: string[]): Promise<void> {
  const newTodoLocator = page.getByPlaceholder("What needs to be done?");

  for (const todo of todos) {
    await newTodoLocator.fill(todo);
    await newTodoLocator.press("Enter");
  }
}
async function setLocalStorage(
  page: Page,
  todos: LocalStorageTODOItem[],
): Promise<void> {
  await page.evaluate((todos) => {
    localStorage.setItem("react-todos", JSON.stringify(todos));
  }, todos);
}

async function checkTodoItemsAreVisible(
  page: Page,
  todos: string[],
): Promise<void> {
  for (const todo of todos) {
    await expect(page.getByText(todo)).toBeVisible();
  }
}

async function getTodosFromLocalStorage(
  page: Page,
): Promise<LocalStorageTODOItem[]> {
  const result = await page.evaluate(() => {
    const todos = localStorage.getItem("react-todos");
    if (!todos) {
      return [];
    }
    const parsedTodos = JSON.parse(todos) as LocalStorageTODOItem[];
    return parsedTodos;
  });
  return result;
}
