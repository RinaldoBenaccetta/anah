const getFileName = require('../../tools/getFileName')

describe('getFileName', () => {
  test('with valid path return fileName', () => {
    const file = 'c://myFolder/myFile.html'

    expect(getFileName(file)).toBe('myFile')
  })
})
