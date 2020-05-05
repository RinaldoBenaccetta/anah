'use strict'

const getPaths = require('../getPaths')

/**
 * @function mergeDatas
 *
 *
 * @description
 * Merge the global datas of the site, the global datas of the page
 * and the datas of the page.
 * The page data takes precedence over global data.
 *
 * @param  {object} source      The source of the page.
 * @param  {object} globalData  The datas from yml and json in datas folder.
 * @param  {object} options     The raw user's provided and filtered options.
 *
 * @return {object} The source with global data merged.
 */
module.exports = async (source, globalData, options) => {
  // get the global datas of the page.
  source.data.global = getPagesGlobals(source, options)

  source.data = Object.assign({}, globalData, source.data)

  return source
}

const getPagesGlobals = (source, options) => {
  // TODO : add global as reserved in the doc.
  return getPaths.getRelatives(source.path, options)
}
