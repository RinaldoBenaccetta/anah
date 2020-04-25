const compileTemplate = require('./process/compileTemplate')
const render = require('./process/render')
const saveFile = require('./process/saveFile')

// https://handlebarsjs.com/api-reference/

module.exports = async (sources, data, options, layouts) => {
  const output = []

  // TODO : use promises to return output
  // for each source file :
  for (const source of sources) {
    var template = await compileTemplate(source, layouts)
    const rendered = await render(data, template)
    const path = await saveFile(rendered, source, options)

    output.push({
      path: await path,
      content: await rendered
    })
  }

  return await output
}
