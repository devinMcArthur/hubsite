module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testTimeout: 60000,
  rootDir: "src",
  setupFiles: ["<rootDir>/testing/jest.setup.ts"],
};
