<template>
  <div id="app">
    <a :key="n" :href="'https://picsum.photos/seed/picsum/800/900'"  v-for="n in 9" v-lightbox>
      <img :src="'https://picsum.photos/seed/picsum/300/300'">
    </a>

  <lightbox></lightbox>
  </div>
</template>

<script>
import Lightbox from './components/lightbox/Lightbox.vue'

export default {
  name: 'App',
  components: {
    Lightbox
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
