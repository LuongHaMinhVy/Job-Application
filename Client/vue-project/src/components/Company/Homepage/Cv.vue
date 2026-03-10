<template>
  <div v-if="props.item && props.item.status" :class="$style.cv">
    <img
      v-if="props.item"
      :class="$style.image644Icon"
      alt=""
      :src="props.item.pdfUrl || ''"
    />
    <div :class="$style.cvChild"></div>
    <div :class="$style.button">
      <div :class="$style.buttonBase">
        <img
          :class="$style.eyeIcon"
          alt=""
          src="../../../../public/images/vuesax-bold-eye.svg"
        />
        <div :class="$style.text">Xem CV</div>
      </div>
    </div>
    <div :class="$style.button1">
      <div :class="$style.buttonBase">
        <img
          :class="$style.eyeIcon"
          alt=""
          src="../../../../public/images/homepage-vuesax-outline-import.svg"
        />
        <div :class="$style.text">Tải xuống</div>
      </div>
    </div>
    <div :class="$style.button2">
      <div @click="handleDeleteCv" :class="$style.buttonBase2">
        <img
          :class="$style.eyeIcon"
          alt=""
          src="../../../../public/images/homepage-vuesax-bold-trash.svg"
        />
      </div>
    </div>
    <b v-if="user" :class="$style.cvFrontEndDeveloper"
      >[CV] {{ user.level }} - {{ user.firstName }} {{ user.lastName }}. PDF</b
    >
    <!-- <div :class="$style.cpNhtLn">Cập nhật lần cuối 30-12-2023 16:11 PM</div> -->
  </div>
</template>
<script setup>
import Swal from "sweetalert2";
import { onMounted, ref, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();
const props = defineProps(["item"]);
const user = ref(null);
const handleDeleteCv = () => {
  Swal.fire({
    title: "Bạn có muốn xóa trạng thái của CV này không?",
    showCancelButton: true,
    confirmButtonText: "Đồng ý",
    cancelButtonText: "Hủy",
  }).then((result) => {
    if (result.isConfirmed) {
      store.dispatch("deleteCV", props.item.id);
    }
  });
};

onMounted(async () => {
  await store.dispatch("fetchUser", props.item.ownerId);
  user.value = store.getters.getUser;
});
</script>
<style module scoped>
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
  width: 100%;
  height: 100%;
  padding: 30px 40px;
  /* background-color: #000; */
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
  cursor: pointer;
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
