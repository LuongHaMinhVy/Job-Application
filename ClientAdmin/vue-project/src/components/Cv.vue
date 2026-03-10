<template>
  <div class="cv">
    <img :src="cv.pdfUrl" alt="CV Preview" class="img" />
    <div class="body-contain">
      <div class="head" v-if="user">
        <p>{{ props.cv.title }}</p>
        <button
          @click="changeCvStatus"
          v-if="props.cv.status"
          class="active status"
          >Hoạt động</button
        >
        <button @click="changeCvStatus" v-else class="inActive status"
          >Ngừng hoạt động</button
        >
      </div>
      <span class="body">
        <font-awesome-icon icon="fa-solid fa-user-group" />
        <span v-if="user" class="owner">Owner: {{ user.userName }}</span>
        <!-- <span v-if="user" class="owner">Owner: {{ user.userName }}</span> -->
      </span>
      <div class="foot">
       <button @click="confirmChangeCvStatus" class="button changeStatus">Đổi trạng thái</button>
        <!-- <button @click="deleteCv" class="button delete">Xóa</button> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import Swal from "sweetalert2";
import { ref, watch, onMounted } from "vue";
import { useStore } from "vuex";

const props = defineProps(["cv"]);

const store = useStore();

const user = ref(null);

const fetchUser = async (ownerId) => {
  await store.dispatch("fetchUser", ownerId);
  user.value = store.getters.getUser;
};

onMounted(() => {
  if (props.cv.ownerId) {
    fetchUser(props.cv.ownerId);
  }
});

const confirmChangeCvStatus = async () => {
  Swal.fire({
    title: "Bạn có muốn thay đổi trạng thái của CV này không?",
    showCancelButton: true,
    confirmButtonText: "Đồng ý",
    cancelButtonText: "Hủy",
  }).then((result) => {
    if (result.isConfirmed) {
      const updatedCv = { ...props.cv, status: !props.cv.status };
      store.dispatch("updateAdminCv", updatedCv);
    }
  });
};
const deleteCv = () => {
  Swal.fire({
    title: "Bạn có muốn thay đổi trạng thái của CV này không?",
    showCancelButton: true,
    confirmButtonText: "Đồng ý",
    cancelButtonText: "Hủy",
  }).then((result) => {
    if (result.isConfirmed) {

      store.dispatch("deleteCv", props.cv.id);
    }
  });
}

watch(
  () => props.cv.ownerId,
  (newOwnerId) => {
    if (newOwnerId) {
      fetchUser(newOwnerId);
    }
  }
);
</script>

<style scoped>
.cv {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  transition: box-shadow 0.3s;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

.img {
  width: 100%;
  height: auto;
  aspect-ratio: 4/3;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 1px solid #eee;
  object-fit: cover;
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h2 {
  font-size: 1.2em;
  margin: 0;
  color: #333;
}
.status {
  height: 30px;
  width: 120px;
  color: #fff;
  padding: 5px;
  border-radius: 10px;
  font-size: 12px;
  border: none;
  cursor: pointer;
}
.button {
  height: 30px;
  width: 80px;
  color: #fff;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 12px;
  border: none;
  cursor: pointer;
}
.changeStatus{
  background-color: #0095ff2b;
  color: rgb(0, 77, 202);
  width: 120px;
}
.active {
  background-color: #00ff002b;
  color: rgb(0, 202, 0);
}
.inActive {
  background-color: #ff00002b;

  color: rgb(191, 0, 0);
}
.owner {
}
.body {
  color: #666;
  margin-bottom: 5px;
}

.foot {
  padding: 5px;
  border-top: 1px solid black;
  display: flex;
  gap: 10px;
  justify-content: center;
}
.delete {
  background-color: red;
  color: white;
}
</style>
