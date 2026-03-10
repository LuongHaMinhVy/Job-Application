<template>
  	<div :class="$style.frameParent">
    		<div :class="$style.frameGroup">
      			<div :class="$style.ttCParent">
        				<b :class="$style.ttC">Tất cả</b>
        				<div :class="$style.badge">
          					<div :class="$style.badgeBase">
            						<div :class="$style.text">99+</div>
          					</div>
        				</div>
      			</div>
      			<div :class="$style.angHinThParent">
        				<b :class="$style.ttC">Đang hiển thị</b>
        				<div :class="$style.badge">
          					<div :class="$style.badgeBase">
            						<div :class="$style.text">99+</div>
          					</div>
        				</div>
      			</div>
      			<div :class="$style.angHinThParent">
        				<b :class="$style.ttC">Đang xét duyệt</b>
        				<div :class="$style.badge">
          					<div :class="$style.badgeBase">
            						<div :class="$style.text">99+</div>
          					</div>
        				</div>
      			</div>
      			<div :class="$style.angHinThParent">
        				<b :class="$style.ttC">Bị từ chối</b>
        				<div :class="$style.badge">
          					<div :class="$style.badgeBase">
            						<div :class="$style.text">99+</div>
          					</div>
        				</div>
      			</div>
      			<div :class="$style.angHinThParent">
        				<b :class="$style.ttC">Không công khai</b>
        				<div :class="$style.badge">
          					<div :class="$style.badgeBase">
            						<div :class="$style.text">99+</div>
          					</div>
        				</div>
      			</div>
    		</div>
    		<div :class="$style.tinTuynDng">TIN TUYỂN DỤNG</div>
    		<div :class="$style.thiGianHin">THỜI GIAN HIỂN THỊ</div>
    		<div :class="$style.tonBThi">TOÀN BỘ THỜI GIAN HIỂN THỊ</div>
    		<div :class="$style.inputField">
      			<div :class="$style.inputFieldBase">
        				<div :class="$style.inputWithLabel">
          					<div :class="$style.input">
            						<div :class="$style.content">
              							<img :class="$style.searchNormalIcon" alt="" src="/images/dashboard-vuesax-linear-search-normal.svg" />
              							<div :class="$style.text5">Tìm kiếm tin tuyển dụng theo tiêu đề hoặc mã tin</div>
            						</div>
          					</div>
							  <div :class="$style.addJobButtonContainer">
								<button :class="$style.addJobButton" @click="navigateToAddJob">Thêm Công Việc</button>
							  </div>
        				</div>
      			</div>
    		</div>
    		<img :class="$style.setting2Icon" alt="" src="/images/dashboard-vuesax-bold-setting-2.svg" />
    		<div :class="$style.frameContainer">
      			<div :class="$style.edit2Parent">
        				<img :class="$style.edit2Icon" alt="" src="../../../../public/images/dashboard-vuesax-bold-edit-2.svg" />
        				<img :class="$style.edit2Icon" alt="" src="../../../../public/images/dashboard-vuesax-bold-/images/dashboard-vuesax-bold-trash.svg" />
      			</div>
      			<div :class="$style.frameDiv">
        				<div :class="$style.content">
          					<img :class="$style.peopleIcon" alt="" src="/images/dashboard-vuesax-bold-people.svg" />
          					<div :class="$style.ttC">
            						<span>Lượt ứng tuyển: </span>
            						<b>18</b>
          					</div>
        				</div>
        				<div :class="$style.calendar2Parent">
          					<img :class="$style.peopleIcon" alt="" src="/images/dashboard-vuesax-bold-calendar-2.svg" />
          					<div :class="$style.ttC">10/10/2024 - Hiện tại</div>
        				</div>
      			</div>
      			<div :class="$style.frameParent1">
        				<div :class="$style.content">
          					<img :class="$style.peopleIcon" alt="" src="/images/dashboard-vuesax-bold-people.svg" />
          					<div :class="$style.ttC">
            						<span>Lượt ứng tuyển: </span>
            						<b>18</b>
          					</div>
        				</div>
        				<div :class="$style.calendar2Parent">
          					<img :class="$style.peopleIcon" alt="" src="/images/dashboard-vuesax-bold-calendar-2.svg" />
          					<div :class="$style.ttC">10/10/2024 - Hiện tại</div>
        				</div>
      			</div>
      			<div :class="$style.frameParent2">
        				<div :class="$style.content">
          					<div :class="$style.badges">
            						<div :class="$style.content1">
              							<div :class="$style.ttC">#123456</div>
            						</div>
          					</div>
          					<div :class="$style.badges1">
            						<div :class="$style.content1">
              							<div :class="$style.ttC">Đang hiển thị</div>
            						</div>
          					</div>
        				</div>
        				<div :class="$style.salesItLm">Sales IT làm việc tại Tokyo - Nagoya - Osaka</div>
        				<div :class="$style.cvNgTuyn">20CV ứng tuyển chưa xem</div>
        				<div :class="$style.badges2">
          					<div :class="$style.content1">
            						<b :class="$style.ttC">Xem CV (20)</b>
          					</div>
        				</div>
      			</div>
    		</div>
    		<div :class="$style.edit2Group">
      			<img :class="$style.edit2Icon1" alt="" src="../../../../public/images/dashboard-vuesax-bold-edit-2.svg" />
      			<img :class="$style.trashIcon1" alt="" src="/images/dashboard-vuesax-bold-trash.svg" />
      			<div :class="$style.frameDiv">
        				<div :class="$style.content">
          					<img :class="$style.peopleIcon" alt="" src="/images/dashboard-vuesax-bold-people.svg" />
          					<div :class="$style.ttC">
            						<span>Lượt ứng tuyển: </span>
            						<b>18</b>
          					</div>
        				</div>
        				<div :class="$style.calendar2Parent">
          					<img :class="$style.peopleIcon" alt="" src="/images/dashboard-vuesax-bold-calendar-2.svg" />
          					<div :class="$style.ttC">10/10/2024 - Hiện tại</div>
        				</div>
      			</div>
      			<div :class="$style.frameParent1">
        				<div :class="$style.content">
          					<img :class="$style.peopleIcon" alt="" src="/images/dashboard-vuesax-bold-people.svg" />
          					<div :class="$style.ttC">
            						<span>Lượt ứng tuyển: </span>
            						<b>18</b>
          					</div>
        				</div>
        				<div :class="$style.calendar2Parent">
          					<img :class="$style.peopleIcon" alt="" src="/images/dashboard-vuesax-bold-calendar-2.svg" />
          					<div :class="$style.ttC">10/10/2024 - Hiện tại</div>
        				</div>
      			</div>
      			<div :class="$style.frameParent2">
        				<div :class="$style.content">
          					<div :class="$style.badges">
            						<div :class="$style.content1">
              							<div :class="$style.ttC">#123456</div>
            						</div>
          					</div>
          					<div :class="$style.badges4">
            						<div :class="$style.content1">
              							<div :class="$style.ttC">Đang xét duyệt</div>
            						</div>
          					</div>
        				</div>
        				<div :class="$style.salesItLm">Business Analyst (Global Market)</div>
        				<div :class="$style.cvNgTuyn">20CV ứng tuyển chưa xem</div>
        				<div :class="$style.badges2">
          					<div :class="$style.content1">
            						<b :class="$style.ttC">Xem CV (20)</b>
          					</div>
        				</div>
      			</div>
    		</div>
    		<div :class="$style.edit2Container">
      			<img :class="$style.edit2Icon1" alt="" src="../../../../public/images/dashboard-vuesax-bold-edit-2.svg" />
      			<img :class="$style.trashIcon1" alt="" src="/images/dashboard-vuesax-bold-trash.svg" />
      			<div :class="$style.frameDiv">
        				<div :class="$style.content">
          					<img :class="$style.peopleIcon" alt="" src="/images/dashboard-vuesax-bold-people.svg" />
          					<div :class="$style.ttC">
            						<span>Lượt ứng tuyển: </span>
            						<b>18</b>
          					</div>
        				</div>
        				<div :class="$style.calendar2Parent">
          					<img :class="$style.peopleIcon" alt="" src="/images/dashboard-vuesax-bold-calendar-2.svg" />
          					<div :class="$style.ttC">10/10/2024 - Hiện tại</div>
        				</div>
      			</div>
      			<div :class="$style.frameParent1">
        				<div :class="$style.content">
          					<img :class="$style.peopleIcon" alt="" src="/images/dashboard-vuesax-bold-people.svg" />
          					<div :class="$style.ttC">
            						<span>Lượt ứng tuyển: </span>
            						<b>18</b>
          					</div>
        				</div>
        				<div :class="$style.calendar2Parent">
          					<img :class="$style.peopleIcon" alt="" src="/images/dashboard-vuesax-bold-calendar-2.svg" />
          					<div :class="$style.ttC">10/10/2024 - Hiện tại</div>
        				</div>
      			</div>
      			<div :class="$style.frameParent2">
        				<div :class="$style.content">
          					<div :class="$style.badges">
            						<div :class="$style.content1">
              							<div :class="$style.ttC">#123456</div>
            						</div>
          					</div>
          					<div :class="$style.badges7">
            						<div :class="$style.content1">
              							<div :class="$style.ttC">Bị từ chối</div>
            						</div>
          					</div>
        				</div>
        				<div :class="$style.salesItLm">Senior .NET (Rikkei Huế)</div>
        				<div :class="$style.cvNgTuyn">20CV ứng tuyển chưa xem</div>
        				<div :class="$style.badges2">
          					<div :class="$style.content1">
            						<b :class="$style.ttC">Xem CV (20)</b>
          					</div>
        				</div>
      			</div>
    		</div>
    		<div :class="$style.edit2Parent1">
      			<img :class="$style.edit2Icon1" alt="" src="../../../../public/images/dashboard-vuesax-bold-edit-2.svg" />
      			<img :class="$style.trashIcon1" alt="" src="/images/dashboard-vuesax-bold-trash.svg" />
      			<div :class="$style.frameDiv">
        				<div :class="$style.content">
          					<img :class="$style.peopleIcon" alt="" src="/images/dashboard-vuesax-bold-people.svg" />
          					<div :class="$style.ttC">
            						<span>Lượt ứng tuyển: </span>
            						<b>18</b>
          					</div>
        				</div>
        				<div :class="$style.calendar2Parent">
          					<img :class="$style.peopleIcon" alt="" src="/images/dashboard-vuesax-bold-calendar-2.svg" />
          					<div :class="$style.ttC">10/10/2024 - Hiện tại</div>
        				</div>
      			</div>
      			<div :class="$style.frameParent1">
        				<div :class="$style.content">
          					<img :class="$style.peopleIcon" alt="" src="/images/dashboard-vuesax-bold-people.svg" />
          					<div :class="$style.ttC">
            						<span>Lượt ứng tuyển: </span>
            						<b>18</b>
          					</div>
        				</div>
        				<div :class="$style.calendar2Parent">
          					<img :class="$style.peopleIcon" alt="" src="/images/dashboard-vuesax-bold-calendar-2.svg" />
          					<div :class="$style.ttC">10/10/2024 - Hiện tại</div>
        				</div>
      			</div>
      			<div :class="$style.frameParent2">
        				<div :class="$style.content">
          					<div :class="$style.badges">
            						<div :class="$style.content1">
              							<div :class="$style.ttC">#123456</div>
            						</div>
          					</div>
          					<div :class="$style.badges1">
            						<div :class="$style.content1">
              							<div :class="$style.ttC">Đang hiển thị</div>
            						</div>
          					</div>
        				</div>
        				<div :class="$style.salesItLm">Sales IT làm việc tại Tokyo - Nagoya - Osaka</div>
        				<div :class="$style.cvNgTuyn">20CV ứng tuyển chưa xem</div>
        				<div :class="$style.badges2">
          					<div :class="$style.content1">
            						<b :class="$style.ttC">Xem CV (20)</b>
          					</div>
        				</div>
      			</div>
    		</div>
			<div :class="$style.pagination">
				<div :class="$style.paginationNumbers">
				  <div :class="$style.paginationNumberBase" @click="setPage(1)">
					<div :class="$style.content13" :class="{ active: currentPage === 1 }">
					  <div :class="$style.number">1</div>
					</div>
				  </div>
				  <div :class="$style.paginationNumberBase1" @click="setPage(2)">
					<div :class="$style.content13" :class="{ active: currentPage === 2 }">
					  <div :class="$style.number">2</div>
					</div>
				  </div>
				  <!-- Thêm các số trang khác tương tự -->
				  <div :class="$style.paginationNumberBase1" @click="setPage(9)">
					<div :class="$style.content13" :class="{ active: currentPage === 9 }">
					  <div :class="$style.number">9</div>
					</div>
				  </div>
				</div>
				<button :class="$style.arrowLeftWrapper" @click="previousPage">
				  <img alt="Previous" src="/images/dashboard-vuesax-outline-arrow-left.svg" />
				</button>
				<button :class="$style.arrowLeftWrapper" @click="nextPage">
				  <img alt="Next" src="/images/dashboard-vuesax-outline-arrow-right.svg" />
				</button>
			  </div>
			  
