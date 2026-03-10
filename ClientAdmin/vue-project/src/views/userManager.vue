<template>
  <!-- <div class="app"> -->
  <!-- Sidebar Navigation -->
  <!-- <Sidebar /> -->
  <!-- <div class="app"> -->
  <!-- Sidebar Navigation -->
  <!-- <Sidebar /> -->

  <!-- Main Content -->
  <!-- <main class="content"> -->
  <!-- Top Toolbar -->
  <!-- <Header /> -->
  <h1>Quản lý Nhân viên</h1>
  <!-- Main Content -->
  <!-- <main class="content"> -->
  <!-- Top Toolbar -->
  <!-- <Header /> -->
  <h1>Quản lý Nhân viên</h1>

  <!-- Filters and Table -->
  <div class="filters">
    <select v-model="selectedRole" class="filter-select">
      <option value="All">Lọc theo vai trò</option>
      <option value="USER">USER</option>
      <option value="ADMIN">ADMIN</option>
      <option value="PARTNER">PARTNER</option>
    </select>
    <div class="search-container">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Tìm kiếm theo tên hoặc email"
        class="search-input"
      />
      <i class="mdi mdi-magnify search-icon"></i>
      <i class="mdi mdi-reload reset-icon" @click="resetSearch"></i>
    </div>
  </div>
  <!-- Filters and Table -->
  <div class="filters">
    <select v-model="selectedRole" class="filter-select">
      <option value="All">Lọc theo vai trò</option>
      <option value="USER">USER</option>
      <option value="ADMIN">ADMIN</option>
      <option value="PARTNER">PARTNER</option>
    </select>
    <div class="search-container">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Tìm kiếm theo tên hoặc email"
        class="search-input"
      />
      <i class="mdi mdi-magnify search-icon"></i>
      <i class="mdi mdi-reload reset-icon" @click="resetSearch"></i>
    </div>
  </div>

  <!-- Employee Table -->
  <table class="employee-table">
    <thead>
      <tr>
        <th>Hình ảnh</th>
        <th>
          Tên
          <i class="mdi mdi-arrow-up" @click="sortByNameAsc"></i>
          <i class="mdi mdi-arrow-down" @click="sortByNameDesc"></i>
        </th>
        <th>Giới tính</th>
        <th>Ngày sinh</th>
        <th>Email</th>
        <th>Xác thực Email</th>
        <th>Số điện thoại</th>
        <th>Trạng thái</th>
        <th>Vai trò</th>
        <th>Chức năng</th>
      </tr>
    </thead>
    <tbody v-if="users">
      <tr v-if="paginatedUsers.length === 0">
        <td colspan="10" class="no-data">Không có dữ liệu</td>
      </tr>
      <tr v-for="(user, index) in paginatedUsers" :key="index">
        <td><img :src="user.avatar" alt="Avatar" class="avatar" /></td>
        <td>{{ user.firstName }} {{ user.lastName || "Chưa có!" }}</td>
        <td>{{ user.gender || "Chưa có!" }}</td>
        <td>{{ user.dateOfBirth || "Chưa có!" }}</td>
        <td>{{ user.email || "Chưa có!" }}</td>
        <td>{{ user.isEmailVerified ? "Đã xác minh" : "Chưa xác minh" }}</td>
        <td>{{ user.phone || "Chưa có!" }}</td>
        <td>{{ user.status }}</td>
        <td>{{ user.role }}</td>
        <td class="btn">
          <button class="action-btn">Xem chi tiết</button>
          <button class="update-btn" @click="openRoleChangeDialog(user)">
            Sửa
          </button>
          <button class="block-btn" @click="blockUser(user)"> Chặn </button>
        </td>
      </tr>
    </tbody>
  </table>
  <!-- Employee Table -->
  <table class="employee-table">
    <thead>
      <tr>
        <th>Hình ảnh</th>
        <th>
          Tên
          <i class="mdi mdi-arrow-up" @click="sortByNameAsc"></i>
          <i class="mdi mdi-arrow-down" @click="sortByNameDesc"></i>
        </th>
        <th>Giới tính</th>
        <th>Ngày sinh</th>
        <th>Email</th>
        <th>Xác thực Email</th>
        <th>Số điện thoại</th>
        <th>Trạng thái</th>
        <th>Vai trò</th>
        <th>Chức năng</th>
      </tr>
    </thead>
    <tbody v-if="users">
      <tr v-if="paginatedUsers.length === 0">
        <td colspan="10" class="no-data">Không có dữ liệu</td>
      </tr>
      <tr v-for="(user, index) in paginatedUsers" :key="index">
        <td><img :src="user.avatar" alt="Avatar" class="avatar" /></td>
        <td>{{ user.firstName }} {{ user.lastName || "Chưa có!" }}</td>
        <td>{{ user.gender || "Chưa có!" }}</td>
        <td>{{ user.dateOfBirth || "Chưa có!" }}</td>
        <td>{{ user.email || "Chưa có!" }}</td>
        <td>{{ user.isEmailVerified ? "Đã xác minh" : "Chưa xác minh" }}</td>
        <td>{{ user.phone || "Chưa có!" }}</td>
        <td>{{ user.status }}</td>
        <td>{{ user.role }}</td>
        <td class="btn">
          <button class="action-btn">Xem chi tiết</button>
          <button class="update-btn" @click="openRoleChangeDialog(user)">
            Sửa
          </button>
          <button class="block-btn" @click="blockUser(user)"> Chặn </button>
        </td>
      </tr>
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
    <!-- </main> -->
  </div>
