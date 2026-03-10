<template>
    <div :class="$style.hotCandidates">
          <img :class="$style.decorIcon" alt="" src="../../../public/images/decor-candiates.svg"  />
          <div :class="$style.paginationDotGroup">
                <div :class="$style.paginationDotIndicator" />
                <div :class="$style.paginationDotIndicator1" />
                <div :class="$style.paginationDotIndicator1" />
          </div>
          <div :class="$style.title">
                <b :class="$style.heading">Ứng viên nổi bật</b>
                <div :class="$style.button">
                      <div :class="$style.buttonBase" @click="goToCandidate()">
                            <b :class="$style.text">Xem tất cả</b>
                            <img :class="$style.arrowUpRightIcon" alt="" src="../../../public/images/arrowUpRight.svg" />
                      </div>
                </div>
          </div>
          <div :class="$style.candidate">
                <div :class="$style.name">
                      <div :class="$style.infor">
                            <div :class="$style.img">
                                  <img :class="$style.candidate3B5cfkx2mIcon" alt="" src="../../../public/images/anh-gai-xinh-lo-clip-169.jpg" />
                              
                            </div>
                            <div :class="$style.name1">
                                  <b :class="$style.huDuy">Đỗ Hữu Duy</b>
                                  <div :class="$style.tui">26 tuổi</div>
                            </div>
                      </div>
                      <div :class="$style.badge">
                            <div :class="$style.badgeBase">
                                  <div :class="$style.text1">Project Manager</div>
                            </div>
                      </div>
                </div>
                <div :class="$style.more">
                      <div :class="$style.level">
                            <img :class="$style.teacherIcon" alt="" src="../../../public/images/teacher.svg"  />
                            <div :class="$style.trnhParent">
                                  <b :class="$style.trnh">Trình độ:</b>
                                  <div :class="$style.middle">Middle</div>
                            </div>
                      </div>
                      <div :class="$style.level">
                            <img :class="$style.teacherIcon" alt="" src="../../../public/images/book.svg" />
                            <div :class="$style.ngoiNgParent">
                                  <b :class="$style.trnh">Ngoại ngữ:</b>
                                  <div :class="$style.middle">IELTS 7.0</div>
                            </div>
                      </div>
                </div>
          </div>
          <div :class="$style.candidate1">
                <div :class="$style.name">
                      <div :class="$style.infor">
                            <img :class="$style.imgIcon" alt=""  src="../../../public/images/anh-gai-xinh-lo-clip-169.jpg"/>
                            <div :class="$style.name1">
                                  <b :class="$style.huDuy">Nguyễn Việt An</b>
                                  <div :class="$style.tui">35 tuổi</div>
                            </div>
                      </div>
                      <div :class="$style.badge1">
                            <div :class="$style.badgeBase1">
                                  <div :class="$style.text1">Full-stack Developer</div>
                            </div>
                      </div>
                </div>
                <div :class="$style.more">
                      <div :class="$style.level">
                            <img :class="$style.teacherIcon" alt="" src="../../../public/images/teacher.svg"  />
                            <div :class="$style.trnhParent">
                                  <b :class="$style.trnh">Trình độ:</b>
                                  <div :class="$style.middle">Senior</div>
                            </div>
                      </div>
                      <div :class="$style.level">
                            <img :class="$style.teacherIcon" alt="" src="../../../public/images/book.svg" />
                            <div :class="$style.ngoiNgParent">
                                  <b :class="$style.trnh">Ngoại ngữ:</b>
                                  <div :class="$style.middle">IELTS 7.0</div>
                            </div>
                      </div>
                </div>
          </div>
          <div :class="$style.candidate2">
                <div :class="$style.name">
                      <div :class="$style.infor">
                            <img :class="$style.imgIcon" alt="" src="../../../public/images/anh-gai-xinh-lo-clip-169.jpg" />
                            <div :class="$style.name1">
                                  <b :class="$style.huDuy">Hồ Huy Anh</b>
                                  <div :class="$style.tui">30 tuổi</div>
                            </div>
                      </div>
                      <div :class="$style.badge2">
                            <div :class="$style.badgeBase2">
                                  <div :class="$style.text1">Tester</div>
                            </div>
                      </div>
                </div>
                <div :class="$style.more">
                      <div :class="$style.level">
                            <img :class="$style.teacherIcon" alt="" src="../../../public/images/teacher.svg"  />
                            <div :class="$style.trnhParent">
                                  <b :class="$style.trnh">Trình độ:</b>
                                  <div :class="$style.middle">Middle</div>
                            </div>
                      </div>
                      <div :class="$style.level">
                            <img :class="$style.teacherIcon" alt=""  src="../../../public/images/book.svg"/>
                            <div :class="$style.ngoiNgParent">
                                  <b :class="$style.trnh">Ngoại ngữ:</b>
                                  <div :class="$style.middle">IELTS 7.0</div>
                            </div>
                      </div>
                </div>
          </div>
          <div :class="$style.candidate3">
                <div :class="$style.name">
                      <div :class="$style.infor">
                            <div :class="$style.img">
                                  <img :class="$style.candidate3B5cfkx2mIcon" alt=""  src="../../../public/images/anh-gai-xinh-lo-clip-169.jpg"/>
                               
                            </div>
                            <div :class="$style.name1">
                                  <b :class="$style.huDuy">Nguyễn Hồng Thái</b>
                                  <div :class="$style.tui">24 tuổi</div>
                            </div>
                      </div>
                      <div :class="$style.badge3">
                            <div :class="$style.badgeBase3">
                                  <div :class="$style.text1">Front-end Developer</div>
                            </div>
                      </div>
                </div>
                <div :class="$style.more">
                      <div :class="$style.level">
                            <img :class="$style.teacherIcon" alt=""  src="../../../public/images/teacher.svg" />
                            <div :class="$style.trnhParent">
                                  <b :class="$style.trnh">Trình độ:</b>
                                  <div :class="$style.middle">Junior</div>
                            </div>
                      </div>
                      <div :class="$style.level">
                            <img :class="$style.teacherIcon" alt="" src="../../../public/images/book.svg" />
                            <div :class="$style.ngoiNgParent">
                                  <b :class="$style.trnh">Ngoại ngữ:</b>
                                  <div :class="$style.middle">IELTS 7.0</div>
                            </div>
                      </div>
                </div>
          </div>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router';

