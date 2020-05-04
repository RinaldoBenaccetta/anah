module.exports = {
  withYmlAndJsonSpecified: {
    datas: [
      './test/fixtures/datas/**/*.{yml,json}',
      '!./test/fixtures/datas/reserved/**/*.{yml,json}' // don't use reserved folder
    ],
    raw: {
      datas: ''
    }
  },
  withNoExtensionSpecified: {
    datas: [
      './test/fixtures/datas/**/*',
      '!./test/fixtures/datas/reserved/**/*' // don't use reserved folder
    ],
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
    datas: './test/fixtures/datas/**/*.{yml,json}',
    raw: {
      datas: ''
    }
  }
}
