module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',

  env: {
    browser: true,
    node: true,
    jest: true,
    mocha: true
  },
  rules: {
    'function-paren-newline': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/click-events-have-key-events': 0,

    'jsx-a11y/tabindex-no-positive': 0,
    'no-alert': 2,
    'no-console': 2,
    'no-debugger': 2,
    'no-multi-spaces': ['error', { 'ignoreEOLComments': true }],
    'no-restricted-globals': 0,
    'object-curly-newline': 0,
    'padded-blocks': 0,
    'prefer-destructuring': 0,
    'prefer-promise-reject-errors': 0,

    'react/forbid-prop-types': [
      1,
      {
        forbid: [
          'any'
        ]
      }
    ],
    'react/jsx-closing-tag-location': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: [
          '.js',
          '.jsx'
        ]
      }
    ],
    'react/no-redundant-should-component-update': 0,
    'react/prefer-stateless-function': [
      2,
      {
        ignorePureComponents: true
      }
    ],
    'react/sort-comp': [
      'error',
      {
        order: [
          'type-annotations',
          'static-methods',
          'lifecycle',
          '/^on.+$/',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'everything-else',
          '/^render.+$/',
          'render'
        ]
      }
    ],
    semi: 0
  }
}

