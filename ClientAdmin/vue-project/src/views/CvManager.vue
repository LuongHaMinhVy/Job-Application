<template>
  <h1>Quản lý CV</h1>
  <div class="head">
    <input
      v-model="search"
      @input="searchTitle"
      class="search"
      type="text"
      placeholder="Tìm kiếm theo tiêu đề"
    />
    <select @change="findCvByStatus" class="filter" v-model="filterByStatus">
      <option :value="null">Lọc theo trạng thái</option>
      <option :value="true">Đã duyệt</option>
      <option :value="false">Chưa duyệt</option>
    </select>
  </div>
  <div class="display">
    <Cv v-if="cvs" v-for="(item, index) in cvs" :key="index" :cv="item" />
  </div>
</template>
<script setup>
import Cv from "@/components/Cv.vue";

import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";


const search = ref("");
const filterByStatus = ref(null);
const searchTitle = () => {
  if (search.value) store.dispatch("searchCvByTitle", search.value);
  else store.dispatch("fetchAdminCvs");
};


const findCvByStatus = () => {
  if (filterByStatus.value === null) store.dispatch("fetchAdminCvs");
  store.dispatch("filterCvByStatus", filterByStatus.value);
};
const store = useStore();
onMounted(() => {
  store.dispatch("fetchAdminCvs");
});
const cvs = computed(() => store.getters.getAdminCvs);
</script>
<style scoped>
.head {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  gap: 10px;
}
.display {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  gap: 20px;
}
.search {
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ddd;
  outline: none;
}
.filter {
  outline: none;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ddd;
  cursor: pointer;
}
</style>
