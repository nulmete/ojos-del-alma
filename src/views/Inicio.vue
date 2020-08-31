<template>
  <div class="inicio">
    <!-- Hero -->
    <section class="section-spacing">
      <Hero />
    </section>

    <!-- Sección "Por qué 5 sentidos" -->
    <section class="section-spacing">
      <Porque />
    </section>

    <!-- Sección Testimonios -->
    <section class="section-spacing">
      <Testimonios />
    </section>

    <!-- Sección Contacto -->
    <section class="section-spacing">
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
  }
}
</script>

<style scoped>
  .hero,
  .porque,
  .testimonios,
  .contacto {
    margin-bottom: 10rem;
  }
</style>
