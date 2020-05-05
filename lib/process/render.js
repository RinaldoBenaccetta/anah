'use strict'

/**
 * @function Render
 *
 * @description
 * Render and return the compiled page.
 *
 * @param {object} data The dataset.
 * @param {function} template The compiled page.
 *
 * @returns {string} The page ready to save.
 */
module.exports = (data, template) => {
  return template(data)
}
