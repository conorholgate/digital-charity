<template>
  <div class="home-view">
    <!-- Main card -->
    <section>
      <div class="home-view__main-card">
        <div class="home-view__main-card-content" :style="`background-image: url(${getMainCardBackgroundImage});`">
          <div class="home-view__main-card-container section-container">
            <div class="home-view__main-card-title">
              <h1>{{ getMainCardContent.title }}</h1>
            </div>
            <div class="home-view__main-card-excerpt">
              <p>
                {{ getMainCardContent.information }}
              </p>
            </div>
            <div>
              <button class="home-view__main-card-button custom-button">{{ getMainCardContent.buttonText }}</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Secondary cards -->
    <section class="home-view__secondary-cards">
      <div class="home-view__secondary-cards-image-only-card" :style="`background-image: url(${getSecondCardBackgroundImage});`"></div>
      <div class="home-view__secondary-cards-information-card">
        <div class="home-view__secondary-cards-information-card-container">
          <div class="home-view__secondary-cards-text">
            <div class="home-view__secondary-cards-text-title title">
              <h1>{{ getSecondCardContent.title }}</h1>
            </div>
            <div class="home-view__secondary-cards-text-sub-text sub-text">
              <p>
                {{ getSecondCardContent.information }}
              </p>
            </div>
          </div>
          <div>
            <button class="home-view__secondary-cards-information-card-button custom-button">{{ getSecondCardContent.buttonText }}</button>
          </div>
        </div>
      </div>
    </section>

    <!-- How can we help -->
    <section class="home-view__help-you section-container">
      <div class="home-view__help-you-content">
        <div class="home-view__help-you-title title">
          <h1>{{ getHelpSectionContent.title }}</h1>
        </div>
        <div class="home-view__help-you-sub-text sub-text">
          <p>{{ getHelpSectionContent.information }}</p>
        </div>
        <div class="home-view__help-you-selections">
          <div class="home-view__help-you-options">
            <span style="margin-right: 8px">I am a</span>
            <drop-down
              :items="personTypeOptions"
              :selected="personType"
              :show="showPersonType"
              v-bind="$listeners"
              @click="showPersonType = !showPersonType"
              @itemSelected="updatePersonType"
            />
            <span class="home-view__help-you-i-want-to">I want to</span>
            <drop-down
              :items="actionTypeOptions"
              :selected="actionType"
              :show="showActionType"
              v-bind="$listeners"
              @click="showActionType = !showActionType"
              @itemSelected="updateActionType"
            />
          </div>
          <div>
            <button class="home-view__help-you-button custom-button">{{ getHelpSectionContent.buttonText }}</button>
          </div>
        </div>
      </div>
    </section>

    <!-- About us footer -->
    <footer class="home-view__about-us section-container">
      <div class="home-view__about-us-content">
        <div class="home-view__about-us-title title">
          <h1>{{ getAboutUsContent.title }}</h1>
        </div>
        <div class="home-view__about-us-sub-text sub-text">
          <p>{{ getAboutUsContent.information }}</p>
        </div>
        <div class="home-view__about-us-cards">
          <div class="home-view__about-us-card" v-for="(card, index) in getAboutUsContent.cardTitles" :key="index">
            <div class="home-view__about-us-card-title card-title">{{ card }}</div>
            <div class="home-view__about-us-card-sub-title card-sub-title">{{ getAboutUsContent.cardInfo[index] }}</div>
            <button class="home-view__about-us-card-button card-button custom-button">{{ getAboutUsContent.cardButtonText }}</button>
          </div>
          <!-- <div class="home-view__about-us-card">
            <div class="home-view__about-us-card-title card-title">Get online week</div>
            <div class="home-view__about-us-card-sub-title card-sub-title">Lorem ipsum solor sit</div>
            <button class="home-view__about-us-card-button card-button custom-button">Click me</button>
          </div>
          <div class="home-view__about-us-card">
            <div class="home-view__about-us-card-title card-title">Get online week</div>
            <div class="home-view__about-us-card-sub-title card-sub-title">Lorem ipsum solor sit</div>
            <button class="home-view__about-us-card-button card-button custom-button">Click me</button>
          </div>
          <div class="home-view__about-us-card">
            <div class="home-view__about-us-card-title card-title">Get online week</div>
            <div class="home-view__about-us-card-sub-title card-sub-title">Lorem ipsum solor sit</div>
            <button class="home-view__about-us-card-button card-button custom-button">Click me</button>
          </div> -->
        </div>
        <div class="home-view__about-us-button-container">
          <button class="home-view__about-us-button custom-button">{{ getAboutUsContent.sectionButtonText }}</button>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import DropDown from '@/components/utilities/DropDown.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'home-view',
  components: {
    DropDown,
  },
  data() {
    return {
      personType: 'person',
      personTypeOptions: ['person', 'researcher', 'individual'],
      showPersonType: false,
      actionType: 'want to help',
      actionTypeOptions: ['want to help', 'work for you', 'improve my online skills'],
      showActionType: false,
    }
  },
  computed: {
    ...mapGetters('contentful', [
      'getMainCardContent',
      'getSecondCardContent',
      'getSecondCardContentImage',
      'getHelpSectionContent',
      'getAboutUsContent',
    ]),
    getMainCardBackgroundImage() {
      return this.getMainCardContent?.backgroundImage?.fields?.file?.url
    },
    getSecondCardBackgroundImage() {
      return this.getSecondCardContentImage?.backgroundImage?.fields?.file?.url
    },
  },
  methods: {
    updatePersonType(item) {
      this.personType = item
    },
    updateActionType(item) {
      this.actionType = item
    },
    setPersonType() {
      return (this.personType = this.getHelpSectionContent.whoOptions[0])
    },
    setActionType() {
      return (this.actionType = this.getHelpSectionContent.actionOptions[0])
    },
    setPersonTypeOptions() {
      return (this.personTypeOptions = this.getHelpSectionContent.whoOptions)
    },
    setActionTypeOptions() {
      return (this.actionTypeOptions = this.getHelpSectionContent.actionOptions)
    },
  },
}
</script>

