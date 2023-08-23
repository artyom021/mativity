<template>
  <OnClickOutside @trigger="handleProfileMenu">
    <Transition name="bounce">
      <div v-show="isShowProfile" :style="{ left: `${offsetLeft - 200}px` }" class="user-profile-popup"></div>
    </Transition>
  </OnClickOutside>
</template>

<script lang="ts" setup>
import { OnClickOutside } from "@vueuse/components";

defineProps({
  isShowProfile: Boolean,
  offsetLeft: Number,
});

const emit = defineEmits(["handleProfileMenu"]);

const handleProfileMenu = () => {
  emit("handleProfileMenu");
};
</script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";

.user-profile-popup {
  display: flex;
  position: absolute;
  top: 100px;
  flex-direction: column;
  gap: 20px;
  z-index: 999;
  border: 2px solid $primary-900;
  border-radius: 8px;
  background-color: $grey-4000;
  padding: 10px;
  width: 228px;
  height: 310px;
}
</style>
