'use strict'

module.exports = {
  optionsWithPages: {
    // ! folders must be from root of the module and not from the test himself.
    pages: './test/fixtures/pages/**/*.{hbs,html,md}',
    raw: {
      showdownOptions: {}
    }
  },

  optionsWithoutPages: {
    raw: {
      showdownOptions: {}
    }
  }
}
