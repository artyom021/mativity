<template>
  <div class="select__container">
    <div v-if="title" class="select__title">{{ title }}</div>
    <Dropdown
      :model-value="modelValue"
      :append-to="appendToSelf ? 'self' : 'body'"
      :disabled="disabled"
      :filter="filter"
      :option-label="optionLabel"
      :option-value="optionValue"
      :options="options"
      :placeholder="placeholder ?? $lang.placeholder.select"
      :resetFilterOnHide="resetFilterOnHide"
      :style="{ width: `${width}px` }"
      @change="onChange"
      optionDisabled="disabled"
    >
    </Dropdown>
  </div>
</template>

<script lang="ts" setup>
import Dropdown from "primevue/dropdown";

const SELECT_TOOLTIP_FROM_LENGTH = 52;

const emit = defineEmits(["update:modelValue"]);

defineProps({
  options: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: [Object, String, Number],
  },
  title: String,
  required: Boolean,
  disabled: Boolean,
  optionValue: String,
  optionLabel: String,
  placeholder: String,
  filter: Boolean,
  resetFilterOnHide: {
    type: Boolean,
    default: true,
  },
  appendToSelf: Boolean,
  width: {
    type: String,
  },
});

// TODO: It will be used when we return back the tooltip.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getTooltip = (value?: string) => (value && value.length > SELECT_TOOLTIP_FROM_LENGTH ? value : "");

const onChange = ({ value }: { value: unknown }) => {
  emit("update:modelValue", value);
};
</script>

<style lang="scss" scoped>
@import "@/scss/textMixins.scss";

.select {
  &__container {
  }

  &__title {
    @include select-title;
  }
}
</style>
