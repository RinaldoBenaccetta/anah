const Handlebars = require('handlebars')
const path = require('path')
const glob = require('globby')
const getFileName = require('./tools/getFileName')

/**
 * Register the helpers to Handlebars.
 *
 * @param {object} options
 */
const registerHelpers = async (options) => {
  const files = await glob(options.helpers)
  const filesArray = await processHelpers(files)
  return Handlebars.registerHelper(filesArray)
}

/**
 * Loop through helpers files and returns an object with the names of files
 * and functions found in files.
 *
 * @param {array} helper
 */
const processHelpers = async helpers => {
  const output = {}

  await Promise.all(
    helpers.map(async helper => {
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

const getFullPath = (filePath) => {
  return path.resolve(filePath)
}

module.exports = registerHelpers
