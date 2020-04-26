const getLayouts = require('../../lib/getLayouts')

const expected = require('../expected/lib/getLayouts.expected')

// // ! folders must be from root of the app and not from the test himself
// const fixtureFolder = './test/fixtures/partials/**/*.{html,md,hbs}'

describe('getLayouts', () => {
  test('With a path with at least a default layout, return the layouts.', async () => {
    const options = {
      // ! folders must be from root of the app and not from the test himself.
      // TODO : add markdown support.
      layouts: './test/fixtures/layouts/**/*.{html,hbs}'
    }
    const layouts = await getLayouts(options)

    expect(layouts).toStrictEqual(expected.layouts)
  })

  test('With a folder that not contain default template, log a warning.', async () => {
    // mock console.warn
    console.warn = jest.fn()

    const options = {
      // ! folders must be from root of the app and not from the test himself.
      // TODO : add markdown support.
      layouts: './test/fixtures/layouts/without-default/**/*.{html,hbs}'
    }
    const layouts = await getLayouts(options)
  })

  test('With a folder that contain no template, throw an error.', async () => {
    // mock console.warn
    console.warn = jest.fn()

    const options = {
      // ! folders must be from root of the app and not from the test himself.
      // TODO : add markdown support.
      layouts: './test/fixtures/layouts/empty/**/*.{html,hbs}'
    }
    const layouts = await getLayouts(options)
  })
})
