const getDatas = require('../../lib/getDatas')

const expected = require('../expected/lib/getDatas.expected')

const files = {
  datas: './test/fixtures/datas/'
}

describe('getDatas', () => {
  test('With provided data folder, return an object with the datas and expect two warnings because there is two files with same name. The yml file should overwrite json files with same name.', async () => {
    // mock console.warn
    console.warn = jest.fn()

    const datas = await getDatas(files)

    expect(datas).toStrictEqual(expected.datas)
    expect(console.warn).toHaveBeenCalledTimes(2)
  })
})
