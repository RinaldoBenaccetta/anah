const handlebars = require('handlebars')
const glob = require('globby')
const getFileName = require('../tools/getFileName')
const getFullPath = require('../tools/getFullPath')

// TODO : checks for helpers with same names.

/**
 * @function registerHelper
 *
 * @description
 * Register the helpers to Handlebars.
 *
 * @param  {object} filteredOptions {description}
 */
module.exports = async (filteredOptions) => {
  const files = await glob(filteredOptions.helpers)
  const filesArray = await processHelpers(files)

  handlebars.registerHelper(filesArray)
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
const processHelpers = async (files) => {
  const output = {}

  await Promise.all(
    files.map(async (helper) => {
      output[getFileName(helper)] = await getHelper(helper)
    })
  )

  return output
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
