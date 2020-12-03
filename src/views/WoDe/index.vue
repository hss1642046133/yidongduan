<template>
  <div id="wode">
    <div class="wode-div1">
      <van-sticky>
      <van-nav-bar class="wode-div1-van-nav-bar" title="我的" left-arrow>
        <template #left>
          <img src="../../assets/WoDe/002.png" class="wode-div1-van-nav-bar-img1" />
        </template>
        <template #right>
          <img src="../../assets/WoDe/001.png" class="wode-div1-van-nav-bar-img2" />
        </template>
      </van-nav-bar>
      </van-sticky>
      <div class="wode-div1-div1"></div>
    </div>
    <div></div>
    <div class="wode-div2">
      <p>
        您还未登录
        <br />请登录后查看相关信息
      </p>
      <van-button class="wode-div2-van-button" round type="primary" size="small" @click="Click">登录</van-button>
    </div>
    <div class="wode-div3">
      <van-row>
        <van-col span="12">
          <div class="wode-div3-div1">学习服务</div>
        </van-col>
      </van-row>
    </div>
    <div class="wode-div4">
      <van-grid :border="false" :column-num="4">
        <van-grid-item>
          <div class="wode-div4-div1">
            <p>
              <img src="../../assets/WoDe/003.png" />
            </p>
            <p>专属服务</p>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div class="wode-div4-div1">
            <p>
              <img src="../../assets/WoDe/004.png" />
            </p>
            <p>上课记录</p>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div class="wode-div4-div1">
            <p>
              <img src="../../assets/WoDe/005.png" />
            </p>
            <p>换班记录</p>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div class="wode-div4-div1">
            <p>
              <img src="../../assets/WoDe/006.png" />
            </p>
            <p>体验签到</p>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div class="wode-div4-div1">
            <p>
              <img src="../../assets/WoDe/007.png" />
            </p>
            <p>训练报告</p>
          </div>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="wode-div5">
      <van-row>
        <van-col span="12">
          <div class="wode-div5-div1">订单服务</div>
        </van-col>
      </van-row>
    </div>
    <div class="wode-div6">
      <van-grid :border="false" :column-num="4">
        <van-grid-item>
          <div class="wode-div6-div1">
            <p>
              <img src="../../assets/WoDe/008.png" />
            </p>
            <p>我的订单</p>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div class="wode-div6-div1">
            <p>
              <img src="../../assets/WoDe/009.png" />
            </p>
            <p>我的卡券</p>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div class="wode-div6-div1">
            <p>
              <img src="../../assets/WoDe/010.png" />
            </p>
            <p>我的保险</p>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div class="wode-div6-div1">
            <p>
              <img src="../../assets/WoDe/011.png" />
            </p>
            <p>收货地址</p>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div class="wode-div6-div1">
            <p>
              <img src="../../assets/WoDe/012.png" />
            </p>
            <p>我的礼品</p>
          </div>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="wode-div7">
      <van-row>
        <van-col span="12">
          <div class="wode-div7-div1">活动中心</div>
        </van-col>
      </van-row>
    </div>
    <div class="wode-div8">
      <van-grid :border="false" :column-num="4">
        <van-grid-item>
          <div class="wode-div8-div1">
            <p>
              <img src="../../assets/WoDe/013.png" />
            </p>
            <p>分享有礼</p>
          </div>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="wode-div9">
      <van-row>
        <van-col span="12">
          <div class="wode-div9-div1">客房服务</div>
        </van-col>
      </van-row>
    </div>
    <div class="wode-div10">
      <van-grid :border="false" :column-num="4">
        <van-grid-item>
          <div class="wode-div10-div1">
            <p>
              <img src="../../assets/WoDe/014.png" />
            </p>
            <p>动因客服</p>
          </div>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  name: "wode",
  methods: {
    Click: function() {
      this.$router.push("/denglu");
    }
  }
};
</script>

<style scoped>
.wode-div1-van-nav-bar {
  background-color: #fcd108;
  z-index: 11;
}
.van-hairline--bottom::after {
  border-bottom-width: 0;
}
.wode-div1-div1 {
  height: 75px;
  background-color: #fcd108;
  margin-top: -1px;
}
.wode-div1-van-nav-bar-img1 {
  width: 23px;
  margin-left: 12px;
}
.wode-div1-van-nav-bar-img2 {
  width: 25px;
  margin-right: 12px;
}
.wode-div2 {
  text-align: center;
  background-color: #ffffff;
  margin: -71px 30px 0 29px;
  box-shadow: 0 2px 2px #f5f7f7;
  border: 1px solid #fcfcfc;
  padding-bottom: 15px;
  border-radius: 8px;
  padding: 40px 0;
}
::v-deep .wode-div2-van-button {
  color: #000000;
  background-color: #fcd108;
  border: 1px solid #fcd108;
  padding: 0 30px;
  margin-top: 15px;
}
.wode-div3 {
  margin: 40px 0 0 15px;
}
.wode-div3-div1 {
  font-size: 18px;
}
.wode-div4 {
  margin: 15px 20px 0 20px;
}
.wode-div4-div1 p {
  text-align: center;
}
.wode-div4-div1 p img {
  width: 55%;
}
.wode-div4-div1 p:nth-of-type(2) {
  font-size: 12px;
  margin-top: 5px;
}
.wode-div5 {
  margin: 35px 0 0 15px;
}
.wode-div5-div1 {
  font-size: 18px;
}
.wode-div6 {
  margin: 25px 20px 0 20px;
}
.wode-div6-div1 p {
  text-align: center;
}
.wode-div6-div1 p img {
  width: 42%;
}
.wode-div6-div1 p:nth-of-type(2) {
  font-size: 12px;
  margin-top: 5px;
}
.wode-div7 {
  margin: 35px 0 0 15px;
}
.wode-div7-div1 {
  font-size: 18px;
}
.wode-div8 {
  margin: 25px 20px 0 20px;
}
.wode-div8-div1 p {
  text-align: center;
}
.wode-div8-div1 p img {
  width: 42%;
}
.wode-div8-div1 p:nth-of-type(2) {
  font-size: 12px;
  margin-top: 5px;
}
.wode-div9 {
  margin: 35px 0 0 15px;
}
.wode-div9-div1 {
  font-size: 18px;
}
.wode-div10 {
  margin: 25px 20px 0 20px;
}
.wode-div10-div1 p {
  text-align: center;
}
.wode-div10-div1 p img {
  width: 42%;
}
.wode-div10-div1 p:nth-of-type(2) {
  font-size: 12px;
  margin-top: 5px;
}
</style>