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
      :src="slide.src"
    >
      <v-overlay :absolute="true">
        <v-container>
          <h1 class="text-h5 text-md-h4 text-lg-h3 font-weight-light text-center grey--text text--lighten-5">
            {{ slide.text }}
          </h1>
        </v-container>
      </v-overlay>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'hero',
  props: {
    slides: {
      type: Array,
      required: true
    }
  }
}
</script>
