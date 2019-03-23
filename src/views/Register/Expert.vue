<template>
  <div class="main">
    <div class="header"></div>
    <div class="list">
      <div class="nav" v-for="(item, index) in title" :key="index"  @click="showClose">
        {{item}}
        <svg class="icon return-icon" aria-hidden="true">
          <use xlink:href="#icon-fanhui"></use>
        </svg> 
      </div>
      <p class="line">|</p>
    </div>
    <div class="warp">
      <div class="box" v-for="(item, index) in doctorList" :key="index">
        <figure><img :src="item.img" alt=""></figure>
        <div class="text">
          <p class="name">{{item.name}} <span class="job">{{item.job}}</span></p>
          <p class="partd">{{item.partd}}</p>
          <p class="goods">擅长:{{item.goods}}</p>
        </div>
      </div>
    </div>
    <mt-popup
        v-model="popupVisible"
        popup-transition="popup-fade"
        >
        <div class="popup-box">
            <figure class="popup-img">
            <img src="../../../static/imgs/alert.png" width="100%">
            </figure>
            <p class="popup-p1">更多功能正在测试联调中</p>
            <p class="popup-p2">敬请期待......</p>
            <figure class="popup-close" @click="click_close">
            <img src="../../../static/imgs/close.png" width="100%">
            </figure>
        </div>
        </mt-popup>
  </div>
</template>

<script>
export default {
  name: 'Expert',
  data () {
    return {
      title: ["科室","医生"],
      popupVisible: false,
      doctorList: [
        {
          img: require("../../../static/imgs/touxiang2.png"),
          id: '',
          name: "李飙",
          job: "副主任医师",
          partd: "皮肤科",
          goods: "麻醉胃肠镜检查及镜下治疗，消化系统常见病诊疗"
        },
        {
          img: require("../../../static/imgs/touxiang2.png"),
          id: '',
          name: "张伟",
          job: "副主任医师",
          partd: "中医科",
          goods: "中医内科、男科常见病，中医治未病（压健康调理及指导）"
        },
        {
          img: require("../../../static/imgs/touxiang2.png"),
          id: '',
          name: "余坤贵",
          job: "副主任医师",
          partd: "外科",
          goods: "从事外科临床工作20年，擅长四肢骨与关节损伤"
        }
      ]
    }
  },
  methods: {
    showClose () {
      this.popupVisible = true
    },
    click_close () {
      this.popupVisible = false
    }
  }
}
</script>
<style scoped lang="stylus">
.main
  padding 0 40px
  .list
    display flex
    position relative
    .nav
      flex 1
      padding 40px
      font-size 28px
      color #333333
      text-align center
      border-bottom 1px solid #f4f4f4
      .return-icon
        transform rotateZ(-90deg)
        margin-left 30px
    .line
      position absolute
      width 5px
      height 40%
      left 0 
      top 0
      bottom 0
      right 0
      margin auto
  .warp
    margin 0 20px
    .box
      display flex
      padding-bottom 20px
      border-bottom 1px solid #f4f4f4
      figure
        flex auto 
        width 20px
        margin-top 40px
        img 
          width 100%
      .text
        flex auto 
        font-size 28px
        margin-top 50px
        margin-left 15px
        .name
          color #333333
          line-height 40px
          font-size 32px
          .job
            color #999999
            line-height 40px
            margin-left 20px
            font-size 24px
        .partd
          font-size 26px
          color #333333
          margin 20px 0
        .goods
          width 400px
          font-size 28px
          color #999999
          line-height 40px
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
  .popup-box
    text-align center
    padding 50px 0
    width 70vw
    position relative
    overflow hidden
  .popup-img
    width 110px
    margin 0 auto
  .popup-p1
    font-size 28px
    color #999999
    margin-top 34px
  .popup-p2
    font-size 32px
    color #333333
    margin-top 28px
  .popup-close
    width 46px
    position absolute
    top -4px
    right -4px
</style>