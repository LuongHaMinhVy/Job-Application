<template>
  <div class="app">
    <Sidebar />
    <main class="content">
      <Header />

      <router-view></router-view>
    </main>
  </div>
</template>
<script setup>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
</script>
<style scoped>
.app {
  display: flex;
}
.content {
  flex: 1;
  padding: 20px;
}
</style>
