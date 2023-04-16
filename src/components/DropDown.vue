<template>
  <div class="drop-down" :style="customStyle" v-on="$listeners">
    <div style="display: flex; align-items: center">
      <div style="margin-right: 14px">{{ value }}</div>
      <div :class="{ arrow: true, active: show }"></div>
    </div>
    <div v-if="show" class="drop-down__items">
      <ul class="drop-down__items-item" v-for="(item, key) in items" :key="key">
        <li @click="itemSelect(item)">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'drop-down',
  props: {
    show: {
      type: Boolean,
    },
    items: {
      type: [String, Array, Object],
    },
    selected: {
      type: [String, Array, Object],
    },
    customStyle: {
      type: Object,
    },
  },
  data() {
    return {
      value: this.selected,
    }
  },
  methods: {
    itemSelect(item) {
      this.value = item
      this.$emit('itemSelected', item)
    },
  },
}
</script>

<style lang="scss" scoped>
.drop-down {
  position: relative;
  cursor: pointer;
  border-bottom: 3px solid #278d82;
  &__items {
    position: absolute;
    width: 100%;
    background: #278d82;
    right: 0;
    font-size: 1.5rem;
    min-width: max-content;
    &-item {
      padding: 4px 8px !important;
      &:hover {
        background-color: #164c47;
      }
    }
  }
}
.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 4px;
  transition: all 0.4s;
  transform: rotate(45deg);
}
.active {
  transform: rotate(225deg);
  -webkit-transform: rotate(225deg);
  margin-top: 10px;
}
.drop-down-items {
}
ul,
li {
  list-style: none;
  padding: 0 !important;
  margin: 0 !important;
}
</style>
