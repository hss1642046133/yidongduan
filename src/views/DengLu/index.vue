<template>
  <div id="denglu">
    <div class="denglu-div1">
      <van-icon class="denglu-div1-van-icon" name="cross" @click="Click" />
    </div>
    <div class="denglu-div2">您好，</div>
    <div class="denglu-div3">欢迎来到动因，未注册过的手机将自动创建账号</div>
    <div class="denglu-div4">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          center
          clearable
          label="手机号"
          placeholder="请输入手机号：+86"
          :rules="[{ required: true }]"
        ></van-field>
        <van-field
          v-model="password"
          center
          clearable
          label="验证码"
          placeholder="请输入验证码"
          :rules="[{ required: true }]"
        >
          <template #button>
            <van-button
              size="small"
              class="van-button1"
              round
              type="primary"
              v-show="show"
              @click="getCode"
            >获取验证码</van-button>
            <van-button
              size="small"
              class="van-button2"
              round
              type="primary"
              v-show="!show"
            >{{count}}秒</van-button>
          </template>
        </van-field>
        <div class="denglu-div4-div1">
          <van-button class="van-button2" type="default" block round native-type="submit">登录</van-button>
        </div>
      </van-form>
    </div>
    <div class="denglu-div5">
      登录动因体育代表您已阅读并接受
      <span>《用户协议》</span>
      <span>《隐私政策》</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "denglu",
  data() {
    return {
      show: true,
      count: "",
      username: "", //账号
      password: "" //密码
    };
  },
  methods: {
    getCode() {
      const TIME_COUNT = 60;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.show = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },
    //如果通过验证就跳转到指定路由
    onSubmit(values) {
      console.log("submit", values);
      this.$router.push("/");
    },
    Click: function() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.denglu-div1 {
  margin: 15px 15px 15px 10px;
}
.denglu-div1-van-icon {
  font-weight: bold;
  font-size: 20px;
}
.denglu-div2 {
  margin: 30px 15px 15px 15px;
  font-size: 30px;
}
.denglu-div3 {
  margin: 15px;
  color: #aaaaaa;
}
.denglu-div4 {
  margin-top: 50px;
}
.denglu-div4-div1 {
  margin: 10px 30px;
}
::v-deep .van-button1 {
  color: #bbbbbb;
  background-color: #f1f1f1;
  border: 1px solid #f1f1f1;
}
::v-deep .van-button2 {
  color: #000000;
  background-color: #fcd108;
  border: 1px solid #fcd108;
  padding: 0 25.3px;
}
.denglu-div5 {
  margin: 30px 15px;
  color: #aeaeae;
  font-size: 12px;
}
.denglu-div5 span{
  color: #e8883b;
}
</style>