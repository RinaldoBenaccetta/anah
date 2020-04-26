const getLayouts = require('../../lib/getLayouts')

const expected = require('../expected/lib/getLayouts.expected')

describe('getLayouts', () => {
  // mock console.warn
  console.warn = jest.fn()

  test('With a path with at least a default layout, return the layouts.', async () => {
    const rawOptions = {
      // ! folders must be from root of the app and not from the test himself.
      // TODO : add markdown support.
      layouts: './test/fixtures/layouts/'
    }

    const folders = {
      // ! folders must be from root of the app and not from the test himself.
      // TODO : add markdown support.
      layouts: './test/fixtures/layouts/**/*.{html,hbs}'
    }
    const layouts = await getLayouts(folders, rawOptions)

    expect(layouts).toStrictEqual(expected.layouts)
  })

  test('With a folder that not contain default template, log a warning.', async () => {
    const rawOptions = {
      // ! folders must be from root of the app and not from the test himself.
      // TODO : add markdown support.
      layouts: './test/fixtures/layouts/without-default/'
    }

    const folders = {
      // ! folders must be from root of the app and not from the test himself.
      // TODO : add markdown support.
      layouts: './test/fixtures/layouts/without-default/**/*.{html,hbs}'
    }

    await getLayouts(folders, rawOptions)

    expect(console.warn).toHaveBeenCalled()
  })

  test('With a folder that contain no template, throw an error.', () => {
    const rawOptions = {
      // ! folders must be from root of the app and not from the test himself.
      // TODO : add markdown support.
      layouts: './test/fixtures/layouts/empty/'
    }

    const folders = {
      // ! folders must be from root of the app and not from the test himself.
      // TODO : add markdown support.
      layouts: './test/fixtures/layouts/empty/**/*.{html,hbs}'
    }

    return expect(getLayouts(folders, rawOptions)).rejects.toThrow()
  })
})
