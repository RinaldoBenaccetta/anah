'use strict'

// const globby = require('globby')
// const readContent = require('../tools/readContent')
// const isInObject = require('../tools/isInObject')
// const typical = require('typical')
// const log = require('../tools/logger')
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
 * @return {Object[]|null} The content and path of each page or null.
 */
module.exports = async (options) => {
  const folderPages = await getFolderPages(options)

  const directPages = await getDirectPages(options)

  console.log('log: ----------------------------')
  console.log('log: directPages', directPages)
  console.log('log: ----------------------------')

  return folderPages
}
