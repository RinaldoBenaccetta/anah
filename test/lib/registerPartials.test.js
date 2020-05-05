'use strict'

const registerPartials = require('../../lib/registerPartials')
const handlebars = require('handlebars')

const expected = require('../expected/lib/registerPartials.expected')

describe('reisterPartials', () => {
  test('With partials that include a partial named body, throw an error', () => {
    const options = {
      partials: './test/fixtures/lib/registerPartials/**/*.{html,hbs,md}',
      // This folder include a body named partial.,
      raw: {
        partials: './test/fixtures/lib/registerPartials/subfolder/'
      }
    }

    return expect(registerPartials(options)).rejects.toThrow()
  })

  test("With partials that don't include body, register the partials with content", async () => {
    // mock handlebars.registerPartial
    handlebars.registerPartial = jest.fn()

    const options = {
      partials:
        './test/fixtures/lib/registerPartials/subfolder/**/*.{html,hbs,md}',
      // This folder don't include a body named partial.
      raw: {
        partials: './test/fixtures/lib/registerPartials/subfolder/'
      }
    }

    await registerPartials(options)

    expect(handlebars.registerPartial).toHaveBeenCalledWith(expected.content)
  })
})
