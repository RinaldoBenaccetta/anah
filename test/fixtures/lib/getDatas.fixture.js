'use strict'

module.exports = {
  withYmlAndJsonSpecified: {
    datas: './test/fixtures/datas/**/*.{yml,json}',
    raw: {
      datas: ''
    }
  },
  withNoExtensionSpecified: {
    datas: './test/fixtures/datas/**/*',
    raw: {
      datas: ''
    }
  },
  withNoDataFolderSpecified: {
    datas: './test/fixtures/datas/empty/**/*.{yml,json}',
    raw: {
      datas: ''
    }
  },
  withReservedDataFolder: {
    datas: './test/fixtures/datas-reserved/**/*.{yml,json}',
    raw: {
      datas: ''
    }
  }
}
