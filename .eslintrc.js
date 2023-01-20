module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        sourceType: "module",
        project: "./tsconfig.json",
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    plugins: [
        "@typescript-eslint",
        "comma-dangle"
    ],
    rules: {
        "comma-dangle": ["error", "never"],
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "off"
    }
};