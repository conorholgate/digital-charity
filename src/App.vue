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
  async created() {
    await this.$store.dispatch('contentful/fetchActionBarContent')
    await this.$store.dispatch('contentful/fetchNavbarContent')
    await this.$store.dispatch('contentful/fetchMainCardContent')
    await this.$store.dispatch('contentful/fetchSecondCardContent')
    await this.$store.dispatch('contentful/fetchSecondCardImage')
    await this.$store.dispatch('contentful/fetchHelpSectionContent')
    await this.$store.dispatch('contentful/fetchAboutUsContent')
  },
}
</script>

<style lang="scss">
@import './styles/globals.scss';
</style>
