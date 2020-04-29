const compileTemplate = require('./process/compileTemplate')
const render = require('./process/render')
const saveFile = require('./process/saveFile')
const mergeDatas = require('./process/mergeDatas')

// ? https://handlebarsjs.com/api-reference/

module.exports = async (sources, globalData, options, layouts) => {
  const output = []

  // for each source file :
  for (let source of sources) {
    source = await mergeDatas(source, globalData)
    const template = await compileTemplate(source.content, layouts)
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
