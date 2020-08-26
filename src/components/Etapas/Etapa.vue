<template>
  <div class="etapa">
    <v-row>
      <v-col cols="12" md="4" class="etapa__text d-flex flex-column">
        <h2 class="text-h4 text-uppercase mb-6">
          {{ etapa.name }}
        </h2>
        <p class="text-body-1">
          {{ etapa.description }}
        </p>
      </v-col>
      <v-col cols="12" md="8" class="etapa__image d-flex" >
          <v-col cols="12" md="6">
            <v-img
              aspect-ratio="1.3"
              :src="require('../../assets/fotos/portada/3.jpg')"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-img
              aspect-ratio="1.3"
              :src="require('../../assets/fotos/portada/4.jpg')"
            />
          </v-col>
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
  .etapa:nth-child(even) .etapa__image {
    order: 1;
  }

  .etapa:nth-child(even) .etapa__text {
    order: 2;
  }
</style>
