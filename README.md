# Playwright with TypeScript exercises

## Requirements

Installed node v22 and npm. I recommend using [NVM](https://github.com/nvm-sh/nvm) to manage node versions.

Clone this repo and execute:

```bash
npm install
```

Then install [VSC](https://code.visualstudio.com/) with recommended extensions and open this repository in it.
VSC recommended extensions

- ms-playwright.playwright
- dbaeumer.vscode-eslint
- pkief.material-icon-theme
- streetsidesoftware.code-spell-checker

After installation your VSC testing tab should look like this:
![VSC Playwright Test Tab](vsc-pw-config.png)

## Running tests

You can run Playwright tests using the following commands:

```bash
npx playwright test --ui

npx playwright test --grep "some test" --trace on

npx playwright test
```
