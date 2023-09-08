<template>
  <div>
    <div v-if="label" class="text-input-label">{{ label }}</div>
    <div :class="{ [`p-input-icon-${iconPosition}`]: isSearch }" class="text-input-container">
      <i v-if="isSearch" class="pi text-input-icon">
        <StyledIcon icon="Search" />
      </i>
      <InputText
        :model-value="modelValue"
        :class="{ small, 'text-input--warning': isInvalid }"
        :disabled="disabled"
        :hide-details="true"
        :maxlength="maxLength"
        :placeholder="placeholder"
        :type="password ? 'password' : 'text'"
        @blur="emit('blur', $event)"
        @update:model-value="onChange"
        class="text-input"
        label="Enter a Subject"
        unstyled
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import InputText from "primevue/inputtext";
import { PropType } from "vue";

import StyledIcon from "@/components/icons/StyledIcon.vue";

defineProps({
  modelValue: String,
  placeholder: String,
  small: Boolean,
  disabled: Boolean,
  label: String,
  password: Boolean,
  hideDetails: Boolean,
  iconPosition: {
    type: String as PropType<"left" | "right">,
    default: "left",
  },
  isSearch: Boolean,
  isInvalid: Boolean,
  maxLength: Number,
});

const emit = defineEmits(["update:modelValue", "blur"]);

const onChange = (value: string) => {
  emit("update:modelValue", value);
};
</script>

<style lang="scss" scoped>
@import "@/scss/textMixins.scss";

.text-input-icon {
  top: 45% !important;
}

.text-input-label {
  @include select-title;
}

.text-input-container {
  width: 100%;
}

button,
input,
optgroup,
select,
textarea {
  color: white;
}
</style>
