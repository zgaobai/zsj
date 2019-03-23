<template>
  <div class="main">
    <div class="banner">
      <img src="../../../static/imgs/edu_banner.png" alt="" width="100%">
    </div>
    <div class="sort">
      <div class="sort-box">
        <div class="sort-box-items">
          <index-port class="sort-box-item" v-for="item of community_list" :list="item" size="small" :key="item.id" @showClose="showClose"></index-port>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="icon-box nav">
      <div class='icon-box-item color'
        v-for="(item, index) in textList" :key="index" :class="{'changeColor': num === index}" @click="active(index)">
          {{item}}
      </div>
    </div>
    <router-view></router-view>
    <div class="line"></div>
    <div class="link">
      <div class="title">
        <h4>友情链接</h4>
        <p class="line2"></p>
      </div>
      <div class="list">
        <div class="list_text" v-for="(item, index) in linkList" :key="index" :class="{'activeColor': nu === index}" @click="link(index)">
          <p>{{item.title}}</p>
        </div>
      </div>
    </div>
    <!-- <div class="content">
      <image-text v-for="(item, index) of newList" :list='item' :key="index" size="big"></image-text>
    </div> -->
    
    <!-- <div class="content_box" v-for="(item , index) in newList" :key="index">
      <div class="left_img">
        <img :src="item.imageUrl" alt="" width="100%">
      </div>
      <div class="right_text">
        <div class="right_text_title">
          {{item.title}}
        </div>
        <div class="right_text_cont">
          {{item.cont}}
        </div>
      </div>
    </div> -->
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
  name: 'edIndex' ,
  components: {
    IndexPort: () => import('../../components/index/port')
  },
  data () {
    return {
      community_list: [
        {
          id: '2',
          funtionUrl: '/Education/index/esDetails',
          imageUrl: require('../../../static/imgs/notice.png'),
          name: '通知公告'
        },
        {
          id: '7',
          funtionUrl: '/Education/index/esDetails',
          imageUrl: require('../../../static/imgs/law.png'),
          name: '法律法规'
        },
        {
          id: '3',
          funtionUrl: '/Education/index/esDetails',
          imageUrl: require('../../../static/imgs/rs.png'),
          name: '招生信息'
        },
        {
          id: '4',
          funtionUrl: '/Education/index/esDetails',
          imageUrl: require('../../../static/imgs/manage.png'),
          name: '安全管理'
        },
        {
          id: '5',
          funtionUrl: '/Education/index/esDetails',
          imageUrl: require('../../../static/imgs/teaching.png'),
          name: '教学教研'
        },
        {
          id: '6',
          funtionUrl: '/Education/index/esDetails',
          imageUrl: require('../../../static/imgs/es.png'),
          name: '教育督导'
        },
      ],
      textList: [ '教育概况' , '教育新闻', '联系我们' ],
      linkList: [
        {
          title: '厦门大学附属实验中学',
          hrefUrl: 'http://www.xiadafz.com/',
        },
        {
          title: '厦门大学附属实验小学',
          hrefUrl: 'http://59.59.49.91:8094/index.aspx',
        },
        {
          title: '漳州南太武实验小学',
          hrefUrl: 'http://www.ntwsyxx.com/',
        },
        {
          title: '漳州开发区店地小学',
          hrefUrl: 'http://ddxx.i-zhangzhougang.com/',
        },
        {
          title: '漳州开发区白沙小学',
          hrefUrl: 'http://bsxx.i-zhangzhougang.com/',
        },
        {
          title: '漳州开发区实验幼儿园',
          hrefUrl: 'http://syy.i-zhangzhougang.com/',
        },
        {
          title: '漳州开发区大径幼儿园',
          hrefUrl: 'http://djy.i-zhangzhougang.com/',
        },
        {
          title: '漳州开发区第三幼儿园',
          hrefUrl: 'http://d3y.i-zhangzhougang.com/',
        },
        {
          title: '漳州开发区第四幼儿园',
          hrefUrl: 'http://d4y.i-zhangzhougang.com/',
        },
        {
          title: '漳州开发区海滨学校',
          hrefUrl: 'http://hbxx.i-zhangzhougang.com/',
        },      
      ],
      popupVisible: false,
      num: 0,
      nu: ''
    };
  },
  methods: {
    showClose () {
      this.popupVisible = true
    },
    click_close () {
      this.popupVisible = false
    },
     //点击tab显示相对的内容区
    active (n) {
      this.num = n
      if (n === 0) {
        this.$router.push('/Education/index/esDetails/artDet')
      } else if (n === 1) {
        this.$router.replace('/Education/edIndex/law')
      } else {
        this.$router.push('/Education/index/contact')
      }
    },
    link(index){
      this.nu = index
      window.location.href=this.linkList[index].hrefUrl
      // this.$router.push(this.linkList[n].hrefUrl)
    },
    set_num () {
      const path = this.$route.path
      if (path === '/Education/edIndex/contact') {
        this.num = 2
      } else if(path === '/Education/edIndex/law') {
        this.num = 1
      } else {
        this.num = 0
      }
    },
  },
  created () {
    this.set_num()
  }
}

</script>

<style lang='stylus' scoped>
.main
  min-height 100vh
  background #ffffff
  .banner
    height 286px
    width 100%
    // background #418DFB
  .sort
    color #333333
    .sort-box
      background #ffffff
      // margin-top 20px
      position relative
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
  .line
    width 100%
    height 16px
    background #F3F4F6
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
    font-weight 600
  .activeColor
    color #6C9BFE
  .link
    padding 0 20px
    background #ffffff
    .title
      position relative
      margin-bottom 60px
      margin-top 30px
      padding 1px
      h4
        position absolute
        color #333333
        bottom 0 
        top 0
        left 5px
        z-index 2
      .line2
        position absolute
        width 135px
        height 18px
        bottom -34px
        left -3px
        opacity: 0.5
        border-radius 4px
        background #6C9BFE
    .list
      display flex
      justify-content space-between
      flex-flow wrap
      line-height 60px
      padding-bottom 20px
      .list_text
        width 50%
        // text-align left
        font-size 26px
        color #333333
        a          
          text-decoration none
          out-line none
          color #000000
          -webkit-tap-heighlight-color red
          a:hover 
            color #CC3300
            text-decoration underline
  // .content
    // padding 34px 20px
    // border-bottom 1px solid #f3f4f6
  // .content_box
  //   padding 34px 20px
  //   border-bottom 1px solid #f3f4f6
  //   .left_img
  //     display inline-block
  //     width 230px
  //     height 174px
  //     // background #418DFB
  //   .right_text
  //     vertical-align top
  //     display inline-block
  //     width 460px
  //     margin-left 20px
  //     .right_text_title
  //       font-size 32px
  //       height 52px
  //       line-height 52px
  //     .right_text_cont
  //       margin-top 60px
  //       font-size 24px
  //       color #999999
  //       line-height 36px
  //       overflow hidden
  //       text-overflow ellipsis
  //       display -webkit-box
  //       -webkit-line-clamp 2
  //       -webkit-box-orient vertical
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