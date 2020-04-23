const Handlebars = require('handlebars')

// todo: use custom layouts with frontmatter
/**
 * Return the page compiled in the selected layout.
 * Layout has to call the body partial : {{> body}}
 *
 * @param {object} page
 * @param {object} layouts
 */
module.exports = (source, layouts) => {
  // adds the page to the body partial
  Handlebars.registerPartial('body', source.content)
  // return the compiled layout
  return Handlebars.compile(layouts.default)
}
