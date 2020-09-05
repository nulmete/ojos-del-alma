<template>
  <v-img
    :max-height="maxHeight"
    :src="header.xs"
    :srcset="`${header.xs} 640w,
              ${header.sm} 1280w,
              ${header.md} 1920w`"
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
