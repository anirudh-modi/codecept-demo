module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    'codeceptjs/codeceptjs': true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: [
    'ng-plugins',
    'codeceptjs',
  ],
  rules: {
    'ng-plugins/no-wait': 'error',
    'ng-plugins/no-see': 'error',
    'ng-plugins/no-full-screenshot': 'error',
    'ng-plugins/no-type': 'error',
  },
};
