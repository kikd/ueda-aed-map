<script setup lang="ts">
import Header from './components/Header.vue'
import Map from './components/Map.vue'
</script>

<template>
  <Header></Header>
  <div class="app">
    <Map></Map>
  </div>
</template>

<style scoped>
.app {
  display:flex; 
  place-items:center;
  padding: 1rem;
  text-align: center;

}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
