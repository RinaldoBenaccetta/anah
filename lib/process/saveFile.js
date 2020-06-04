'use strict'

const fse = require('fs-extra')
const log = require('../../tools/logger')

/**
 * @function saveFile
 *
 * @description
 * Saves file with provided content to the correct path.
 *
 * @param  {string} renderedPage The rendered page.
 * @param  {string} destination  The source page.
 * @param  {object} options      The user's options.
 */
module.exports = async (renderedPage, destination, options) => {
  fse
    .outputFile(destination, renderedPage)
    .then(() => log.done(formatLog(destination), options.raw.verbose))
}

/**
 * @function formatLog
 *
 * @description
 * Returns the formatted message that indicate that file is saved.
 *
 * @param {String} destination
 *
 * @returns {String} The formatted message log.
 */
const formatLog = (destination) => {
  return `${destination} successfully saved.`
}
