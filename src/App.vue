<script setup>
import useUsersStore from "@/store/users";
import { ref, watch } from "vue";

const pagination = ref({
  page: 1,
  limit: 20,
});

const loading = ref(false);
const search = ref("");
const total = ref(0);

const store = useUsersStore();

watch(
  () => pagination.value,
  async () => {
    handleSearch();
  },
  {
    deep: true,
    immediate: true
  }
);

async function handleSearch() {
  loading.value = true;
  const response = await store.fetchUsers({
    ...pagination.value,
    search: search.value,
  });
  total.value = +response.headers["x-total-count"];

  loading.value = false;
}

</script>

<template>
  <el-input v-model="search" placeholder="Type to search ..." />
  <el-button @click="handleSearch">Search</el-button>
  <el-table :data="store.users" height="90vh">
    <el-table-column label="ID" prop="id" width="100px" />
    <el-table-column label="Name" prop="name" width="150px" />
    <el-table-column label="Email" prop="email" width="200px"/>
    <el-table-column label="Address" width="400px">
  <template #default="{ row }">
    <div style="display: flex; align-items: center; margin-right: 20px;">
      <span style="margin-left: 10px">{{ row.address.street }}</span>
      <span style="margin-left: 10px">{{ row.address.suite }}</span>
      <span style="margin-left: 10px">{{ row.address.city }}</span>
      <span style="margin-left: 10px">{{ row.address.zipcode }}</span>
    </div>
  </template>
</el-table-column>
    <el-table-column label="Phone" prop="phone" width="200px"/>
    <el-table-column label="Website" prop="website" width="100px"/>
    <el-table-column label="Company">
  <template #default="{ row }">
    <div style="display: flex; align-items: center; margin-right: 20px;">
      <span style="margin-left: 10px">{{ row.company.name }}</span>
      <span style="margin-left: 10px">{{ row.company.catchPhrase }}</span>
      <span style="margin-left: 10px">{{ row.company.bs }}</span>
    </div>
  </template>
</el-table-column>

  </el-table>
  <el-pagination
    :total="total"
    background
    v-model:page-size="pagination.limit"
    v-model:current-page="pagination.page"
    :disabled="loading"
    layout="total, sizes, prev, pager, next, jumper"
  />
</template>


<style scoped>

</style>
