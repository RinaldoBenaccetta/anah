const getPages = require('../../lib/getPages')

const expected = require('../expected/lib/getPages.expected')

// ! folders must be from root of the module and not from the test himself.
const path = {
  // TODO : add markdown support
  pages: './test/fixtures/pages/**/*.{hbs,html}'
}

describe('getPages', () => {
  test('Given a path return an object with content and path of the file.', async () => {
    const pages = await getPages(path)

    expect(pages).toStrictEqual(expected.pages)
  })
})
