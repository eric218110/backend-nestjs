const tsconfig = require('./tsconfig.json')

const autoImportPaths = () => {
  const { paths, rootDir } = tsconfig.compilerOptions
  let objPath
  let result = []
  let autoPath = {}
  for (
    objPath = paths;
    objPath !== null;
    objPath = Object.getPrototypeOf(objPath)
  ) {
    if (result !== null) {
      let resultPaths = result.concat(Object.getOwnPropertyNames(objPath))
      for (const path of resultPaths) {
        if (path.indexOf('@', 0) === 0) {
          let value = paths[path][0].replace(/[.]+/g, '')
          value = value.replace(/[*]+/g, '')
          value = `./${rootDir}${value}`
          let index = path.replace(/[*]+/g, '')
          index = index.replace(/[/]+/g, '')
          autoPath = {
            ...autoPath,
            [index]: value
          }
        }
      }
    }
  }
  return autoPath
}

module.exports = autoImportPaths
