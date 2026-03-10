<template>
    <div :class="$style.hotJob">
    
        <div :class="$style.headingParent">
    
            <b :class="$style.heading">Việc làm nổi bật</b>
    
            <div :class="$style.button">
    
                <div :class="$style.buttonBase" @click="goToJob()">
    
                    <b :class="$style.text">Xem tất cả</b>
    
                    <img :class="$style.arrowUpRightIcon" alt="" src="../../../public/images/arrowUpRight.svg" />
    
                </div>
    
            </div>
    
        </div>
    
        <div :class="$style.jobList">
    
            <div v-for="(job, index) in jobs" :key="index" :class="$style.jobCard">
    
                <div :class="$style.love">
    
                    <img :class="$style.heartIcon" alt="heart" src="../../../public/images/heart.svg" />
    
                </div>
    
                <div :class="$style.time">
    
                    <span>Cập nhật {{ job.updateTime }} trước - Còn </span>
    
                    <b>{{ job.daysLeft }}</b>
    
                    <span> ngày để ứng tuyển</span>
    
                </div>
    
                <div :class="$style.saleryParent">
    
                    <div v-for="(detail, detailIndex) in job.details" :key="detailIndex" :class="$style.salery">
    
                        <img :class="$style.icon" :alt="detail.alt" :src="detail.icon" />
    
                        <div :class="$style.man">{{ detail.text }}</div>
    
                    </div>
    
                </div>
    
                <img :class="$style.imgIcon" :alt="job.imageAlt" :src="job.image" />
    
                <div :class="$style.jobName">
    
                    <b :class="$style.heading1">{{ job.title }}</b>
    
                    <div :class="$style.level">
    
                        <div v-for="(badge, badgeIndex) in job.badges" :key="badgeIndex" :class="$style.badge">
    
                            <div :class="$style.badgeBase">
    
                                <div :class="$style.text1">{{ badge }}</div>
    
                            </div>
    
                        </div>
    
                    </div>
    
                </div>
    
            </div>
    
        </div>
    
        <div :class="$style.filters">
    
            <div :class="$style.buttonParent">
    
                <div :class="$style.button1">
    
                    <div :class="$style.buttonBase1">
    
                        <div :class="$style.text14">Ngẫu nhiên</div>
    
                    </div>
    
                </div>
    
                <div :class="$style.button2">
    
                    <div :class="$style.buttonBase2">
    
                        <div :class="$style.text14">Hà Nội</div>
    
                    </div>
    
                </div>
    
                <div :class="$style.button2">
    
                    <div :class="$style.buttonBase2">
    
                        <div :class="$style.text14">TP Hồ Chí Minh</div>
    
                    </div>
    
                </div>
    
                <div :class="$style.button2">
    
                    <div :class="$style.buttonBase2">
    
                        <div :class="$style.text14">Miền Bắc</div>
    
                    </div>
    
                </div>
    
                <div :class="$style.button2">
    
                    <div :class="$style.buttonBase2">
    
                        <div :class="$style.text14">Miền Nam</div>
    
                    </div>
    
                </div>
    
            </div>
    
            <div :class="$style.inputField">
    
                <div :class="$style.inputFieldBase">
    
                    <div :class="$style.inputFieldBase">
    
                        <div :class="$style.input">
    
                            <div :class="$style.content">
    
                                <div :class="$style.text19">
    
                                    <span>Lọc theo:</span>
    
                                    <span :class="$style.aIm"> Địa điểm</span>
    
                                </div>
    
                            </div>
    
                            <img :class="$style.heartIcon" alt="" src="../../../public/images/arrow-down.png" />
    
                        </div>
    
                    </div>
    
                </div>
    
            </div>
    
        </div>
    
        <div :class="$style.pagination">
    
            <div :class="$style.paginationNumbers">
    
                <div :class="$style.paginationNumberBase">
    
                    <div :class="$style.content1">
    
                        <div :class="$style.number">1</div>
    
                    </div>
    
                </div>
    
                <div :class="$style.paginationNumberBase1">
    
                    <div :class="$style.content1">
    
                        <div :class="$style.number">2</div>
    
                    </div>
    
                </div>
    
                <div :class="$style.paginationNumberBase1">
    
                    <div :class="$style.content1">
    
                        <div :class="$style.number">3</div>
    
                    </div>
    
                </div>
    
                <div :class="$style.paginationNumberBase1">
    
                    <div :class="$style.content1">
    
                        <div :class="$style.number">...</div>
    
                    </div>
    
                </div>
    
                <div :class="$style.paginationNumberBase1">
    
                    <div :class="$style.content1">
    
                        <div :class="$style.number">8</div>
    
                    </div>
    
                </div>
    
                <div :class="$style.paginationNumberBase1">
    
                    <div :class="$style.content1">
    
                        <div :class="$style.number">9</div>
    
                    </div>
    
                </div>
    
            </div>
    
            <div :class="$style.arrowLeftWrapper">
    
                <img :class="$style.heartIcon" alt="" src="../../../public/images/arrow-left.svg"/>
    
            </div>
    
            <div :class="$style.arrowLeftWrapper">
    
                <img :class="$style.heartIcon" alt="" src="../../../public/images/arrow-right.svg"/>
    
            </div>
    
        </div>
    
    </div>
