const getFullPath = require('../../tools/getFullPath')
const save = require('save-file')

/**
 * @function saveFile
 *
 * @description
 * Saves file with provided content to the correct path
 * and return the full path destination folder.
 *
 * @param  {string} renderedPage The rendered page.
 * @param  {object} sourcePage   The source page.
 * @param  {object} options      The user's options.
 *
 * @return {string} The file destination
 */
module.exports = (renderedPage, sourcePage, options) => {
  const destination = getDestinationFolder(sourcePage.path, options)
  save(renderedPage, destination)

  return destination
}

/**
 * @function getDestinationFolder
 *
 * @description
 * Calculate the full path destination folder.
 *
 * @param  {type} path    The relative path.
 * @param  {type} options The user's options.
 *
 * @return {type} The full path destination folder.
 */
const getDestinationFolder = (path, options) => {
  const pagesRoot = getFullPath(options.pagesRoot)
  const sourcePage = getFullPath(path)
  const outputFolder = getFullPath(options.output)

  // remove options.pagesRoot from sourcePage.path
  const relativeSourcePage = sourcePage.replace(pagesRoot, '')

  // add the result at end of options.output
  return outputFolder + relativeSourcePage
}

// TODO ''
