<template>
    <div v-if="showModal" class="modalOverlay">
      <div class="modal-content">
        <h3>Chọn Công ty</h3>
        <ul>
          <li v-for="enterprise in enterprises" :key="enterprise.id" @click="selectEnterprise(enterprise)">
            <b>{{ enterprise.introduction }}</b> - {{ enterprise.industry }}
          </li>
        </ul>
        <button @click="closeModal">Đóng</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed, ref, onMounted } from 'vue';
  import { useStore } from 'vuex';
  
  const showModal = ref(false);
  const store = useStore();
  const enterprises = computed(() => store.getters.enterprises);
  
  onMounted(() => {
    store.dispatch('fetchEnterprises');
  });
  
  function openModal() {
    showModal.value = true;
  }
  
  function closeModal() {
    showModal.value = false;
  }
  
  function selectEnterprise(enterprise) {
    emit('selected-enterprise', enterprise);
    closeModal();
  }
  </script>
  
  <style scoped>
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
      }
      .modalContent {
        background: white;
        padding: 20px;
        border-radius: 5px;
        max-width: 400px;
        width: 100%;
      }
  </style>
  