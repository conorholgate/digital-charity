<template>
  <div class="burger-menu">
    <div @click="showMenu = !showMenu">
      <img class="burger-menu__icon" src="../../../assets/burger-menu.png" alt="" />
    </div>
    <transition name="slide-down">
      <div v-show="showMenu" class="burger-menu__items" :class="showMenu ? 'burger-menu__items-show' : ''">
        <div v-for="(item, key) in items" :key="key">
          <router-link class="burger-menu__item" :to="item.path" @click.native="showMenu = !showMenu">{{ item.name }}</router-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'burger-menu',
  props: {
    items: {
      type: [Object, Array, String],
    },
  },
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.burger-menu {
  margin-top: 10px;
  &__icon {
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
  &__items {
    position: absolute;
    right: 0;
    height: fit-content;
    width: 100vw;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 0;
    text-align: center;
    background: rgba(0, 0, 0, 0.814);
    z-index: 99;
  }
  &__item {
    text-decoration: none;
    color: white;
    font-size: 2rem;
    &:hover {
      color: gray;
    }
  }
}

// ANIMATIONS
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter,
.slide-down-leave-to {
  transform: translateY(-10%);
  opacity: 0;
}
</style>
