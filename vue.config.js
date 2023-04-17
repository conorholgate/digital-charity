const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: "@import '@/styles/variables.scss';",
      },
      sass: {
        additionalData: "@import '@/styles/variables.scss'",
      },
    },
  },
})
