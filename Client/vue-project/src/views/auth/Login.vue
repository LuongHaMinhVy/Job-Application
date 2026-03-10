<template>
  <div :class="$style.ngNhp">
    <img :class="$style.decorIcon" alt="" src="../../../public/images/decor.svg" />
    <div :class="$style.content">
      <div :class="$style.loginForm">
        <div :class="$style.title">
          <img :class="$style.logoIcon" alt="Logo" src="../../../public/images/logo.png" />
          <div :class="$style.ngNhpParent">
            <b :class="$style.ngNhp1">Đăng nhập</b>
            <div :class="$style.cngPhtTrin">
              Cùng phát triển con đường sự nghiệp với Rikkei Jobs
            </div>
          </div>
        </div>
        <div :class="$style.emailPassParent">
          <div :class="$style.emailPass">
            <!-- Email or Username field -->
            <div :class="$style.inputField">
              <div :class="$style.inputWithLabel">
                <label :class="$style.label" for="email">Email hoặc Tên người dùng</label>
                <div :class="$style.input">
                  <input
                    id="email"
                    type="text"
                    v-model="email"
                    placeholder="you@company.com hoặc username"
                    :class="$style.text"
                    required
                  />
                </div>
              </div>
            </div>
            <!-- Password field -->
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
          </div>
          <div :class="$style.remember">
            <label :class="$style.checkbox">
              <input type="checkbox" v-model="rememberMe" />
              <span>Ghi nhớ đăng nhập</span>
            </label>
            <a href="#" @click="handleForgotPassword" :class="$style.qunMtKhu">Quên mật khẩu?</a>
          </div>
        </div>
        <div :class="$style.buttonGroup">
          <button :class="$style.buttonBase" @click="handleLogin">
            <b :class="$style.text2">Đăng nhập</b>
          </button>
          <div :class="$style.signUp">
            <span>Bạn chưa có tài khoản?</span>
            <a href="/register" :class="$style.ngK">Đăng ký</a>
          </div>
        </div>
      </div>
    </div>
    <img :class="$style.imgIcon" alt="" src="../../../public/images/anh-dang-ki.jpg" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';
import { signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/firebase/config';
import { getFirestore, collection, query, where, getDocs, doc ,updateDoc} from "firebase/firestore";


const db = getFirestore();
const router = useRouter();
const email = ref('');
const password = ref('');
const rememberMe = ref(false);



async function handleLogin() {
  if (!email.value || !password.value) {
    Swal.fire({
      icon: 'error',
      title: 'Lỗi',
      text: 'Vui lòng điền đầy đủ thông tin.',
    });
    return;
  }

  try {
    let userCredential;
    let user;

    if (email.value.includes('@')) {
      // Login with email
      userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
      user = userCredential.user;
    } else {
      // Login with username (query Firestore)
      const usersRef = collection(db, "users"); // Assuming users are stored in a 'users' collection
      const q = query(usersRef, where("username", "==", email.value)); // Query Firestore by username
      
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        Swal.fire({
          icon: 'error',
          title: 'Lỗi',
          text: 'Không tìm thấy tài khoản với tên người dùng này.',
        });
        return;
      }

      // If user found, get the first user document
      const userDoc = querySnapshot.docs[0];
      user = userDoc.data();

      // Check if password matches (assuming you store hashed passwords and compare here)
      if (password.value !== user.password) {
        Swal.fire({
          icon: 'error',
          title: 'Lỗi',
          text: 'Sai mật khẩu. Vui lòng thử lại.',
        });
        return;
      }

      // Login using Firebase Authentication with the user's email
      userCredential = await signInWithEmailAndPassword(auth, user.email, password.value);
      user = userCredential.user;
    }

    if (user.emailVerified) {
      Swal.fire({
        icon: 'success',
        title: 'Đăng nhập thành công',
        text: 'Chào mừng bạn trở lại!',
      }).then(async () => {
        // Update Firestore to mark the user as email verified
        const userRef = doc(db, "users", user.uid);  // Reference to the user's Firestore document
        await updateDoc(userRef, {
          emailVerified: 1,  // Update the emailVerified field
        });
        localStorage.setItem('authToken', user.uid);
        router.push('/home');
      });
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Email chưa được xác minh',
        text: 'Vui lòng xác minh email của bạn trước khi đăng nhập.',
        showCancelButton: true,
        confirmButtonText: 'Gửi lại email xác minh',
        cancelButtonText: 'Đóng',
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await sendEmailVerification(user);
            Swal.fire({
              icon: 'success',
              title: 'Email xác minh đã được gửi lại',
              text: `Email xác minh đã được gửi đến: ${user.email}. Vui lòng kiểm tra hộp thư của bạn.`,
            });
          } catch (verificationError) {
            console.error('Lỗi khi gửi lại email xác minh:', verificationError);
            Swal.fire({
              icon: 'error',
              title: 'Lỗi',
              text: 'Gửi lại email xác minh thất bại. Vui lòng thử lại.',
            });
          }
        }
      });
    }
  } catch (error) {
    console.error('Lỗi đăng nhập:', error);
    if (error.code === 'auth/user-not-found') {
      Swal.fire({
        icon: 'error',
        title: 'Lỗi',
        text: 'Không tìm thấy tài khoản. Vui lòng kiểm tra lại email hoặc tên người dùng.',
      });
    } else if (error.code === 'auth/wrong-password') {
      Swal.fire({
        icon: 'error',
        title: 'Lỗi',
        text: 'Sai mật khẩu. Vui lòng thử lại.',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Lỗi',
        text: 'Đăng nhập thất bại. Vui lòng thử lại.',
      });
    }
  }
}


