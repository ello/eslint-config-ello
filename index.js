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
    'jsx-a11y/tabindex-no-positive': 0,
    'no-alert': 2,
    'no-console': 2,
    'no-debugger': 2,
    'react/forbid-prop-types': [
      1,
      {
        forbid: [
          'any'
        ]
      }
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: [
          '.js',
          '.jsx'
        ]
      }
    ],
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

