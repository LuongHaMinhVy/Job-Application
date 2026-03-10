<template>
    <div :class="$style.Dashboard">
        <div :class="$style.avatar" :style="{ backgroundImage: `url(${enterprise.avatarUrl})` }">
            <div :class="$style.tickCircleWrapper">
                <img :class="$style.tickCircleIcon" alt="" src="/images/dashboard-vuesax-bold-tick-circle.svg" />
            </div>
        </div>
        <div :class="$style.frameParent">
            <div :class="$style.InfoParent">
                <div :class="$style.Info">Người sở hữu</div>
                <div :class="$style.div">{{ owner.firstName || 'N/A' }}</div>
            </div>
            <div :class="$style.infoParent">
                <div :class="$style.Info">Lĩnh vực</div>
                <div :class="$style.tag">{{ enterprise.industry }}</div>
            </div>
            <div :class="$style.InfoParent">
                <div :class="$style.Info">Giới thiệu</div>
                <div :class="$style.div">{{ enterprise.introduction }}</div>
            </div>
        </div>
        <div :class="$style.frameGroup">
            <div :class="$style.infoParent">
                <div :class="$style.Info">URL trang web</div>
                <div :class="$style.tag">{{ enterprise.websiteUrl }}</div>
            </div>  
            <div :class="$style.InfoParent">
                <div :class="$style.Info">Quy mô công ty</div>
                <div :class="$style.div">{{ enterprise.companySize }}</div>
            </div>
            <div :class="$style.infoParent">
                <div :class="$style.Info">Địa chỉ</div>
                <div :class="$style.tag">Tòa nhà sông Đà, Mỹ Đình, Nam Từ Liêm, Hà Nội</div>
            </div>
        </div>
        <div :class="$style.tagNameParent">
            <b :class="$style.tagName">{{ enterprise.enterprizeName }}</b>
            <div :class="$style.button" @click="showEditModal = true">
                <div :class="$style.buttonBase">
                    <img :class="$style.edit2Icon" alt="" src="/images/dashboard-vuesax-linear-edit-2.svg" />
                    <div :class="$style.text">Chỉnh sửa</div>
                </div>
            </div>
        </div>
        <EditModal v-if="showEditModal" :enterpriseData="enterprise" @close="showEditModal = false" />
    </div>
</template>

<script setup>

import { onMounted, ref, computed } from 'vue';
import { useStore } from 'vuex';
import EditModal from './InforInput.vue';

const store = useStore();
const enterprise = computed(() => store.getters['enterprise/enterpriseData']);
const owner = computed(() => store.getters['enterprise/ownerData']);
const showEditModal = ref(false);

onMounted(() => {
    store.dispatch('enterprise/fetchEnterprise');
});
</script>


<style module>
            .tickCircleIcon {
                width: 24px;
                position: relative;
                border-radius: 24px;
                height: 24px;
            }
          .tickCircleWrapper {
                position: absolute;
                top: 160px;
                left: 136px;
                border-radius: 30px;
                background-color: #fff;
                width: 40px;
                height: 40px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                padding: 10px;
                box-sizing: border-box;
          }
          .avatar {
                position: absolute;
                top: 112px;
                left: 426px;
                border-radius: 216px;
                width: 200px;
                height: 200px;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: top;
          }
          .Info {
                position: relative;
                line-height: 24px;
                font-weight: 600;
          }
          .div {
                position: relative;
                line-height: 24px;
                color: #2d2c2c;
          }
          .InfoParent {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                gap: 8px;
          }
          .tag {
                align-self: stretch;
                position: relative;
                line-height: 24px;
                color: #2d2c2c;
          }
          .infoParent {
                align-self: stretch;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                gap: 8px;
          }
          .frameParent {
                position: absolute;
                top: 172px;
                left: 732px;
                width: 282px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                gap: 16px;
          }
          .frameGroup {
                position: absolute;
                top: 172px;
                left: 1038px;
                width: 282px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                gap: 16px;
          }
          .tagName {
                position: relative;
                line-height: 30px;
          }
          .edit2Icon {
                width: 20px;
                position: relative;
                height: 20px;
          }
          .text {
                position: relative;
                line-height: 20px;
                font-weight: 600;
          }
          .buttonBase {
                flex: 1;
                border-radius: 8px;
                background-color: #f8e9ea;
                border: 1px solid #f8e9ea;
                overflow: hidden;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                padding: 8px 14px;
                gap: 8px;
          }
          .button {
                width: 127px;
                border-radius: 8px;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                font-size: 14px;
                color: #ab1f24;
          }
          .tagNameParent {
                position: absolute;
                top: 112px;
                left: 732px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                gap: 12px;
                font-size: 20px;
                color: #2d2c2c;
          }
          .favicon {
                width: 36px;
                position: relative;
                border-radius: 6.5px;
                height: 36px;
                overflow: hidden;
                flex-shrink: 0;
          }
          .avatar1 {
                align-self: stretch;
                flex: 1;
                border-radius: 200px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
          }
          .dropdown {
                width: 48px;
                border-radius: 52px;
                background-color: #f4f4f4;
                height: 48px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
          }
          .tagName1 {
                position: relative;
                line-height: 28px;
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
          .text1 {
                flex: 1;
                position: relative;
                line-height: 24px;
                font-weight: 600;
          }
          .buttonSidedashboard {
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
                gap: 12px;
                color: #ab1f24;
          }
          .buttonSidedashboard1 {
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
          .button1 {
                position: absolute;
                top: 24px;
                left: 32px;
                width: 338px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                gap: 24px;
          }
          .sidebar {
                position: absolute;
                top: 80px;
                left: 0px;
                background-color: #fff;
                border-right: 1px solid #f4f4f4;
                box-sizing: border-box;
                width: 402px;
                height: 720px;
                overflow: hidden;
                font-size: 18px;
                color: #000;
          }
          .Dashboard {
                width: 100%;
                position: relative;
                background-color: #fafafa;
                height: 1473px;
                overflow: hidden;
                text-align: left;
                font-size: 16px;
                color: #3d3d3d;
                font-family: 'SF Pro Display';
          }
    
    </style>