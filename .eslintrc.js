module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "@eslint-kit/base",
    "@eslint-kit/react",
    "@eslint-kit/typescript",
    "@eslint-kit/prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: './',
  },
  rules: {
  },
};
