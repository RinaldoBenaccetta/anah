'use strict'

const chalk = require('chalk')

const applicationName = 'anah'

const colors = {
  warning: {
    positive: chalk.yellowBright,
    negative: chalk.black.bgYellowBright
  },
  info: {
    positive: chalk.cyanBright,
    negative: chalk.blue.bgWhite
  },
  error: {
    positive: chalk.redBright,
    negative: chalk.black.bgRedBright
  },
  done: {
    positive: chalk.green,
    negative: chalk.black.bgGreen
  }
}

const linePrefix = {
  warning: ' ! ',
  info: ' i ',
  error: ' × ',
  done: ' √ '
}

/**
 * @function logOutput
 *
 * @description
 * Formats and returns the log.
 *
 * @param {String} level
 * @param {String} message
 *
 * @returns {String}
 */
const logOutput = (level, message) => {
  const logPreffix = colors[level].negative(linePrefix[level])
  const logLevel = colors[level].positive(level)

  return ` ${logPreffix} [${applicationName}] ${logLevel} : ${message}`
}

/**
 * @function warning
 *
 * @description
 * Logs a formatted warning message.
 *
 * @param {String} message
 */
const warning = (message) => {
  console.warn(logOutput('warning', message))
}

/**
 * @function info
 *
 * @description
 * Logs a formatted info message.
 *
 * @param {String} message
 */
const info = (message) => {
  console.info(logOutput('info', message))
}

/**
 * @function error
 *
 * @description
 * Logs a formatted error message.
 *
 * @param {String} message
 */
const error = (message) => {
  console.error(logOutput('error', message))
}

/**
 * @function done
 *
 * @description
 * Logs a formatted done message.
 *
 * @param {String} message
 */
const done = (message) => {
  console.log(logOutput('done', message))
}

module.exports = {
  warning,
  info,
  error,
  done
}
