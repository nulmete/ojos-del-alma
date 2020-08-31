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
      <v-col cols="12" md="6">
        <v-row>
          <v-col cols="12">
            <v-img
              :src="photo.sm"
              :srcset="`${photo.sm} 640w,
                      ${photo.md} 1280w,
                      ${photo.lg} 1920w`"
              sizes="(min-width: 960px) 50vw, 100vw"
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
  data () {
    return {
      photo: {
        sm: require('@/assets/fotos/porque/porque-640w-min.jpg'),
        md: require('@/assets/fotos/porque/porque-1280w-min.jpg'),
        lg: require('@/assets/fotos/porque/porque-1920w-min.jpg')
      }
    }
  }
}
</script>
