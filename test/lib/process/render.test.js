'use strict'

const render = require('../../../lib/process/render')
const compileTemplate = require('../../../lib/process/compileTemplate')

const compileFixture = require('../../fixtures/lib/process/compileTemplate.fixture')
const renderFixture = require('../../fixtures/lib/process/render.fixture')
const expected = require('../../expected/lib/process/render.expected')

describe('render', () => {
  test('providing valid page source and layouts, return an expected rendered page', async () => {
    const compiledPage = await compileTemplate(
      compileFixture.withoutProvidedLayout.source,
      compileFixture.withoutProvidedLayout.layouts,
      compileFixture.withoutProvidedLayout.options
    )
    const renderedPage = await render(renderFixture, compiledPage)

    expect(renderedPage).toBe(expected.renderedPage)
  })
})
