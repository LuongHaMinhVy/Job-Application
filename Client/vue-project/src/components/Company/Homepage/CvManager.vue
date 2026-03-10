<template>
  <div :class="$style.cvManagerContainer">
    <div :class="$style.head">
      <div :class="$style.leftHead">
        <h2 :class="$style.title">CV đã tải lên</h2>
        <p :class="$style.p">Hãy xem và cập nhật CV mới nhất của bạn.</p>
      </div>
      <div :class="$style.rightHead"
        ><div :class="$style.uploadButton">
          <button @click="showForm" :class="$style.uploadButtonBase">
            <img
              :class="$style.exportIcon"
              alt=""
              src="../../../../public/images/homepage-vuesax-linear-export.svg"
            />
            <b :class="$style.text">Tải CV lên</b>
          </button>
        </div></div
      >
    </div>
    <div :class="$style.cvDisplay">
      <Cv v-if="cvs" v-for="item in cvs" :key="item.id" :item="item" />
    </div>
    <div v-if="cvs && cvs.length / 6 > 1" :class="$style.pagination">
      <div :class="$style.paginationNumbers">
        <div :class="$style.paginationNumberBase">
          <div :class="$style.content">
            <div :class="$style.number">{{ item }}</div>
          </div>
        </div>
        <!-- <div :class="$style.paginationNumberBase1">
          <div :class="$style.content">
            <div :class="$style.number">2</div>
          </div>
        </div> -->
      </div>
      <div :class="$style.arrowLeftWrapper">
        <img
          :class="$style.arrowLeftIcon"
          alt=""
          src="../../../../public/images/homepage-vuesax-outline-arrow-left.svg"
        />
      </div>
      <div v-if="cvs.length / 6 > 1" :class="$style.arrowLeftWrapper">
        <img
          :class="$style.arrowLeftIcon"
          alt=""
          src="../../../../public/images/homepage-vuesax-outline-arrow-right.svg"
        />
      </div>
    </div>
    <AddCvForm v-if="isShowForm" :showForm="showForm" :hideForm="hideForm"/>
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import Cv from "./Cv.vue";
import AddCvForm from '../../Modal/AddCvForm.vue'

const store = useStore();
const cvs = computed(() => store.getters.getAllCv);
const users = computed(() => store.getters.getUsers);
// console.log(cvs.value);
const limitPage = computed(() => Math.ceil(cvs.value.length / 6));
const totalPage = computed(() => Math.ceil(cvs.length));
const isShowForm = ref(false);

const showForm = () => {
  isShowForm.value = true;
}
const hideForm = () => {
  isShowForm.value = false;
}

onMounted(() => {
  store.dispatch("fetchUsers");
  store.dispatch("getAllCV");
});
</script>
<style module scoped>
.exportIcon {
  width: 20px;
  position: relative;
  height: 20px;
}
.text {
  position: relative;
  line-height: 24px;
}
/* .rightHead{
    
   
} */
.uploadButtonBase {
  flex: 1;
  border-radius: 8px;
  background-color: #f8e9ea;
  border: 1px solid #f8e9ea;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  gap: 8px;
  cursor: pointer;
}
.uploadButton {
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  font-size: 16px;
  color: #ab1f24;
  font-family: "SF Pro Display";
}

.cvManagerContainer {
  margin-top: 60px;
  width: 100%;
  height: 100%;
  padding: 30px 40px;
  /* background-color: #000; */
  position: relative;
}
.head {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.cvDisplay {
  width: 100%;
  margin-top: 40px;
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 10px;
}

.image644Icon {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 282px;
  height: 396px;
  object-fit: cover;
}
.cvChild {
  position: absolute;
  top: 0px;
  left: 0px;
  background: linear-gradient(180deg, rgba(19, 12, 45, 0), #130c2d);
  width: 282px;
  height: 210px;
}
.eyeIcon {
  width: 12px;
  position: relative;
  height: 12px;
}
.text {
  position: relative;
  line-height: 10px;
  font-weight: 600;
}
.buttonBase {
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.6);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  gap: 4px;
}
.button {
  position: absolute;
  top: 178px;
  left: 12px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}
.button1 {
  position: absolute;
  top: 178px;
  left: 81px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}
.buttonBase2 {
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.6);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 4px;
}
.button2 {
  position: absolute;
  top: 178px;
  left: 250px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}
.cvFrontEndDeveloper {
  position: absolute;
  top: 110px;
  left: 12px;
  font-size: 14px;
  line-height: 20px;
  display: inline-block;
  width: 227px;
}
.cpNhtLn {
  position: absolute;
  top: 154px;
  left: 12px;
  font-size: 10px;
  line-height: 16px;
  display: flex;
  align-items: center;
  width: 227px;
}
.cv {
  width: 100%;
  position: relative;
  border-radius: 8px;
  background-color: #fff;
  height: 210px;
  overflow: hidden;
  text-align: left;
  font-size: 8px;
  color: #fff;
  font-family: "SF Pro Display";
}

.number {
  position: relative;
  line-height: 20px;
  font-weight: 500;
}
.content {
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px;
  box-sizing: border-box;
}
.paginationNumberBase {
  width: 40px;
  position: relative;
  border-radius: 20px;
  background-color: #f8e9ea;
  height: 40px;
  overflow: hidden;
  flex-shrink: 0;
  color: #ab1f24;
}
.paginationNumberBase1 {
  width: 40px;
  position: relative;
  border-radius: 20px;
  height: 40px;
  overflow: hidden;
  flex-shrink: 0;
}
.paginationNumbers {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2px;
}
.arrowLeftIcon {
  width: 16px;
  position: relative;
  height: 16px;
}
.arrowLeftWrapper {
  width: 40px;
  border-radius: 20px;
  background-color: #f4f4f4;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 12px;
  box-sizing: border-box;
}
.pagination {
  margin-left: 65%;
  margin-bottom: 40px;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: end;
  margin-top: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  text-align: center;
  font-size: 14px;
  color: #919191;
  font-family: "SF Pro Display";
}
</style>
