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
        :src="imagePath(slide.sm)"
        :srcset="`${imagePath(slide.sm)} 640w,
                ${imagePath(slide.md)} 1280w,
                ${imagePath(slide.lg)} 1920w`"
        >
        <v-overlay class="overlay" :absolute="true">
          <v-container class="spacing text-center">
            <h1 class="text-h4 text-md-h3 text-lg-h2 font-weight-bold text-center grey--text text--lighten-5 mb-2">
              {{ slide.title }}
            </h1>
            <h4 class="subtitle-1 font-weight-light text-center grey--text text--lighten-5 mb-6">
              {{ slide.text }}
            </h4>
            <v-btn
              x-large
              color="light-green darken-4"
              class="white--text"
            >
              Conocé más
            </v-btn>
          </v-container>
        </v-overlay>
      </v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import imageMixin from '@/mixins/images'

export default {
  name: 'hero',
  mixins: [imageMixin],
  data () {
    return {
      slides: [
        {
          sm: '/portada-1-640w-min.jpg',
          md: '/portada-1-1280w-min.jpg',
          lg: '/portada-1-1920w-min.jpg',
          title: 'Diseñá tu jardín',
          text: 'Todo jardín empieza con una historia de amor. Antes de que cualquier árbol sea plantado o un estanque construido, es necesario que ellos hayan nacido dentro del alma'
        },
        {
          sm: '/portada-2-640w-min.jpg',
          md: '/portada-2-1280w-min.jpg',
          lg: '/portada-2-1920w-min.jpg',
          title: 'Diseñá tu jardín',
          text: 'Quien no planta el jardín en su interior, no planta jardines en el exterior y tampoco pasea por ellos'
        },
        {
          sm: '/portada-3-640w-min.jpg',
          md: '/portada-3-1280w-min.jpg',
          lg: '/portada-3-1920w-min.jpg',
          title: 'Diseñá tu jardín',
          text: 'Tu jardín será los ojos de tu alma'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  .v-overlay__scrim {
    opacity: .65 !important;
  }
</style>
