const Handlebars = require('handlebars')

// todo: use custom layouts with frontmatter
/**
 * Return the page compiled in the selected layout.
 * Layout has to call the body partial : {{> body}}
 *
 * @param {string} page
 * @param {object} layouts
 */
module.exports = (page, layouts) => {
  // adds the page to the body partial
  Handlebars.registerPartial('body', page)
  // return the compiled layout
  return Handlebars.compile(layouts.default)
}
