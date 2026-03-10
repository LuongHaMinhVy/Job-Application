<template>
    <div>
    
        <Header/>
        <div :class="$style.banner">
    
            <img :class="$style.downtownDistrictWithSunLigIcon" alt="" src="../../../public/images/downtown-district-with-sun-light-flying-airplane 1.png" />

            <img :class="$style.coverIcon" alt="" src="../../../public/images/cover.jpg" />

            <div :class="$style.headingParent">

                <b :class="$style.heading1">Ứng viên nổi bật</b>

                <div :class="$style.heading2">Rikkei Jobs - đồng hành trên phát triển con đường sự nghiệp của bạn.</div>

            </div>

        </div>
        <div :class="$style.homepagecandidate">
    
            <div :class="$style.searchBox">
    
                <div :class="$style.searchadd">
    
                    <div :class="$style.inputField">
    
                        <div :class="$style.inputFieldBase">
    
                            <div :class="$style.inputWithLabel">
    
                                <div :class="$style.input">
    
                                    <div :class="$style.content">
    
                                        <img :class="$style.briefcaseIcon" alt="" src="../../../public/images/briefcase.svg" />
    
                                        <div :class="$style.text">Vị trí</div>
    
                                    </div>
    
                                    <img :class="$style.arrowDownIcon" alt="" src="../../../public/images/arrowDown.svg" />
    
                                </div>
    
                            </div>
    
                        </div>
    
                    </div>
    
                    <div :class="$style.inputField">
    
                        <div :class="$style.inputWithLabel">
    
                            <div :class="$style.inputWithLabel">
    
                                <div :class="$style.input">
    
                                    <div :class="$style.content">
    
                                        <img :class="$style.briefcaseIcon" alt="" src="../../../public/images/briefcase.svg" />
    
                                        <div :class="$style.text">Tên ứng viên</div>
    
                                    </div>
    
                                    <img :class="$style.arrowDownIcon" alt="" src="../../../public/images/arrowDown.svg" />
    
                                </div>
    
                            </div>
    
                        </div>
    
                    </div>
    
                    <div :class="$style.inputField">
    
                        <div :class="$style.inputWithLabel">
    
                            <div :class="$style.inputWithLabel">
    
                                <div :class="$style.input">
    
                                    <div :class="$style.content">
    
                                        <img :class="$style.briefcaseIcon" alt="" src="../../../public/images/award.svg" />
    
                                        <div :class="$style.text">Kinh nghiệm làm việc</div>
    
                                    </div>
    
                                    <img :class="$style.arrowDownIcon" alt="" src="../../../public/images/arrowDown.svg" />
    
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
    
            <div :class="$style.content3">
    
                <b :class="$style.heading">Tất cả ứng viên</b>
    
                <div :class="$style.filter">
    
                    <div :class="$style.spXpTheoParent">
    
                        <div :class="$style.spXpTheo">Sắp xếp theo:</div>
    
                        <div :class="$style.button1">
    
                            <div :class="$style.buttonBase1">
    
                                <div :class="$style.text4">Từ A-Z</div>
    
                                <img :class="$style.briefcaseIcon" alt="" src="../../../public/images/arrowDown.svg" />
    
                            </div>
    
                        </div>
    
                    </div>
    
                </div>
    
            </div>
    
            
    
            <div :class="$style.list">
    
                <div :class="$style.candidate" v-for="candidate in candidates" :key="candidate.id" @click="goToCandidateDetail(candidate.id)">
    
                    <div :class="$style.name">
    
                        <div :class="$style.infor">
    
                            <div :class="$style.img">
    
                                <img :class="$style.candidate3B5cfkx2mIcon" alt="" :src="candidate.avatar"/>
    
                            </div>
    
                            <div :class="$style.inputWithLabel">
    
                                <b :class="$style.huDuy">{{ candidate.name }}</b>
    
                                <div :class="$style.tui">{{calculateAge(candidate.dateOfBirth)}} tuổi</div>
    
                            </div>
    
                        </div>
    
                        <div :class="$style.badge">
    
                            <div :class="$style.badgeBase">
    
                                <div :class="$style.spXpTheo">{{userCertificates.certificateValue}}</div>
    
                            </div>
    
                        </div>
    
                    </div>
    
                    <div :class="$style.more">
    
                        <div :class="$style.level">
    
                            <img :class="$style.arrowDownIcon" alt="" src="../../../public/images/teacher.svg" />
    
                            <div :class="$style.trnhParent">
    
                                <b :class="$style.trnh">Trình độ:</b>
    
                                <div :class="$style.middle">Middle</div>
    
                            </div>
    
                        </div>
    
                        <div :class="$style.level">
    
                            <img :class="$style.arrowDownIcon" alt="" src="../../../public/images/archive-book.svg" />
    
                            <div :class="$style.content">
    
                                <b :class="$style.trnh">Ngoại ngữ:</b>
    
                                <div :class="$style.middle">{{userCertificates.certificateValue}}</div>
    
                            </div>
    
                        </div>
    
                    </div>
    
                </div>
    
            </div>
    
    
    
            <div :class="$style.pagination">
    
                <div :class="$style.paginationNumbers">
    
                    <div :class="$style.paginationNumberBase">
    
                        <div :class="$style.content4">
    
                            <div :class="$style.number">1</div>
    
                        </div>
    
                    </div>
    
                    <div :class="$style.paginationNumberBase1">
    
                        <div :class="$style.content4">
    
                            <div :class="$style.number">2</div>
    
                        </div>
    
                    </div>
    
                    <div :class="$style.paginationNumberBase1">
    
                        <div :class="$style.content4">
    
                            <div :class="$style.number">3</div>
    
                        </div>
    
                    </div>
    
                    <div :class="$style.paginationNumberBase1">
    
                        <div :class="$style.content4">
    
                            <div :class="$style.number">...</div>
    
                        </div>
    
                    </div>
    
                    <div :class="$style.paginationNumberBase1">
    
                        <div :class="$style.content4">
    
                            <div :class="$style.number">8</div>
    
                        </div>
    
                    </div>
    
                    <div :class="$style.paginationNumberBase1">
    
                        <div :class="$style.content4">
    
                            <div :class="$style.number">9</div>
    
                        </div>
    
                    </div>
    
                </div>
    
                <div :class="$style.arrowLeftWrapper">
    
                    <img :class="$style.arrowDownIcon" alt="" src="../../../public/images/arrow-left.svg" />
    
                </div>
    
                <div :class="$style.arrowLeftWrapper">
    
                    <img :class="$style.arrowDownIcon" alt="" src="../../../public/images/arrow-right.svg" />
    
                </div>
    
            </div>
    
    
    
        </div>
    
        <footer>
    
            <Footer />
    
        </footer>
    
    </div>
