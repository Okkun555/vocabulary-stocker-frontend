const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "./" });

const customJestingConfig = {
  textPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestingConfig);
