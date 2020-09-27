<template>
  <div class="diseniadoras section-spacing">
    <HeroSecondary :header="header" />

    <v-container class="section-inner-spacing">

      <section class="row">
        <v-col cols="12">
          <h2 class="text-h4 text-uppercase text-center mb-6">Equipo</h2>
        </v-col>
        <Diseniadora v-for="(diseniadora, i) in diseniadoras" :key="i" :diseniadora="diseniadora" />
      </section>

      <v-divider></v-divider>

      <section class="row">
        <v-col cols="12" md="5">
          <h2 class="text-h4 text-uppercase mb-6">Sobre nosotras</h2>
          <p class="text-body-1">
            Ambas paisajistas siempre nos sentimos movilizadas por el contacto con la naturaleza; la casualidad hizo que coincidiéramos en el lugar de estudio.
          </p>
          <p class="text-body-1">
            Con el transcurso del tiempo, nos fuimos dando cuenta que teníamos una forma de trabajar muy similar, afinidad, el mismo ímpetu y deseos de transformar los sueños de otras personas en una realidad.
          </p>
          <p class="text-body-1">
            Nos unió un pensamiento de superación que se convirtió en una acción espontánea y habitual de trabajo.
          </p>
        </v-col>

        <v-spacer></v-spacer>

        <v-col cols="12" md="6">
          <v-img
            :src="imagePath(photo.sm)"
            :srcset="`${imagePath(photo.sm)} 640w,
                    ${imagePath(photo.md)} 1280w,
                    ${imagePath(photo.lg)} 1920w`"
            sizes="(min-width: 960px) 50vw, 100vw"
          />
        </v-col>
      </section>

      <v-divider></v-divider>

      <section class="row">
        <v-col cols="12">
          <h2 class="text-h4 text-uppercase mb-6">Por qué "Ojos del Alma"</h2>
          <p class="text-body-1">
            Porque te proponemos mejorar tu vida, darle oxígeno a tus pulmones, que puedas admirar la indescriptible belleza de la flor que extiende por primera vez sus pétalos al recibir el calor del sol.
          </p>
          <p class="text-body-1">
            Porque buscamos deleitar tu paladar con un fruto de tu propio jardín, inspirar el aroma que te atrapa, que te hace cerrar los ojos y respirar profundo para colmar tu alma y acariciar tu piel con el roce de tus pies sobre el pasto fresco en el atardecer de tus días.<br />
          </p>
          <p class="text-body-1">
            <strong>Ojos del Alma pone los 5 sentidos para construír tu nueva versión.</strong>
          </p>
        </v-col>
      </section>
    </v-container>
  </div>
</template>

<script>
import HeroSecondary from '@/components/HeroSecondary'
import Diseniadora from '@/components/Diseniadoras/Diseniadora'
import imageMixin from '@/mixins/images'

export default {
  components: {
    HeroSecondary,
    Diseniadora
  },
  mixins: [imageMixin],
  data () {
    return {
      header: {
        xs: '/diseniadoras-portada-640w-min.jpg',
        sm: '/diseniadoras-portada-1280w-min.jpg',
        md: '/diseniadoras-portada-1920w-min.jpg',
        title: 'Quiénes somos',
        subtitle: 'Conocé más sobre nosotras'
      },
      photo: {
        sm: '/porque-640w-min.jpg',
        md: '/porque-1280w-min.jpg',
        lg: '/porque-1920w-min.jpg'
      },
      diseniadoras: [
        {
          avatar: '/lmedina-min.png',
          name: 'Laura Beatriz Medina',
          job: 'Paisajista'
        },
        {
          avatar: '/lb-2-min.png',
          name: 'Maria Laura Bustos',
          job: 'Arquitecta Paisajista'
        }
      ]
    }
  }
}
</script>
