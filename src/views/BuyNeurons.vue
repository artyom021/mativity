<template>
  <div class="neuron">
    <h1 class="neuron__title">Buy Neurons</h1>
    <div class="neuron__sub-title">The minimum deposit amount per one transaction is 5 EUR.</div>
    <div class="neuron__sub-title">The maximum deposit amount per one transaction is 500 EUR.</div>

    <div class="neuron__input-container">
      <div class="neuron__input-block">
        <div class="neuron__input-info neuron-display">
          <div class="neuron__input-info-wrapper">
            <div class="neuron__input-info input-top">
              <div class="neuron__label">SWAP</div>
              <InputNumber
                v-model:model-value.number="neuronsComputed"
                :max="500"
                :maxFractionDigits="1"
                :min="5"
                :minFractionDigits="1"
                :step="0.01"
                class="w-full neuron__buy-slider-input token"
                mode="decimal"
                prefix="&euro;      "
              />
            </div>
            <div class="neuron__slider-panel">
              <span class="neuron__range">50 EUR</span>
              <SliderInput
                v-model="neuronsComputed"
                :max="500"
                :min="50"
                @update:model-value="neuronsComputed"
                class="neuron__slider-input"
                step="5"
              />
              <span class="neuron__range">500 EUR</span>
            </div>
          </div>
        </div>

        <ChangeIcon class="neuron__change-icon" />
        <div class="neuron__input-block">
          <div class="neuron__input-info neuron-display">
            <div class="neuron__input-info-wrapper">
              <div class="neuron__input-info input-top">
                <div class="neuron__label">SWAP</div>
                <InputNumber
                  v-model="neuronsCurrencyComputed"
                  :max="5000"
                  :min="50"
                  class="w-full neuron__buy-slider-input"
                  mode="decimal"
                  prefix="&euro;      "
                />
              </div>
              <div class="neuron__slider-panel">
                <span class="neuron__range">5</span>
                <SliderInput
                  v-model="neuronsCurrencyComputed"
                  :max="5000"
                  :min="50"
                  @update:model-value="neuronsCurrencyComputed"
                  class="neuron__slider-input"
                  step="50"
                />
                <span class="neuron__range">5000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div @click="onBuyNeurons" class="neuron__confirm-btn">Confirm</div>
        <div class="neuron__checkbox">
          <Checkbox v-model="confirmation" binary />
          <div class="neuron__checkbox-title">
            I have read, understood and agreed to the Terms of Use and to the Privacy Policy of the website
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import Checkbox from "primevue/checkbox";
import InputNumber from "primevue/inputnumber";
import { computed, ref } from "vue";

import ChangeIcon from "@/components/icons/ChangeIcon.vue";
import SliderInput from "@/components/inputs/SliderInput.vue";
import { useUserPayment } from "@/hooks/user/usePayment";
import { useBuyNeuronsStore } from "@/store/neurons/useBuyNeurons";

const buyNeuronsStore = useBuyNeuronsStore();
const { inputNeurons } = storeToRefs(buyNeuronsStore);
const { updateInputNeurons, updateInputNeuronsCurrency } = buyNeuronsStore;

const neurons = ref<number>(5);

const confirmation = ref(false);

const neuronsComputed = computed<number>({
  get() {
    return inputNeurons.value;
  },
  set(neurons) {
    updateInputNeurons(neurons);
    updateInputNeuronsCurrency(neurons * 10);
  },
});

const neuronsCurrencyComputed = computed<number>({
  get() {
    return inputNeurons.value * 10;
  },
  set(value) {
    updateInputNeurons(value / 10);
    updateInputNeuronsCurrency(value);
  },
});

const neuronsWithCurrency = computed<number>({
  get() {
    return neuronsCurrencyComputed.value;
  },
  set(neurons) {
    updateInputNeurons(neurons);
  },
});

const onBuyNeurons = async () => {
  const res = await useUserPayment({ amount_count: inputNeurons.value * 10 });

  if (res) {
    window.location.href = res;
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";

.neuron {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 58%;

  &__title {
    margin-top: 100px;
    margin-bottom: 20px;
    text-align: center;
  }

  &__sub-title {
    color: $grey-7000;
  }

  &__input-container {
    margin-top: 28px;
    border: 2px solid $primary-900;
    border-bottom: 1px solid $primary-900;
    border-radius: 10px;
    background-color: $grey-5000;
    padding: 48px 32px;
    width: 100%;
  }

  &__input-block {
    position: relative;
  }

  &__input-info {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border-bottom: 2px solid #2a4365;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    background-color: black;
    padding-bottom: pt;
  }

  &__label {
    color: $primary-200;
    font-weight: 600;
    font-size: 20px;
  }

  .token &__label {
    color: $primary-200;
    font-weight: 600;
    font-size: 20px;
  }

  &__input-info-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    width: 100%;
  }

  &__buy-slider-input {
    width: 168px !important;
  }

  &__buy-slider-input {
    margin-top: 20px !important;
  }

  &__slider-input {
    margin-top: 36px;
    padding: 0 20px;
    width: 100%;
  }

  &__slider-panel {
    display: flex;
    padding: 0 54px;
    padding-bottom: 40px;
  }

  &__range {
    display: flex;
    align-items: center;
    padding-top: 28px;
    width: 102px;
  }
  .token &__range {
    display: flex;
    align-items: center;
    padding-top: 28px;
    width: 122px;
  }

  &__label {
    padding-left: 52px !important;
  }

  &__confirm-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 45px;
    margin: 0 auto;
    margin-bottom: 20px;
    border: 2px solid $primary-400;
    border-radius: 8px;
    background: black;
    width: 60%;
    height: 88px;
    font-weight: 600;
    font-size: 34px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  &__checkbox {
    display: flex;
    gap: 20px;
    margin: 0 auto;
    width: 60%;
  }

  &__change-icon {
    position: absolute;
    top: 175px;
    left: 47%;
    z-index: 999;
  }
}

.neuron-display {
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
}
</style>

<style lang="scss">
.neuron .p-inputtext:enabled:focus {
  box-shadow: unset !important;
  border-color: unset !important;
}

.neuron .p-inputtext {
  border-radius: 12px !important;
  width: 80px !important;
  font-weight: 600 !important;
  font-size: 16px !important;
}
.neuron__input-slider {
  display: flex;
  flex-direction: column;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: black;
  padding: 34px 52px;
  height: 110px;
}

.neuron .p-inputnumber .p-inputtext {
  margin-right: 52px !important;
}

.neuron-display {
  margin-bottom: 48px;
  border-bottom: 48px !important;
}

.neuron__input-info .input-top {
  border-radius: 8px 8px 0 0;
  padding-bottom: 18px;
}
</style>
