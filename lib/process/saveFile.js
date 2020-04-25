const path = require('path')
const fse = require('fs-extra')

/**
 * @function saveFile
 *
 * @description
 * Saves file with provided content to the correct path
 * and return the destination path.
 *
 * @param  {string} renderedPage The rendered page.
 * @param  {object} sourcePage   The source page.
 * @param  {object} options      The user's options.
 *
 * @return {string} The file destination.
 */
module.exports = async (renderedPage, sourcePage, options) => {
  const destination = await getDestinationFolder(sourcePage.path, options)

  // save the file.
  fse.outputFile(destination, renderedPage)

  return destination
}

/**
 * @function getDestinationFolder
 *
 * @description
 * Calculate the destination path.
 *
 * @param  {type} path    The relative path.
 * @param  {type} options The user's options.
 *
 * @return {type} The destination path.
 */
const getDestinationFolder = (filePath, options) => {
  const pagesRoot = options.pagesRoot
  const sourcePage = filePath
  const outputFolder = options.output

  // remove options.pagesRoot from sourcePage.path.
  const relativeSourcePage = sourcePage.replace(pagesRoot, '')

  // add the result at end of options.output and correct the extension.
  return correctExtension(outputFolder + relativeSourcePage)
}

/**
 * @function correctExtension
 *
 * @description
 * set the extension of the file to .html.
 *
 * @param  {type} filePath The path.
 *
 * @return {type} The destination path with .html extension.
 */
const correctExtension = (filePath) => {
  const actualExtension = path.extname(filePath)

  return filePath.replace(actualExtension, '.html')
}
