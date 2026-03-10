<template>
  <aside :class="['sidebar', { collapsed }]">
    <div class="sidebar-header">
      <span class="sidebar-title" v-if="!collapsed">RIKKEI JOB</span>
      <button class="toggle-btn" @click="toggleSidebar">
        <i :class="collapsed ? 'mdi mdi-menu' : 'mdi mdi-menu-open'"></i>
      </button>
    </div>
    <ul class="menu">
      <li
        v-for="item in menuItems"
        :key="item.text"
        :class="{ active: item.active }"
        @click="activateItem(item)"
      >
        <i :class="['mdi', item.icon, 'menu-icon']"></i>
        <span v-if="!collapsed" class="menu-text">{{ item.text }}</span>
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const menuItems = ref([
  { text: 'THỐNG KÊ', icon: 'mdi-chart-line', active: false, path: ""},
  { text: 'NGƯỜI DÙNG', icon: 'mdi-account', active: true , path :"/admin/user-manager"},
  { text: 'CV', icon: 'mdi-file-document', active: false },
  { text: 'NGÔN NGỮ CV', icon: 'mdi-translate', active: false ,path :"/admin/cv-languages" },
  { text: 'DOANH NGHIỆP', icon: 'mdi-domain', active: false },
  { text: 'CHỨNG CHỈ', icon: 'mdi-certificate', active: false , path :"/admin/certificate-manager"},
  { text: 'MESSENGER', icon: 'mdi-message', active: false }
]);

const collapsed = ref(false);

const toggleSidebar = () => {
  collapsed.value = !collapsed.value;
};

const activateItem = (item) => {
  menuItems.value.forEach((menuItem) => {
    menuItem.active = menuItem === item;
  });
  router.push(item.path);
};
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #2c3e50;
  color: white;
  height: 100vh;
  transition: width 0.3s;
  overflow: hidden;
}
.sidebar.collapsed {
  width: 80px;
}

.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  font-size: 18px;
  font-weight: bold;
}

.toggle-btn {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 24px;
}

.menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu li {
  display: flex;
  align-items: center;
  padding: 15px 20px;
  cursor: pointer;
  transition: background 0.3s;
  border-radius: 10px;
}
.menu li:hover {
  background-color: #34495e;
  border-radius: 10px;
}

.menu li.active {
  background-color: #1abc9c;
}

.menu-icon {
  font-size: 24px;
  margin-right: 10px;
}

.menu-text {
  white-space: nowrap;
}
</style>
