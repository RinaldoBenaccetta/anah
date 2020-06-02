const getDirectPages = require('../../lib/getDirectPages')

const fixture = require('../fixtures/lib/getDirectPages.fixture')
const expected = require('../expected/lib/getDirectPages.expected')

console.warn = jest.fn()

describe('getDirectPages', () => {
  test('With directPages that is not an array, warn a message and return nothing.', async () => {
    const directPages = await getDirectPages(fixture.notAnArray)

    expect(directPages).toBeNull()
    expect(console.warn).toBeCalledTimes(1)
  })

  test('With directPages that is not an array and verbose to false, warn nothing  a message and return nothing.', async () => {
    const directPages = await getDirectPages(fixture.notAnArrayWithVerboseFalse)

    expect(directPages).toBeNull()
    expect(console.warn).not.toBeCalled()
  })

  test('With Valid provided directPages and verbose true, return directPages with no warning', async () => {
    const directPages = await getDirectPages(fixture.valid)

    expect(directPages).toStrictEqual(expected.valid)
  })

  test('With pages containing invalid path and verbose true, return directPages without these pages and warn for theses pages.', async () => {
    const directPages = await getDirectPages(fixture.withInvalidPath)

    expect(directPages).toStrictEqual(expected.withInvalidPath)
    expect(console.warn).toBeCalledTimes(4)
  })

  test('With pages containing invalid path and verbose false, return directPages without these pages.', async () => {
    const directPages = await getDirectPages(
      fixture.withInvalidPathAndVerboseFalse
    )

    expect(directPages).toStrictEqual(expected.withInvalidPath)
    expect(console.warn).not.toBeCalled()
  })

  test('With pages that containing invalid data and verbose true, return null data for theses pages and warn for invalid data.', async () => {
    const directPages = await getDirectPages(fixture.withInvalidData)

    expect(directPages).toStrictEqual(expected.withInvalidData)
    expect(console.warn).toBeCalledTimes(4)
  })

  test('With pages that containing invalid data and verbose false, return null data for theses pages and warn for invalid data.', async () => {
    const directPages = await getDirectPages(
      fixture.withInvalidDataAndVerboseFalse
    )

    expect(directPages).toStrictEqual(expected.withInvalidData)
    expect(console.warn).not.toBeCalled()
  })

  test('With items in direct pages that are not object and verbose true, warn and do not return theses items.', async () => {
    const directPages = await getDirectPages(
      fixture.withInvalidItemsInDirectPages
    )

    expect(directPages).toStrictEqual(expected.withInvalidItemsInDirectPages)
    expect(console.warn).toBeCalledTimes(3)
  })
})
