'use strict'

module.exports = {
  withYmlAndJsonSpecified: {
    data: './test/fixtures/datas/**/*.{yml,json}',
    raw: {
      data: ''
    }
  },
  withNoExtensionSpecified: {
    data: './test/fixtures/datas/**/*',
    raw: {
      data: ''
    }
  },
  withNoDataFolderSpecified: {
    data: './test/fixtures/datas/empty/**/*.{yml,json}',
    raw: {
      data: ''
    }
  },
  withReservedDataFolder: {
    data: './test/fixtures/datas-reserved/**/*.{yml,json}',
    raw: {
      data: ''
    }
  }
}
