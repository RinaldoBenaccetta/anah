'use strict'

const anah = require('../../index')
const log = require('../../tools/logger')
const fse = require('fs-extra')

const fixture = require('../fixtures/option')

const expected = require('../expected/lib/anah.expected')

// mock fs-extra's outputFile function
fse.outputFile = jest.fn(() => Promise.resolve())
console.warn = jest.fn()
log.warning = jest.fn()

// TODO : test with directData

describe('anah', () => {
  test('With nothing to render and verbose true, log a warning and return null.', async () => {
    const build = await anah(fixture.validWithoutPagesFolderAndVerboseTrue)

    expect(build).toBeNull()
    expect(log.warning).toHaveBeenLastCalledWith(
      'There is nothing to render!',
      true
    )
  })

  test('With nothing to render and verbose false, do not log a warning and return null.', async () => {
    log.warning = jest.fn()

    const build = await anah(fixture.validWithoutPagesFolder)

    expect(build).toBeNull()
    expect(console.warn).not.toHaveBeenCalled()
  })

  test('With valid options and 6 pages on the provided pages options and 2 pages in directPages, render 8 pages, return them in an object and saves them.', async () => {
    const build = await anah(fixture.validWithDirectPages)

    expect(build).toStrictEqual(expected.output)
    expect(fse.outputFile).toHaveBeenCalledTimes(expected.pageNumber)
  })

  test('With valid options and 6 pages on the provided pages options, and writeOutput to false, save nothing.', async () => {
    await anah(fixture.validWithWriteOutputFalse)

    expect(fse.outputFile).not.toHaveBeenCalled()
  })
})
