<template>
  <div :class="$style.overlay">
  
      <form @submit.prevent="certificateForm" :class="$style.popUp">
  
          <div :class="$style.inputDropdown">
  
              <div :class="$style.inputDropdownBase">
  
                  <div :class="$style.inputWithLabel">
  
                      <label :class="$style.label">Chứng chỉ/Bằng cấp</label>
  
                      <select v-model="inputValue.type" :class="$style.input1">
  
                  <option
  
                    v-if="userCertificates"
  
                    v-for="(item, index) in certificates"
  
                    :key="index"
  
                    :value="item.id"
  
                    >{{ item.type }}</option
  
                  >
  
                </select>
  
                  </div>
  
              </div>
  
          </div>
  
          <div :class="$style.inputDropdownBase1">
  
              <div :class="$style.inputWithLabel">
  
                  <label :class="$style.label">Xếp loại</label>
  
                  <select v-model="inputValue.value" :class="$style.input1">
  
                <option v-if="certificate" v-for="item in certificate.value">{{
  
                  item
  
                }}</option>
  
              </select>
  
              </div>
  
          </div>
  
          <div :class="$style.inputDropdownBase2">
  
              <div :class="$style.inputWithLabel">
  
                  <label :class="$style.label">Ngày cấp</label>
  
                  <input v-model="inputValue.receivedDate" type="date" :class="$style.input1" />
  
              </div>
  
          </div>
  
          <div :class="$style.inputDropdownBase3">
  
              <div :class="$style.inputWithLabel">
  
                  <label :class="$style.label">Thời hạn</label>
  
                  <input v-model="inputValue.expirationDate" :min="inputValue.receivedDate" type="date" :class="$style.input1" />
  
              </div>
  
          </div>
  
          <div :class="$style.thmChngChWrapper">
  
              <b :class="$style.thmChngCh">Thêm Chứng Chỉ</b>
  
          </div>
  
          <div :class="$style.button">
  
              <button :class="$style.buttonBase">
  
              <img
  
                :class="$style.calendar2Icon"
  
                alt=""
  
                src="../../../public/images/homepage-vuesax-linear-add-circle.svg"
  
              />
  
              <div :class="$style.text3">Thêm Chứng Chỉ</div>
  
            </button>
  
          </div>
  
          <div :class="$style.button1">
  
              <button @click="props.hideModal()" :class="$style.buttonBase1">
  
              <div :class="$style.text3">Hủy</div>
  
            </button>
  
          </div>
  
      </form>
  
  </div>
</template>
<script setup>
import { ref } from "firebase/storage";
import { computed, onMounted, reactive, watch } from "vue";
import { useStore } from "vuex";
const authToken = localStorage.getItem("authToken");
onMounted(async () => {
  await store.dispatch("getUserCertificateByUserId", "1");
  await store.dispatch("fetchCertificates");
});
const store = useStore();


const props = defineProps(["hideModal"]);
const userCertificates = computed(() => store.getters.getUserCertificates);
const certificate = computed(() => store.getters.getCertificate);
const certificates = computed(() => store.getters.getCertificates);
const inputValue = reactive({
  value: "",
  type: "",
  receivedDate: "",
  expirationDate: "",
});

function getNameCertificateById (id) {
  const certificate = certificates.value.find(cert => cert.id === id);
  if (certificate) {
      return certificate.type;
  }
  return "";
}
const certificateForm = () => {
  const newUserCertificate = {
      userId: authToken,
      type :getNameCertificateById(inputValue.type) ,
      value: inputValue.value,
      receivedDate: inputValue.receivedDate,
      expirationDate: inputValue.expirationDate,
      certificateValue: inputValue.value,
  };
  store.dispatch("createUserCertificate", newUserCertificate);
  props.hideModal();
};

watch(
  () => inputValue.type,
  async (newType, oldType) => {
      if (newType) {
          await store.dispatch("fetchCertificate", newType);
      }
  }
);
</script>
<style module scoped>
.overlay {
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000047;
  top: -100px;
  left: 0;
}

.label {
  position: relative;
  line-height: 20px;
  font-weight: 600;
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
}

.chevronDownIcon {
  width: 20px;
  position: relative;
  height: 20px;
  overflow: hidden;
  flex-shrink: 0;
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
  gap: 8px;
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
  width: 412px;
  height: 70px;
}

.input1 {
  align-self: stretch;
  width: 500px;
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

.inputDropdownBase1 {
  position: absolute;
  width: calc(100% - 48px);
  top: 182px;
  right: 24px;
  left: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

/* .inputDropdownBase2 {
  position: absolute;
  width: calc(100% - 48px);
  top: 354px;
  right: 24px;
  left: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
} */

.calendar2Icon {
  width: 20px;
  position: relative;
  height: 20px;
}

.content2 {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
}

.inputDropdownBase2 {
  position: absolute;
  width: calc(100% - 48px);
  top: 268px;
  right: 24px;
  left: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.inputDropdownBase3 {
  position: absolute;
  width: calc(100% - 48px);
  top: 360px;
  right: 24px;
  left: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.thmChngCh {
  position: relative;
  line-height: 30px;
}

.thmChngChWrapper {
  position: absolute;
  top: 24px;
  left: 24px;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
  width: 412px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 0px 16px;
  font-size: 20px;
  color: #111;
}

.text3 {
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
  gap: 8px;
}

.button {
  position: absolute;
  bottom: 24px;
  left: 211px;
  border-radius: 8px;
  width: 225px;
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
  width: 171px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 16px;
  color: #3d3d3d;
}

.popUp {
  width: 600px;
  position: relative;
  border-radius: 16px;
  background-color: #fff;
  height: 530px;
  overflow: hidden;
  text-align: left;
  font-size: 14px;
  color: #000;
  font-family: "SF Pro Display";
}
</style>