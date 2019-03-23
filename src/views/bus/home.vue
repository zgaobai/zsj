<template>
  <div class="main">
     <div class="header_">
      <div class="top">
        <div class="adr-box">
          <p class="adr">漳州</p>
          <img src="../../../static/imgs/pull.png" alt="">
        </div>
        <div class="img">
          <img src="../../../static/imgs/busbg.png" alt="">
        </div>
      </div>
      <div class="bot">
       <!-- <input type="text" class="search" placeholder="搜索公交线路、车站"> -->
        <div class="search" @click="to_search">
          <figure class="search-icon">
            <img src="../../../static/imgs/searchicon.png" width="100%">
          </figure>
          <span class="s-text">搜索公交线路、车站</span>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="nav" v-for="(item,index) in navList" :class="{'nav-active': num === index}" :key="index" @click="active(index)">
        <p class="nav_text">{{item}}</p> 
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      navList: ['推荐','历史','收藏'],
      num: 0,
    }
  },
  methods: {
    active (n) {
      this.num = n
      if (n === 0) {
        this.$router.replace('/bus/index/home/recommend')
      } else if (n === 1) {
        this.$router.replace('/bus/index/home/history')
      } else {
        this.$router.replace('/bus/index/home/collection')
      }
    },
    set_num () {
      const path = this.$route.path
      if (path === '/bus/index/home/recommend') {
        this.num = 0
      } else if(path === '/bus/index/home/history') {
        this.num = 1
      } else {
        this.num = 2
      }
    },
    to_search () {
      this.$router.push({
        path: '/bus/index/home/search', 
        })
    }
  },
  created () {
    this.set_num()
  }
}
</script>

<style lang="stylus">
.main
  min-height 100vh
  background #F3F4F6
  .header_
    height 251px
    background #ffffff
    .top
      height 120px
      line-height 120px
      .adr-box
        display inline-block
        height 120px
        .adr
          display inline-block
          margin 0 20px 0 42px
          font-size 56px
          line-height 120px
          img 
            width 100%
      .img
        display inline-block
        float right
        width 225px
        height 120px
        margin-right 54px
        img 
          width 100%
    .bot
      width 100%
      padding-right 50px
      .search
        display inline-block
        position relative
        width 100%
        height 70px
        line-height 70px
        margin 13px 21px 0 25px
        border-radius 35px
        background #F1F0F5
        color #999999
        font-size 24px
        padding-left 55px
        .search-icon
          position absolute
          display inline-block
          width 30px
          height 70px
          top 7px
          left 27px 
        .s-text 
          margin-left 30px
  .content
    padding 0 24px
    .nav 
      display inline-block
      margin 40px 46px 31px 10px
      width 105px
      height 52px
      font-size 28px
      line-height 52px
      text-align center
      color #333333
      .nav_text
        margin-top 1px
    .nav-active
      color #FFFFFF
      border-radius 26px
      background #2B7FF3
</style>
