<template>
  <div class="text-services">
    <div class="text-services__title">WordCraft</div>
    <div class="text-services__services">
      <div class="text-services__service">
        <div class="text-services__service-name">
          <img :src="require(`@/assets/svg/poems.svg`)" alt="Poems" />
          <div class="text-services__service-title">Generating Poems</div>
        </div>

        <div class="text-services__service-btn-container">
          <div class="text-services__service-btn">STARTED</div>
          <div class="text-services__service-btn">HOW TO USE</div>
        </div>
      </div>
      <div class="text-services__service">
        <div class="text-services__service-name">
          <img :src="require(`@/assets/svg/paraphrasing.svg`)" alt="Paraphrasing" />
          <div class="text-services__service-title">Paraphrasing</div>
        </div>

        <div class="text-services__service-btn-container">
          <div class="text-services__service-btn">STARTED</div>
          <div class="text-services__service-btn">HOW TO USE</div>
        </div>
      </div>
      <div class="text-services__service">
        <div class="text-services__service-name">
          <img :src="require(`@/assets/svg/creative.svg`)" alt="Creative" />
          <div class="text-services__service-title">Creative</div>
        </div>

        <div class="text-services__service-btn-container">
          <div class="text-services__service-btn">STARTED</div>
          <div class="text-services__service-btn">HOW TO USE</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";

.text-services {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 20px;

  &__title {
    padding-top: 50px;
    padding-bottom: 30px;
    font-weight: 700;
    font-size: 36px;
    letter-spacing: 3px;
  }

  &__services {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 100px;
    width: 80%;
  }

  &__service {
    //width: 90%;
    display: flex;
    flex-direction: column;
    border: 2px solid #2a4365;
    border-radius: 10px;
    background-color: $grey-5000;
    padding: 20px 40px;
  }

  &__service-name {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
  }

  &__service-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid $primary-400;
    border-radius: 12px;
    background-color: #000;
    width: 430px;
    height: 80px;
    font-weight: 600;
    font-size: 32px;
    letter-spacing: 2px;
  }

  &__service-btn-container {
    display: flex;
    justify-content: space-between;
    gap: 60px;
    padding: 0 80px;
    text-align: center;
  }

  &__service-title {
    padding: 0 20px;
  }
}
</style>
