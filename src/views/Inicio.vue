<template>
  <div class="inicio">
    <!-- Hero -->
    <section class="hero">
      <Hero />
    </section>

    <!-- Sección "Por qué 5 sentidos" -->
    <!-- TODO: mover a "Las diseñadoras" -->
    <!-- <section class="section-spacing">
      <Porque />
    </section> -->

    <!-- Sección Testimonios -->
    <!-- TODO: mover a "Testimonios" -->
    <!-- <section class="section-spacing">
      <Testimonios />
    </section> -->
  </div>
</template>

<script>
import Hero from '@/components/Hero'

export default {
  name: 'inicio',
  components: {
    Hero
  }
}
</script>
