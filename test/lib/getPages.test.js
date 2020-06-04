'use strict'

const getPages = require('../../lib/getPages')

const fixture = require('../fixtures/lib/getPages.fixture')
const expected = require('../expected/lib/getPages.expected')

describe('getPages', () => {
  test('With folderPages and directPages, return them togheter.', async () => {
    const pages = await getPages(fixture.valid)

    expect(pages).toStrictEqual(expected.valid)
  })

  test('With empty folderPages and populated directPages, return directPages.', async () => {
    const pages = await getPages(fixture.validWithEmptyFolder)

    expect(pages).toStrictEqual(expected.validWithEmptyFolder)
  })

  test('With not empty folderPages and no directPages, return folderPages.', async () => {
    const pages = await getPages(fixture.validWithNoDirectPages)

    expect(pages).toStrictEqual(expected.validWithNoDirectPages)
  })

  test('With empty folderPages and no directPages, return empty array.', async () => {
    const pages = await getPages(fixture.validWithNoDirectPagesAndEmptyFolder)

    expect(pages).toStrictEqual([])
  })
})
