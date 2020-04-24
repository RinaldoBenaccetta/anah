const Handlebars = require('handlebars')

require('pretty-error').start()

var fse = require('fs-extra')

const glob = require('globby')

const log = require('../tools/logger')

const processPaths = require('./process/processOptions')
const registerHelper = require('./registerHelpers')
const registerPartials = require('./registerPartials')
const getDatas = require('./getDatas')
const getLayouts = require('./getLayouts')
const processTemplate = require('./process/processTemplate')
const render = require('./process/render')
const saveFile = require('./process/saveFile')

/**
 * crée un array avec tout les contenus.
 * https://flaviocopes.com/javascript-async-await-array-map/
 *
 * @param {*} files
 */
// const getSource = async (files) => {
//   return Promise.all(files.map((file) => readFile(file)))
// }
const getSource = async (files) => {
  return Promise.all(
    files.map(async (file) => {
      return {
        content: await readFile(file),
        path: file
      }
    })
  )
}

/**
 * read a file with fs-extra: the function is promised by fs-extra.
 * https://www.npmjs.com/package/fs-extra
 * https://github.com/jprichardson/node-fs-extra/tree/934ea759ad8f36121ccbabc2759cf033bce67f81/docs
 *
 * @param {*} file
 */
function readFile (file) {
  // console.log('readFile : ', file);

  return fse.readFile(file, 'utf8')

  // fse.readFile(file)
  //     .then(content => {
  //         return content
  //     })
  //     .catch(err => {
  //         throw err
  //     })
}

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
    .then((filteredOptions) => glob(filteredOptions.pages))
    .then((filteredOptions) => getSource(filteredOptions))
    .then((files) => handle(files, data))
    .then((output) => {
      // console.log(output)
      return output
    })
    .catch((error) => log.error(error))
}

// https://handlebarsjs.com/api-reference/

const handle = async (sources, data) => {
  const output = []

  // TODO : use promises to return output
  // for each source file :
  for (const source of sources) {
    var template = await processTemplate(source, layouts)
    const rendered = await render(data, template)
    const path = await saveFile(rendered, source, filteredOptions)
    output.push({
      path: await path,
      content: await rendered
    })
  }

  return await output
}

module.exports = {
  build
}
