<template>
  <div class="home-view">
    <section>
      <div class="home-view__main-card">
        <div class="home-view__main-card-content">
          <div class="home-view__main-card-container">
            <div class="home-view__main-card-title">
              <h1>Get online week 2023</h1>
            </div>
            <div class="home-view__main-card-excerpt">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima in quis, fuga eos hic cum nemo quas minus cumque pariatur totam quo, quaerat facilis. Commodi quidem nam dignissimos vel minima.</p>
            </div>
            <div>
              <button class="home-view__main-card-button">Get involved now!</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="home-view__secondary-cards">
        <div class="home-view__secondary-cards-image-only-card"></div>
        <div class="home-view__secondary-cards-information-card">
          <div class="home-view__secondary-cards-information-card-container">
            <div class="home-view__secondary-cards-text">
              <div class="home-view__secondary-cards-text-title">
                <p>We are a social change charity, helping people to improve their lives through digital.</p>
              </div>
              <div class="home-view__secondary-cards-text-sub-text">
                <p>We tackle the most pressing issues of our time, working with partners in thousands of communitites across the uk and further afield.</p>
              </div>
            </div>
            <div>
              <button class="home-view__secondary-cards-information-card-button">Learn more about us</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="home-view__help-you">
      <div class="home-view__help-you-content">
        <div class="home-view__help-you-title">
          <div>Title</div>
          <div>Sub text</div>
        </div>
        <div class="home-view__help-you-selections">Selections</div>
      </div>
    </section>
    <section class="home-view__about-us">About us</section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.home-view {
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
      margin-left: 40px;
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
      height: fit-content;
      font-size: 2rem;
      color: white;
      padding: 20px;
      background: #278d82;
    }
    &-excerpt {
      max-width: 35%;
      color: #278d82;
      background: white;
      font-size: 1rem;
    }
    &-button {
      background: white;
      border: none;
      border-radius: 20px;
      padding: 10px 20px;
      outline: none;
      cursor: pointer;
      font-size: 1rem;
      font-weight: bold;
      color: #b40000;
      &:hover {
        background: #760000;
        color: white;
      }
    }
  }
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
      gap: 10px;
      width: 50%;
      background: #278d82;
      p {
        margin: 0;
      }
      &-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 20px;
      }
      &-button {
        border: solid 2px white;
        border-radius: 20px;
        padding: 10px 20px;
        outline: none;
        cursor: pointer;
        font-weight: bold;
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
      max-width: 75%;
      color: white;

      &-title {
        font-size: 2rem;
        line-height: 36px;
        font-weight: 900;
      }
      &-sub-text {
        font-size: 1.25rem;
      }
    }
  }
  &__help-you {
    height: 300px;
    background: rgb(235, 235, 235);
    &-content {
      display: flex;
      flex-direction: column;
      height: 100%;
      gap: 10px;
      padding: 20px;
    }
    &-title {
    }
  }
  &__about-us {
    height: 500px;
    background: rgb(112, 108, 108);
  }
}
@media screen and (min-width: 1200px) {
  .home-view {
    &__main-card {
      height: 600px;
      &-title {
        font-size: 3rem;
      }
      &-excerpt,
      &-button {
        font-size: 1.5rem;
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
          justify-content: center;
          align-items: center;
        }
      }
      &-text {
        &-title {
          font-size: 1.5rem;
          line-height: 32px;
        }
        &-sub-text {
          font-size: 1rem;
        }
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
        font-size: 0.75rem;
      }
    }
    &__secondary-cards {
      &-text {
        max-width: 100%;
        &-title {
          font-size: 1.5rem;
          line-height: 34px;
        }
        &-sub-text {
          font-size: 1rem;
        }
      }
    }
  }
}
@media screen and (max-width: 576px) {
  .home-view {
    &__main-card {
      max-height: 800px;
      &-button {
        font-size: 1rem;
      }
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
  }
}
</style>
