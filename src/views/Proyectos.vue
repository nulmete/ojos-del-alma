<template>
  <HeroSecondary :header="header" class="en-construccion" />
</template>

<script>
import HeroSecondary from '@/components/HeroSecondary'

export default {
  name: 'proyectos',
  components: {
    HeroSecondary
  },
  data () {
    return {
      header: {
        xs: '/proyectos-portada-en-construccion-640w-min.jpg',
        sm: '/proyectos-portada-en-construccion-1280w-min.jpg',
        md: '/proyectos-portada-en-construccion-1920w-min.jpg',
        title: 'En construcción',
        subtitle: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .en-construccion {
    height: 100vh;
  }
</style>
