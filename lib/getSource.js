var fse = require('fs-extra')

/**
 * crée un array avec tout les contenus.
 * https://flaviocopes.com/javascript-async-await-array-map/
 *
 * @param {*} files
 */
// const getSource = async (files) => {
//   return Promise.all(files.map((file) => readFile(file)))
// }
module.exports = async (files) => {
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
