<template>
  <div id="kechengliebiao">
    <div class="kechengliebiao-div1">
      <van-nav-bar title="课程列表" left-arrow @click-left="onClickLeft" />
    </div>
    <div class="kechengliebiao-div2">
      <van-tabs
        v-model="active"
        color="#fbd106"
        line-width="24px"
        line-height="4px"
        title-inactive-color="#dedede"
      >
        <van-tab title="篮球">
          <van-grid :border="false" :column-num="1" class="neirong">
            <van-grid-item>
              <div class="kechengliebiao-div2-div1">
                <van-card desc="每次投进篮筐都助长我的自信！" title="篮球培优课—46赠6课次">
                  <template #thumb>
                    <img src="../../assets/KeChengLieBiaoImg/001.png" />
                  </template>
                  <template #num>￥8880</template>
                </van-card>
              </div>
              <div class="kechengliebiao-div2-div1">
                <van-card desc="每次投进篮筐都助长我的自信！" title="篮球培优课—98赠12课次">
                  <template #thumb>
                    <img src="../../assets/KeChengLieBiaoImg/001.png" />
                  </template>
                  <template #num>￥12980</template>
                </van-card>
              </div>
              <div class="kechengliebiao-div2-div1">
                <van-card desc="专注3-8岁的快乐篮球启蒙" title="小篮球42次课">
                  <template #thumb>
                    <img src="../../assets/KeChengLieBiaoImg/002.png" />
                  </template>
                  <template #num>￥9980</template>
                </van-card>
              </div>
            </van-grid-item>
          </van-grid>
        </van-tab>
        <van-tab title="外教篮球">
          <van-grid :border="false" :column-num="1" class="neirong">
            <van-grid-item>
              <div class="kechengliebiao-div2-div1">
                <van-card desc="用快乐的方式对话世界！" title="外教篮球培优课42课次">
                  <template #thumb>
                    <img src="../../assets/KeChengLieBiaoImg/003.png" />
                  </template>
                  <template #num>￥9980</template>
                </van-card>
              </div>
              <div class="kechengliebiao-div2-div1">
                <van-card desc="专注3-8岁的快乐篮球启蒙" title="外教小篮球42课次">
                  <template #thumb>
                    <img src="../../assets/KeChengLieBiaoImg/004.png" />
                  </template>
                  <template #num>￥12980</template>
                </van-card>
              </div>
            </van-grid-item>
          </van-grid>
        </van-tab>
        <van-tab title="小篮球">
          <van-grid :border="false" :column-num="1" class="neirong">
            <van-grid-item>
              <div class="kechengliebiao-div2-div1">
                <van-card desc="专注3-8岁的快乐篮球启蒙" title="外教小篮球42课次">
                  <template #thumb>
                    <img src="../../assets/KeChengLieBiaoImg/004.png" />
                  </template>
                  <template #num>￥12980</template>
                </van-card>
              </div>
              <div class="kechengliebiao-div2-div1">
                <van-card desc="专注3-8岁的快乐篮球启蒙" title="小篮球42次课">
                  <template #thumb>
                    <img src="../../assets/KeChengLieBiaoImg/002.png" />
                  </template>
                  <template #num>￥9980</template>
                </van-card>
              </div>
            </van-grid-item>
          </van-grid>
        </van-tab>
        <van-tab title="羽毛球">
          <van-grid :border="false" :column-num="1" class="neirong">
            <van-grid-item>
              <div class="kechengliebiao-div2-div1">
                <van-card desc="每一次杀球都让我变得更强！" title="羽毛球培优课—46赠6课次">
                  <template #thumb>
                    <img src="../../assets/KeChengLieBiaoImg/005.png" />
                  </template>
                  <template #num>￥9980</template>
                </van-card>
              </div>
              <div class="kechengliebiao-div2-div1">
                <van-card desc="每一次杀球都让我变得更强！" title="羽毛球培优课—92赠12课次">
                  <template #thumb>
                    <img src="../../assets/KeChengLieBiaoImg/005.png" />
                  </template>
                  <template #num>￥13980</template>
                </van-card>
              </div>
            </van-grid-item>
          </van-grid>
        </van-tab>
        <van-tab title="网球">
          <van-grid :border="false" :column-num="1" class="neirong">
            <van-grid-item>
              <div class="kechengliebiao-div2-div1">
                <van-card desc="每一次抢七都是我坚强的勋章！" title="网球培优课—46赠6课次">
                  <template #thumb>
                    <img src="../../assets/KeChengLieBiaoImg/006.png" />
                  </template>
                  <template #num>￥9980</template>
                </van-card>
              </div>
              <div class="kechengliebiao-div2-div1">
                <van-card desc="每一次抢七都是我坚强的勋章！" title="网球培优课—92赠12课次">
                  <template #thumb>
                    <img src="../../assets/KeChengLieBiaoImg/006.png" />
                  </template>
                  <template #num>￥15980</template>
                </van-card>
              </div>
            </van-grid-item>
          </van-grid>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "kechengliebiao",
  data() {
    return {
      active: parseInt(this.$route.params.num)
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
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
.kechengliebiao-div2{
  margin-top: 5px;
}
.kechengliebiao-div2-div1 {
  width: 100%;
}
::v-deep .van-card {
  background-color: #ffffff;
}
::v-deep .van-card__title {
  font-size: 17px;
  padding: 5px 0;
}
.van-card__desc {
  color: #9ba1a6;
}
.van-card__num {
  color: #fd7837;
  font-weight: bold;
  font-size: 16px;
}
.kechengliebiao-div2-div1 img {
  width: 95%;
}
.van-card__thumb {
  height: auto;
}
</style>