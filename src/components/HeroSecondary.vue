<template>
  <v-img
    class="hero-secondary"
    :src="imagePath(header.xs)"
    :srcset="`${imagePath(header.xs)} 640w,
              ${imagePath(header.sm)} 1280w,
              ${imagePath(header.md)} 1920w`"
  >
    <v-overlay :absolute="true">
      <v-row
        class="fill-height"
        align="center"
        justify="center"
      >
        <v-col class="text-center" cols="12">
          <h1 class="text-h4 text-lg-h3 font-weight-thin text-center grey--text text--lighten-5 mb-2">
            {{ header.title }}
          </h1>
          <h4 class="text-subtitle-2 text-md-subtitle-1">
            {{ header.subtitle }}
          </h4>
        </v-col>
      </v-row>
    </v-overlay>
  </v-img>
</template>

<script>
import imageMixin from '@/mixins/images'

export default {
  mixins: [imageMixin],
  props: {
    header: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .hero-secondary {
    height: 40vw;
    max-height: 100vh;

    @media screen and (max-width: 900px) {
      height: 70vh;
    }
  }
</style>
