<template>
  <footer id="footer">
    <van-tabbar route active-color="#fcd108" inactive-color="#9aa1ab">
      <van-tabbar-item replace to="/zhuti/shouye" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/zhuti/yueke" icon="clock-o">约课</van-tabbar-item>
      <van-tabbar-item replace to="/zhuti/fuwu" icon="like-o">服务</van-tabbar-item>
      <van-tabbar-item replace to="/zhuti/wode" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </footer>
</template>

<script>
export default {
  name: "gooter1"
};
</script>

<style scoped>
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
::v-deep .van-tabbar{
  border-top: 1px solid #f8f8f8;
}
</style>
