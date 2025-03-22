import js from "@eslint/js";
import globals from "globals";
import eslintReact from "eslint-plugin-react";
import eslintReactHooks from "eslint-plugin-react-hooks";
import eslintReactRefresh from "eslint-plugin-react-refresh";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";
import stylisticJs from "@stylistic/eslint-plugin-js";
import eslintPluginN from "eslint-plugin-n";
import pluginJest from "eslint-plugin-jest";
import eslintPluginImportX from 'eslint-plugin-import-x'
import tsParser from '@typescript-eslint/parser'

/** @type { import("eslint").Linter.Config[] } */
export default tseslint.config(
  {
    plugins: {
      react: eslintReact,
      "react-hooks": eslintReactHooks,
      "react-refresh": eslintReactRefresh,
      "@typescript-eslint": tseslint.plugin,
      "@stylistic/js": stylisticJs,
      prettier: prettierPlugin,
      n: eslintPluginN,
      jest: pluginJest,
    },
  },
  {
    ignores: ["node_modules", "dist", "eslint.config.js", '*.config.js'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,

   //настройка импорта
  eslintPluginImportX.flatConfigs.recommended,
  eslintPluginImportX.flatConfigs.typescript,

  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    ignores: ['eslint.config.js'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2020,
        ...pluginJest.environments.globals.globals,
      },

       //настройка импорта
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        project: ["tsconfig.json", "tsconfig.node.json", "tsconfig.app.json"],
      },
    },
  },
  {
    files: ["**/*.{ts,tsx}", '**/*.test.ts'],
    rules: {
      ...eslintConfigPrettier.rules,
      ...eslintReactHooks.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      "react/jsx-no-target-blank": "off",
      "prefer-const": "error",
      "no-console": "error",
      "@stylistic/js/semi": ["error", "always"],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "n/no-process-env": ["error", {
        "allowedVariables": ["NODE_ENV"]
      }],
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@typescript-eslint/prefer-nullish-coalescing": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/restrict-template-expressions": "off",
      "@typescript-eslint/triple-slash-reference": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/consistent-type-assertions": "off",
      "jsx-a11y/anchor-is-valid": "off",

      //настройка импорта
      'no-unused-vars': 'off',
      'import-x/no-dynamic-require': 'warn',
      'import-x/no-nodejs-modules': 'warn',
      "import-x/no-restricted-paths": [
        "error",
        {
          "zones": [
            {
              "target": "./src/**/!(*.integration.test.ts)",
              "from": "./src/test",
              "message": "Import something from test dir only inside integration tests",
            }
          ]
        }
      ],

      //настройка тестов
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
    },
  },
);
