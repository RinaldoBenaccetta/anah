const Handlebars = require('handlebars')

/**
 * @function compileTemplate
 *
 * @description
 * Returns the page compiled in the selected layout.
 * Layout has to call the body partial : {{> body}}
 *
 * @param {string} content The page's source.
 * @param {object} layouts All the layouts.
 *
 * @returns {object} The compiled Page ready for rendering.
 */
module.exports = (content, layouts) => {
  // adds the page to the body partial
  Handlebars.registerPartial('body', content)

  // returns the compiled layout
  // TODO : use custom layout with frontmatter if provided, otherwise default.
  return Handlebars.compile(layouts.default)
}
