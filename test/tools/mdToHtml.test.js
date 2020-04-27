const mdToHtml = require('../../tools/mdToHtml')

const fixture = require('../fixtures/tools/mdToHtml.fixture')
const expected = require('../expected/tools/mdToHtml.expected')

describe('mdToHtml', () => {
  test('With markdown, return correct HTML.', async () => {
    expect(await mdToHtml(fixture.validMarkdown)).toBe(expected.validMarkdown)
  })
})
