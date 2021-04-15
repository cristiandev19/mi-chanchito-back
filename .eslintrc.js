module.exports = {
  env: {
    es2021 : true,
    node   : true,
  },
  extends: [
    'airbnb-base',
  ],
  parser        : '@typescript-eslint/parser',
  parserOptions : {
    ecmaVersion : 12,
    sourceType  : 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'no-multi-spaces' : ['error', { exceptions: { VariableDeclarator: true } }],
    'key-spacing'     : ['error', {
      align: {
        beforeColon : true,
        afterColon  : true,
        on          : 'colon',
      },
    }],
    'consistent-return'    : ['off'],
    'no-underscore-dangle' : ['off'],
  },
};
