<template>
  <div id="app">
    <action-bar />
    <nav-bar />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/layout/navigation/NavBar.vue'
import ActionBar from './components/layout/navigation/ActionBar.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    ActionBar,
  },
}
</script>

<style>
#app {
  font-size: 16px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
h1 {
  padding: 0;
  margin: 0;
}
</style>
