<template>
  <div class="index">
    <div class="banner">
      <figure>
        <img src="../../static/imgs/bg.png" width="100%">
      </figure>
      <!-- <mt-swipe class="banner-box" :auto="4000" :speed="600" :stopPropagation="true">
        <mt-swipe-item v-for="item in banner_list" :key="item.id">
          <div class="banner-item" @click="click_banner(item.url)">
            <img :src="item.img" width="100%">
          </div>
        </mt-swipe-item>
      </mt-swipe> -->
    </div>
    <div class="wrap">
      <div class="community">
      <figure class="community-bg2">
        <img src="../../static/imgs/bg2.png">
      </figure>
      <div class="community-tip">
        <figure class="community-tip-bg">
          <img src="../../static/imgs/bg1.png">
        </figure>
        <p>热门服务</p>
        <figure class="community-tip-bg">
          <img src="../../static/imgs/bg1.png">
        </figure>
      </div>
      <div class="community-box">
        <index-port 
          class="community-box-item" 
          v-for="(item, index) of community_list" 
          :list="item" 
          size="big" 
          :key="index"
          @showClose="showClose"
        >
        </index-port>
      </div>
    </div>
    </div>
    <figure class="atrimg">
      <img src="../../static/imgs/bg3.png">
    </figure>
    <div class="sort">
      <div class="sort-box">
        <h3 class="sort-box-title">
          <div class="sort-title-bg"></div>
          <span>{{sort_list[0].title}}</span>
        </h3>
        <div class="sort-box-items">
          <index-port class="sort-box-item" v-for="item of sort_list[0].list" :list="item" size="small" :key="item.id" @showClose="showClose"></index-port>
        </div>
      </div>
    </div>
    <div class="sort">
      <div class="sort-box" :class="{'sort-box-active': !moreShow}">
        <h3 class="sort-box-title">
          <div class="sort-title-bg"></div>
          <span>{{sort_list[1].title}}</span>
        </h3>
        <div class="sort-box-more" @click="click_more">
          <!-- <span v-show="!moreShow">展开</span>
          <span v-show="moreShow">收起</span> -->
          <svg class="icon more-icon" :class="{'more-icon-active': moreShow}" aria-hidden="true">
            <use xlink:href="#icon-fanhui"></use>
          </svg>
        </div>
        <transition name="fade">
          <div class="sort-box-items sort-box-tog" v-show="moreShow">
            <index-port class="sort-box-item" v-for="item of sort_list[1].list" :list="item" size="small" :key="item.id" @showClose="showClose"></index-port>
          </div>
        </transition>
      </div>
    </div>
    <mt-popup
      v-model="popupVisible"
      popup-transition="popup-fade"
    >
      <div class="popup-box">
        <figure class="popup-img">
          <img src="../../static/imgs/alert.png" width="100%">
        </figure>
        <p class="popup-p1">更多功能正在测试联调中</p>
        <p class="popup-p2">敬请期待......</p>
        <figure class="popup-close" @click="click_close">
          <img src="../../static/imgs/close.png" width="100%">
        </figure>
      </div>
    </mt-popup>
  </div>
</template>

<script>
import { baseLinkUrl } from '@/tool/baseUrl'
import _sort_list from '@/../static/data/index'
export default {
  name: 'Index-ka',
  data () {
    return {
      community_list: [
        {
          id: '101',
          funtionUrl: '/map',
          imageUrl: require('../../static/imgs/icon_arr1_01.png'),
          name: '衣食住行'
        },
        {
          id: '102',
          // funtionUrl: 'http://tiq.i-zhangzhougang.com/zhangzhou-travel/bus4zz/toBusSearch.do',
          funtionUrl: '/bus/index',
          imageUrl: require('../../static/imgs/icon_arr1_02.png'),
          name: '公交'
        },
        {
          id: '103',
          funtionUrl: '/Ship',
          imageUrl: require('../../static/imgs/icon_arr1_03.png'),
          name: '轮船'
        },
        // {
        //   id: '104',
        //   funtionUrl: '/',
        //   imageUrl: require('../../static/imgs/icon_arr1_04.png'),
        //   name: '停车场'
        // },
      ],
      banner_list:[],
      sort_list: _sort_list,
      loadingShow: false,
      moreShow: false,
      popupVisible: false
    }
  },
  components: {
    IndexPort: () => import('../components/index/port')
  },
  methods: {
    http_recommend_list () {
      this.axios.get(`http://zsht.bloomworks.cn/f/zs/banner/getBanner?entification=1`).then((res) => {
        this.banner_list = JSON.parse(res.data.data)
      })
     },
    showClose () {
      this.popupVisible = true
    },
    click_more () {
      this.moreShow = !this.moreShow
    },
    click_close () {
      this.popupVisible = false
    },
    click_banner (url) {
      if (url.indexOf(baseLinkUrl) === -1) {
        window.location.href = url
      } else {
        let routerUrl = url.slice(baseLinkUrl.length)
        this.$router.push(routerUrl)
      }
    },
  },
  mounted() {
    this.http_recommend_list()
  },
}
</script>
<style scoped lang="stylus">
.index
  background-color #f3f4f6
  min-height 100vh
  background-size 100% 490px
  padding-bottom 60px
.banner
  margin-bottom -100px
  // position relative
  // z-index 0
  // .banner-box
  //   height 314px
  //   .banner-item
  //     height 314px
  //     position relative
  //     img
  //       height 100%
.wrap
  background-color #fff
.community
  background #fff
  margin 0 20px
  position relative
  color #1c2c50
  margin-top 20px
  position relative
  overflow hidden
  box-shadow 0px 1px 81px 0px rgba(153,153,153,0.26)
  border-radius 10px
  .community-tip
    display flex
    justify-content center
    align-items center
    font-size 32px
    font-weight bold
    color #333333
    padding 52px 0 0
    .community-tip-bg
      width 85px
      height 5px
      font-size 0
      margin 0 14px
      img
        width 100%
        height 100%
    .community-tip-bg:first-child
      transform rotateY(180deg)
  .community-bg2
    width 210px
    height 219px
    position absolute
    top -86px
    right -20px
    img
      width 100%
  .community-box
    display flex
    flex-flow row wrap
    padding 58px 0 46px
    .community-box-item
      width 25%
      flex auto
      touch-action: none
.atrimg
  background #fff
  padding 36px 20px 42px
  font-size 0
  img
    width 100%
.sort
  color #333333
  .sort-box
    background #ffffff
    margin-top 20px
    position relative
    .sort-box-title
      padding 30px 0 10px 50px
      font-size 32px
      position relative
      span
        position relative
      .sort-title-bg
        background #EAC891
        width 132px
        height 18px
        position absolute
        bottom 10px
        border-radius:3px
        opacity:0.3
    .sort-box-items
      display flex
      flex-flow row wrap
      font-size 28px
      padding 25px 0
      .sort-box-item
        width 33%
        padding 25px 0
    .sort-box-more
      position absolute
      top 30px
      right 40px
      letter-spacing 2px
      color #999999
      border-radius 30px
      font-size 22px
      line-height 46px
      // background-color #999999
      padding 0 20px
  .sort-box-active
    padding-bottom 20px
.more-icon
  transform rotateZ(-90deg)
  transition all .2s linear
.more-icon-active
  transform rotateZ(90deg)
.fade-enter-active {
  transition: all .2s linear
}
.fade-enter {
  opacity: 0;
}
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
