const compileTemplate = require('../../../lib/process/compileTemplate')
const Handlebars = require('handlebars')

const fixture = require('../../fixtures/lib/process/compileTemplate.fixture')
const expected = require('../../expected/lib/process/compileTemplate.expected')

describe('compileTemplate', () => {
  test('providing valid page source object and layouts object, return a function', async () => {
    const compiledPage = await compileTemplate(fixture.source, fixture.layouts)

    expect(typeof compiledPage).toBe('function')
  })

  test('providing valid page source object and layouts object, call Handlebars.registerPartial and Handlebars.compile', async () => {
    // mock Handlebars function
    Handlebars.registerPartial = jest.fn()
    Handlebars.compile = jest.fn()

    await compileTemplate(fixture.source, fixture.layouts)

    // expect registerPartial called
    expect(Handlebars.registerPartial).toHaveBeenCalledWith(
      'body',
      expected.registerPartial
    )

    // expect compile called
    expect(Handlebars.compile).toHaveBeenLastCalledWith(
      expected.layouts.default
    )
  })
})
