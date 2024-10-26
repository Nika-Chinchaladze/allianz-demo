module.exports = {
    parser: '@typescript-eslint/parser',  // Use TypeScript parser
    parserOptions: {
      ecmaVersion: 2020,                  // Use modern ECMAScript features
      sourceType: 'module',               // Enable modules
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended', // TypeScript rules
      'plugin:prettier/recommended'            // Prettier plugin
    ],
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
      'prettier/prettier': 'error',            // Prettier errors as ESLint errors
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',  // Optional
    },
  };
  