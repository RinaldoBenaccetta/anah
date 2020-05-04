const processOptions = require('../../../lib/process/processOptions')

const fixture = require('../../fixtures/option')
const expected = require('../../expected/options.expected')

describe('processOptions', () => {
  test('with all options, and options with default no specified, return options ready for glob, with default options', () => {
    return expect(processOptions(fixture.valid)).resolves.toStrictEqual(
      expected.default
    )
  })

  test('with all options, and options with default specified, return options ready for glob, with user options instead of default ones', () => {
    return expect(
      processOptions(fixture.validWithDefaultOverride)
    ).resolves.toStrictEqual(expected.user)
  })

  test.each([fixture.invalid.omitedPath])(
    'with omitted values throw an error',
    (options) => {
      return expect(processOptions(options)).rejects.toThrow()
    }
  )

  test.each([fixture.invalid.invalidPath])(
    'with invalid values throw an error',
    (options) => {
      return expect(processOptions(options)).rejects.toThrow()
    }
  )
})
