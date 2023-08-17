<template>
  <div class="image-services">
    <div class="image-services__title">Image Services</div>
    <div class="image-services__services">
      <div class="image-services__service">
        <div class="image-services__service-name">
          <img :src="require(`@/assets/svg/poems.svg`)" alt="Poems" />
          <div class="image-services__service-title">Generating Images</div>
        </div>

        <div class="image-services__service-btn-container">
          <div @click="onChangeRoute(ROUTES.IMAGE_GENERATOR.PATH)" class="image-services__service-btn btn-neon">
            STARTED
          </div>
          <div
            @click="showHint({ value: !hints.poems, hintName: 'images' })"
            class="image-services__service-btn btn-neon"
          >
            HOW TO USE
          </div>
        </div>
        <Transition>
          <div v-if="hints.images" class="image-services__hint">
            <i
              @click="showHint({ value: false, hintName: 'images' })"
              class="pi pi-times-circle image-services__close-btn"
              style="font-size: 1.4rem"
            />

            <div>
              <span class="image-services__hint-title">How to use:</span>
              <div class="image-services__hint-text">
                Generates text on request while preserving the style. Request example: "Write a short story about a bear
                in space in the style of the Brothers Grimm"
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import { ROUTES } from "@/constants/routes";
import { ShowHints } from "@/views/TextService.vue";

const router = useRouter();

const hints = ref<ShowHints>({
  images: false,
});

const showHint = (val: { value: boolean; hintName: string }) => {
  hints.value[val.hintName] = val.value;
};

const onChangeRoute = (routeLink: string) => {
  router.push({ path: routeLink });
};
</script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";

.image-services {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 20px;

  &__title {
    padding-top: 90px;
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
    border-radius: 12px;
    background-color: $grey-5000;
    //padding: 20px 40px;
  }

  &__service-name {
    display: flex;
    align-items: center;
    padding-top: 34px;
    padding-bottom: 20px;
    padding-left: 45px;
  }

  &__service-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-bottom: 58px;
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
    padding: 0 120px;
    text-align: center;
  }

  &__service-title {
    padding: 0 20px;
    font-weight: 600;
    font-size: 32px;
  }

  &__hint {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 12px;
    background-color: #0d8188;
    padding: 24px;
    height: 200px;
  }

  &__close-btn {
    align-self: flex-end;
    cursor: pointer;
  }

  &__hint-title {
    padding-bottom: 16px;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
  }

  &__hint-text {
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
  }
}

.v-enter-active {
  transition: opacity 0.6s ease;
}
.v-leave-active {
  transition: opacity 0.1s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
