const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 'es2020',
  },
  plugins: ['@typescript-eslint', 'vue', 'prettier'],
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/typescript/recommended'],
  rules: {
    'no-console': isProduction ? ['warn', { allow: ['info', 'warn', 'error'] }] : 'off',
    'no-debugger': isProduction ? 'error' : 'off',
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
    'comma-dangle': ['error', 'only-multiline'],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    semi: [2, 'always'],
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1, maxBOF: 2 }],
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false,
        },
      },
    ],
    '@typescript-eslint/triple-slash-reference': 'warn',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        printWidth: 120,
      },
    ],
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.vue'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
};
