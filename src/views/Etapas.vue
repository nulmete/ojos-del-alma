<template>
  <div class="etapas">
    <section class="mb-16">
      <v-img
        max-height="45vh"
        :src="require('../assets/fotos/portada/8.jpg')"
      >
        <v-overlay :absolute="true">
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-col class="text-center" cols="12">
              <h1 class="text-h4 text-lg-h3 font-weight-thin text-center grey--text text--lighten-5 mb-2">Etapas</h1>
              <h4 class="text-subtitle-2 text-md-subtitle-1">Conocé cómo trabajamos</h4>
            </v-col>
          </v-row>
        </v-overlay>
      </v-img>
    </section>

    <section class="mb-16">
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

export default {
  name: 'etapas',
  components: {
    Etapa
  },
  data () {
    return {
      etapas: [
        {
          name: 'Entrevista',
          description: 'La primera reunión presencial, fundamental para conocernos, contarnos sus necesidades y tomar contacto con el espacio. Esta visita tiene un costo el cual será descontado del presupuesto final.'
        },
        {
          name: 'Croquis preliminares',
          description: 'Esbozos de las primeras propuestas, que pueden tener modificaciones. Realizados generalmente a mano alzada para mostrar dimensiones, descriptionuras y colores.'
        },
        {
          name: 'Anteproyecto',
          description: 'Muestra los distintos elementos de la composición espacial, materiales y zonificación. Incluímos una presentación 3D para poder apreciar las cualidades del proyecto. Presentación de presupuesto estimado, el cual estará divido por rubro y sectores del proyecto para un cómodo manejo del cliente.'
        },
        {
          name: 'Proyecto',
          description: 'Confirmación del diseño y ajuste del Presupuesto (si correspondiere). Con ésto, se presentarán los Planos técnicos mostrando los detalles constructivos, sistemas de iluminación, riego, estructuras, plano de plantación. La finalidad de estos planos es para el caso en que nuestro trabajo finalice en el Proyecto.'
        },
        {
          name: 'Ejecución',
          description: '¡Momento de hacer realidad los planos!'
        }
      ]
    }
  }
}
</script>
