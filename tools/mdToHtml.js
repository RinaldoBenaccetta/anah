const showdown = require('showdown')

/**
 * @function mdToHtml
 *
 * @description
 * Convert the provided markdown string to HTML.
 *
 * @param  {string} markdown The markdown string.
 * @param {objedct} [options=null] The Showdown options. https://github.com/showdownjs/showdown/wiki/Showdown-Options
 *
 * @return {string} The string converted to HTML.
 */
module.exports = (markdown, options = null) => {
  const converter = new showdown.Converter(options)

  return converter.makeHtml(markdown)
}
