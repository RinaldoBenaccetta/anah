'use strict'

/**
 * If the provided key is in object, return true.
 * Else return False.
 *
 * @param {string} key
 * @param {object} object
 */
const isInObject = (key, object) => {
  return key in object
}

module.exports = isInObject