<style lang="scss" scoped>
.home-view {
  // main card section
  &__main-card {
    height: 500px;
    &-content {
      height: 100%;
      //   background-image: url('../assets/people.jpg');
      background-position: 50%;
      background-size: cover;
      position: relative;
      width: 100%;
    }
    &-container {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 20px;
    }
    &-title,
    &-excerpt {
      height: fit-content;
      width: fit-content;
      padding: 0 20px;
      font-weight: bold;
    }
    &-title {
      font-size: 2rem;
      color: $white;
      padding: 20px;
      background: $blue;
    }
    &-excerpt {
      max-width: 75%;
      color: $green;
      background: $white;
    }
    &-button {
      background: $white;
      border: none;
      color: $red;
      &:hover {
        background: $red-hover;
        color: $white;
      }
      &:active {
        background: $red-active;
      }
    }
  }

  // seconadry card section
  &__secondary-cards {
    display: flex;
    height: 500px;
    &-image-only-card {
      height: 100%;
      //   background-image: url('../assets/person-smiling.jpg');
      background-position: 50%;
      background-size: cover;
      position: relative;
      width: 50%;
    }
    &-information-card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10px;
      width: 50%;
      background: $green;
      p {
        margin: 0;
      }
      &-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        padding: 0 40px;
      }
      &-button {
        border: solid 2px $white;
        color: $white;
        background: none;
        &:hover {
          background: $white;
          color: $green;
        }
        &:active {
          background: $gray;
        }
      }
    }
    &-text {
      display: flex;
      flex-direction: column;
      gap: 20px;
      max-width: 85%;
      color: $white;

      &-title h1 {
        font-size: 1.75rem;
        line-height: 36px;
        font-weight: bold;
      }
      &-sub-text p {
        font-size: 1.25rem;
      }
    }
  }

  // help you section
  &__help-you {
    height: auto;
    background: $gray;
    &-content {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 20px;
      padding: 20px 0;
    }
    &-title {
      font-weight: bold;
    }
    &-selections {
      display: flex;
      align-items: center;
      justify-content: center;
      background: $white;
      padding: 30px 10px;
      text-align: center;
    }
    &-i-want-to {
      margin: 0 8px;
    }
    &-options {
      display: flex;
      margin-right: 20px;
    }
    &-button {
      background: $red;
      border: none;
      border-radius: 20px;
      padding: 10px 20px;
      outline: none;
      cursor: pointer;
      font-size: 1rem;
      font-weight: bold;
      color: $white;
      &:hover {
        background: $red-hover;
      }
      &:active {
        background: $red-active;
      }
    }
  }

  //about us section
  &__about-us {
    height: auto;
    background: $green;
    &-content {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 20px;
      padding: 20px 0;
    }
    &-title {
      font-weight: bold;
      color: $white;
    }
    &-sub-text p {
      color: $white;
    }
    &-cards {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 40px;
      height: 100%;
    }
    &-card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 40px;
      max-width: 350px;
      min-width: 300px;
      min-height: 300px;
      height: 100%;
      background-color: white;
      margin-bottom: 20px;
      padding: 0 20px;
      &-title {
        font-weight: bold;
      }
      &-button {
        border: solid 2px $black;
        color: $red;
        background: none;
        &:hover {
          background: $red-hover;
          color: $white;
        }
        &:active {
          background: $red-active;
        }
      }
    }
    &-button-container {
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
    }
    &-button {
      border: none;
      color: $red;
      background: $white;
      &:hover {
        background: $red-hover;
        color: $white;
      }
      &:active {
        background: $red-active;
      }
    }
  }
}

