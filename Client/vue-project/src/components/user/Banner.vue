<template>
    <div :class="$style.banner">
    
        <img :class="$style.bannerImgIcon" alt="" src="../../../public/images/banner-img.png" />

        <img :class="$style.coverIcon" src="../../../public/images/cover.jpg" alt="">

        <img :class="$style.decorIcon" alt="" src="../../../public/images/decor1.svg" />
    
        <img :class="$style.decorIcon1" alt="" src="../../../public/images/decor2.svg" />
    
        <img :class="$style.decorIcon2" alt="" src="../../../public/images/decor3.svg" />
    
        <div :class="$style.searchBox">
    
            <b :class="$style.heading">Tìm kiếm việc làm cùng Rikkei Jobs!</b>
    
            <div :class="$style.search">
    
                <div :class="$style.searchadd">
    
                    <div :class="$style.inputField">
    
                        <div :class="$style.inputFieldBase">
    
                            <div :class="$style.inputFieldBase">
    
                                <div :class="$style.input">
    
                                    <div :class="$style.content">
    
                                        <img :class="$style.searchNormalIcon" alt="" src="../../../public/images/searchNormal.svg" />
    
                                        <div :class="$style.text">Vị trí ứng tuyển</div>
    
                                    </div>
    
                                </div>
    
                            </div>
    
                        </div>
    
                    </div>
    
                    <div :class="$style.inputField1">
    
                        <div :class="$style.inputField1">
    
                            <div :class="$style.inputFieldBase">
    
                                <div :class="$style.input1">
    
                                    <div :class="$style.content1">
    
                                        <img :class="$style.searchNormalIcon" alt="" src="../../../public/images/location.svg" />
    
                                        <div :class="$style.text1">Tất cả địa điểm</div>
    
                                    </div>
    
                                    <img :class="$style.arrowDownIcon" alt="" src="../../../public/images/arrow-down.png" />
    
                                </div>
    
                            </div>
    
                        </div>
    
                    </div>
    
                </div>
    
                <div :class="$style.button">
    
                    <div :class="$style.buttonBase">
    
                        <b :class="$style.text2">Tìm kiếm</b>
    
                    </div>
    
                </div>
    
            </div>
    
        </div>
    
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
    name: "Banner"
})
</script>
<style module>
.bannerImgIcon {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 500px;
    object-fit: cover;
}

.coverIcon {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 500px;
    opacity: 0.2;
}

.decorIcon {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 533.4px;
    height: 351.5px;
    opacity: 0.4;
}

.decorIcon1 {
    position: absolute;
    top: -0px;
    left: 50%;
    width: 397.2px;
    height: 345.5px;
    opacity: 0.4;
}

.decorIcon2 {
    position: absolute;
    top: 0px;
    right: 0;
    width: 316.9px;
    height: 236px;
    opacity: 0.4;
}

.heading {
    align-self: stretch;
    position: relative;
    letter-spacing: -0.02em;
    line-height: 60px;
}

.searchNormalIcon {
    width: 20px;
    position: relative;
    height: 20px;
}

.text {
    flex: 1;
    position: relative;
    line-height: 24px;
    font-weight: 500;
}

.content {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
}

.input {
    align-self: stretch;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    background-color: #fff;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 12px 16px;
}

.inputFieldBase {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
}

.inputField {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
}

.text1 {
    position: relative;
    line-height: 24px;
    font-weight: 500;
}

.content1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
}

.arrowDownIcon {
    width: 16px;
    position: relative;
    height: 16px;
}

.input1 {
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    background-color: #fff;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 12px 16px;
    gap: 24px;
}

.inputField1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
}

.searchadd {
    width: 634px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
}

.text2 {
    position: relative;
    line-height: 24px;
}

.buttonBase {
    flex: 1;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    background-color: #ab1f24;
    border: 1px solid #ab1f24;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 12px 20px;
}

.button {
    width: 140px;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    color: #fff;
}

.search {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 24px;
    text-align: left;
    font-size: 16px;
    color: #676767;
}

.searchBox {
    position: absolute;
    top: 151px;
    left: calc(50% - 399px);
    width: 798px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 24px;
}

.banner {
    width: 100%;
    position: relative;
    background: linear-gradient(-80.02deg, #150d35, #1d1149 32.5%, #170e38 60%, #11092c);
    height: 500px;
    overflow: hidden;
    text-align: center;
    font-size: 48px;
    color: #fff;
    font-family: 'SF Pro Display';
}
</style>