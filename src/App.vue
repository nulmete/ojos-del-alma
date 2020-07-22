<template>
  <div id="app">
    <MainHeader />
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader'

export default {
  name: 'App',
  components: { MainHeader }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&family=Nunito&display=swap');
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

html {
  font-size: 62.5% !important;
}

body {
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  color: $color-text;
}

.container {
  padding: 0 1.5rem;
  max-width: 120rem;
  margin: 0 auto;
}

.v-window__next {
  right: 0;
}
</style>
