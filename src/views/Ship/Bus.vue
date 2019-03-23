<template>
  <div class="main">
    <div class="box">
      <div class="itop">
        <div class="itop-one">
          <div class="ft">厦门</div>
          <div class="text">（旅游客运码头）</div>
        </div>
        <div class="itop-two">
          <div class="img"><img src="../../../static/imgs/buss.png" alt=""></div>
          <div class="to"><img src="../../../static/imgs/ship_.png" alt=""></div>
        </div>  
        <div class="itop-three">
          <div class="ft">漳州港</div>
          <div class="text">（客运码头）</div>
        </div>
      </div>
      <div class="swiper">
        <div class="block" :class="{blockActive: showBox === 1}">
        </div> 
        <p class="before" @click="checkBox(0)">
          周一 至 周四
        </p>
        <p class="after" @click="checkBox(1)">
          周五 至 周日
        </p>
      </div>
      <div class="fo-box">
        <div>
          <span class="first">首</span>
          <span class="time">06:45</span>
          
        </div>
        <div>
          <span class="last">终</span>
          <span class="time">21:30</span>
        </div>
      </div>
      <div class="showTime">
        <show-time :allDates="allDates"></show-time>
      </div>
      <div class="text">
        <p>班次说明:</p>
        <p>6:45~17:45日航时段，发船间隔15分钟</p>
        <p>18:00~末班:夜航时段，发出间隔不定，请展开全部查看</p>        
      </div>
      <p class="line"></p>
      <div class="shop-box">
        <p class="shop" @click="goShop(goShopUrl)">立即购票</p>
      </div>
    </div>
     <div class="box">
      <div class="itop">
        <div class="itop-one">
          <div class="ft">漳州港</div>
          <div class="text">（客运码头）</div>
        </div>
        <div class="itop-two">
          <div class="img"><img src="../../../static/imgs/buss.png" alt=""></div>
          <div class="to"><img src="../../../static/imgs/ship_.png" alt=""></div>
        </div>  
        <div class="itop-three">
          <div class="ft">厦门</div>
          <div class="text">（旅游客运码头）</div>
        </div>
      </div>
      <div class="swiper">
        <div class="block" :class="{blockActive:  returnShowBox === 1}">
        </div> 
        <p class="before" @click="returnBox(0)">
          周一 至 周四
        </p>
        <p class="after" @click="returnBox(1)">
          周五 至 周日
        </p>
      </div>
      <div class="fo-box">
        <div>
          <span class="first">首</span>
          <span class="time">06:45</span>
        </div>
        <div>
          <span class="last">终</span>
          <span class="time">22:00</span>
        </div>
      </div>
      <div class="showTime">
        <show-time :allDates="allDatesReturn"></show-time>
      </div>
      <div class="text">
        <p>班次说明:</p>
        <p>6:45~17:45日航时段，发船间隔15分钟</p>
        <p>18:00~末班:夜航时段，发出间隔不定，请展开全部查看</p>    
      </div>
      <p class="line"></p>
      <div class="shop-box">
        <p class="shop" @click="goShopRe(goShopReUrl)">立即购票</p>
      </div>
    </div>
  </div>
</template>

<script>
import date from '@/../static/data/date'
export default {
  name: 'Bus',
  data () {
    return {
      showBox: 0,
      returnShowBox: 0,
      B_day: date.B_day,
      B_Z_X_A_night: date.B_Z_X_A_night,
      B_Z_X_B_night: date.B_Z_X_B_night,
      B_X_Z_A_night: date.B_X_Z_A_night,
      B_X_Z_B_night: date.B_X_Z_B_night,
      D_X_Z: date.D_X_Z,
      D_Z_X: date.D_Z_X,
      goShopUrl: '',
      goShopReUrl: ''
    }
  },
  components: {
    showTime: () => import('../../components/ship/showTime')
  },
  computed: {
    allDates () {
      if (this.showBox === 0) {
        return this.B_day.concat(this.B_X_Z_A_night)
      } else {
        return this.B_day.concat(this.B_X_Z_B_night)
      }
    },
    allDatesReturn () {
      if (this.returnShowBox === 0) {
        return this.B_day.concat(this.B_Z_X_A_night)
      } else {
        return this.B_day.concat(this.B_Z_X_B_night)
      }
    }
  },
  methods: {
    checkBox (num) {
      this.showBox = num
    },
    returnBox (i) {
      this.returnShowBox = i
    },
    goShop (e) {
      this.goShopUrl = e
      window.location.href = "http://xzhx.89t.cn/ebusiness/wx/product/productDetail.html?sysid=2c918085611e430c016120baa4cd002f"
    },
    goShopRe (e) {
      this.goShopUrl = e
      window.location.href = "http://xzhx.89t.cn/ebusiness/wx/product/productDetail.html?sysid=2c918085611e430c016120b2083c0000"
    }
  },
}
</script>

<style lang="stylus" scoped>
.main
  background-color #F3F4F6
  overflow hidden
  .box
    overflow hidden
    margin 30px
    background-image: url('../../../static/imgs/ship-bg.png')
    background-repeat no-repeat
    background-size 100% 170px 
    background-color #ffffff
    border-radius 16px
    .itop
      display flex
      padding-bottom 10px
      color #ffffff
      box-sizing border-box
      div
        flex 3
        text-align center
        .text 
          padding 30px 0
          color #eeeeee
          font-size 24px
        .ft
          font-size 32px
      .itop-two
        flex 1
        text-align center
        padding-top 30px
        .img
          width 40px
          margin 10px 0 8px 30px
          text-align center
        .to
          width 100px
        .img, .to
          img 
            width 100%
      .itop-one
        margin 40px 20px
      .itop-three
        text-align right
        margin 40px 20px
    .swiper
      position relative
      line-height 70px
      height 70px
      background-color #98c1ff
      border-radius 50px
      margin 0 95px
      color #ffffff
      .block
        position absolute
        left 0
        top 0px
        width 50%
        height 70px
        border-radius 50px
        background-color #5BA0FF
        transition left .2s linear
      .blockActive
        left 50%
      .before, .after
        position absolute
        top 2px
        width 50%
        text-align center
        z-index 1
        font-size 28px
      .before
        left 0
      .after
        right 0
    .fo-box
      margin 40px
      text-align center
      div
        display inline
        position relative
        width 50%
        height 40px
        line-height 48px
        margin 60px
        font-size 28px
        .first, .last
          background-color #2B7FF3
          padding 4px
          border-radius 5px
          color #ffffff
          font-size 20px
        .last
          background-color #56C592
        .time
          position absolute
          top 0px
          left 50px
    .text
      padding 44px
      font-size 24px
      line-height 42px
    .line
      height 1px
      background #F4F4F4
    .shop-box
      text-align center
      margin 30px
      height 88px
      background-color #2B7FF3
      border-radius 10px
      .shop
        font-size 30px
        color #ffffff 
        line-height 48px
        padding 20px                  
</style>