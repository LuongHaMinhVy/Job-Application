<template>
  <div>
    <Header />
    <div :class="$style.homepagejobDetail">
      <div :class="$style.searchBox">
        <div :class="$style.searchadd">
          <div :class="$style.inputField">
            <div :class="$style.inputFieldBase">
              <div :class="$style.inputFieldBase">
                <div :class="$style.input">
                  <div :class="$style.content">
                    <img
                      :class="$style.searchNormalIcon"
                      alt=""
                      src="../../../public/images/search-normal.svg"
                    />
                    <div :class="$style.text">Vị trí ứng tuyển</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div :class="$style.inputField1">
            <div :class="$style.inputField1">
              <div :class="$style.inputFieldBase">
                <div :class="$style.input1">
                  <div :class="$style.salery">
                    <img
                      :class="$style.searchNormalIcon"
                      alt=""
                      src="../../../public/images/briefcase.svg"
                    />
                    <div :class="$style.text1">Tất cả ngành nghề</div>
                  </div>
                  <img
                    :class="$style.arrowDownIcon"
                    alt=""
                    src="../../../public/images/arrow-down.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div :class="$style.inputField1">
            <div :class="$style.inputField1">
              <div :class="$style.inputFieldBase">
                <div :class="$style.input1">
                  <div :class="$style.salery">
                    <img
                      :class="$style.searchNormalIcon"
                      alt=""
                      src="../../../public/images/location.svg"
                    />
                    <div :class="$style.text1">Tất cả địa điểm</div>
                  </div>
                  <img
                    :class="$style.arrowDownIcon"
                    alt=""
                    src="../../../public/images/arrow-down.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div :class="$style.button">
          <div :class="$style.buttonBase">
            <b :class="$style.text3">Tìm kiếm</b>
          </div>
        </div>
      </div>
      <b :class="$style.heading4">Việc làm liên quan</b>
      <div :class="$style.jobList">
        <div :class="$style.jobCard">
          <div :class="$style.love">
            <img
              :class="$style.arrowDownIcon"
              alt=""
              src="../../../public/images/heart.svg"
            />
          </div>
          <div :class="$style.time">
            <span>Cập nhật 3 giờ trước - Còn </span>
            <b>10</b>
            <span> ngày để ứng tuyển</span>
          </div>
          <div :class="$style.saleryParent">
            <div :class="$style.salery">
              <img
                :class="$style.arrowDownIcon"
                alt=""
                src="../../../public/images/money.svg"
              />
              <div :class="$style.man">400 - 600 man</div>
            </div>
            <div :class="$style.salery">
              <img
                :class="$style.jpIcon"
                alt=""
                src="../../../public/images/japan.svg"
              />
              <div :class="$style.man">Nhật Bản</div>
            </div>
            <div :class="$style.salery">
              <img
                :class="$style.arrowDownIcon"
                alt=""
                src="../../../public/images/briefcase.svg"
              />
              <div :class="$style.man">Toàn thời gian</div>
            </div>
          </div>
          <div :class="$style.jobName">
            <b :class="$style.heading"
              >Sales IT làm việc tại Tokyo - Nagoya - Osaka</b
            >
            <div :class="$style.level">
              <div :class="$style.badge">
                <div :class="$style.badgeBase">
                  <div :class="$style.text4">Fresher</div>
                </div>
              </div>
            </div>
          </div>
          <img
            :class="$style.imgIcon"
            alt=""
            src="../../../public/images/IMG.png"
          />
        </div>
        <div :class="$style.jobCard">
          <div :class="$style.love">
            <img
              :class="$style.arrowDownIcon"
              alt=""
              src="../../../public/images/heart.svg"
            />
          </div>
          <div :class="$style.time">
            <span>Cập nhật 3 giờ trước - Còn </span>
            <b>10</b>
            <span> ngày để ứng tuyển</span>
          </div>
          <div :class="$style.saleryParent">
            <div :class="$style.salery">
              <img
                :class="$style.arrowDownIcon"
                alt=""
                src="../../../public/images/money.svg"
              />
              <div :class="$style.man">500-700 man</div>
            </div>
            <div :class="$style.salery">
              <img
                :class="$style.jpIcon"
                alt=""
                src="../../../public/images/JP.svg"
              />
              <div :class="$style.man">Nhật Bản</div>
            </div>
            <div :class="$style.salery">
              <img
                :class="$style.arrowDownIcon"
                alt=""
                src="../../../public/images/briefcase.svg"
              />
              <div :class="$style.man">Toàn thời gian</div>
            </div>
          </div>
          <div :class="$style.jobName">
            <b :class="$style.heading"
              >SE/BrSE (Outsystem) làm việc tại Tokyo/Nagoya</b
            >
            <div :class="$style.level1">
              <div :class="$style.badge">
                <div :class="$style.badgeBase1">
                  <div :class="$style.text4">Junior</div>
                </div>
              </div>
            </div>
          </div>
          <img
            :class="$style.imgIcon"
            alt=""
            src="../../../public/images/MG.png"
          />
        </div>
        <div :class="$style.jobCard">
          <div :class="$style.love">
            <img
              :class="$style.arrowDownIcon"
              alt=""
              src="../../../public/images/heart.svg"
            />
          </div>
          <div :class="$style.time">
            <span>Cập nhật 3 giờ trước - Còn </span>
            <b>10</b>
            <span> ngày để ứng tuyển</span>
          </div>
          <div :class="$style.saleryParent">
            <div :class="$style.salery">
              <img
                :class="$style.arrowDownIcon"
                alt=""
                src="../../../public/images/money.svg"
              />
              <div :class="$style.man">$1000</div>
            </div>
            <div :class="$style.salery">
              <img
                :class="$style.jpIcon"
                alt=""
                src="../../../public/images/japan.svg"
              />
              <div :class="$style.man">Nhật Bản</div>
            </div>
            <div :class="$style.salery">
              <img
                :class="$style.arrowDownIcon"
                alt=""
                src="../../../public/images/briefcase.svg"
              />
              <div :class="$style.man">Toàn thời gian</div>
            </div>
          </div>
          <div :class="$style.jobName">
            <b :class="$style.heading">Marketing Excutive (Korea)</b>
            <div :class="$style.level2">
              <div :class="$style.badge">
                <div :class="$style.badgeBase2">
                  <div :class="$style.text4">Senior</div>
                </div>
              </div>
            </div>
          </div>
          <img
            :class="$style.imgIcon"
            alt=""
            src="../../../public/images/IMG.png"
          />
        </div>
      </div>
      <div :class="$style.breadcrumb">
        <div :class="$style.trangCh">Trang chủ</div>
        <img
          :class="$style.arrowDownIcon"
          alt=""
          src="../../../public/images/arrow-right.svg"
        />
        <div :class="$style.trangCh">Việc làm</div>
        <img
          :class="$style.arrowDownIcon"
          alt=""
          src="../../../public/images/arrow-right.svg"
        />
        <div :class="$style.salesItLm"
          >Sales IT làm việc tại Tokyo - Nagoya - Osaka</div
        >
      </div>

      <div :class="$style.jobCourse" v-if="job">
        <div :class="$style.infor">
          <img
            :class="$style.imgIcon3"
            alt="Company Logo"
            src="../../../public/images/IMG.png"
          />
          <div :class="$style.frameParent">
            <div :class="$style.softwareEngineerParent">
              <b :class="$style.softwareEngineer">{{
                job.title || "Lập trình viên"
              }}</b>
              <div :class="$style.level3">
                <div v-if="job.level === 'Fresher'" :class="$style.badge">
                  <div :class="$style.badgeBase3">
                    <div :class="$style.text4">{{ job.level }}</div>
                  </div>
                </div>
                <div v-if="job.level === 'Junior'" :class="$style.badge">
                  <div :class="$style.badgeBase1">
                    <div :class="$style.text4">{{ job.level }}</div>
                  </div>
                </div>
                <div v-if="job.level === 'Senior'" :class="$style.badge">
                  <div :class="$style.badgeBase2">
                    <div :class="$style.text4">{{ job.level }}</div>
                  </div>
                </div>
                <!-- Repeat for Junior, Middle, Senior levels -->
              </div>
            </div>
            <div :class="$style.expired3">
              <img
                :class="$style.arrowDownIcon"
                alt=""
                src="../../../public/images/clock.svg"
              />
              <div :class="$style.man"
                >Hạn nộp hồ sơ: {{ formattedDate(job.expiredAt) }}</div
              >
            </div>
          </div>
        </div>

        <!-- Buttons for applying and saving -->
        <div :class="$style.button1">
          <div :class="$style.button2">
            <div :class="$style.buttonBase1">
              <img
                :class="$style.searchNormalIcon"
                alt=""
                src="../../../public/images/send-2.svg"
              />
              <div :class="$style.text11">Ứng tuyển ngay</div>
            </div>
          </div>
          <div :class="$style.button3">
            <div :class="$style.buttonBase2">
              <img
                :class="$style.searchNormalIcon"
                alt=""
                src="../../../public/images/heart.svg"
              />
              <div :class="$style.text11">Lưu tin</div>
            </div>
          </div>
        </div>

        <!-- General Job Details -->
        <div :class="$style.heading3">
          <b :class="$style.trangCh">Chi tiết tin tuyển dụng</b>
        </div>
        <div :class="$style.thngTinChung">
          <b :class="$style.text3">Thông tin chung</b>
          <div :class="$style.infor1">
            <!-- Mức lương -->
            <div :class="$style.detail">
              <div :class="$style.icon">
                <img
                  :class="$style.profile2userIcon"
                  alt=""
                  src="../../../public/images/money.svg"
                />
              </div>
              <div :class="$style.mcLngParent">
                <div :class="$style.mcLng">Mức lương</div>
                <b :class="$style.khngYuCu"
                  >{{ job.salary }} {{ job.currencyType }}</b
                >
              </div>
            </div>

            <!-- Hình thức làm việc -->
            <div :class="$style.detail">
              <div :class="$style.icon">
                <img
                  :class="$style.profile2userIcon"
                  alt=""
                  src="../../../public/images/briefcase.svg"
                />
              </div>
              <div :class="$style.mcLngParent">
                <div :class="$style.mcLng">Hình thức làm việc</div>
                <b :class="$style.khngYuCu">{{
                  job.jobType || "Toàn thời gian"
                }}</b>
              </div>
            </div>

            <!-- Giới tính -->
            <div :class="$style.detail">
              <div :class="$style.icon">
                <img
                  :class="$style.profile2userIcon"
                  alt=""
                  src="../../../public/images/money.svg"
                />
              </div>
              <div :class="$style.mcLngParent">
                <div :class="$style.mcLng">Giới tính</div>
                <b :class="$style.khngYuCu">{{
                  job.gender || "Không yêu cầu"
                }}</b>
              </div>
            </div>
          </div>

          <!-- Các thông tin bổ sung (số lượng tuyển, cấp bậc, kinh nghiệm) -->
          <div :class="$style.infor2">
            <div :class="$style.detail">
              <div :class="$style.icon">
                <img
                  :class="$style.profile2userIcon"
                  alt=""
                  src="../../../public/images/profile-2user.svg"
                />
              </div>
              <div :class="$style.mcLngParent">
                <div :class="$style.mcLng">Số lượng tuyển</div>
                <b :class="$style.khngYuCu">{{ job.quantity }} người</b>
              </div>
            </div>

            <div :class="$style.detail">
              <div :class="$style.icon">
                <img
                  :class="$style.profile2userIcon"
                  alt=""
                  src="../../../public/images/medal-star.svg"
                />
              </div>
              <div :class="$style.mcLngParent">
                <div :class="$style.mcLng">Cấp bậc</div>
                <b :class="$style.khngYuCu">{{ job.level || "Nhân viên" }}</b>
              </div>
            </div>

            <div :class="$style.detail">
              <div :class="$style.icon">
                <img
                  :class="$style.profile2userIcon"
                  alt=""
                  src="../../../public/images/award.svg"
                />
              </div>
              <div :class="$style.mcLngParent">
                <div :class="$style.mcLng">Kinh nghiệm</div>
                <b :class="$style.khngYuCu">{{ job.exp || "1-3 năm" }}</b>
              </div>
            </div>
          </div>
        </div>

        <!-- Job Description -->
        <div :class="$style.describe">
          <b :class="$style.heading">Mô tả công việc</b>
          <div v-html="job.des"></div>
        </div>

        <!-- Requirements -->
        <div :class="$style.describe1">
          <b :class="$style.heading">Yêu cầu ứng viên</b>
          <div v-html="job.requirements"></div>
        </div>

        <!-- Benefits -->
        <div :class="$style.describe2">
          <b :class="$style.heading">Quyền lợi</b>
          <div v-html="job.benefits"></div>
        </div>

        <!-- Location and Work Hours -->
        <div :class="$style.describe3">
          <b :class="$style.heading">Địa điểm làm việc</b>
          <div>{{ job.location || "Thông tin chưa cập nhật" }}</div>
        </div>
        <div :class="$style.describe4">
          <b :class="$style.heading">Thời gian làm việc</b>
          <div>{{ job.workingHours || "Thông tin chưa cập nhật" }}</div>
        </div>

        <!-- Application Deadline and Method -->
        <div :class="$style.describe5">
          <b :class="$style.heading">Cách thức ứng tuyển</b>
          <div>
            <ul :class="$style.ngVinNpHSTrcTuynB">
              <li>
                <span>Ứng viên nộp hồ sơ trực tuyến bằng cách bấm </span>
                <b :class="$style.ngTuynNgay">Ứng tuyển ngay</b>
                <span> dưới đây.</span>
              </li>
              <li>Hạn nộp hồ sơ: {{ formattedDate(job.expiredAt) }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  <teleport v-if="isShowCvModal" to='body' >
      <GetAllCvModal/>
  </teleport>
</template>
<script setup>
import GetAllCvModal from "@/components/Modal/GetAllCvModal.vue";
import Footer from "@/components/user/Footer.vue";
import Header from "@/components/user/Header.vue";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const isShowCvModal = ref(true);

const route = useRoute();
const store = useStore();
const id = route.params.id;

onMounted(() => {
  store.dispatch("fetchJob", id);
});

const job = computed(() => store.getters.getJob);
console.log(1111111111111, job);

const formattedDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("vi-VN", options);
};
</script>

