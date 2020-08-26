<template>
  <v-carousel cycle>
    <v-carousel-item
      v-for="(item, i) in testimonios"
      :key="i"
      :src="item.src"
    >
      <v-overlay :absolute="true">
        <v-container>
          <p class="text-caption text-md-body-2 grey--text text--lighten-5">
            {{ item.text }}
          </p>
        </v-container>
      </v-overlay>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'testimonios',
  data () {
    return {
      testimonios: [
        {
          src: require('../../assets/fotos/portada/1.jpg'),
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit similique nisi asperiores eligendi, natus quis itaque eveniet voluptatum nam dolores voluptates ducimus repellendus minima quia.'
        },
        {
          src: require('../../assets/fotos/portada/2.jpg'),
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit similique nisi asperiores eligendi, natus quis itaque eveniet voluptatum nam dolores voluptates ducimus repellendus minima quia.'
        },
        {
          src: require('../../assets/fotos/portada/3.jpg'),
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit similique nisi asperiores eligendi, natus quis itaque eveniet voluptatum nam dolores voluptates ducimus repellendus minima quia.'
        },
        {
          src: require('../../assets/fotos/portada/4.jpg'),
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit similique nisi asperiores eligendi, natus quis itaque eveniet voluptatum nam dolores voluptates ducimus repellendus minima quia.'
        }
      ]
    }
  }
}
</script>
