/**
 * @type {import('@types/eslint').Linter.BaseConfig}
 */
module.exports = {
  reportUnusedDisableDirectives: true,
  extends: [
    '@remix-run/eslint-config',
    '@remix-run/eslint-config/node',
    '@remix-run/eslint-config/jest',
    '@remix-run/eslint-config/jest-testing-library',
    'plugin:prettier/recommended',
  ],
  // we're using vitest which has a very similar API to jest
  // (so the linting plugins work nicely), but we have to explicitly
  // set the jest version.
  settings: {
    jest: {
      version: 27,
    },
  },
  rules: {
    'no-var': 'error',
    'prefer-const': 'error',
    'no-warning-comments': 'warn',
    'no-undef': ['error', { typeof: true }],
    'no-use-before-define': ['error', { functions: false }],
  },
  overrides: [
    {
      files: ['*.mjs', './server.js'],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
      env: {
        node: true,
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: 'plugin:@typescript-eslint/eslint-recommended',
      rules: {
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_' },
        ],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
          'error',
          { functions: false },
        ],
        '@typescript-eslint/no-empty-interface': [
          'error',
          { allowSingleExtends: true },
        ],
        'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
        'testing-library/no-await-sync-events': 'off',
      },
    },
  ],
}
