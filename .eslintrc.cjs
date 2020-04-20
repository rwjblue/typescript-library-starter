module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'simple-import-sort', 'prettier', 'filenames'],
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  rules: {
    'sort-imports': 'off',
    'import/order': 'off',
    'import/no-extraneous-dependencies': 'error',
    'import/no-unassigned-import': 'error',
    'import/no-duplicates': 'error',
    '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      { allowExpressions: true },
    ],
    'simple-import-sort/sort': 'error',
  },
  overrides: [
    {
      parserOptions: {
        project: './tsconfig.json',
        // allows eslint from any dir
        tsconfigRootDir: __dirname,
        sourceType: 'module',
      },
      files: ['src/**/*.ts'],
      extends: [
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        'import/no-unresolved': 'off',
        "filenames/match-regex": [
          "error",
          "^[a-z0-9\\-]+$",
          true,
        ],
        "filenames/match-exported": ["error", "kebab"],
      },
    },
    {
      env: {
        node: true,
        mocha: true,
      },
      files: ['test/**/*.js'],
    },
  ],
};
