<template>
    <b :class="$style.Tagname">Quản lý lịch phỏng vấn</b>
    <div :class="$style.infoTag">
      Hãy xem và theo dõi để không bỏ lỡ lịch phỏng vấn.
    </div>
    <div :class="$style.container">
      <div v-for="interview in interviewBookings" :key="interview.id" :class="$style.candidate">
        <div :class="$style.name">
          <div :class="$style.infor">
            <img :class="$style.imgIcon" alt="" src="../../../../public/images/dashboard-img.png" />
            <div :class="$style.name1">
              <b :class="$style.frontEndDeveloper">{{ interview.jobTitle }}</b>
              <div :class="$style.cngTyC">{{ interview.companyName }}</div>
            </div>
          </div>
        </div>
        <div :class="$style.more">
          <div :class="$style.level">
            <img :class="$style.profileIcon" alt="" src="../../../../public/images/dashboard-vuesax-bold-frame.svg" />
            <div :class="$style.EditAndDeleteParent">
              <div :class="$style.EditAndDelete">Tên ứng viên:</div>
              <div :class="$style.time">{{ interview.candidateName }}</div>
            </div>
          </div>
          <div :class="$style.level">
            <img :class="$style.profileIcon" alt="" src="../../../../public/images/dashboard-vuesax-bold-frame.svg" />
            <div :class="$style.cvParent">
              <div :class="$style.EditAndDelete">CV:</div>
              <div :class="$style.httpzoomMeeting">{{ interview.meetingLink }}</div>
            </div>
          </div>
          <div :class="$style.level">
            <img :class="$style.profileIcon" alt="" src="../../../../public/images/dashboard-vuesax-bold-calendar-2.svg" />
            <div :class="$style.EditAndDeleteParent">
              <div :class="$style.EditAndDelete">Ngày:</div>
              <div :class="$style.time">{{ formatDate(interview.meetingStartTime) }}</div>
            </div>
          </div>
          <div :class="$style.level">
            <img :class="$style.profileIcon" alt="" src="../../../../public/images/dashboard-vuesax-bold-clock.png" />
            <div :class="$style.EditAndDeleteParent">
              <div :class="$style.EditAndDelete">Thời gian:</div>
              <div :class="$style.time">{{ formatTime(interview.meetingStartTime) }}</div>
            </div>
          </div>
          <div :class="$style.certificate1">
            <img :class="$style.locationIcon" alt="" src="../../../../public/images/dashboard-vuesax-bold-location.svg" />
            <div :class="$style.aImParent">
              <div :class="$style.EditAndDelete">Địa điểm:</div>
              <div :class="$style.httpzoomMeeting1">{{ interview.location }}</div>
            </div>
          </div>
        </div>
  
        <div :class="$style.button">
          <button  @click="openEditModal(interview)" :class="$style.buttonBase">Chỉnh sửa</button>
          <button @click="handleDelete(interview.id)"  :class="$style.buttonBase1">Xóa</button>
        </div>
      </div>
      <EditInterviewModal
      :isVisible="showModal"
      :interview="editedInterview"
      @save="updateInterview"
      @cancel="closeModal"
    />
    </div>
    
  </template>
  
  <script setup>
  import { computed, onMounted, ref } from 'vue';
  import { useStore } from 'vuex';
  import Swal from 'sweetalert2';
  import EditInterviewModal from  "./EditInterviewModal.vue"
  
  const store = useStore();
  const interviewBookings = computed(() => store.getters['interview/getInterviewBookings']);
  const showModal = ref(false);
  const editedInterview = ref({});
  onMounted(() => {
    store.dispatch('interview/fetchInterviewBookings');
  });
  function openEditModal(interview) {
  editedInterview.value = { ...interview };
  showModal.value = true;
  }
  function closeModal() {
  showModal.value = false;
  }
  function updateInterview(updatedInterview) {
  store.dispatch('interview/updateInterviewBooking', updatedInterview);
  closeModal();
  }
  function formatDate(dateTime) {
    const date = new Date(dateTime);
    return date.toLocaleDateString('vi-VN');
  }
  
  function formatTime(dateTime) {
    const date = new Date(dateTime);
    return date.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
  }
  function handleDelete(id) {
  Swal.fire({
    title: 'Bạn có chắc chắn muốn xóa lịch phỏng vấn này không?',
    text: 'Hành động này không thể hoàn tác!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Xóa',
    cancelButtonText: 'Hủy',
  }).then((result) => {
    if (result.isConfirmed) {
      store.dispatch('interview/deleteInterviewBooking', id);
      Swal.fire('Đã xóa!', 'Lịch phỏng vấn đã được xóa.', 'success');
    }
  });
}
  </script>
  
<style module>
.Tagname {
  width: 100%;
  position: relative;
  font-size: 24px;
  line-height: 32px;
  display: inline-block;
  font-family: "SF Pro Display";
  color: #2d2c2c;
  text-align: left;
}
.infoTag {
  width: 100%;
  position: relative;
  font-size: 16px;
  line-height: 24px;
  font-family: "SF Pro Display";
  color: #676767;
  text-align: left;
  display: inline-block;
}
.imgIcon {
  width: 52px;
  position: relative;
  border-radius: 8px;
  height: 52px;
  overflow: hidden;
  flex-shrink: 0;
}
.frontEndDeveloper {
  position: relative;
  line-height: 24px;
}
.cngTyC {
  align-self: stretch;
  position: relative;
  font-size: 12px;
  line-height: 18px;
  color: #676767;
}
.name1 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.infor {
  width: 158px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
}
.name {
  align-self: stretch;
  border-bottom: 0.5px solid #ddd;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 16px;
  font-size: 16px;
}
.profileIcon {
  width: 16px;
  position: relative;
  height: 16px;
}
.EditAndDelete {
  position: relative;
  line-height: 20px;
  font-weight: 600;
}
.time {
  position: relative;
  text-decoration: underline;
  line-height: 20px;
  color: #3d3d3d;
}
.EditAndDeleteParent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
}
.level {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
}
.httpzoomMeeting {
  flex: 1;
  position: relative;
  text-decoration: underline;
  line-height: 20px;
  color: #3d3d3d;
}
.cvParent {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
}
.locationIcon {
  width: 16px;
  position: relative;
  height: 16px;
  overflow: hidden;
  flex-shrink: 0;
}
.httpzoomMeeting1 {
  flex: 1;
  position: relative;
  text-decoration: underline;
  line-height: 20px;
  color: #3d3d3d;
  display: -webkit-inline-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.aImParent {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
}
.certificate1 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4px;
}
.more {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
  color: #2d2c2c;
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
  padding: 8px 14px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
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
  padding: 8px 14px;
  color: #3d3d3d;
  cursor: pointer;
  transition: background-color 0.3s;
}

.buttonBase:hover {
  background-color: #922021;
}

.buttonBase1:hover {
  background-color: #e0e0e0;
}
.button {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  color: #fff;
}
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 16px;
  width: 100%;
}
.candidate {
  width: 100%;
  position: relative;
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px;
  box-sizing: border-box;
  gap: 16px;
  text-align: left;
  font-size: 14px;
  color: #000;
  font-family: "SF Pro Display";
}
</style>
