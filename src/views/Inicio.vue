<template>
  <div class="inicio">
    <!-- Hero -->
    <section class="mb-16">
      <Hero :slides="slides" />
    </section>

    <!-- Sección "Por qué 5 sentidos" -->
    <section class="mb-16">
      <Porque :slides="slides" />
    </section>

    <!-- Sección Testimonios -->
    <section class="mb-16">
      <Testimonios />
    </section>

    <!-- Sección Contacto -->
    <section class="mb-16">
      <Contacto />
    </section>
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import Porque from '@/components/Inicio/Porque'
import Testimonios from '@/components/Inicio/Testimonios'
import Contacto from '@/components/Inicio/Contacto'

export default {
  name: 'inicio',
  components: {
    Hero,
    Porque,
    Testimonios,
    Contacto
  },
  data () {
    return {
      slides: [
        {
          src: require('../assets/fotos/portada/6.jpg'),
          text: 'Quien no planta el jardín en su interior, no planta jardines en el exterior y tampoco pasea por ellos'
        },
        {
          src: require('../assets/fotos/portada/7.jpg'),
          text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi accusantium consectetur quas laboriosam'
        }
      ]
    }
  }
}
</script>
