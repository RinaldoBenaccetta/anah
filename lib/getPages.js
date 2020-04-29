const globby = require('globby')
const readContent = require('../tools/readContent')

/**
 * @function getPages
 *
 * @description Create an array with contents and paths of pages.
 *
 * @param  {object} filteredOptions
 * The options with folders ready for glob and raw options..
 *
 * @return {Object[]} The content and path of each page.
 */
module.exports = async (filteredOptions) => {
  // get an array with pages files
  const files = await globby(filteredOptions.pages)

  // read all the files
  return Promise.all(
    files.map(async (file) => {
      const fileContent = await readContent(
        file,
        filteredOptions.raw.showdownOptions
      )

      return {
        content: fileContent.content,
        data: fileContent.data,
        path: file
      }
    })
  )
}
