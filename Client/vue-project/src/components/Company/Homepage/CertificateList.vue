<template>
  <div :class="$style.homepage">
    <div :class="$style.head">
      <div :class="$style.leftHead">
        <h2 class="title">Danh sách chứng chỉ</h2>
        <p class="subTitle">Hãy xem và cập nhật chứng chỉ của bạn</p>
      </div>
      <div :class="$style.rightHead">
        <button @click="showModal" :class="$style.buttonBase">
          <img
            :class="$style.addCircleIcon"
            alt=""
            src="../../../../public/images/homepage-vuesax-bold-add-circle.svg"
          />
          <b :class="$style.text">Thêm chứng chỉ</b>
        </button>
      </div>
    </div>

    <!-- Table -->
    <table :class="$style.table">
      <thead>
        <tr :class="$style.row">
          <th>STT</th>
          <th>Loại chứng chỉ/bằng cấp</th>
          <th>Xếp loại</th>
          <th>Ngày cấp/Thời hạn</th>
        </tr>
      </thead>
      <tbody v-if="paginatedCertificates">
        <tr v-if="userCertificates.length === 0" :class="$style.row1">
          <td colspan="4">Chưa có chứng chỉ nào</td>
        </tr>
        <tr
          v-for="(item, index) in paginatedCertificates"
          :key="index"
          :class="$style.row1"
        >
          <td>{{ currentPage * itemsPerPage + index + 1 }}</td>
          <td>{{ item?.type || "N/A" }}</td>
          <td>{{ item?.value || "N/A" }}</td>
          <td>{{ item?.receivedDate || "N/A" }} / {{ item?.expirationDate || "N/A" }}</td>
        </tr>
      </tbody>
    </table>

    <!-- Pagination -->
    <div :class="$style.pagination">
      <button
        :disabled="currentPage === 0"
        @click="changePage(-1)"
        :class="$style.paginationButton"
      >
        &laquo; Trước
      </button>
      <span>Trang {{ currentPage + 1 }} / {{ totalPages }}</span>
      <button
        :disabled="currentPage >= totalPages - 1"
        @click="changePage(1)"
        :class="$style.paginationButton"
      >
        Tiếp &raquo;
      </button>
    </div>

    <!-- Modal -->
    <AddCertificateForm v-if="modal" :hideModal="hideModal" />
  </div>
</template>


<script setup>
import AddCertificateForm from "@/components/Modal/AddCertificateForm.vue";
import { computed, ref, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const modal = ref(false);
const userCertificates = computed(() => store.getters.getUserCertificates);
const itemsPerPage = 5; // Number of items per page
const currentPage = ref(0);

const showModal = () => {
  modal.value = true;
};

const hideModal = () => {
  modal.value = false;
};

const paginatedCertificates = computed(() => {
  const start = currentPage.value * itemsPerPage;
  const end = start + itemsPerPage;
  return userCertificates.value.slice(start, end);
});

const totalPages = computed(() =>
  Math.ceil(userCertificates.value.length / itemsPerPage)
);

const changePage = (direction) => {
  const newPage = currentPage.value + direction;
  if (newPage >= 0 && newPage < totalPages.value) {
    currentPage.value = newPage;
  }
};

onMounted(() => {
  const authToken = localStorage.getItem("authToken");
  store.dispatch("getUserCertificateByUserId", authToken);
});
</script>


<style module>
.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.paginationButton {
  padding: 8px 16px;
  border: none;
  background-color: #f8e9ea;
  color: #ab1f24;
  border-radius: 4px;
  cursor: pointer;
}
.paginationButton:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.modalOverlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modalContent {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.closeModalButton {
  background: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 20px;
}
.homepage {
  position: relative;
  width: 100%;
  padding: 30px 40px;
  top: 80px;
}
.head {
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
.leftHead {
  display: flex;
  flex-direction: column;
  gap: 0;
}
.title {
  margin: 0;
}
.table {
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  margin-top: 20px;
  font-size: 14px;
  border-radius: 12px;
  overflow: hidden;
}
.table th,
.table td {
  padding: 12px;
  text-align: left;
  border: 1px solid #ddd;
}
.row {
  background-color: #fff6f7;
  color: #ab1f24;
}
.row1 {
  border-bottom: 1px solid #f4f4f4;
}
.buttonBase {
  border-radius: 8px;
  background-color: #f8e9ea;
  border: 1px solid #f8e9ea;
  display: flex;
  align-items: center;
  padding: 12px 20px;
  font-size: 16px;
  color: #ab1f24;
  cursor: pointer;
}
.addCircleIcon {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}
</style>
