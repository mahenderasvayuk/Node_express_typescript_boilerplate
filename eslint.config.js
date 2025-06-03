import eslintPluginImport from 'eslint-plugin-import';
import tseslint from 'typescript-eslint';

export default await tseslint.config({
  files: ['**/*.ts'],
  languageOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  linterOptions: {
    // exclude: ['dist', 'node_modules'],
  },
  plugins: {
    import: eslintPluginImport,
  },
  rules: {
    'no-console': 'off',
    'import/order': [
      'warn',
      {
        groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
        'newlines-between': 'always',
      },
    ],
  },
});
