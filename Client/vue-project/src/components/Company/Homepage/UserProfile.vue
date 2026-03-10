<template>
  <div :class="$style.profileContainer">
    <div :class="$style.avatarSection">
      <b :class="$style.nhIDin">Ảnh đại diện</b>
      <div :class="$style.avatar">
        <img
          v-if="user"
          :class="$style.avatarImg"
          :src="
            profileInfor.avatar ||
            '../../../../public/images/anh-dai-dien-default.jpg'
          "
          alt=""
        />
        <label for="avatar" :class="$style.cameraWrapper">
          <img
            :class="$style.cameraIcon"
            alt=""
            src="../../../../public/images/dashboard-vuesax-bold-camera.svg"
          />
        </label>
        <input @change="handleChangeImg" id="avatar" hidden type="file" />
      </div>
      <div :class="$style.kchThcNh"
        >Kích thước ảnh nhỏ nhất: 200 x 200px, định dạng PNG hoặc JPG</div
      >
    </div>
    <form @submit.prevent="handleUpdateInfor" :class="$style.infor">
      <div :class="$style.cpNhtThngTinCNhnParent">
        <b :class="$style.cpNhtThng">Cập nhật thông tin cá nhân</b>
        <div :class="$style.label"
          >Quản lý thông tin hồ sơ để bảo mật tài khoản</div
        >
      </div>
      <div :class="$style.frameParent">
        <div :class="$style.inputFieldParent">
          <div :class="$style.inputField">
            <div :class="$style.inputWithLabel">
              <label :class="$style.label1">Họ</label>
              <input
                :disabled="!showUpdateUserButton"
                v-model="profileInfor.firstName"
                :class="$style.input1"
              />

              <img
                v-if="showUpdateUserButton"
                :class="$style.edit2Icon"
                alt=""
                src="../../../../public/images/dashboard-vuesax-bold-close-circle.svg"
              />
            </div>
          </div>

          <div v-if="user" :class="$style.inputField">
            <div :class="$style.inputWithLabel">
              <label :class="$style.label1">Số điện thoại</label>
              <input
                :disabled="!showUpdateUserButton"
                v-if="!isEditingPhone"
                :value="maskedPhone"
                readonly
                @click="focusPhoneInput"
                :class="$style.input1"
              />
              <input
                :disabled="!showUpdateUserButton"
                v-else
                ref="phoneInput"
                v-model="profileInfor.phone"
                @blur="toggleEditPhone"
                :class="$style.input1"
              />
              <img
                v-if="!isEditingPhone && showUpdateUserButton"
                :class="$style.edit2Icon"
                alt=""
                src="../../../../public/images/dashboard-vuesax-bold-edit-2.svg"
                @click="toggleEditPhone"
              />
              <img
                v-else-if="showUpdateUserButton"
                :class="$style.edit2Icon"
                alt=""
                src="../../../../public/images/dashboard-vuesax-bold-edit-2.svg"
              />
            </div>
          </div>
          <div :class="$style.inputField">
            <div :class="$style.inputWithLabel">
              <div :class="$style.label1">Giới tính</div>
              <select
                :disabled="!showUpdateUserButton"
                :default-value="profileInfor.gender"
                v-model="profileInfor.gender"
                :class="$style.input1"
              >
                <option value="male">Nam</option>
                <option value="female">Nữ</option>
              </select>
              <!-- <img
                :class="$style.edit2Icon"
                alt=""
                src="../../../../public/images/dashboard-vuesax-outline-arrow-down.svg"
              /> -->
            </div>
          </div>
          <div v-if="user" :class="$style.inputField">
            <div :class="$style.inputWithLabel">
              <div :class="$style.label1">Năm kinh nghiệm</div>
              <input
                :disabled="!showUpdateUserButton"
                type="number"
                max="10"
                v-model="profileInfor.yearsExp"
                :class="$style.input1"
              />
            </div>
          </div>
        </div>
        <div v-if="user" :class="$style.inputFieldParent">
          <div :class="$style.inputField">
            <div :class="$style.inputWithLabel">
              <label :class="$style.label1">Tên</label>
              <input
                :disabled="!showUpdateUserButton"
                v-model="profileInfor.lastName"
                :class="$style.input1"
              />

              <img
                v-if="showUpdateUserButton"
                :class="$style.edit2Icon"
                alt=""
                src="../../../../public/images/dashboard-vuesax-bold-close-circle.svg"
              />
            </div>
          </div>
          <div :class="$style.inputField">
            <div :class="$style.inputWithLabel">
              <label :class="$style.label1">Ngày sinh</label>
              <input
                :disabled="!showUpdateUserButton"
                v-model="profileInfor.dateOfBirth"
                type="date"
                :class="$style.input1"
              />
              <!-- <img :class="$style.edit2Icon" alt="" src="../../../../public/images/dashboard-vuesax-bold-calendar-2.svg" /> -->
            </div>
          </div>
          <div :class="$style.inputField">
            <div :class="$style.inputWithLabel">
              <div :class="$style.label1">Trình độ</div>
              <select
                :disabled="!showUpdateUserButton"
                :default-value="profileInfor.levels"
                v-model="profileInfor.levels"
                :class="$style.input1"
              >
                <option value="fresher">Fresher</option>
                <option value="junior">Junior</option>
                <option value="mid-level">Mid-level</option>
                <option value="senior">Senior</option>
                <option value="lead">Lead</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div :class="$style.inputField">
            <div :class="$style.inputWithLabel">
              <div :class="$style.label1">Kỹ năng</div>
              <input
                :disabled="!showUpdateUserButton"
                v-model="profileInfor.skills"
                :class="$style.input1"
              />
            </div>
          </div>
        </div>
      </div>
      <div v-if="showUpdateUserButton" :class="$style.buttons">
        <div :class="$style.button">
          <div :class="$style.button1">
            <button
              type="button"
              @click="handleCancel"
              :class="$style.buttonBase"
            >
              <div :class="$style.text">Hủy</div>
            </button>
          </div>
          <div :class="$style.button2">
            <button :class="$style.buttonBase1">
              <div :class="$style.text">Cập nhật</div>
            </button>
          </div>
        </div>
      </div>
      <div v-else :class="$style.buttons">
        <div :class="$style.button">
          <div :class="$style.button1">
            <button :class="$style.buttonBase">
              <div :class="$style.text">Đổi mật khẩu</div>
            </button>
          </div>
          <div :class="$style.button2">
            <button @click="showButton" :class="$style.buttonBase1">
              <div :class="$style.text">Cập nhật thông tin</div>
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script setup>
import { computed, nextTick, onMounted, reactive, ref, watch } from "vue";
import storage from "@/firebase/config";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { useStore } from "vuex";
import Swal from "sweetalert2";
const store = useStore();
const user = computed(() => store.getters.getUser);
const img = reactive({
  src: user.value?.avatar || "../../../../public/images/default-avatar.png",
  img: null,
});
const handleChangeImg = async (e) => {
  if (e.target.files && e.target.files[0]) {
    const file = e.target.files[0];
    const fileRef = storageRef(storage, `avatar/${file.name}`);

    try {
      // Upload the file
      await uploadBytes(fileRef, file);

      // Get the download URL and store it in cv.pdfUrl
      const downloadURL = await getDownloadURL(fileRef);
      console.log(downloadURL);

      img.imgUrl = downloadURL;
      const newUser = {
        ...profileInfor,
        phone: `+84${profileInfor.phone}`,
        avatar: img.imgUrl,
        yearsExp: profileInfor.yearsExp.toString(),
        id: "1",
      };
      store.dispatch("fetchEditUser", newUser);

      console.log("File uploaded successfully:", newUser);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  }
};
const profileInfor = reactive({
  userName: "",
  email: "",
  avatar: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  gender: "male",
  dateOfBirth: "",
  yearsExp: "",
  skills: "",
  levels: "fresher",
});
const hideButton = () => {
  showUpdateUserButton.value = false;
};
const showButton = () => {
  showUpdateUserButton.value = true;
};

const showUpdateUserButton = ref(false);

const phoneInput = ref(null);

const focusPhoneInput = () => {
  isEditingPhone.value = true;
  nextTick(() => {
    if (phoneInput.value) {
      phoneInput.value.focus();
    }
  });
};

const handleUpdateInfor = () => {
  console.log(profileInfor);
  if (
    !profileInfor.firstName ||
    !profileInfor.userName ||
    !profileInfor.firstName ||
    !profileInfor.lastName ||
    !profileInfor.email ||
    !profileInfor.phone ||
    !profileInfor.gender ||
    !profileInfor.skills ||
    !profileInfor.yearsExp ||
    !profileInfor.levels ||
    !profileInfor.avatar
  ) {
    return Swal.fire({
      title: "Error!",
      text: "Vui lòng điền vào ô trống",
      icon: "error",
      confirmButtonText: "OK",
    });
  }
  const newUser = {
    ...profileInfor,
    phone: `+84${profileInfor.phone}`,
    yearsExp: profileInfor.yearsExp.toString(),
    id: "1",
  };
  store.dispatch("fetchEditUser", newUser);
  return Swal.fire({
    title: "Success!",
    text: "Sửa thông tin đăng nhập thành công",
    icon: "success",
    confirmButtonText: "OK",
  });
};

const handleCancel = () => {
  hideButton();
  isEditingPhone.value = false;
  profileInfor.userName = newUser.userName || "";
  profileInfor.firstName = newUser.firstName;
  profileInfor.lastName = newUser.lastName;
  profileInfor.email = newUser.email || "";
  profileInfor.phone = newUser.phone.split("+84")[1] || "";
  profileInfor.gender = newUser.gender || "";
  profileInfor.dateOfBirth = newUser.dateOfBirth || "";
  profileInfor.skills = newUser.skills || "";
  profileInfor.yearsExp = newUser.yearsExp || "";
  profileInfor.levels = newUser.levels || "";
  profileInfor.avatar = newUser.avatar || "";
};

const isEditingPhone = ref(false);

const maskedPhone = computed(() => {
  if (profileInfor.phone.length > 3) {
    return (
      "*".repeat(profileInfor.phone.length - 3) + profileInfor.phone.slice(-3)
    );
  }
  return profileInfor.phone;
});

const toggleEditPhone = () => {
  isEditingPhone.value = !isEditingPhone.value;
};

watch(
  user,
  (newUser) => {
    if (newUser) {
      profileInfor.firstName = newUser.firstName;
      profileInfor.lastName = newUser.lastName;
      profileInfor.userName = newUser.userName || "";
      profileInfor.email = newUser.email || "";
      profileInfor.phone = newUser.phone&&newUser.phone.split("+84")[1] || "";
      profileInfor.gender = newUser.gender || "";
      profileInfor.dateOfBirth = newUser.dateOfBirth || "";
      profileInfor.levels = newUser.levels || "";
      profileInfor.skills = newUser.skills || "";
      profileInfor.yearsExp = newUser.yearsExp || "";
      profileInfor.avatar = newUser.avatar || "";
    }
  },
  { immediate: true }
);

onMounted(() => {
  store.dispatch("fetchUser", "1");
});
</script>
<style module>
.profileContainer {
  position: absolute;
  display: flex;
  top: 10%;
  right: 0;
  width: 70%;
  flex-direction: row;
  gap: 100px;
  margin: 30px -50px;
}
.cpNhtThng {
  align-self: stretch;
  position: relative;
  line-height: 28px;
}
.label {
  position: relative;
  font-size: 16px;
  line-height: 24px;
  color: #676767;
}
.cpNhtThngTinCNhnParent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4px;
}
.label1 {
  position: relative;
  line-height: 20px;
  font-weight: 500;
}
.text {
  flex: 1;
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
.input {
  align-self: stretch;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  background-color: #f4f4f4;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 14px;
  font-size: 16px;
  color: #3d3d3d;
}
.inputWithLabel {
  position: relative;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 6px;
}
.inputField {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.edit2Icon {
  width: 16px;
  position: absolute;
  right: 10px;
  top: 60%;
  height: 16px;
}
.input1 {
  align-self: stretch;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #ddd;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 14px;
  gap: 8px;
  font-size: 16px;
  color: #3d3d3d;
  outline-color: #848484;
  /* padding-right: 10px; */
}

.input2 {
  align-self: stretch;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #ddd;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 14px;
  gap: 8px;
  font-size: 16px;
  color: #3d3d3d;
  font-family: "SF Pro Display";
}
.inputFieldParent {
  width: 282px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;
}
.input3 {
  align-self: stretch;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #848484;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 14px;
  gap: 8px;
  font-size: 16px;
  color: #3d3d3d;
}
.frameParent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
  font-size: 14px;
  color: #676767;
  font-family: Inter;
}
.infor {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;
  text-align: left;
  font-size: 18px;
  color: #2d2c2c;
  font-family: "SF Pro Display";
}
.nhIDin {
  align-self: stretch;
  position: relative;
  line-height: 28px;
}
.cameraIcon {
  width: 24px;
  position: relative;
  border-radius: 24px;
  position: absolute;
  height: 24px;
}
.cameraWrapper {
  position: absolute;
  top: 160px;
  left: 136px;
  border-radius: 30px;
  background-color: #fff;
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
}
.avatar {
  width: 200px;
  position: relative;
  border-radius: 216px;
  height: 200px;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
}
.avatarImg {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.kchThcNh {
  align-self: stretch;
  position: relative;
  font-size: 12px;
  line-height: 18px;
  color: #676767;
}
.profilePicture {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;
  text-align: left;
  font-size: 18px;
  color: #2d2c2c;
  font-family: "SF Pro Display";
}
.theInput {
  position: relative;
  right: 10px;
}
.icon {
  position: absolute;
}
.buttonPlace {
  display: flex;
  gap: 10px;
  color: white;
}
.buttonBase {
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
  width: 161px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  color: white;
}
.buttonBase1 {
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
  color: white;
}
.button2 {
  width: 213px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  color: #fff;
}
.button {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  text-align: left;
  font-size: 16px;
  color: #3d3d3d;
  font-family: "SF Pro Display";
}
.buttons {
  width: 100%;
  display: flex;
  flex-direction: end;
}
</style>
