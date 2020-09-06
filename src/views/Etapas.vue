<template>
  <div class="etapas">
    <section class="section-spacing">
      <HeroSecondary :header="header" />
    </section>

    <section class="section-spacing">
      <v-container>
        <Etapa
          v-for="(etapa, i) in etapas"
          :key="etapa.name"
          :etapa="etapa"
        >
          <!-- render divider only if child is not the last one -->
          <template v-slot:divider>
            <v-divider v-if="etapas.length - i > 1" class="my-10" />
          </template>
        </Etapa>
      </v-container>
    </section>
  </div>
</template>

<script>
import Etapa from '@/components/Etapas/Etapa'
import HeroSecondary from '@/components/HeroSecondary'

export default {
  name: 'etapas',
  components: {
    Etapa,
    HeroSecondary
  },
  data () {
    return {
      header: {
        xs: '/etapas-portada-640w-min.jpg',
        sm: '/etapas-portada-1280w-min.jpg',
        md: '/etapas-portada-1920w-min.jpg',
        title: 'Etapas',
        subtitle: 'Conocé cómo trabajamos'
      },
      etapas: [
        {
          name: 'Entrevista',
          description: 'La primera reunión presencial, fundamental para conocernos, contarnos sus necesidades y tomar contacto con el espacio. Esta visita tiene un costo el cual será descontado del presupuesto final.',
          img: {
            sm: '/entrevista-500w-min.jpg',
            md: '/entrevista-900w-min.jpg',
            lg: '/entrevista-1600w-min.jpg'
          }
        },
        {
          name: 'Croquis preliminares',
          description: 'Esbozos de las primeras propuestas, que pueden tener modificaciones. Realizados generalmente a mano alzada para mostrar dimensiones, texturas y colores.',
          img: [
            {
              sm: '/croquis-1-500w-min.jpg',
              md: '/croquis-1-900w-min.jpg',
              lg: '/croquis-1-1600w-min.jpg'
            },
            {
              sm: '/croquis-2-500w-min.jpg',
              md: '/croquis-2-900w-min.jpg',
              lg: '/croquis-2-1600w-min.jpg'
            }
          ]
        },
        {
          name: 'Anteproyecto',
          description: 'Muestra los distintos elementos de la composición espacial, materiales y zonificación. Incluímos una presentación 3D para poder apreciar las cualidades del proyecto. Presentación de presupuesto estimado, el cual estará divido por rubro y sectores del proyecto para un cómodo manejo del cliente.',
          img: {
            sm: '/anteproyecto-500w-min.jpg',
            md: '/anteproyecto-900w-min.jpg',
            lg: '/anteproyecto-1600w-min.jpg'
          }
        },
        {
          name: 'Proyecto',
          description: 'Confirmación del diseño y ajuste del Presupuesto (si correspondiere). Con ésto, se presentarán los Planos técnicos mostrando los detalles constructivos, sistemas de iluminación, riego, estructuras, plano de plantación. La finalidad de estos planos es para el caso en que nuestro trabajo finalice en el Proyecto.',
          img: {
            sm: '/proyecto-500w-min.jpg',
            md: '/proyecto-900w-min.jpg',
            lg: '/proyecto-1600w-min.jpg'
          }
        },
        {
          name: 'Ejecución',
          description: '¡Momento de hacer realidad los planos!',
          img: {
            sm: '/ejecucion-500w-min.jpg',
            md: '/ejecucion-900w-min.jpg',
            lg: '/ejecucion-1600w-min.jpg'
          }
        }
      ]
    }
  }
}
</script>