async function handleForgotPassword() {
  const { value: emailInput } = await Swal.fire({
    title: 'Nhập email của bạn để khôi phục mật khẩu',
    input: 'email',
    inputPlaceholder: 'you@example.com',
    showCancelButton: true,
    confirmButtonText: 'Gửi yêu cầu',
    cancelButtonText: 'Hủy',
    inputValidator: (value) => {
      if (!value) {
        return 'Vui lòng nhập email';
      }
      return null;
    }
  });

  if (!emailInput) return;

  try {
    await sendPasswordResetEmail(auth, emailInput);
    Swal.fire({
      icon: 'success',
      title: 'Thành công',
      text: 'Đường dẫn khôi phục mật khẩu đã được gửi đến email của bạn.',
    });
  } catch (error) {
    console.error('Lỗi khi gửi email khôi phục mật khẩu:', error);
    Swal.fire({
      icon: 'error',
      title: 'Lỗi',
      text: 'Đã xảy ra lỗi khi gửi email khôi phục mật khẩu. Vui lòng thử lại.',
    });
  }
}

</script>

  <style module>
  .decorIcon {
    position: relative;
    width: 500px;
    height: 400px;
    gap: 0px;
    opacity: 0px;
  }
  .logoIcon {
    width: 138px;
    position: relative;
    height: 32px;
  }
  
  .ngNhp1 {
    position: relative;
    line-height: 40px;
  }
  
  .cngPhtTrin {
    align-self: stretch;
    position: relative;
    font-size: 16px;
    line-height: 24px;
    color: #505050;
    text-align: left;
  }
  
  .ngNhpParent {
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
  }
  
  .label {
    position: relative;
    line-height: 20px;
    font-weight: 500;
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
    flex: 1;
    font-size: 16px;
    color: #555;
    border: none;
    outline: none;
    background: transparent;
    padding: 0;
  }
  
  .content1 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
  }
  
  .input {
    align-self: stretch;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    background-color: #fff;
    border: 1px solid #b5b5b5;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 12px 24px;
    font-size: 16px;
    color: #919191;
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
  }
  
  .eyeSlashIcon {
    width: 16px;
    position: relative;
    height: 16px;
  }
  
  .input1 {
    align-self: stretch;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    background-color: #fff;
    border: 1px solid #b5b5b5;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 12px 24px;
    gap: 8px;
    font-size: 16px;
    color: #919191;
  }
  
  .emailPass {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 16px;
  }
  
  .checkboxBase {
    width: 20px;
    position: relative;
    border-radius: 6px;
    background-color: #fff;
    border: 1px solid #b5b5b5;
    box-sizing: border-box;
    height: 20px;
    overflow: hidden;
    flex-shrink: 0;
  }
  
  .checkbox1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  
  .text2 {
    position: relative;
    line-height: 24px;
  }
  
  .checkbox {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
  }
  
  .qunMtKhu {
    position: relative;
    line-height: 24px;
    font-weight: 600;
    color: #bc2228;
  }
  
  .remember {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    font-size: 16px;
    color: #848484;
  }
  
  .emailPassParent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 16px;
    font-size: 14px;
    color: #3d3d3d;
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
  .button {
    align-self: stretch;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #f2f4f7;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  
  .ngK {
    position: relative;
    line-height: 24px;
    color: #bc2228;
  }
  
  .signUp {

    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 8px;
    color: #848484;
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
  
  .loginForm {

    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 32px;

  
  }
  
  .content {
    position: absolute;
    top: calc(50% - 258px);
    left: calc(25% - 258px);
    width: 500px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
  .ngK1 {
    position: relative;
    line-height: 24px;
    color: #ab1f24;
  }
  
  .signUp1 {
    position: absolute;
    top: 714px;
    left: 249px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 8px;
    font-size: 16px;
    color: #676767;
  }
  
  .ngNhp {
    width: 100%;
  top: 0;
  left: 0;
  position: fixed;
    background-color: #fff;
    height: 960px;
    overflow: hidden;
    text-align: left;
    font-size: 32px;
    color: #000;
    font-family: "SF Pro Display";
  }
  </style>
  