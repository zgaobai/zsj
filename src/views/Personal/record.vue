<template>
    <div class="main">
        <div class="content-box">
            <!-- <div class="select" @click="click_cate">
                <span class="text">{{category}}</span>
                <svg class="icon arrow-icon" aria-hidden="true">
                    <use xlink:href="#icon-fanhui"></use>
                </svg>
            </div> -->
            <!-- 下拉选择弹出层 -->
            <!-- <mt-popup v-model="cateVisible" position="bottom" class="box">
                <mt-picker :slots="slots" @change="ValuesChange"></mt-picker>  
            </mt-popup> -->
            <div class="list-box">
              <div class="list" v-for="(item, index) in infoList" :key="index">
                <div class="money box">
                  {{item.money}}
                  <p class="time">{{item.time}}</p>
                </div>
                <div class="sign box" :class="{'sign-active' : item.sign_num === 0}">{{item.sign}}</div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'record',
    data () {
        return {
            slots: [
                {
                    flex: 1,
                    values: []
                }
            ],
            infoList: [
              {
                money: '+300元',
                time: '2018-11-9 10:22',
                sign: '充值成功',
                sign_num: 1
              },
               {
                money: '+100元',
                time: '2018-11-9 10:22',
                sign: '充值成功',
                sign_num: 1
              },

               {
                money: '+300元',
                time: '2018-11-9 10:22',
                sign: '待确认',
                sign_num: 0
              },
               {
                money: '+300元',
                time: '2018-11-9 10:22',
                sign: '充值成功',
                sign_num: 1
              },
               {
                money: '+300元',
                time: '2018-11-9 10:22',
                sign: '待确认',
                sign_num: 0
              },

            ],
            year: '',
            category: '',
            cateVisible: false,
            popupVisible: false
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
            this.slots[0].values=data;
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
  .content-box
    margin 40px
    .select
      display flex
      justify-content space-between
      padding 20px
      background #F3F4F6
      .text
        font-size 32px
      .arrow-icon
        transform rotateZ(-90deg)
    .list-box
      padding 0 20px
      .list
        display flex
        justify-content space-between
        line-height 48px
        padding-top 20px
        border-bottom 1px solid #f4f4f4
        .box
          flex auto
        .money
          .time
            color #BFBFBF
            font-size 20px
        .sign
          line-height 110px
          text-align right
          color red
        .sign-active
          color #cccccc
  .box
      width 100%
      touch-action none
     
</style>