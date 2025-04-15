import { expect, test } from "playwright/test";

// Exercise: Create a function that validates test results
interface TestResult {
  testName: string;
  passed: boolean;
  duration: number;
  error?: string;
}

interface TestSummary {
  totalTests: number;
  passedTests: number;
  failedTests: number;
  averageDuration: number;
  failedTestNames: string[];
}

function analyzeTestResults(results: TestResult[]): TestSummary {
  const summary: TestSummary = {
    totalTests: results.length,
    passedTests: 0,
    failedTests: 0,
    averageDuration: 0,
    failedTestNames: [],
  };

  let totalDuration = 0;

  for (const result of results) {
    if (result.passed) {
      summary.passedTests++;
    } else {
      summary.failedTests++;
      summary.failedTestNames.push(result.testName);
    }
    totalDuration += result.duration;
  }

  summary.averageDuration = totalDuration / results.length;
  return summary;
}

test("Exercise 5: Analyze test results", () => {
  const testResults: TestResult[] = [
    { testName: "Login with valid credentials", passed: true, duration: 150 },
    {
      testName: "Login with invalid password",
      passed: false,
      duration: 100,
      error: "Invalid credentials",
    },
    { testName: "Check form validation", passed: true, duration: 200 },
    {
      testName: "Test API endpoint",
      passed: false,
      duration: 300,
      error: "Timeout",
    },
  ];

  const summary = analyzeTestResults(testResults);

  expect(summary.totalTests).toBe(4);
  expect(summary.passedTests).toBe(2);
  expect(summary.failedTests).toBe(2);
  expect(summary.averageDuration).toBe(187.5);
  expect(summary.failedTestNames).toEqual([
    "Login with invalid password",
    "Test API endpoint",
  ]);
});
