<template>
  <div>
    <Dialog
      v-model:visible="isShowPopup"
      :style="{ width: '65vw' }"
      @hide="onPopupHide"
      class="style-popup-container"
      closable
      header="Choose a style:"
      modal
    >
      <div class="style-popup">
        <div v-for="style in styles" :key="style.value" @click="onStyleChange(style)" class="style-popup__item">
          {{ style.title }}
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script lang="ts" setup>
import Dialog from "primevue/dialog";
import { computed } from "vue";

import { Style } from "@/views/PoemsService.vue";

const props = defineProps({
  visible: Boolean,
  styles: Array,
});

const emit = defineEmits(["onChangeShowPopup"]);

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

.style-popup {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 8px;
    background-color: black;
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

.p-dialog .p-dialog-content:last-of-type {
  border-bottom-right-radius: 8px !important;
  border-bottom-left-radius: 8px !important;
}

.p-dialog .p-dialog-header {
  border-top-right-radius: 8px !important;
  border-top-left-radius: 8px !important;
}

.style-popup-container .p-dialog-content,
.style-popup-container .p-dialog-header {
  background-color: $primary-600 !important;
  color: white !important;
}
</style>
