'use strict'

const getLayouts = require('../../lib/getLayouts')

const expected = require('../expected/lib/getLayouts.expected')

describe('getLayouts', () => {
  // mock console.warn
  console.warn = jest.fn()

  test('With a path with at least a default layout, return the layouts.', async () => {
    const folders = {
      // ! folders must be from root of the app and not from the test himself.
      layouts: './test/fixtures/layouts/**/*.{html,hbs,md}',
      raw: {
        layouts: './test/fixtures/layouts/'
      }
    }
    const layouts = await getLayouts(folders)

    expect(layouts).toStrictEqual(expected.layouts)
  })

  test('With a folder that not contain default template, log a warning.', async () => {
    const folders = {
      // ! folders must be from root of the app and not from the test himself.
      layouts: './test/fixtures/layouts/without-default/**/*.{html,hbs,md}',
      raw: {
        layouts: './test/fixtures/layouts/without-default/'
      }
    }

    await getLayouts(folders)

    expect(console.warn).toHaveBeenCalled()
  })

  test('With a folder that contain no template, throw an error.', () => {
    const folders = {
      // ! folders must be from root of the app and not from the test himself.
      layouts: './test/fixtures/layouts/empty/**/*.{html,hbs,md}',
      raw: {
        layouts: './test/fixtures/layouts/empty/'
      }
    }

    return expect(getLayouts(folders)).rejects.toThrow()
  })
})
