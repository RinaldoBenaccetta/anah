const Handlebars = require('handlebars')
const getContent = require('../tools/getContent')

/**
 * Register the partials to Handlebars
 *
 * @param {object} options
 */
module.exports = async (options) => {
  const content = await getContent(options.partials)
  return Handlebars.registerPartial(content)
}
