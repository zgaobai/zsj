<template>
  <div class="main">
    <div class="header">
      <div class="we">
        <figure>
          <img :src="changeImg" alt="" width="100%">
        </figure>
        <span class="we-text">{{data.weather}}</span>
        <p class="adr">{{data.city}}</p>
      </div>
      <div class="temp">
        <p class="temp-text">{{data.temp}}<sup>°C</sup></p>
      </div>
    </div>
    <div class="content">
      <div class="box">
        <div class="info">
          <div class="item left">
            <div class="info-name">aqi
              <p class="state" :style="changeClo1">{{data.aqiGrade}}</p>
            </div>
            <div class="sign">空气质量指数</div>
          </div>
          <div class="item right">
            {{data.aqi}}
          </div>
        </div>
        <div class="info">
          <div class="item left">
            <div class="info-name">pm2.5
              <p class="state" :style="changeClo2">{{data.pmLevel}}</p>
            </div>
            <div class="sign">(细颗粒物）</div>
          </div>
          <div class="item right">
            {{data.pm25}} <span class="unit">μg/m3</span>
          </div>
        </div>
        <div class="info">
          <div class="item left">
            <div class="info-name">pm10
              <!-- <p class="state">优</p> -->
            </div>
            <div class="sign">(可吸入颗粒)</div>
          </div>
          <div class="item right">
            {{data.pm10}} <span class="unit">μg/m3</span>
          </div>
        </div>
        <div class="info">
          <div class="item left">
            <div class="info-name">level
              <!-- <p class="state">优</p> -->
            </div>
            <div class="sign">污染等级</div>
          </div>
          <div class="item right">
            {{data.aqiLevel}} 
          </div>
        </div>
        <div class="info">
          <div class="item left">
            <div class="info-name">grade
              <!-- <p class="state">优</p> -->
            </div>
            <div class="sign">污染类别</div>
          </div>
          <div class="item right">
            {{data.aqiGrade}} 
          </div>
        </div>
        <div class="info">
          <div class="item left">
            <div class="info-name">humidity
              <!-- <p class="state">优</p> -->
            </div>
            <div class="sign">(湿度）</div>
          </div>
          <div class="item right">
            <!-- 9 <span class="unit">μg/m3</span> -->
            {{data.humidity}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'env',
  data () {
    return {
      data: {},
      imgs: [
        require('../../../static/imgs/wea1.png'),
        require('../../../static/imgs/wea2.png'),
        require('../../../static/imgs/wea3.png'),
        require('../../../static/imgs/wea4.png'),
      ],
      testObj: ['background:#49C499','background:#FFCF73','background:#ff9a05']
    }
  },
  methods: {
    getWeather () {
      let url = 'http://218.5.185.82:58080/api/public/getWeather'
      this.axios.get(url).then((res) => {
        this.data = JSON.parse(res.data.data)
      }).catch(() => {
        this.$messagebox.alert('网络错误')
      })
    },
      getClo (value) {
      if (value === '优') {
        return this.testObj[0]
      }else if(value === '良'){
        return this.testObj[1]
      }else{
        return this.testObj[2]
      }
    }
  },
  mounted () {
    this.getWeather()
  },
  computed: {
    changeImg () {
      if (Number(this.data.weatherType) === 1 ) {
        return this.imgs[0]
      }else if (Number(this.data.weatherType) === 2){
        return this.imgs[1]
      }else if (Number(this.data.weatherType) === 3){
        return this.imgs[2]
      }else if (Number(this.data.weatherType) === 4){
        return this.imgs[3]
      }else{
        return ''
      }
    },
    changeClo1 () {
      return this.getClo(this.data.aqiGrade)
    },
    changeClo2 () {
      return this.getClo(this.data.pmLevel)
    }
  }
}
</script>

<style lang="stylus" scoped>
.main
  min-height 100vh
  background #3092fa
  .header
    height 369px
    background-image:  url('../../../static/imgs/env.png')
    background-repeat no-repeat
    background-size 100% 370px
    .we
      padding-top 24px
      position relative
      figure
        width 60px
        height 54px
        line-height 54px
        margin 0 26px 0 49px
        display inline-block
        vertical-align middle
      .we-text
        height 54px
        line-height 54px
        font-size 34px
        color #FFFFFF
        margin-top 38px
      .adr
        position absolute
        display inline-block
        text-align right
        color #FFFFFF
        font-size 34px
        right 55px
        top 24px
        height 54px
        line-height 54px
    .temp
      margin 35px 0 0 305px
      .temp-text
        display inline-block
        position relative
        font-size 111px
        color #ffffff
        sup 
          font-size 34px
          position absolute
          top 20px
  .content
    // height 838px
    background #ffffff
    margin -40px 10px 0px
    border-radius 20px
    .box
      padding-bottom 28px
      .info
        margin 0 66px 0 60px
        display flex
        border-bottom 1px solid #f4f4ff
        .item
          flex auto 
        .left
          text-align left 
          .info-name
            margin-top 37px
            font-size 34px
            color #333333
            .state
              display inline-block
              padding 6px 22px
              // background #49C499
              font-size 20px
              color #ffffff
              border-radius 3px
              margin-left 36px
              margin-top 10px
          .sign
            margin 21px 0 19px
            color #999999
            font-size 24px
        .right
          text-align right
          margin auto 
          font-size 48px
          color #333
          font-size 30px
          color #666666
          .unit
            font-size 24px
            color #666666
</style>
