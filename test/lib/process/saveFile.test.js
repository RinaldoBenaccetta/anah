const saveFile = require('../../../lib/process/saveFile')
const fse = require('fs-extra')

const fixture = require('../../fixtures/lib/process/saveFile.fixture')
const expected = require('../../expected/lib/process/saveFile.expected')

describe('saveFile', () => {
  // mock fs-extra's outputFile function
  fse.outputFile = jest.fn()
  test('with correct values, save the file and return the destination folder', async () => {
    await saveFile(
      fixture.withWriteOutput.renderedPage,
      fixture.withWriteOutput.destination,
      fixture.withWriteOutput.options
    )

    // expect save with correct arguments
    expect(fse.outputFile).toHaveBeenCalledWith(
      expected.outputFile.destination,
      expected.outputFile.renderedPage
    )
  })

  test('with writeOutput to false, write nothing', async () => {
    await saveFile(
      fixture.withoutWriteOutput.renderedPage,
      fixture.withoutWriteOutput.destination,
      fixture.withoutWriteOutput.options
    )
  })
})
