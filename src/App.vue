<template>
  <v-app>
    <Navbar />
    <v-main class="grey lighten-4">
      <router-view />
    </v-main>
    <v-footer padless v-if="$route.path !== '/proyectos'">
      <v-card
        flat
        tile
        width="100%"
        class="grey darken-4 white--text text-center"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>5 Sentidos</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data () {
    return {
      icons: [
        'mdi-facebook',
        'mdi-instagram'
      ]
    }
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

body {
  box-sizing: border-box;
}

::selection {
  background-color: #C5E1A5;
}

.section-spacing {
  margin-bottom: 10rem;
}
</style>
