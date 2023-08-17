<template>
  <div class="voice-selection">
    <Dialog
      v-model:visible="isShowPopup"
      :closable="true"
      :style="{ width: '84vw' }"
      @hide="onPopupHide"
      class="voice-selection__dialog"
      header="Choose a style:"
      modal
    >
      <div class="voice-selection__container" id="dropdowns" ref="voiceSelection">
        <AccordeonDropdown v-model="selectedLanguage" :items="languages" placeholder="Language" />
        <AccordeonDropdown v-model="selectedDialect" :items="dialects" placeholder="Dialect" />
        <AccordeonDropdown v-model="selectedGender" :items="gender" placeholder="Gender" />
        <AccordeonDropdown v-model="selectedVoicestyle" :items="voiceStyle" placeholder="Voice Style" />
      </div>

      <div class="voice-selection__voices">
        <div v-for="voice in voices" :key="voice.label" class="voice-selection__voice-item">
          <SoundIcon class="voice-selection__speaker" />
          {{ voice.label }}
        </div>
      </div>

      <div class="voice-selection__view-all">View all voices</div>
      <div @click="onStyleChange" class="voice-selection__select-btn btn-neon">SELECT</div>
    </Dialog>
  </div>
</template>

<script lang="ts" setup>
import Dialog from "primevue/dialog";
import { computed, ref } from "vue";

import SoundIcon from "@/components/icons/speakerIcon.vue";
import AccordeonDropdown from "@/components/inputs/AccordeonDropdown.vue";
import { dialects, gender, languages, voiceStyle, voices } from "@/settings/voiceSettings";
import { Style } from "@/views/PoemsService.vue";

const voiceSelection = ref();

const props = defineProps({
  visible: Boolean,
  styles: Array,
});

const emit = defineEmits(["onChangeShowPopup", "onVoiceSelect"]);

const selectedLanguage = ref<Style>();
const selectedDialect = ref<Style>();
const selectedGender = ref<Style>();
const selectedVoicestyle = ref<Style>();

const onPopupHide = () => {
  emit("onChangeShowPopup", false);
};

const onStyleChange = () => {
  emit("onVoiceSelect", {
    val: {
      language: selectedLanguage.value?.label,
      dialect: selectedDialect.value.label,
      gender: selectedGender.value.label,
      voiceStyle: selectedVoicestyle.value.label,
    },
    isShowPopup: false,
  });
};

const isShowPopup = computed({
  get() {
    return props.visible;
  },
  set(value) {
    emit("onChangeShowPopup", value);
  },
});
</script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";

.voice-selection {
  &__dialog {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 16px;
  }

  &__container {
    display: flex;
    justify-content: space-between;
    gap: 24px;
    cursor: pointer;
    border-bottom: 1px solid #292929;
    background-color: black;
    padding-top: 4px;
    padding-bottom: 20px;
    min-width: 240px;
    color: white;
    font-weight: 600;
    font-size: 20px;
  }

  &__voices {
    display: flex;
    column-gap: 24px;
    row-gap: 18px;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 20px;
  }

  &__voice-item {
    display: flex;
    align-items: center;
    width: 22%;
  }

  &__speaker {
    margin-right: 20px;
  }

  &__view-all {
    cursor: pointer;
    margin-top: 24px;
    border-bottom: 1px solid #292929;
    padding-bottom: 16px;
    color: $primary-200;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
  }

  &__select-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0 auto;
    margin-top: 50px;
    border: 2px solid $primary-400;
    border-radius: 12px;
    width: 50%;
    height: 80px;
    font-weight: 600;
    font-size: 32px;
  }
}
</style>

<style lang="scss">
@import "@/scss/colors.scss";

.voice-selection__dialog.p-dialog {
  border: 1px solid #2a4365 !important;
  border-radius: 8px;
}

.p-dialog-header-close-icon {
  color: white !important;
}

.p-dialog-header-close-icon:hover {
  color: black !important;
}

.p-dialog .p-dialog-header .p-dialog-header-icon:focus {
  box-shadow: 0 0 0 0.2rem $primary-200 !important;
}

.voice-selection {
  display: flex;
  gap: 20px;
  background-color: #090909 !important;

  .p-dialog .p-dialog-content:last-of-type {
    border-bottom-right-radius: 8px !important;
    border-bottom-left-radius: 8px !important;
  }

  .p-dialog .p-dialog-header {
    border-top-right-radius: 8px !important;
    border-top-left-radius: 8px !important;
  }

  &__dialog .p-dialog-content,
  &__dialog .p-dialog-header {
    background-color: black !important;
    color: white !important;
  }
}
</style>
