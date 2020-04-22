const chalk = require('chalk')

const colors = { warning: chalk.black.bgYellow, info: chalk.blue.bgWhite }

const warning = (message) => {
  console.warn(colors.warning(message))
}

const info = (message) => {
  console.warn(colors.info(message))
}

module.exports = {
  warning,
  info
}
