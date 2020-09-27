<template>
  <v-app-bar tag="nav" flat absolute color="rgba(0, 0, 0, 0.6)" class="white--text px-5">
    <v-btn icon :to="{ name: 'inicio' }" exact exact-active-class="home" text color="white">
      <v-img :src="imagePath('/logo-nav-white.png')" max-width="40" title="Ojos del Alma"></v-img>
    </v-btn>

    <v-spacer />

    <template v-if="!isMobile">
      <v-menu offset-y open-on-hover transition="slide-y-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                text
                color="white"
                v-bind="attrs"
                v-on="on"
            >
                <v-icon>mdi-chevron-down</v-icon>
                <span>Jardines</span>
            </v-btn>
          </template>
          <v-list>
              <v-list-item
                  v-for="link in links"
                  :key="link.text"
                  :to="link.route"
              >
                  <v-list-item-title>{{ link.text }}</v-list-item-title>
              </v-list-item>
          </v-list>
      </v-menu>

      <v-btn :to="{ name: 'diseniadoras' }" text color="white">
        Quiénes somos
      </v-btn>

      <v-btn text color="white" @click="$emit('scroll-to-contact')">
        Contacto
      </v-btn>
    </template>

    <template v-else>
      <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-app-bar-nav-icon x-large class="white--text" v-bind="attrs" v-on="on"></v-app-bar-nav-icon>
        </template>
          <v-list class="d-flex flex-column" height="100vh" color="rgba(0, 0, 0, .9)">
            <v-list-item class="flex-grow-0 align-self-end">
              <v-btn text color="white" icon @click="dialog = false">
                <v-icon large>mdi-close</v-icon>
              </v-btn>
            </v-list-item>
            <v-list-item
              class="py-8 text-center"
              exact
              v-for="link in mobileLinks"
              :key="link.text"
              :to="link.route"
            >
              <v-list-item-title @click="dialog = false" class="white--text text-uppercase text-h5 text-sm-h4 font-weight-light">
                {{ link.text }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
      </v-dialog>
    </template>
  </v-app-bar>
</template>

<script>
import imageMixin from '@/mixins/images'

export default {
  name: 'Navbar',
  mixins: [imageMixin],
  data () {
    return {
      links: [
        { text: 'Proyectos', route: { name: 'proyectos' } },
        { text: 'Cómo trabajamos', route: { name: 'etapas' } }
      ],
      mobileLinks: [
        { text: 'Inicio', route: { name: 'inicio' } },
        { text: 'Proyectos', route: { name: 'proyectos' } },
        { text: 'Cómo trabajamos', route: { name: 'etapas' } },
        { text: 'Quiénes somos', route: { name: 'diseniadoras' } }
      ],
      dialog: false
    }
  },
  computed: {
    isMobile () {
      return this.$vuetify.breakpoint.smAndDown
    }
  }
}
</script>

<style lang="scss" scoped>
  .home::before {
    opacity: 0 !important;
  }
</style>