</template>
<script setup>

import { reactive } from 'vue';
import { useRouter } from 'vue-router';
const route= useRouter()
const goToJob = () => {
    route.push("/joblist")
}
const jobs = reactive([{
        updateTime: "3 giờ",
        daysLeft: 10,
        details: [
            { text: "400 - 600 man", icon: "../../../public/images/money.svg", alt: "money" },
            { text: "Nhật Bản", icon: "../../../public/images/japan.svg", alt: "location" },
            { text: "Toàn thời gian", icon: "../../../public/images/briefcase.svg", alt: "job type" }
        ],
        image: "../../../public/images/image 643.png",
        imageAlt: "job image",
        title: "Sales IT làm việc tại Tokyo - Nagoya - Osaka",
        badges: ["Fresher"]
    },
    {
        updateTime: "3 giờ",
        daysLeft: 10,
        details: [
            { text: "400 - 600 man", icon: "../../../public/images/money.svg", alt: "money" },
            { text: "Nhật Bản", icon: "../../../public/images/japan.svg", alt: "location" },
            { text: "Toàn thời gian", icon: "../../../public/images/briefcase.svg", alt: "job type" }
        ],
        image: "../../../public/images/image 643.png",
        imageAlt: "job image",
        title: "SE/BrSE (Outsystem) làm việc tại Tokyo/Nagoya",
        badges: ["Junior"]
    },
    {
        updateTime: "3 giờ",
        daysLeft: 10,
        details: [
            { text: "400 - 600 man", icon: "../../../public/images/money.svg", alt: "money" },
            { text: "Nhật Bản", icon: "../../../public/images/japan.svg", alt: "location" },
            { text: "Toàn thời gian", icon: "../../../public/images/briefcase.svg", alt: "job type" }
        ],
        image: "../../../public/images/image 643.png",
        imageAlt: "job image",
        title: "Marketing Executive (Korea)",
        badges: ["Middle"]
    },
    {
        updateTime: "3 giờ",
        daysLeft: 10,
        details: [
            { text: "Thỏa thuận", icon: "../../../public/images/money.svg", alt: "money" },
            { text: "Mỹ", icon: "../../../public/images/us.svg", alt: "location" },
            { text: "Toàn thời gian", icon: "../../../public/images/briefcase.svg", alt: "job type" }
        ],
        image: "../../../public/images/image 643.png",
        imageAlt: "job image",
        title: "Senior Java and zOS SW Engineers",
        badges: ["Senior"]
    },
    {
        updateTime: "3 giờ",
        daysLeft: 10,
        details: [
            { text: "35 triệu", icon: "../../../public/images/money.svg", alt: "money" },
            { text: "Hà Nội", icon: "../../../public/images/vn.svg", alt: "location" },
            { text: "Toàn thời gian", icon: "../../../public/images/briefcase.svg", alt: "job type" }
        ],
        image: "../../../public/images/image 643.png",
        imageAlt: "job image",
        title: "Business Analyst (Global Market)",
        badges: ["Fresher", "Junior", "Middle", "+1"]
    },
    {
        updateTime: "3 giờ",
        daysLeft: 10,
        details: [
            { text: "Thỏa thuận", icon: "../../../public/images/money.svg", alt: "money" },
            { text: "Huế", icon: "../../../public/images/vn.svg", alt: "location" },
            { text: "Toàn thời gian", icon: "../../../public/images/briefcase.svg", alt: "job type" }
        ],
        image: "../../../public/images/image 643.png",
        imageAlt: "job image",
        title: "Senior .NET (Rikkei Huế)",
        badges: ["Junior"]
    },
    {
        updateTime: "3 giờ",
        daysLeft: 10,
        details: [
            { text: "400 - 600 man", icon: "../../../public/images/money.svg", alt: "money" },
            { text: "Nhật Bản", icon: "../../../public/images/japan.svg", alt: "location" },
            { text: "Toàn thời gian", icon: "../../../public/images/briefcase.svg", alt: "job type" }
        ],
        image: "../../../public/images/image 643.png",
        imageAlt: "job image",
        title: "Tuyển dụng kỹ sư CAD làm việc tại Tokyo",
        badges: ["Fresher"]
    },
    {
        updateTime: "3 giờ",
        daysLeft: 10,
        details: [
            { text: "30 triệu", icon: "../../../public/images/money.svg", alt: "money" },
            { text: "Hà Nội", icon: "../../../public/images/vn.svg", alt: "location" },
            { text: "Toàn thời gian", icon: "../../../public/images/briefcase.svg", alt: "job type" }
        ],
        image: "../../../public/images/image 643.png",
        imageAlt: "job image",
        title: "Junior/Middle VueJS",
        badges: ["Junior", "Middle"]
    },
    {
        updateTime: "3 giờ",
        daysLeft: 10,
        details: [
            { text: "Thỏa thuận", icon: "../../../public/images/money.svg", alt: "money" },
            { text: "Huế", icon: "../../../public/images/vn.svg", alt: "location" },
            { text: "Toàn thời gian", icon: "../../../public/images/briefcase.svg", alt: "job type" }
        ],
        image: "../../../public/images/image 643.png",
        imageAlt: "job image",
        title: "Senior .NET Developer (Rikkei Huế)",
        badges: ["Senior"]
    }
]);
</script>

