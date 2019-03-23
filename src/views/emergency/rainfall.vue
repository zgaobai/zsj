<template>
  <div class="main">
    <div class="content">
      <div class="list" v-for="(item, index) in rainList" :key="index">
        <div class="name item"><p class="line"></p>{{item.devName}} </div>
        <p class="rainfall item">雨量：<span> {{item.rainFall}} mm</span>
        </p>
        <div class="water item">
         <p class="lev"><span class="start">开始时间： </span><span class="time">{{nowtime}}</span></p> 
         <!-- <p class="lev right">{{aftertime}}</p> -->
        </div>
         <div class="water item">
         <p class="lev"><span class="start">结束时间： </span><span class="time">{{aftertime}}</span></p> 
         <!-- <p class="lev right">{{aftertime}}</p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rainfall',
  data () {
    return {
      rainList: {},
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
    getRainFall () {
      // let url = 'http://zsht.bloomworks.cn/api/public/getRainFall?'
      let url = 'http://218.5.185.82:58080/api/public/getRainFall?'
      this.axios.get(url,
      {
        params:{
          start: this.nowtime,
          end: this.aftertime
        } 
      }
      ).then((res) => { 
        this.rainList = JSON.parse(res.data.data)
      }).catch(() => {
        this.$messagebox.alert('网络错误')
      })
    }
  },
  mounted () {
    this.getNowFormatDate()
    this.getRainFall()
  }
}
</script>

<style lang="stylus" scoped>
.main
  min-height 100vh
  background linear-gradient(to bottom, #599EFE,#2B7FF3)
  padding 0 30px
  .content
    padding-top 40px
    padding-bottom 20px
    .list
      height 271px
      // width 688px
      display flex
      flex-direction column
      margin-bottom 20px
      background-image:  url('../../../static/imgs/rainbj.png')
      background-repeat no-repeat
      background-size 100% 271px
      color #ffffff
      border-radius 10px
      .item
        flex auto
      .name
        padding-top 27px
        font-size 40px
        color #333333
        .line
          display inline-block
          margin 0 16px 0 7px
          width 7px
          height 36px
          background-color #FC944F
      .rainfall
        margin-left 31px
        font-size 28px
        color #333333
      .water
        margin-left 31px
        font-size 28px
        .lev
          .start
            color #333333
          .time
            color #666666
    .list:nth-child(odd)
      // background-image:  url('../../../static/imgs/worry0.png')
    // .list:nth-child(even)
    //   background-image:  url('../../../static/imgs/worry1.png')
</style>
