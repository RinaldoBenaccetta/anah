'use strict'

const compileTemplate = require('../../../lib/process/compileTemplate')
const Handlebars = require('handlebars')

const fixture = require('../../fixtures/lib/process/compileTemplate.fixture')
const expected = require('../../expected/lib/process/compileTemplate.expected')

describe('compileTemplate', () => {
  test('With valid page source object and layouts object, return a function', async () => {
    const compiledPage = await compileTemplate(
      fixture.withValidProvidedLayout.source,
      fixture.withValidProvidedLayout.layouts,
      fixture.withValidProvidedLayout.options
    )

    expect(typeof compiledPage).toBe('function')
  })

  test("With valid page and layout that doesn't exist, throw an error", () => {
    return expect(
      compileTemplate(
        fixture.withProvidedLayoutThatDoesntExist.source,
        fixture.withProvidedLayoutThatDoesntExist.layouts,
        fixture.withProvidedLayoutThatDoesntExist.options
      )
    ).rejects.toThrow()
  })

  test("With valid source that have existant layout, call Handlebars.registerPartial with source's content and Handlebars.compile with the provided layout content", async () => {
    // mock Handlebars function
    Handlebars.registerPartial = jest.fn()
    Handlebars.compile = jest.fn()

    await compileTemplate(
      fixture.withValidProvidedLayout.source,
      fixture.withValidProvidedLayout.layouts,
      fixture.withValidProvidedLayout.options
    )

    // expect registerPartial called
    expect(Handlebars.registerPartial).toHaveBeenCalledWith(
      'body',
      expected.withValidProvidedLayout.registerPartial
    )

    // expect compile called
    expect(Handlebars.compile).toHaveBeenLastCalledWith(
      expected.withValidProvidedLayout.layoutContent
    )
  })

  test("With valid source that don't specify layout, call Handlebars.registerPartial with source's content and Handlebars.compile with the default layout content", async () => {
    // mock Handlebars function
    Handlebars.registerPartial = jest.fn()
    Handlebars.compile = jest.fn()

    await compileTemplate(
      fixture.withoutProvidedLayout.source,
      fixture.withoutProvidedLayout.layouts,
      fixture.withoutProvidedLayout.options
    )

    // expect registerPartial called
    expect(Handlebars.registerPartial).toHaveBeenCalledWith(
      'body',
      expected.withoutProvidedLayout.registerPartial
    )

    // expect compile called
    expect(Handlebars.compile).toHaveBeenLastCalledWith(
      expected.withoutProvidedLayout.layoutContent
    )
  })
})
