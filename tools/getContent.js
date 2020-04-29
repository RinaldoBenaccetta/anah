const globby = require('globby')
const getFileName = require('./getFileName')
const log = require('../tools/logger')
const readContent = require('../tools/readContent')

/**
 * @description
 * Array that contain already parsed files.
 */
// eslint-disable-next-line prefer-const
let alreadyParsed = []

/**
 * @function getContent
 *
 * @description
 * Return an object with content of the specified files in string format.
 * If there is multiple files with same names in folders and sub-folders,
 * they will overwrite each others.
 *
 * @param {string} folder The folder to gets content from.
 * @param {string} rawFolder The raw provide folder.
 * @param {object} showdownOptions The options for Showdown.
 *
 * @return {object.<string, string>} An object with the contents.
 */
module.exports = async (folder, rawFolder, showdownOptions) => {
  const glob = await globby(folder)

  const output = {}

  for (const file of glob) {
    // add content from file to the returned object.
    // if undefined , nothing is pushed.
    Object.assign(output, await getContent(file, rawFolder, showdownOptions))
  }

  return output
}

/**
 * @function getContent
 *
 * @description
 * Read an object with a key
 * that is the name of the file (without path and extension)
 * and the content of the file
 *
 * @param {string} file The path of the file.
 * @param {string} rawFolder The raw provide folder.
 * @param {object} showdownOptions The options for Showdown.
 *
 * @return {object.<string, string>}
 * The content with the key that is the name of file.
 */
const getContent = async (file, rawFolder, showdownOptions) => {
  const output = {}
  const fileName = getFileName(file)

  isAlreadyParsed(fileName, rawFolder)
  const fileContent = await readContent(file, showdownOptions)

  output[fileName] = fileContent.content

  return output
}

/**
 * @function isAlreadyParsed
 *
 * @description
 * Verify if fileName is already parsed.
 * If already parsed, log a warning message.
 * If not, add the file name to alreadyParsed array.
 *
 * E.g. : data.yml and data.json are both
 * in the provided folder will log a warning message.
 *
 * @param {string} file The name of the file, without path and extension.
 * @param {string} rawFolder The raw provide folder.
 */
const isAlreadyParsed = (file, rawFolder) => {
  alreadyParsed.includes(file)
    ? alreadyParsedWarning(file, rawFolder)
    : alreadyParsed.push(file)
}

/**
 * @function alreadyParsedWarning
 *
 * @description
 * Format and log the warning message for datas files with same names.
 *
 * @param {string} file The name of the file, without path and extension.
 * @param {string} rawFolder The raw provide folder.
 */
const alreadyParsedWarning = (file, rawFolder) => {
  log.warning(
    // eslint-disable-next-line max-len
    `[${file}] appears more than one time in different format in the provided [${rawFolder}] folder or his sub-folders.\nSome contents could be overwritten.\nTry to avoid to provide multiples content files with same names.\n`
  )
}
