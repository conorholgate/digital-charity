<template>
  <div class="drop-down" :style="customStyle" v-on="$listeners">
    <div class="drop-down__selected">
      <div class="drop-down-value">{{ value }}</div>
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
  &__selected {
    display: flex;
    align-items: center;
  }
  &-value {
    margin-right: 14px;
  }
  &__items {
    position: absolute;
    width: 100%;
    background: #278d82;
    right: 0;
    font-size: 1.5rem;
    min-width: max-content;
    z-index: 10;
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
ul,
li {
  list-style: none;
  padding: 0 !important;
  margin: 0 !important;
}
@media screen and (max-width: 768px) {
  .drop-down {
    &__items {
      left: 0;
      right: 0;
      margin: auto;
      text-align: center;
      min-width: auto;
    }
  }
}
</style>
