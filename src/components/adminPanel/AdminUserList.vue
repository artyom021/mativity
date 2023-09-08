<template>
  <div class="card">
    <DataTable :value="usersList" tableStyle="min-width: 50rem">
      <Column
        v-for="column of userListColumns"
        :field="column.fieldName"
        :header="column.title"
        :key="column.fieldName"
        :sort-fields="column.fieldName"
        :sortable="column.isSortable"
      >
      </Column>
    </DataTable>
  </div>
</template>

<script lang="ts" setup>
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import { onBeforeMount, ref } from "vue";

import { UserListItem, getUsers } from "@/hooks/admin/useUsersRead";
import { userListColumns } from "@/settings/tables/userListTable";

const usersList = ref<UserListItem[]>([]);

onBeforeMount(async () => {
  usersList.value = await getUsers();
});
</script>

<style lang="scss">
@import "@/scss/colors.scss";

.p-datatable .p-datatable-tbody > tr > td:first-child {
  border-top: 2px solid $primary-900;
  border-bottom: 2px solid $primary-900;
  border-left: 2px solid $primary-900;
  border-radius: 8px 0 0 8px;
}

.p-datatable .p-datatable-tbody > tr > td:last-child {
  border-top: 2px solid $primary-900;
  border-right: 2px solid $primary-900;
  border-bottom: 2px solid $primary-900;
  border-radius: 0 8px 8px 0;
}

.p-datatable .p-datatable-tbody > tr > td:not(td:first-child):not(td:last-child) {
  border-top: 2px solid $primary-900;
  border-bottom: 2px solid $primary-900;
}

.p-datatable-table {
  border-collapse: separate;
  border-spacing: 0 40px !important;
}

.p-datatable .p-datatable-tbody > tr {
  background-color: #131313 !important;
  height: 100px !important;
}

.p-datatable .p-datatable-tbody > tr > td {
  text-align: center !important;
}

.p-datatable .p-column-header-content {
  justify-content: center;
}

.p-tabview .p-tabview-nav {
  border: 1px solid #2a436500;
}

.p-tabview .p-tabview-nav {
  border: 1px solid rgb(253 253 253 / 0%);
}

.p-tabview .p-tabview-nav li .p-tabview-nav-link {
  border-width: 0 0 0 0 !important;
}

.admin-panel .p-tabview .p-tabview-nav .p-tabview-nav-link {
  justify-content: center;
}

.p-tabview-title {
  font-weight: 600;
  font-size: 32px;
}
</style>
