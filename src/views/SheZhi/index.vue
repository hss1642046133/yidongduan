<template>
  <div id="shezhi">
    <div class="shezhi-div1">
      <van-nav-bar title="设置" left-arrow @click-left="onClickLeft" />
    </div>
    <div class="shezhi-div2">
      <van-cell title="清除缓存" is-link value="3.08MB" />
      <van-cell title="版本更新" is-link value="当前版本V3.0.0" />
      <van-cell title="用户协议" />
      <van-cell title="隐私政策" />
    </div>
    <div class="shezhi-div3">
      <van-button class="shezhi-div3-van-button" round plain color="#f6731a" type="info" @click="Click" block>退出当前账户</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "shezhi",
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    Click: function() {
      this.$router.push("/zhuti/wode");
      localStorage.removeItem("user");
    }
  }
};
</script>

<style scoped>
[class*="van-hairline"]::after {
  border: 0;
}
::v-deep .van-icon {
  color: #000000;
  font-size: 22px;
}
::v-deep .van-nav-bar__title {
  font-size: 18px;
}
::v-deep .van-tabs__wrap {
  border-bottom: 1px solid #f2f2f2;
}
.shezhi-div3 {
  position: fixed;
  bottom: 20px;
  width: 100%;
}
.shezhi-div3-van-button {
  width: 92%;
  margin: 0 auto;
  font-size: 18px;
}
.van-cell__title{
  font-size: 16px;
}
.van-cell__value{
  color: #9a9a9a;
}
.van-icon{
  font-size: 12px;
  color: #9199a0;
  font-weight: bold;
}
</style>