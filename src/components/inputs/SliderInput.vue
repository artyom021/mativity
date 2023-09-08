<template>
  <div class="card flex justify-content-center">
    <div class="w-14rem">
      <Slider
        :model-value="modelValue"
        :max="max"
        :min="min"
        @update:modelValue="$emit('update:modelValue', $event)"
        class="w-full"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { storeToRefs } from "pinia";
import Slider from "primevue/slider";
// import { computed } from "vue";

// import { useBuyNeuronsStore } from "@/store/neurons/useBuyNeurons";

// const buyNeuronsStore = useBuyNeuronsStore();
// const { inputNeurons } = storeToRefs(buyNeuronsStore);
// const { updateInputNeurons } = buyNeuronsStore;

defineEmits(["update:modelValue"]);

defineProps({
  modelValue: {
    type: Number,
  },
  min: {
    type: Number,
  },
  max: {
    type: Number,
  },
});
</script>

<style scoped></style>
