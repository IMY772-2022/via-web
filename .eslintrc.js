module.exports = {
  parser: "@typescript-eslint/parser",
  settings: {
    react: {
      version: "detect", // detect react version
    },
  },
  plugins: ["@typescript-eslint", "prettier", "react-hooks", "jsx-a11y"],
  rules: {
    "react/prop-types": "off", // Disable prop-types as we use TypeScript for type checking
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
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
  },
  env: {
    browser: true,
  },
  overrides: [
    // typescript
    {
      files: ["*.ts", "*.tsx"],
      excludedFiles: [
        "*.test.js",
        "*.d.ts",
        "gatsby-node.js",
        "gatsby-config.js",
        "gatsby-browser.js",
        "gatsby-ssr.js",
        "__mocks__/**",
      ],
      plugins: ["@typescript-eslint", "prettier"],
      extends: [
        "eslint:recommended", // use recommended configs
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:jsx-a11y/recommended",
        "prettier",
      ],
      rules: {
        "react/prop-types": "off", // Disable prop-types as we use TypeScript for type checking
        // "@typescript-eslint/no-explicit-any": "error",
        "prettier/prettier": [
          "error",
          {
            endOfLine: "auto",
          },
        ],
      },
    },
    // gatsby and eslint config files
    {
      plugins: ["prettier"],
      extends: ["eslint:recommended", "prettier"],
      files: [
        ".eslintrc.js",
        "gatsby-node.js",
        "gatsby-config.js",
        "gatsby-browser.js",
        "gatsby-ssr.js",
        "./scripts/**",
      ],
      env: {
        node: true,
      },
    },
  ],
}
