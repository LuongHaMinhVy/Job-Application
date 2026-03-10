<template>
  <div :class="$style.overlay">
    <form :class="$style.popUp" @submit.prevent="handleAddCv">
      <div :class="$style.head">
        <h2>Tải CV của bạn lên</h2>
        <h2 :class="$style.close" @click="props.hideForm">X</h2>
      </div>
      <img :class="$style.img" v-if="img.imgUrl" :src="img.imgUrl" alt="">
      <div :class="$style.inputField">
        <label :class="$style.label">PDF tài liệu</label>
        <input @change="uploadFile" type="file" :class="$style.input" />
      </div>
      <div :class="$style.inputField">
        <label :class="$style.label">Ngôn ngữ</label>
        <select :class="$style.input">
          <option value="1">Tiếng Việt</option>
        </select>
      </div>
      <div :class="$style.inputField">
        <label :class="$style.label">Tiêu đề</label>
        <input type="text" :class="$style.input" />
      </div>
      <button :class="$style.button">Tải lên</button>
    </form>
  </div>
</template>
<script setup>
import storage from "@/firebase/config";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { onMounted, reactive, ref } from "vue";
import { useStore } from "vuex";

const props = defineProps(["showForm", "hideForm"]);
const store = useStore();
const img = reactive({
  imgUrl: "",
  file: null,

})
const cv = reactive({
  laguageId: "1",
  ownerId: "1",
  pdfUrl: "",
  status: false,
});

const uploadFile = async (e) => {
  if (e.target.files && e.target.files[0]) {
    const file = e.target.files[0];
    const fileRef = storageRef(storage, `cvImg/${file.name}`);

    try {
      // Upload the file
      await uploadBytes(fileRef, file);

      // Get the download URL and store it in cv.pdfUrl
      const downloadURL = await getDownloadURL(fileRef);
      console.log(downloadURL);
      
      img.imgUrl = downloadURL;

      console.log("File uploaded successfully:", cv.value);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  }
};


const handleAddCv = () => {
  store.dispatch('createCV', {...cv, pdfUrl: img.imgUrl})
  props.hideForm();
};

onMounted(() => {});
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
  top: 0;
  left: 0;
}
.popUp {
  width: 500px;
  border-radius: 10px;
  padding: 20px;
  background-color: white;
}
.img{
  width: 80px;
  height: 80px;

}
.head {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.close {
  cursor: pointer;
}
.label {
  font-weight: 600;
}
.inputField {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}
.input {
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px 10px;
  outline: none;
}
.button {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background-color: red;
  border: none;
  font-size: 16px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}
</style>
