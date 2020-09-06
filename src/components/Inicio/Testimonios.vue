<template>
  <v-carousel height="70vh" cycle>
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-img
        height="100%"
        :src="imagePath(slide.sm)"
        :srcset="`${imagePath(slide.sm)} 640w,
                ${imagePath(slide.md)} 1280w,
                ${imagePath(slide.lg)} 1920w`"
      >
      </v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import imageMixin from '@/mixins/images'

export default {
  name: 'testimonios',
  mixins: [imageMixin],
  data () {
    return {
      slides: [
        {
          sm: '/testimonio-1-640w-min.jpg',
          md: '/testimonio-1-1280w-min.jpg',
          lg: '/testimonio-1-1920w-min.jpg'
        },
        {
          sm: '/testimonio-2-640w-min.jpg',
          md: '/testimonio-2-1280w-min.jpg',
          lg: '/testimonio-2-1920w-min.jpg'
        },
        {
          sm: '/testimonio-3-640w-min.jpg',
          md: '/testimonio-3-1280w-min.jpg',
          lg: '/testimonio-3-1920w-min.jpg'
        }
      ]
    }
  }
}
</script>
