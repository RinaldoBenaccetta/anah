'use strict'

const getDirectPages = require('./getDirectPages')
const getFolderPages = require('./getFolderPages')

/**
 * @function getPages
 *
 * @description
 * Create an array with contents and paths of pages.
 * If pages folder is not provided, return null.
 *
 * @param  {object} options
 * The options with folders ready for glob and raw options.
 *
 * @return {Object[]} The content and path of each page or empty array.
 */
module.exports = async (options) => {
  const folderPages = await getFolderPages(options)

  const directPages = await getDirectPages(options)

  const output = await mergePages(folderPages, directPages)

  return output
}

/**
 * @function mergePages
 *
 * @description
 * Merge pages from folder and pages from direct pages.
 *
 * @param {object[]} folderPages array with pages from folder.
 * @param {object[]} directPages array with pages provided by user in anah call.
 */
const mergePages = async (folderPages, directPages) => {
  return await folderPages.concat(directPages)
}
