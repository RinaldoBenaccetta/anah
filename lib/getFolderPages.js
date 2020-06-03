'use strict'

const globby = require('globby')
const readContent = require('../tools/readContent')

/**
 * @function getFolderPages
 *
 * @description
 * If pages folder is provided, returns the content of pages in that folder.
 * Otherwise, return empty array.
 *
 * @param {object} options
 * The options with folders ready for glob and raw options.
 *
 * @returns {Object[]} The content and path of each page or empty array.
 *
 */
module.exports = async (options) => {
  if (options.pages) {
    return parseFolderPages(options)
  } else {
    return []
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
