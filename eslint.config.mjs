import _import from "eslint-plugin-import";
import jsxA11Y from "eslint-plugin-jsx-a11y";
import prettier from "eslint-plugin-prettier";
import react from "eslint-plugin-react";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import path from "node:path";
import {fileURLToPath} from "node:url";

import {fixupConfigRules, fixupPluginRules} from "@eslint/compat";
import {FlatCompat} from "@eslint/eslintrc";
import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    files: ["src/**/*.{ts,tsx,js,jsx,json,css,md}"],
  },
  {
    ignores: ["node_modules/*", "dist/*"],
  },
  ...fixupConfigRules(
    compat.extends(
      "plugin:react/recommended",
      "plugin:prettier/recommended",
      "plugin:react-hooks/recommended",
      "plugin:jsx-a11y/recommended",
      "eslint:recommended",
    ),
  ),
  {
    plugins: {
      react: fixupPluginRules(react),
      "unused-imports": unusedImports,
      import: fixupPluginRules(_import),
      "@typescript-eslint": typescriptEslint,
      "jsx-a11y": fixupPluginRules(jsxA11Y),
      prettier: fixupPluginRules(prettier),
      "simple-import-sort": simpleImportSort,
    },

    languageOptions: {
      globals: {
        ...Object.fromEntries(Object.entries(globals.browser).map(([key]) => [key.trim(), "off"])),
        ...globals.node,
        ...globals.browser,
      },
      parser: tsParser,
      ecmaVersion: 12,
      sourceType: "module",

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        alias: {
          map: [
            ["assets", "./src/assets"],
            ["components", "./src/components"],
            ["constants", "./src/constants"],
            ["pages", "./src/pages"],
            ["store", "./src/store"],
            ["styles", "./src/styles"],
            ["utils", "./src/utils"],
          ],
          extensions: [".ts", ".js", ".jsx", ".json"],
        },
      },
    },

    rules: {
      "no-console": "warn",
      "react/prop-types": "off",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react-hooks/exhaustive-deps": "off",
      "jsx-a11y/click-events-have-key-events": "warn",
      "jsx-a11y/interactive-supports-focus": "warn",
      "prettier/prettier": "warn",
      "no-unused-vars": "off",
      "unused-imports/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "warn",
      "object-curly-spacing": ["error", "never"],

      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          args: "after-used",
          ignoreRestSiblings: false,
          argsIgnorePattern: "^_.*?$",
        },
      ],
      "react/self-closing-comp": "warn",

      "react/jsx-sort-props": [
        "warn",
        {
          callbacksLast: true,
          shorthandFirst: true,
          noSortAlphabetically: false,
          reservedFirst: true,
        },
      ],

      "padding-line-between-statements": [
        "warn",
        {
          blankLine: "always",
          prev: "*",
          next: "return",
        },
        {
          blankLine: "always",
          prev: ["const", "let", "var"],
          next: "*",
        },
        {
          blankLine: "any",
          prev: ["const", "let", "var"],
          next: ["const", "let", "var"],
        },
      ],
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^\\w"],
            [
              "^assets/*",
              "^components/*",
              "^constants/*",
              "^pages/*",
              "^store/*",
              "^styles/*",
              "^utils/*",
            ],
            ["^[./]"],
          ],
        },
      ],
    },
  },
];
