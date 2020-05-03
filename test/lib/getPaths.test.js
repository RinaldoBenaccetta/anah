const getPaths = require('../../lib/getPaths.js')

const fixture = require('../fixtures/lib/getPaths.fixture')
const expected = require('../expected/lib/getPaths.expected')

describe('getPaths', () => {
  describe('getRelatives', () => {
    test('With filePath and pagesRoot, return the relative path, the folder depth and the root in an array.', () => {
      const relativePath = getPaths.getRelatives(
        fixture.filePath,
        fixture.options
      )

      expect(relativePath).toStrictEqual(expected.relativePath)
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
