<template>
  <v-carousel
    cycle
    height="100vh"
    hide-delimiters
    hide-delimiter-background
    :show-arrows="false"
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-img
        height="100vh"
        :src="slide.sm"
        :srcset="`${slide.sm} 640w,
                ${slide.md} 1280w,
                ${slide.lg} 1920w`"
        >
        <v-overlay :absolute="true">
          <v-container>
            <h1 class="text-h5 text-md-h4 text-lg-h3 font-weight-light text-center grey--text text--lighten-5">
              {{ slide.text }}
            </h1>
          </v-container>
        </v-overlay>
      </v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'hero',
  data () {
    return {
      slides: [
        {
          sm: require('@/assets/fotos/portada/portada-1-640w-min.jpg'),
          md: require('@/assets/fotos/portada/portada-1-1280w-min.jpg'),
          lg: require('@/assets/fotos/portada/portada-1-1920w-min.jpg'),
          text: 'Text 1'
        },
        {
          sm: require('@/assets/fotos/portada/portada-2-640w-min.jpg'),
          md: require('@/assets/fotos/portada/portada-2-1280w-min.jpg'),
          lg: require('@/assets/fotos/portada/portada-2-1920w-min.jpg'),
          text: 'Text 2'
        },
        {
          sm: require('@/assets/fotos/portada/portada-3-640w-min.jpg'),
          md: require('@/assets/fotos/portada/portada-3-1280w-min.jpg'),
          lg: require('@/assets/fotos/portada/portada-3-1920w-min.jpg'),
          text: 'Text 3'
        }
      ]
    }
  }
}
</script>
