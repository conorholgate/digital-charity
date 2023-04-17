<template>
  <div class="home-view">
    <!-- Main card -->
    <section>
      <div class="home-view__main-card">
        <div class="home-view__main-card-content">
          <div class="home-view__main-card-container section-container">
            <div class="home-view__main-card-title">
              <h1>Get online week 2023</h1>
            </div>
            <div class="home-view__main-card-excerpt">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima in quis, fuga eos hic cum nemo quas minus cumque pariatur totam quo,
                quaerat facilis. Commodi quidem nam dignissimos vel minima.
              </p>
            </div>
            <div>
              <button class="home-view__main-card-button custom-button">Get involved now!</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Secondary cards -->
    <section class="home-view__secondary-cards">
      <div class="home-view__secondary-cards-image-only-card"></div>
      <div class="home-view__secondary-cards-information-card">
        <div class="home-view__secondary-cards-information-card-container">
          <div class="home-view__secondary-cards-text">
            <div class="home-view__secondary-cards-text-title title">
              <h1>We are a social change charity, helping people to improve their lives through digital.</h1>
            </div>
            <div class="home-view__secondary-cards-text-sub-text sub-text">
              <p>
                We tackle the most pressing issues of our time, working with partners in thousands of communitites across the uk and further afield.
              </p>
            </div>
          </div>
          <div>
            <button class="home-view__secondary-cards-information-card-button custom-button">Learn more about us</button>
          </div>
        </div>
      </div>
    </section>

    <!-- How can we help -->
    <section class="home-view__help-you section-container">
      <div class="home-view__help-you-content">
        <div class="home-view__help-you-title title">
          <h1>How can we help you?</h1>
        </div>
        <div class="home-view__help-you-sub-text sub-text">
          <p>Let us know who you are and what you're looking for, and we'll help you get to the right place.</p>
        </div>
        <div class="home-view__help-you-selections">
          <div class="home-view__help-you-options">
            <span style="margin-right: 8px">I am a</span>
            <drop-down
              :items="personTypeOptions"
              :selected="'please select'"
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
            <button class="home-view__help-you-button custom-button">Start now</button>
          </div>
        </div>
      </div>
    </section>

    <!-- About us footer -->
    <footer class="home-view__about-us section-container">
      <div class="home-view__about-us-content">
        <div class="home-view__about-us-title title">
          <h1>What do we do?</h1>
        </div>
        <div class="home-view__about-us-sub-text sub-text">
          <p>You might not have heard of us, but we're the people behind the following impactful programmes</p>
        </div>
        <div class="home-view__about-us-cards">
          <div class="home-view__about-us-card">
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
          </div>
          <div class="home-view__about-us-card">
            <div class="home-view__about-us-card-title card-title">Get online week</div>
            <div class="home-view__about-us-card-sub-title card-sub-title">Lorem ipsum solor sit</div>
            <button class="home-view__about-us-card-button card-button custom-button">Click me</button>
          </div>
        </div>
        <div class="home-view__about-us-button-container">
          <button class="home-view__about-us-button custom-button">Learn more about us</button>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import DropDown from '@/components/utilities/DropDown.vue'
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
  methods: {
    updatePersonType(item) {
      this.personType = item
    },
    updateActionType(item) {
      this.actionType = item
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
      background-image: url('../assets/people.jpg');
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
      color: white;
      padding: 20px;
      background: #367d91;
    }
    &-excerpt {
      max-width: 75%;
      color: #278d82;
      background: white;
    }
    &-button {
      background: white;
      border: none;
      color: #b40000;
      &:hover {
        background: #760000;
        color: white;
      }
    }
  }

  // seconadry card section
  &__secondary-cards {
    display: flex;
    height: 400px;
    &-image-only-card {
      height: 100%;
      background-image: url('../assets/person-smiling.jpg');
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
      background: #278d82;
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
        border: solid 2px white;
        color: white;
        background: none;
        &:hover {
          background: white;
          color: #278d82;
        }
      }
    }
    &-text {
      display: flex;
      flex-direction: column;
      gap: 20px;
      max-width: 85%;
      color: white;

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
    background: rgb(235, 235, 235);
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
      background: white;
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
      background: #b40000;
      border: none;
      border-radius: 20px;
      padding: 10px 20px;
      outline: none;
      cursor: pointer;
      font-size: 1rem;
      font-weight: bold;
      color: white;
      &:hover {
        background: #760000;
      }
    }
  }

  //about us section
  &__about-us {
    height: auto;
    background: #367d91;
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
      color: white;
    }
    &-sub-text p {
      color: white;
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
      &-title {
        font-weight: bold;
      }
      &-button {
        border: solid 2px black;
        color: #b40000;
        background: none;
        &:hover {
          background: #760000;
          color: white;
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
      color: #b40000;
      background: white;
      &:hover {
        background: #760000;
        color: white;
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
        height: 50%;
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
