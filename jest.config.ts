import {pathsToModuleNameMapper} from "ts-jest";
// Замените импорт tsconfig на require
const {compilerOptions} = require("./tsconfig.json");

export default {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {prefix: "<rootDir>/"}),
};
