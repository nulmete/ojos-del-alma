<template>
  <section
    :class="['hero', { 'hero--etapas': $route.name === 'etapas' }]">
    <h1 class="hero__text">
      <em><strong>“{{ heroHeading }}”</strong></em>
    </h1>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    heroHeading: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  .hero {
    min-height: 100vh;
    background-image: linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)), url('../assets/fotos/portada/8.jpg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;

    &--etapas {
      background-image: linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)), url('../assets/fotos/portada/6.jpg');
    }

    &__text {
      font-size: 4rem;
      font-weight: 400;
      position: absolute;
      top: 65%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: $color-white;
      padding: 1.5rem;
      background: rgba(0,0,0,.6);
    }

    &--etapas &__text {
      font-size: 3.4rem;
      font-weight: 300;
      left: 5%;
      transform: translate(0);
      max-width: 50vw;
    }
  }
</style>
