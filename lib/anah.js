const Handlebars = require('handlebars')

require('pretty-error').start()

var fse = require('fs-extra')

const glob = require('globby')

const processPaths = require('./process/processPaths')
const registerHelper = require('./registerHelpers')
const registerPartials = require('./registerPartials')
const getDatas = require('./getDatas')

/**
 * crée un array avec tout les contenus.
 * https://flaviocopes.com/javascript-async-await-array-map/
 * todo : voir pour catcher les erreurs
 *
 * @param {*} files
 */
const getSource = async (files) => {
  return Promise.all(files.map((file) => readFile(file)))
}

/**
 * lit un fichier avec fs-extra : la fonction est promisifiée par fs-extra.
 * todo : voir pour catcher les erreurs
 * https://www.npmjs.com/package/fs-extra
 * https://github.com/jprichardson/node-fs-extra/tree/934ea759ad8f36121ccbabc2759cf033bce67f81/docs
 *
 * @param {*} file
 */
function readFile (file) {
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

const register = async (options) => {
  registerPartials(options)
  registerHelper(options)
  data = await getDatas(options)
  return options
}

exports.build = (options) => {
  processPaths(options)
    .then((filteredOptions) => register(filteredOptions))
    .then((filteredOptions) => glob(filteredOptions.pages))
    .then((filteredOptions) => getSource(filteredOptions))
    .then((files) => handle(files, data))
    .catch((error) => console.error(error))
}

// https://handlebarsjs.com/api-reference/

const handle = function (sources, data) {
  // pour chaque fichier source :
  sources.forEach((source) => {
    var template = Handlebars.compile(source) // compile le template
    var result = template(data) // ajoute les datas au template
    console.log(result)
  })
}
