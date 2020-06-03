'use strict'

const processOptions = require('./process/processOptions')
const registerHelper = require('./registerHelpers')
const registerPartials = require('./registerPartials')
const getData = require('./getData')
const getLayouts = require('./getLayouts')
const handlePages = require('./handlePages')
const getPages = require('./getPages')
const log = require('../tools/logger')

/**
 * @function anah
 *
 * @description
 * Process the provided handlebars files to return html ones.
 *
 * @param  {object} options The user's options.
 *
 * @return {array} An array of object that contain destination path,
 *                 content and data of each outputted pages.
 */
module.exports = async (options) => {
  const filteredOptions = await processOptions(options)

  registerPartials(filteredOptions)
  await registerHelper(filteredOptions)

  const data = await getData(filteredOptions)

  const layouts = await getLayouts(filteredOptions)

  const pages = await getPages(filteredOptions)

  const output = await handlePages(pages, data, filteredOptions, layouts)

  return processOutput(output, filteredOptions.raw.verbose)
}

/**
 * @function processOutput
 *
 * @description
 * Checks if there is rendered pages, return them and log that compilation
 * is done.
 * If there is no rendered page, warn and return null.
 *
 * @param {object|null} output
 * @param {boolean} verbose
 *
 * @returns {object|null}
 */
const processOutput = (output, verbose) => {
  if (output && output.length > 0) {
    logForCompilationFinished(verbose)

    return output
  } else {
    warnForNothingToRender(verbose)

    return null
  }
}

/**
 * @function warnForNothingToRender
 *
 * @description
 * Log a warning for nothing to render.
 *
 * @param {boolean} verbose
 */
const warnForNothingToRender = (verbose) => {
  log.warning('There is nothing to render!', verbose)
}

/**
 * @function logFoCompilationFinished
 *
 * @description
 * Log that compilation is done.
 *
 * @param {boolean} verbose
 */
const logForCompilationFinished = (verbose) => {
  log.done('Compilation finished.', verbose)
}
