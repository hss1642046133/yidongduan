<template>
  <div id="shouye">
    <header id="header">
      <van-row>
        <van-col span="12">
          <div class="header-div1">
            <img src="../../assets//HeaderImg/001.png" />
            <span>点击创建学员</span>
          </div>
        </van-col>
        <van-col span="12">
          <div class="header-div2">
            <van-field
              class="header-div2-van-field"
              readonly
              clickablelabel="城市"
              :value="value"
              placeholder="北京"
              @click="showPicker = true"
            />
            <van-icon class="header-div2-van-icon" name="play" />
            <div>
              <van-popup v-model="showPicker" round position="bottom">
                <van-picker
                  show-toolbar
                  :columns="columns"
                  @cancel="showPicker = false"
                  @confirm="onConfirm"
                />
              </van-popup>
            </div>
          </div>
        </van-col>
      </van-row>
    </header>
    <div class="shouye-div1">
      <van-swipe @change="onChange" :autoplay="3000">
        <van-swipe-item>
          <img src="../../assets/ShouYe/001.png" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/ShouYe/002.png" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/ShouYe/003.png" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/ShouYe/004.png" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/ShouYe/005.png" />
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{ current + 1 }}/5</div>
        </template>
      </van-swipe>
    </div>
    <div class="shouye-div2">
      <van-row type="flex" justify="space-between">
        <van-col span="4">
          <div class="shouye-div2-div1 wenzi">
            <p>
              <img src="../../assets/ShouYe/006.png" />
            </p>
            <p>篮球</p>
          </div>
        </van-col>
        <van-col span="4">
          <div class="shouye-div2-div1 lanqiu">
            <p>
              <img src="../../assets/ShouYe/007.png" />
            </p>
            <p>外教篮球</p>
          </div>
        </van-col>
        <van-col span="4">
          <div class="shouye-div2-div1 lanqiu">
            <p>
              <img src="../../assets/ShouYe/008.png" />
            </p>
            <p>小篮球</p>
          </div>
        </van-col>
        <van-col span="4">
          <div class="shouye-div2-div1">
            <p>
              <img src="../../assets/ShouYe/009.png" />
            </p>
            <p>羽毛球</p>
          </div>
        </van-col>
        <van-col span="4">
          <div class="shouye-div2-div1">
            <p>
              <img src="../../assets/ShouYe/010.png" />
            </p>
            <p>网球</p>
          </div>
        </van-col>
      </van-row>
    </div>
    <div class="shouye-div3">
      <img src="../../assets/ShouYe/011.png" />
      <!-- <p class="shouye-div3-p">
        <van-button class="ljyy" round type="default" size="small">立即预约</van-button>
      </p>-->
    </div>
    <div class="shouye-div4">
      <van-row type="flex" justify="space-between" gutter="10">
        <van-col span="12">
          <div class="shouye-div4-div1">
            <img src="../../assets/ShouYe/012.png" />
          </div>
        </van-col>
        <van-col span="12">
          <div class="shouye-div4-div1">
            <img src="../../assets/ShouYe/013.png" />
          </div>
        </van-col>
      </van-row>
    </div>
    <div class="shouye-div5">
      <van-row>
        <van-col span="12">
          <div class="shouye-div5-div1">课程类型</div>
        </van-col>
      </van-row>
    </div>
    <div class="shouye-div6">
      <van-tabs
        v-model="active"
        color="#fbd106"
        line-width="24px"
        line-height="4px"
        title-inactive-color="#dedede"
      >
        <van-tab title="篮球">
          <van-grid :border="false" :column-num="2" class="neirong">
            <van-grid-item>
              <div class="shouye-div6-div1">
                <p>
                  <img src="../../assets/ShouYe/014.png" />
                </p>
                <p>篮球培训优课——46...</p>
                <p>每次投进篮筐都助长我的自信！</p>
              </div>
            </van-grid-item>
            <van-grid-item>
              <div class="shouye-div6-div1">
                <p>
                  <img src="../../assets/ShouYe/014.png" />
                </p>
                <p>篮球培训优课——46...</p>
                <p>每次投进篮筐都助长我的自信！</p>
              </div>
            </van-grid-item>
            <van-grid-item>
              <div class="shouye-div6-div1">
                <p>
                  <img src="../../assets/ShouYe/015.png" />
                </p>
                <p>篮球培训优课——46...</p>
                <p>专注3-8岁的快乐篮球启蒙！</p>
              </div>
            </van-grid-item>
          </van-grid>
        </van-tab>
        <van-tab title="外教篮球">
          <van-grid :border="false" :column-num="2" class="neirong">
            <van-grid-item>
              <div class="shouye-div6-div1">
                <p>
                  <img src="../../assets/ShouYe/016.png" />
                </p>
                <p>外教篮球培优课...</p>
                <p>用快乐的方式对话世界！</p>
              </div>
            </van-grid-item>
            <van-grid-item>
              <div class="shouye-div6-div1">
                <p>
                  <img src="../../assets/ShouYe/017.png" />
                </p>
                <p>外教小篮球42课次</p>
                <p>专注3-8岁的快乐篮球启蒙！</p>
              </div>
            </van-grid-item>
          </van-grid>
        </van-tab>
        <van-tab title="羽毛球">
          <van-grid :border="false" :column-num="2" class="neirong">
            <van-grid-item>
              <div class="shouye-div6-div1">
                <p>
                  <img src="../../assets/ShouYe/018.png" />
                </p>
                <p>羽毛球培优课——...</p>
                <p>每一次杀球都让我变得更强！</p>
              </div>
            </van-grid-item>
            <van-grid-item>
              <div class="shouye-div6-div1">
                <p>
                  <img src="../../assets/ShouYe/018.png" />
                </p>
                <p>羽毛球培优课——...</p>
                <p>每一次杀球都让我变得更强！</p>
              </div>
            </van-grid-item>
          </van-grid>
        </van-tab>
        <van-tab title="小篮球">
          <van-grid :border="false" :column-num="2" class="neirong">
            <van-grid-item>
              <div class="shouye-div6-div1">
                <p>
                  <img src="../../assets/ShouYe/017.png" />
                </p>
                <p>外教小篮球42课次</p>
                <p>专注3-8岁的快乐篮球启蒙！</p>
              </div>
            </van-grid-item>
            <van-grid-item>
              <div class="shouye-div6-div1">
                <p>
                  <img src="../../assets/ShouYe/015.png" />
                </p>
                <p>小篮球42课次</p>
                <p>专注3-8岁的快乐篮球启蒙！</p>
              </div>
            </van-grid-item>
          </van-grid>
        </van-tab>
        <van-tab title="网球">
          <van-grid :border="false" :column-num="2" class="neirong">
            <van-grid-item>
              <div class="shouye-div6-div1">
                <p>
                  <img src="../../assets/ShouYe/019.png" />
                </p>
                <p>网球培优课——46...</p>
                <p>每一次抢七都是我坚强的勋章！</p>
              </div>
            </van-grid-item>
            <van-grid-item>
              <div class="shouye-div6-div1">
                <p>
                  <img src="../../assets/ShouYe/019.png" />
                </p>
                <p>网球培优课——46...</p>
                <p>每一次抢七都是我坚强的勋章！</p>
              </div>
            </van-grid-item>
          </van-grid>
        </van-tab>
      </van-tabs>
    </div>
    <div class="shouye-div7">
      <van-row>
        <van-col span="12">
          <div class="shouye-div7-div1">关于动因</div>
        </van-col>
      </van-row>
    </div>
    <div class="shouye-div8">
      <van-swipe :loop="false" :width="240" :show-indicators="false">
        <van-swipe-item>
          <div class="shouye-div8-div1">
            <p>
              <img src="../../assets/ShouYe/020.png" />
            </p>
            <p>动因体育精彩介绍</p>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="shouye-div8-div1">
            <p>
              <img src="../../assets/ShouYe/021.png" />
            </p>
            <p>动因篮球精彩课程影像</p>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="shouye-div8-div1">
            <p>
              <img src="../../assets/ShouYe/022.png" />
            </p>
            <p>动因网球精彩课程影像</p>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="shouye-div8-div1">
            <p>
              <img src="../../assets/ShouYe/023.png" />
            </p>
            <p>动因羽毛球精彩课程影像</p>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="shouye-div9">
      <van-row>
        <van-col span="12">
          <div class="shouye-div9-div1">教师风采</div>
        </van-col>
      </van-row>
    </div>
    <div class="shouye-div10">
      <van-row type="flex" justify="space-between">
        <van-col span="12">
          <div class="shouye-div10-div1">
            <p>
              <img src="../../assets/ShouYe/024.png" />
            </p>
            <p>胡兴振</p>
            <p>颜值帅的爆表的教练</p>
            <p>
              <img src="../../assets/ShouYe/027.png" />
            </p>
          </div>
        </van-col>
        <van-col span="12">
          <div class="shouye-div10-div1">
            <p>
              <img src="../../assets/ShouYe/025.png" />
            </p>
            <p>唐安静</p>
            <p>球场女曼巴，颜值实力并存</p>
            <p>
              <img src="../../assets/ShouYe/027.png" />
            </p>
          </div>
        </van-col>
      </van-row>
    </div>
    <div class="shouye-div11">
      <img src="../../assets/ShouYe/026.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "shouye",
  data() {
    return {
      current: 0,
      active: 0,
      value: "北京",
      showPicker: false,
      columns: [
        "北京",
        "杭州",
        "宁波",
        "温州",
        "绍兴",
        "湖州",
        "嘉兴",
        "金华",
        "衢州"
      ]
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    }
  }
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
.header-div2 {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 7.25px 15px;
}
.header-div2-van-field {
  margin-right: -12px;
}
.header-div2-van-icon {
  transform: rotate(90deg);
}
.van-cell {
  width: 60px;
}
.van-cell::after {
  border: 0;
}
.shouye-div1 {
  margin: 60px 15px 0 15px;
}
.shouye-div1 img {
  width: 100%;
  border-radius: 6px;
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 8px;
  padding: 2px 7px;
  font-size: 12px;
  background-color: #000000;
  opacity: 0.5;
  color: #ffffff;
  border-radius: 10px;
}
.shouye-div2 {
  margin: 20px 15px 0 15px;
}
.shouye-div2-div1 p {
  text-align: center;
}
.shouye-div2-div1 p:nth-of-type(2) {
  font-size: 12px;
  margin-top: 10px;
}
.shouye-div2-div1 p img {
  width: 80%;
}
.lanqiu {
  margin-top: -5px;
}
.lanqiu p img {
  width: 95%;
}
.wenzi p:nth-of-type(2) {
  margin-top: 9px;
}
.shouye-div3 {
  margin: 20px 15px 0 15px;
  /* position: relative; */
}
.shouye-div3 img {
  width: 100%;
}
/* .shouye-div3-p {
  position: absolute;
  right: 15px;
  top: 50%;
}
::v-deep .ljyy {
  font-weight: bold;
  font-family: "微软雅黑", "黑体", "宋体";
  border: 0;
  padding: 0 15px;
} */
.shouye-div4 {
  margin: 20px 15px 0 15px;
}
.shouye-div4-div1 img {
  width: 100%;
  border-radius: 7px;
}
.shouye-div5 {
  margin: 20px 0 0 15px;
}
.shouye-div5-div1 {
  font-size: 18px;
}
::v-deep .van-tabs__wrap {
  border-bottom: 1px solid #f2f2f2;
}
.shouye-div6 {
  margin-top: 5px;
}
.shouye-div6-div1 {
  box-shadow: 0 2px 2px #f5f7f7;
  border: 1px solid #fcfcfc;
  padding-bottom: 15px;
  border-radius: 8px;
}
.shouye-div6-div1 p img {
  width: 100%;
  border-radius: 8px 8px 0 0;
}
.neirong {
  margin: 0 10px;
}
.shouye-div6-div1 p ~ p {
  margin: 8px 5px 0 10px;
}
.shouye-div6-div1 p:nth-of-type(3) {
  font-size: 13px;
  color: #aaafb4;
}
.goods-card {
  margin: 0;
  background-color: white;
}
.delete-button {
  height: 100%;
}
.shouye-div7 {
  margin: 10px 0 0 15px;
}
.shouye-div7-div1 {
  font-size: 18px;
}
.van-swipe-cell {
  width: 50%;
}
.shouye-div8 {
  margin: 10px 0 0 8px;
}
/* ::v-deep .van-swipe__indicators{
  display: none;
} */
.shouye-div8-div1 {
  box-shadow: 0 2px 2px #f5f7f7;
  border: 1px solid #fcfcfc;
  padding-bottom: 15px;
  border-radius: 8px;
  margin: 0 10px;
}
.shouye-div8-div1 p img {
  width: 100%;
  border-radius: 8px 8px 0 0;
}
.shouye-div8-div1 p:nth-of-type(2) {
  margin: 5px 0 15px 15px;
}
.shouye-div9 {
  margin: 20px 0 0 15px;
}
.shouye-div9-div1 {
  font-size: 18px;
}
.shouye-div10 {
  margin: 10px 8px 0 8px;
}
.shouye-div10-div1 {
  box-shadow: 0 2px 2px #f5f7f7;
  padding-bottom: 15px;
  border-radius: 8px;
  margin: 0 10px;
  border: 1px solid #fcfcfc;
}
.shouye-div10-div1 p:nth-of-type(1) img {
  width: 55%;
}
.shouye-div10-div1 p {
  text-align: center;
}
.shouye-div10-div1 p ~ p {
  margin-top: 8px;
}
.shouye-div10-div1 p:nth-of-type(1) {
  padding-top: 15px;
}
.shouye-div10-div1 p:nth-of-type(2) {
  font-size: 18px;
}
.shouye-div10-div1 p:nth-of-type(3) {
  font-size: 12px;
  color: #a5aeb1;
}
.shouye-div10-div1 p:nth-of-type(4) img {
  width: 22%;
}
.shouye-div11 {
  position: fixed;
  right: -50px;
  bottom: 65px;
}
.shouye-div11 img {
  width: 40%;
}
</style>