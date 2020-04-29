const showdown = require('showdown')

// TODO :  Add showdown options. At least for the flavor of markdown.

/**
 * @function mdToHtml
 *
 * @description
 * Convert the provided markdown string to HTML.
 *
 * @param  {string} markdown The markdown string.
 *
 * @return {string} The string converted to HTML.
 */
module.exports = (markdown) => {
  const converter = new showdown.Converter()

  return converter.makeHtml(markdown)
}
