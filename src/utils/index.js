function sleep(seconds) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res()
    }, seconds * 1000)
  })
}

exports.sleep = sleep
