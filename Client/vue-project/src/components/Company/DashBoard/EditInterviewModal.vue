<template>
  <div :class="$style.overlay" v-if="isVisible">
    <form  :class="$style.popUp">
      <div :class="$style.InterviewwWrapper">
        <b :class="$style.Intervieww">Lịch phỏng vấn</b>
      </div>
  
      <!-- Ngày phỏng vấn -->
      <div :class="$style.inputDropdown">
        <div :class="$style.inputDropdownBase">
          <div :class="$style.inputWithLabel">
            <label :class="$style.label">Ngày phỏng vấn</label>
            <input type="date" v-model="localInterview.date" :class="$style.input" />
          </div>
        </div>
      </div>
  
      <!-- Thời gian -->
      <div :class="$style.inputDropdown1">
        <div :class="$style.inputDropdownBase">
          <div :class="$style.inputWithLabel">
            <label :class="$style.label">Thời gian</label>
            <input type="time" v-model="localInterview.time" :class="$style.input" />
          </div>
        </div>
      </div>
  
      <!-- Cách thức phỏng vấn -->
      <div :class="$style.inputDropdown2">
        <div :class="$style.inputDropdownBase">
          <div :class="$style.inputWithLabel">
            <div :class="$style.label">Cách thức phỏng vấn</div>
            <select v-model="localInterview.type" :class="$style.input2">
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </div>
        </div>
      </div>
  
      <!-- Link cuộc họp -->
      <div :class="$style.inputDropdown3">
        <div :class="$style.inputDropdownBase">
          <div :class="$style.inputWithLabel">
            <div :class="$style.label">Link cuộc họp</div>
            <input type="text" v-model="localInterview.link" :class="$style.input" />
          </div>
        </div>
      </div>
  
      <!-- Nút Cập nhật và Hủy -->
      <div :class="$style.button">
        <button @click="saveChanges" :class="$style.buttonBase">
          <div :class="$style.text4">Cập nhật</div>
        </button>
      </div>
      <div :class="$style.button1">
        <button @click="cancelEdit" :class="$style.buttonBase1">
          <div :class="$style.text4">Hủy</div>
        </button>
      </div>
    </form>
  </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits, reactive, watch } from 'vue';
  const props = defineProps({
    isVisible: {
      type: Boolean,
      default: false,
    },
    interview: {
      type: Object,
      required: true,
    },
  });
  const emit = defineEmits(['save', 'cancel']);
  const localInterview = reactive({ ...props.interview });
  watch(
    () => props.interview,
    (newInterview) => {
      Object.assign(localInterview, newInterview);
    },
    { immediate: true }
  );
  function saveChanges() {
    emit('save', localInterview);
  }
  function cancelEdit() {
    emit('cancel');
  }
  </script>
                    <style module>
                    .overlay{
                      position: absolute;
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: #00000047;
top: 0;
left: 0;
                    }
                      .label {
                    position: relative;
                    line-height: 20px;
                    font-weight: 600;
              }
                    .calendar2Icon {
                          width: 20px;
                          position: relative;
                          height: 20px;
                    }
                    .text {
                          position: relative;
                          line-height: 24px;
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
                          border: 1px solid #ccc;
                          display: flex;
                          flex-direction: row;
                          align-items: center;
                          justify-content: flex-start;
                          padding: 10px 14px;
                          font-size: 16px;
                          color: #3d3d3d;
                    }
                    .inputWithLabel {
                          align-self: stretch;
                          display: flex;
                          flex-direction: column;
                          align-items: flex-start;
                          justify-content: flex-start;
                          gap: 6px;
                    }
                    .inputDropdownBase {
                          position: absolute;
                          width: 100%;
                          top: 0px;
                          right: 0px;
                          left: 0px;
                          display: flex;
                          flex-direction: column;
                          align-items: flex-start;
                          justify-content: flex-start;
                    }
                    .inputDropdown {
                          position: absolute;
                          top: 96px;
                          left: 24px;
                          width: 592px;
                          height: 70px;
                    }
                    .inputDropdown1 {
                          position: absolute;
                          top: 186px;
                          left: 24px;
                          width: 592px;
                          height: 70px;
                    }
                    .content2 {
                          flex: 1;
                          display: flex;
                          flex-direction: row;
                          align-items: center;
                          justify-content: flex-start;
                    }
                    .chevronDownIcon {
                          width: 20px;
                          position: relative;
                          height: 20px;
                          overflow: hidden;
                          flex-shrink: 0;
                    }
                    .input2 {
                          align-self: stretch;
                          box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
                          border-radius: 8px;
                          background-color: #fff;
                          border: 1px solid #ccc;
                          display: flex;
                          flex-direction: row;
                          align-items: center;
                          justify-content: flex-start;
                          padding: 10px 14px;
                          gap: 8px;
                          font-size: 16px;
                          color: #3d3d3d;
                    }
                    .inputDropdown2 {
                          position: absolute;
                          top: 276px;
                          left: 24px;
                          width: 592px;
                          height: 70px;
                    }
                    .inputDropdown3 {
                          position: absolute;
                          top: 366px;
                          left: 24px;
                          width: 592px;
                          height: 70px;
                    }
                    .Intervieww {
                          position: relative;
                          line-height: 32px;
                    }
                    .InterviewwWrapper {
                          position: absolute;
                          top: 24px;
                          left: 24px;
                          border-bottom: 1px solid #ddd;
                          box-sizing: border-box;
                          width: 592px;
                          display: flex;
                          flex-direction: row;
                          align-items: center;
                          justify-content: flex-start;
                          padding: 0px 0px 16px;
                          font-size: 24px;
                    }
                    .text4 {
                          position: relative;
                          line-height: 24px;
                          font-weight: 600;
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
                          position: absolute;
                          bottom: 24px;
                          left: 288px;
                          border-radius: 8px;
                          width: 328px;
                          display: flex;
                          flex-direction: row;
                          align-items: flex-start;
                          justify-content: flex-start;
                          font-size: 16px;
                          color: #fff;
                    }
                    .buttonBase1 {
                          flex: 1;
                          box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
                          border-radius: 8px;
                          background-color: #f4f4f4;
                          border: 1px solid #f4f4f4;
                          overflow: hidden;
                          display: flex;
                          flex-direction: row;
                          align-items: center;
                          justify-content: center;
                          padding: 12px 20px;
                    }
                    .button1 {
                          position: absolute;
                          bottom: 24px;
                          left: 24px;
                          border-radius: 8px;
                          width: 248px;
                          display: flex;
                          flex-direction: row;
                          align-items: flex-start;
                          justify-content: flex-start;
                          font-size: 16px;
                          color: #3d3d3d;
                    }
                    .popUp {
                      width: 100%;
                      position: relative;
                      border-radius: 16px;
                      background-color: #fff;
                      height: 532px;
                      overflow: hidden;
                      text-align: left;
                      font-size: 14px;
                      color: #000;
                      font-family: 'SF Pro Display';
                    }
              
              </style>