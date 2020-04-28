const path = require('path')
const fse = require('fs-extra')
const mdToHtml = require('../tools/mdToHtml')

/**
 * @function {function name}
 *
 * @description
 * Return the content of the file provided.
 * Translate markdown to HTML if the provided file's extension is .md
 *
 * @param  {string} file The path of the file.
 *
 * @return {string} The content of the file.
 */
module.exports = async (file) => {
  const content = await fse.readFile(file, 'utf8')

  if (isMarkdown(file)) {
    return mdToHtml(content)
  }

  return content
}

/**
 * @function isMarkdown
 *
 * @description
 * Return true if the extension of the provided path is .md
 *
 * @param  {string} file The path of the file.
 * @return {boolean} Return true if is a .md extension.
 */
const isMarkdown = (file) => {
  return path.extname(file) === '.md'
}
