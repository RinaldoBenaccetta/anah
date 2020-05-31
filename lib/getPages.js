'use strict'

const globby = require('globby')
const readContent = require('../tools/readContent')

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
 * @return {Object[]|null} The content and path of each page or null.
 */
module.exports = async (options) => {
  const folderPages = await getFolderPages(options)

  return folderPages
}

/**
 * @function getFolderPages
 *
 * @description
 * If pages folder is provided, returns the content of pages in that folder.
 * Otherwise, return null. folder.
 *
 * @param {object} options
 * The options with folders ready for glob and raw options.
 *
 * @returns {Object[]|null} The content and path of each page or null.
 *
 */
const getFolderPages = async (options) => {
  if (options.pages) {
    return parseFolderPages(options)
  } else {
    return null
  }
}

/**
 * @function parseFolderPages
 *
 * @description
 * Returns the content, data and path of all files in the provided pages folder.
 *
 * @param {object} options
 * The options with folders ready for glob and raw options.
 *
 * @returns {object[]} An array with all pages from the pages folder.
 */
const parseFolderPages = async (options) => {
  // get an array with pages files
  const files = await globby(options.pages)

  // read all the files
  return Promise.all(
    files.map(async (file) => {
      const fileContent = await readContent(file, options.raw.showdownOptions)

      return {
        content: fileContent.content,
        data: fileContent.data,
        path: file
      }
    })
  )
}
