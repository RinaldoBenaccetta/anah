const globby = require('globby')
// const fse = require('fs-extra')
const readContent = require('../tools/readContent')

/**
 * @function getPages
 *
 * @description Create an array with contents and paths of pages.
 *
 * @param  {object} filteredOptions The options with folders ready for glob.
 *
 * @return {Object[]} The content and path of each page.
 */
module.exports = async (filteredOptions) => {
  // get an array with pages files
  const files = await globby(filteredOptions.pages)

  // read all the files
  return Promise.all(
    files.map(async (file) => {
      // return the content and the path of each file
      return {
        content: await readContent(file),
        // content: await fse.readFile(file, 'utf8'),
        path: file
      }
    })
  )
}
