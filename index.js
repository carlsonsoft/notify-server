'use strict'

const exec = require('child_process').exec
const cmd = 'esno src/index.ts'

const e = function() {
  return new Promise((resolve) => {
    exec(cmd, (error, stdout, stderr) => {
      console.log(error, stdout, stderr)
      resolve(error)
    })
  })
}

exports.handler = async (event) => {
  await e()
  return event
}