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

  withHelpersAndLibraries: {
    helpers: './test/fixtures/lib/registerHelpers/**/*.js',
    raw: {
      helpers: './test/fixtures/lib/registerHelpers/',
      helpersLibrary: validLibraries
    }
  },

  withHelpersAndEmptyLibraries: {
    helpers: './test/fixtures/lib/registerHelpers/**/*.js',
    raw: {
      helpers: './test/fixtures/lib/registerHelpers/',
      helpersLibrary: []
    }
  },

  WithHelpersAndNotValidLibraries: [
    {
      helpers: './test/fixtures/lib/registerHelpers/**/*.js',
      raw: {
        helpers: './test/fixtures/lib/registerHelpers/',
        helpersLibrary: true
      }
    },
    {
      helpers: './test/fixtures/lib/registerHelpers/**/*.js',
      raw: {
        helpers: './test/fixtures/lib/registerHelpers/',
        helpersLibrary: {}
      }
    },
    {
      helpers: './test/fixtures/lib/registerHelpers/**/*.js',
      raw: {
        helpers: './test/fixtures/lib/registerHelpers/',
        helpersLibrary: 'library'
      }
    },
    {
      helpers: './test/fixtures/lib/registerHelpers/**/*.js',
      raw: {
        helpers: './test/fixtures/lib/registerHelpers/',
        helpersLibrary: 42
      }
    },
    {
      helpers: './test/fixtures/lib/registerHelpers/**/*.js',
      raw: {
        helpers: './test/fixtures/lib/registerHelpers/',
        helpersLibrary: false
      }
    }
  ],

  WithObjectLibrariesOptionsAndInvalidOptions: [
    {
      helpers: './test/fixtures/lib/registerHelpers/**/*.js',
      raw: {
        helpers: './test/fixtures/lib/registerHelpers/',
        helpersLibrary: [
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
        helpersLibrary: [
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
        helpersLibrary: [
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
        helpersLibrary: [
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
        helpersLibrary: [
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
        helpersLibrary: [
          {
            someHelper: () => {},
            anotherHelper: [] // throw an error because not a function.
          }
        ]
      }
    }
  ]
}
