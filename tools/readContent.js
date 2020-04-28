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
    const toHtml = await mdToHtml(content)

    return conservePartialTags(toHtml)
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

/**
 * @function conservePartialTags
 *
 * @description
 * Showdown transform markdown to HTML according to HTML entities.
 * That say that markdown {{> something}} will become {{&gt; something}}.
 * Handlebars don't understand that.
 * This function assure that partials will work with markdown.
 * {{&gt; something}} become {{> something}} again.
 *
 * @param  {string} string The string to transform.
 *
 * @return {string} Returns the string fixed, ready for Handlebars.
 */
const conservePartialTags = (string) => {
  return string.replace(/{{&gt;([\w\s]+}})/g, '{{>$1')
}
