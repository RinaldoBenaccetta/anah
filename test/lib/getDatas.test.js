const getDatas = require('../../lib/getDatas')

const fixture = require('../fixtures/lib/getDatas.fixture')
const expected = require('../expected/lib/getDatas.expected')

describe('getDatas', () => {
  test('With provided data folder, return an object with the datas and expect two warnings because there is two files with same name. The yml file should overwrite json files with same name.', async () => {
    // mock console.warn
    console.warn = jest.fn()

    const options = fixture.withYmlAndJsonSpecified
    const datas = await getDatas(options)

    expect(datas).toStrictEqual(expected.datasYmlAndJson)
    expect(console.warn).toHaveBeenCalledTimes(2)
  })

  test('With provided data folder searching all files, return only datas from yml and json.', async () => {
    const options = fixture.withNoExtensionSpecified
    const datas = await getDatas(options)

    expect(datas).toStrictEqual(expected.datasYmlAndJson)
  })

  test('With provided data folder that not contain data files, should log a warn.', async () => {
    // mock console.warn
    console.warn = jest.fn()

    const options = fixture.withNoDataFolderSpecified

    await getDatas(options)

    expect(console.warn).toHaveBeenCalled()
  })

  test('With a provided data folder that contain the reserved data name global, throw an error.', () => {
    const options = fixture.withReservedDataFolder

    return expect(getDatas(options)).rejects.toThrow()
  })
})
