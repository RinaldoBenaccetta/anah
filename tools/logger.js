'use strict'

const chalk = require('chalk')

const colors = {
  warningPrefix: chalk.black.bgYellowBright,
  warning: chalk.yellowBright,
  infoPrefix: chalk.blue.bgWhite,
  info: chalk.cyanBright,
  errorPrefix: chalk.black.bgRedBright,
  error: chalk.redBright
}

const warning = (message) => {
  console.warn(colors.warningPrefix('!!!') + ' ' + colors.warning(message))
}

const info = (message) => {
  console.info(colors.infoPrefix(' i ') + ' ' + colors.info(message))
}

const error = (message) => {
  // console.error(colors.error('!!!') + message.stack)
  console.error(colors.errorPrefix('!!!') + ' ' + colors.error(message))
}

module.exports = {
  warning,
  info,
  error
}
