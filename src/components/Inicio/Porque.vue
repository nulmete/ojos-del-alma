<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4" class="d-flex flex-column">
        <h2 class="text-h4 text-uppercase mb-6">Por qué "5 Sentidos"</h2>
        <p class="text-body-1">
          Porque te proponemos mejorar tu vida. Darle oxígeno a tus pulmones, música de hojas que se mecen al compás del viento, admirar la indescriptible belleza de la flor que extiende por primera vez sus pétalos al recibir el calor del sol, deleitar tu paladar con un fruto de tu propio jardín, inspirar el aroma que te atrapa, te hace cerrar los ojos y respirar profundo para colmar tu alma, acariciar tu piel con el roce de tus pies sobre el pasto fresco en el atardecer de tus días. 5 Sentidos construye una nueva versión de ti.
        </p>
      </v-col>
      <v-spacer />
      <v-col cols="12" md="7">
        <v-row>
          <v-col cols="12" sm="6">
            <v-img
              aspect-ratio="1"
              :src="slides[1].src"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-img
              aspect-ratio="1"
              :src="slides[0].src"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'porque',
  props: {
    slides: {
      type: Array,
      required: true
    }
  }
}
</script>
