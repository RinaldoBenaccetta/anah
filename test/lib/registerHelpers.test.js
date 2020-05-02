const registerHelpers = require('../../lib/registerHelpers')
const handlebars = require('handlebars')

const expected = require('../expected/lib/registerHelpers.expected')
const fixture = require('../fixtures/lib/registerHelpers.fixture')

describe('registerHelpers', () => {
  // mock handlebars.registerPartial
  handlebars.registerHelper = jest.fn()
  // mock console.warn
  console.warn = jest.fn()

  test('With helpers and no libraries option, register these helpers and log a warning once because there is two helpers with same name', async () => {
    const options = fixture.withHelpersAndNoLibraries

    await registerHelpers(options)

    expect(handlebars.registerHelper).toHaveBeenCalledWith(
      expected.withHelpersAndNoLibraries
    )
    expect(console.warn).toHaveBeenCalledTimes(1)
  })

  test('With valid helpers libraries option, with one that have same names than in the helpers path, and with two helpers in path that have same names, should warn two times, and register the helpers.', async () => {
    const options = fixture.withHelpersAndLibraries

    await registerHelpers(options)
    expect(handlebars.registerHelper).toHaveBeenCalledWith(
      expected.withHelpersAndLibraries
    )
    expect(console.warn).toHaveBeenCalledTimes(2)
  })

  test('With empty array helpers libraries option, register the helpers.', async () => {
    const options = fixture.withHelpersAndEmptyLibraries

    await registerHelpers(options)
    expect(handlebars.registerHelper).toBeCalledWith(
      expected.withHelpersAndNoLibraries
    )
  })

  test.each([fixture.WithHelpersAndNotValidLibraries])(
    'With libraries option that is an object, with values that are not all function, throw an error.',
    (options) => {
      return expect(registerHelpers(options)).rejects.toThrow()
    }
  )

  test.each([fixture.WithObjectLibrariesOptionsAndInvalidOptions])(
    'With libraries option that is not an object, throw an error.',
    (options) => {
      return expect(registerHelpers(options)).rejects.toThrow()
    }
  )
})
