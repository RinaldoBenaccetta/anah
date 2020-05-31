'use strict'

const getPages = require('../../lib/getPages')

const expected = require('../expected/lib/getPages.expected')

// ! folders must be from root of the module and not from the test himself.
const optionsWithPages = {
  pages: './test/fixtures/pages/**/*.{hbs,html,md}',
  raw: {
    showdownOptions: {}
  }
}

const optionsWithoutPages = {
  raw: {
    showdownOptions: {}
  }
}

describe('getPages', () => {
  test('Given a path return an object with content and path of the file.', async () => {
    const pages = await getPages(optionsWithPages)

    expect(pages).toStrictEqual(expected.pages)
  })

  test('With no page folder provided, return null and warn.', async () => {
    const pages = await getPages(optionsWithoutPages)

    console.warn = jest.fn()

    expect(pages).toBeNull()
    expect(console.warn).toHaveBeenCalled()
  })
})
