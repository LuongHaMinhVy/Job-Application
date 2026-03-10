<template>
    <div :class="$style.iTc">
      <b :class="$style.iTcTuyn">Đối tác tuyển dụng</b>
      <div :class="$style.iTc1">
        <div :class="$style.background">
          <img :class="$style.usmh2pngIcon" alt="" src="../../../../public/images/usmh-2-png.png" />
        </div>
        <div :class="$style.background1">
          <img :class="$style.usmh2pngIcon" alt="" src="../../../../public/images/studione63-png.png" />
        </div>
        <div :class="$style.background">
          <img :class="$style.usmh2pngIcon" alt="" src="../../../../public/images/sunloft-png.png" />
        </div>
        <div :class="$style.background">
          <img :class="$style.usmh2pngIcon" alt="" src="../../../../public/images/systena-png.png" />
        </div>
        <div :class="$style.background1">
          <img :class="$style.usmh2pngIcon" alt="" src="../../../../public/images/fujikin-1-png.png" />
        </div>
        <div :class="$style.background">
          <img :class="$style.usmh2pngIcon" alt="" src="../../../../public/images/cloud-s-png.png" />
        </div>
      </div>
    </div>
  </template>
  <script setup></script>
  <style module scoped>
  .usmh2pngIcon {
    width: 147.3px;
    position: relative;
    height: 73.7px;
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
    max-width: 147.33px;
    max-height: 80px;
  }
  .background {
    width: 173px;
    border-radius: 8px;
    background-color: #fafafa;
    height: 88px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 8px 13px;
    box-sizing: border-box;
  }
  .background1 {
    width: 174px;
    border-radius: 8px;
    background-color: #fafafa;
    height: 88px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 8px 13px;
    box-sizing: border-box;
  }
  .iTc1 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 32px;
    width: 100%;
    height: 100%;
    padding: 0 17%;
    
  }
  .iTc {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 80px 120px;
    box-sizing: border-box;
    gap: 48px;
    text-align: left;
    font-size: 32px;
    color: #000;
    font-family: "SF Pro Display";
  }
  </style>