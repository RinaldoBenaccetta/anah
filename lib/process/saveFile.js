const fse = require('fs-extra')

/**
 * @function saveFile
 *
 * @description
 * Saves file with provided content to the correct path
 * and return the destination path.
 *
 * @param  {string} renderedPage The rendered page.
 * @param  {object} path   The source page.
 * @param  {object} options      The user's options.
 *
 * @return {string} The file destination.
 */
module.exports = async (renderedPage, destination, options) => {
  // save the file.
  // TODO : save file only if in options.
  fse.outputFile(destination, renderedPage)
}
