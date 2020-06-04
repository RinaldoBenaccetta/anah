'use strict'

module.exports = {
  valid: {
    // ! folders must be from root of the module and not from the test himself.
    pages: './test/fixtures/pages/**/*.{hbs,html,md}',
    raw: {
      showdownOptions: {},
      verbose: true,
      directPages: [
        {
          content: 'firstPage!',
          data: { title: 'testPage', layout: 'myAwsomeLayout' },
          path: 'subfolder/testPage'
        },
        {
          content: 'secondPage',
          data: { title: 'two', layout: 'myAwsomeLayout' },
          path: 'secondPage'
        }
      ]
    }
  },
  validWithEmptyFolder: {
    // ! folders must be from root of the module and not from the test himself.
    pages: './test/fixtures/pages/empty/**/*.{hbs,html,md}',
    raw: {
      showdownOptions: {},
      verbose: true,
      directPages: [
        {
          content: 'firstPage!',
          data: { title: 'testPage', layout: 'myAwsomeLayout' },
          path: 'subfolder/testPage'
        },
        {
          content: 'secondPage',
          data: { title: 'two', layout: 'myAwsomeLayout' },
          path: 'secondPage'
        },
        {
          content: 'thirdPage',
          data: { title: 'two', layout: 'myAwsomeLayout' } // this should not be in output, there is no path
        }
      ]
    }
  },
  validWithNoDirectPages: {
    // ! folders must be from root of the module and not from the test himself.
    pages: './test/fixtures/pages/**/*.{hbs,html,md}',
    raw: {
      showdownOptions: {},
      verbose: true
    }
  },
  validWithNoDirectPagesAndEmptyFolder: {
    // ! folders must be from root of the module and not from the test himself.
    pages: './test/fixtures/pages/empty**/*.{hbs,html,md}',
    raw: {
      showdownOptions: {},
      verbose: true
    }
  }
}
