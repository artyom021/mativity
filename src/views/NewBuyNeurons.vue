<template>
  <div class="audio-params">
    <h1 class="audio-params__title">1. Audio Generator</h1>
    <hr class="audio-params__divider" />
    <div class="audio-params__container">
      <div class="audio-params__container" id="dropdowns" ref="voiceSelection">
        <div class="audio-params__input-row">
          <div class="audio-params__input-group">
            <span class="audio-params__input-label">Subject</span>
            <TextArea
              :model-value="subjectInputValue"
              :pt="{
                root: { class: 'border-teal-400', style: { height: '300px' } },
              }"
              @update:modelValue="onChangeSubject"
              autoResize
              class="audio-params__text-input-subject"
              dense
              label="Enter a Subject"
              placeholder="Enter the name of the subject"
              ref="nameInput"
              type="text"
              v-tooltip="'Enter your username'"
            />
          </div>
          <div class="audio-params__input-group-right">
            <div class="audio-params__input-line">
              <SingleSelectComponent
                :model-value="selectedLanguage"
                :options="languages"
                :width="'300'"
                @update:modelValue="onChangeLanguage"
                class="audio-params__text-input-language"
                option-label="label"
                option-value="value"
                placeholder="Language"
                title="Language"
              />

              <SingleSelectComponent
                :model-value="selectedDialect"
                :options="dialects"
                :width="'300'"
                @update:modelValue="onChangeDialects"
                class="audio-params__text-input"
                option-label="label"
                option-value="value"
                placeholder="Dialects"
                title="Dialects"
              />
            </div>

            <div class="audio-params__input-line">
              <SingleSelectComponent
                :model-value="selectedGender"
                :options="gender"
                :width="'300'"
                @update:modelValue="onChangeGender"
                class="audio-params__text-input"
                option-label="label"
                option-value="value"
                placeholder="Gender"
                title="Gender"
              />

              <SingleSelectComponent
                :model-value="selectedVoicestyle"
                :options="voiceStyle"
                :width="'300'"
                @update:modelValue="onChangeStyle"
                class="audio-params__text-input"
                option-label="label"
                option-value="value"
                placeholder="Style"
                title="Style"
              />
            </div>
          </div>
        </div>

        <div class="audio-params__controls">
          <div class="audio-params__generation">
            <div class="audio-params__generation-title">1 Generation</div>
            <div class="audio-params__generation-value">
              <img :src="require(`@/assets/svg/curve.svg`)" alt="Price" /> 20
            </div>
          </div>

          <div class="audio-params__btn-container">
            <SecondaryButton :disabled="!isFormFilled" @click="onReset">Reset</SecondaryButton>
            <PrimaryButton :disabled="!isSubjectFilled" @click="onApply" class="apply-btn">Apply</PrimaryButton>
          </div>
        </div>
      </div>
    </div>

    <h1 class="audio-params__subtitle">2. Voice Selection</h1>
    <hr class="audio-params__divider" />
  </div>
</template>

<script lang="ts" setup>
import Card from "primevue/card";
import TextArea from "primevue/textarea";
import { computed, ref } from "vue";

import SingleSelectComponent from "@/components/inputs/SingleSelectComponent.vue";
import PrimaryButton from "@/components/inputs/texts/buttons/PrimaryButton.vue";
import SecondaryButton from "@/components/inputs/texts/buttons/SecondaryButton.vue";
import { dialects, gender, languages, voiceStyle } from "@/settings/voiceSettings";
import { Style } from "@/views/PoemsService.vue";

const selectedLanguage = ref<Style | null>(null);
const selectedDialect = ref<Style | null>(null);
const selectedGender = ref<Style | null>(null);
const selectedVoicestyle = ref<Style | null>(null);

const languageInputValue = ref<string>("");
const subjectInputValue = ref<string>("");

const isFormFilled = computed<boolean>(() => {
  return (
    !!subjectInputValue.value.length ||
    selectedLanguage.value ||
    selectedDialect.value ||
    selectedGender.value ||
    selectedVoicestyle.value
  );
});

const isSubjectFilled = computed<boolean>(() => !!subjectInputValue.value.length);

const resetFilterAndSorting = () => {
  // relevantOccasionRef.value.resetSorting();
  // filter.value.onReset();
};

const onChangeLanguage = (value: Style) => {
  selectedLanguage.value = value;
};

const onChangeSubject = (value: string) => {
  subjectInputValue.value = value;
};

const onChangeDialects = (value: Style) => {
  selectedDialect.value = value;
};

const onChangeGender = (value: Style) => {
  selectedGender.value = value;
};

const onChangeStyle = (value: Style) => {
  selectedVoicestyle.value = value;
};
const onReset = () => {
  subjectInputValue.value = "";
  selectedLanguage.value = null;
  selectedDialect.value = null;
  selectedGender.value = null;
  selectedVoicestyle.value = null;
};
</script>

<style lang="scss">
.audio-params {
  background-color: black;
  padding: 0px 88px;

  &__text-input-subject {
    width: 420px !important;
    height: 170px !important;
  }

  &__input-group-right {
    display: flex;
    column-gap: 32px;
    justify-content: right;
    /* flex-grow: 1; */
    gap: 38px;

    padding-top: 20px;
    width: 100%;
  }

  &__btn-container {
    display: flex;
    gap: 12px;
  }

  &__text-input-language {
  }

  &__text-input {
  }

  &__input-label {
    margin-bottom: 10px;
  }

  &__input-line {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  &__controls {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 30px;
    margin-top: 40px;
    margin-bottom: 60px;
  }

  &__generation {
    display: flex;
    order: 1;
    /* margin: 34px auto 0; */
    width: 33%;
    height: 64px;
    /* margin-left: auto; */
  }
  &__generation-title {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    background-color: #d53f8c;
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
    border: 2px solid #d53f8c;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    width: 50%;
    color: #d53f8c;
    font-weight: 600;
    font-size: 24px;
  }
  &__title {
    margin-top: 80px;
    padding: 0 36px;
  }

  &__divider {
    margin: 8px 0;
    border-bottom: blueviolet;
    background-color: cyan !important;
    height: 2px;
  }

  &__input-row {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;

    padding-top: 22px;
  }

  &__text-input.inputtext {
    color: white !important;
  }

  &__language {
    margin-right: 20px !important;
    width: 220px !important;
  }

  &__controls {
    display: flex;
    gap: 30px;
    margin-top: 80px;
  }

  &__subtitle {
    margin-top: 10px;
  }

  &__input-group {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    height: 100%;
  }
}

button,
input,
select,
textarea {
  color: white !important;
}

button,
input,
select,
textarea {
  padding: 16px 12px;
}

.p-inputtext.p-inputtext-sm {
  background: black;
}

.p-inputtext input {
  background: black;
}

.p-inputtext:enabled:hover {
  color: white;
}

.p-inputtext.p-inputtext-sm {
  background: black;
  color: white !important;
}
</style>
