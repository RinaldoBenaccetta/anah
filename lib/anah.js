'use strict'

const processOptions = require('./process/processOptions')
const registerHelper = require('./registerHelpers')
const registerPartials = require('./registerPartials')
const getDatas = require('./getDatas')
const getLayouts = require('./getLayouts')
const handlePages = require('./handlePages')
const getPages = require('./getPages')

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

  const datas = await getDatas(filteredOptions)
  const layouts = await getLayouts(filteredOptions)

  const pages = await getPages(filteredOptions)

  const output = await handlePages(pages, datas, filteredOptions, layouts)

  // TODO : format errors to specify from where anah was called and throw the error.

  return output
}
