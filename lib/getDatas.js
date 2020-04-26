const loadJsonFile = require('load-json-file')
const loadYamlFile = require('load-yaml-file')
const globby = require('globby')
const path = require('path')
const getFullPath = require('../tools/getFullPath')
const getFileName = require('../tools/getFileName')
const log = require('../tools/logger')

// TODO : add warning when data folder is empty

/**
 * @description
 * Array that contain already parsed data files.
 */
// eslint-disable-next-line prefer-const
let alreadyParsed = []

/**
 * @function getDatas
 *
 * @description
 * Return an object with datas inside provided data folder.
 *
 * If two files have same name(but with different extension)
 * The .yml one replace properties that are already in the .json one.
 *
 * @param {string} files    The glob to be parsed.
 * @param {object} options  The raw user options.
 *
 * @returns {object} Datas from datas folder.
 */
module.exports = async (files, options) => {
  const glob = await globby(files.datas)

  // eslint-disable-next-line prefer-const
  let output = {}

  for (const file of glob) {
    // add data parsed from file to the returned object.
    // if undefined parsed datas, nothing is pushed.
    Object.assign(output, await parseFile(file))
  }

  // Pass the user given's option because this is the raw one.
  // That's easiest to understand for the user to have his hown parameter
  // instead of the one with extensions added like '**/*.{yml,json}
  isEmptyDataFolder(output, options)

  return output
}

/**
 * @function parseFiles
 *
 * @description
 * Return the parsed file.
 *
 * @param {string} file The file path.
 *
 * @returns {string} The content of the provided file.
 */
const parseFile = async (file) => {
  const fileName = getFileName(file)

  isAlreadyParsed(fileName)
  const extension = await path.extname(file)
  const fullPath = await getFullPath(file)

  if (extension === '.json') {
    return await loadJsonFile(fullPath)
  } else if (extension === '.yml') {
    return await loadYamlFile(fullPath)
  }
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
 */
const isAlreadyParsed = (file) => {
  alreadyParsed.includes(file)
    ? alreadyParsedWarning(file)
    : alreadyParsed.push(file)
}

/**
 * @function alreadyParsedWarning
 *
 * @description
 * Format and log the warning message for datas files with same names.
 *
 * @param {string} file The name of the file, without path and extension.
 */
const alreadyParsedWarning = (file) => {
  log.warning(
    // eslint-disable-next-line max-len
    `[${file}] appears more than one time in different format in the provided "datas" folder.\nSome data items could be overwritten.\nTry to avoid to provide multiples data files with same name but different format.\n`
  )
}

/**
 * @function isEmptyDataFolder
 *
 * @description
 * Check if the provided data folder don't contain .yml or .json files.
 * If there is no data files in the provided folder, log a warning message.
 *
 * @param  {object} output   The object to test.
 * @param  {object} options  The raw user options.
 */
const isEmptyDataFolder = (output, options) => {
  // if output is empty, the folder don't contain datas files.
  if (Object.keys(output).length === 0) {
    emptyDataFolderWarning(options.datas)
  }
}

/**
 * @function emptyDataFolderWarning
 *
 * @description
 * Format and log the warning message for empty data folder.
 *
 * @param  {type} folder {description}
 * @return {type} {description}
 */
const emptyDataFolderWarning = (folder) => {
  log.warning(
    `[${folder}] appears to not contain any valid .yml nor .json files.\n`
  )
}
