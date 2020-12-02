<template>
  <div id="wode">
    <div class="wode-div1">
      <van-nav-bar class="wode-div1-van-nav-bar" title="我的" left-arrow>
        <template #left>
          <img src="../../assets/WoDe/002.png" class="wode-div1-van-nav-bar-img1" />
        </template>
        <template #right>
          <img src="../../assets/WoDe/001.png" class="wode-div1-van-nav-bar-img2" />
        </template>
      </van-nav-bar>
    </div>
    <div class="wode-div2">
      <p>
        您还未登录
        <br />请登录后查看相关信息
      </p>
      <van-button class="wode-div2-van-button" round type="primary" size="small" @click="Click">登录</van-button>
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
  padding-bottom: 100px;
  z-index: -1;
}
.wode-div1-van-nav-bar-img1 {
  width: 23px;
}
.wode-div1-van-nav-bar-img2 {
  width: 25px;
}
.wode-div2 {
  text-align: center;
  background-color: #ffffff;
  margin: -100px 20px 0 20px;
}
::v-deep .wode-div2-van-button {
  color: #000000;
  background-color: #fcd108;
  border: 1px solid #fcd108;
  padding: 0 25.3px;
}
</style>