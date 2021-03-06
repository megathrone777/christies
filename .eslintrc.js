module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "prettier/@typescript-eslint",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    useJSXTextNode: true,
    ext: ["js", "jsx", "ts", "tsx"],
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["@typescript-eslint", "jsx-a11y"],
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    "react/prop-types": "off",
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/no-var-requires": "off"
  }
};
