'use strict'

const typical = require('typical')
const log = require('../tools/logger')
const isValidPath = require('is-valid-path')

module.exports = async (options) => {
  const directPages = options.raw.directPages
  const verbose = options.raw.verbose

  if (directPages) {
    return processDirectPages(directPages, verbose)
  }

  return null
}

const processDirectPages = async (directPages, verbose) => {
  if (Array.isArray(directPages)) {
    return parseDirectPages(directPages, verbose)
  } else {
    directPageIsNotArrayWarning(verbose)

    return null
  }
}

const parseDirectPages = async (directPages, verbose) => {
  const output = Promise.all(
    directPages.map(async (item) => {
      return await processItem(item, verbose)
    })
  )

  return (await output).filter((item) => item) // filter only not null items
}

const processItem = async (item, verbose) => {
  const path = validatePath(item, verbose)

  if (path) {
    return {
      content: validateContent(item),
      data: validateData(item, path, verbose),
      path: path
    }
  }

  return null // if no path, there is no page, so return null
}

const validateContent = (item) => {
  if (!item.content) {
    return ''
  }

  return item.content
}

const validateData = (item, path, verbose) => {
  if (typical.isPlainObject(item.data)) {
    return item.data
  }

  // if data is invalid : warn and returns null
  invalidDataWarning(path, verbose)

  return null
}

const validatePath = (item, verbose) => {
  if (isValidPath(item.path)) {
    return item.path
  }

  // if path is invalid : warn and returns null
  invalidPathWarning(item.path, verbose)

  return null
}

const invalidPathWarning = (path, verbose) => {
  log.warning(
    // eslint-disable-next-line max-len
    `Provided [${path}] in [directPage] is invalid, the entire page will be skipped.`,
    verbose
  )
}

const invalidDataWarning = (path, verbose) => {
  log.warning(
    // eslint-disable-next-line max-len
    `Provided [data] in [directPage] for the page with path [${path}] is invalid and will be skipped from the page.`,
    verbose
  )
}

const directPageIsNotArrayWarning = (verbose) => {
  log.warning(
    '[directPage] must be an array and the provided one is not an array! [directPage] will be skipped.',
    verbose
  )
}
