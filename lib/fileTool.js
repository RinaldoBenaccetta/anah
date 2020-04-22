const fse = require('fs-extra')
const path = require('path')

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

const getFileName = (file) => {
  return path.parse(file).name
}

module.exports = {
  readFile,
  getFileName
}
