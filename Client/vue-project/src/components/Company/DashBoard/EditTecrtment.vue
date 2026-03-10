<template>
    <div :class="$style.content">
          <div :class="$style.labelTextWrapper">
                <div :class="$style.labelText">
                      <b>Nội dung tuyển dụng:</b>
                      <span> Software Engineer</span>
                </div>
          </div>
          <div :class="$style.tiu">
                <img :class="$style.edit2Icon" alt="" src="../../../../public/images/dashboard-vuesax-bold-edit-2.svg" />
                <b :class="$style.tiuTuyn">Tiêu đề tuyển dụng</b>
          </div>
          <div :class="$style.tiuTd">
                <div :class="$style.labelText">Software Engineer</div>
          </div>
          <div :class="$style.ngnhNgh">
                <div :class="$style.tiu1">
                      <img :class="$style.edit2Icon" alt="" src="../../../../public/images/dashboard-vuesax-bold-edit-2.svg" />
                      <b :class="$style.tiuTuyn">Thông tin nhận CV</b>
                </div>
                <div :class="$style.inputFieldWrapper">
                      <div :class="$style.inputField">
                            <div :class="$style.inputFieldBase">
                                  <div :class="$style.inputWithLabel">
                                        <div :class="$style.label">Hạn nhận CV</div>
                                        <div :class="$style.input">
                                              <div :class="$style.content1">
                                                    <img :class="$style.calendar2Icon" alt="" src="/images/dashboard-vuesax-bold-calendar-2.svg" />
                                                    <div :class="$style.text">30/10/2024</div>
                                              </div>
                                        </div>
                                  </div>
                            </div>
                      </div>
                </div>
          </div>
          <div :class="$style.thngTinChung">
                <div :class="$style.tiu1">
                      <img :class="$style.edit2Icon" alt="" src="/images/dashboard-vuesax-bold-clipboard-text.svg" />
                      <b :class="$style.tiuTuyn">Thông tin chung</b>
                </div>
                <div :class="$style.thngTinTuynDng">
                      <div :class="$style.inputField1">
                            <div :class="$style.inputFieldBase">
                                  <div :class="$style.inputWithLabel">
                                        <div :class="$style.label">Số lượng tuyển</div>
                                        <div :class="$style.input">
                                              <div :class="$style.content2">
                                                    <div :class="$style.text">3</div>
                                              </div>
                                        </div>
                                  </div>
                            </div>
                      </div>
                      <div :class="$style.inputField2">
                            <div :class="$style.inputFieldBase">
                                  <div :class="$style.inputWithLabel">
                                        <div :class="$style.label">Giới tính</div>
                                        <div :class="$style.input2">
                                              <div :class="$style.content2">
                                                    <div :class="$style.text">Không yêu cầu</div>
                                              </div>
                                              <img :class="$style.edit2Icon" alt="" src="../../../../public//images/dashboard-vuesax-outline-arrow-down.svg" />
                                        </div>
                                  </div>
                            </div>
                      </div>
                      <div :class="$style.inputField3">
                            <div :class="$style.inputFieldBase">
                                  <div :class="$style.inputWithLabel">
                                        <div :class="$style.label">Loại tiền tệ</div>
                                        <div :class="$style.input2">
                                              <div :class="$style.content2">
                                                    <div :class="$style.text">VND</div>
                                              </div>
                                              <img :class="$style.edit2Icon" alt="" src="../../../../public//images/dashboard-vuesax-outline-arrow-down.svg" />
                                        </div>
                                  </div>
                            </div>
                      </div>
                      <div :class="$style.inputField4">
                            <div :class="$style.inputFieldBase">
                                  <div :class="$style.inputWithLabel">
                                        <div :class="$style.label">Tỉnh</div>
                                        <div :class="$style.input2">
                                              <div :class="$style.content2">
                                                    <div :class="$style.text">Hà Nội</div>
                                              </div>
                                              <img :class="$style.edit2Icon" alt="" src="../../../../public//images/dashboard-vuesax-outline-arrow-down.svg" />
                                        </div>
                                  </div>
                            </div>
                      </div>
                      <div :class="$style.inputFieldBase5">
                            <div :class="$style.inputWithLabel">
                                  <div :class="$style.label">Địa chỉ cụ thể</div>
                                  <div :class="$style.input">
                                        <div :class="$style.content2">
                                              <div :class="$style.text">Nhập địa chỉ làm việc cụ thể</div>
                                        </div>
                                  </div>
                            </div>
                      </div>
                      <div :class="$style.inputField5">
                            <div :class="$style.inputFieldBase">
                                  <div :class="$style.inputWithLabel">
                                        <div :class="$style.label">Loại công việc</div>
                                        <div :class="$style.input2">
                                              <div :class="$style.content2">
                                                    <div :class="$style.text">Thực tập sinh</div>
                                              </div>
                                              <img :class="$style.edit2Icon" alt="" src="../../../../public//images/dashboard-vuesax-outline-arrow-down.svg" />
                                        </div>
                                  </div>
                            </div>
                      </div>
                      <div :class="$style.inputField6">
                            <div :class="$style.inputFieldBase">
                                  <div :class="$style.inputWithLabel">
                                        <div :class="$style.label">Số lượng tuyển</div>
                                        <div :class="$style.input2">
                                              <div :class="$style.content2">
                                                    <div :class="$style.text">Dưới 1 năm kinh nghiệm</div>
                                              </div>
                                              <img :class="$style.edit2Icon" alt="" src="../../../../public//images/dashboard-vuesax-outline-arrow-down.svg" />
                                        </div>
                                  </div>
                            </div>
                      </div>
                      <div :class="$style.inputField7">
                            <div :class="$style.inputFieldBase">
                                  <div :class="$style.inputWithLabel">
                                        <div :class="$style.label">Cấp bậc</div>
                                        <div :class="$style.input2">
                                              <div :class="$style.content2">
                                                    <div :class="$style.text">Nhân viên</div>
                                              </div>
                                              <img :class="$style.edit2Icon" alt="" src="../../../../public//images/dashboard-vuesax-outline-arrow-down.svg" />
                                        </div>
                                  </div>
                            </div>
                      </div>
                      <div :class="$style.inputField8">
                            <div :class="$style.inputFieldBase">
                                  <div :class="$style.inputWithLabel">
                                        <div :class="$style.label">Mức lương</div>
                                        <div :class="$style.input2">
                                              <div :class="$style.content2">
                                                    <div :class="$style.text">Thỏa thuận</div>
                                              </div>
                                              <img :class="$style.edit2Icon" alt="" src="../../../../public//images/dashboard-vuesax-outline-arrow-down.svg" />
                                        </div>
                                  </div>
                            </div>
                      </div>
                      <div :class="$style.inputField9">
                            <div :class="$style.inputFieldBase">
                                  <div :class="$style.inputWithLabel">
                                        <div :class="$style.label">Quận/Huyện</div>
                                        <div :class="$style.input2">
                                              <div :class="$style.content2">
                                                    <div :class="$style.text">Chọn quận/huyện</div>
                                              </div>
                                              <img :class="$style.edit2Icon" alt="" src="../../../../public//images/dashboard-vuesax-outline-arrow-down.svg" />
                                        </div>
                                  </div>
                            </div>
                      </div>
                      <div :class="$style.mcLng">MỨC LƯƠNG</div>
                      <div :class="$style.khuVcLm">KHU VỰC LÀM VIỆC</div>
                </div>
          </div>
          <div :class="$style.mT">
                <div :class="$style.tiu3">
                      <div :class="$style.heading">
                            <img :class="$style.edit2Icon" alt="" src="../../../../public/images/dashboard-vuesax-bold-edit-2.svg" />
                            <b :class="$style.tiuTuyn">Mô tả công việc</b>
                      </div>
                      <div :class="$style.icon">
                            <img :class="$style.icoutlineFormatBoldIcon" alt="" src="../../../../public/images/dashboard-ic-outline-format-bold.svg" />
                            <img :class="$style.icoutlineFormatBoldIcon" alt="" src="../../../../public/images/dashboard-ph-text-italic.svg" />
                            <img :class="$style.icoutlineFormatBoldIcon" alt="" src="../../../../public/images/dashboard-iconoir-underline.svg" />
                            <img :class="$style.icoutlineFormatBoldIcon" alt="" src="../../../../public/images/dashboard-layer-1.svg" />
                      </div>
                </div>
                <div :class="$style.text11">
                      <div :class="$style.thamGiaPhtContainer">
                            <ul :class="$style.thamGiaPhtTrinDNBack">
                                  <li :class="$style.thamGiaPht">Tham gia phát triển dự án Back-end và Front-end</li>
                                  <li :class="$style.thamGiaPht">Thực hiện thiết kế, coding và unit test cho dự án.</li>
                                  <li :class="$style.thamGiaPht">Tham gia việc review code, hỗ trợ các thành viên trong nhóm.</li>
                                  <li>Thực hiện các công việc theo sự phân công của Trưởng nhóm/Quản lý dự án, phối hợp giữa các nhóm để phát triển dự án.</li>
                            </ul>
                      </div>
                </div>
          </div>
          <div :class="$style.mT1">
                <div :class="$style.tiu3">
                      <div :class="$style.heading">
                            <img :class="$style.edit2Icon" alt="" src="../../../../public/images/dashboard-vuesax-bold-edit-2.svg" />
                            <b :class="$style.tiuTuyn">Yêu cầu công việc</b>
                      </div>
                      <div :class="$style.icon">
                            <img :class="$style.icoutlineFormatBoldIcon" alt="" src="../../../../public../../../../public/images/dashboard-ic-outline-format-bold.svg" />
                            <img :class="$style.icoutlineFormatBoldIcon" alt="" src="../../../../public/images/dashboard-ph-text-italic.svg" />
                            <img :class="$style.icoutlineFormatBoldIcon" alt="" src="../../../../public/images/dashboard-iconoir-underline.svg" />
                            <img :class="$style.icoutlineFormatBoldIcon" alt="" src="../../../../public/images/dashboard-layer-1.svg" />
                      </div>
                </div>
                <div :class="$style.text11">
                      <div :class="$style.thamGiaPhtContainer">
                            <ul :class="$style.thamGiaPhtTrinDNBack">
                                  <li :class="$style.thamGiaPht">Có kinh nghiệm làm việc với Java tối thiểu 3 năm.
                                        Thành thạo trong việc sử dụng các framework web Java như Spring MVC, Spring Boot hoặc Hibernate.</li>
                                  <li :class="$style.thamGiaPht">Hiểu biết về thiết kế ứng dụng, công nghệ microservice.
                                        Có kiến thức vững về HTML, CSS và JavaScript.</li>
                                  <li :class="$style.thamGiaPht">Có kinh nghiệm làm việc với hệ thống message queue (ActiveMQ, Kafka..) để xử lý các thư hàng đợi.</li>
                                  <li :class="$style.thamGiaPht">Có kinh nghiệm làm việc với hệ quản trị cơ sở dữ liệu quan hệ RDBMS(SQL server, PostgreSQL) và NoSQL(Cassandra, mongodb..)</li>
                                  <li :class="$style.thamGiaPht">Có kiến thức và kinh nghiệm với Linux.</li>
                                  <li>Có khả năng làm việc độc lập và làm việc nhóm tốt.</li>
                            </ul>
                      </div>
                </div>
          </div>
          <div :class="$style.mT2">
                <div :class="$style.tiu3">
                      <div :class="$style.heading">
                            <img :class="$style.edit2Icon" alt="" src="../../../../public/images/dashboard-vuesax-bold-edit-2.svg" />
                            <b :class="$style.tiuTuyn">Quyền lợi</b>
                      </div>
                      <div :class="$style.icon">
                            <img :class="$style.icoutlineFormatBoldIcon" alt="" src="../../../../public/images/dashboard-ic-outline-format-bold.svg" />
                            <img :class="$style.icoutlineFormatBoldIcon" alt="" src="../../../../public/images/dashboard-ph-text-italic.svg" />
                            <img :class="$style.icoutlineFormatBoldIcon" alt="" src="../../../../public/images/dashboard-iconoir-underline.svg" />
                            <img :class="$style.icoutlineFormatBoldIcon" alt="" src="../../../../public/images/dashboard-layer-1.svg" />
                      </div>
                </div>
                <div :class="$style.text11">
                      <div :class="$style.thamGiaPhtContainer">
                            <ul :class="$style.thamGiaPhtTrinDNBack">
                                  <li :class="$style.thamGiaPht">Lương: UPTO 40.000.000 VNĐ/tháng</li>
                                  <li :class="$style.thamGiaPht">Tối thiểu 13 tháng lương/năm.</li>
                                  <li :class="$style.thamGiaPht">Xét tăng lương 1- 2 lần/năm.</li>
                                  <li :class="$style.thamGiaPht">Thưởng: Thưởng Tết, thưởng ngày lễ, thưởng giới thiệu nhân sự...</li>
                                  <li :class="$style.thamGiaPht">Văn phòng làm việc chuyên nghiệp hạng A.</li>
                                  <li :class="$style.thamGiaPht">Môi trường làm việc thân thiện và có tính tương hỗ cao, ổn định lâu dài.</li>
                                  <li :class="$style.thamGiaPht">Có nhiều cơ hội được đào tạo, làm việc nâng cao trình độ và cơ hội thăng tiến.</li>
                                  <li :class="$style.thamGiaPht">Có nhiều hoạt động bổ trợ tinh thần, du lịch...</li>
                                  <li>Có cơ hội làm việc tại nước ngoài.</li>
                            </ul>
                      </div>
                </div>
          </div>
          <div :class="$style.mT3">
                <div :class="$style.tiu3">
                      <div :class="$style.heading">
                            <img :class="$style.edit2Icon" alt="" src="../../../../public/images/dashboard-vuesax-bold-edit-2.svg" />
                            <b :class="$style.tiuTuyn">Thời gian làm việc</b>
                      </div>
                      <div :class="$style.icon">
                            <img :class="$style.icoutlineFormatBoldIcon" alt="" src="../../../../public/images/dashboard-ic-outline-format-bold.svg" />
                            <img :class="$style.icoutlineFormatBoldIcon" alt="" src="../../../../public/images/dashboard-ph-text-italic.svg" />
                            <img :class="$style.icoutlineFormatBoldIcon" alt="" src="../../../../public/images/dashboard-iconoir-underline.svg" />
                            <img :class="$style.icoutlineFormatBoldIcon" alt="" src="../../../../public/images/dashboard-layer-1.svg" />
                      </div>
                </div>
                <div :class="$style.text14">
                      <div :class="$style.thamGiaPhtContainer">
                            <ul :class="$style.thamGiaPhtTrinDNBack">
                                  <li>Thứ 2 - Thứ 6 (từ 08:00 đến 17:30)</li>
                            </ul>
                      </div>
                </div>
          </div>
    </div>
</template>
<script lang="ts">
    import { defineComponent } from 'vue'
    
    
    export default defineComponent({
          name: "Content"})
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
          .thamGiaPhtContainer {
                position: absolute;
                top: 20px;
                left: 20px;
                line-height: 24px;
                display: inline-block;
                width: 735px;
          }
          .text11 {
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