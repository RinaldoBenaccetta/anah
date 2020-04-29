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
 *
 * @return {object} The source with global data merged.
 */
module.exports = async (source, globalData) => {
  source.data = Object.assign({}, globalData, source.data)

  return source
}
