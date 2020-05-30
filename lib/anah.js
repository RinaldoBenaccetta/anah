'use strict'

const processOptions = require('./process/processOptions')
const registerHelper = require('./registerHelpers')
const registerPartials = require('./registerPartials')
const getData = require('./getData')
const getLayouts = require('./getLayouts')
const handlePages = require('./handlePages')
const getPages = require('./getPages')
const log = require('../tools/logger')

// console.log(util.inspect(myObject, {showHidden: false, depth: null}))

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

  log.done('compilation finished.', filteredOptions.raw.verbose, output)

  return output
}
