const getContent = require('../tools/getContent')

/**
 * Register the layouts to Handlebars
 *
 * @param {object} options
 */
module.exports = async (options) => {
  return await getContent(options.layouts)
}
