const registerPartials = require('../../lib/registerPartials')
const handlebars = require('handlebars')

const expected = require('../expected/lib/registerPartials.expected')

describe('reisterPartials', () => {
  test('With partials that include a partial named body, throw an error', () => {
    // TODO : add support of markdown
    const filteredOptions = {
      partials: './test/fixtures/lib/registerPartials/**/*.{html,hbs}'
      // This folder include a body named partial.
    }

    const options = {
      partials: './test/fixtures/lib/registerPartials/subfolder/'
    }

    // handlebars.registerPartial.mockClear()

    return expect(registerPartials(filteredOptions, options)).rejects.toThrow()
  })

  test("With partials that don't include body, register the partials with content", async () => {
    // mock handlebars.registerPartial
    handlebars.registerPartial = jest.fn()

    // TODO : add support of markdown
    const filteredOptions = {
      partials: './test/fixtures/lib/registerPartials/subfolder/**/*.{html,hbs}'
      // This folder don't include a body named partial.
    }

    const options = {
      partials: './test/fixtures/lib/registerPartials/subfolder/'
    }

    await registerPartials(filteredOptions, options)

    expect(handlebars.registerPartial).toHaveBeenCalledWith(expected.content)
  })
})
