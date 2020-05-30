'use strict'

const getLastCharacter = require('../../tools/getLastCharacter')
const isInObject = require('../../tools/isInObject')
const isValidPath = require('is-valid-path')

/**
 * @description
 * Extensions that will be added to paths.
 */
const EXTENSIONS = {
  layouts: '.{hbs,html,md}',
  pages: '.{hbs,html,md}',
  partials: '.{hbs,html,md}',
  helpers: '.js',
  data: '.{yml,json}'
}

/**
 * @description
 * Properties that need to be provided.
 */
const TO_CHECK = ['layouts',
  'pages',
  'partials',
  'helpers',
  'data',
  'output']

/**
 * @description
 * Paths to rewrite for being ready for glob.
 */
const TO_REWRITE = ['layouts',
  'pages',
  'partials',
  'helpers',
  'data']

/**
 * The object that will be returned.
 */
const filteredOptions = {
  // Define the default options here.
  raw: {
    writeOutput: true, // write the output by default.
    verbose: false // verbose false by default
  }
}

/**
 * @function processOptions
 *
 * @description
 * Check that all options are present and send back the options ready for glob.
 *
 * @param {object} options The raw options provided by the user.
 *
 * @returns {object} The filtered options.
 */
module.exports = async (options) => {
  await checkPathsPresence(options)
  await checkValidPaths(options)
  await optionsToRaw(options)
  addPagesRoot(options)
  copyOutput(options)
  await rewritePaths(options)

  return filteredOptions
}

/**
 * @function optionsToRaw
 *
 * @description
 * Puts the raw user options in a raw property.
 *
 * @param  {object} options The raw user options.
 */
const optionsToRaw = (options) => {
  // filteredOptions.raw = options
  Object.assign(filteredOptions.raw, options)
}

/**
 * @function checkValidPaths
 *
 * @description
 * Check if provided options are valid paths.
 * If an option is an invalid path, return an Error that specify
 * the invalid value.
 *
 * @param  {object} paths options The raw options provided by the user.
 *
 * @return {Promise} Return nothing or an Error.
 */
const checkValidPaths = (paths) => {
  return new Promise((resolve, reject) => {
    TO_CHECK.forEach(async (key) => {
      if (!isValidPath(paths[key])) {
        reject(Error(`[${key}] provided to build function is invalid.`))
      }
    })
    resolve()
  })
}

/**
 * @function checkPathsPresence
 *
 * @description
 * Checks that all needed values are present in the given object.
 * Throws an error if one or more values is not provided.
 *
 * @param {object} options The raw options provided by the user.
 *
 * @returns {promise} Return nothing or an Error.
 */
function checkPathsPresence (paths) {
  return new Promise((resolve, reject) => {
    TO_CHECK.forEach(async (key) => {
      // if the key in array is not in the paths, throw an error
      if (!isInObject(key, paths)) {
        reject(
          Error(`Paths provided to build function need the [${key}] folder.`)
        )
      }
    })
    resolve()
  })
}

/**
 * @function addPagesRoot
 *
 * @description
 * Add the pages root folder.
 * That would be used for calculate the destination folder
 * when save rendered page.
 *
 * @param  {string} paths The raw options provided by the user.
 */
const addPagesRoot = (paths) => {
  filteredOptions.pagesRoot = addSlashAtEnd(paths.pages)
}

/**
 * @function copyOutput
 *
 * @description
 * Copy the output folder(provided by user) to the filteredOptions.
 *
 * @param  {string} paths The raw options provided by the user.
 */
const copyOutput = (paths) => {
  filteredOptions.output = paths.output
}

/**
 * @function rewritePaths
 *
 * @description
 * Add the according extension to each folder paths in the filtered Options.
 *
 * @param {object} options The raw options provided by the user.
 */
const rewritePaths = async (options) => {
  // rewrite output folder
  filteredOptions.output = addSlashAtEnd(options.output)

  // rewrite pages, partials, helpers, datas, layouts folders.
  Object.keys(options).forEach(async (key) => {
    // if key is in TO_REWRITE, rewrite the path.
    if (TO_REWRITE.includes(key)) {
      filteredOptions[key] = await globify(options[key], EXTENSIONS[key])
    }
  })
}

/**
 * @function addSlashAtEnd
 *
 * @description
 * If a slash is not present at the end of the string, add it.
 *
 * @param {string} folder A folder path.
 *
 * @returns {string} A path with a slash at the end.
 */
const addSlashAtEnd = (folder) => {
  if (getLastCharacter(folder) === '/') {
    return folder
  }

  return folder + '/'
}

/**
 * @function globify
 *
 * @description
 * Add the provided suffix to the provided folder string.
 *
 * @param {string} folder The path of the folder.
 * @param {string} suffix The suffix to add.
 *
 * @returns {string} A Path ready for glob.
 */
const globify = (folder, suffix) => {
  return addSlashAtEnd(folder) + '**/*' + suffix
}
