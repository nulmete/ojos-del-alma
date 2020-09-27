module.exports = {
  css: {
    loaderOptions: {
      scss: {
        // eslint-disable-next-line
        prependData: `@import "@/sass/variables.scss";`
      }
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
