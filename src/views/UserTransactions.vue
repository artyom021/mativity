<template>
  <div class="transaction">
    <h1 class="transaction__title">Transactions</h1>
    <div class="transaction__block-container">
      <div v-for="transaction in transactionList" :key="transaction.description" class="transaction__block">
        <div class="transaction__block-item transaction__description-block">
          <span class="transaction__block-title">Description</span>
          <span class="transaction__description">{{ transaction.service_type }}</span>
        </div>

        <div class="transaction__block-item">
          <span class="transaction__block-title">Transaction</span>
          <span class="transaction__transaction">
            <span class="transaction__transaction-value">{{ transaction.neuron_qnt }} neurons</span></span
          >
        </div>

        <div class="transaction__block-item">
          <span class="transaction__block-title">Date of Transaction</span>
          <span class="transaction__date">{{ transaction.created_at.slice(0, 10) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { onBeforeMount } from "vue";

import { getTransaction } from "@/hooks/transactions/useGetTransaction";
import { useTransactionStore } from "@/store/transactions/transactionStore";

const userTransactionStore = useTransactionStore();
const { transactionList } = storeToRefs(userTransactionStore);

onBeforeMount(async () => {
  await getTransaction();
});
</script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";

.transaction {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  height: 70vh;

  &__block-container {
    display: flex;
    position: absolute;
    row-gap: 24px;
    flex-direction: column;
    align-items: center;
    margin-top: 180px;
    border-radius: 8px;
    background-color: #131313;
    width: 80%;
    max-height: 80%;
    overflow: auto;
  }

  &__block {
    border: 2px solid #2a4365;
    border-radius: 8px;
    background-color: #131313;
    padding: 24px 50px;
    width: 100%;
    font-weight: 400;
    font-size: 20px;
  }

  &__title {
    display: flex;
    flex-direction: column;
    margin-bottom: 54px;
    padding-top: 100px;
  }

  &__block {
    display: flex;
    justify-content: space-between;
    //gap: 120px;
  }

  &__block-item {
    display: flex;
    flex-direction: column;
  }

  &__block-title {
    padding-bottom: 24px;
    color: $primary-200;
    font-weight: 600;
    font-size: 23px;
  }

  &__transaction {
    color: #d53f8c;
  }

  &__transaction,
  &__date {
    text-align: center;
  }

  &__description-block {
    flex-basis: 260px;
  }
}
</style>
