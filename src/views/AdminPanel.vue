<template>
  <div class="admin-panel">
    <TabView class="admin-panel__tab">
      <TabPanel header="Transactions">
        <AdminTransactions />
      </TabPanel>
      <TabPanel header="Users">
        <AdminUserList />
      </TabPanel>
    </TabView>
  </div>
</template>

<script lang="ts" setup>
import TabPanel from "primevue/tabpanel";
import TabView from "primevue/tabview";

import AdminTransactions from "@/components/adminPanel/AdminTransactions.vue";
import AdminUserList from "@/components/adminPanel/AdminUserList.vue";
</script>

<style lang="scss" scoped>
.admin-panel {
  margin-top: 40px;
  padding: 0 18px;

  &__tab {
    margin-top: 120px;
  }
}
</style>

<style lang="scss">
.admin-panel .p-tabview .p-tabview-nav li {
  width: 50%;
}

.admin-panel .p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
  border: 2px solid #01ddeb;
  border-radius: 4px;
}

.admin-panel .p-datatable .p-sortable-column.p-highlight {
  background: unset !important;
}
</style>
