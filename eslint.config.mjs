import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import nxEslintPlugin from '@nx/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import reactHooks from 'eslint-plugin-react-hooks';
import reactPlugin from 'eslint-plugin-react';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
});

export default [
  {
    plugins: {
      '@nx': nxEslintPlugin,
      import: importPlugin,
      react: reactPlugin,
      'react-hooks': reactHooks,
    },
  },
  {
    ignores: ['**/.next/**', '**/dist/**', '**/node_modules/**', '**/coverage/**'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    settings: {
      'import/resolver': {
        node: true,
      },
    },
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: [],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
      // Import order and sorting
      // Order: 1. React & react dependencies, 2. Material UI, 3. Other external, 4. Project libs, 5. Parent/sibling
      'import/order': [
        'error',
        {
          groups: [
            'builtin', // Node.js built-in modules
            'external', // External libraries
            'internal', // Internal modules (project libs)
            ['parent', 'sibling'], // Parent and sibling imports
            'index', // Index imports
            'type', // Type imports
          ],
          'newlines-between': 'always',
          pathGroups: [
            // Group 1: React and react dependencies (in order as specified)
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'react-dom',
              group: 'external',
              position: 'after',
            },
            {
              pattern: 'react-*',
              group: 'external',
              position: 'after',
            },
            {
              pattern: '@tanstack/react-*',
              group: 'external',
              position: 'after',
            },
            {
              pattern: 'next/**',
              group: 'external',
              position: 'after',
            },
            // Group 2: Material UI (after React)
            {
              pattern: '@mui/**',
              group: 'external',
              position: 'after',
            },
            // Group 3: Other external libraries (will come after Material UI automatically)
            // Group 4: Project libs (internal group)
            {
              pattern: '@ruyyaan/**',
              group: 'internal',
            },
            {
              pattern: '@/**',
              group: 'internal',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
        },
      ],
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'import/no-unresolved': 'off', // TypeScript handles this, path aliases need manual config
      // Unused imports and variables (base rule - JS files)
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      // Import best practices
      'import/no-unused-modules': 'off', // Can be slow, keeping off for now
      'import/prefer-default-export': 'off',
      'import/no-default-export': 'off',
      // Other best practices
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-template': 'error',
      'prefer-destructuring': ['error', { object: true, array: false }],
    },
  },
  ...compat.config({ extends: ['plugin:@nx/typescript'] }).map((config) => ({
    ...config,
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      ...(config.rules || {}),
      // Override unused vars for TypeScript files
      'no-unused-vars': 'off', // Turn off base rule for TS files
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  })),
  ...compat.config({ extends: ['plugin:@nx/javascript'] }).map((config) => ({
    ...config,
    files: ['**/*.js', '**/*.jsx'],
  })),
];
