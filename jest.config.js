const nextJest = require("next/jest");
// @ts-ignore
const createJestConfig = nextJest({
	dir: "./",
});
const customJestConfig = {
	moduleDirectories: ["node_modules", "<rootDir>/"],
	testEnvironment: "jest-environment-jsdom",
};
module.exports = createJestConfig(customJestConfig);