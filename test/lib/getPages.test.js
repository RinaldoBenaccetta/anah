const getPages = require('../../lib/getPages')

const expected = require('../expected/lib/getPages.expected')

// ! folders must be from root of the module and not from the test himself.
const options = {
  pages: './test/fixtures/pages/**/*.{hbs,html,md}',
  raw: {
    showdownOptions: {}
  }
}

describe('getPages', () => {
  test('Given a path return an object with content and path of the file.', async () => {
    const pages = await getPages(options)

    expect(pages).toStrictEqual(expected.pages)
  })
})
