const Handlebars = require('handlebars')

/**
 * @function processTemplate
 *
 * @description
 * Returns the page compiled in the selected layout.
 * Layout has to call the body partial : {{> body}}
 *
 * @param {object} source The page's source.
 * @param {object} layouts All the layouts.
 *
 * @returns {object} The compiled Page ready for rendering.
 */
module.exports = (source, layouts) => {
  // adds the page to the body partial
  Handlebars.registerPartial('body', source.content)
  // returns the compiled layout
  // TODO : use custom layout with frontmatter if provided, otherwise default.
  return Handlebars.compile(layouts.default)
}
