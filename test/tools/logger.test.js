'use strict'

const log = require('../../tools/logger')

describe('logger', () => {
  test('Warning with valid string, log a warning', () => {
    console.warn = jest.fn()
    log.warning('alert')
    expect(console.warn).toHaveBeenCalled()
  })
  test('Info with valid string, log info', () => {
    console.info = jest.fn()
    log.info('alert')
    expect(console.info).toHaveBeenCalled()
  })
  test('Error with valid string, log error', () => {
    console.error = jest.fn()
    log.error('alert')
    expect(console.error).toHaveBeenCalled()
  })
})