</template>
<script setup>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import Footer from '@/components/user/Footer.vue';
import Header from '@/components/user/Header.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useStore();
onMounted(() => {
  store.dispatch('fetchCandidates');
  store.dispatch('fetchCertificates');
  store.dispatch('getUserCertificates');
});
const candidates = computed(() => store.getters.getCandidates);
const certificates = computed(() => store.getters.certificates);
const userCertificates = computed(() => store.getters.getUserCertificates);

console.log();
const goToCandidateDetail=(id)=>{
  router.push(`/candidate-detail/${id}`);
}
function calculateAge(dateOfBirth) {
  const birthDate = new Date(dateOfBirth);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  // Check if the birthday has occurred this year or not
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}


</script>
<style module>
.briefcaseIcon {
    width: 20px;
    position: relative;
    height: 20px;
}

.text {
    position: relative;
    line-height: 24px;
    font-weight: 500;
}

.content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
}

.arrowDownIcon {
    width: 16px;
    position: relative;
    height: 16px;
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
    justify-content: space-between;
    padding: 12px 16px;
}

.inputWithLabel {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
}

.inputFieldBase {
    align-self: stretch;
    height: 44px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}

.inputField {
    flex: 1;
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
    left: 20%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 24px;
    color: #676767;
}

.heading {
    position: relative;
    line-height: 32px;
}

