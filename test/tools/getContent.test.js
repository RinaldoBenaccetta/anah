const getContent = require('../../tools/getContent')

const expected = require('../expected/partials/getContent.expected')

// ! folders must be from root of the app and not from the test himself
const fixtureFolder = './test/fixtures/partials/**/*.{html,md,hbs}'

describe('getContent', () => {
  test('with valid folder return the content of files, ang get a warning log because two files with same name exists in folder with same names', async () => {
    // mock console.warn
    console.warn = jest.fn()
    const content = await getContent(fixtureFolder)

    expect(content).toStrictEqual(expected)
    expect(console.warn).toHaveBeenCalledTimes(2)
  })
})
