<template>
  <div class="main">
    <div class="banner">
      <img src="../../../static/imgs/e.png" alt="" width="100%">
       <!-- <mt-swipe class="banner-box" :auto="4000" :speed="600" :stopPropagation="true">
        <mt-swipe-item v-for="item in banner_list" :key="item.id">
          <div class="banner-item" @click="click_banner(item.url)">
            <img :src="item.img" width="100%">
          </div>
        </mt-swipe-item>
      </mt-swipe> -->
    </div>
    <div class="nav">
      <div class="nav-item" @click="fees">
        <figure>
          <img src="../../../static/imgs/efa.png" alt="" width="100%">
        </figure>
        <p class="text border">消费记录</p>
      </div>
      <div class="nav-item" @click="dot">
        <figure>
          <img src="../../../static/imgs/esearch.png" alt="" width="100%">
        </figure>
        <p class="text">网点查询</p>
      </div>
    </div>
    <p class="line"></p>
    <div class="show">
      <figure @click="uses">
        <img src="../../../static/imgs/euse.png" alt="" width="100%">
      </figure>
      <figure @click="flow">
        <img src="../../../static/imgs/epro.png" alt="" width="100%">
      </figure>
    </div>
  </div>
</template>

<script>
import { baseLinkUrl } from '@/tool/baseUrl'
export default {
  name: 'index',
  data() {
    return {
      banner_list:[]
    }
  },
  methods: {
    //获取轮播图
    http_recommend_list () {
      this.axios.get(`http://zsht.bloomworks.cn/f/zs/banner/getBanner?entification=2`).then((res) => {
        this.banner_list = JSON.parse(res.data.data)
      })
     },
     //点击轮播进入各自url
     click_banner (url) {
      if (url.indexOf(baseLinkUrl) === -1) {
        window.location.href = url
      } else {
        let routerUrl = url.slice(baseLinkUrl.length)
        this.$router.push(routerUrl)
      }
    },
    //进入网点查询
    dot () {
      this.$router.push({
        path: '/index/search',
      })
    },
    //进入查询记录
    fees () {
      this.$router.push({
        path: '/index/bindcard',
      })
    },
    //进入使用范围
    uses () {
      this.$router.push({
        path: '/index/uses',
      })
    },
    //进入申请流程
    flow () {
       this.$router.push({
        path: '/index/flow',
      })
    }
  },
  mounted () {
    this.http_recommend_list()
  }
}
</script>

<style lang="stylus" scoped>
.main
  min-height 100vh
  background #ffffff
  padding-bottom 40px
  .banner
    height 374px
    // position relative
    // z-index 0
    // .banner-box
    //   height 374px
    //   .banner-item
    //     height 374px
    //     position relative
    //     img
    //       height 100%
  .nav
    display flex
    height 145px
    .nav-item
      flex auto
      padding 48px 0 0 80px
      figure
        width 58px
        height 50px
        display inline-block
        vertical-align middle
      .text
        display inline-block
        width 214px
        margin-left 22px
        height 50px
        line-height 50px
        font-size 30px
        color #333333
      .border
        border-right 1px solid #DCDCDC
  .line
    height 18px
    background #F8F8F8
  .show
    margin 35px 30px 0 30px
    figure
      height 254px
      margin-bottom 30px
</style>
