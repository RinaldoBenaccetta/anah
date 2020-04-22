const loadJsonFile = require('load-json-file')
const loadYamlFile = require('load-yaml-file')
const globby = require('globby')
const path = require('path')
const getFullPath = require('./tools/getFullPath')
const getFileName = require('./tools/getFileName')
const log = require('./tools/logger')

// todo : test

/**
 * Array that contain already parsed data files.
 */
// eslint-disable-next-line prefer-const
let alreadyParsed = []

/**
 * Return an object with datas inside provided data folder.
 *
 * If two files have same name(but with different extension)
 * The .yml one replace properties that are already in the .json one.
 *
 * @param {string} file
 */
module.exports = async (files) => {
  const glob = await globby(files.datas)

  // eslint-disable-next-line prefer-const
  let output = {}

  for (const file of glob) {
    // add data parsed from file to the returned object.
    // if undefined parsed datas, nothing is pushed.
    Object.assign(output, await parseFile(file))
  }

  return output
}

/**
 * Return the parsed file.
 *
 * @param {string} file
 */
const parseFile = async (file) => {
  const extension = await path.extname(file)
  const fullPath = await getFullPath(file)
  const fileName = getFileName(file)
  isAlreadyParsed(fileName)

  if (extension === '.json') {
    return await loadJsonFile(fullPath)
  } else if (extension === '.yml') {
    return await loadYamlFile(fullPath)
  }
}

/**
 * Verify if fileName is already parsed.
 * If already parsed, log a warning message.
 * If not, add the file name to alreadyParsed array.
 *
 * E.g. : data.yml and data.json are both
 * in the provided folder will log a warning message.
 *
 * @param {string} file
 */
const isAlreadyParsed = (file) => {
  alreadyParsed.includes(file) ? warning(file) : alreadyParsed.push(file)
}

/**
 * Format and log the warning message.
 *
 * @param {string} file
 */
const warning = (file) => {
  log.warning(
    // eslint-disable-next-line max-len
    `"${file}" appears more than one time in different format in the provided "datas" folder.\nSome items could be overwritten.\nTry to avoid to provide multiples data files with same name but different format.\n`
  )
}
