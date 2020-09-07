<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="5" class="d-flex flex-column">
        <h2 class="text-h4 text-uppercase mb-6">Por qué "Ojos del Alma"</h2>
        <p class="text-body-1">
          Porque te proponemos mejorar tu vida. Darle oxígeno a tus pulmones, música de hojas que se mecen al compás del viento, admirar la indescriptible belleza de la flor que extiende por primera vez sus pétalos al recibir el calor del sol, deleitar tu paladar con un fruto de tu propio jardín, inspirar el aroma que te atrapa, te hace cerrar los ojos y respirar profundo para colmar tu alma, acariciar tu piel con el roce de tus pies sobre el pasto fresco en el atardecer de tus días.<br />
          <strong>Ojos del Alma</strong> pone los 5 sentidos a construír una nueva versión de ti.
        </p>
      </v-col>
      <v-spacer />
      <v-col cols="12" md="6">
        <v-row>
          <v-col cols="12">
            <v-img
              :src="imagePath(photo.sm)"
              :srcset="`${imagePath(photo.sm)} 640w,
                      ${imagePath(photo.md)} 1280w,
                      ${imagePath(photo.lg)} 1920w`"
              sizes="(min-width: 960px) 50vw, 100vw"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import imageMixin from '@/mixins/images'

export default {
  name: 'porque',
  mixins: [imageMixin],
  data () {
    return {
      photo: {
        sm: '/porque-640w-min.jpg',
        md: '/porque-1280w-min.jpg',
        lg: '/porque-1920w-min.jpg'
      }
    }
  }
}
</script>
