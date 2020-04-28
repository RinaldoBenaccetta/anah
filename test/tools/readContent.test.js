const readContent = require('../../tools/readContent')

const expected = require('../expected/tools/readContent.expected')

describe('readContent', () => {
  test('With a path to a non-markdown file, return the content of the file.', async () => {
    const htmlPath = './test/fixtures/pages/holla.html'
    const txtPath = './test/fixtures/pages/text.txt'

    const html = await readContent(htmlPath)

    const txt = await readContent(txtPath)

    expect(html).toStrictEqual(expected.valid.html)
    expect(txt).toStrictEqual(expected.valid.txt)
  })

  test('With a path to a markdown file, return the content of the markdown file converted to HTML.', async () => {
    const mdPath = './test/fixtures/pages/hello.md'
    const markdown = await readContent(mdPath)

    expect(markdown).toStrictEqual(expected.valid.md)
  })
})
