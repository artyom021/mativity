<template>
  <div class="transaction">
    <h1 class="transaction__title">Transactions</h1>
    <div class="transaction__block-container">
      <div v-for="transaction in transactions" :key="transaction.description" class="transaction__block">
        <div class="transaction__block-item">
          <span class="transaction__block-title">Description</span>
          <span class="transaction__description">{{ transaction.description }}</span>
        </div>

        <div class="transaction__block-item">
          <span class="transaction__block-title">Transaction</span>
          <span class="transaction__transaction"
            >{{ transaction.type }}
            <span class="transaction__transaction-value">{{ transaction.transaction }}</span></span
          >
        </div>

        <div class="transaction__block-item">
          <span class="transaction__block-title">Date of Transaction</span>
          <span class="transaction__date">{{ transaction.date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import { Transaction } from "@/store/transactions/transactionStore";

const transactions = ref<Transaction[]>([
  {
    description: "test",
    transaction: "500",
    type: "purchase",
    date: "23.08.2023",
  },
  {
    description: "test",
    transaction: "500",
    type: "purchase",
    date: "23.08.2023",
  },
  {
    description: "test",
    transaction: "500",
    type: "purchase",
    date: "23.08.2023",
  },
  {
    description: "test",
    transaction: "500",
    type: "purchase",
    date: "23.08.2023",
  },
  {
    description: "test",
    transaction: "500",
    type: "purchase",
    date: "23.08.2023",
  },
  {
    description: "test",
    transaction: "500",
    type: "purchase",
    date: "23.08.2023",
  },
]);
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
    height: 80%;
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
    justify-content: center;
    gap: 160px;
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

  &__description,
  &__transaction,
  &__date {
    text-align: center;
  }
}
</style>
