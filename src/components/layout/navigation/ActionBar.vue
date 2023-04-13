<template>
  <div class="action-bar">
    <div class="action-bar__container">
      <div class="action-bar__search">
        <img style="width: 24px; height: 24px" src="../../../assets/search-icon.png" alt="search-icon" />
        <button class="action-bar__search-button">Search</button>
      </div>
      <div class="action-bar__action-buttons">
        <div class="action-bar__action-buttons-learn-container">
          <button class="action-bar__action-buttons-learn">Learn</button>
        </div>
        <div class="action-bar__action-buttons-donate-container">
          <button class="action-bar__action-buttons-donate">Donate</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'action-bar',
}
</script>

<style lang="scss" scoped>
button {
  border: none;
  outline: none;
  background: none;
  cursor: inherit;
  font-weight: inherit;

  &:hover {
    color: gray;
  }
}
.action-bar {
  height: 40px;
  display: flex;
  margin-top: 5px;
  border-bottom: solid 1px #d5d5d5;

  &__container {
    display: flex;
    flex: 1;
    justify-content: space-between;
    padding: 0 80px;
  }

  &__search,
  &__action-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 1px solid #d5d5d5;
    border-right: 1px solid #d5d5d5;
    cursor: pointer;
    font-weight: bold;
  }
  &__search {
    padding: 0 10px;
  }

  &__action-buttons-learn-container,
  &__action-buttons-donate-container {
    height: 90%;
    width: 100px;
    display: flex;
    justify-content: center;
  }

  &__action-buttons-learn-container {
    border-bottom: 5px solid #008000;
    &:hover {
      background: #008000;
      .action-bar__action-buttons-learn {
        color: white;
      }
    }
  }
  &__action-buttons-donate-container {
    background: #b40000;
    border-bottom: 5px solid #b40000;
    &:hover {
      background: #760000;
      border-bottom-color: #760000;
    }
  }
  &__action-buttons-donate {
    color: white;
  }
}
@media screen and (max-width: 768px) {
  .action-bar {
    &__container {
      padding: 0 20px;
    }
    &__search-button {
      display: none;
    }
    &__action-buttons-learn-container {
      display: none;
    }
  }
}
</style>
