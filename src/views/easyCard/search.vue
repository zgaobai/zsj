<template>
  <div class="main">
    <div class="content">
      <div class="adr-box" v-for="(item, index) in list" :key="index">
        <div class="item">
          <p class="adr-name">{{item.name}}</p>
          <p class="adr">{{item.adr}}</p>
          <p class="time">{{item.time}}</p>
        </div>
        <div class="item" @click="click_nav (item)">
          <figure class="img"><img src="../../../static/imgs/adr.png" alt=""></figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import qq from 'qq'
// import { getMyLocation } from '@/tool/map'

// const geocoder = new qq.maps.Geocoder();
// const geolocation = new qq.maps.Geolocation("ZU2BZ-HUKKU-PUNV3-B26M6-BOVOQ-H5F4F", "zs-app")
export default {
  name: 'search',
  data () {
    return {
      list: [{
        name: '招商银行（漳州港支行）',
        adr: '漳州市龙海市漳州开发区招商大道36-5号二楼',
        time: '上班时间 09:00 - 17:00 '
      }],
      // map: {},
      // markersArray: [],
      // addr: '我的位置',
      // longitude: '',
      // latitude: '',
      // city: '',
    }
  },
  methods: {
    click_nav (item) {
      const backurl = encodeURIComponent(`http://zszj.i-zhangzhougang.com/#/index/search`)
      let url = `https://apis.map.qq.com/tools/routeplan/eword=${item.adr}?back=1&backurl=${backurl}&referer=zs_app&key=2SHBZ-DDUCO-N75WO-SHEAB-4FVPF-WLFIW`
      window.location.href = url

      // this.nowLocation().then((res) => {
      //   let url = `https://apis.map.qq.com/tools/routeplan/eword=${item.adr}?back=1&backurl=http://192.168.1.130:8080/index/search&referer=zs-app&key=ZU2BZ-HUKKU-PUNV3-B26M6-BOVOQ-H5F4F`
      //   window.location.href = url
      // }).catch(() => {
      //   this.$toast('导航失败')
      // })
    },
  },
  mounted () {
    // this.getMyLocation()
  }
}
</script>

<style lang="stylus" scoped>
.main
  min-height 100vh
  background #f3f4f6
  .content
    background #ffffff
    .adr-box
      display flex
      height 198px
      padding-left 34px
      border-bottom 1px solid #EEEEEE
      .item
        flex auto
        .adr-name
          margin 31px 0 25px 0
          font-size 36px
          color #333333
        .adr
          color #999999
          font-size 26px
        .time
          margin-top 25px
          color #999999
          font-size 26px
        .img
          width 60px
          height 60px
          margin 68px 73px 0 0
          img 
            width 100%
</style>
