module.exports = {
  plugins: ["@typescript-eslint", "prettier", "react-hooks", "jsx-a11y"],
  rules: {
    "react/prop-types": "off", // Disable prop-types as we use TypeScript for type checking
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "no-console": [
      "error",
      {
        allow: ["warn", "error"],
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "none",
          requireLast: false,
        },
        singleline: {
          delimiter: "comma",
          requireLast: false,
        },
      },
    ],
    // note you must disable the base rule as it can report incorrect errors
    camelcase: "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/no-unused-vars": "error",
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  globals: {
    console: false,
    alert: false,
    require: false,
    setTimeout: false,
    clearTimeout: false,
    setInterval: false,
    clearInterval: false,
    process: false,
    fetch: false,
    localStorage: false,
    Intl: false,
  },
  parser: "@typescript-eslint/parser",
  settings: {
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [
    // Override some TypeScript rules just for .js files
    {
      files: ["*.js"],
      env: {
        jest: true,
      },
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
}