// media queries
@media screen and (min-width: 1200px) {
  .home-view {
    &__main-card {
      height: 600px;
      &-title {
        font-size: 3rem;
      }
      &-excerpt {
        font-size: 1.5rem;
      }
    }
    &__about-us {
      &-cards {
        justify-content: flex-start;
      }
    }
  }
}
@media screen and (max-width: 992px) {
  .home-view {
    &__main-card {
      &-container {
        align-items: center;
        margin: 0;
        padding: 0 10px;
      }
      &-title {
        font-size: 1.5rem;
      }
      &-title,
      &-excerpt {
        max-width: 80%;
      }
    }
    &__secondary-cards {
      &-information-card {
        flex-direction: row;
        &-container {
          align-items: center;
          gap: 10px;
          padding: 20px;
        }
      }
      &-text {
        &-title {
          line-height: 32px;
        }
      }
    }
    &__help-you {
      &-selections {
        text-align: left;
        padding: 10px;
      }
      &-options {
        font-size: 1.25rem;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .home-view {
    &__main-card {
      max-height: 600px;
      &-title {
        font-size: 1.5rem;
        text-align: center;
      }
      &-excerpt {
        font-size: 1rem;
      }
    }
    &__secondary-cards {
      &-text {
        max-width: 100%;
        &-title h1 {
          font-size: 1.25rem;
          line-height: 24px;
        }
        &-sub-text p {
          font-size: 1rem;
        }
      }
    }
    &__help-you {
      &-content {
        margin: 0;
      }
      &-selections {
        flex-direction: column;
      }
      &-i-want-to {
        margin: 0;
      }
      &-options {
        flex-direction: column;
        font-size: 1rem;
        gap: 10px;
        margin-bottom: 10px;
      }
    }
    &__about-us {
      &-cards {
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
@media screen and (max-width: 576px) {
  .home-view {
    &__main-card {
      max-height: 800px;
    }
    &__secondary-cards {
      display: flex;
      flex-direction: column;
      height: 600px;
      &-image-only-card {
        height: 50%;
        width: 100%;
      }
      &-information-card {
        width: 100%;
        height: auto;
      }
    }
    &__about-us {
      &-card {
        max-width: none;
        padding: 20px;
        min-width: auto;
      }
    }
  }
}
</style>
