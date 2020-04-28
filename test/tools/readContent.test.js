const readContent = require('../../tools/readContent')

const expected = require('../expected/tools/readContent.expected')

describe('readContent', () => {
  test('With a path to a non-markdown file, return the content of the file.', async () => {
    const htmlPath = './test/fixtures/partials/holla.html'
    const txtPath = './test/fixtures/partials/text.txt'

    expect(await readContent(htmlPath)).toBe(expected.valid.html)
    expect(await readContent(txtPath)).toBe(expected.valid.txt)
  })

  test('With a path to a markdown file, return the content of the markdown file converted to HTML.', async () => {
    const mdPath = './test/fixtures/partials/hello.md'

    expect(await readContent(mdPath)).toBe(expected.valid.md)
  })
})
