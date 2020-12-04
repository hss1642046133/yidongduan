<template>
  <div id="yueke">
    <header id="header">
      <van-row>
        <van-col span="12">
          <div class="header-div1">
            <img src="../../assets//HeaderImg/001.png" />
            <span>点击创建学员</span>
          </div>
        </van-col>
      </van-row>
    </header>
    <div class="yueke-div1">
      <van-calendar
        title="日历"
        :poppable="false"
        :show-confirm="false"
        :style="{ height: '500px' }"
        :first-day-of-week="1"
        :show-title="false"
      />
    </div>
    <div class="yueke-div2"></div>
  </div>
</template>

<script>
export default {
  name: "yueke"
};
</script>

<style scoped>
#header {
  position: fixed;
  top: 0;
  background-color: #ffffff;
  z-index: 999;
  width: 100%;
}
.header-div1 {
  font-size: 14px;
  padding: 13px 15px;
}
.header-div1 img,
.header-div1 span {
  display: inline-block;
  vertical-align: middle;
}
.header-div1 img {
  width: 30px;
}
.header-div1 span {
  margin-left: 10px;
}
</style>