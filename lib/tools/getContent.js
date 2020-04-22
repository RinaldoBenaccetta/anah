const read = require('file-reader')
const vinylToString = require('vinyl-contents-tostring')

/**
 * Return an object with content of the specified files in string format.
 *
 * @param {string} files
 */
module.exports = async (files) => {
  const content = await read(files) // this output a stream
  const output = await toString(content)
  return output
}

/**
 * Return an object with stream values converted to strings.
 *
 * @param {object} content
 */
const toString = async (content) => {
  Object.keys(content)
    .forEach(async (key) => {
      // this convert streams to string
      content[key] = await vinylToString(content[key])
    })

  return content
}