.spXpTheo {
    position: relative;
    line-height: 18px;
}

.text4 {
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

.filter {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 12px;
    color: #595959;
}

.content3 {
    position: absolute;
    top: 576px;
    left: 20%;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
    width: 1200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 0px 24px;
    font-size: 24px;
}

.downtownDistrictWithSunLigIcon {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    object-fit: cover;
}

.coverIcon {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    opacity: 0.6;
}

.heading1 {
    position: relative;
    letter-spacing: 0.01em;
    line-height: 48px;
}

.heading2 {
    position: relative;
    font-size: 16px;
    line-height: 24px;
}

.headingParent {
    position: absolute;
    top: calc(50% - 38px);
    left: calc(50% - 230px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 4px;
}

.banner {
    position: absolute;
    top: 80px;
    left: 0px;
    background: linear-gradient(-80.02deg, #130c2d, #231651 32.5%, #231651 60%, #130c2d);
    width: 100%;
    height: 350px;
    overflow: hidden;
    text-align: center;
    font-size: 40px;
    color: #fff;
    z-index: 10;
}

.candidate3B5cfkx2mIcon {
    position: absolute;
    top: calc(50% - 26px);
    left: calc(50% - 26px);
    width: 52px;
    height: 52px;
    object-fit: cover;
}

.img {
    width: 52px;
    position: relative;
    border-radius: 8px;
    background-color: #fafafa;
    border: 1px solid #ccc;
    box-sizing: border-box;
    height: 52px;
    overflow: hidden;
    flex-shrink: 0;
}

.huDuy {
    align-self: stretch;
    position: relative;
    line-height: 24px;
}

.tui {
    align-self: stretch;
    position: relative;
    font-size: 12px;
    line-height: 18px;
    color: #676767;
}

.infor {
    width: 158px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 8px;
}

.badgeBase {
    border-radius: 11px;
    background-color: #ecfdf3;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 2px 12px;
}

.badge {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    mix-blend-mode: multiply;
    text-align: center;
    font-size: 12px;
    color: #027a48;
}

.name {
    align-self: stretch;
    border-bottom: 0.5px solid #ddd;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0px 0px 16px;
}

.trnh {
    position: relative;
    line-height: 20px;
}

.middle {
    position: relative;
    line-height: 20px;
    color: #676767;
}

.trnhParent {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
}

.level {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
}

.more {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 8px;
    font-size: 14px;
    color: #2d2c2c;
}

.candidate {
    width: 282px;
    border-radius: 8px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 20px;
    box-sizing: border-box;
    gap: 16px;
}

.imgIcon {
    width: 52px;
    position: relative;
    border-radius: 8px;
    height: 52px;
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
}

.badgeBase1 {
    border-radius: 11px;
    background-color: #f0f9ff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 2px 12px;
}

.badge1 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    mix-blend-mode: multiply;
    text-align: center;
    font-size: 12px;
    color: #026aa2;
}

.list {
    position: absolute;
    top: 656px;
    left: 20%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 24px;
}

.number {
    position: relative;
    line-height: 20px;
    font-weight: 500;
}

.content4 {
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
    top: 900px;
    left: 40%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    text-align: center;
    font-size: 14px;
    color: #919191;
}

.homepagecandidate {
    width: 100%;
    position: relative;
    background-color: #fafafa;
    height: 1000px;
    overflow: hidden;
    text-align: left;
    font-size: 16px;
    color: #000;
    font-family: 'SF Pro Display';
}
</style>