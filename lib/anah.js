const processOptions = require('./process/processOptions')
const registerHelper = require('./registerHelpers')
const registerPartials = require('./registerPartials')
const getDatas = require('./getDatas')
const getLayouts = require('./getLayouts')

const handlePages = require('./handlePages')

const getPages = require('./getPages')

const build = async (options) => {
  const filteredOptions = await processOptions(options)

  registerPartials(filteredOptions)
  await registerHelper(filteredOptions)

  const datas = await getDatas(filteredOptions)
  const layouts = await getLayouts(filteredOptions)

  const pages = await getPages(filteredOptions)

  const output = await handlePages(pages, datas, filteredOptions, layouts)

  // TODO : add the output on info log if asked in options.
  // TODO : add the possibility to turn off the warnings.
  // TODO : format errors to specify from which call anah and throwed the error.

  return output
}

module.exports = {
  build
}
