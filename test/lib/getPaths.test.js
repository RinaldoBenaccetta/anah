const getPaths = require('../../lib/getPaths.js')

const fixture = require('../fixtures/lib/getPaths.fixture')
const expected = require('../expected/lib/getPaths.expected')

describe('getPaths', () => {
  describe('getRelativePath', () => {
    test('With filePath and pagesRoot, return the relative path.', () => {
      const relativePath = getPaths.geRelativePath(
        fixture.filePath,
        fixture.options
      )

      expect(relativePath).toBe(expected.relativePath)
    })
  })

  describe('getDestinationFolder', () => {
    test('With filepath and pageRoot, return the destination path.', () => {
      const destinationFolder = getPaths.getDestinationFolder(
        fixture.filePath,
        fixture.options
      )

      expect(destinationFolder).toBe(expected.destinationFolder)
    })
  })
})
