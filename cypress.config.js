const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/v1/',
    watchForFileChanges: false,
    video: false,
    // reporter: "./node_modules/mochawesome/src/mochawesome.js",
    // reporterOptions: {
    //   reportDir: "cypress/reports",
    //   overwrite: false,
    //   html: false,
    //   json: true
    // },
  }
})