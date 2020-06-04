'use strict'

const typical = require('typical')
const log = require('../tools/logger')
const isValidPath = require('is-valid-path')

/**
 * @function getDirectPages
 *
 * @description
 * If directPages is provided and is an array, validate provided content,
 * data and path, and returns it. Else return null.
 *
 * @param {object} options
 * The options with folders ready for glob and raw options.
 *
 * @returns {object[]}
 * An array of objects representing the pages ready to be rendered
 * or empty array.
 */
module.exports = async (options) => {
  const directPages = options.raw.directPages
  const verbose = options.raw.verbose

  if (directPages) {
    const output = await processDirectPages(directPages, verbose)

    // if output array is empty return null
    // if (output && output.length > 0) {
    //   return output
    // }

    return output
  }

  // return null
  return []
}

/**
 * @function processDirectPages
 *
 * @description
 * Check if provided directPages is an array and parse it.
 * If is not an array, warn and return null.
 *
 * @param {object} directPages The object provided by user, representing pages.
 * @param {boolean} verbose Define if is verbose mode or not.
 *
 * @returns {object[]}
 * An array of objects representing the pages ready to be rendered
 * or empty array.
 */
const processDirectPages = async (directPages, verbose) => {
  if (Array.isArray(directPages)) {
    return parseDirectPages(directPages, verbose)
  } else {
    directPageIsNotArrayWarning(verbose)

    return []
  }
}

/**
 * @function parseDirectPages
 *
 * @description
 * Parse directPages and return it filtered.
 *
 * @param {object} directPages The object provided by user, representing pages.
 * @param {boolean} verbose Define if is verbose mode or not.
 *
 * @returns {object[]}
 * An array of objects representing the pages ready to be rendered.
 */
const parseDirectPages = async (directPages, verbose) => {
  const output = Promise.all(
    directPages.map(async (item) => {
      return await processItem(item, verbose)
    })
  )

  return (await output).filter((item) => item) // filter only not null items
}

/**
 * @function processItem
 *
 * @description
 * Validate an item from directPages.
 * If is not a plain object : warn and return null.
 * If path is invalid : warn and return null.
 * Else : validate provided data and content and return the validated item.
 *
 * @param {object} item The page provided by user in directPages.
 * @param {boolean} verbose Define if is verbose mode or not.
 *
 * @returns {object|null}
 * An object representing the page or null.
 */
const processItem = async (item, verbose) => {
  if (!isValidItemInDirectPages(item)) {
    invalidItemInDirectPageWarning(verbose)

    return null
  }

  const path = validatePath(item, verbose)

  if (path) {
    return {
      content: validateContent(item, path, verbose),
      data: validateData(item, path, verbose),
      path: path
    }
  }

  return null // if no path, there is no page, so return null
}

/**
 * @function isValidItemInDirectPages
 *
 * @description
 * Check if provided item is plain object.
 *
 * @param {object} item The page provided by user in directPages.
 *
 * @returns {boolean}
 */
const isValidItemInDirectPages = (item) => {
  if (typical.isPlainObject(item)) {
    return true
  }

  return false
}

/**
 * @function validateContent
 *
 * @description
 * Check the content.
 * Return empty string if provided one is null or not a string.
 * Else return the provided content.
 *
 * @param {object}  item    The page provided by user in directPages.
 * @param {string}  path    The path provided by user.
 * @param {boolean} verbose Define if is verbose mode or not.
 *
 * @returns {any} The provided content validated.
 */
const validateContent = (item, path, verbose) => {
  if (!item.content || !typical.isString(item.content)) {
    invalidContentWarning(path, verbose)

    return ''
  }

  return item.content
}

/**
 * @function validateData
 *
 * @description
 * Check the data.
 * Returns null and warn if is not a plain object.
 *
 * @param {object}  item    The page provided by user in directPages.
 * @param {string}  path    The path provided by user.
 * @param {boolean} verbose Define if is verbose mode or not.
 *
 * @returns {object|null} Returns data or null.
 */
const validateData = (item, path, verbose) => {
  if (typical.isPlainObject(item.data)) {
    return item.data
  }

  // if data is invalid : warn and returns null
  invalidDataWarning(path, verbose)

  return null
}

/**
 * @function validatePath
 *
 * @description
 * Check the path.
 * Returns null and warn if is not a valid path.
 *
 * @param {object} item The page provided by user in directPages.
 * @param {boolean} verbose Define if is verbose mode or not.
 *
 * @returns {string|null} Returns path or null.
 */
const validatePath = (item, verbose) => {
  if (isValidPath(item.path)) {
    return item.path
  }

  // if path is invalid : warn and returns null
  invalidPathWarning(item.path, verbose)

  return null
}

/**
 * @function invalidContentWarning
 *
 * @description
 * Log a warning for invalid content.
 *
 * @param {string} path The path provided by user.
 * @param {boolean} verbose Define if is verbose mode or not.
 */
const invalidContentWarning = (path, verbose) => {
  log.warning(
    // eslint-disable-next-line max-len
    `Content provided with path [${path}] in [directPage] is invalid string, content for this page will be replaced by an empty string.`,
    verbose
  )
}

/**
 * @function invalidItemInDirectPageWarning
 *
 * @description
 * Log a warning for invalid page.
 *
 * @param {boolean} verbose Define if is verbose mode or not.
 */
const invalidItemInDirectPageWarning = (verbose) => {
  log.warning(
    'An item in provided [directPages] is not an object and will be skipped.',
    verbose
  )
}

/**
 * @function invalidPathWarning
 *
 * @description
 * Log a warning for invalid path.
 *
 * @param {string} path The path provided by user.
 * @param {boolean} verbose Define if is verbose mode or not.
 */
const invalidPathWarning = (path, verbose) => {
  log.warning(
    // eslint-disable-next-line max-len
    `Provided [${path}] in [directPage] is invalid, the entire page will be skipped.`,
    verbose
  )
}

/**
 * @function invalidDataWarning
 *
 * @description
 * Log a warning for invalid data.
 *
 * @param {string} path The path provided by user.
 * @param {boolean} verbose Define if is verbose mode or not.
 */
const invalidDataWarning = (path, verbose) => {
  log.warning(
    // eslint-disable-next-line max-len
    `Provided [data] in [directPage] for the page with path [${path}] is invalid and will be skipped from the page.`,
    verbose
  )
}

/**
 * @function directPageIsNotArrayWarning
 *
 * @description
 * Log a warning for invalid directPage.
 *
 * @param {boolean} verbose Define if is verbose mode or not.
 */
const directPageIsNotArrayWarning = (verbose) => {
  log.warning(
    '[directPage] must be an array and the provided one is not an array! [directPage] will be skipped.',
    verbose
  )
}
