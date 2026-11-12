import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';

// ESLint 9 flat config (replaces .eslintrc.json + babel-eslint).
// Note: eslint-config-airbnb has no ESLint 9 support, so this config
// uses the official recommended presets instead.
export default [
  js.configs.recommended,
  react.configs.flat.recommended,
  {
    files: ['src/**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      'no-console': 'off'
    }
  }
];
