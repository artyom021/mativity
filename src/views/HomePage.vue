<template>
  <div class="home">
    <div class="home__logo">
      <img :src="require(`@/assets/gif/logo_animated.gif`)" alt="Logo" class="home__logo-animation" />
    </div>

    <div class="home__hero">
      <h1>We’ve trained a model called ChatGPT which interacts in a conversational way.</h1>
      <div class="home__subtitle">
        The dialogue format makes it possible for to answer followup questions, admit its mistakes, challenge incorrect
        premises, and reject inappropriate requests.
      </div>
      <div class="home__get-started">GET STARTED</div>
    </div>

    <div class="home__try-it" id="try-it">
      <h2>Try It Now</h2>
      <div class="home__service-card-container">
        <div class="home__service-card">
          <span
            >Text to speech neural network allows you to convert any text you input to audio recording. Choose your
            language, dialect, gender and voice style among multiple options and enjoy.</span
          >
          <div class="home__card-btn">VoxAI</div>
        </div>
        <div class="home__service-card">
          <span
            >Image generating neural network creates unique pictures never seen before. Choose a style and describe your
            vision. The possibilities are limitless, the result may surprise you.
          </span>
          <div class="home__card-btn">Neuro-Vision</div>
        </div>
        <div class="home__service-card">
          <span
            >Copywriting neural network can write you a poem, rephrase the existing text or give you a valuable idea.
            Want to surprise everyone by an unheard epic ballad, increase originality of your student's work or come up
            with an idea for a gift? We got that covered.</span
          >
          <div class="home__card-btn">WordCraft</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";
@import "@/scss/variables.scss";

.home {
  //padding: 0 $space-normal;

  &__hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;

    width: 70%;
  }
  &__logo img {
    mask-image: linear-gradient(180deg, rgba(0, 0, 0, 1), transparent 100%);
    padding-bottom: 50px;
    width: 100%;
  }

  h1 {
    font-weight: 700;
    font-size: 36px;
    text-align: center;
  }

  &__subtitle {
    align-self: center;
    margin-top: 40px;
    padding: 0 22px;
    width: 70%;
    color: $grey-7000;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
  }

  &__get-started {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-out;
    cursor: pointer;
    margin-top: 60px;
    border: 3px solid $primary-300;
    border-radius: 12px;
    width: 430px;
    height: 88px;
    font-weight: 600;
    font-size: 32px;
    letter-spacing: 2px;
  }

  &__get-started:hover {
    box-shadow: $primary-300 0px 0px 22px;
    border: 4px solid $primary-300;
    padding-left: 2px;
    //text-shadow: white 1px 0px 2px;
  }

  &__service-card {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 40px;
    border-radius: 12px;
    background-image: url("~@/assets/png/neon_background.png");
    background-size: cover;
    background-color: #000;
    padding: 0 20px;
    width: 30%;
    height: 350px;
    text-align: center;
  }

  &__service-card-container {
    display: flex;
    justify-content: space-between;
  }

  &__try-it {
    background: linear-gradient(
      180deg,
      rgba(8, 8, 8, 1) 0%,
      rgba(0, 210, 210, 1) 38%,
      rgba(0, 210, 210, 0.6685267857142857) 61%,
      rgba(8, 8, 8, 1) 100%
    );
    padding: 0 $space-normal;
  }

  &__try-it h2 {
    margin-top: 20px;
    margin-bottom: 40px;
    padding-top: 80px;
    font-weight: 700;
    font-size: 76px;
    letter-spacing: 2px;
    text-align: center;
  }

  &__card-btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-out;
    margin-top: 30px;
    margin-bottom: 20px;
    border: 2px solid #01ddeb;
    border-radius: 50px;
    background: black;
    padding: 0 10px;
    width: 70%;
    height: 105px;
    font-weight: 700;
    font-size: 30px;
    letter-spacing: 3px;
  }

  &__card-btn:hover {
    box-shadow: $primary-300 0px 0px 18px;
    border: 4px solid $primary-300;
    padding-right: 2px;
    //text-shadow: white 1px 0px 2px;
  }
}
</style>
