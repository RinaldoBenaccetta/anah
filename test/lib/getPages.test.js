const getPages = require('../../lib/getPages')

const expected = require('../expected/lib/getPages.expected')

// ! folders must be from root of the module and not from the test himself.
const path = {
  pages: './test/fixtures/pages/**/*.{hbs,html,md}'
}

describe('getPages', () => {
  test('Given a path return an object with content and path of the file.', async () => {
    const pages = await getPages(path)

    console.log(pages)

    expect(pages).toStrictEqual(expected.pages)
  })
})
