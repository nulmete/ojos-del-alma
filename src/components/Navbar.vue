<template>
  <nav>
    <v-app-bar absolute flat color="transparent">
        <!-- acá iría el logo -->
        <!-- <v-app-bar-nav-icon class="grey--text"></v-app-bar-nav-icon> -->

        <v-spacer />

        <v-menu offset-y open-on-hover transition="slide-y-transition" content-class="primary">
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

        <v-btn text color="grey lighten-5">
            Las diseñadoras
        </v-btn>

        <v-btn text color="grey lighten-5">
            Contacto
        </v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      links: [
        { text: 'Proyectos', route: { name: 'proyectos' } },
        { text: 'Etapas', route: { name: 'etapas' } },
        { text: 'Medios', route: { name: 'medios' } }
      ]
    }
  }
}
</script>
