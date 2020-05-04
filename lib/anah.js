const processOptions = require('./process/processOptions')
const registerHelper = require('./registerHelpers')
const registerPartials = require('./registerPartials')
const getDatas = require('./getDatas')
const getLayouts = require('./getLayouts')

const handle = require('./handle')

const getPages = require('./getPages')

const build = async (options) => {
  const filteredOptions = await processOptions(options)

  registerPartials(filteredOptions)
  await registerHelper(filteredOptions)

  const datas = await getDatas(filteredOptions)
  const layouts = await getLayouts(filteredOptions)

  const files = await getPages(filteredOptions)

  const output = await handle(files, datas, filteredOptions, layouts)

  // TODO : save files only if specified in options.
  // TODO : add the output on info log if asked in options.
  // TODO : add the possibility to turn off the warnings.
  // TODO : format errors to specify from which call anah and throwed the error.

  return output
}

module.exports = {
  build
}
