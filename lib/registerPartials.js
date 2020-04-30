const handlebars = require('handlebars')
const getContent = require('../tools/getContent')
const isInObject = require('../tools/isInObject')

/**
 * @function registerPartial
 *
 * @description
 * Register the partials to Handlebars
 *
 * @param  {object} options The filtered and raw options.
 *
 * @return {Promise} Returns an Error or nothing.
 */
module.exports = async (options) => {
  const content = await getContent(
    options.partials,
    options.raw.partials,
    options.raw.showdownOptions
  )

  return new Promise((resolve, reject) => {
    if (isInObject('body', content)) {
      reject(Error("Partial can't be named body."))
    }

    resolve(handlebars.registerPartial(content))
  })
}
