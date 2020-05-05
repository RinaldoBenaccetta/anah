'use strict'

const path = require('path')

const getRelatives = (filePath, options) => {
  const relativePath = geRelativePath(filePath, options)
  const subFolderDepth = getSubFolderDepth(relativePath)
  const rootPrefix = getRootPrefix(subFolderDepth)

  return {
    path: relativePath,
    depth: subFolderDepth,
    root: rootPrefix
  }
}

/**
 * @function geRelativePath
 *
 * @description
 * Get the relative path of the page.
 *
 * @param  {string} filePath The path of the final page file.
 * @param  {object} options  The raw user's provided and filtered options.
 *
 * @return {string} The relative path.
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
 * @function getRootPrefix
 *
 * @description
 * Get the path from the page to root.
 *
 * @example
 * With a relative path of the page is subFolder/subFolder/page.html
 * the prefix will be ../../
 * With a relative path that is subFolder/page.html, the prefix will be ../
 *
 * @param  {int} subFolderDepth The number of sub-folders from root.
 *
 * @return {string} The root path from the page.
 */
const getRootPrefix = (subFolderDepth) => {
  const prefix = '../'

  return prefix.repeat(subFolderDepth)
}

/**
 * @function getSubFolderDepth
 *
 * @description
 * Get the number of sub-folder of the page from root.
 *
 * @param  {string} relativePath The relative path of the page.
 *
 * @return {int} The number of sub-folders.
 */
const getSubFolderDepth = (relativePath) => {
  return (relativePath.match(/\//g) || []).length
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
  getDestinationFolder,
  getRelatives
}
