'use strict'

const handlebars = require('handlebars')
const glob = require('globby')
const getFileName = require('../tools/getFileName')
const getFullPath = require('../tools/getFullPath')
const log = require('../tools/logger')
const type = require('typical')

/**
 * @description
 * Array that contain already parsed helpers files.
 */
// eslint-disable-next-line prefer-const
let alreadyParsed = []

/**
 * @function registerHelper
 *
 * @description
 * Register the helpers to Handlebars.
 *
 * @param  {object} options The filtered and raw user options.
 */
module.exports = async (options) => {
  const helpers = await processHelpers(options)

  // register all the helpers to handlebars.
  handlebars.registerHelper(helpers)
}

/**
 * @function processHelpers
 *
 * @description
 * Get helpers from provided libraries and from the helpers path,
 * and register them.
 *
 * @param  {object} options {description}
 *
 * @return {object}
 * All the helpers from provided user libraries and provided helpers path.
 */
const processHelpers = async (options) => {
  // get the helpers of provided helpers libraries.
  const helpers = await processHelpersLibrary(options)

  // Put library helpers to already parsed so they warn
  // if user add an helper with same name.
  initAlreadyParsed(helpers)

  // add helpers from user.
  const UserHelpers = await processUserHelpers(options)

  // merge user's helpers and libraries helpers.
  await Object.assign(helpers, UserHelpers)

  return helpers
}

/**
 * @function processHelpersLibrary
 *
 * @description
 * Return the helpers library from the user.
 *
 * @param  {object} options The filtered and raw user options.
 *
 * @return {object} The library helpers
 */
const processHelpersLibrary = async (options) => {
  const helpers = {}
  const libraries = options.raw.helpersLibraries

  return new Promise((resolve, reject) => {
    if (isInvalidHelpersLibraries(libraries)) {
      reject(
        Error(
          'Provided helpersLibrary is invalid. helpersLibrary should be an array of Object.'
        )
      )
    }
    if (isLoopArray(libraries)) {
      for (const library of libraries) {
        if (!isValidLibrary(library)) {
          reject(
            Error(
              // eslint-disable-next-line max-len
              `Invalid library. Libraries should be objects with property values as helper function.\nProvided library :\n${library}`
            )
          )
        }
        Object.assign(helpers, library)
      }
    }
    resolve(helpers)
  })
}

/**
 * @function isLoopArray
 *
 * @description
 * Check if libraries is an array that can be looped.
 *
 * @param  {array} libraries The provided libraries.
 *
 * @return {boolean} Return true if libraries can be looped.
 */
const isLoopArray = (libraries) => {
  if (Array.isArray(libraries)) {
    if (libraries.length > 0) {
      return true
    }
  }

  return false
}

/**
 * @function isInvalidHelpersLibraries
 *
 * @description
 * Check if helpers libraries are array or null or undefined.
 * If is array or null or undefined, than there is no error, return false.
 *
 * @param  {array} libraries The helpers libraries.
 *
 * @return {boolean}
 * Return true if helpers libraries is not array, null or undefined.
 */
const isInvalidHelpersLibraries = (libraries) => {
  if (
    (Array.isArray(libraries) && !type.isString(libraries)) ||
    type.isNull(libraries) ||
    type.isUndefined(libraries)
  ) {
    return false
  }

  return true
}

/**
 * @function isValidLibrary
 *
 * @description
 * Check if provided library is an object and if all values are functions.
 *
 * @param  {object} library A library of helpers.
 *
 * @return {boolean} True if is a valid library.
 */
const isValidLibrary = (library) => {
  if (type.isPlainObject(library) && isValidLibraryProperties(library)) {
    return true
  }

  return false
}

/**
 * @function isValidLibraryProperties
 *
 * @description
 * Check if all properties of the library object are function.
 *
 * @param  {object} library A library of helpers.
 *
 * @return {boolean} Return true if all properties are function.
 */
const isValidLibraryProperties = (library) => {
  for (const key in library) {
    if (!type.isFunction(library[key])) {
      return false
    }
  }

  return true
}

/**
 * @function processHelpers
 *
 * @description
 * Loop through helpers files and returns an object with the names of files
 * and functions found in files.
 *
 * @param  {string[]} files The files containing the helpers
 *
 * @return {object} An object with names and function.
 */
const processUserHelpers = async (options) => {
  const output = {}
  const files = await glob(options.helpers)

  await Promise.all(
    files.map(async (helper) => {
      const fileName = await getFileName(helper)

      isAlreadyParsed(fileName, options.raw.helpers)
      output[fileName] = await getHelper(helper)
    })
  )

  return output
}

/**
 * @function initAlreadyParsed
 *
 * @description
 * Add all vendorHelper's to alreadyParsed.
 * To use before load user's helpers.
 *
 * @param  {object} helpers The vendor helpers.
 */
const initAlreadyParsed = (helpers) => {
  alreadyParsed = Object.keys(helpers)
}

/**
 * @function getHelper
 *
 * @description
 * Returns the function from specified file.
 *
 * @param  {string} filePath The path of the helper
 * @return {function} The function in the provided helper path.
 */
const getHelper = async (filePath) => {
  const fullPath = getFullPath(filePath)
  const helper = await requireHelper(fullPath)

  return helper
}

/**
 * @function requireHelper
 *
 * @description
 * Returns the function from the provided full path.
 * Require need the full path, since the relative path provided to require
 * is from actual file instead of the user file that called anah.
 *
 * @param  {string} fullPath The full path to the helper.
 *
 * @return {function} The function from the full path's file.
 */
const requireHelper = (fullPath) => {
  return require(fullPath)
}

/**
 * @function isAlreadyParsed
 *
 * @description
 * Verify if fileName is already parsed.
 * If already parsed, log a warning message.
 * If not, add the file name to alreadyParsed array.
 *
 * E.g. : myHelper.js and myHelper.js are in helpers folder and his sub-folders
 * will log a warning message.
 *
 * @param {string} file The name of the file, without path and extension.
 */
const isAlreadyParsed = (file, folder) => {
  alreadyParsed.includes(file)
    ? alreadyParsedWarning(file, folder)
    : alreadyParsed.push(file)
}

/**
 * @function alreadyParsedWarning
 *
 * @description
 * Format and log the warning message for helpers files with same names.
 *
 * @param {string} file The name of the file, without path and extension.
 */
const alreadyParsedWarning = (file, folder) => {
  log.warning(
    // eslint-disable-next-line max-len
    `[${file}] helper appears more than one time in the provided [${folder}] folder and sub-folders or/and provided helpers libraries.\nSome helpers could be overwritten.\nTry to avoid to provide multiples helpers files with same name.\n`
  )
}
