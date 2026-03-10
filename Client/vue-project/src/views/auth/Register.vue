<template>
  <div :class="$style.ngK">
    <div :class="$style.content">
      <div :class="$style.loginForm">
        <div :class="$style.title">
          <img
            :class="$style.logoIcon"
            alt="Logo"
            src="../../../public/images/logo.png"
          />
          <div :class="$style.ngKParent">
            <b :class="$style.ngK1">Đăng ký</b>
            <div :class="$style.cngPhtTrin">
              Cùng phát triển con đường sự nghiệp với Rikkei Jobs
            </div>
          </div>
        </div>
        <div :class="$style.emailPassWrapper">
          <div :class="$style.emailPass">
            <!-- userName field -->
            <div :class="$style.inputField">
              <div :class="$style.inputWithLabel">
                <label :class="$style.label">Tên đăng nhập</label>
                <div :class="$style.input1">
                  <input
                    id="userName"
                    type="text"
                    v-model="userName"
                    placeholder="Tên đăng nhập"
                    :class="$style.text"
                    required
                  />
                </div>
              </div>
            </div>
            <!-- Email field -->
            <div :class="$style.inputField">
              <div :class="$style.inputWithLabel">
                <label :class="$style.label" for="email">Email</label>
                <div :class="$style.input">
                  <input
                    id="email"
                    type="email"
                    v-model="email"
                    placeholder="you@company.com"
                    :class="$style.text"
                    required
                  />
                </div>
              </div>
            </div>

            <div :class="$style.inputField">
              <div :class="$style.inputWithLabel">
                <label :class="$style.label" for="password">Mật khẩu</label>
                <div :class="$style.input1">
                  <input
                    id="password"
                    type="password"
                    v-model="password"
                    placeholder="**********"
                    :class="$style.text"
                    required
                  />
                  <img
                    :class="$style.eyeSlashIcon"
                    alt="Toggle visibility"
                    src="../../../public/images/eye-slash.svg"
                  />
                </div>
              </div>
            </div>
            <!-- Confirm password field -->
            <div :class="$style.inputField">
              <div :class="$style.inputWithLabel">
                <label :class="$style.label" for="confirmPassword"
                  >Xác nhận mật khẩu</label
                >
                <div :class="$style.input1">
                  <input
                    id="confirmPassword"
                    type="password"
                    v-model="confirmPassword"
                    placeholder="**********"
                    :class="$style.text"
                    required
                  />
                  <img
                    :class="$style.eyeSlashIcon"
                    alt="Toggle visibility"
                    src="../../../public/images/eye-slash.svg"
                  />
                </div>
              </div>
            </div>
            <!-- Role select field -->
           
          </div>
        </div>
        <div :class="$style.buttonGroup">
          <button :class="$style.buttonBase" @click="handleRegister">
            <b :class="$style.text3">Đăng ký</b>
          </button>
        </div>
        <div :class="$style.text4">
          Bạn đã có tài khoản?
          <a :class="$style.link" href="/login">Đăng nhập</a>
        </div>
      </div>
    </div>
    <img
      :class="$style.imgIcon"
      alt=""
      src="../../../public/images/anh-dang-nhap.png"
    />
    <img
      :class="$style.decorIcon"
      alt=""
      src="../../../public/images/decor.svg"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { auth } from "@/firebase/config";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import Swal from "sweetalert2";

import { useRouter } from "vue-router";
import { doc, getFirestore, setDoc } from "firebase/firestore";


const route = useRouter();
const email = ref("");
const userName = ref("");
const password = ref("");
const confirmPassword = ref("");
const db = getFirestore();
async function handleRegister() {
  if (
    !email.value ||
    !password.value ||
    !confirmPassword.value ||
    !userName.value ||
    !role.value
  ) {
    Swal.fire({
      icon: "error",
      title: "Lỗi",
      text: "Vui lòng điền đầy đủ thông tin.",
    });
    return;
  }
  if (password.value.length < 6) {
    Swal.fire({
      icon: "error",
      title: "Lỗi",
      text: "Mật khẩu phải có ít nhất 6 ký tự.",
    });
    return;
  }
  if (password.value !== confirmPassword.value) {
    Swal.fire({
      icon: "error",
      title: "Lỗi",
      text: "Mật khẩu và xác nhận mật khẩu không khớp.",
    });
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    const user = userCredential.user;
    await sendEmailVerification(user);

    Swal.fire({
      icon: "success",
      title: "Đăng ký thành công",
      text: "Email xác minh đã được gửi đến: " + email.value,
    });

    const userData = {
      id: user.uid,
      firstName: null,
      lastName: null,
      email: user.email,
      password: password.value,
      userName: userName.value,
      status: false,
      createAt: new Date().toISOString(),
      avatar: "../../../public/images/anh-dai-dien-default.jpg",
      address: null,
      phone: null,
      role: "USER",
      emailVerified: 0,
      permissionList: ["read", "write"],
      dateOfBirth: null,
      gender: null,
    };

    await setDoc(doc(db, "users", user.uid), userData);
    route.push("/login");
  } catch (error) {
    console.error("Lỗi đăng ký:", error);
    if (error.code === "auth/email-already-in-use") {
      Swal.fire({
        icon: "error",
        title: "Lỗi",
        text: "Tài khoản đã được sử dụng. Vui lòng thử với email khác.",
      });
    } else if (error.code === "auth/invalid-email") {
      Swal.fire({
        icon: "error",
        title: "Lỗi",
        text: "Email không hợp lệ. Vui lòng nhập đúng định dạng.",
      });
    } else if (error.code === "auth/weak-password") {
      Swal.fire({
        icon: "error",
        title: "Lỗi",
        text: "Mật khẩu quá yếu. Vui lòng chọn mật khẩu mạnh hơn.",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Lỗi",
        text: "Đăng ký thất bại. Vui lòng thử lại.",
      });
    }
  }
}
</script>

