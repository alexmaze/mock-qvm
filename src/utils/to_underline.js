const fs = require("fs")
const path = require("path")
const data = require("./input.json")

const result = JSON.stringify(replaceKeys(data), null, 2)

fs.writeFile(path.join(__dirname, "output.json"), result)

function replaceKeys(obj) {
  if (typeof obj !== "object") {
    return obj
  }

  if (obj instanceof Array) {
    for (let i = 0; i < obj.length; i++) {
      obj[i] = replaceKeys(obj[i])
    }
  } else {
    const keys = Object.keys(obj)
    const underline_keys = keys.map(k => toUnderline(k))

    const newObj = {}

    for (let i = 0; i < keys.length; i++) {
      newObj[underline_keys[i]] = replaceKeys(obj[keys[i]])
    }
    obj = newObj
  }

  return obj
}

function toUnderline(str) {
  const ret = str.replace(/([A-Z])/g, "_$1").toLowerCase()
  if (ret[0] == "_") {
    return ret.substr(1)
  }
  return ret
}
