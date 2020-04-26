const saveFile = require('../../../lib/process/saveFile')
const fse = require('fs-extra')

const fixture = require('../../fixtures/lib/process/saveFile.fixture')
const expected = require('../../expected/lib/process/saveFile.expected')

describe('saveFile', () => {
  test('with correct values, save the file and return the destination folder', async () => {
    // mock fs-extra's outputFile function
    fse.outputFile = jest.fn()

    const destination = await saveFile(
      fixture.renderedPage,
      fixture.sourcePage,
      fixture.options
    )

    // expect save with correct arguments
    expect(fse.outputFile).toHaveBeenCalledWith(
      expected.outputFile.destination,
      expected.outputFile.renderedPage
    )
    // expect return correct destination
    expect(destination).toBe(expected.destination)
  })
})
