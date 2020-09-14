export default {
  methods: {
    imagePath (image) {
      // image: /testimonio-1-640w-min.jpg
      // dev: `@/assets/img/${image}`
      // prod: `https://ojosdelalma.com/img/${image}`
      if (process.env.NODE_ENV === 'production') {
        return `${process.env.VUE_APP_IMG_PATH}${image}`
      } else {
        return require(`${process.env.VUE_APP_IMG_PATH}${image}`)
      }
    }
  }
}
