exports.config = {
  tests: './tests/*_test.js',
  output: './tests/output',
  helpers: {
    Playwright: {
      url: 'https://github.com',
      show: false,
      browser: 'chromium'
    },
    PageHelper: {
      require: './tests/helpers/page_helper.js',
    },
  },
  include: {
    I: './tests/steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'tests',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}