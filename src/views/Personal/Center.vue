<template>
  <div class="main">
    <div class="header">
      <div class="left">
        <div class="left-top">
          <img src="../../../static/imgs/touxiang2.png" alt="">
        </div>
        <p class="left-bt">张三</p>
      </div>
      <div class="right">
        <div class="info">手机: 186****6035
          <figure>
            <img src="../../../static/imgs/write.png" alt="">
          </figure>
        </div>
        <p class="info">身份证: 4417811974****670</p>
        <p class="sum">医保账户余额: ￥300.00</p>
      </div>
    </div>
    <div class="line"></div>
    <div class="content">
      <div class="pay-box">
          <div class="pay" v-for="(item, index) in showImg" :key="index" @click="active(index)">
              <figure><img :src="item.img" alt=""></figure>
              <div class="text">{{item.text}}</div>
              <div class="radio">
                <svg class="icon return-icon" aria-hidden="true">
                  <use xlink:href="#icon-fanhui"></use>
                </svg>
              </div>
              <p class="line"></p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Center',
  data () {
    return {
      showImg: [
          {
            img: require('../../../static/imgs/card.png'),
            text: '卡片信息'
          },
          {
            img: require('../../../static/imgs/mybug.png'),
            text: '我的卡包'
          },
          {
            img: require('../../../static/imgs/why.png'),
            text: '常见问题'
          },
          {
            img: require('../../../static/imgs/setup.png'),
            text: '设置'
          }
      ],
    }
  },
  methods: {
    active (index) {
      switch(index){
        case 0 :
          this.$router.push('/Personal/Center/Info/Vcard');
        break;
        case 1 :
          this.$router.push('/');
        break;
        case 2 :
          this.$router.push('/Personal/Center/why');
        break;
        case 3 :
          this.$router.push('/');
        break;
      }
    }
  } 
  }
</script>

<style lang="stylus" scoped>
.main
  min-height 100vh
  background-color #ffffff
  .header
    background-image: url('../../../static/imgs/center_bg.png')
    background-repeat no-repeat
    background-size 100% 285px
    background-color #ffffff
    padding 40px
    height 285px
    .left  
      float left
      width 30%
      height 100%
      text-align center
      .left-top
        width 110px
        height 110px
        margin 20px 40px
        border-radius 50%
        img 
          width 100%
      .left-bt
        color #333333
        font-size 36px
    .right
      float left
      width 70%
      height 100%
      .info
        position relative
        font-size 26px
        color #666666
        margin 30px
        figure 
          position absolute
          display inline-block
          right 0
          top -20px
          width 35px
          height 35px
          img 
            width 100%
      .sum
        background #F4F4F4
        border-radius 29px
        text-align center
        padding 12px
        width 83%
        margin-left 20px
  .line
    background-color #F3F4F6
    width 100%
    height 20px
  .content
    background-color #ffffff
    padding-top 30px
    .pay-box
      padding 10px 40px
      width 100%
      float left
      .pay
        margin-bottom 40px 
        vertical-align middle
        position relative
        touch-action: none
        figure
          display inline-block
          vertical-align middle
          width 38px
          img 
            width 100%
        .text
          display inline-block
          vertical-align middle
          padding-left 70px
          color #333333
          font-size 32px
        .radio
          position absolute
          right 0
          top 5px
          width 24px
          .return-icon
            transform rotateZ(-180deg)
        .line
          height 1px 
          background-color #f4f4f4
          margin 0 
          margin-top 30px
</style>
