<template>
  <div class="card">
    <DataTable
      :rows="5"
      :rowsPerPageOptions="[5, 10, 20, 50]"
      :value="transactionList"
      paginator
      tableStyle="min-width: 50rem"
    >
      <Column
        v-for="column of transactionListColumns"
        :field="column.fieldName"
        :header="column.title"
        :key="column.fieldName"
        :sort-fields="column.fieldName"
        :sortable="column.isSortable"
      >
        <template v-if="column.fieldName === LinkedSectionsColumn.Transaction" #body="{ data: item }">
          <div class="transaction-purchase cell--flex">purchase €{{ item.transaction }}</div>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script lang="ts" setup>
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import { onBeforeMount, ref } from "vue";

import { getTransactions } from "@/hooks/admin/useTransactionsRead";
import { LinkedSectionsColumn, transactionListColumns } from "@/settings/tables/transactionListTable";
import { AdminTransactions } from "@/types/tranasctions";
interface Transactions {
  userName: string;
  email: string;
  accountType: string;
  transaction: string;
  date: string;
}

const transactionList = ref<AdminTransactions[]>([]);

onBeforeMount(async () => {
  transactionList.value = await getTransactions();
});
</script>

<style lang="scss" scoped>
.transaction-purchase {
  color: #d53f8c;
}
</style>
