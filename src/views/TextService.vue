<template>
  <div class="text-services">
    <div class="text-services__title">{{ $lang.text.textServiceHeading }}</div>
    <div class="text-services__services">
      <div class="text-services__service">
        <div class="text-services__service-name">
          <img :src="require(`@/assets/svg/poems.svg`)" alt="Poems" />
          <div class="text-services__service-title">{{ $lang.text.textServiceName }}</div>
        </div>

        <div class="text-services__service-btn-container">
          <div @click="onChangeRoute(ROUTES.POEMS_SERVICE.PATH)" class="text-services__service-btn btn-neon">
            STARTED
          </div>
          <div
            @click="showHint({ value: !hints.poems, hintName: 'poems' })"
            class="text-services__service-btn btn-neon"
          >
            HOW TO USE
          </div>
        </div>
        <Transition>
          <div v-if="hints.poems" class="text-services__hint">
            <i
              @click="showHint({ value: false, hintName: 'poems' })"
              class="pi pi-times-circle text-services__close-btn"
              style="font-size: 1.4rem"
            />
            <div>
              <span class="text-services__hint-title">How to use:</span>
              <div class="text-services__hint-text">
                {{ $lang.text.textServiceHint }}
              </div>
            </div>
          </div>
        </Transition>
      </div>
      <div class="text-services__service">
        <div class="text-services__service-name">
          <img :src="require(`@/assets/svg/paraphrasing.svg`)" alt="Paraphrasing" />
          <div class="text-services__service-title">Paraphrasing</div>
        </div>

        <div class="text-services__service-btn-container">
          <div @click="onChangeRoute(ROUTES.PARAPHRASING_SERVICE.PATH)" class="text-services__service-btn btn-neon">
            STARTED
          </div>
          <div
            @click="showHint({ value: !hints.paraphrasing, hintName: 'paraphrasing' })"
            class="text-services__service-btn btn-neon"
          >
            HOW TO USE
          </div>
        </div>
        <Transition>
          <div v-if="hints.paraphrasing" class="text-services__hint">
            <i
              @click="showHint({ value: false, hintName: 'paraphrasing' })"
              class="pi pi-times-circle text-services__close-btn"
              style="font-size: 1.4rem"
            />
            <div>
              <span class="text-services__hint-title">How to use:</span>
              <div class="text-services__hint-text">
                {{ $lang.text.textServiceHint }}
              </div>
            </div>
          </div>
        </Transition>
      </div>
      <div class="text-services__service">
        <div class="text-services__service-name">
          <img :src="require(`@/assets/svg/creative.svg`)" alt="Creative" />
          <div class="text-services__service-title">Creative</div>
        </div>

        <div class="text-services__service-btn-container">
          <div @click="onChangeRoute(ROUTES.CREATIVE_SERVICE.PATH)" class="text-services__service-btn btn-neon">
            STARTED
          </div>
          <div
            @click="showHint({ value: !hints.creative, hintName: 'creative' })"
            class="text-services__service-btn btn-neon"
          >
            HOW TO USE
          </div>
        </div>

        <Transition>
          <div v-if="hints.creative" class="text-services__hint">
            <i
              @click="showHint({ value: false, hintName: 'creative' })"
              class="pi pi-times-circle text-services__close-btn"
              style="font-size: 1.4rem"
            />
            <div>
              <span class="text-services__hint-title">How to use:</span>
              <div class="text-services__hint-text">
                {{ $lang.text.textServiceHint }}
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
import "primeicons/primeicons.css";
import { useRouter } from "vue-router";

import { ROUTES } from "@/constants/routes";
import lang from "@/i18n";

export interface ShowHints {
  [key: string]: boolean;
}

const router = useRouter();

const hints = ref<ShowHints>({
  poems: false,
  paraphrasing: false,
  creative: false,
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

.text-services {
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
    transition: all 0.2s ease-in-out;
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
