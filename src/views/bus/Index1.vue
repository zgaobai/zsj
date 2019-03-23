<template>
  <div class="main">
    <router-view></router-view>
    <mt-tabbar v-model="selected" :fixed="true">
      <mt-tab-item id="首页">
        <img slot="icon" src="../../../static/imgs/bushome.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="路线">
        <img slot="icon" src="../../../static/imgs/goline.png">
        路线
      </mt-tab-item>
      <mt-tab-item id="附近">
        <img slot="icon" src="../../../static/imgs/near.png">
        附近
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      selected: '首页'
    }
  },
  watch: {
    selected (val) {
      if ( val === "路线"){
        this.$router.push({
        path: '/bus/index/toline',  
        })
      }else if ( val === "附近"){
        this.$router.push({
        path: '/bus/index/near', 
        })
      }else{
        this.$router.push({
        path: '/bus/index/home', 
        })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.main
  min-height 100vh
  background #F3F4F6
  .header
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
      .search
        display inline-block
        width 704px
        height 70px
        line-height 70px
        margin 13px 21px 0 25px
        border-radius 35px
        background #F1F0F5
        color #999999
        font-size 24px
        padding-left 55px
  .content
    padding 0 24px
    .nav 
      display inline-block
      margin 32px 46px 31px 10px
      width 105px
      height 52px
      font-size 28px
      line-height 52px
      text-align center
      color #333333
    .nav-active
      color #FFFFFF
      border-radius 26px
      background #2B7FF3
</style>