</template>

<script setup>
import Swal from "sweetalert2";
import Sidebar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

// States
const searchQuery = ref("");
const selectedRole = ref("All");
const currentPage = ref(1);
const itemsPerPage = ref(5);

onMounted(() => {
  store.dispatch("fetchUsers");
});

const users = computed(() => store.getters.getUsers);

const filteredUsers = computed(() => {
  return users.value.filter((user) => {
    const name = user.firstName?.toLowerCase() || "";
    const email = user.email?.toLowerCase() || "";
    const matchesRole =
      selectedRole.value === "All" || user.role === selectedRole.value;
    const matchesSearch =
      name.includes(searchQuery.value.toLowerCase()) ||
      email.includes(searchQuery.value.toLowerCase());
    return matchesRole && matchesSearch;
  });
});

const totalPages = computed(() => {
  return Math.ceil(filteredUsers.value.length / itemsPerPage.value);
});

const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return filteredUsers.value.slice(start, end);
});

const sortByNameAsc = () => {
  users.value.sort((a, b) => a.firstName.localeCompare(b.firstName));
};

const sortByNameDesc = () => {
  users.value.sort((a, b) => b.firstName.localeCompare(a.firstName));
};

const resetSearch = () => {
  searchQuery.value = "";
  selectedRole.value = "All";
  currentPage.value = 1;
};

const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

const openRoleChangeDialog = (user) => {
  Swal.fire({
    title: "Chỉnh sửa vai trò",
    input: "select",
    inputOptions: {
      USER: "USER",
      ADMIN: "ADMIN",
      PARTNER: "PARTNER",
    },
    inputPlaceholder: "Chọn vai trò mới",
    inputValue: user.role,
    showCancelButton: true,
    confirmButtonText: "Xác nhận",
    cancelButtonText: "Hủy",
  }).then((result) => {
    if (result.isConfirmed) {
      const newRole = result.value;

      const updatedUser = { ...user, role: newRole };

      store.dispatch("fetchEditUser", updatedUser).then(() => {
        Swal.fire(
          "Thành công!",
          `Vai trò của ${user.firstName} đã được đổi thành ${newRole}.`,
          "success"
        );
      });
    }
  });
};

const blockUser = (user) => {
  Swal.fire({
    title: `Bạn có chắc muốn chặn người dùng ${user.firstName}?`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Chặn",
    cancelButtonText: "Hủy",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Thành công!", `${user.firstName} đã bị chặn.`, "success");
      Swal.fire("Thành công!", `${user.firstName} đã bị chặn.`, "success");
      // Handle blocking logic here
    }
  });
};
</script>

<style scoped>
.btn {
  margin: 10px;
  padding: 5px 10px;
  gap: 10px;
}

.update-btn {
  padding: 5px 10px;
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
