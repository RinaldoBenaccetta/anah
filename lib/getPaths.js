const path = require('path')

/**
 * @function geRelativePath
 *
 * @description
 * Get the relative path of the page.
 *
 * @param  {string} filePath The path of the final page file.
 * @param  {object} options  The raw user's provided and filtered options.
 *
 * @return {string} {description}
 */
const geRelativePath = (filePath, options) => {
  const pagesRoot = options.pagesRoot

  return correctExtension(filePath.replace(pagesRoot, ''))
}

/**
 * @function getDestinationFolder
 *
 * @description
 * Calculate the destination path of the page.
 *
 * @param  {string} path    The relative path.
 * @param  {object} options The user's options.
 *
 * @return {string} The destination path.
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
 * @param  {string} filePath The path.
 *
 * @return {string} The destination path with .html extension.
 */
const correctExtension = (filePath) => {
  const actualExtension = path.extname(filePath)

  return filePath.replace(actualExtension, '.html')
}

module.exports = {
  geRelativePath,
  getDestinationFolder
}
