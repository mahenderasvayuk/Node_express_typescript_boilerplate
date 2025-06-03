// eslint.config.js
import tseslint from 'typescript-eslint';

export default [
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      // Add any custom rules here
    },
  },
];
