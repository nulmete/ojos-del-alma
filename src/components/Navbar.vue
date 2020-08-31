<template>
  <nav>
    <v-app-bar absolute flat color="transparent">
        <v-btn icon :to="{ name: 'inicio' }" exact text color="grey lighten-5">
          <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-spacer />

        <template v-if="!isMobile">
          <v-menu offset-y open-on-hover transition="slide-y-transition">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    text
                    color="grey lighten-5"
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

          <v-btn :to="{ name: 'diseniadoras' }" text color="grey lighten-5">
            Las diseñadoras
          </v-btn>

          <v-btn text color="grey lighten-5">
            Contacto
          </v-btn>
        </template>

        <template v-else>
          <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-app-bar-nav-icon class="white--text" v-bind="attrs" v-on="on"></v-app-bar-nav-icon>
            </template>
              <v-list class="d-flex flex-column" height="100vh" color="rgba(0, 0, 0, .9)">
                <v-list-item class="flex-grow-0 align-self-end">
                  <v-btn text color="white" icon @click="dialog = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-list-item>
                <v-list-item
                  class="py-8 text-center"
                  exact
                  v-for="link in mobileLinks"
                  :key="link.text"
                  :to="link.route"
                >
                  <v-list-item-title @click="dialog = false" class="white--text text-uppercase text-h5 text-sm-h4 font-weight-thin">
                    {{ link.text }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
          </v-dialog>
        </template>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      links: [
        { text: 'Proyectos', route: { name: 'proyectos' } },
        { text: 'Etapas', route: { name: 'etapas' } }
      ],
      mobileLinks: [
        { text: 'Inicio', route: { name: 'inicio' } },
        { text: 'Proyectos', route: { name: 'proyectos' } },
        { text: 'Etapas', route: { name: 'etapas' } },
        { text: 'Las Diseñadoras', route: { name: 'diseniadoras' } }
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
