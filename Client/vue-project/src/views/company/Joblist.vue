<template>
  <div>
    <Header />
    <div :class="$style.homepagejobList">
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
      <div :class="$style.job">
        <div :class="$style.jobList">
          <div
            v-for="job in jobs"
            :key="job.id"
            :class="$style.jobCard"
            @click="goToJobDetail(job.id)"
          >
            <div :class="$style.love">
              <img
                :class="$style.arrowDownIcon"
                alt="favorite"
                src="../../../public/images/heart.svg"
              />
            </div>
            <div :class="$style.time">
              <span>Cập nhật {{ timeSince(job.createAt) }} - Còn </span>
              <b>{{ daysRemaining(job.expiredAt) }}</b>
              <span> ngày để ứng tuyển</span>
            </div>
            <div :class="$style.saleryParent">
              <div :class="$style.salery">
                <img
                  :class="$style.arrowDownIcon"
                  alt="salary"
                  src="../../../public/images/money.svg"
                />
                <div :class="$style.man"
                  >{{ job.salary }} {{ job.currencyType }}</div
                >
              </div>
              <div :class="$style.salery">
                <img
                  :class="$style.jpIcon"
                  alt="location"
                  src="../../../public/images/japan.svg"
                />
                <div :class="$style.man">{{ job.location }}</div>
              </div>
              <div :class="$style.salery">
                <img
                  :class="$style.arrowDownIcon"
                  alt="job type"
                  src="../../../public/images/briefcase.svg"
                />
                <div :class="$style.man">{{ job.jobType }}</div>
              </div>
            </div>
            <div :class="$style.jobName">
              <b :class="$style.heading">{{ job.title }}</b>
              <div :class="$style.level">
                <div :class="$style.badge">
                  <div :class="$style.badgeBase">
                    <div :class="$style.text4">{{ job.level }}</div>
                  </div>
                </div>
              </div>
            </div>
            <img
              :class="$style.imgIcon"
              alt="job image"
              src="../../../public/images/IMG.png"
            />
          </div>
        </div>
      </div>
      <div :class="$style.pagination">
        <div :class="$style.paginationNumbers">
          <div :class="$style.paginationNumberBase">
            <div :class="$style.content3">
              <div :class="$style.number">1</div>
            </div>
          </div>
          <div :class="$style.paginationNumberBase1">
            <div :class="$style.content3">
              <div :class="$style.number">2</div>
            </div>
          </div>
          <div :class="$style.paginationNumberBase1">
            <div :class="$style.content3">
              <div :class="$style.number">3</div>
            </div>
          </div>
          <div :class="$style.paginationNumberBase1">
            <div :class="$style.content3">
              <div :class="$style.number">...</div>
            </div>
          </div>
          <div :class="$style.paginationNumberBase1">
            <div :class="$style.content3">
              <div :class="$style.number">8</div>
            </div>
          </div>
          <div :class="$style.paginationNumberBase1">
            <div :class="$style.content3">
              <div :class="$style.number">9</div>
            </div>
          </div>
        </div>
        <div :class="$style.arrowLeftWrapper">
          <img
            :class="$style.arrowDownIcon"
            alt=""
            src="../../../public/images/arrow-left.svg"
          />
        </div>
        <div :class="$style.arrowLeftWrapper">
          <img
            :class="$style.arrowDownIcon"
            alt=""
            src="../../../public/images/arrow-right.svg"
          />
        </div>
      </div>
      <div :class="$style.content9">
        <b :class="$style.heading18">Tất cả việc làm</b>
        <div :class="$style.filter">
          <div :class="$style.spXpTheoParent">
            <div :class="$style.man">Sắp xếp theo:</div>
            <div :class="$style.button1">
              <div :class="$style.buttonBase1">
                <div :class="$style.text30">Mới nhất</div>
                <img
                  :class="$style.searchNormalIcon"
                  alt=""
                  src="../../../public/images/arrow-down.svg"
                />
              </div>
            </div>
          </div>
          <div :class="$style.salery">
            <div :class="$style.row">
              <img
                :class="$style.rowVerticalIcon"
                alt=""
                src="../../../public/images/row-vertical.svg"
              />
            </div>
            <div :class="$style.list">
              <img
                :class="$style.rowVerticalIcon"
                alt=""
                src="../../../public/images/element-3.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div :class="$style.banner">
        <img
          :class="$style.maskGroupIcon"
          alt=""
          src="../../../public/images/bannerCopany1.png"
        />
        <img
          :class="$style.maskGroupIcon1"
          alt=""
          src="../../../public/images/bannerCopany2.png"
        />
        <img
          :class="$style.coverIcon"
          alt=""
          src="../../../public/images/cover.jpg"
        />
        <div :class="$style.content10">
          <div :class="$style.headingParent">
            <b :class="$style.heading19"
              >Khơi dậy tiềm lực - Mở lối thành công!</b
            >
            <div :class="$style.heading20"
              >Rikkei Jobs - đồng hành trên phát triển con đường sự nghiệp của
              bạn.</div
            >
          </div>
          <div :class="$style.saleryParent15">
            <div :class="$style.salery18">
              <img
                :class="$style.arrowDownIcon"
                alt=""
                src="../../../public/images/tick-circle.svg"
              />
              <b :class="$style.man">Lương cao</b>
            </div>
            <div :class="$style.salery18">
              <img
                :class="$style.arrowDownIcon"
                alt=""
                src="../../../public/images/tick-circle.svg"
              />
              <b :class="$style.man">Phúc lợi hấp dẫn</b>
            </div>
            <div :class="$style.salery18">
              <img
                :class="$style.arrowDownIcon"
                alt=""
                src="../../../public/images/tick-circle.svg"
              />
              <b :class="$style.man">Môi trường chuyên nghiệp</b>
            </div>
            <div :class="$style.salery18">
              <img
                :class="$style.arrowDownIcon"
                alt=""
                src="../../../public/images/tick-circle.svg"
              />
              <b :class="$style.man">Cơ hội thăng tiến</b>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
 
