const path = require('path')

/**
 * Return the full path from the relative path.
 *
 * @param {string} filePath
 */
module.exports = (filePath) => {
  return path.resolve(filePath)
}
