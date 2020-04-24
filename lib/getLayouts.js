const getContent = require('../tools/getContent')

/**
 * Return the contents of the layout files
 *
 * @param {object} options
 */
module.exports = async (options) => {
  return await getContent(options.layouts)
}
