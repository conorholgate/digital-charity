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

<style lang="scss">
@import './styles/globals.scss';
</style>
