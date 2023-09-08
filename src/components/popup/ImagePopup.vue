<template>
  <OnClickOutside @trigger="closePopup">
    <div v-show="isShowImagePopup" class="image-popup">
      <img :src="imgSrc" alt="generated Image" />
      <div @click="onImageSave" class="image-popup__save-btn btn-neon">SAVE</div>
    </div>
  </OnClickOutside>
</template>

<script lang="ts" setup>
import { OnClickOutside } from "@vueuse/components";
import axios from "axios";
import { defineEmits, defineProps } from "vue";

import { useAppStore } from "@/store/app/appStore";

const appStore = useAppStore();
const { updateIsLoading } = appStore;

const props = defineProps({
  isShowImagePopup: Boolean,
  imgSrc: { type: String, required: true },
});

const closePopup = () => {
  emit("onPopupClose", false);
};

const emit = defineEmits(["cancel", "confirm", "onPopupClose"]);

const onImageSave = async () => {
  updateIsLoading(true);
  axios
    .get(props.imgSrc, { responseType: "blob" })
    .then((response) => {
      const blob = new Blob([response.data], { type: "image/png" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "generated-image";
      link.click();
      URL.revokeObjectURL(link.href);
    })
    .catch(console.error)
    .finally(() => {
      updateIsLoading(false);
    });
};
</script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";

.image-popup {
  display: flex;
  position: absolute;
  top: 40%;
  left: 40%;
  flex-direction: column;
  gap: 20px;
  z-index: 10;
  margin: 0 -200px;
  border: 2px solid #2a4365;
  border-radius: 8px;
  background-color: #0a0a0a;
  padding: 50px 50px;
  width: 50%;

  &__save-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0 auto;
    margin-top: 30px;
    border: 2px solid $primary-400;
    border-radius: 8px;
    width: 60%;
    height: 88px;
    font-weight: 600;
    font-size: 34px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
}
</style>
