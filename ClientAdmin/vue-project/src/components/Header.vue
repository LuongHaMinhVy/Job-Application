<template>
    <div class="header">
        <div class="header-left">
            <img src="../../public/logo.svg" alt="" class="logo">
      <h1>Rikkei Job Hệ thống quản lý</h1>
        </div>
      <div class="header-right">
        <i class="mdi mdi-bell-outline notification-icon" @click="toggleNotifications"></i>
        <div class="user-menu" @click="toggleDropdown">
          <span>Hi, Admin</span>
          <img
            src="https://i.pinimg.com/originals/c5/25/01/c525011d49ef5abd79aae6a9885f9e52.jpg"
            alt="Admin Profile"
            class="profile-pic"
          />
          <div v-if="dropdownVisible" class="dropdown-menu">
            <button @click="openSettings">Cài đặt</button>
            <button @click="logout">Đăng xuất</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // State for dropdown visibility
  const dropdownVisible = ref(false);
  const notificationsVisible = ref(false);
  
  // Toggle dropdown visibility
  const toggleDropdown = () => {
    dropdownVisible.value = !dropdownVisible.value;
    notificationsVisible.value = false; // Hide notifications when dropdown is open
  };
  
  // Toggle notifications visibility
  const toggleNotifications = () => {
    notificationsVisible.value = !notificationsVisible.value;
    dropdownVisible.value = false; // Hide dropdown when notifications are open
  };
  
  // Placeholder functions for settings and logout actions
  const openSettings = () => {
    alert("Cài đặt opened!");
  };
  
  const logout = () => {
    alert("Đăng xuất initiated!");
  };
  </script>
  
  <style scoped>
  /* Header container */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    padding: 10px 20px;
    border-bottom: 1px solid #ddd;
  }
  
  /* Header title styling */
  .header h1 {
    font-size: 40px;
    font-weight: 600;
    margin: 0;
  }
  .logo{
    width: 150px;
    height: 50px;
    object-fit: contain;
    margin-right: 20px;
    cursor: pointer;
  }
  .header-left{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
  }
  /* Right side of the header */
  .header-right {
    display: flex;
    align-items: center;
    position: relative;
  }
  
  /* Notification icon styling */
  .notification-icon {
    font-size: 24px;
    color: #333;
    cursor: pointer;
    margin-right: 20px;
  }
  
  /* User menu styling */
  .user-menu {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
  }
  .user-menu span {
    margin-right: 10px;
    font-size: 16px;
    color: #333;
  }
  .profile-pic {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  /* Dropdown menu styling */
  .dropdown-menu {
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #ffffff;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    margin-top: 10px;
  }
  .dropdown-menu button {
    display: block;
    width: 100%;
    padding: 10px 20px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 14px;
    text-align: left;
    color: #333;
  }
  .dropdown-menu button:hover {
    background-color: #f5f5f5;
  }
  </style>
  