</template>
<script lang="ts">
  	import { defineComponent } from 'vue'
  	
  	
  	export default defineComponent({
    		name: "Frame",

  data() {
    return {
      currentPage: 1,
      totalPages: 9, // Tổng số trang
    };
  },
  methods: {
	methods: {
    navigateToAddJob() {
      this.$router.push({ name: 'AddJob' });
    },

  },
    setPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    editItem() {
    },
    deleteItem() {
    }
  }
});
</script>
<style module>.ttC {
    		position: relative;
    		line-height: 18px;
  	}
    		.text {
      			position: relative;
      			line-height: 18px;
      			font-weight: 500;
    		}
    		.badgeBase {
      			border-radius: 16px;
      			background-color: #bc2228;
      			display: flex;
      			flex-direction: row;
      			align-items: center;
      			justify-content: center;
      			padding: 2px 8px;
    		}
    		.badge {
      			display: flex;
      			flex-direction: row;
      			align-items: flex-start;
      			justify-content: flex-start;
      			mix-blend-mode: multiply;
      			text-align: center;
      			color: #fff;
    		}
    		.ttCParent {
      			border-bottom: 2px solid #3d3d3d;
      			display: flex;
      			flex-direction: row;
      			align-items: center;
      			justify-content: flex-start;
      			padding: 12px;
      			gap: 8px;
    		}
    		.angHinThParent {
      			display: flex;
      			flex-direction: row;
      			align-items: center;
      			justify-content: flex-start;
      			padding: 12px;
      			gap: 8px;
    		}
    		.frameGroup {
      			position: absolute;
      			top: 0px;
      			left: 32px;
      			border-bottom: 2px solid #ddd;
      			box-sizing: border-box;
      			width: 918px;
      			display: flex;
      			flex-direction: row;
      			align-items: center;
      			justify-content: flex-start;
      			color: #2d2c2c;
    		}
    		.tinTuynDng {
      			position: absolute;
      			top: 130px;
      			left: 102px;
      			font-size: 14px;
      			line-height: 20px;
      			font-weight: 600;
    		}
    		.thiGianHin {
      			position: absolute;
      			top: 130px;
      			left: 408px;
      			font-size: 14px;
      			line-height: 20px;
      			font-weight: 600;
    		}
    		.tonBThi {
      			position: absolute;
      			top: 130px;
      			left: 613px;
      			font-size: 14px;
      			line-height: 20px;
      			font-weight: 600;
    		}
    		.searchNormalIcon {
      			width: 20px;
      			position: relative;
      			height: 20px;
    		}
    		.text5 {
      			position: relative;
      			line-height: 20px;
    		}
    		.content {
      			display: flex;
      			flex-direction: row;
      			align-items: center;
      			justify-content: flex-start;
      			gap: 8px;
    		}
    		.input {
      			align-self: stretch;
      			flex: 1;
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
    		.inputWithLabel {
      			align-self: stretch;
      			height: 44px;
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
      			position: absolute;
      			top: 62px;
      			left: 32px;
      			width: 454px;
      			display: flex;
      			flex-direction: column;
      			align-items: flex-start;
      			justify-content: flex-start;
      			font-size: 14px;
    		}
    		.setting2Icon {
      			position: absolute;
      			top: 130px;
      			left: 32px;
      			width: 20px;
      			height: 20px;
    		}
    		.edit2Icon {
      			align-self: stretch;
      			position: relative;
      			max-width: 100%;
      			overflow: hidden;
      			height: 16px;
      			flex-shrink: 0;
    		}
    		.edit2Parent {
      			position: absolute;
      			top: 0px;
      			left: 0px;
      			width: 16px;
      			display: flex;
      			flex-direction: column;
      			align-items: flex-start;
      			justify-content: flex-start;
      			gap: 12px;
    		}
    		.peopleIcon {
      			width: 16px;
      			position: relative;
      			height: 16px;
    		}
    		.calendar2Parent {
      			align-self: stretch;
      			display: flex;
      			flex-direction: row;
      			align-items: center;
      			justify-content: flex-start;
      			gap: 8px;
    		}
    		.frameDiv {
      			position: absolute;
      			top: 0px;
      			left: 376px;
      			width: 132px;
      			display: flex;
      			flex-direction: column;
      			align-items: flex-start;
      			justify-content: flex-start;
      			gap: 8px;
    		}
    		.frameParent1 {
      			position: absolute;
      			top: 0px;
      			left: 581px;
      			width: 132px;
      			display: flex;
      			flex-direction: column;
      			align-items: flex-start;
      			justify-content: flex-start;
      			gap: 8px;
    		}
    		.content1 {
      			display: flex;
      			flex-direction: row;
      			align-items: center;
      			justify-content: flex-start;
    		}
    		.badges {
      			border-radius: 4px;
      			background-color: #f4f4f4;
      			display: flex;
      			flex-direction: row;
      			align-items: center;
      			justify-content: center;
      			padding: 4px 8px;
    		}
    		.badges1 {
      			border-radius: 4px;
      			background-color: #ecfdf3;
      			display: flex;
      			flex-direction: row;
      			align-items: center;
      			justify-content: center;
      			padding: 4px 8px;
      			color: #039855;
    		}
    		.salesItLm {
      			align-self: stretch;
      			position: relative;
      			line-height: 18px;
      			font-weight: 600;
      			color: #2d2c2c;
    		}
    		.cvNgTuyn {
      			align-self: stretch;
      			position: relative;
      			line-height: 18px;
      			color: #a7a7a7;
    		}
    		.badges2 {
      			border-radius: 4px;
      			background-color: #fff6f7;
      			display: flex;
      			flex-direction: row;
      			align-items: center;
      			justify-content: center;
      			padding: 4px 8px;
      			color: #ab1f24;
    		}
    		.frameParent2 {
      			position: absolute;
      			top: 0px;
      			left: 70px;
      			width: 282px;
      			display: flex;
      			flex-direction: column;
      			align-items: flex-start;
      			justify-content: flex-start;
      			gap: 5px;
      			color: #676767;
    		}
    		.frameContainer {
      			position: absolute;
      			top: 170px;
      			left: 32px;
      			width: 918px;
      			height: 103px;
      			color: #3d3d3d;
    		}
    		.edit2Icon1 {
      			position: absolute;
      			top: 0px;
      			left: 0px;
      			width: 16px;
      			height: 16px;
    		}
    		.trashIcon1 {
      			position: absolute;
      			top: 28px;
      			left: 0px;
      			width: 16px;
      			height: 16px;
    		}
    		.badges4 {
      			border-radius: 4px;
      			background-color: #fffaeb;
      			display: flex;
      			flex-direction: row;
      			align-items: center;
      			justify-content: center;
      			padding: 4px 8px;
      			color: #dc6803;
    		}
    		.edit2Group {
      			position: absolute;
      			top: 311px;
      			left: 32px;
      			width: 918px;
      			height: 121px;
      			color: #3d3d3d;
    		}
    		.badges7 {
      			border-radius: 4px;
      			background-color: #f8e9ea;
      			display: flex;
      			flex-direction: row;
      			align-items: center;
      			justify-content: center;
      			padding: 4px 8px;
      			color: #bc2228;
    		}
    		.edit2Container {
      			position: absolute;
      			top: 452px;
      			left: 32px;
      			width: 918px;
      			height: 121px;
      			color: #3d3d3d;
    		}
    		.edit2Parent1 {
      			position: absolute;
      			top: 593px;
      			left: 32px;
      			width: 918px;
      			height: 103px;
      			color: #3d3d3d;
    		}
    		.number {
      			position: relative;
      			line-height: 20px;
      			font-weight: 500;
    		}
    		.content13 {
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
      			top: 728px;
      			left: 646px;
      			display: flex;
      			flex-direction: row;
      			align-items: center;
      			justify-content: flex-start;
      			gap: 8px;
      			text-align: center;
      			font-size: 14px;
      			color: #919191;
    		}
    		.frameParent {
      			width: 100%;
      			position: relative;
      			border-radius: 16px;
      			background-color: #fff;
      			height: 792px;
      			overflow: hidden;
      			text-align: left;
      			font-size: 12px;
      			color: #676767;
      			font-family: 'SF Pro Display';
    		}
  	
  	</style>