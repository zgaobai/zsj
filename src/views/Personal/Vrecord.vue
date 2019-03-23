<template>
    <div class="main">
        <div class="content-box">
            <div class="select" @click="click_cate">
                <span class="text">{{category}}</span>
                <svg class="icon arrow-icon" aria-hidden="true">
                    <use xlink:href="#icon-fanhui"></use>
                </svg>
            </div>
            <!-- 下拉选择弹出层 -->
            <mt-popup v-model="cateVisible" position="bottom" class="box">
                <mt-picker :slots="slots" @change="ValuesChange"></mt-picker>  
            </mt-popup>
            <div class="content">
                <div class="month">10月</div>
                <div class="list-box">
                  <div class="item day">26日</div>
                  <div class="item do-box">
                    <span class="left">科室：内科门诊</span>
                    <span class="right">医生：王医生</span>
                  </div>
                  <div class="item yy-box">
                    <span class="adr">医院：漳州开发区第一医院</span>
                    <span class="money">￥300.00</span>
                  </div>
                </div>
                <div class="list-box">
                  <div class="item day">26日</div>
                  <div class="item do-box">
                    <span class="left">科室：内科门诊</span>
                    <span class="right">医生：王医生</span>
                  </div>
                  <div class="item yy-box">
                    <span class="adr">医院：漳州开发区第一医院</span>
                    <span class="money">￥300.00</span>
                  </div>
                </div>
                <div class="list-box">
                  <div class="item day">26日</div>
                  <div class="item do-box">
                    <span class="left">科室：内科门诊</span>
                    <span class="right">医生：王医生</span>
                  </div>
                  <div class="item yy-box">
                    <span class="adr">医院：漳州开发区第一医院</span>
                    <span class="money">￥300.00</span>
                  </div>
                </div>
            </div>
            <div class="content">
                <div class="month">11月</div>
                <div class="list-box">
                  <div class="item day">6日</div>
                  <div class="item do-box">
                    <span class="left">科室：内科门诊</span>
                    <span class="right">医生：王医生</span>
                  </div>
                  <div class="item yy-box">
                    <span class="adr">医院：漳州开发区第一医院</span>
                    <span class="money">￥300.00</span>
                  </div>
                </div>
                <div class="list-box">
                  <div class="item day">25日</div>
                  <div class="item do-box">
                    <span class="left">科室：内科门诊</span>
                    <span class="right">医生：王医生</span>
                  </div>
                  <div class="item yy-box">
                    <span class="adr">医院：漳州开发区第一医院</span>
                    <span class="money">￥300.00</span>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Vrecord',
    data () {
        return {
            slots: [
                {
                    flex: 1,
                    values: [],
                    defaultIndex:0,
                }
            ],
            year: '',
            category: '',
            cateVisible: false
        }
    },
    methods: {
        click_cate () {
            this.cateVisible = !this.cateVisible
        },
        ValuesChange (res) {
          this.category = res.values[0]
        },
        data () {
           this.getYear()
            let data = []
            data.push(this.year-2,this.year-1,this.year,this.year+1,this.year+2)
            this.slots[0].values=data
            this.slots[0].defaultIndex = 2
        },
        getYear () {
        let myDate = new Date()
        let year = myDate.getFullYear()
        this.year = year
      }
    },
    mounted() {
      this.getYear()
      this.data()
    },
}
</script>

<style scoped lang="stylus">
.main
  min-height 100vh
  background #F3F4F6
  .content-box
    .select
      padding 40px
      text-align right
      background #ffffff
      .text
        font-size 32px
        padding-right 15px
      .arrow-icon
        transform rotateZ(-90deg)
    .content
      .month
        height 80px
        line-height 80px
        margin-left 22px
        font-size 32px
      .list-box
        display flex
        flex-direction column
        background-color #ffffff
        height 237px
        padding 20px 0
        margin-bottom 20px
        width 100%
        .item
          flex auto
        .day
          width 115px
          height 45px
          line-height 45px
          text-align center
          background #F3F3F3
          color #666666
          font-size 30px
          border-radius 0 23px 23px 0
        .do-box
          margin 38px 0 33px 22px
          font-size 30px
          color #333333
          .left
            margin-right 43px
        .yy-box
           margin-left 22px
           .adr
             float left 
             color #999999
             font-size 28px
           .money
             float right 
             font-size 32px
             color #2B7FF3
             margin-right 33px
      .list-box:last-child
        margin-bottom 0px
  .box
      width 100%
      touch-action none
     
</style>