<style module>
.searchNormalIcon {
  width: 20px;
  position: relative;
  height: 20px;
}
.text {
  flex: 1;
  position: relative;
  line-height: 24px;
  font-weight: 500;
}
.content {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
}
.input {
  align-self: stretch;
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #ddd;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 12px 16px;
}
.inputFieldBase {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.inputField {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.text1 {
  position: relative;
  line-height: 24px;
  font-weight: 500;
}
.arrowDownIcon {
  width: 16px;
  position: relative;
  height: 16px;
}
.input1 {
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #ddd;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 12px 16px;
  gap: 24px;
}
.inputField1 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.searchadd {
  width: 1036px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
}
.text3 {
  position: relative;
  line-height: 24px;
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
  padding: 12px 20px;
}
.button {
  width: 140px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  color: #fff;
}
.searchBox {
  position: absolute;
  top: 80px;
  left: 10%;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 24px 120px;
  gap: 24px;
  color: #676767;
}
.trangCh {
  position: relative;
  line-height: 28px;
}
.salesItLm {
  position: relative;
  line-height: 28px;
  font-weight: 600;
  color: #3d3d3d;
}
.breadcrumb {
  position: absolute;
  top: 200px;
  left: 13%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  font-size: 18px;
  color: #a7a7a7;
}
.love {
  position: absolute;
  top: 138px;
  left: 336px;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #ddd;
  box-sizing: border-box;
  width: 32px;
  height: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 8px;
}
.time {
  position: absolute;
  top: 145px;
  left: 16px;
  line-height: 18px;
}
.man {
  position: relative;
  line-height: 18px;
}
.salery {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
}
.jpIcon {
  width: 16px;
  position: relative;
  height: 16px;
  overflow: hidden;
  flex-shrink: 0;
}
.saleryParent {
  position: absolute;
  top: 112px;
  left: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  color: #3d3d3d;
}
.heading {
  align-self: stretch;
  position: relative;
  line-height: 24px;
}
.text4 {
  position: relative;
  line-height: 18px;
  font-weight: 500;
}
.badgeBase {
  border-radius: 16px;
  background-color: #ecfdf3;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 3px 12px;
}
.badge {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  mix-blend-mode: multiply;
}
.level {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: center;
  font-size: 12px;
  color: #027a48;
}
.jobName {
  position: absolute;
  top: 16px;
  left: 112px;
  width: 256px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
  font-size: 16px;
  color: #111;
}
.imgIcon {
  position: absolute;
  top: 16px;
  left: 16px;
  border-radius: 4px;
  width: 80px;
  height: 80px;
  overflow: hidden;
  object-fit: cover;
}
.jobCard {
  width: 384px;
  position: relative;
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #ddd;
  box-sizing: border-box;
  height: 186px;
}
.badgeBase1 {
  border-radius: 16px;
  background-color: #eef4ff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 3px 12px;
}
.level1 {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: center;
  font-size: 12px;
  color: #3538cd;
}
.badgeBase2 {
  border-radius: 16px;
  background-color: #fef3f2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 3px 12px;
}
.level2 {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: center;
  font-size: 12px;
  color: #b42318;
}
.jobList {
  position: absolute;
  top: 298px;
  right: 10%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 24px;
  font-size: 12px;
  color: #848484;
}
.imgIcon3 {
  width: 88px;
  position: relative;
  border-radius: 4px;
  height: 88px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
}
.softwareEngineer {
  align-self: stretch;
  position: relative;
  line-height: 28px;
}
.badgeBase3 {
  border-radius: 16px;
  background-color: #ecfdf3;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 4px 12px;
}
.badgeBase4 {
  border-radius: 16px;
  background-color: #eef4ff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 4px 12px;
}
.badge4 {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  mix-blend-mode: multiply;
  color: #3538cd;
}
.badgeBase5 {
  border-radius: 16px;
  background-color: #fff6ed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 4px 12px;
}
.badge5 {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  mix-blend-mode: multiply;
  color: #c4320a;
}
.badgeBase6 {
  border-radius: 16px;
  background-color: #fef3f2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 4px 12px;
}
.badge6 {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  mix-blend-mode: multiply;
  color: #b42318;
}
.level3 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  text-align: center;
  font-size: 12px;
  color: #027a48;
}
.softwareEngineerParent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4px;
}
.expired3 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  font-size: 12px;
  color: #848484;
}
.frameParent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
}
.infor {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
}
.text11 {
  position: relative;
  line-height: 20px;
  font-weight: 600;
}
.buttonBase1 {
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  background-color: #ab1f24;
  border: 1px solid #ab1f24;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  gap: 8px;
}
.button2 {
  width: 200px;
  align-self: stretch;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}
