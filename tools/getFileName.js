'use strict'

const path = require('path')

/**
 * Return the name of the file without path and extension.
 *
 * @param {string} file
 */
const getFileName = (file) => {
  return path.parse(file).name
}

module.exports = getFileName
