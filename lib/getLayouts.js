'use strict'

const getContent = require('../tools/getContent')
const isInObject = require('../tools/isInObject')
const log = require('../tools/logger')

/**
 * Return the contents of the layout files
 *
 * @param {object} options The filtered and raw user provided options.
 *
 * @returns {Object.<string, string>} The layouts in string format.
 */
module.exports = async (options) => {
  const output = await getContent(
    options.layouts,
    options.raw.partials,
    options.raw.showdownOptions
  )

  await isEmptyLayoutFolder(output, options.raw.layouts)

  // Pass the user given's option because this is the raw one.
  // That's easiest to understand for the user to have his own parameter
  // instead of the one with extensions added like '**/*.{yml,json}
  isThereADefaultTemplate(output, options.raw.layouts)

  return output
}

/**
 * @function isThereADefaultTemplate
 *
 * @description
 * Checks if default is present in layouts provided folder.
 * If none is found, log a warning message.
 *
 * @param  {object} layouts      The layouts found.
 * @param  {string} layoutFolder The raw user provided layout folder.
 */
const isThereADefaultTemplate = (layouts, layoutFolder) => {
  if (!isInObject('default', layouts)) {
    defaultTemplateWarn(layoutFolder)
  }
}

/**
 * @function defaultTemplateWarn
 *
 * @description
 * Log a warning with the provided layout folder without default template.
 *
 * @param  {string} layoutFolder The raw user provided layout folder.
 */
const defaultTemplateWarn = (layoutFolder) => {
  log.warning(
    `There is no "default" template in the provided [${layoutFolder}] folder.`
  )
}

/**
 * @function isEmptyLayoutFolder
 *
 * @description
 * Checks that provided layouts contain at least one folder.
 * If not, throw an Error.
 *
 * @param  {object} layouts      The content of the layouts files.
 * @param  {string} layoutFolder The raw user provided layouts folder.
 *
 * @return {Promise} Return nothing or an Error.
 */
const isEmptyLayoutFolder = (layouts, layoutFolder) => {
  return new Promise((resolve, reject) => {
    if (Object.keys(layouts).length === 0) {
      reject(
        Error(
          `Provided [${layoutFolder}] layouts folder doesn't contain template.`
        )
      )
    }
    resolve()
  })
}
