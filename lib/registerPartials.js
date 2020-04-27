const Handlebars = require('handlebars')
const getContent = require('../tools/getContent')
const isInObject = require('../tools/isInObject')

/**
 * @function registerPartial
 *
 * @description
 * Register the partials to Handlebars
 *
 * @param  {object} filteredOptions The options ready to glob.
 * @param  {object} options         The raw users options.
 * @return {Promise} Returns an Error or nothing.
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
