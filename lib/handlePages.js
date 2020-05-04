const compileTemplate = require('./process/compileTemplate')
const render = require('./process/render')
const saveFile = require('./process/saveFile')
const mergeDatas = require('./process/mergeDatas')

/**
 * @function {function name}
 *
 * @description
 * Return the processed pages, with provided datas and layouts.
 * ? https://handlebarsjs.com/api-reference/
 *
 * @param  {array} pages       The Pages content, datas and source paths.
 * @param  {object} globalData
 * The datas from the user's libraries and from datas folder
 * @param  {object} options    The raw and processed user's options.
 * @param  {object} layouts    The layouts from layouts folder.
 *
 * @return {object} The processed pages.
 */
module.exports = async (pages, globalData, options, layouts) => {
  console.log('log: ----------------')
  console.log('log: pages', pages)
  console.log('log: ----------------')
  const output = []

  // for each source file :
  for (let source of pages) {
    source = await mergeDatas(source, globalData, options)
    const template = await compileTemplate(source, layouts, options)
    const rendered = await render(source.data, template)
    const path = await saveFile(rendered, source.path, options)

    output.push({
      path: path,
      content: rendered,
      data: source.data
    })
  }

  return output
}
