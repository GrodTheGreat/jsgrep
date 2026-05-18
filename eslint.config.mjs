import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Global JS and Node configuration
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },

  // Specific configuration for tests
  {
    files: ["src/**/*.test.js"],
    languageOptions: {
      globals: {
        ...globals.jest, // This lets ESLint know describe/test/expect are fine
      },
    },
  },
  // Prettier config always goes last to turn off conflicting styling rules
  prettier,
]);