const route= useRouter()
const goToCandidate = () => {
    route.push("/candidates")
}
</script>
<style module>
.decorIcon {
          position: absolute;
          top: -113px;
          left: -225px;
          width: 858px;
          height: 620px;
          overflow: hidden;
          object-fit: contain;
    }
          .paginationDotIndicator {
                width: 8px;
                position: relative;
                border-radius: 4px;
                background-color: #ab1f24;
                height: 8px;
                overflow: hidden;
                flex-shrink: 0;
          }
          .paginationDotIndicator1 {
                width: 8px;
                position: relative;
                border-radius: 4px;
                background-color: #f8e9ea;
                height: 8px;
                overflow: hidden;
                flex-shrink: 0;
          }
          .paginationDotGroup {
                position: absolute;
                top: 390px;
                left: 696px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                gap: 12px;
          }
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
          .title {
                position: absolute;
                top: 80px;
                left: 120px;
                width: 1200px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                font-size: 32px;
          }
          .candidate3B5cfkx2mIcon {
                position: absolute;
                top: calc(50% - 26px);
                left: calc(50% - 26px);
                width: 52px;
                height: 52px;
                object-fit: cover;
          }
          .candidate2Tq0a2wuiIcon {
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0%;
                right: 0%;
                bottom: 0%;
                left: 0%;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
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
          .name1 {
                align-self: stretch;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
          }
          .infor {
                width: 158px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                gap: 8px;
          }
          .text1 {
                position: relative;
                line-height: 18px;
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
          .teacherIcon {
                width: 16px;
                position: relative;
                height: 16px;
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
          .ngoiNgParent {
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
                position: absolute;
                top: 144px;
                left: 120px;
                border-radius: 8px;
                background-color: #fff;
                width: 282px;
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
          .candidate1 {
                position: absolute;
                top: 144px;
                left: 426px;
                border-radius: 8px;
                background-color: #fff;
                width: 282px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                padding: 20px;
                box-sizing: border-box;
                gap: 16px;
          }
          .badgeBase2 {
                border-radius: 11px;
                background-color: #fff6ed;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                padding: 2px 12px;
          }
          .badge2 {
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                mix-blend-mode: multiply;
                text-align: center;
                font-size: 12px;
                color: #c4320a;
          }
          .candidate2 {
                position: absolute;
                top: 144px;
                left: 732px;
                border-radius: 8px;
                background-color: #fff;
                width: 282px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                padding: 20px;
                box-sizing: border-box;
                gap: 16px;
          }
          .dta053691Icon {
                position: absolute;
                top: 0px;
                left: -13px;
                width: 78px;
                height: 52px;
                object-fit: cover;
          }
          .badgeBase3 {
                border-radius: 11px;
                background-color: #fef3f2;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                padding: 2px 12px;
          }
          .badge3 {
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                mix-blend-mode: multiply;
                text-align: center;
                font-size: 12px;
                color: #b42318;
          }
          .candidate3 {
                position: absolute;
                top: 144px;
                left: 1038px;
                border-radius: 8px;
                background-color: #fff;
                width: 282px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                padding: 20px;
                box-sizing: border-box;
                gap: 16px;
          }
          .hotCandidates {
                width: 100%;
                position: relative;
                background-color: #fafafa;
                height: 500px;
                overflow: hidden;
                text-align: left;
                font-size: 16px;
                color: #000;
                font-family: 'SF Pro Display';
                margin: 0 200px;
          }
    
    </style>