module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmafeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    // Customisation can be set here
  }
}
