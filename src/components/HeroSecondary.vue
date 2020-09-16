<template>
  <header class="hero-secondary">
    <v-img
      class="hero-secondary__img"
      :src="imagePath(header.xs)"
      :srcset="`${imagePath(header.xs)} 640w,
                ${imagePath(header.sm)} 1280w,
                ${imagePath(header.md)} 1920w`"
    >
      <v-overlay :absolute="true">
        <v-row class="align-center flex-column">
          <h1 class="text-h3 text-md-h2 mb-3">
            {{ header.title }}
          </h1>
          <h3 class="text-subtitle-2 text-md-subtitle-1 font-weight-light">
            {{ header.subtitle }}
          </h3>
        </v-row>
      </v-overlay>
    </v-img>
  </header>
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

<style lang="scss">
  .hero-secondary {
    height: 65vh;

    &__img {
      height: 100%;
    }

    .v-image__image {
      background-attachment: fixed;
      background-position: top top !important;
    }
  }
</style>
