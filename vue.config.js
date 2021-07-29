'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
const name = 'vue template' // page title
module.exports = {
  lintOnSave: false,
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
