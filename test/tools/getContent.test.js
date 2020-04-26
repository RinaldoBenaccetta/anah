const getContent = require('../../tools/getContent')

const expected = require('../expected/partials/getContent.expected')

// ! folders must be from root of the app and not from the test himself
const fixtureFolder = './test/fixtures/partials/**/*.{html,md,hbs}'

// TODO : test warning log for multiple files with same name.

describe('getContent', () => {
  test('with valid folder return the content of files', async () => {
    const content = await getContent(fixtureFolder)

    expect(content).toStrictEqual(expected)
  })
})
