<template>
  <div class="main">
    <div class="banner">
      <img src="../../../static/imgs/pic.png" alt="" width="100%">
      <!-- <mt-swipe class="banner-box" :auto="4000" :speed="600" :stopPropagation="true">
        <mt-swipe-item v-for="item in banner_list" :key="item.id">
          <div class="banner-item" @click="click_banner(item.url)">
            <img :src="item.img" width="100%">
          </div>
        </mt-swipe-item>
      </mt-swipe> -->
    </div>
    <div class="show">
      <div class="icon-box icon-nav">
        <div class='icon-box-item'
          v-for="(item, index) in list" :key="index" @click="icon_active(index)"> 
            <figure class="img">
              <img :src="item.img" width="100%">
            </figure>
            <p class="text">{{item.text}}</p>
        </div>
      </div>
      <p class="line"></p>
      <div class="icon-box nav">
        <div class='icon-box-item color'
          v-for="(item, index) in textList" :key="index" :class="{'changeColor': num === index}" @click="active(index)">
            {{item}}
        </div>
      </div>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Register',
  data () {
    return {
      num: 0,
      banner_list:[],
      list: [
        {
          img: require('../../../static/imgs/Register.png'),
          text: '医院挂号'
        },
        {
          img: require('../../../static/imgs/Recharge.png'),
          text: '预交金充值'
        },
        {
          img: require('../../../static/imgs/report.png'),
          text: '检验报告单'
        },
        // {
        //   img: require('../../../static/imgs/per.png'),
        //   text: '个人中心'
        // },
      ],
      textList: [ '医院简介' , '就诊指南', '专家介绍' ]
    }
  },
  methods: {
    //获取轮播图
     http_recommend_list () {
      this.axios.get(`http://zsht.bloomworks.cn/f/zs/banner/getBanner?entification=3`).then((res) => {
        this.banner_list = JSON.parse(res.data.data)
      })
     },

     //点击tab显示相对的内容区
    active (n) {
      this.num = n
      if (n === 0) {
        this.$router.replace('/Register/Register/Hospital')
      } else if (n === 1) {
        this.$router.replace('/Register/Register/Guide')
      } else {
        this.$router.replace('/Register/Register/Expert')
      }
    },
    set_num () {
      const path = this.$route.path
      if (path === '/Register/Register/Hospital') {
        this.num = 0
      } else if(path === '/Register/Register/Guide') {
        this.num = 1
      } else {
        this.num = 2
      }
    },
    //点击相应的图标 进入相应的页面
    icon_active (index) {
      this.num = index
      if ( index === 0 || index === 2 ){
        this.$router.push({
        path: '/SocialSecurity/Security',  
        })
      } else if (index === 1 ) {
        this.$router.push({
        path: '/SocialSecurity/Recharge', 
        })
      }else{
        this.$router.push({
        path: '/Personal/Center', 
        })
      }
    }
  },
  created () {
    this.set_num()
    this.http_recommend_list () 
  }
}
</script>
<style scoped lang="stylus">
.main 
  min-height 100vh
  background #ffffff
  .banner
    width 100%
    font-size 0
    height 320px
    position relative
    z-index 0
    .banner-box
      height 320px
      .banner-item
        height 320px
        position relative
        img
          height 100%
  .show
    background:#fff;
    .icon-nav
      padding: 58px 0 20px; 
    .icon-box
      display:flex;
      flex-flow:row wrap;
      .icon-box-item
        width: 25%;
        flex: auto;
        .img
          width 76px
          vertical-align middle
          text-align center
          padding 6px 0
          margin 0 auto
        .text
          text-align center
          margin 25px 0
          color #333333
          font-size 26px
  .line
    width 100%
    height 18px
    background #F3F4F6
    margin 15px 0 0 0
  .nav
    padding 20px 0 20px 0
  .color
    color #666666
    text-align center
    line-height 80px
    font-size 26px
  .changeColor
    color #2B7FF3
    line-height 80px
    font-size 36px
</style>