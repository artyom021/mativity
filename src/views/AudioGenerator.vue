<template>
  <div class="audio-generator">
    <div class="audio-generator__title">
      <img :src="require(`@/assets/svg/poems.svg`)" alt="Audio" class="audio-generator__service-img" />
      <div class="audio-generator__service-title">Generator Audio</div>
    </div>

    <Accordion class="audio-generator__accordion">
      <AccordionTab class="audio-generator__accordion-tab" header="Instructions">
        <span>1. Enter the subject (No more than 300 characters)</span>
        <span>2. Select the style, number and size of stanzas;</span>
        <span>3. Click generate.</span>
      </AccordionTab>
    </Accordion>

    <div v-if="!voiceValue.language.length" class="audio-generator__input">
      <div class="audio-generator__input-title">Voice Selection</div>
      <div @click="showPopup(true)" class="audio-generator__input-value">Select style</div>
    </div>

    <div v-if="voiceValue.language.length" class="audio-generator__input">
      <div class="audio-generator__input-title">Language</div>
      <div @click="showPopup(true)" class="audio-generator__input-value">{{ voiceValue.dialect }}</div>
    </div>

    <div v-if="voiceValue.language.length" class="audio-generator__input">
      <div class="audio-generator__input-title">Dialect</div>
      <div @click="showPopup(true)" class="audio-generator__input-value">{{ voiceValue.dialect }}</div>
    </div>

    <div v-if="voiceValue.language.length" class="audio-generator__input">
      <div class="audio-generator__input-title">Gender</div>
      <div @click="showPopup(true)" class="audio-generator__input-value">{{ voiceValue.gender }}</div>
    </div>

    <span class="p-input-icon-right audio-generator__subject-input">
      <i class="pi pi pi-pencil" />
      <TextArea v-model="subject" placeholder="Enter Subject" />
    </span>

    <div v-if="!audioGenerated" class="audio-generator__generation">
      <div class="audio-generator__generation-title">1 Generation</div>
      <div class="audio-generator__generation-value">
        <img :src="require(`@/assets/svg/curve.svg`)" alt="Price" /> 20
      </div>
    </div>

    <div v-if="!audioGenerated" @click="handleGenerate" class="audio-generator__generate-btn btn-neon">Generate</div>
    <VoiceSelection :visible="isShowPopup" @on-change-show-popup="showPopup" @on-voice-select="onVoiceSelect" />
    <div v-if="audioGenerated" class="audio-generator__player">
      <AudioPlayer />
      <div @click="download" class="audio-generator__download">DOWNLOAD</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import axios from "axios";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import TextArea from "primevue/textarea";
import { ref } from "vue";

import AudioPlayer from "@/components/customComponents/audio/AudioPlayer.vue";
import VoiceSelection from "@/components/popup/VoiceSelection.vue";
import { Style } from "@/views/PoemsService.vue";

const selectedStyle = ref<Style>({ title: "Anime", value: "anime" });

const audioGenerated = ref<boolean>(false);
const onPopupHide = (val: { style: Style; isShowPopup: boolean }) => {
  isShowPopup.value = val.isShowPopup;
  if (val.style) {
    selectedStyle.value = val.style;
  }
};

const voiceValue = ref({
  language: "",
  dialect: "",
  gender: "",
});

const subject = ref("");

const isShowPopup = ref<boolean>(false);

const showPopup = (val: boolean) => {
  if (!val) {
    document.documentElement.style.overflow = "auto";
  } else {
    document.documentElement.style.overflow = "hidden";
  }
  isShowPopup.value = val;
};

const onVoiceSelect = () => {
  showPopup(false);
  // console.log(val);
  // voiceValue.value = val.val;
};

const handleGenerate = () => {
  audioGenerated.value = true;
};

const download = () => {
  axios
    .get(
      "https://upload.wikimedia.org/wikipedia/commons/d/d6/Louis-Emmanuel_Jadin_-_Nocturne_No._3_in_G_minor_-_2._Allegro_molto.ogg",
      { responseType: "blob" }
    )
    .then((response) => {
      const blob = new Blob([response.data], { type: "audio/mpeg" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "label";
      link.click();
      URL.revokeObjectURL(link.href);
    })
    .catch(console.error);
};
</script>

<style lang="scss" scoped>
.audio-generator {
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
}
</style>

<style lang="scss">
@import "@/scss/colors.scss";

.audio-generator {
  .p-icon {
    order: 1;
    color: white;
  }

  &__player {
    margin-top: 30px;
    border: 2px solid $primary-900;
    border-radius: 8px;
    padding: 30px;
    padding-top: 0;
    width: 100%;
  }

  &__download {
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    margin: 0 auto;
    margin-top: 40px;
    border: 2px solid $primary-400;
    border-radius: 12px;
    background-size: cover;
    background-color: #000;
    padding: 0 20px;
    width: 400px;
    height: 80px;
    font-weight: 600;
    font-size: 32px;
    text-align: center;
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
    cursor: pointer;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    background: rgb(0, 47, 111);
    background: linear-gradient(106deg, rgba(0, 47, 111, 1) 0%, rgba(13, 129, 136, 1) 49%, rgba(0, 47, 111, 1) 100%);
    width: 50%;
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
</style>
