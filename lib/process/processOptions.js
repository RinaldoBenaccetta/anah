const getLastCharacter = require('../../tools/getLastCharacter')
const isInObject = require('../../tools/isInObject')

// todo: add validation.

/**
 * Extensions that will be added to paths.
 */
const EXTENSIONS = {
  layouts: '.{hbs,html}',
  pages: '.{hbs,html}', // todo: add markdown support
  partials: '.{hbs,html}', // todo: add markdown support
  helpers: '.js',
  datas: '.{yml,json}'
}

/**
 * Properties that need to be provided.
 */
const TO_CHECK = [
  'layouts',
  'pages',
  'partials',
  'helpers',
  'datas',
  'output'
]

/**
 * Paths to rewrite for being ready for glob.
 */
const TO_REWRITE = [
  'layouts',
  'pages',
  'partials',
  'helpers',
  'datas'
]

/**
 * The object that will be returned.
 */
let filteredOptions = {}

/**
 * Check that all options are present and send back the options ready for glob.
 *
 * @param {object} options
 */
module.exports = async (paths) => {
  await checkPaths(paths)
  // add pagesRoot for calculate the output of each files in saveFile.js
  // paths.pagesRoot = await addSlashAtEnd(paths.pages)
  addPagesRoot(paths)
  copyOutput(paths)
  await rewritePaths(paths)
  return filteredOptions
}

/**
 * Check that all needed values are present in the given object.
 * Throw an error if one or more values is not provided.
 *
 * @param {object} options
 */
function checkPaths (paths) {
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
 * Add the provided suffix to the provided folder string.
 *
 * @param {string} folder
 * @param {string} suffix
 */
const addExtension = (folder, suffix) => {
  return addSlashAtEnd(folder) + '**/*' + suffix
}
