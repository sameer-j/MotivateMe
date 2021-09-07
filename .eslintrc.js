module.exports = {
  root: true,
  extends: ['airbnb', 'airbnb/hooks'],
  env: {
    jest: true,
  },
  plugins: ['prettier'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-indent': [2, 2],
    indent: ['error', 2, { ignoredNodes: ['JSXElement'] }],
    'react/prefer-stateless-function': 'off',
    'no-use-before-define': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'object-curly-newline': 'off',
  },
};
