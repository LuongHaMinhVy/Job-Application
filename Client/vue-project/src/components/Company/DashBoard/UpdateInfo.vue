<template>
    <div v-if="showModal" class="modal-overlay">
      <div class="modal-content">
        <h2>Edit Enterprise</h2>
        <form @submit.prevent="updateEnterprise">
          <label for="name">Name</label>
          <input v-model="enterprise.enterprizeName" type="text" id="name" />
  
          <label for="industry">Industry</label>
          <input v-model="enterprise.industry" type="text" id="industry" />
  
          <label for="introduction">Introduction</label>
          <textarea v-model="enterprise.introduction" id="introduction"></textarea>
  
          <label for="websiteUrl">Website URL</label>
          <input v-model="enterprise.websiteUrl" type="url" id="websiteUrl" />
  
          <label for="facebookUrl">Facebook URL</label>
          <input v-model="enterprise.facebookUrl" type="url" id="facebookUrl" />
  
          <label for="zaloUrl">Zalo URL</label>
          <input v-model="enterprise.zaloUrl" type="url" id="zaloUrl" />
  
          <label for="twitterUrl">Twitter URL</label>
          <input v-model="enterprise.twitterUrl" type="url" id="twitterUrl" />
  
          <label for="linkedUrl">LinkedIn URL</label>
          <input v-model="enterprise.linkedUrl" type="url" id="linkedUrl" />
  
          <label for="status">Status</label>
          <select v-model="enterprise.status" id="status">
            <option value="active">ACTIVE</option>
            <option value="pending">PENDING</option>
            <option value="inactive">INACTIVE</option>
          </select>
  
          <button type="submit">Save</button>
          <button type="button" @click="closeModal">Cancel</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed, ref } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  const showModal = ref(true);

  const enterprise = computed(() => store.state.enterprise);

  const updateEnterprise = () => {
    store.commit('UPDATE_ENTERPRISE', enterprise.value);
    closeModal();
  };

  const closeModal = () => {
    showModal.value = false;
  };
  </script>
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  
  .modal-content {
    background: #fff;
    padding: 20px;
    width: 500px;
    max-width: 90%;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    position: relative;
  }
  
  .modal-content h2 {
    margin-top: 0;
    color: #333;
  }
  
  form label {
    display: block;
    margin-top: 15px;
    font-weight: bold;
    color: #555;
  }
  
  form input[type="text"],
  form input[type="url"],
  form textarea {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
    color: #333;
  }
  
  form textarea {
    resize: vertical;
  }
  
  form button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  form button:hover {
    background-color: #0056b3;
  }
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    font-size: 18px;
    cursor: pointer;
    color: #888;
  }
  
  .close-button:hover {
    color: #555;
  }
  </style>
  