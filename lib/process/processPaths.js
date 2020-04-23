const getLastCharacter = require('../../tools/getLastCharacter')
const isInObject = require('../../tools/isInObject')

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
 * Check that all options are present and send back the options ready for glob.
 *
 * @param {object} options
 */
module.exports = async (paths) => {
  await checkPaths(paths)
  const output = await rewritePaths(paths)
  return output
}

/**
 * Check that all needed values are present in the given object.
 * Throw an error if one or more values is not provided.
 *
 * @param {object} options
 */
function checkPaths (paths) {
  return new Promise((resolve, reject) => {
    Object.keys(EXTENSIONS).forEach(async (key) => {
      if (!isInObject(key, paths)) {
        reject(
          Error(`Paths provided to build function need the "${key}" folder.`)
        )
      }
    })
    resolve()
  })
}

/**
 * Add the according extension to each folder paths.
 *
 * @param {object} options
 */
const rewritePaths = async (paths) => {
  Object.keys(paths).forEach(async (key) => {
    paths[key] = await addExtension(paths[key], EXTENSIONS[key])
  })
  return paths
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
