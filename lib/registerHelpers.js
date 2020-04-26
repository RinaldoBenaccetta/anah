const Handlebars = require('handlebars')
const glob = require('globby')
const getFileName = require('../tools/getFileName')
const getFullPath = require('../tools/getFullPath')

// TODO : checks for helpers with same names.

/**
 * Register the helpers to Handlebars.
 *
 * @param {object} filteredOptions
 */
const registerHelpers = async (filteredOptions) => {
  const files = await glob(filteredOptions.helpers)
  const filesArray = await processHelpers(files)

  return Handlebars.registerHelper(filesArray)
}

/**
 * Loop through helpers files and returns an object with the names of files
 * and functions found in files.
 *
 * @param {array} helper
 */
const processHelpers = async (helpers) => {
  const output = {}

  await Promise.all(
    helpers.map(async (helper) => {
      output[getFileName(helper)] = await getHelper(helper)
    })
  )

  return output
}

/**
 * Return the function from specified file.
 *
 * @param {string} filePath
 */
const getHelper = async (filePath) => {
  const fullPath = getFullPath(filePath)
  const helper = await requireHelper(fullPath)

  return helper
}

const requireHelper = (fullPath) => {
  return require(fullPath)
}

module.exports = registerHelpers
