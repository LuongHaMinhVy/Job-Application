<template>
  <div>
    <Header></Header>
    <div :class="$style.main">
      <ProfileSideBar />
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import ProfileSideBar from "@/components/Company/Homepage/ProfileSideBar.vue";
import Header from "@/components/user/Header.vue";
import Footer from "@/components/user/Footer.vue";
</script>

<style module scoped>
.main {
  width: 100%;
  /* position: relative; */
  display: flex;
  flex-direction: row;
}
</style>
