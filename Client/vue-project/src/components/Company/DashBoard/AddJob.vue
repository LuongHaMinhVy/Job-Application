<template>
    <div :class="$style.content">
        <div :class="$style.labelTextWrapper">
            <div :class="$style.labelText">
              <b>Tiêu đề tuyển dụng:</b>
            </div>
            <input :class="$style.input" placeholder="Nhập tiêu đề tuyển dụng" />
          </div>

          <div :class="$style.inputField">
            <div :class="$style.label">Lương (VND)</div>
            <input type="number" :class="$style.input" placeholder="Nhập mức lương" />
          </div>

          <div :class="$style.inputField">
            <div :class="$style.label">Kinh nghiệm</div>
            <select :class="$style.input">
              <option value="">Dưới 1 năm kinh nghiệm</option>
              <option value="1-3">1-3 năm kinh nghiệm</option>
              <option value="3-5">3-5 năm kinh nghiệm</option>
              <option value="5+">Trên 5 năm kinh nghiệm</option>
            </select>
          </div>
          <div :class="$style.inputField">
            <div :class="$style.label">Loại công việc</div>
            <select :class="$style.input">
              <option value="fulltime">Full-time</option>
              <option value="parttime">Part-time</option>
            </select>
          </div>
      
          <div :class="$style.inputField">
            <div :class="$style.label">Trình độ chuyên môn</div>
            <select :class="$style.input">
              <option value="fresher">Fresher</option>
              <option value="junior">Junior</option>
              <option value="mid-level">Mid-level</option>
              <option value="senior">Senior</option>
              <option value="lead">Lead</option>
            </select>
          </div>

          <div :class="$style.inputField">
            <div :class="$style.label">Địa chỉ cơ quan</div>
            <input :class="$style.input" placeholder="Nhập địa chỉ cơ quan" />
          </div>

          <div :class="$style.inputField">
            <div :class="$style.label">Ngày hết hạn</div>
            <input type="date" :class="$style.input" />
          </div>
      <div :class="$style.inputField">
        <div :class="$style.label">Trạng thái công việc</div>
        <select v-model="job.status" :class="$style.input">
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      
      <div :class="$style.inputField">
        <div :class="$style.label">Số lượng tuyển</div>
        <input type="number" v-model="job.quantity" :class="$style.input" placeholder="Nhập số lượng tuyển" />
      </div>
  
      <div :class="$style.inputField">
        <div :class="$style.label">Giới tính yêu cầu</div>
        <select v-model="job.gender" :class="$style.input">
          <option value="any">Không yêu cầu</option>
          <option value="male">Nam</option>
          <option value="female">Nữ</option>
        </select>
      </div>
  
      <div :class="$style.inputField">
        <div :class="$style.label">Loại tiền tệ</div>
        <input v-model="job.currencyType" :class="$style.input" placeholder="Nhập loại tiền tệ (VD: VND)" />
      </div>
  
      <div :class="$style.inputField">
        <div :class="$style.label">Yêu cầu công việc</div>
        <textarea v-model="job.requirements" :class="$style.input" placeholder="Nhập yêu cầu công việc"></textarea>
      </div>
  
      <div :class="$style.inputField">
        <div :class="$style.label">Thời gian làm việc</div>
        <input v-model="job.workingHours" :class="$style.input" placeholder="VD: 9:00 - 17:00" />
      </div>
  
      <div :class="$style.inputField">
        <div :class="$style.label">Quyền lợi</div>
        <textarea v-model="job.benefits" :class="$style.input" placeholder="Nhập quyền lợi công việc"></textarea>
      </div>

      <button :class="$style.addButton" @click="handleAddJob">Thêm công việc</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        job: {
          id: null,
          enterpriseId: null,
          title: '',
          salary: '',
          exp: '',
          createAt: new Date().toISOString().split("T")[0],
          expiredAt: '',
          des: '',
          status: 'active',
          quantity: 1,
          gender: 'any',
          level: '',
          jobType: '',
          currencyType: 'VND',
          location: '',
          requirements: '',
          workingHours: '',
          benefits: ''
        }
      };
    },
    methods: {
      async handleAddJob() {
        try {
          const response = await fetch("http://localhost:8080/job", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.job)
          });
          if (response.ok) {
            alert("Công việc đã được thêm thành công!");
          } else {
            alert("Có lỗi xảy ra khi thêm công việc.");
          }
        } catch (error) {
          console.error("Error adding job:", error);
          alert("Có lỗi xảy ra khi thêm công việc.");
        }
      }
    }
  };
  </script>
  
  <style module>.labelText {
    position: relative;
    line-height: 24px;
}
    .labelTextWrapper {
          position: absolute;
          top: 0px;
          left: 0px;
          border-bottom: 1px solid #ddd;
          box-sizing: border-box;
          width: 982px;
          height: 72px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          padding: 4px 24px;
          font-size: 16px;
          color: #111;
    }
    .edit2Icon {
          width: 16px;
          position: relative;
          height: 16px;
    }
    .tiuTuyn {
          position: relative;
          line-height: 20px;
    }
    .tiu {
          position: absolute;
          top: 96px;
          left: 104px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          gap: 8px;
    }
    .tiuTd {
          position: absolute;
          top: 124px;
          left: 104px;
          border-bottom: 1px solid #ddd;
          box-sizing: border-box;
          width: 775px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          padding: 0px 0px 12px;
          font-size: 16px;
          color: #3d3d3d;
    }
    .tiu1 {
          align-self: stretch;
          border-bottom: 1px solid #ddd;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          padding: 0px 0px 12px;
          gap: 4px;
    }
    .label {
          position: relative;
          line-height: 20px;
          font-weight: 500;
    }
    .calendar2Icon {
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
    .input {
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
          font-size: 16px;
          color: #3d3d3d;
    }
    .inputWithLabel {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 6px;
    }
    .inputFieldBase {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
    }
    .inputField {
          width: 377px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
    }
    .inputFieldWrapper {
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          color: #676767;
          font-family: Inter;
    }
    .ngnhNgh {
          position: absolute;
          top: 2524px;
          left: 104px;
          width: 775px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 16px;
    }
    .content2 {
          flex: 1;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
    }
    .inputField1 {
          position: absolute;
          top: 0px;
          left: 0px;
          width: 377px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
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
    }
    .inputField2 {
          position: absolute;
          top: 86px;
          left: 0px;
          width: 377px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
    }
    .inputField3 {
          position: absolute;
          top: 306px;
          left: 0px;
          width: 377px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
    }
    .inputField4 {
          position: absolute;
          top: 440px;
          left: 0px;
          width: 377px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
    }
    .inputFieldBase5 {
          position: absolute;
          top: calc(50% + 228px);
          left: calc(50% - 387.5px);
          width: 775px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
    }
    .inputField5 {
          position: absolute;
          top: 172px;
          left: 0px;
          width: 377px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
    }
    .inputField6 {
          position: absolute;
          top: 0px;
          left: 397px;
          width: 378px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
    }
    .inputField7 {
          position: absolute;
          top: 86px;
          left: 397px;
          width: 378px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
    }
    .inputField8 {
          position: absolute;
          top: 306px;
          left: 397px;
          width: 378px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
    }
    .inputField9 {
          position: absolute;
          top: 440px;
          left: 397px;
          width: 378px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
    }
    .mcLng {
          position: absolute;
          top: 266px;
          left: 0px;
          font-size: 16px;
          line-height: 24px;
          font-weight: 500;
          font-family: 'SF Pro Display';
          color: #848484;
    }
    .khuVcLm {
          position: absolute;
          top: 400px;
          left: 0px;
          font-size: 16px;
          line-height: 24px;
          font-weight: 500;
          font-family: 'SF Pro Display';
          color: #848484;
    }
    .thngTinTuynDng {
          align-self: stretch;
          position: relative;
          height: 596px;
          color: #676767;
          font-family: Inter;
    }
    .thngTinChung {
          position: absolute;
          top: 192px;
          left: 104px;
          width: 775px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 16px;
    }
    .heading {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          gap: 4px;
    }
    .icoutlineFormatBoldIcon {
          width: 20px;
          position: relative;
          height: 20px;
          overflow: hidden;
          flex-shrink: 0;
    }
    .icon {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 4px;
    }
    .tiu3 {
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          padding: 0px 0px 12px;
    }
    .thamGiaPht {
          margin-bottom: 0px;
    }
    .thamGiaPhtTrinDNBack {
          margin: 0;
          font-family: inherit;
          font-size: inherit;
          padding-left: 21px;
    }

    .text11 {
            resize: none;
          align-self: stretch;
          position: relative;
          border: 1px solid #ddd;
          box-sizing: border-box;
          height: 400px;
          overflow: hidden;
          flex-shrink: 0;
          font-size: 16px;
    }
    .mT {
          position: absolute;
          top: 868px;
          left: 104px;
          width: 775px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
    }
    .mT1 {
          position: absolute;
          top: 1332px;
          left: 104px;
          width: 775px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
    }
    .mT2 {
          position: absolute;
          top: 1796px;
          left: 104px;
          width: 775px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
    }
    .text14 {
          align-self: stretch;
          position: relative;
          border: 1px solid #ddd;
          box-sizing: border-box;
          height: 200px;
          overflow: hidden;
          flex-shrink: 0;
          font-size: 16px;
    }
    .mT3 {
          position: absolute;
          top: 2260px;
          left: 104px;
          width: 775px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
    }
    .content {
          width: 100%;
          position: relative;
          border-radius: 16px;
          background-color: #fff;
          height: 2690px;
          overflow: hidden;
          text-align: left;
          font-size: 14px;
          color: #2d2c2c;
          font-family: 'SF Pro Display';
    }

</style>