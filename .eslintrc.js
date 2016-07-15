module.exports = {
  root: true,
  parserOptions: {
    // "ecmaVersion": 6,
    // "sourceType": "module",
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  extends: 'airbnb/base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "semi": [2, "never"],
    "no-console": [0],
    "space-before-function-paren": [2, "always"],
    "prefer-const": [0],
    "eol-last": [0],
    "no-param-reassign": [0],
    "no-shadow": [1],
    "arrow-body-style": [0],
    "no-new": [0],
    "comma-dangle": [0],
    "prefer-arrow-callback": [0],
    "func-names": [0],
    "no-unused-vars": [0]

  }
}
