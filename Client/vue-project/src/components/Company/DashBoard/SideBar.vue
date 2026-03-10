<template>
    <div :class="$style.sidebar">
        <div :class="$style.button">
            <div :class="$style.infor">
                <div :class="$style.avt">
                    <div :class="$style.dropdown">
                        <div :class="$style.avatar">
                            <img :class="$style.favicon" alt="" src="../../../../public/images/dashboard-favicon.png" />
                        </div>
                    </div>
                    <div :class="$style.name">
                        <b :class="$style.cngTyTnhh">Công ty TNHH Rikkei Education</b>
                        <div :class="$style.rikkeiedu123gmailcom">rikkeiedu123@gmail.com</div>
                    </div>
                </div>
            </div>
            <div :class="$style.sidebar1">
                <div 
                    :class="[isActive('info') ? $style.buttonSidedashboard : $style.buttonSidedashboard1]" 
                    @click="setActive('info')"
                >
                    <img :class="$style.personalcardIcon" alt="" src="../../../../public/images/dashboard-button-side-vuesax-outline-personalcard.svg" />
                    <div :class="$style.text">Thông tin doanh nghiệp</div>
                </div>
                <div 
                    :class="[isActive('recruitment') ? $style.buttonSidedashboard : $style.buttonSidedashboard1]" 
                    @click="setActive('recruitment')"
                >
                    <img :class="$style.personalcardIcon" alt="" src="../../../../public/images/dashboard-button-side-vuesax-outline-note-2.svg" />
                    <div :class="$style.text">Tin tuyển dụng</div>
                </div>
                <div 
                    :class="[isActive('schedule') ? $style.buttonSidedashboard : $style.buttonSidedashboard1]" 
                    @click="setActive('schedule')"
                >
                    <img :class="$style.personalcardIcon" alt="" src="../../../../public/images/dashboard-button-side-vuesax-outline-calendar-2.svg" />
                    <div :class="$style.text">Lịch phỏng vấn</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: "Sidebar",
    setup() {
        const activeButton = ref<string | null>(null);

        function setActive(buttonName: string) {
            activeButton.value = buttonName;
        }

        function isActive(buttonName: string): boolean {
            return activeButton.value === buttonName;
        }

        return {
            activeButton,
            setActive,
            isActive,
        };
    }
});
</script>

<style module>.favicon {
          width: 36px;
          position: relative;
          border-radius: 6.5px;
          height: 36px;
          overflow: hidden;
          flex-shrink: 0;
    }
          .avatar {
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
          .cngTyTnhh {
                position: relative;
                line-height: 28px;
          }
          .rikkeiedu123gmailcom {
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
                transition: background-color 0.3s, color 0.3s;
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
                transition: background-color 0.3s, color 0.3s;
          }
          .buttonSidedashboard1:hover {
            background-color: #ffecec;
            color: #ab1f24;
        }

        .buttonSidedashboard:hover {
            background-color: #ffe0e1;
            color: #ab1f24;
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
                width: 338px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                gap: 24px;
          }
          .sidebar {
                width: 100%;
                position: relative;
                background-color: #fff;
                border-right: 1px solid #f4f4f4;
                box-sizing: border-box;
                height: 720px;
                overflow: hidden;
                text-align: left;
                font-size: 18px;
                color: #000;
                font-family: 'SF Pro Display';
          }
    
</style>