.buttonBase2 {
  flex: 1;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #676767;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  gap: 8px;
}
.button3 {
  width: 180px;
  align-self: stretch;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  color: #676767;
}
.button1 {
  width: 165px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
  font-size: 14px;
  color: #fff;
}
.jobCourse {
  position: absolute;
  top: 300px;
  left: 20%;
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #ddd;
  box-sizing: border-box;
  width: 792px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  font-size: 18px;
}
.button4 {
  width: 165px;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}
.button5 {
  width: 165px;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  color: #676767;
}
.buttonGroup {
  position: absolute;
  top: 1804px;
  left: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  font-size: 14px;
  color: #fff;
}
.heading3 {
  position: absolute;
  top: 110%;
  left: 0;
  border-left: 4px solid #bc2228;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 4px 4px 4px 16px;
  font-size: 18px;
}
.icon {
  width: 48px;
  border-radius: 24px;
  background-color: #f8e9ea;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 12px;
  box-sizing: border-box;
}
.mcLng {
  align-self: stretch;
  position: relative;
  line-height: 20px;
}
.mcLngParent {
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4px;
}
.detail {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 13px;
  width: 300px;
}
.khngYuCu {
  align-self: stretch;
  position: relative;
  font-size: 16px;
  line-height: 24px;
}
.infor2 {
  width: 173px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 50px;
}
.profile2userIcon {
  width: 24px;
  position: relative;
  height: 24px;
}
.infor1 {
  width: 581px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  color: #3d3d3d;
  gap: 50px;
}
.thngTinChung {
  position: absolute;
  top: 140%;
  border-radius: 12px;
  background-color: #fff6f7;
  width: 792px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 24px;
  box-sizing: border-box;
  gap: 20px;
}
.heading4 {
  position: absolute;
  top: 252px;
  right: 15%;
  font-size: 20px;
  line-height: 30px;
  color: #000;
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
  align-self: stretch;
  position: relative;
  line-height: 24px;
  color: #2d2c2c;
}
.describe {
  position: absolute;
  top: 300%;
  width: 792px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
}
.describe1 {
  position: absolute;
  top: 350%;
  width: 792px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
}
.describe2 {
  position: absolute;
  top: 400%;
  width: 792px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
}
.describe3 {
  position: absolute;
  top: 450%;

  width: 792px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
}
.describe4 {
  position: absolute;
  top: 500%;

  width: 792px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
}
.ngTuynNgay {
  font-family: "SF Pro Display";
}
.ngVinNpHSTrcTuynB {
  margin: 0;
  font-size: inherit;
  padding-left: 21px;
}
.describe5 {
  position: absolute;
  top: 550%;

  width: 792px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
}
.homepagejobDetail {
  width: 100%;
  position: relative;
  background-color: #fff;
  height: 1300px;
  overflow: hidden;
  text-align: left;
  font-size: 16px;
  color: #111;
  font-family: "SF Pro Display";
}
</style>
