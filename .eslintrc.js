module.exports = {
    "parser": '@typescript-eslint/parser',
    "plugins": ['@typescript-eslint'],
    "root": true,
    "overrides": [
      {
        "files": [
          "src/**/*.ts"
        ],
        "extends": [
          "plugin:@typescript-eslint/recommended",
          "plugin:@typescript-eslint/recommended-requiring-type-checking",
          "plugin:@typescript-eslint/strict"
        ],
        "rules": {
          "@typescript-eslint/array-type": ["warn", { "default": "generic" }],
        },
        // "rules": {
        //   "@typescript-eslint/ban-ts-comment": "off",
        //   "@typescript-eslint/explicit-function-return-type": "off",
        //   "@typescript-eslint/no-unused-vars": "off",
        //   // All the @typescript-eslint/* rules here...
        //   "@typescript-eslint/no-unnecessary-type-arguments": "error",
        //   "@typescript-eslint/prefer-nullish-coalescing": "error",
        //   "@typescript-eslint/prefer-optional-chain": "error"
        // },
        "parser": "@typescript-eslint/parser",
        "parserOptions": {
          "tsconfigRootDir": "./",
          "project": "./tsconfig.app.json"
        }
      }
    ],
  };