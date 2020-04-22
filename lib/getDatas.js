const loadJsonFile = require('load-json-file')
const loadYamlFile = require('load-yaml-file')
const globby = require('globby')
const path = require('path')
const getFullPath = require('./tools/getFullPath')

// todo : test
// todo : add warning for double file name : json and yml

module.exports = async (files) => {
  const glob = await globby(files.datas)

  const output = {}

  for (const file of glob) {
    Object.assign(output, await parseFile(file))
  }

  return output
}

const parseFile = async (file) => {
  const extension = await path.extname(file)
  const fullPath = await getFullPath(file)
  if (extension === '.json') {
    return await loadJsonFile(fullPath)
  } else if (extension === '.yml') {
    return await loadYamlFile(fullPath)
  }
}
