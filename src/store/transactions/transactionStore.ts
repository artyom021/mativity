import { defineStore } from "pinia";
import { ref } from "vue";

export interface Transaction {
  neuron_qnt: number;
  created_at: string;
  service_type: string;
}

export const useTransactionStore = defineStore("transactionStore", () => {
  const transactionList = ref<Transaction[] | null>(null);

  const updateTransactions = (transactions: Transaction[]): void => {
    transactionList.value = transactions;
  };

  return {
    transactionList,

    updateTransactions,
  };
});
