import { defineStore } from "pinia";
import { ref } from "vue";

export interface Transaction {
  description: string;
  transaction: string;
  date: string;
  type: string;
}

export const useBuyNeuronsStore = defineStore("buyNeuronsStore", () => {
  const MIN_NEURONS__TO_BUY = 5;
  const MIN_NEURONS__TO_BUY_CURRENCY = 50;
  const inputNeurons = ref<number>(MIN_NEURONS__TO_BUY);
  const inputNeuronsInCurrency = ref<number>(MIN_NEURONS__TO_BUY_CURRENCY);

  const updateInputNeurons = (value: number | undefined): void => {
    value ? (inputNeurons.value = value) : null;
  };

  const updateInputNeuronsCurrency = (value: number | undefined): void => {
    value ? (inputNeuronsInCurrency.value = value) : null;
  };

  return {
    inputNeurons,
    inputNeuronsInCurrency,

    updateInputNeurons,
    updateInputNeuronsCurrency,
  };
});