</template>
<script setup>
import GetAllCvModal from "@/components/Modal/GetAllCvModal.vue";
import Footer from "@/components/user/Footer.vue";
import Header from "@/components/user/Header.vue";
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();

onMounted(() => {
  store.dispatch("getAllJobs");
});


const jobs = computed(() => store.getters.getJobs);
console.log("11111111111111Fetched jobs:", jobs.value);

const goToJobDetail = (id) => {
  router.push(`/job-detail/${id}`);
};

const timeSince = (date) => {
  const now = new Date();
  const createdAt = new Date(date);
  const diff = Math.floor((now - createdAt) / (1000 * 60 * 60));
  return `${diff} giờ trước`;
};

const daysRemaining = (expiredAt) => {
  const now = new Date();
  const expiration = new Date(expiredAt);
  const diff = Math.floor((expiration - now) / (1000 * 60 * 60 * 24));
  return diff > 0 ? diff : 0;
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
  top: 480px;
  left: 13%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
  font-size: 16px;
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

.job {
  position: absolute;
  top: 656px;
  left: 13%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;
  font-size: 12px;
  color: #848484;
}
.number {
  position: relative;
  line-height: 20px;
  font-weight: 500;
}
.content3 {
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px;
  box-sizing: border-box;
}
.paginationNumberBase {
  width: 40px;
  position: relative;
  border-radius: 20px;
  background-color: #f8e9ea;
  height: 40px;
  overflow: hidden;
  flex-shrink: 0;
  color: #ab1f24;
}
.paginationNumberBase1 {
  width: 40px;
  position: relative;
  border-radius: 20px;
  height: 40px;
  overflow: hidden;
  flex-shrink: 0;
}
.paginationNumbers {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2px;
}
.arrowLeftWrapper {
  width: 40px;
  border-radius: 20px;
  background-color: #f4f4f4;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 12px;
  box-sizing: border-box;
}
.pagination {
  position: absolute;
  top: 940px;
  left: 974px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  text-align: center;
  color: #919191;
}
.heading18 {
  position: relative;
  line-height: 32px;
}
.text30 {
  position: relative;
  line-height: 20px;
  font-weight: 600;
}
.buttonBase1 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.button1 {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 14px;
  color: #bc2228;
}
.spXpTheoParent {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 8px;
}
.rowVerticalIcon {
  width: 12px;
  position: relative;
  height: 12px;
}
.jobList {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;
  flex-wrap: wrap;
  font-size: 12px;
  color: #848484;
}
.jobList > .jobItem {
  flex: 0 0 calc(33.333% - 16px); /* Mỗi phần tử chiếm 1/3 chiều rộng của container, trừ khoảng cách gap */
  box-sizing: border-box; /* Đảm bảo rằng padding, border không làm ảnh hưởng đến width */
}
.list {
  border-radius: 4px;
  border: 1px solid #bc2228;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 6px;
}
.filter {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  font-size: 12px;
  color: #595959;
}
.content9 {
  position: absolute;
  top: 576px;
  left: 13%;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
  width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 0px 24px;
  font-size: 24px;
  color: #000;
}
.maskGroupIcon {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 320px;
  object-fit: cover;
}
.maskGroupIcon1 {
  position: absolute;
  top: 0px;
  right: 0;
  width: 480px;
  height: 320px;
  object-fit: cover;
  opacity: 0.8;
}
.coverIcon {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 320px;
  opacity: 0.5;
}
.heading19 {
  position: relative;
  letter-spacing: 0.01em;
  line-height: 48px;
}
.heading20 {
  align-self: stretch;
  position: relative;
  font-size: 16px;
  line-height: 24px;
}
.headingParent {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
}
.salery18 {
  border-radius: 14px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 4px 8px;
  gap: 8px;
}
.saleryParent15 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  text-align: left;
  font-size: 12px;
  color: #3d3d3d;
}
.content10 {
  position: absolute;
  top: calc(50% - 59px);
  left: calc(50% - 346px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
}
.banner {
  position: absolute;
  top: 80px;
  left: 0px;
  background: linear-gradient(
    -80.02deg,
    #130c2d,
    #231651 32.5%,
    #231651 60%,
    #130c2d
  );
  width: 100%;
  height: 320px;
  overflow: hidden;
  text-align: center;
  font-size: 40px;
  color: #fff;
}
.homepagejobList {
  width: 100%;
  position: relative;
  background-color: #fff;
  height: 1200px;
  overflow: hidden;
  text-align: left;
  font-size: 14px;
  color: #676767;
  font-family: "SF Pro Display";
}
</style>
