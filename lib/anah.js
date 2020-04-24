require('pretty-error').start()

const glob = require('globby')

const log = require('../tools/logger')

const processPaths = require('./process/processOptions')
const registerHelper = require('./registerHelpers')
const registerPartials = require('./registerPartials')
const getDatas = require('./getDatas')
const getLayouts = require('./getLayouts')

const handle = require('./handle')

const getSource = require('./getSource')

let data = {}
let layouts = {}
let filteredOptions = {}

const register = async (options) => {
  registerPartials(options).catch((error) => log.error(error))
  registerHelper(options)
  data = await getDatas(options)
  layouts = await getLayouts(options)
  return options
}

const build = (options) => {
  processPaths(options)
    .then((filtered) => {
      filteredOptions = filtered
      return filtered
    })
    .then((filteredOptions) => register(filteredOptions))
    .then((filteredOptions) => getSource(filteredOptions))
    .then((files) => handle(files, data, filteredOptions, layouts))
    .then((output) => {
      // console.log(output)
      return output
    })
    .catch((error) => log.error(error))
}

module.exports = {
  build
}
