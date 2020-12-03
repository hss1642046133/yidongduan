<template>
  <div id="fuwu">
    <van-sticky>
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
    </van-sticky>
    <div class="fuwu-div1">
      <van-row>
        <van-col span="12">
          <div class="fuwu-div1-div1">正在学习</div>
        </van-col>
      </van-row>
    </div>
    <div class="fuwu-div2">
      <img src="../../assets/FuWuImg/001.png" />
    </div>
    <div class="fuwu-div3">
      <img src="../../assets/FuWuImg/002.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "fuwu"
};
</script>

<style scoped>
#header {
  background-color: #ffffff;
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
.fuwu-div1 {
  margin: 25px 0 0 15px;
}
.fuwu-div1-div1 {
  font-size: 18px;
}
.fuwu-div2 {
  margin: 15px 15px;
}
.fuwu-div2 img {
  width: 100%;
}
.fuwu-div3 {
  width: 42%;
  margin: 0 auto;
  margin-top: 90px;
}
.fuwu-div3 img {
  width: 100%;
}
</style>