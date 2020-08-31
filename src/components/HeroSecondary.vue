<template>
  <v-img
    :max-height="maxHeight"
    :src="header.sm"
    :srcset="`${header.sm} 640w,
              ${header.md} 1280w,
              ${header.lg} 1920w,
              ${header.xl} 6000w`"
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
export default {
  props: {
    header: {
      type: Object,
      required: true
    },
    maxHeight: {
      type: String,
      required: false,
      default: '45vh'
    }
  }
}
</script>
