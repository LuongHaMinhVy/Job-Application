<template>
    <div class="container">
      <div class="header">
        <h1>Quản lý chứng chỉ</h1>
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Tìm kiếm chứng chỉ..."
          class="search-input"
        />
        <button class="btn btn-primary" @click="openModal">Thêm chứng chỉ</button>
      </div>
  
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Loại</th>
            <th>Giá trị</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="cert in paginatedCertificates"
            :key="cert.id"
          >
            <td>{{ cert.id }}</td>
            <td>{{ cert.type }}</td>
            <td>
              <span v-for="(value, idx) in cert.value" :key="idx" class="badge">
                {{ value }}
              </span>
            </td>
            <td class="btncer">
              <button class="btn btn-edit" @click="handleEdit(cert)">Sửa</button>
              <button class="btn btn-delete" @click="handleDelete(cert.id)">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <!-- Pagination -->
      <div class="pagination">
        <button
          :disabled="currentPage === 1"
          @click="changePage(currentPage - 1)"
        >
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
  
      <!-- Modal (SweetAlert2) -->
      <div v-if="isModalOpen" class="modal">
        <div class="modal-content">
          <h2>{{ modalMode === "add" ? "Thêm mới chứng chỉ" : "Chỉnh sửa chứng chỉ" }}</h2>
          <label>Loại chứng chỉ:</label>
          <input v-model="certificateType" type="text" placeholder="Nhập loại chứng chỉ" />
          <label>Giá trị:</label>
          <input v-model="certificateValue" type="text" placeholder="Nhập các giá trị cách nhau bởi dấu phẩy" />
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
  const certificateType = ref("");
  const certificateValue = ref("");
  const editingId = ref(null);
  const searchQuery = ref("");
  const currentPage = ref(1);
  const itemsPerPage = 5;
  
  onMounted(() => {
    store.dispatch("fetchCertificates");
  });
  
  const certificates = computed(() =>
    store.getters.getCertificates.filter((cert) =>
      cert.type.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  );
  
  const totalPages = computed(() =>
    Math.ceil(certificates.value.length / itemsPerPage)
  );
  
  const paginatedCertificates = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    return certificates.value.slice(start, start + itemsPerPage);
  });
  
  const changePage = (page) => {
    currentPage.value = page;
  };
  
  const handleSubmit = () => {
    if (!certificateType.value || !certificateValue.value) {
      Swal.fire("Lỗi", "Vui lòng nhập đầy đủ thông tin!", "error");
      return;
    }
  
    const values = certificateValue.value.split(",").map((v) => v.trim());
  
    if (modalMode.value === "add") {
      const newCertificate = {
        id: Date.now().toString(), 
        type: certificateType.value,
        value: values,
      };
      store.dispatch("fetchCreateCertificate", newCertificate);
      Swal.fire("Thành công", "Chứng chỉ đã được thêm!", "success");
    } else {
      const updatedCertificate = {
        id: editingId.value,
        type: certificateType.value,
        value: values,
      };
      store.dispatch("fetchUpdateCertificate", updatedCertificate);
      Swal.fire("Thành công", "Chứng chỉ đã được chỉnh sửa!", "success");
    }
  
    closeModal();
  };
  
  const handleDelete = (id) => {
    Swal.fire({
      title: "Bạn có chắc chắn?",
      text: "Hành động này sẽ xóa chứng chỉ!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Xóa",
      cancelButtonText: "Hủy",
    }).then((result) => {
      if (result.isConfirmed) {
        store.dispatch("fetchDeleteCertificate", id);
        Swal.fire("Đã xóa!", "Chứng chỉ đã được xóa.", "success");
      }
    });
  };
  
  const handleEdit = (certificate) => {
    modalMode.value = "edit";
    editingId.value = certificate.id;
    certificateType.value = certificate.type;
    certificateValue.value = certificate.value.join(", ");
    openModal();
  };
  
  const openModal = () => {
    isModalOpen.value = true;
  };
  
  const closeModal = () => {
    isModalOpen.value = false;
    modalMode.value = "add";
    editingId.value = null;
    certificateType.value = "";
    certificateValue.value = "";
  };
  </script>
  
  

<style>
.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  .search-input {
    margin-right: 10px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
.container {
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
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

.badge {
  display: inline-block;
  background-color: #e0f7fa;
  color: #00796b;
  padding: 3px 7px;
  margin-right: 5px;
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
}

.modal-content label {
  display: block;
  margin-bottom: 5px;
}

.modal-content input {
  width: 95%;
  padding: 8px;
  margin-bottom: 15px;
}

.modal-actions {
    display: flex;
  justify-content: flex-end;
  gap: 10px;
}
.btncer{
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
}
</style>
