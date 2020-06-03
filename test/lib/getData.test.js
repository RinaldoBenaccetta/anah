'use strict'

const getDatas = require('../../lib/getData')

const fixture = require('../fixtures/lib/getDatas.fixture')
const expected = require('../expected/lib/getDatas.expected')

describe('getDatas', () => {
  test('With provided data folder, return an object with the datas and expect two warnings because there is two files with same name. The yml file should overwrite json files with same name.', async () => {
    // mock console.warn
    console.warn = jest.fn()

    const options = fixture.withYmlAndJsonSpecified
    const data = await getDatas(options)

    expect(data).toStrictEqual(expected.datasYmlAndJson)
    expect(console.warn).toHaveBeenCalledTimes(2)
  })

  test('With provided data folder and verbose false, expect no warning', async () => {
    // mock console.warn
    console.warn = jest.fn()

    const options = fixture.withYmlAndJsonSpecifiedAndVerboseFalse

    console.log('log: --------------------')
    console.log('log: options', options)
    console.log('log: --------------------')

    await getDatas(options)
    expect(console.warn).not.toHaveBeenCalled()
  })

  test('With provided data folder searching all files, return only datas from yml and json.', async () => {
    const options = fixture.withNoExtensionSpecified
    const data = await getDatas(options)

    expect(data).toStrictEqual(expected.datasYmlAndJson)
  })

  test('With provided data folder that not contain data files, with verbose at true, should log a warn.', async () => {
    // mock console.warn
    console.warn = jest.fn()

    const options = fixture.withEmptyDataFolderSpecifiedAndVerboseTrue

    await getDatas(options)

    expect(console.warn).toHaveBeenCalled()
  })

  test('With provided data folder that not contain data files, with verbose at false, should not log a warn.', async () => {
    // mock console.warn
    console.warn = jest.fn()

    const options = fixture.withEmptyDataFolderSpecifiedAndVerboseFalse

    await getDatas(options)

    expect(console.warn).not.toHaveBeenCalled()
  })

  test('With a provided data folder that contain the reserved data name global, throw an error.', () => {
    const options = fixture.withReservedDataFolder

    return expect(getDatas(options)).rejects.toThrow()
  })

  test('With a provided data folder and provided directData, returns the data with directData overwrite the first level of the folders ones.', async () => {
    const options = fixture.withDirectData

    const data = await getDatas(options)

    expect(data).toStrictEqual(expected.JsonAndDirectData)
  })

  test('With a provided data folder and directData that is not an object, and verbose at true, log a warning.', async () => {
    // mock console.warn
    console.warn = jest.fn()

    const options = fixture.withDirectDataThatIsNotAnObjectAndVerboseTrue

    await getDatas(options)

    expect(console.warn).toHaveBeenCalledTimes(1)
  })

  test('With a provided data folder and directData that is not an object, and verbose at false, log a warning.', async () => {
    // mock console.warn
    console.warn = jest.fn()

    const options = fixture.withDirectDataThatIsNotAnObjectAndVerboseFalse

    await getDatas(options)

    expect(console.warn).not.toHaveBeenCalled()
  })
})
