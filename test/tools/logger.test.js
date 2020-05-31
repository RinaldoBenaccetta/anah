'use strict'

const log = require('../../tools/logger')

describe('logger', () => {
  test('Warning with valid string, log a warning', () => {
    console.warn = jest.fn()
    log.warning('alert')
    expect(console.warn).toHaveBeenCalled()
  })
  test("Warning with valid string, and verbose false doesn't log a warning", () => {
    console.warn = jest.fn()
    log.warning('alert', false)
    expect(console.warn).not.toHaveBeenCalled()
  })
  test('Info with valid string, log info', () => {
    console.info = jest.fn()
    log.info('alert')
    expect(console.info).toHaveBeenCalled()
  })
  test("Info with valid string, and verbose false doesn't log an info", () => {
    console.info = jest.fn()
    log.info('alert', false)
    expect(console.info).not.toHaveBeenCalled()
  })
  test('Error with valid string, log error', () => {
    console.error = jest.fn()
    log.error('alert')
    expect(console.error).toHaveBeenCalled()
  })
  test('Done with valid string, log', () => {
    console.log = jest.fn()
    log.done('alert')
    expect(console.log).toHaveBeenCalled()
  })
  test("Done with valid string, and verbose false doesn't log a log", () => {
    console.log = jest.fn()
    log.done('alert', false)
    expect(console.log).not.toHaveBeenCalled()
  })
})
