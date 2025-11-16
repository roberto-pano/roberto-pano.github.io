module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:prettier/recommended'],
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  rules: {
    // Require spacing inside of object literal curly braces: { a: 1 } instead of {a:1}
    'object-curly-spacing': ['error', 'always'],
    // Require trailing commas for multiline objects/arrays/params
    'comma-dangle': ['error', 'always-multiline'],
    // Use Prettier as the source of formatting truth
    'prettier/prettier': ['error', { trailingComma: 'all', bracketSpacing: true, singleQuote: true, semi: true, printWidth: 150 }],
  },
};