<style module>
.heading {
    position: relative;
    line-height: 40px;
}

.text {
    position: relative;
    line-height: 24px;
}

.arrowUpRightIcon {
    width: 20px;
    position: relative;
    height: 20px;
    overflow: hidden;
    flex-shrink: 0;
}

.buttonBase {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.button {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 16px;
    color: #bc2228;
}

.headingParent {
    position: absolute;
    top: 80px;
    left: 120px;
    width: 1200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 32px;
    color: #000;
}

.heartIcon {
    width: 16px;
    position: relative;
    height: 16px;
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

.heading1 {
    align-self: stretch;
    position: relative;
    line-height: 24px;
}

.text1 {
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
    color: #ab1f24;
}

.jobList {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    padding: 10% 120px;
}

.jobCard {
    flex: 1 1 calc(33.333% - 24px);
    /* Each card takes 1/3 of the row minus the gap */
    max-width: 384px;
    /* Set the maximum width for each card */
    border-radius: 8px;
    background-color: #fafafa;
    border: 1px solid #ddd;
    box-sizing: border-box;
    height: 186px;
    position: relative;
}

.text14 {
    position: relative;
    line-height: 20px;
    font-weight: 600;
}

.buttonBase1 {
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    background-color: #bc2228;
    border: 1px solid #bc2228;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px 16px;
}

.button1 {
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    color: #fff;
}

.buttonBase2 {
    border-radius: 8px;
    background-color: #f4f4f4;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px 16px;
}

.button2 {
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
}

.buttonParent {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;
}

.aIm {
    color: #3d3d3d;
}

.text19 {
    position: relative;
    line-height: 24px;
    font-weight: 600;
}

.content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
}

.input {
    align-self: stretch;
    border-radius: 8px;
    background-color: #fafafa;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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
    width: 276px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 16px;
    color: #919191;
}

.filters {
    position: absolute;
    top: 136px;
    left: 120px;
    width: 1200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    color: #676767;
}

.number {
    position: relative;
    line-height: 20px;
    font-weight: 500;
}

.content1 {
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
    top: 846px;
    left: 30%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    text-align: center;
    font-size: 14px;
    color: #919191;
}

.hotJob {
    width: 100%;
    position: relative;
    height: 966px;
    text-align: left;
    font-size: 12px;
    color: #848484;
    font-family: 'SF Pro Display';
    margin: 0 200px;
}
</style>