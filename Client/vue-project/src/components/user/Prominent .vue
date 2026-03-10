<template>
    <div :class="$style.conSNiBt">
        <img :class="$style.img1Icon" alt="" src="../../../public/images/img1.jpg"/>
    
        <b :class="$style.tiSaoChn">Tại sao chọn chúng tôi?</b>
    
        <div :class="$style.number">
    
            <div :class="$style.tLKhch">Tỷ lệ khách hàng hài lòng</div>
    
            <b :class="$style.b">97%</b>
    
        </div>
    
        <div :class="$style.number1">
    
            <div :class="$style.tLKhch">Top công ty Công nghệ tại Việt Nam</div>
    
            <b :class="$style.b">Top 3</b>
    
        </div>
    
        <div :class="$style.number2">
    
            <div :class="$style.tLKhch">Văn phòng và chi nhánh</div>
    
            <b :class="$style.b">10</b>
    
        </div>
    
        <div :class="$style.number3">
    
            <div :class="$style.tLKhch">Dự án thành công</div>
    
            <b :class="$style.b">1000+</b>
    
        </div>
    
        <div :class="$style.number4">
    
            <div :class="$style.tLKhch">Khách hàng quốc tế</div>
    
            <b :class="$style.b">500+</b>
    
        </div>
    
        <div :class="$style.number5">
    
            <div :class="$style.tLKhch">Số năm kinh nghiệm</div>
    
            <b :class="$style.b">10+</b>
    
        </div>
    
    </div>
</template>
<script setup>

</script>
<style module>
.img1Icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 500px;
    object-fit: cover;
}

.tiSaoChn {
    position: absolute;
    top: 80px;
    left: 16%;
    font-size: 40px;
    letter-spacing: 0.01em;
    line-height: 48px;
    color: #fff;
}

.tLKhch {
    align-self: stretch;
    position: relative;
    line-height: 20px;
    display: inline-block;
    max-height: 20.02px;
}

.b {
    align-self: stretch;
    position: relative;
    font-size: 40px;
    letter-spacing: 0.01em;
    line-height: 48px;
    color: #bc2228;
}

.number {
    position: absolute;
    top: 296px;
    left: 60%;
    border-radius: 8px;
    background-color: #fff;
    width: 379px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 12px 24px;
    box-sizing: border-box;
    gap: 4px;
}

.number1 {
    position: absolute;
    top: 296px;
    left: 38%;
    border-radius: 8px;
    background-color: #fff;
    width: 378px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 12px 24px;
    box-sizing: border-box;
    gap: 4px;
}

.number2 {
    position: absolute;
    top: 296px;
    left: 16%;
    border-radius: 8px;
    background-color: #fff;
    width: 379px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 12px 24px;
    box-sizing: border-box;
    gap: 4px;
}

.number3 {
    position: absolute;
    top: 168px;
    left: 60%;
    border-radius: 8px;
    background-color: #fff;
    width: 379px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 12px 24px;
    box-sizing: border-box;
    gap: 4px;
}

.number4 {
    position: absolute;
    top: 168px;
    left: 38%;
    border-radius: 8px;
    background-color: #fff;
    width: 378px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 12px 24px;
    box-sizing: border-box;
    gap: 4px;
}

.number5 {
    position: absolute;
    top: 168px;
    left: 16%;
    border-radius: 8px;
    background-color: #fff;
    width: 379px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 12px 24px;
    box-sizing: border-box;
    gap: 4px;
}

.conSNiBt {
    width: 100%;
    position: relative;
    background-color: #bc2228;
    height: 472px;
    overflow: hidden;
    text-align: left;
    font-size: 14px;
    color: #3d3d3d;
    font-family: 'SF Pro Display';
   
   
}
</style>