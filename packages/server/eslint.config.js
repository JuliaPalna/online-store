import js from "@eslint/js";
import globals from "globals";
import eslintReact from "eslint-plugin-react";
import eslintReactHooks from "eslint-plugin-react-hooks";
import eslintReactRefresh from "eslint-plugin-react-refresh";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";
import stylisticJs  from "@stylistic/eslint-plugin-js";

/** @type { import("eslint").Linter.Config[] } */
export default tseslint.config(
  {
    plugins: {
      react: eslintReact,
      "react-hooks": eslintReactHooks,
      "react-refresh": eslintReactRefresh,
      "@typescript-eslint": tseslint.plugin,
      "@stylistic/js": stylisticJs,
      prettier: prettierPlugin
    },
  },
  { 
    ignores: ["node_modules", "dist","eslint.config.js"] 
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2020,
      },
      parserOptions: {
        project: ["tsconfig.json", "tsconfig.node.json","tsconfig.app.json"]
      }
    },
  },
  {
    files:  ["**/*.{ts,tsx}"],
    rules: {
      ...eslintConfigPrettier.rules,
      ...eslintReactHooks.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      "react/jsx-no-target-blank": "off",
      "prefer-const": "error",
      'no-console': "error",
      "@stylistic/js/semi": ["error", "always"],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@typescript-eslint/prefer-nullish-coalescing": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/restrict-template-expressions": "off",
      "@typescript-eslint/triple-slash-reference": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/consistent-type-assertions": "off",
      "jsx-a11y/anchor-is-valid": "off"
    }
  }
)
