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
        xs: require('@/assets/fotos/proyectos/proyectos-portada-en-construccion-640w-min.jpg'),
        sm: require('@/assets/fotos/proyectos/proyectos-portada-en-construccion-1280w-min.jpg'),
        md: require('@/assets/fotos/proyectos/proyectos-portada-en-construccion-1920w-min.jpg'),
        lg: require('@/assets/fotos/proyectos/proyectos-portada-en-construccion-3000w-min.jpg'),
        xl: require('@/assets/fotos/proyectos/proyectos-portada-en-construccion-6000w-min.jpg'),
        title: 'En construcción',
        subtitle: ''
      }
    }
  }
}
</script>
