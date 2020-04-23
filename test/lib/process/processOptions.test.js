const processOptions = require('../../../lib/process/processOptions')

const fixture = require('../../fixtures/option')
const expected = require('../../expected/options.expected')

describe('processOptions', () => {
  test('with all options return options ready for glob', () => {
    return expect(processOptions(fixture.valid)).resolves.toStrictEqual(
      expected
    )
  })

  test.each([fixture.invalid])(
    'with omitted value throw an error',
    (options) => {
      return expect(processOptions(options)).rejects.toThrow()
    }
  )
})
