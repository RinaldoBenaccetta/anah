'use strict'

const loadJsonFile = require('load-json-file')
const loadYamlFile = require('load-yaml-file')
const globby = require('globby')
const path = require('path')
const getFullPath = require('../tools/getFullPath')
const getFileName = require('../tools/getFileName')
const log = require('../tools/logger')
const isInObject = require('../tools/isInObject')

// TODO : split in two files : getFolderData and getDirectData
/**
 * @function getDatas
 *
 * @description
 * Return an object with datas inside provided data folder.
 *
 * If two files have same name(but with different extension)
 * The .yml one replace properties that are already in the .json one.
 *
 * @param {object} options The filtered and raw user options.
 *
 * @returns {object} Datas from datas folder.
 */
module.exports = async (options) => {
  const glob = await globby(options.data)

  // eslint-disable-next-line prefer-const
  let output = {}

  for (const filePath of glob) {
    await getFileData(filePath, options, output)
  }

  // Pass the user given's option because this is the raw one.
  // That's easiest to understand for the user to have his own parameter
  // instead of the one with extensions added like '**/*.{yml,json}
  isEmptyDataFolder(output, options)

  addDirectData(options, output)

  return output
}

/**
 * @function addDirectData
 *
 * @description
 * Adds provided by user directData to the data accessible from handlebars.
 *
 * @param {object} options The filtered and raw user options.
 * @param {object} output  The outputted datas to add the datas of the file.
 */
const addDirectData = async (options, output) => {
  const directData = options.raw.directData

  if (directData) {
    parseDirectData(directData, options, output)
  }
}

/**
 * @function parseDirectData
 *
 * @description
 * Parse and add provided directData to the accessible data.
 * If provided directData is not an object, add nothing and warn.
 *
 * @param {object} directData The provided directData.
 * @param {object} options    The filtered and raw user options.
 * @param {object} output     The outputted datas to add the datas of the file.
 */
const parseDirectData = async (directData, options, output) => {
  if (isAnObject(directData)) {
    for (const data in directData) {
      const dataContent = options.raw.directData[data]

      await processData(data, options, output, dataContent)
    }
  } else {
    directDataIsNotAnObjectWarning(options.raw.verbose)
  }
}

/**
 * @function isAnObject
 *
 * @description
 * Check if provided value is an object.
 *
 * @param {object} object The value to test.
 *
 * @returns {boolean} If value is an object, return true, otherwise false.
 */
const isAnObject = (object) => {
  if (typeof object === 'object') {
    return true
  }

  return false
}

/**
 * @function directDataIsNotAnObjectWarning
 *
 * @description
 * Log a warning to warn that directData is not an object
 *
 * @param {*} verbose
 */
const directDataIsNotAnObjectWarning = (verbose) => {
  log.warning(
    '[directData] must be an object and the provided one is not an object! [directData] will be skipped.',
    verbose
  )
}

/**
 * @function getFileData
 *
 * @description
 * Adds the data of the specified file to the outputted datas.
 * If file name is reserved, throw an error.
 *
 * @param  {string} filePath The path of the file.
 * @param  {object} options  The filtered and raw user options.
 * @param  {object} output   The outputted datas to add the datas of the file.
 */
const getFileData = async (filePath, options, output) => {
  const fileName = getFileName(filePath)

  await isFileNameReserved(fileName)

  const fileContent = await parseFile(filePath, options, fileName)

  if (fileContent) {
    await processData(fileName, options, output, fileContent)
  }
}

/**
 * @function processData
 *
 * @description
 * Add data from the file inside the output object.
 *
 * @param  {string} fileName The name of the file, without path and extension.
 * @param  {object} options  The filtered and raw user options.
 * @param  {object} output   Object processed to include datas from file.
 * @param  {object} fileContent The datas in the file.
 */
const processData = async (fileName, options, output, fileContent) => {
  if (isInObject(fileName, output)) {
    // if a file with same name have been already parsed,
    // log a warning.
    alreadyParsedWarning(fileName, options.raw.data, options.raw.verbose)
    // merge new one to the already parsed one, so the datas are mixed.
    Object.assign(output[fileName], fileContent)
  } else {
    // if there is no file with same name, create a new property with file name
    // and put the datas in.
    output[fileName] = fileContent
  }
}

/**
 * @function isFileNameReserved
 *
 * @description
 * Check if the name of file is a reserved name and throw an error if it is.
 *
 * @param  {string} fileName The name of the file, without path and extension.
 * @return {Promise} Return nothing or an error.
 */
const isFileNameReserved = (fileName) => {
  return new Promise((resolve, reject) => {
    if (fileName === 'global') {
      reject(Error(`A data file can't be named [${fileName}].`))
    }

    resolve()
  })
}

/**
 * @function parseFiles
 *
 * @description
 * Return the parsed file.
 *
 * @param {string} file The file path.
 *
 * @returns {object.<string, number>} The content of the provided file.
 */
const parseFile = async (file) => {
  const extension = await path.extname(file)
  const fullPath = await getFullPath(file)

  if (extension === '.json') {
    return await loadJsonFile(fullPath)
  } else if (extension === '.yml') {
    return await loadYamlFile(fullPath)
  } else {
    return null
  }
}

/**
 * @function alreadyParsedWarning
 *
 * @description
 * Format and log the warning message for datas files with same names.
 *
 * @param {string} fileName The name of the file, without path and extension.
 * @param {string} folder The raw folder path to add to the warning.
 * @param {boolean} verbose The verbose mode.
 */
const alreadyParsedWarning = (fileName, folder, verbose) => {
  log.warning(
    // eslint-disable-next-line max-len
    `[${fileName}] appears more than one time in different format in the provided [${folder}] folder or in [directData] provided.\nSome data items could be overwritten.\nTry to avoid to provide multiples data files with same name but different format.\n`,
    verbose
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
 * @param  {object} options  The filtered and raw user options.
 */
const isEmptyDataFolder = (output, options) => {
  // if output is empty, the folder don't contain datas files.
  if (Object.keys(output).length === 0) {
    emptyDataFolderWarning(options.raw.data, options.raw.verbose)
  }
}

/**
 * @function emptyDataFolderWarning
 *
 * @description
 * Format and log the warning message for empty data folder.
 *
 * @param  {type} folder The raw user provided folder.
 * @param {boolean} verbose The verbose mode.
 */
const emptyDataFolderWarning = (folder, verbose) => {
  log.warning(
    `[${folder}] appears to not contain any valid .yml nor .json files.\n`,
    verbose
  )
}
