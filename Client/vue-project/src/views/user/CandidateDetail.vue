<template>
      <div>
          <Header />
          <div :class="$style.candidateDetail">
              <div :class="$style.frameParent">
                  <div :class="$style.imgParent">
                      <img v-if="candidate" :class="$style.imgIcon" alt="" :src="candidate.avatar" />
                      <div :class="$style.nameParent">
                          <div :class="$style.name">
                              <b v-if="candidate" :class="$style.candidateName">{{ candidate.firstName }} {{ candidate.lastName }}</b>
                              <div :class="$style.tagParent">
                                  <div v-if="candidate" :class="$style.tag">{{ calculateAge(candidate.dateOfBirth) }}</div>
                                  <div :class="$style.badge">
                                      <div :class="$style.badgeBase">
                                          <div :class="$style.text">Front-end Developer</div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div :class="$style.levelParent">
                              <div :class="$style.level">
                                  <img :class="$style.teacherIcon" alt="" src="../../../public/images/teacher.svg" />
                                  <div :class="$style.levelParent">
                                      <b :class="$style.tag">Trình độ:</b>
                                      <div :class="$style.junior">Junior</div>
                                  </div>
                              </div>
                              <div :class="$style.level">
                                  <img :class="$style.teacherIcon" alt="" src="../../../public/images/archive-book.svg" />
                                  <div :class="$style.languageParent">
                                      <b :class="$style.tag">Ngoại ngữ:</b>
                                      <div v-if="userCertificate" :class="$style.junior">{{ userCertificate.certificateValue }}</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div :class="$style.button" @click="openEnterpriseModal">
                      <div :class="$style.buttonBase">
                          <div :class="$style.text1">Hẹn lịch phỏng vấn</div>
                      </div>
                  </div>
              </div>
              <div :class="$style.heading">
                  <img :class="$style.documentTextIcon" alt="" src="../../../public/images/document-text.svg" />
                  <b :class="$style.danhSchCv">Danh sách CV</b>
              </div>
              <div :class="$style.cv2">
                  <img :class="$style.image644Icon" alt="" src="../../../public/images/image 644.png" />
                  <div :class="$style.cvChild" />
                  <div :class="$style.button1">
                      <div :class="$style.buttonBase1">
                          <img :class="$style.eyeIcon" alt="" src="../../../public/images/eye.svg" />
                          <div :class="$style.text2">Xem CV</div>
                      </div>
                  </div>
                  <div :class="$style.button2">
                      <div :class="$style.buttonBase1">
                          <img :class="$style.eyeIcon" alt="" src="../../../public/images/import.svg" />
                          <div :class="$style.text2">Tải xuống</div>
                      </div>
                  </div>
                  <div :class="$style.button3">
                      <div :class="$style.buttonBase3">
                          <img :class="$style.eyeIcon" alt="" src="" />
                      </div>
                  </div>
                  <b :class="$style.cvFrontEndDeveloper">[CV] Front-End Developer - Đỗ Phú Quý. PDF</b>
                  <div :class="$style.cpNhtLn">Cập nhật lần cuối 30-12-2023 16:11 PM</div>
              </div>
          </div>
          <Footer />
          <EnterpriseModal v-if="showEnterpriseModal" @selected-enterprise="scheduleInterview" />
      </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  import Footer from '../../components/user/Footer.vue';
  import Header from '../../components/user/Header.vue';
  import EnterpriseModal from '../../components/Modal/EnterpriseOption.vue';
  import { onMounted, computed } from 'vue';
  import { useStore } from 'vuex';
  
  const route = useRoute();
  const store = useStore();
  const showEnterpriseModal = ref(false);
  const candidateId = route.params.id;
  
  onMounted(() => {
      store.dispatch('fetchCandidateDetail', candidateId.toString());
      store.dispatch('getUserCertificate', candidateId.toString());
  });
  
  const userCertificate = computed(() => store.getters.getUserCertificate);
  const candidate = computed(() => store.getters.getCandidate);
  
  function calculateAge(dateOfBirth) {
      const birthDate = new Date(dateOfBirth);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth() - birthDate.getMonth();
      if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
          age--;
      }
      return age;
  }
  function openEnterpriseModal() {
  showEnterpriseModal.value = true;
}

function scheduleInterview(selectedEnterprise) {
  const newBooking = {
    candidateId: candidate.value.id,
    interviewDate: new Date().toISOString(),
    enterpriseId: selectedEnterprise.id,
  };
  store.dispatch('createBookingInterview', newBooking);
  showEnterpriseModal.value = false;
}
  </script>
  
