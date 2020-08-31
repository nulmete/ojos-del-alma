<template>
  <HeroSecondary :header="header" :max-height="'100vh'" />
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
        sm: require('../assets/fotos/proyectos/proyectos-portada-en-construccion-640w.jpg'),
        md: require('../assets/fotos/proyectos/proyectos-portada-en-construccion-1280w.jpg'),
        lg: require('../assets/fotos/proyectos/proyectos-portada-en-construccion-1920w.jpg'),
        xl: require('../assets/fotos/proyectos/proyectos-portada-en-construccion-6000w.jpg'),
        title: 'En construcción',
        subtitle: ''
      }
    }
  }
}
</script>
