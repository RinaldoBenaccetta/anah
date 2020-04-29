const path = require('path')
const fse = require('fs-extra')
const mdToHtml = require('../tools/mdToHtml')
const parseFrontMatter = require('../tools/parseFrontMatter')

/**
 * @typedef {object} content
 *
 * @property {string} content The content of the file, without the frontmatter.
 * @property {object} data    The datas contained in the frontmatter.
 */

/**
 * @function readContent
 *
 * @description
 * Return the content of the file provided.
 * Translate markdown to HTML if the provided file's extension is .md
 *
 * @param  {string} file The path of the file.
 * @param  {object} showdownOptions The options for Showdown.
 *
 * @return {content}
 */
module.exports = async (file, showdownOptions) => {
  const fileContent = await fse.readFile(file, 'utf8')

  const output = await contentExplode(fileContent)

  if (isMarkdown(file)) {
    const toHtml = await mdToHtml(output.content, showdownOptions)

    output.content = conservePartialTags(toHtml)

    return output
  }

  return output
}

/**
 * @function contentExplode
 *
 * @description
 * Return the datas from frontmatter and the content without frontmatter.
 *
 * @param  {string} fileContent The content of the file.
 *
 * @return {object} The content and datas from the file.
 */
const contentExplode = async (fileContent) => {
  const frontMatter = await parseFrontMatter(fileContent)

  return {
    content: frontMatter.content,
    data: frontMatter.data
  }
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
