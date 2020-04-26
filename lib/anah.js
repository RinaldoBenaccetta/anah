require('pretty-error').start()

const log = require('../tools/logger')

const processOptions = require('./process/processOptions')
const registerHelper = require('./registerHelpers')
const registerPartials = require('./registerPartials')
const getDatas = require('./getDatas')
const getLayouts = require('./getLayouts')

const handle = require('./handle')

const getSource = require('./getSource')

const build = async (options) => {
  try {
    const filteredOptions = await processOptions(options)

    registerPartials(filteredOptions)
    registerHelper(filteredOptions)

    const datas = await getDatas(filteredOptions, options)
    const layouts = await getLayouts(filteredOptions)
    const files = await getSource(filteredOptions)

    const output = await handle(files, datas, filteredOptions, layouts)

    // TODO : add the input on info log if asked in options
    return output
  } catch (error) {
    log.error(error)
  }
}

module.exports = {
  build
}
