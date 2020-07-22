<template>
  <div class="etapas">
    <hero :hero-heading="heroHeading" />
    <section class="container">
      <main-grid v-for="item in content" :key="item.heading" :heading="item.heading" :text="item.text" :index="Math.floor(Math.random() * 9) + 1" />
    </section>
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import MainGrid from '@/components/MainGrid'

export default {
  components: {
    Hero,
    MainGrid
  },
  data () {
    return {
      heroHeading: 'La experiencia no se puede contar, se tiene que vivir',
      content: [
        {
          heading: 'Entrevista',
          text: 'La primera reunión presencial, fundamental para conocernos, contarnos sus necesidades y tomar contacto con el espacio. Esta visita tiene un costo el cual será descontado del presupuesto final.'
        },
        {
          heading: 'Croquis preliminares',
          text: 'Esbozos de las primeras propuestas, que pueden tener modificaciones. Realizados generalmente a mano alzada para mostrar dimensiones, texturas y colores.'
        },
        {
          heading: 'Anteproyecto',
          text: 'Muestra los distintos elementos de la composición espacial, materiales y zonificación. Incluímos una presentación 3D para poder apreciar las cualidades del proyecto. Presentación de presupuesto estimado, el cual estará divido por rubro y sectores del proyecto para un cómodo manejo del cliente.'
        },
        {
          heading: 'Proyecto',
          text: 'Confirmación del diseño y ajuste del Presupuesto (si correspondiere). Con ésto, se presentarán los Planos técnicos mostrando los detalles constructivos, sistemas de iluminación, riego, estructuras, plano de plantación. La finalidad de estos planos es para el caso en que nuestro trabajo finalice en el Proyecto.'
        },
        {
          heading: 'Ejecución',
          text: '¡Momento de hacer realidad los planos!'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .etapas .container {
    padding-top: 12rem;
    padding-bottom: 6rem;
  }
</style>
