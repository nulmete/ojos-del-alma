<template>
  <div class="etapa">
    <v-row>
      <v-col cols="12" md="5" class="etapa__text d-flex flex-column">
        <h2 class="text-h4 text-uppercase mb-6">
          {{ etapa.name }}
        </h2>
        <p class="text-body-1">
          {{ etapa.description }}
        </p>
      </v-col>
      <v-spacer class="etapa__spacer"></v-spacer>
      <v-col cols="12" md="6" class="etapa__image d-flex">
          <template v-if="Array.isArray(etapa.img)">
            <v-col cols="6" v-for="(img, i) in etapa.img" :key="i">
              <v-img
                aspect-ratio="1"
                :src="img.sm"
                :srcset="`${img.sm} 500w,
                          ${img.md} 900w,
                          ${img.lg} 1600w`"
                sizes="(min-width: 960px) 25vw, 50vw"
              />
            </v-col>
          </template>
          <template v-else>
            <v-img
              :src="etapa.img.sm"
              :srcset="`${etapa.img.sm} 500w,
                        ${etapa.img.md} 900w,
                        ${etapa.img.lg} 1600w`"
              sizes="(min-width: 960px) 50vw, 100vw"
            />
          </template>
      </v-col>
    </v-row>

    <slot name="divider" />
  </div>
</template>

<script>
export default {
  props: {
    etapa: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  @media only screen and (min-width: 960px) {
    .etapa:nth-child(even) .etapa__image {
      order: 0;
    }

    .etapa:nth-child(even) .etapa__spacer {
      order: 1;
    }

    .etapa:nth-child(even) .etapa__text {
      order: 2;
    }
  }
</style>
