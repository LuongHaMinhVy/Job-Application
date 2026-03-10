<template>
  <div :class="$style.mainContent">
    <div :class="$style.display">
      <div
        v-if="interviews"
        :class="$style.interview"
        v-for="(item, index) in interviews"
      >
        <div :class="$style.head">
          <div :class="$style.title">
            {{ item.title }}
          </div>
        </div>
        <div :class="$style.body">
          <button v-if="item.status" :class="$style.active">Hoàn thành</button>
          <button v-else :class="$style.inActive">Đang phỏng vấn</button>
          <div :class="$style.subbody">
            <label :class="$style.label" for="">Ngày</label>
            <input v-if="item.date" disabled :class="$style.input" type="date" />
            <div v-else :class="$style.unupdated">Chưa cập nhật</div>
          </div>
          <div :class="$style.subbody">
            <label :class="$style.label" for="">Thời gian</label>
            <input v-if="item.time" disabled :class="$style.input" type="time" />
            <div v-else :class="$style.unupdated">Chưa cập nhật</div>
          </div>
          <div :class="$style.subbody">
            <label :class="$style.label" for="">Địa điểm</label>
            <input v-if="item.address" disabled :class="$style.input" type="date" />
            <div v-else :class="$style.unupdated">Chưa cập nhật</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();

const interviews = computed(() => store.getters.getInterviews);
onMounted(() => {
  store.dispatch("fetchInterviews");
  console.log(interviews.value);
});
</script>
<style module scoped>
.mainContent {
  margin-top: 80px;
  width: 100%;
  height: 100vh;
  padding: 20px 40px;
}
.display {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
}
.interview {
  width: 200px;
  border: 1px solid #000;
  border-radius: 5px;
}
.head {
  width: 100%;
  background-image: url("https://firebasestorage.googleapis.com/v0/b/ptit-b51c0.appspot.com/o/avatar%2Fnah%20skill%20issue.jpeg?alt=media&token=8c280f20-7fe0-4d15-a2fe-741f9fbb766f");
  background-size: cover;
  /* background-position: center; */
  background-repeat: no-repeat;
  height: 80px;
  border-start-end-radius: 5px;
  border-start-start-radius: 5px;
  display: flex;
  align-items: end;
}
.title {
  width: 100%;
  padding: 5px;
  background-color: #00000080;
  z-index: 2;
  color: white;
  text-align: center;
}
.body {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 10px;
  gap: 20px;
}
.active {
  margin-top: 10px;
  width: 90%;
  font: 20px;
  border: 1px solid #0f8;
  background-color: #0f8;
  border-radius: 20px;
  font-size: 20px;
  color: green;
}
.inActive {
  margin-top: 10px;
  width: 90%;
  font-size: 20px;
  border: 1px solid #ffc47d;
  background-color: #ffc47d;
  border-radius: 20px;
  font-size: 14px;
  color: rgb(180, 123, 0);
}
.subbody{
  margin: 5px 0px;
  color: gray;
}
.label{
  display: block;
}
.input{
  /* display: block; */
  margin-left: 10px;
  margin-top: 10px;
  background-color: #eee  ;
  border: none;
  padding: 5px;
}
.unupdated{
  color: blue;
  font-size: 12px;
  margin-left: 10px;
  padding: 5px;
  width: 70%;
  font-size: 14px;
}

</style>
