const Handlebars = require('handlebars')
const getContent = require('../tools/getContent')
const isInObject = require('../tools/isInObject')

/**
 * Register the partials to Handlebars
 *
 * @param {object} filteredOptions
 */
module.exports = async (filteredOptions, options) => {
  const content = await getContent(filteredOptions.partials, options.partials)

  return new Promise((resolve, reject) => {
    if (isInObject('body', content)) {
      reject(Error("Partial can't be named body."))
    }

    resolve(Handlebars.registerPartial(content))
  })
}
