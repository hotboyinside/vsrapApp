const { defineConfig, globalIgnores } = require('eslint/config')
const expoConfig = require('eslint-config-expo/flat')
const tseslint = require('typescript-eslint')
const prettier = require('eslint-config-prettier/flat')

module.exports = defineConfig([
  globalIgnores([
    'node_modules/**',
    '.expo/**',
    '.expo-bootstrap/**',
    '.env.local/**',
    'android/**',
    'ios/**',
    'dist/**',
    'web-build/**',
    'coverage/**',
    'expo-env.d.ts',
  ]),
  expoConfig,
  {
    files: ['eslint.config.js'],
    languageOptions: { globals: { __dirname: 'readonly' } },
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    extends: [tseslint.configs.recommendedTypeChecked],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },
  },
  prettier,
])
