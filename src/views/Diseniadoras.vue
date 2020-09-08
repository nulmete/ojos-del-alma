<template>
  <div class="diseniadoras section-spacing">
    <HeroSecondary :header="header" />

    <v-container class="section-inner-spacing">

      <section class="nosotras text-body-1">
          <p>Ambas paisajistas siempre se sintieron movilizadas por el contacto con la naturaleza; la casualidad, hizo que coincidieran en el lugar de estudio.</p>
          <p>Con el transcurso del tiempo, se fueron dando cuenta que tenían una forma de trabajar muy similar, afinidad, el mismo ímpetu y deseos de poder transformar los sueños de otras personas en una realidad.</p>
          <p>Las unió un pensamiento de superación que se convirtió en una acción espontánea y habitual de trabajo.</p>
      </section>

      <v-divider></v-divider>

      <section class="row">
        <v-col cols="12">
          <h2 class="text-h4 text-md-h3 font-weight-bold text-center mb-4">Equipo</h2>
        </v-col>
        <Diseniadora v-for="(diseniadora, i) in diseniadoras" :key="i" :diseniadora="diseniadora" />
      </section>

    </v-container>
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
        xs: '/diseniadoras-portada-640w-min.jpg',
        sm: '/diseniadoras-portada-1280w-min.jpg',
        md: '/diseniadoras-portada-1920w-min.jpg',
        title: 'Las diseñadoras',
        subtitle: 'Conocé más sobre nosotras'
      },
      icons: [
        'mdi-facebook',
        'mdi-instagram'
      ],
      diseniadoras: [
        {
          avatar: '/lmedina-min.png',
          name: 'Laura Beatriz Medina',
          job: 'Paisajista',
          profile: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium accusantium nostrum animi quo architecto ex quaerat earum! Dolore, iste quas exercitationem ipsa asperiores non. Iste atque magnam maxime.'
        },
        {
          avatar: '/lb-2-min.png',
          name: 'Maria Laura Bustos',
          job: 'Arquitecta Paisajista',
          profile: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium accusantium nostrum animi quo architecto ex quaerat earum! Dolore, iste quas exercitationem ipsa asperiores non. Iste atque magnam maxime.'
        }
      ]
    }
  }
}
</script>
