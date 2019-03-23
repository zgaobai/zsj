<template>
  <div class="main">
    <div class="content">
      <div class="list" v-for="(item, index) in waterList" :key="index">
        <div class="name item"><p class="line"></p>{{item.reservoirName}}</div>
        <div class="water item">
         <p class="lev">当前水位：<span>{{item.nowLine}} m</span></p> 
         <p class="lev right">最大水位：<span>{{item.floodLine}} m</span></p>
        </div>
        <div class="rainfall item">
          <p class="l"> 集雨面积：{{item.rainArea}} km<sup>2</sup></p>
          <p class="r">水库面积：{{item.reservirArea}} 公顷</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'reservoir',
  data () {
    return {
      waterList: [],
      nowday: '',
      day: '',
      nowtime: '',
      aftertime: ''
    }
  },
  methods: {
    getNowFormatDate() {
      let date = new Date()
      let seperator1 = "/"
      let seperator2 = '-'
      let seperator3 = ':'
      let year = date.getFullYear()
      let month = (date.getMonth() + 1)>9?(date.getMonth() + 1) :'0'+(date.getMonth() + 1) 
      let strDate = date.getDate()>9?date.getDate() :'0'+ date.getDate() 
      let hour = date.getHours()>=9?date.getHours() :'0'+ date.getHours() 
      // let hour = date.getHours()
      // let mm = date.getMinutes()>9?date.getMinutes() :'0'+date.getMinutes() 
      // let ss = date.getSeconds()>9?date.getSeconds() :'0'+date.getSeconds()
      if ( hour % 2 == 0) {
        this.nowtime = year + seperator1 + month + seperator1 + strDate + ' ' + hour + seperator3 + '00' + seperator3 + '00'
        this.aftertime = year + seperator1 + month + seperator1 + strDate + ' ' + (hour + 2) + seperator3 + '00' + seperator3 + '00'
      }
      if ( hour % 2 == 1) {
        this.nowtime = year + seperator1 + month + seperator1 + strDate + ' ' + ((hour - 1)> 9 ?(hour -1) : '0' + (hour -1) )+ seperator3 + '00' + seperator3 + '00'
        this.aftertime = year + seperator1 + month + seperator1 + strDate + ' ' + ((hour + 1) > 9 ?(hour +1) : '0' + (hour +1) ) + seperator3 + '00' + seperator3 + '00'
      }
      this.nowday = year + seperator1 + month + seperator1 + strDate
      this.day = year + seperator2 + month + seperator2 + strDate
    },
    getWater () {
      // let url = 'http://zsht.bloomworks.cn/api/public/getWaterLevel?'
      let url = 'http://218.5.185.82:58080/api/public/getWaterLevel?'
      this.axios.get(url,
      {
        params:{
          start: this.nowtime,
          end: this.aftertime
        } 
      }
      ).then((res) => {
        this.waterList = JSON.parse(res.data.data)
      }).catch(() => {
      this.$messagebox.alert('网络错误')
      })
    }
  },
  mounted () {
    this.getNowFormatDate()
    this.getWater()
  }
}
</script>

<style lang="stylus" scoped>
.main
  min-height 100vh
  background linear-gradient(to bottom, #599EFE,#2B7FF3)
  padding 0 30px
  .content
    padding-top 20px
    padding-bottom 20px
    .list
      height 280px
      display flex
      flex-direction column
      // padding 38px 0 38px 30px
      margin-bottom 20px
      background-image:  url('../../../static/imgs/reserbj.png')
      background-repeat no-repeat
      background-size 100% 280px
      color #333333
      .item
        flex auto
      .name
        padding-top 28px
        font-size 40px
        .line
          display inline-block
          margin 0 16px 0 7px
          width 7px
          height 36px
          background-color #FC944F
      .rainfall
        margin-left 31px
        font-size 28px
        display flex
        p
          flex 1
          display inline-block
        .time
          margin-left 20px
          // font-size 20px
        .r
          // text-align right
      .water
        display flex
        margin-left 31px
        font-size 28px
        p
          flex 1
        .lev
          display inline-block
        .right
          // text-align right
    // .list:nth-child(odd)
    //   background-image:  url('../../../static/imgs/reserbj.png')
    // .list:nth-child(even)
    //   background-image:  url('../../../static/imgs/worry1.png')
</style>
