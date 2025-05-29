// eslint.config.js
import eslintPluginTs from "@typescript-eslint/eslint-plugin";
import parserTs from "@typescript-eslint/parser";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
      },
    },
    plugins: {
      "@typescript-eslint": eslintPluginTs,
      prettier: prettierPlugin,
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "off",
      "prettier/prettier": "error"
    },
  },
];
