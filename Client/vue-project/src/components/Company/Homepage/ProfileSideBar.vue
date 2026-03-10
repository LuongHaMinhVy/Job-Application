<template>
  <div :class="$style.sidebar">
    <div :class="$style.button">
      <div :class="$style.infor">
        <div :class="$style.avt">
          <div :class="$style.dropdown">
            <img
              :class="$style.avatarIcon"
              alt=""
              src="../../../../public/images/Avatar.png"
            />
          </div>

          <div :class="$style.name">
            <b :class="$style.phQu">Phú Quý</b>
            <div :class="$style.phuquy1232gmailcom">phuquy1232@gmail.com</div>
          </div>
        </div>
      </div>
      <div :class="$style.sidebar1">
        <div
          v-for="(item, index) in navList"
          :key="index"
          @click="setActive(item.link, item.action)"
          :class="[
            isActive(item.link)
              ? $style.buttonSidedashboard1
              : $style.buttonSidedashboard,
          ]"
        >
          <img :class="$style.personalcardIcon" alt="" :src="item.icon" />
          <div :class="$style.text">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const activeButton = ref(null);
const router = useRouter();
const toUserProfile = () => {
  router.push("/profile/user-profile");
}
const toCv = () => {
  router.push("/profile/cv-manager");
}
const toCertificateList = () => {
  router.push("/profile/certificate-list");
}

const toInterview = () => {
  router.push("/profile/interview");
}
const navList = ref([
  {
    title: "Thông tin cá nhân",
    icon: "../../../../public/images/dashboard-personalcard.svg",
    link: "infor",
    action: toUserProfile
  },
  {
    title: "Quản lý CV",
    icon: "../../../../public/images/homepage-button-side-vuesax-outline-document-text.png",
    link: "cv-manager",
    action: toCv
  },
  {
    title: "Quản lý chứng chỉ",
    icon: "../../../../public/images/homepage-button-side-vuesax-outline-award.svg",
    link: "certificate-manager",
    action: toCertificateList
  },
  {
    title: "Lịch phỏng vấn",
    icon: "../../../../public/images/homepage-button-side-vuesax-outline-calendar-2.png",
    link: "interview-schedule",
    action: toInterview
  },
]);
const setActive = (buttonName, action) => {
  activeButton.value = buttonName;
  action();
};
const isActive = (buttonName) => {
  return activeButton.value === buttonName;
};
</script>
<style module scoped>
.avatarIcon {
  align-self: stretch;
  flex: 1;
  border-radius: 200px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
}
.dropdown {
  width: 48px;
  height: 48px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.phQu {
  position: relative;
  line-height: 28px;
}
.phuquy1232gmailcom {
  position: relative;
  font-size: 14px;
  line-height: 20px;
  color: #676767;
}
.name {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.avt {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
}
.infor {
  align-self: stretch;
  border-bottom: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 24px;
}
.personalcardIcon {
  width: 20px;
  position: relative;
  height: 20px;
}
.text {
  flex: 1;
  position: relative;
  line-height: 24px;
  font-weight: 600;
}
.buttonSidedashboard {
  align-self: stretch;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 16px 24px;
  gap: 12px;
  color: #2d2c2c;
}
.buttonSidedashboard:hover {
  cursor: pointer;
  background-color: #fff6f7;

  color: #ab1f24;
}
.buttonSidedashboard1:hover {
  cursor: pointer;
  background-color: #fff6f7;

  color: #ab1f24;
}
.buttonSidedashboard1 {
  align-self: stretch;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  background-color: #fff6f7;
  border: 1px solid #fff6f7;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 16px 24px;
  color: #ab1f24;
  gap: 12px;
}
.buttonSidedashboard2 {
  align-self: stretch;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 16px 24px;
  gap: 12px;
}
.sidebar1 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4px;
  font-size: 16px;
  color: #3d3d3d;
}
.button {
  position: absolute;
  top: 24px;
  left: 32px;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;
}
.sidebar {
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  width: 30%;
  position: relative;
  background-color: #fff;
  border-right: 1px solid #f4f4f4;
  box-sizing: border-box;
  height: 720px;
  overflow: hidden;
  text-align: left;
  font-size: 18px;
  color: #000;
  font-family: "SF Pro Display";
}
</style>
