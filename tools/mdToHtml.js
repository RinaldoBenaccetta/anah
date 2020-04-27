const showdown = require('showdown')

// TODO :  Add showdown options. At least for the flavor of markdown.

module.exports = (markdown) => {
  const converter = new showdown.Converter()

  return converter.makeHtml(markdown)
}
