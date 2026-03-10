<template>
  <tr>
    <td>{{ props.item.name }}</td>
    <td>{{ props.item.companySize }}</td>
    <td>{{ props.item.industry }}</td>
    <td>
      <select v-model="item.status">
        <option :value="true">Hoạt động</option>
        <option :value="false">Ngừng hoạt động</option>
      </select>
    </td>
    <td v-if="user">{{ user.username }}</td>
    <td v-if="user">{{ user.phone }}</td>
    <td v-if="user"> {{ user.email }}</td>

    <td class="btn">
      <button class="action-btn">Xem</button>
      <!-- <button @click="handleChangeStatus" class="update-btn"> Sửa trạng thái </button> -->
      <button @click="handleDelete" class="block-btn">
        {{ props.item.status ? "Khóa" : "Mở khóa" }}
      </button>
    </td>
  </tr>
</template>
<script setup>
import Swal from "sweetalert2";
import { computed, onMounted, ref, watch } from "vue";
import { useStore } from "vuex";

const props = defineProps(["item"]);
const store = useStore();
const handleChangeStatus = () => {
  Swal.fire({
    title: `Bạn có muốn ${props.item.status ? "khóa" : "mở khóa"}`,
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Có",
  }).then((result) => {
    if (result.isConfirmed) {
      store.commit("updateEnterprise", {
        ...props.item,
        status: !props.item.status,
      });
    }
  });
};
const handleDelete = () => {};
const user = ref(null);
watch(props.item.userId, () => {
  user.value = store.getters.getUserById(props.item.userId);
});
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
