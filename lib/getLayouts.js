const getContent = require('../tools/getContent')
const isInObject = require('../tools/isInObject')
const log = require('../tools/logger')

// TODO : add a warning when there is no default template.(warning because all pages could use custom templates)

// TODO : add error when template folder is empty.

/**
 * Return the contents of the layout files
 *
 * @param {object} folders The folders ready to glob.
 * @param {object} options The raw user provided options.
 */
module.exports = async (folders, options) => {
  const output = await getContent(folders.layouts)

  // Pass the user given's option because this is the raw one.
  // That's easiest to understand for the user to have his hown parameter
  // instead of the one with extensions added like '**/*.{yml,json}
  isThereADefaultTemplate(output, options.layouts)

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
    `There is no "default" template in the provide [${layoutFolder}] folder`
  )
}
