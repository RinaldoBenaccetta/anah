const getContent = require('../../lib/tools/getContent')

const expected = require('../expected/partials/getContent.expected')

// ! folders must be from root of the app and not from the test himself
const fixtureFolder = './test/fixtures/partials/**/*.{html,md,hbs}'

describe('getContent', () => {
  test('with valid folder return the content of files', async () => {
    const content = await getContent(fixtureFolder)
    expect(content).toStrictEqual(expected)
  })
})
