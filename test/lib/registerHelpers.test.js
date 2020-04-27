const registerHelpers = require('../../lib/registerHelpers')
const handlebars = require('handlebars')

const expected = require('../expected/lib/registerHelpers.expected')

describe('registerHelpers', () => {
  test('With Partials, register these partials and log a warning once because there is two helpers with same name', async () => {
    // mock handlebars.registerPartial
    handlebars.registerHelper = jest.fn()
    // mock console.warn
    console.warn = jest.fn()

    const filteredOptions = {
      helpers: './test/fixtures/lib/registerHelpers/**/*.js'
    }

    const options = {
      helpers: './test/fixtures/lib/registerHelpers/'
    }

    await registerHelpers(filteredOptions, options)

    expect(handlebars.registerHelper).toHaveBeenCalledWith(expected.helpers)
    expect(console.warn).toHaveBeenCalledTimes(1)
  })
})
