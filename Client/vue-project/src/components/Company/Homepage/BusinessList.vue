<template>
          <b :class="$style.Tagname">Danh sách doanh nghiệp</b>
        <div :class="$style.infoTag">
    Hãy xem và cập nhật doanh nghiệp của bạn
          </div>
        <div :class="$style.row">
          <div :class="$style.tableName">
            <div :class="$style.stt">STT</div>
          </div>
          <div :class="$style.divider" />
          <div :class="$style.tableName1">
            <div :class="$style.stt">Tên Doanh nghiệp</div>
          </div>
          <div :class="$style.divider" />
          <div :class="$style.tableName1">
            <div :class="$style.stt">Trạng thái</div>
          </div>
          <div :class="$style.divider" />
          <div :class="$style.tableName1">
            <div :class="$style.stt">Action</div>     
          </div>
        </div>
    
        <!-- Table Rows -->
        <div v-for="(enterprise, index) in enterprises" :key="enterprise.id" :class="$style.row">
          <div :class="$style.tableName">
            <div :class="$style.stt">{{ index + 1 }}</div>
          </div>
          <div :class="$style.divider" />
          <div :class="$style.tableName1">
            <div :class="$style.stt">{{ enterprise.enterprizeName }}</div>
          </div>
          <div :class="$style.divider" />
          <div :class="$style.tableName1">
            <div :class="$style.stt">{{ enterprise.status === 'active' ? 'Đã xác nhận' : 'Chờ xác nhận' }}</div>
          </div>        
          <div :class="$style.divider" />
          <div :class="$style.tableName1">
            <div :class="$style.stt">
              <button :class="$style.buttonBase" @click="editEnterprise(enterprise.id)">Edit</button>
              <button :class="$style.buttonBase1" @click="deleteEnterprise(enterprise.id)">Delete</button>
            </div>
          </div>
        </div>
    </template>
    
    <script setup>
    import { onMounted, computed } from 'vue';
    import { useStore } from 'vuex';
    
    const store = useStore();
    onMounted(() => {
      store.dispatch('fetchEnterprises');
    });

    const enterprises = computed(() => store.getters['allEnterprises']);

    const editEnterprise = (id) => {

      console.log("Edit enterprise with ID:", id);
    };
    
    const deleteEnterprise = (id) => {

      store.dispatch('deleteEnterprise', id);
    };
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
          .stt {
          position: relative;
          line-height: 20px;
          display: flex;  
          font-weight: 600;
          gap: 12px;
    }
          .tableName {
                width: 56px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                padding: 12px 4px;
                box-sizing: border-box;
          }
          .divider {
                width: 1px;
                position: relative;
                border-right: 1px solid #eababc;
                box-sizing: border-box;
                height: 17px;
          }
          .tableName1 {
                flex: 1;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                padding: 12px 16px;
          }
          .row {
                width: 100%;
                position: relative;
                background-color: #fff6f7;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                text-align: left;
                font-size: 14px;
                color: #ab1f24;
                font-family: 'SF Pro Display';
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
    
    </style>