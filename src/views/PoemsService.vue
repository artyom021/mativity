<template>
  <div class="poems">
    <div class="poems__title">
      <img :src="require(`@/assets/svg/poems.svg`)" alt="Poems" class="poems__service-img" />
      <div class="poems__service-title">Generating Poems</div>
    </div>

    <Accordion class="poems__accordion">
      <AccordionTab class="poems__accordion-tab" header="Instructions">
        <span>1. Enter the subject (No more than 300 characters)</span>
        <span>2. Select the style, number and size of stanzas;</span>
        <span>3. Click generate. </span>
      </AccordionTab>
    </Accordion>

    <div class="poems__input">
      <div class="poems__input-title">Style</div>
      <SingleSelect
        :items="styleOptionsPrepared"
        :modelValue="selectedStyle"
        @updateStyle="updateStyle"
        class="dropdown-poems"
        optionLabel="label"
        optionValue="value"
      />
    </div>

    <div v-if="showInputs" class="poems__input">
      <div class="poems__input-title">Stanza Size</div>
      <InputNumber v-model="stanzaSize" :max="20" :min="1" class="poems__input-number" inputId="minmax" />
    </div>

    <div v-if="showInputs" class="poems__input">
      <div class="poems__input-title">Stanza Count</div>
      <InputNumber v-model="stanzaCount" :max="20" :min="1" class="poems__input-number" inputId="minmax" />
    </div>

    <div class="p-input-icon-right poems__subject-input">
      <i class="pi pi pi-pencil" />
      <TextArea v-model="subject" placeholder="Enter Subject" />
    </div>

    <div v-if="generatedPoem" class="p-input-icon-right poems__subject-input">
      <i @click="copyText" class="pi pi pi-copy copy-btn" />
      <TextArea v-model="generatedPoem" :disabled="subject.length >= 300" auto-resize ref="resultText" />
    </div>

    <div class="poems__generation">
      <div class="poems__generation-title">1 Generation</div>
      <div class="poems__generation-value"><img :src="require(`@/assets/svg/curve.svg`)" alt="Price" /> 10</div>
    </div>

    <div :class="{ 'btn-disabled': !subject.length }" @click="onGenerate" class="poems__generate-btn btn-neon">
      Generate
    </div>
  </div>
</template>

<script lang="ts" setup>
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import InputNumber from "primevue/inputnumber";
import TextArea from "primevue/textarea";
import { computed, onBeforeMount, ref } from "vue";

import SingleSelect from "@/components/inputs/SingleSelect.vue";
import { StyleApi, getStyles } from "@/hooks/chatGpt/useStylesRead";
import { useVerseCreate } from "@/hooks/chatGpt/useVerseCreate";
import lang from "@/i18n";
import { useAppStore } from "@/store/app/appStore";
import { ToastSeverity } from "@/types/toast";

export interface Style {
  label: string;
  value: string;
}

const appStore = useAppStore();
const { showToast } = appStore;

const subject = ref<string>("");
const stanzaSize = ref<number>(1);
const stanzaCount = ref<number>(1);

const styleOptions = ref<StyleApi[]>([]);
const generatedPoem = ref<string | null>();
const selectedStyle = ref(1);
const resultText = ref();

onBeforeMount(async () => {
  styleOptions.value = await getStyles();
});

const styleOptionsPrepared = computed(() => {
  if (styleOptions.value.length) {
    return styleOptions.value.map((style: StyleApi) => {
      const capitalized = style.style.charAt(0).toUpperCase() + style.style.slice(1);
      return {
        label: capitalized,
        value: style.id,
      };
    });
  } else {
    return [];
  }
});

const updateStyle = (val: number) => {
  selectedStyle.value = val;
};

const onGenerate = async () => {
  const body = {
    theme: subject.value,
    styleId: selectedStyle.value,
    stanzaSize: stanzaCount.value,
    stanzaCount: stanzaCount.value,
  };

  generatedPoem.value = await useVerseCreate(body);
};

const showInputs = computed<boolean>(() => {
  return selectedStyle.value !== 1 && selectedStyle.value !== 7;
});

const copyText = () => {
  const text = resultText.value.modelValue;
  navigator.clipboard.writeText(text);

  showToast({
    summary: lang.message.copyToClipboard,
    severity: ToastSeverity.Success,
    detail: lang.success.textCopied,
  });
};
</script>

<style lang="scss" scoped>
.poems {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 55%;

  &__title {
    display: flex;
    flex-direction: column;
    padding-top: 90px;
  }

  &__service-img {
    padding-bottom: 14px;
    height: 50px;
  }

  &__accordion {
    padding-top: 48px;
    padding-bottom: 34px;
    width: 100%;
  }

  &__input-number {
    width: 50% !important;
  }
}
</style>

<style lang="scss">
@import "@/scss/colors.scss";

.poems {
  .p-icon {
    order: 1;
    color: white;
  }

  &__input {
    display: flex;
    justify-content: space-between;
    padding-bottom: 6px;
    width: 100%;
    height: 74px;
  }

  &__input-title {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $grey-1111;
    width: 50%;
    color: white;
  }

  &__input-value {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    background: rgb(0, 47, 111);
    background: linear-gradient(106deg, rgba(0, 47, 111, 1) 0%, rgba(13, 129, 136, 1) 49%, rgba(0, 47, 111, 1) 100%);
    padding-right: 28px;
    width: 50%;
  }

  &__input-value.style {
    cursor: pointer;
  }

  &__subject-input {
    margin-top: 34px;
    width: 100%;
    height: auto;
    .p-inputtext {
      width: 100%;
      height: auto;
    }
  }

  &__generation {
    display: flex;
    margin: 34px auto 0;
    width: 60%;
    height: 88px;
  }

  &__generation-title {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    background-color: $primary-1000;
    width: 50%;
    color: white;
    font-weight: 600;
    font-size: 24px;
  }

  &__generation-value {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border: 2px solid $primary-1000;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    width: 50%;
    color: $primary-1000;
    font-weight: 600;
    font-size: 24px;
  }

  &__generate-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-top: 20px;
    margin-bottom: 45px;
    border: 2px solid $primary-400;
    border-radius: 8px;
    width: 60%;
    height: 88px;
    font-weight: 600;
    font-size: 34px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .p-accordion-header-link {
    display: flex;
    justify-content: space-between;
    background-color: $grey-1111 !important;
  }

  .p-accordion-header-text {
    color: $primary-200;
  }

  .p-accordion-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    background-color: $grey-1111 !important;

    span {
      color: white;
    }
  }

  .p-accordion .p-accordion-content {
    border: 1px solid $primary-900;
  }

  .p-accordion .p-accordion-header .p-accordion-header-link {
    border: 1px solid $primary-900;
  }

  .p-accordion .p-accordion-header:not(.p-disabled).p-highlight .p-accordion-header-link {
    border-color: $primary-900;
  }

  .p-accordion .p-accordion-header:not(.p-disabled).p-highlight:hover .p-accordion-header-link {
    border-color: $primary-900;
    background: $primary-900;
  }

  .p-accordion-header .p-highlight {
    border: 1px solid $primary-900;
  }
}

.p-accordion .p-accordion-header:not(.p-disabled) .p-accordion-header-link:focus {
  box-shadow: inset 0 0 0 0.1rem $primary-100 !important;
}

.poems__input-number .p-inputtext {
  margin-right: 0;
  background: linear-gradient(
    106deg,
    rgba(0, 47, 111, 1) 0%,
    rgba(13, 129, 136, 1) 49%,
    rgba(0, 47, 111, 1) 100%
  ) !important;
  width: 50%;
  text-align: center !important;
}
</style>
