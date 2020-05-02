const path = require('path')

/**
 * @function mergeDatas
 *
 *
 * @description
 * Merge the global datas to the datas of the page.
 * The page data takes precedence over global data.
 *
 * @param  {object} source      The source of the page.
 * @param  {object} globalData  The datas from yml and json in datas folder.
 * @param  {object} options  The raw user's provided and filtered options.
 *
 * @return {object} The source with global data merged.
 */
module.exports = async (source, globalData, options) => {
  // add relative to global datas
  // TODO : add global as reserved in the doc.
  source.data.global = {
    relative: correctExtension(await geRelativePath(source.path, options))
    // TODO : add root level :
    // root = ''
    // subfolder = '../'
    // subfolder/subfolder = '../../'
  }

  source.data = Object.assign({}, globalData, source.data)

  return source
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
 * @return {string} {description}
 */
const geRelativePath = (filePath, options) => {
  const pagesRoot = options.pagesRoot

  return filePath.replace(pagesRoot, '')
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
