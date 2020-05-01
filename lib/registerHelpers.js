const handlebars = require('handlebars')
const glob = require('globby')
const getFileName = require('../tools/getFileName')
const getFullPath = require('../tools/getFullPath')
const log = require('../tools/logger')
const echo = require('handlebars-echo')
const handlebarsHelpers = require('handlebars-helpers')()

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
  const files = await glob(options.helpers)
  let helpers = await processHelpers(files, options)

  helpers = await addVendorHelpers(helpers)

  handlebars.registerHelper(helpers)
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
const processHelpers = async (files, options) => {
  const output = {}

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
 * @function addVendorHelpers
 *
 * @description
 * Add Vendor helpers.
 * echo helper : https://www.npmjs.com/package/handlebars-echo
 *
 * @param  {object} helpers The user's helpers.
 *
 * @return {object} The user's helpers and vendor helpers together.
 */
const addVendorHelpers = async (helpers) => {
  // add handlebars-helpers library
  Object.assign(helpers, handlebarsHelpers)

  // add echo library
  helpers.echo = echo

  return helpers
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
    `[${file}] helper appears more than one time in the provided [${folder}] folder and sub-folders.\nSome helpers could be overwritten.\nTry to avoid to provide multiples helpers files with same name.\n`
  )
}
