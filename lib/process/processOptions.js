const getLastCharacter = require('../../tools/getLastCharacter')
const isInObject = require('../../tools/isInObject')
const isValidPath = require('is-valid-path')

/**
 * @description
 * Extensions that will be added to paths.
 */
const EXTENSIONS = {
  layouts: '.{hbs,html}',
  pages: '.{hbs,html}', // TODO: add markdown support
  partials: '.{hbs,html}', // TODO: add markdown support
  helpers: '.js',
  datas: '.{yml,json}'
}

/**
 * @description
 * Properties that need to be provided.
 */
const TO_CHECK = ['layouts',
  'pages',
  'partials',
  'helpers',
  'datas',
  'output']

/**
 * @description
 * Paths to rewrite for being ready for glob.
 */
const TO_REWRITE = ['layouts',
  'pages',
  'partials',
  'helpers',
  'datas']

/**
 * The object that will be returned.
 */
const filteredOptions = {}

/**
 * @description
 * Check that all options are present and send back the options ready for glob.
 *
 * @param {object} options
 */
module.exports = async (paths) => {
  await checkPathsPresence(paths)
  await checkValidPaths(paths)
  addPagesRoot(paths)
  copyOutput(paths)
  await rewritePaths(paths)
  return filteredOptions
}

const checkValidPaths = (paths) => {
  return new Promise((resolve, reject) => {
    TO_CHECK.forEach(async (key) => {
      if (!isValidPath(paths[key])) {
        reject(Error(`"${key}" provided to build function is invalid.`))
      }
    })
    resolve()
  })
}

/**
 * @description
 * Checks that all needed values are present in the given object.
 * Throws an error if one or more values is not provided.
 *
 * @param {object} options
 */
function checkPathsPresence (paths) {
  return new Promise((resolve, reject) => {
    TO_CHECK.forEach(async (key) => {
      // if the key in array is not in the paths, throw an error
      if (!isInObject(key, paths)) {
        reject(
          Error(`Paths provided to build function need the "${key}" folder.`)
        )
      }
    })
    resolve()
  })
}

const addPagesRoot = (paths) => {
  filteredOptions.pagesRoot = addSlashAtEnd(paths.pages)
}

const copyOutput = (paths) => {
  filteredOptions.output = paths.output
}

/**
 * @description
 * Add the according extension to each folder paths.
 *
 * @param {object} options
 */
const rewritePaths = async (paths) => {
  Object.keys(paths).forEach(async (key) => {
    // if key is in TO_REWRITE, rewrite the path.
    if (TO_REWRITE.includes(key)) {
      filteredOptions[key] = await addExtension(paths[key], EXTENSIONS[key])
    }
  })
}

/**
 * @description
 * If a slash is not present at the end of the string, add it.
 *
 * @param {string} folder
 */
const addSlashAtEnd = (folder) => {
  if (getLastCharacter(folder) === '/') {
    return folder
  }
  return folder + '/'
}

/**
 * @description
 * Add the provided suffix to the provided folder string.
 *
 * @param {string} folder
 * @param {string} suffix
 */
const addExtension = (folder, suffix) => {
  return addSlashAtEnd(folder) + '**/*' + suffix
}
