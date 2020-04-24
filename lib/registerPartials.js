const Handlebars = require('handlebars')
const getContent = require('../tools/getContent')
const isInObject = require('../tools/isInObject')

/**
 * Register the partials to Handlebars
 *
 * @param {object} options
 */
module.exports = async (options) => {
  const content = await getContent(options.partials)
  return new Promise((resolve, reject) => {
    if (isInObject('body', content)) {
      reject(Error("Partial can't be named body."))
    }
    resolve(Handlebars.registerPartial(content))
  })
}
