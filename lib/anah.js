// require('pretty-error').start()

// const log = require('../tools/logger')

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

  // TODO : add reserved data names and warning or errors if detect user's provided ones.
  // TODO : name of data file must be the name of the data : names.person.age instead of person.age
  // TODO : add underscore for datas provided by anah : _page, _path
  // TODO : add filename to data to be accessible from template.
  // TODO : add relative path of file to data to be accessible to datas from template.
  // TODO : save files only if specified in options.
  // TODO : add the output on info log if asked in options.
  // TODO : add the possibility to turn off the warnings.
  // TODO : format errors to specify from which call anah and throwed the error.

  return output
}

module.exports = {
  build
}