<style module>
.logoIcon {
  width: 138px;
  position: relative;
  height: 32px;
}
.ngK1 {
  position: relative;
  line-height: 40px;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 8px;
}

.cngPhtTrin {
  align-self: stretch;
  position: relative;
  font-size: 16px;
  line-height: 24px;
  color: #505050;
  text-align: left;
}
.ngKParent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
}
.title {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 48px;
  text-align: center;
  text-align: left;
  margin-bottom: 20px;
}
.label {
  position: relative;
  line-height: 20px;
  font-weight: 500;
  font-size: 14px;
}
.smsIcon {
  width: 20px;
  position: relative;
  height: 20px;
}
.text {
  flex: 1;
  position: relative;
  line-height: 24px;
}
.content1 {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
}

.inputWithLabel {
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
  margin-bottom: 16px;
}
.eyeSlashIcon {
  width: 16px;
  position: relative;
  height: 16px;
}

.emailPass {
  position: relative;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1000px;
}
.emailPassWrapper {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 14px;
  color: #3d3d3d;
}
.text3 {
  position: relative;
  line-height: 24px;
}
.buttonBase {
  flex: 1;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  background-color: #bc2228;
  border: 1px solid #bc2228;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
}
.button {
  align-self: stretch;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #f2f4f7;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}
.ngK2 {
  position: relative;
  width: 100%;
  line-height: 24px;
  color: #bc2228;
}
.signUp {
  display: none;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
}
.buttonGroup {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  font-size: 16px;
  color: #fff;
}

.content {
  position: absolute;
  width: 600px;
  left: 120px;
  padding: 4rem;
  height: Hug (518px) px;
  top: 50px;
  left: 200px;
  opacity: 0px;
}
.imgIcon {
  position: absolute;
  right: -0.4px;
  height: 100vh;
  overflow: hidden;
  object-fit: contain;
  width: 50%;
  object-fit: cover;
}
.decorIcon {
  position: relative;
  width: 500px;
  height: 400px;
  gap: 0px;
  opacity: 0px;
}

.ngK {
  width: 100%;
  height: 100vh;
  background-color: #fff;
  font-family: "SF Pro Display", sans-serif;
  color: #000;
  font-size: 32px;
  left: 0;
  top: 0;
  position: fixed;
}
.loginForm {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.emailPassWrapper {
  width: 100%;
  margin-bottom: 20px;
}
.input,
.input1 {
  align-self: stretch;
  border-radius: 8px;
  background-color: #ffffff;
  border: 1px solid #dcdcdc;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 12px 18px;
  font-size: 16px;
  color: #333;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.input:hover,
.input1:hover {
  border-color: #b5b5b5;
}

.input:focus-within,
.input1:focus-within {
  border-color: #bc2228;
  box-shadow: 0px 0px 8px rgba(188, 34, 40, 0.2);
}

.text {
  flex: 1;
  font-size: 16px;
  color: #555;
  border: none;
  outline: none;
  background: transparent;
  padding: 0;
}

.input::placeholder,
.input1::placeholder {
  color: #aaa;
}

.buttonBase {
  width: 100%;
  border-radius: 8px;
  background-color: #bc2228;
  border: none;
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;
  padding: 12px 20px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.buttonBase:hover {
  background-color: #a51f22;
}

.buttonBase:active {
  transform: scale(0.98);
}

.buttonBase:focus {
  outline: 2px solid #a51f22;
}
.text4 {
  font-size: 14px;
  color: #333;
  margin-bottom: 20px;
  font-weight: 500;
  text-align: center;
  width: 100%;
  text-decoration: none;
  padding: 12px 20px;
}
</style>
