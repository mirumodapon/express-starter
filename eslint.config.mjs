import stylistic from '@stylistic/eslint-plugin';
import parserTs from '@typescript-eslint/parser';
import pluginJsonc from 'eslint-plugin-jsonc';

export default [
  {
    files: ['**/*.ts', '**/*.mjs'],
    ignores: ['build/**/*', 'logs/**/*'],
    languageOptions: { parser: parserTs },
    ...stylistic.configs.customize({
      indent: 2,
      quotes: 'single',
      semi: true,
      commaDangle: 'never'
    })
  },
  {
    files: ['**/*.ts', '**/*.mjs'],
    ignores: ['build/**/*', 'logs/**/*'],
    plugins: { stylistic },
    rules: {
      'stylistic/array-bracket-newline': ['error', 'consistent'],
      'stylistic/object-curly-newline': ['error', { multiline: true }],
      'stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
      'stylistic/semi-style': ['error', 'last'],
      'stylistic/space-before-function-paren': ['error', 'never']
    }
  },
  ...pluginJsonc.configs['flat/base'],
  {
    files: ['**/*.json'],
    rules: {
      'jsonc/indent': ['error', 2],
      'jsonc/key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
      'jsonc/no-dupe-keys': ['error'],
      'jsonc/no-floating-decimal': ['error'],
      'jsonc/no-multi-str': ['error'],
      'jsonc/no-sparse-arrays': ['error'],
      'jsonc/comma-style': ['error', 'last'],
      'jsonc/comma-dangle': ['error'],
      'jsonc/array-bracket-newline': ['error', { multiline: true, minItems: null }],
      'jsonc/array-bracket-spacing': ['error', 'never'],
      'jsonc/object-curly-spacing': ['error', 'always']
    }
  }
];
