const anah = require('../../lib/anah')
const fse = require('fs-extra')

const fixture = require('../fixtures/option')
const validOptions = fixture.valid

const expected = require('../expected/lib/anah.expected')

// mock fs-extra's outputFile function
fse.outputFile = jest.fn()

describe('anah', () => {
  test('With valid options and 6 pages on the provided pages options, save 6 pages.', async () => {
    await anah(validOptions)

    expect(fse.outputFile).toHaveBeenCalledTimes(expected.pageNumber)
  })

  test('With valid options and 6 pages on the provided pages options, render 6 pages and return them in an object.', async () => {
    const build = await anah(validOptions)

    expect(build).toStrictEqual(expected.output)
  })
})
