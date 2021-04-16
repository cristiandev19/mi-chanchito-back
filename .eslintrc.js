module.exports = {
  env: {
    es2021 : true,
    node   : true,
  },
  extends: [
    'airbnb-typescript/base',
    'plugin:import/typescript'
  ],
  parser        : '@typescript-eslint/parser',
  parserOptions : {
    ecmaVersion : 12,
    sourceType  : 'module',
  },
  // settings: {
  //   'import/resolver': {
  //     node: {
  //       extensions: ['.js', '.jsx', '.ts', '.tsx'],
  //       // moduleDirectory : ['node_modules', 'src/'],
  //     },
  //   },
  // },
  'settings': {
    'import/no-unresolved': 0, // Turn off 'Unable to resolve path to module ...' error
    'import/extensions': 0,
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
    'consistent-return'                 : ['off'],
    'no-underscore-dangle'              : ['off'],
    'no-unused-vars'                    : 'off',
    '@typescript-eslint/no-unused-vars' : ['error'],
    'class-methods-use-this'            : 'off'
  },
};
