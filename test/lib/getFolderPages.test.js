'use strict'

const getFolderPages = require('../../lib/getFolderPages')

const fixture = require('../fixtures/lib/getFolderPages.fixture')
const expected = require('../expected/lib/getFolderPages.expected')

console.warn = jest.fn()

describe('getFolderPages', () => {
  test('Given a path return an object with content and path of the file.', async () => {
    const pages = await getFolderPages(fixture.optionsWithPages)

    expect(pages).toStrictEqual(expected.pages)
  })

  test('With no page folder provided and no direct pages, return null', async () => {
    const pages = await getFolderPages(fixture.optionsWithoutPages)

    expect(pages).toBeNull()
  })

  // test('With no page folder provided and directPages that is not an array, return null and warn if verbose is true', async () => {
  //   const pages = await getFolderPages(
  //     fixture.optionsWithoutPagesAndDirectPagesThatIsNotAnObject
  //   )

  //   expect(pages).toBeNull()
  //   expect(console.warn).toBeCalledTimes(1)
  // })
})
