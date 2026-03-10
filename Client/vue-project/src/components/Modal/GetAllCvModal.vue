<template>
  <div class="overlay">
    <div class="popup">
      <span class="span">
        <h2 class="tagName">Lựa chọn CV</h2>
        <h2 class="tagName">X</h2>
      </span>
      <div class="display">
        <div class="cv">
          <img class="cvImg" src="https://firebasestorage.googleapis.com/v0/b/ptit-b51c0.appspot.com/o/cvImg%2Fnah%20skill%20issue.jpeg?alt=media&token=a7e6fc65-395e-459e-b424-6f2a153c8bcc" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
onMounted(() => {
  store.dispatch("fetchAdminCvs");
});
const cvs = computed(() => store.getters.getAdminCvs);
</script>
<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.display {
  width: 100%;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
.popup {
  background-color: white;
  width: 50%;
  padding: 10px 20px;
  border-radius: 10px;
}
.span {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.cv {
    width: 250px;
    height: 300px;
}
.cvImg{
    width: 50%;
}
.tagName {

  position: relative;
  font-size: 16px;
  line-height: 24px;
}
</style>
