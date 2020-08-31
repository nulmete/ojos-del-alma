<template>
  <v-carousel height="70vh" cycle>
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-img
        height="100%"
        :src="slide.sm"
        :srcset="`${slide.sm} 640w,
                ${slide.md} 1280w,
                ${slide.lg} 1920w`"
      >
        <!-- <v-overlay :absolute="true">
          <v-container>
            <p class="text-caption text-md-body-2 grey--text text--lighten-5">
              {{ item.text }}
            </p>
          </v-container>
        </v-overlay> -->
      </v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'testimonios',
  data () {
    return {
      slides: [
        {
          sm: require('@/assets/fotos/testimonios/testimonio-1-640w-min.jpg'),
          md: require('@/assets/fotos/testimonios/testimonio-1-1280w-min.jpg'),
          lg: require('@/assets/fotos/testimonios/testimonio-1-1920w-min.jpg')
        },
        {
          sm: require('@/assets/fotos/testimonios/testimonio-2-640w-min.jpg'),
          md: require('@/assets/fotos/testimonios/testimonio-2-1280w-min.jpg'),
          lg: require('@/assets/fotos/testimonios/testimonio-2-1920w-min.jpg')
        },
        {
          sm: require('@/assets/fotos/testimonios/testimonio-3-640w-min.jpg'),
          md: require('@/assets/fotos/testimonios/testimonio-3-1280w-min.jpg'),
          lg: require('@/assets/fotos/testimonios/testimonio-3-1920w-min.jpg')
        }
      ]
    }
  }
}
</script>
