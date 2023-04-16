<template>
  <nav class="navbar">
    <div class="navbar__container">
      <div class="navbar__logo-container">
        <img class="navbar__logo" src="../../../assets/good-things-foundation-logo.png" alt="" />
      </div>
      <div>
        <div class="navbar__nav-items-container">
          <div v-for="(item, key) in getNavItems" :key="key">
            <router-link class="navbar__nav-items" exact-active-class="active" :to="item.path">{{ item.name }}</router-link>
          </div>
        </div>
        <burger-menu :items="getNavItems" class="navbar__burger-menu"></burger-menu>
      </div>
    </div>
  </nav>
</template>

<script>
import BurgerMenu from './BurgerMenu.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'nav-bar',
  components: { BurgerMenu },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['getNavItems']),
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 100px;
  font-size: 1.25rem;

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 0 80px;
  }
  &__logo {
    max-width: 200px;
  }
  &__nav-items-container {
    display: flex;
    gap: 20px;
    font-weight: bold;
  }
  &__nav-items {
    text-decoration: none;
    color: black;
    &:hover {
      color: gray;
    }
  }
  &__burger-menu {
    display: none;
  }
}
@media screen and (max-width: 1200px) {
  .navbar {
    font-size: 1rem;
  }
}
@media screen and (max-width: 992px) {
  .navbar__nav-items-container {
    display: none;
  }
  .navbar__burger-menu {
    display: block;
  }
}
@media screen and (max-width: 768px) {
  .navbar__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 0 20px;
  }
}
.active {
  color: #367d91;
  border-bottom: 3px solid #367d91;
}
</style>
