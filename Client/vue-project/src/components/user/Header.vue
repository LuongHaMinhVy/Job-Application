<template>
      <div :class="$style.header">
        <div :class="$style.logoMenu">
          <!-- Logo -->
          <router-link to="/home">
            <img :class="$style.logoIcon" alt="Logo" src="../../../public/images/logo.png" />
          </router-link>
    
          <!-- Navigation Links -->
          <div :class="$style.button">
            <router-link to="/home"
              ><button :class="$style.menuButton">Trang chủ</button></router-link
            >
            <router-link to="/candidates"
              ><button :class="$style.menuButton">Ứng viên</button></router-link
            >
            <router-link to="/joblist"
              ><button :class="$style.menuButton">Việc làm</button></router-link
            >
            <router-link to="/profile"
              ><button :class="$style.menuButton">Hồ sơ & CV</button></router-link
            >
            <router-link to="/about"
              ><button :class="$style.menuButton">Về chúng tôi</button></router-link
            >
            <router-link to="/contact"
              ><button :class="$style.menuButton">Liên hệ</button></router-link
            >
          </div>
        </div>
    
        <div :class="$style.button">
          <div :class="$style.language">
            <img
              :class="$style.vnIcon"
              alt="Language Icon"
              src="../../../public/images/vn.svg"
            />
            <div :class="$style.vni">
              <select :class="$style.dropdown">
                <option value="vn">VN</option>
                <option value="en">EN</option>
              </select>
            </div>
          </div>
    
          <!-- User Dropdown or Auth Buttons -->
          <div v-if="authToken && user" :class="$style.userDropdown">
                <img :src="user.avatar" :alt="user.userName" :class="$style.userAvatar" />
                <div :class="$style.userInfo">
                  <div :class="$style.userInfo1">
                    <img :src="user.avatar" :alt="user.userName" :class="$style.userAvatar" />
                    <div :class="$style.userInfo2">
                      <p>{{ user.userName }}</p>
                      <p>{{ user.email }}</p>
                    </div>
                  </div>
                  <div :class="$style.userInfo3">
                    <a href="/profile" :class="$style.userInfo5">
                      <img src="../../../public//images/profile.svg" alt="Profile" :class="$style.icon" />
                      Thông tin cá nhân
                    </a>
                    <a href="/settings" :class="$style.userInfo5">
                      <img src="../../../public/images/setting.svg" alt="Settings" :class="$style.icon" />
                      Cài đặt
                    </a>
                  </div>
                  <span @click="handleLogout" :class="$style.userInfo4">
                    <img src="../../../public/images/logout.svg" alt="Logout" :class="$style.icon" />
                    Đăng xuất
                  </span>
                </div>
              </div>
              
              
          <div v-else :class="$style.navigationActions">
            <router-link to="/register"
              ><button :class="$style.signupButton">Đăng ký</button></router-link
            >
            <router-link to="/login"
              ><button :class="$style.loginButton">Đăng nhập</button></router-link
            >
          </div>
        </div>
      </div>
    </template>
    
    <script setup>
    import { ref, computed, onMounted } from "vue";
    import Swal from "sweetalert2";
    import { useStore } from "vuex";
    
    const store = useStore();
    const authToken = computed(() => localStorage.getItem("authToken") || null);
    console.log(authToken.value);
    const user = computed(() => store.getters.getUser);
    
    onMounted(() => {
      store.dispatch("fetchUser", authToken.value);
      console.log(user.value);
      
    });
    
    
    function handleLogout() {
      Swal.fire({
        icon: "warning",
        title: "Bạn có chắc chắn muốn đăng xuất?",
        showCancelButton: true,
        confirmButtonText: "Đăng xuất",
        cancelButtonText: "Hủy",
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem("authToken");
          Swal.fire("Đã đăng xuất!", "", "success").then(() => {
            location.reload();
          });
        }
      });
    }
    </script>
    
    <style module>
    /* Adjusting dropdown style for user info */
    .header .userDropdown {
          display: flex;
          align-items: center;
          position: relative;
          cursor: pointer;
        }
        
        .header .userAvatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-right: 10px;
        }
        
        .header .userInfo {
          display: none; /* Hidden by default */
          position: absolute;
          top: 100%;
          right: 0;
          background-color: #fff;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 10px;
          width: 250px; /* Adjust as needed */
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
          z-index: 10;
        }
        .userDropdown {
          display: flex;
          align-items: center;
          position: relative;
          cursor: pointer;
        }
        
        .header .userAvatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-right: 10px;
        }
        
        .header .userInfo {
          display: none; /* Hidden by default */
          position: absolute;
          top: 100%;
          right: 0;
          background-color: #fff;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 10px;
          width: 200px; /* Adjust as per requirement */
          z-index: 10;
        }
        .userInfo1{
          display: flex;
          align-items: center;
       
          width: 100%;
          border-bottom:1px solid #ddd;
         
        }
        .userInfo2{
          display: flex;
          flex-direction: column;
        }
        .userInfo3{
          display: flex;
          flex-direction: column;
          width: 100%;
    
          border-bottom:1px solid #ddd;
          text-align: center;
          justify-content: center;
          margin-top: 20px;
     
        }
        .userInfo3 a {
          color: #000;
          text-decoration: none;
        }
        .userInfo4{
          display: flex;
          padding: 10px;
        
        }
        .userInfo4:hover {
          background-color: #ececec;
          transition: background-color 0.3s ease;
          border-radius:5px ;
          
        }
        
        .userInfo5 {
          padding: 5px 0px;
          border-radius: 5px;
          transition: background-color 0.3s ease;
          margin-top: -20px;
        }
        .userInfo5:hover {
          background-color: #ececec;
          transition: background-color 0.3s ease;
    
          border-radius:5px ;
        }
        .header .userDropdown:hover .userInfo {
          display: block; /* Show on hover */
        }
        
        .header .userInfo p {
          margin: 0;
          font-size: 14px;
          color: #333;
        }
        
      
        /* Adding spacing and alignment for profile options */
       
        .header .userInfo p:first-of-type {
          font-weight: bold;
          font-size: 18px;
        }
        
        .header .userInfo p:last-of-type {
          font-size: 12px;
          color: #777;
        }
        .header .userDropdown:hover .userInfo {
          display: block; /* Show on hover */
        }
        
        .userInfo1 {
          display: flex;
          align-items: center;
          width: 100%;
          border-bottom: 1px solid #ddd;
          padding-bottom: 10px;
        }
        
        .userInfo2 {
          display: flex;
          flex-direction: column;
          margin-left: 10px;
        }
        
        .userInfo3 {
          display: flex;
          flex-direction: column;
          width: 100%;
          text-align: center;
          margin-top: 15px;
          border-bottom: 1px solid #ddd;
          padding-bottom: 10px;
        }
        
        .userInfo3 a {
          color: #000;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px;
          border-radius: 5px;
          transition: background-color 0.3s ease;
        }
        
        .userInfo4 {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
          color: #f44336;
          cursor: pointer;
        }
        
        .userInfo4:hover,
        .userInfo5:hover {
          background-color: #f2f2f2;
        }
        
        .userInfo4 .icon,
        .userInfo5 .icon {
          width: 16px;
          height: 16px;
          margin-right: 8px;
        }
        
        .userInfo5 {
          color: #000;
          text-align: left;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 5px 10px;
          margin-top: 5px;
          border-radius: 5px;
          cursor: pointer;
        }
        
        .userInfo5 p:first-of-type {
          font-weight: bold;
          font-size: 16px;
        }
        
        .userInfo5 p:last-of-type {
          font-size: 12px;
          color: #777;
        }
        
        
    
    .logoIcon {
      width: 138px;
      position: relative;
      height: 32px;
    }
    
    .menuButton {
      background: none;
      border: none;
      cursor: pointer;
      font-weight: 600;
      padding: 4px 12px;
      font-size: 16px;
      transition: color 0.3s;
    }
    
    .menuButton:hover {
      color: #ab1f24;
    }
    
    .dropdown {
      border: none;
      background: transparent;
      cursor: pointer;
      font-weight: 600;
      font-size: 16px;
    }
    
    .signupButton {
      border-radius: 8px;
      border: 1px solid #ccc;
      background-color: #fff;
      cursor: pointer;
      padding: 10px 16px;
      font-size: 14px;
      color: #3d3d3d;
      transition: background-color 0.3s, color 0.3s;
    }
    
    .signupButton:hover {
      background-color: #f2f2f2;
    }
    
    .loginButton {
      border-radius: 8px;
      background-color: #ab1f24;
      border: 1px solid #ab1f24;
      cursor: pointer;
      padding: 10px 16px;
      font-size: 14px;
      color: #fff;
      transition: background-color 0.3s, border-color 0.3s;
    }
    
    .loginButton:hover {
      background-color: #8a171c;
      border-color: #8a171c;
    }
    
    .vni {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 4px;
    }
    
    .language {
      border-right: 1px solid #ccc;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      padding: 0px 16px 0px 0px;
      gap: 12px;
    }
    
    .vnIcon {
      width: 20px;
      position: relative;
      height: 20px;
      overflow: hidden;
      flex-shrink: 0;
    }
    
    .vn {
      position: relative;
      line-height: 20px;
      font-weight: 600;
    }
    
    .navigationActions {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 12px;
    }
    
    .button {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 12px;
    }
    
    .logoMenu {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 48px;
    }
    
    .header {
      width: 100%;
      position: fixed;
      z-index: 1000;
      top: 0;
      background-color: #fff;
      border-bottom: 1px solid #ddd;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 20px 32px;
      font-size: 16px;
      color: #3d3d3d;
      font-family: "SF Pro Display";
    }
    </style>
    