'use strict'

const validLibraries = [
  {
    someHelper: () => {
      return true
    },
    anotherHelper: () => {
      return true
    }
  },
  {
    superHelper: () => {
      return true
    }
  }
]

module.exports = {
  withHelpersAndNoLibraries: {
    helpers: './test/fixtures/lib/registerHelpers/**/*.js',
    raw: {
      helpers: './test/fixtures/lib/registerHelpers/'
    }
  },

  withHelpersAndNoLibrariesAndVerboseToFalse: {
    helpers: './test/fixtures/lib/registerHelpers/**/*.js',
    raw: {
      verbose: false,
      helpers: './test/fixtures/lib/registerHelpers/'
    }
  },

  withHelpersAndLibraries: {
    helpers: './test/fixtures/lib/registerHelpers/**/*.js',
    raw: {
      helpers: './test/fixtures/lib/registerHelpers/',
      helpersLibraries: validLibraries
    }
  },

  withHelpersAndEmptyLibraries: {
    helpers: './test/fixtures/lib/registerHelpers/**/*.js',
    raw: {
      helpers: './test/fixtures/lib/registerHelpers/',
      helpersLibraries: []
    }
  },

  WithHelpersAndNotValidLibraries: [
    {
      helpers: './test/fixtures/lib/registerHelpers/**/*.js',
      raw: {
        helpers: './test/fixtures/lib/registerHelpers/',
        helpersLibraries: true
      }
    },
    {
      helpers: './test/fixtures/lib/registerHelpers/**/*.js',
      raw: {
        helpers: './test/fixtures/lib/registerHelpers/',
        helpersLibraries: {}
      }
    },
    {
      helpers: './test/fixtures/lib/registerHelpers/**/*.js',
      raw: {
        helpers: './test/fixtures/lib/registerHelpers/',
        helpersLibraries: 'library'
      }
    },
    {
      helpers: './test/fixtures/lib/registerHelpers/**/*.js',
      raw: {
        helpers: './test/fixtures/lib/registerHelpers/',
        helpersLibraries: 42
      }
    },
    {
      helpers: './test/fixtures/lib/registerHelpers/**/*.js',
      raw: {
        helpers: './test/fixtures/lib/registerHelpers/',
        helpersLibraries: false
      }
    }
  ],

  WithObjectLibrariesOptionsAndInvalidOptions: [
    {
      helpers: './test/fixtures/lib/registerHelpers/**/*.js',
      raw: {
        helpers: './test/fixtures/lib/registerHelpers/',
        helpersLibraries: [
          {
            someHelper: () => {},
            anotherHelper: 'something' // throw an error because not a function.
          }
        ]
      }
    },
    {
      helpers: './test/fixtures/lib/registerHelpers/**/*.js',
      raw: {
        helpers: './test/fixtures/lib/registerHelpers/',
        helpersLibraries: [
          {
            someHelper: () => {},
            anotherHelper: null // throw an error because not a function.
          }
        ]
      }
    },
    {
      helpers: './test/fixtures/lib/registerHelpers/**/*.js',
      raw: {
        helpers: './test/fixtures/lib/registerHelpers/',
        helpersLibraries: [
          {
            someHelper: () => {},
            anotherHelper: 42 // throw an error because not a function.
          }
        ]
      }
    },
    {
      helpers: './test/fixtures/lib/registerHelpers/**/*.js',
      raw: {
        helpers: './test/fixtures/lib/registerHelpers/',
        helpersLibraries: [
          {
            someHelper: () => {},
            anotherHelper: false // throw an error because not a function.
          }
        ]
      }
    },
    {
      helpers: './test/fixtures/lib/registerHelpers/**/*.js',
      raw: {
        helpers: './test/fixtures/lib/registerHelpers/',
        helpersLibraries: [
          {
            someHelper: () => {},
            anotherHelper: {} // throw an error because not a function.
          }
        ]
      }
    },
    {
      helpers: './test/fixtures/lib/registerHelpers/**/*.js',
      raw: {
        helpers: './test/fixtures/lib/registerHelpers/',
        helpersLibraries: [
          {
            someHelper: () => {},
            anotherHelper: [] // throw an error because not a function.
          }
        ]
      }
    }
  ]
}
