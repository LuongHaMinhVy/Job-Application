<template>
    <div class="container">
      <div class="header">
        <h1>Quản lý ngôn ngữ CV</h1>
        <div class="search-container">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Tìm kiếm ngôn ngữ..."
            class="search-input"
          />
          <button class="btn btn-primary" @click="openModal">Thêm ngôn ngữ</button>
        </div>
      </div>
  
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Tên</th>
            <th>Code</th>
            <th>Trạng Thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="language in paginatedLanguages" :key="language.id">
            <td>{{ language.id }}</td>
            <td>{{ language.name }}</td>
            <td>{{ language.code }}</td>
            <td>{{ language.status === false ? "Chưa kích hoạt" : "Kích hoạt" }}</td>
            <td class="btn-lang">
              <button class="btn btn-edit" @click="handleEdit(language)">Sửa</button>
              <button class="btn btn-delete" @click="handleDelete(language.id)">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <!-- Pagination -->
      <div class="pagination">
        <button :disabled="currentPage === 1" @click="changePage(currentPage - 1)">
          Trước
        </button>
        <span>Trang {{ currentPage }} / {{ totalPages }}</span>
        <button
          :disabled="currentPage === totalPages"
          @click="changePage(currentPage + 1)"
        >
          Tiếp
        </button>
      </div>
  
      <!-- Modal -->
      <div v-if="isModalOpen" class="modal">
        <div class="modal-content">
          <h2>{{ modalMode === "add" ? "Thêm ngôn ngữ" : "Chỉnh sửa ngôn ngữ" }}</h2>
          <label>Tên ngôn ngữ:</label>
          <input v-model="languageName" type="text" placeholder="Nhập tên ngôn ngữ" />
          <label>Code:</label>
          <input v-model="languageCode" type="text" placeholder="Nhập code" />
          <label>Trạng thái:</label>
          <select v-model="languageStatus">
              <option value="true">Kích hoạt</option>
            <option value="false">Chưa kích hoạt</option>
          </select>
          <div class="modal-actions">
            <button class="btn btn-secondary" @click="closeModal">Hủy</button>
            <button class="btn btn-primary" @click="handleSubmit">
              {{ modalMode === "add" ? "Thêm mới" : "Lưu thay đổi" }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from "vue";
  import { useStore } from "vuex";
  import Swal from "sweetalert2";
  
  const store = useStore();
  
  // State for modal and form
  const isModalOpen = ref(false);
  const modalMode = ref("add");
  const languageName = ref("");
  const languageCode = ref("");
  const languageStatus = ref(1);
  const editingId = ref(null);
  const searchQuery = ref("");
  const currentPage = ref(1);
  const itemsPerPage = 5;
  
  onMounted(() => {
    store.dispatch("fetchLanguages");
  });
  
  const languages = computed(() =>
    store.getters.getLanguages.filter((lang) =>
      lang.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  );
  
  const totalPages = computed(() =>
    Math.ceil(languages.value.length / itemsPerPage)
  );
  
  const paginatedLanguages = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    return languages.value.slice(start, start + itemsPerPage);
  });
  
  const changePage = (page) => {
    currentPage.value = page;
  };
  
  const handleSubmit = () => {
    if (!languageName.value || !languageCode.value || !languageStatus.value) {
      Swal.fire("Lỗi", "Vui lòng nhập đầy đủ thông tin!", "error");
      return;
    }
  
    if (modalMode.value === "add") {
      const newLanguage = {
        name: languageName.value,
        code: languageCode.value,
        status: languageStatus.value === 1,
      };
      store.dispatch("createLanguage", newLanguage);
      Swal.fire("Thành công", "Ngôn ngữ đã được thêm!", "success");
    } else {
      const updatedLanguage = {
        id: editingId.value,
        name: languageName.value,
        code: languageCode.value,
        status: languageStatus.value,
      };
      store.dispatch("updateLanguage", updatedLanguage);
      Swal.fire("Thành công", "Ngôn ngữ đã được chỉnh sửa!", "success");
    }
  
    closeModal();
  };
  
  const handleDelete = (id) => {
    Swal.fire({
      title: "Bạn có chắc chắn?",
      text: "Hành động này sẽ xóa ngôn ngữ!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Xóa",
      cancelButtonText: "Hủy",
    }).then((result) => {
      if (result.isConfirmed) {
        store.dispatch("deleteLanguage", id);
        Swal.fire("Đã xóa!", "Ngôn ngữ đã được xóa.", "success");
      }
    });
  };
  
  const handleEdit = (language) => {
    modalMode.value = "edit";
    editingId.value = language.id;
    languageName.value = language.name;
    languageCode.value = language.code;
    languageStatus.value = language.status;
    openModal();
  };
  
  const openModal = () => {
    isModalOpen.value = true;
  };
  
  const closeModal = () => {
    isModalOpen.value = false;
    modalMode.value = "add";
    editingId.value = null;
    languageName.value = "";
    languageCode.value = "";
  
  };
  </script>
  
  <style>
  .container {
    padding: 20px;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .search-container {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .search-input {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  
  .btn {
    padding: 5px 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  
  .btn-primary {
    background-color: #007bff;
    color: #fff;
  }
  
  .table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
  
  .table th,
  .table td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  
  .table th {
    background-color: #f4f4f4;
    text-align: left;
  }
  
  .btn-lang button {
    margin: 0 5px;
  }
  
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  
  .pagination button:disabled {
    background-color: #e0e0e0;
    cursor: not-allowed;
  }
  
  .pagination button {
    padding: 5px 10px;
    margin: 0 5px;
    background-color: #007bff;
    color: white;
    border-radius: 3px;
    cursor: pointer;
  }
  
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
  
  .modal-content {
    background: #fff;
    padding: 20px;
    border-radius: 5px;
    width: 500px;
    max-width: 100%;
  }
  
  .modal-content label {
    display: block;
    margin-bottom: 5px;
  }
  
  .modal-content input,
  .modal-content select {
    width: 100%;
    padding: 8px;
    margin-bottom: 15px;
  }
  
  .modal-actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
  
  .modal-actions button {
    padding: 5px 10px;
  }
  
  .btn-secondary {
    background-color: #6c757d;
    color: #fff;
  }
  
  .btn-edit {
    background-color: #28a745;
    color: #fff;
  }
  
  .btn-delete {
    background-color: #dc3545;
    color: #fff;
  }
  </style>
  