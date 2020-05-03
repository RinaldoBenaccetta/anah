const getPaths = require('../getPaths')

/**
 * @function mergeDatas
 *
 *
 * @description
 * Merge the global datas to the datas of the page.
 * The page data takes precedence over global data.
 *
 * @param  {object} source      The source of the page.
 * @param  {object} globalData  The datas from yml and json in datas folder.
 * @param  {object} options  The raw user's provided and filtered options.
 *
 * @return {object} The source with global data merged.
 */
module.exports = async (source, globalData, options) => {
  // add relative to global datas
  // TODO : add global as reserved in the doc.
  source.data.global = {
    relative: await getPaths.geRelativePath(source.path, options)
    // relative: correctExtension(await geRelativePath(source.path, options))
    // TODO : add root level :
    // root = ''
    // subfolder = '../'
    // subfolder/subfolder = '../../'
  }

  source.data = Object.assign({}, globalData, source.data)

  return source
}
