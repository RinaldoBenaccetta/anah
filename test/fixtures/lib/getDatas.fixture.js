'use strict'

module.exports = {
  withYmlAndJsonSpecified: {
    data: './test/fixtures/datas/**/*.{yml,json}',
    raw: {
      data: ''
    }
  },
  withYmlAndJsonSpecifiedAndVerboseFalse: {
    data: './test/fixtures/datas/**/*.{yml,json}',
    raw: {
      verbose: false,
      data: ''
    }
  },
  withNoExtensionSpecified: {
    data: './test/fixtures/datas/**/*',
    raw: {
      data: ''
    }
  },
  withEmptyDataFolderSpecifiedAndVerboseTrue: {
    data: './test/fixtures/datas/empty/**/*.{yml,json}',
    raw: {
      verbose: true,
      data: ''
    }
  },
  withEmptyDataFolderSpecifiedAndVerboseFalse: {
    data: './test/fixtures/datas/empty/**/*.{yml,json}',
    raw: {
      verbose: false,
      data: ''
    }
  },
  withReservedDataFolder: {
    data: './test/fixtures/datas-reserved/**/*.{yml,json}',
    raw: {
      data: ''
    }
  },
  withDirectData: {
    data: './test/fixtures/datas/**/*.json',
    raw: {
      data: '',
      directData: {
        names: {
          persons: [
            {
              name: 'Sarah Connor',
              age: 34
            },
            {
              name: 'T-800',
              age: 150
            }
          ]
        },
        someData: {
          one: '1',
          two: '2'
        }
      }
    }
  }
}
