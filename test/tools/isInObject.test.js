const isInObject = require('../../tools/isInObject')

const fixture = require('../fixtures/option')

describe('isInObject', () => {
  test('with a key that is in object return true', () => {
    expect(isInObject('datas', fixture.valid)).toBeTruthy()
  })

  test('with a key that is not in object return false', () => {
    expect(isInObject('notHere', fixture.valid)).toBeFalsy()
  })
})
