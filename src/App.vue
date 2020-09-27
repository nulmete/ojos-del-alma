<template>
  <v-app>
    <Navbar />

    <v-main class="grey lighten-4">
      <router-view />
    </v-main>

    <!--
      Re-render the footer every time the route changes
    -->
    <Footer :key="$route.fullPath"/>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
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

.section-spacing > *:not(last-child) {
  margin-bottom: 6.5rem !important;
}

.section-inner-spacing > * + * {
  margin-top: 5rem;
}

.v-overlay__scrim {
  opacity: .6 !important;
}

.social button:not(:last-of-type) {
  margin-right: 1rem;
}
</style>
