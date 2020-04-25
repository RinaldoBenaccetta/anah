const getLastCharacter = require('../../tools/getLastCharacter')

describe('getLastCharacter', () => {
  test('with valid string return last character', () => {
    const string = 'Hello world !'

    expect(getLastCharacter(string)).toBe('!')
  })
})
