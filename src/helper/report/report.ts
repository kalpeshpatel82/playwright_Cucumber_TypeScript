const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "test-results",
  reportPath: "test-results/reports/",
  reportName:"E2E EBW Test Automation - Playwright-TS",
  pageTitle: "Fortis",
  displayDuration:true,
  metadata: {
    browser: {
      name: "chrome",
      version: "123.x.x",
    },
    device: "Local test machine",
    platform: {
      name: "Windows",
      version: "11 Pro",
    },
  },
  customData: {
    title: "Test info",
    data: [
      { label: "Project", value: "Custom project" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: "Mar 19th 2024, 02:31 PM EST" },
      { label: "Execution End Time", value: "Mar 19th 2024, 02:56 PM EST" },
    ],
  },
});