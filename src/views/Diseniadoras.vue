<template>
  <div class="diseniadoras">
    <section class="section-spacing">
      <HeroSecondary :header="header" />
    </section>

    <section class="section-spacing">
      <v-container>
          <v-row>
            <Diseniadora v-for="(diseniadora, i) in diseniadoras" :key="i" :diseniadora="diseniadora" />
          </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
import HeroSecondary from '@/components/HeroSecondary'
import Diseniadora from '@/components/Diseniadoras/Diseniadora'

export default {
  components: {
    HeroSecondary,
    Diseniadora
  },
  data () {
    return {
      header: {
        xs: require('@/assets/fotos/diseniadoras/diseniadoras-portada-640w-min.jpg'),
        sm: require('@/assets/fotos/diseniadoras/diseniadoras-portada-1280w-min.jpg'),
        md: require('@/assets/fotos/diseniadoras/diseniadoras-portada-1920w-min.jpg'),
        title: 'Las diseñadoras',
        subtitle: 'Conocé más sobre nosotras'
      },
      icons: [
        'mdi-facebook',
        'mdi-instagram'
      ],
      diseniadoras: [
        {
          avatar: require('@/assets/fotos/diseniadoras/lmedina-min.png'),
          name: 'Laura Beatriz Medina',
          job: 'Paisajista',
          profile: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, fugiat ratione.'
        },
        {
          avatar: require('@/assets/fotos/diseniadoras/lb-min.png'),
          name: 'Laura 2',
          job: 'Arquitecta',
          profile: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, fugiat ratione.'
        }
      ]
    }
  }
}
</script>
