'use strict'

const compileTemplate = require('./process/compileTemplate')
const render = require('./process/render')
const saveFile = require('./process/saveFile')
const mergeDatas = require('./process/mergeDatas')
const getPaths = require('./getPaths')

/**
 * @function handlePages
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
  const output = []

  // for each source file :
  for (const page of pages) {
    await mergeDatas(page, globalData, options)

    const template = await compileTemplate(page, layouts, options)
    const rendered = await render(page.data, template)
    const destination = await getPaths.getDestinationFolder(page.path, options)

    await saveFile(rendered, destination, options)

    output.push({
      path: destination,
      content: rendered,
      data: page.data
    })
  }

  return output
}
