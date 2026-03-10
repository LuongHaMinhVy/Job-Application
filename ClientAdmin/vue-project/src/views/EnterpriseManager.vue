<template>
  <h1>Quản lý doanh nghiệp</h1>

  <!-- Filters and Table -->
  <div class="filters">
    <select class="filter-select">
      <option value="All">Lọc theo vai trò</option>
      <option value="USER">USER</option>
      <option value="ADMIN">ADMIN</option>
      <option value="PARTNER">PARTNER</option>
    </select>
    <div class="search-container">
      <input
        type="text"
        placeholder="Tìm kiếm theo tên hoặc email"
        class="search-input"
      />
      <i class="mdi mdi-magnify search-icon"></i>
      <i class="mdi mdi-reload reset-icon"></i>
    </div>
  </div>

  <!-- Employee Table -->
  <table class="employee-table">
    <thead>
      <tr>
        <th>Tên doanh nghiệp</th>
        <th>Quy mô công ty</th>
        <th>Ngành nghề</th>
        <th>Trạng thái</th>
        <th>Chủ sở hữu</th>
        <th>Số điện thoại</th>
        <th>Trạng thái</th>
        <th>Chức năng</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="!enterprises || enterprises.length === 0">
        <td colspan="10" class="no-data">Không có dữ liệu</td>
      </tr>
      <Enterprise v-else v-for="(item, index) in enterprises" :key="index" :item="item"/>
    </tbody>
  </table>

  <!-- Pagination Controls -->
  <div class="pagination-controls">
    <button
      class="pagination-btn"
      :disabled="currentPage === 1"
      @click="changePage(currentPage - 1)"
    >
      Trước
    </button>
    <span class="pagination-info"
      >Trang {{ currentPage }} / {{ totalPages }}</span
    >
    <button
      class="pagination-btn"
      :disabled="currentPage === totalPages"
      @click="changePage(currentPage + 1)"
    >
      Tiếp
    </button>
  </div>
</template>
<script setup>
import Enterprise from "@/components/Enterprise.vue";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";

const currentPage = ref(1);
const totalPages = ref(0);
const store = useStore();
onMounted(() => {
  store.dispatch("fetchEnterprises");
});
const enterprises = computed(() => store.getters.enterprises);
</script>
<style scoped>
.btn {
  margin: 10px;
  padding: 5px 10px;
  gap: 10px;
}
.update-btn {
  padding: 5px 10px;
  background-color: #2df04e;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  margin-left: 10px;
}
.block-btn {
  padding: 5px 10px;
  background-color: #f02d2d;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  margin-left: 10px;
}
/* Main layout */
.app {
  display: flex;
}

/* Sidebar */
.sidebar {
  width: 250px;
  background-color: #2c3e50;
  color: white;
  padding: 20px;
}
.sidebar-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
}
.menu {
  list-style: none;
  padding: 0;
}
.menu li {
  padding: 10px 0;
  cursor: pointer;
}
.menu .active {
  background-color: #34495e;
}

/* Main Content */
.content {
  flex: 1;
  padding: 20px;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.header h1 {
  font-size: 24px;
  margin: 0;
}

/* Filters */
.filters {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
.filter-select {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* Search Container */
.search-container {
  position: relative;
  display: inline-flex;
  align-items: center;
}
.search-input {
  padding: 8px;
  padding-left: 30px; /* Leave space for the icon */
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
}
.search-icon {
  position: absolute;
  left: 8px;
  font-size: 18px;
  color: #aaa;
  cursor: pointer;
}
.reset-icon {
  margin-left: 8px;
  font-size: 18px;
  color: #aaa;
  cursor: pointer;
}

/* Employee Table */
.employee-table {
  width: 100%;
  border-collapse: collapse;
}
.employee-table th,
.employee-table td {
  padding: 12px;
  border-bottom: 1px solid #ddd;
  text-align: left;
}
.employee-table th {
  background-color: #f3f3f3;
  font-weight: bold;
  position: relative;
}
.no-data {
  padding: 20px;
  color: #777;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.action-btn {
  padding: 5px 10px;
  background-color: #3498db;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

/* Sort Icons */
.employee-table th i {
  font-size: 16px;
  color: #666;
  cursor: pointer;
  margin-left: 5px;
}
.pagination-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.pagination-btn {
  padding: 8px 12px;
  margin: 0 10px;
  background-color: #3498db;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

.pagination-btn:disabled {
  background-color: #bdc3c7;
  cursor: not-allowed;
}

.pagination-info {
  font-size: 16px;
  color: #333;
}
</style>
