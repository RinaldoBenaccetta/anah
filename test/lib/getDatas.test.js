const getDatas = require('../../lib/getDatas')

const expected = require('../expected/lib/getDatas.expected')

describe('getDatas', () => {
  test('With provided data folder, return an object with the datas and expect two warnings because there is two files with same name. The yml file should overwrite json files with same name.', async () => {
    // mock console.warn
    console.warn = jest.fn()

    const options = {
      datas: './test/fixtures/datas/**/*.{yml,json}',
      raw: {
        datas: './test/fixtures/datas/'
      }
    }

    const datas = await getDatas(options)

    expect(datas).toStrictEqual(expected.datas)
    expect(console.warn).toHaveBeenCalledTimes(2)
  })
  test('With provided data folder that not contain data files, should log a warn.', async () => {
    // mock console.warn
    console.warn = jest.fn()

    const options = {
      datas: './test/fixtures/datas/empty/**/*.{yml,json}',
      raw: {
        datas: './test/fixtures/datas/empty/'
      }
    }

    await getDatas(options)

    expect(console.warn).toHaveBeenCalled()
  })
})
