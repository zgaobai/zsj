<template>
    <div class="main">
        <div class="warp">
            <div class="head">
                <img src="../../../static/imgs/touxiang2.png" alt="">
            </div>
            <div class="text">
                社保卡
            </div>
        </div>
        <div class="content-box">
            <div class="address">
                <p class="left">医院</p>
                <p class="right">漳州开发区第一医院</p>
            </div> 
            <p class="line"></p>
            <div class="address">
                <p class="left">预交金余额</p>
                <p class="right">0</p>
            </div>
            <div class="wrap-box">
                <div class="select" @click="click_cate">
                    <p class="text-box">{{category}}</p>
                    <svg class="icon arrow-icon" aria-hidden="true">
                        <use xlink:href="#icon-fanhui"></use>
                    </svg>
                </div>
                |<input class="select-ipt" placeholder="请输入金额" v-model="inpNum"  type="number" pattern="[0-9]*" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode) ) )'>
            </div>
            <!-- 下拉选择弹出层 -->
            <mt-popup v-model="cateVisible" position="bottom" class="box">
                <mt-picker :slots="slots" @change="ValuesChange"></mt-picker>  
            </mt-popup>
            <div class="select-radio">请选择充值方式</div>
            <div class="pay-box">
                <div class="pay" v-for="(item, index) in showImg" :key="index" @click="active(index)">
                    <figure><img :src="item.img" alt=""></figure>
                    <div class="text">{{item.text}}</div>
                    <div class="radio" :class="{'radio-active': pay_num === index}"></div>
                    <div class="radio-inside" :class="{'radio-inside-active': pay_num === index }"></div>
                    <p class="line"></p>
                </div>
            </div>
            <p class="money-box">充值金额：<span class="money">{{inpNum}}</span></p>
            <div class="confirmPay" @click="showClose">确认充值</div>
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
    name: 'Recharge',
    data () {
        return {
            slots: [
                {
                    flex: 1,
                    values: ['内科', '外科','妇产科']
                }
            ],
            showImg: [
                {
                    img: require('../../../static/imgs/weixin.png'),
                    text: '微信支付'
                }
            ],
            category: '',
            cateVisible: false,
            popupVisible: false,
            pay_num: 0,
            oldNum: '',
            // inpNum: ''
            // value: ''
        }
    },
    computed:{
        inpNum: {
            get:function(){
                return this.oldNum;
            
            },
            set:function(newValue){
                this.oldNum=newValue.replace(/[^\d.]/g,'');
            }
        }
     },
    methods: {
        click_cate () {
            this.cateVisible = !this.cateVisible
        },
        ValuesChange (res) {
            this.category = res.values[0]
        },  
        active (index) {
            this.pay_num = index
        },
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
  min-height 100vh
  background #F3F4F6
  .warp
    background #1F7DFF
    width 100% 
    height 270px
    .head
      float left
      overflow hidden
      width 110px
      height 110px
      margin 50px 30px 0 50px
      border-radius 50%
      box-shadow 0 0 15px gray
      img 
        width 100%
        height 100%
    .text
       float left
       margin-top 75px
       color #ffffff
       font-size 38px
       line-height 42px
       font-weight 400
  .content-box
     background #ffffff
     border-radius 12px
     margin -80px 20px 0px 20px
     padding-bottom 20px
     .address
        padding 40px
        font-size 30px
        line-height 48px
        font-weight 400
        .left
          float left
        .right
          float right
     .line
        height 1px
        margin 40px 40px 0
        background rgba(225,225,225,.3)
     .wrap-box
        display flex
        margin 40px 30px 0
        height 97px
        line-height 97px
        background #F6F6F6
        .select
            display flex
            align-items center
            // padding 0 20px
            // margin 0 20px
            // box-sizing border-box
            .text-box
                height 100%
                padding-left 8px
            .arrow-icon
                transform rotateZ(-90deg)
                margin 0 15px
        .select-ipt 
            flex auto
            margin-left 15px
            outline none
            border none 
            background #F6F6F6
            touch-action none
     .select-radio
        padding 40px
        color: #333
        font-size: 30px
        line-height 48px
     .pay-box
        padding 0 40px
        width 100%
        float left
        .pay
            margin-bottom 40px 
            vertical-align middle
            position relative
            figure
                display inline-block
                vertical-align middle
                width 58px
                img 
                  width 100%
            .text
                display inline-block
                vertical-align middle
                padding-left 100px
            .radio
                position absolute
                right 0
                top 10px
                width 38px
                height 38px
                border-radius 50%  
                border: 1px solid #CDCDCD
            .radio-active
                border: 1px solid #42AE3C
            .radio-inside
                position absolute
                right 8px
                top 18px
                width 22px
                height 22px
                border-radius 50%  
                background-color #ffffff
            .radio-inside-active
                background-color #42AE3C
            .line
                height 1px 
                background-color #ECECEC
                margin 0 
                margin-top 20px
     .money-box
        padding 40px
        font-size 30px 
        line-height 48px
        .money
            color #FF4646
     .confirmPay
        margin 30px 55px
        padding 20px
        text-align center
        background-color #2B7FF3
        color #ffffff
        border-radius 10px
        font-size 30px
        line-height 48px
    .box
        width 100%
        touch-action none
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