<style module>
.imgIcon {
  width: 180px;
  position: relative;
  border-radius: 8px;
  height: 180px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
}
  .candidateName {
        position: relative;
        line-height: 40px;
  }
  .tag {
        position: relative;
        line-height: 24px;
  }
  .text {
        position: relative;
        line-height: 18px;
  }
  .badgeBase {
        border-radius: 11px;
        background-color: #fef3f2;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 2px 12px;
  }
  .badge {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        mix-blend-mode: multiply;
        text-align: center;
        font-size: 12px;
        color: #b42318;
  }
  .tagParent {
        align-self: stretch;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 12px;
        font-size: 16px;
        color: #676767;
  }
  .name {
        align-self: stretch;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 8px;
  }
  .teacherIcon {
        width: 20px;
        position: relative;
        height: 20px;
  }
  .junior {
position: relative;
        line-height: 24px;
        color: #676767;
  }
  .levelParent {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;
  }
  .level {
        align-self: stretch;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 8px;
  }
  .languageParent {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 8px;
  }
  .levelParent {
        width: 242px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 8px;
        font-size: 16px;
        color: #2d2c2c;
  }
  .nameParent {
        width: 269px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 16px;
  }
  .imgParent {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 24px;
  }
  .text1 {
        position: relative;
        line-height: 20px;
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
        padding: 10px 16px;
  }
  .button {
        width: 180px;
        border-radius: 8px;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        font-size: 14px;
        color: #fff;
  }
  .frameParent {
        position: absolute;
        top: 128px;
        left: 10%;
        border-bottom: 1px solid #ddd;
        box-sizing: border-box;
        width: 80%;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        padding: 0px 0px 24px;
        font-size: 32px;
        color: #000;
  }
  .documentTextIcon {
        width: 24px;
        position: relative;
        height: 24px;
  }
  .danhSchCv {
        position: relative;
        line-height: 28px;
  }
  .heading {
        position: absolute;
        top: 356px;
        left: 10%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 12px;
        font-size: 18px;
        color: #2d2c2c;
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
  .text2 {
        position: relative;
        line-height: 10px;
        font-weight: 600;
  }
  .buttonBase1 {
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
  .button1 {
        position: absolute;
        top: 178px;
        left: 12px;
        border-radius: 8px;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
  }
  .button2 {
        position: absolute;
        top: 178px;
        left: 81px;
        border-radius: 8px;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
  }
  .buttonBase3 {
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
  .button3 {
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
        position: absolute;
        top: 400px;
        left: 426px;
        border-radius: 8px;
        background-color: #fff;
        width: 282px;
        height: 210px;
        overflow: hidden;
  }
  .cv1 {
        position: absolute;
        top: 634px;
        left: 120px;
        border-radius: 8px;
        background-color: #fff;
        width: 282px;
        height: 210px;
        overflow: hidden;
  }
  .cv2 {
        position: absolute;
        top: 400px;
        left: 120px;
        border-radius: 8px;
        background-color: #fff;
        width: 282px;
        height: 210px;
overflow: hidden;
  }
  .cv3 {
        position: absolute;
        top: 634px;
        left: 732px;
        border-radius: 8px;
        background-color: #fff;
        width: 282px;
        height: 210px;
        overflow: hidden;
  }
  .cv4 {
        position: absolute;
        top: 634px;
        left: 1038px;
        border-radius: 8px;
        background-color: #fff;
        width: 282px;
        height: 210px;
        overflow: hidden;
  }
  .cv5 {
        position: absolute;
        top: 400px;
        left: 732px;
        border-radius: 8px;
        background-color: #fff;
        width: 282px;
        height: 210px;
        overflow: hidden;
  }
  .cv6 {
        position: absolute;
        top: 400px;
        left: 1038px;
        border-radius: 8px;
        background-color: #fff;
        width: 282px;
        height: 210px;
        overflow: hidden;
  }
  .cv7 {
        position: absolute;
        top: 634px;
        left: 426px;
        border-radius: 8px;
        background-color: #fff;
        width: 282px;
        height: 210px;
        overflow: hidden;
  }
  .candidateDetail {
        width: 100%;
        position: relative;
        background-color: #fff;
        height: 1000px;
        overflow: hidden;
        text-align: left;
        font-size: 8px;
        color: #fff;
        font-family: 'SF Pro Display';
  }

</style>