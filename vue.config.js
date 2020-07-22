module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // Here we can specify the older indent syntax formatted SASS
        // Note that there is *not* a semicolon at the end of the below line
        // eslint-disable-next-line
        prependData: `@import "@/scss/_vars.sass"`
      },
      scss: {
        // Here we can use the newer SCSS flavor of Sass.
        // Note that there *is* a semicolon at the end of the below line
        // eslint-disable-next-line
        prependData: `@import "@/scss/_vars.scss";`
      }
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
