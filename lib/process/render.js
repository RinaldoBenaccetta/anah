/**
 * Render and save the file to the output folder
 *
 * @param {object} data
 * @param {function} template
 */
module.exports = (data, template) => {
  return template(data)
}
