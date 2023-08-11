<template>
  <div>
    <Dialog
      v-model:visible="isShowPopup"
      :closable="false"
      :style="{ width: '65vw' }"
      @hide="onPopupHide"
      class="voice-selection"
      header="Choose a style:"
      modal
    >
      <div class="voice-selection__container" id="dropdowns">
        <Dropdown
          v-model="selectedLanguage"
          :options="languages"
          class="voice-selection-dropdown"
          optionLabel="label"
          placeholder="Language"
        />
        <Dropdown
          v-model="selectedDialect"
          :options="items"
          class="voice-selection-dropdown"
          optionLabel="label"
          placeholder="Dialect"
        />
        <Dropdown
          v-model="selectedGender"
          :options="items"
          class="voice-selection-dropdown"
          optionLabel="label"
          placeholder="Gender"
        />
        <Dropdown
          v-model="selectedVoicestyle"
          :options="itsems"
          class="voice-selection-dropdown"
          optionLabel="label"
          placeholder="Voice Style"
        />
      </div>
    </Dialog>
  </div>
</template>

<script lang="ts" setup>
import Dialog from "primevue/dialog";
import Dropdown from "primevue/dropdown";
import { computed, ref } from "vue";

import { Style } from "@/views/PoemsService.vue";

const props = defineProps({
  visible: Boolean,
  styles: Array,
});

const emit = defineEmits(["onChangeShowPopup"]);

const selectedLanguage = ref<Style>();
const selectedDialect = ref<Style>();
const selectedGender = ref<Style>();
const selectedVoicestyle = ref<Style>();

const languages = ref([
  {
    label: "English",
    value: "english",
  },
  {
    label: "Italian",
    value: "italian",
  },
  {
    label: "French",
    value: "french",
  },
  {
    label: "Dutch",
    value: "dutch",
  },
  {
    label: "German",
    value: "Spanish",
  },
]);

const onPopupHide = (styleValue: Style | null) => {
  emit("onChangeShowPopup", { style: styleValue, isShowPopup: false });
};

const onStyleChange = (styleValue: Style) => {
  emit("onChangeShowPopup", { style: styleValue, isShowPopup: false });
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    cursor: pointer;
    border-bottom: 1px solid #525252;
    background-color: black;
    padding-bottom: 20px;
    min-width: 240px;
    height: 67px;
    color: white;
    font-weight: 600;
    font-size: 20px;
  }
}
</style>

<style lang="scss">
@import "@/scss/colors.scss";

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

  .p-dialog-content,
  .p-dialog-header {
    background-color: #090909 !important;
    color: white !important;
  }

  //.p-dropdown-items-wrapper {
  //  background-color: #0d8188 !important;
  //}
}

//.voice-selection.p-dialog {
//  border: 1px solid #2a4365 !important;
//  background: black !important;
//}

//.voice-selection > .p-dialog-header {
//  background-color: #090909 !important;
//  color: white !important;
//}
//
//.voice-selection > .p-dialog-content {
//  background-color: #090909 !important;
//  color: white !important;
//}

//.voice-selection-dropdown .p-dropdown-label {
//  font-size: 24px !important;
//  letter-spacing: 2px !important;
//}
//
//.voice-selection-dropdown.p-dropdown {
//  border: unset;
//  background-color: #0d8188 !important;
//}
//
//.voice-selection-dropdown .p-dropdown-trigger-icon {
//  color: white !important;
//}
//
//.voice-selection-dropdown .p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight {
//  background: #0d8188 !important;
//}
</style>
