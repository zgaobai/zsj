<template>
  <div class="main_box">
    <div class="sea_box">
      <div class="adr_box">
        <div class="adr_box_sea">
          <div class="from_box from_box_bor" @click="click(0)">
          <!-- <a class="from_box from_box_bor" href="https://apis.map.qq.com/tools/locpicker?search=1&type=0&backurl=http://192.168.30.5:8080/#/bus/index/toline&key=2SHBZ-DDUCO-N75WO-SHEAB-4FVPF-WLFIW&referer=zs_app"> -->
            <p class="dot dot_col_from"></p>
            <input class="from" type="text" name="fromAddressPlace" value="" placeholder="我的位置" v-model="start.from"/>
          </div>
          <div class="from_box" id="map" @click="click(1)">
            <p class="dot dot_col_to"></p>
            <input class="from" type="text" name="fromAddressPlace" value="" placeholder="去哪儿" v-model="end.to"/>
          </div>
        </div>
        <div class="change" @click="change">
          <figure><img src="../../../static/imgs/buschange.png" alt="" width="100%"></figure>
        </div>
      </div>
      <div class="search" @click="getBusTransfer">
        搜索
      </div>
    </div>
    <div class="cont-box" v-show="show">
      <div class="route-box" v-for="(item, index) in list" :key="index" @click="active(index)">
        <div class="item time">{{item.detail[0].buslines[0].busline_name}}</div>
        <div class="item item-text">
          <p class="from">始发站：<span>{{ item.detail[0].buslines[0].stStation }}</span></p>
          <p class="to">开往<span>{{item.detail[0].buslines[0].edStation}}</span></p>
        </div>
      </div>
      <div v-show="this.list.length === 0 " class="none">暂无信息</div>
    </div>
  </div>
</template>

<script>
import qq from 'qq'
const geolocation = new qq.maps.Geolocation("2SHBZ-DDUCO-N75WO-SHEAB-4FVPF-WLFIW", "zs_app")

export default {
  name: 'toline-ka',
  data () {
    return {
      query1: {},
      query2: {},
      start: {
        from: '',
        fromAddressLat: '',
        fromAddressLng: '',
      },
      end: {
        to: '',
        toAddressLat: '',
        toAddressLng: '',
      },
      list: [],
      show: false
    }
  },
  methods: {
    //点击调用选点组件
    click(n) {
      const backurl = encodeURIComponent(`http://zszj.i-zhangzhougang.com/#/bus/index/toline?n=${n}`)
      let url = `https://apis.map.qq.com/tools/locpicker?search=1&type=0&backurl=${backurl}&key=2SHBZ-DDUCO-N75WO-SHEAB-4FVPF-WLFIW&referer=zs_app`
      window.location.href = url
    },
    nowLocation () {
      // console.log(this.query1)
      // console.log(this.query2) 
      let query1 = this.query1
      let lat, lng
      if(this.$route.query.n === '1'){ 
        let query2 = this.query2
        let latng = query2.latng.split(',')
        // console.log(query2.latng)
        lat = latng[0]
        lng = latng[1]
        this.end.to = query2.addr
        this.end.toAddressLat = lat
        this.end.toAddressLng = lng
        // console.log(this.end.toAddressLat,this.end.toAddressLng)
      }
      return new Promise(resolve => { 
          if (query1.latng && query1.latng !== '') {
            //选择了地址
            let latng = query1.latng.split(',')
            lat = latng[0]
            lng = latng[1]
            this.start.from = query1.addr
            this.start.fromAddressLat = lat
            this.start.fromAddressLng = lng
            // console.log(this.start.fromAddressLat,this.start.fromAddressLng)
            resolve(new qq.maps.LatLng(lat, lng))
          } else {
            //用自身定位
            geolocation.getLocation( (res) => {
              this.start.from = res.addr
              this.start.fromAddressLat = res.lat
              this.start.fromAddressLng = res.lng
              resolve(new qq.maps.LatLng(res.lat, res.lng))
            })
          }
      })
    },
    //存取地址
    getQuery () {
      if (this.$route.query.n === '0') {
        sessionStorage.setItem('query1', JSON.stringify(this.$route.query))
        this.query1 = this.$route.query
      } else {
        sessionStorage.setItem('query2', JSON.stringify(this.$route.query))
        this.query2 = this.$route.query
      }
      try {
        this.query1 = JSON.parse(sessionStorage.getItem('query1'))
        this.query2 = JSON.parse(sessionStorage.getItem('query2'))
      } catch (err) {
        console.log(err)
      }
    },
    //改变方向,互换位置
    change () {
      // console.log(this.start, this.end)
      var {from, fromAddressLng, fromAddressLat} = this.start
      var {to, toAddressLng, toAddressLat} = this.end
      this.start.from = to
      this.start.fromAddressLon = toAddressLng
      this.start.fromAddressLat = toAddressLat
      this.end.to = from
      this.end.toAddressLon = fromAddressLng
      this.end.toAddressLat = fromAddressLat      
    },
    //获取换乘信息
    getBusTransfer () {
      this.show = true
      let stStation_lat = this.start.fromAddressLat*1000000
      let stStation_lng = this.start.fromAddressLat*1000000
      let edStation_lat = this.end.toAddressLat*1000000
      let edStation_lng = this.end.toAddressLng*1000000
      this.axios.get('http://218.5.185.82:58080/api/public/getBusTransfer',{
        params: {
        //  stStation_lat: 24410879,
        //  stStation_lng: 118048879,
        //  edStation_lat: 24406700,
        //  edStation_lng: 118046650
          stStation_lat,
          stStation_lng,
          edStation_lat,
          edStation_lng
        }
      }).then((res) => {
        let data = JSON.parse(res.data.data)
        this.list = JSON.parse(data).Content.Records
        let hash = {}; 
        this.list = this.list.reduce((preVal, curVal) => {
          hash[curVal.detail[0].buslines[0].busline_name]  ? '' : hash[curVal.detail[0].buslines[0].busline_name] = true && preVal.push(curVal); 
          return preVal 
        }, [])
      }).catch(() => {
      });
    },
    //点击进入路线详情
    active(index) {
      this.$router.push({
        path: '/bus/index/home/details',
        query: {
          busName: this.list[index].detail[0].buslines[0].busline_name,
          direction: 1
        }
      })
    }
  },
  mounted() {
    this.getQuery()
    this.nowLocation()
  },
}
</script>

<style lang="stylus" scope>
.main_box
  background #F3F4F6
  min-height 100vh
  padding 25px
  .sea_box
    height 377px
    background #ffffff
    .adr_box
      position relative
      margin-left 46px
      .adr_box_sea
        width 80%
        .from_box
          display block
          height 121px
          line-height 121px
          .dot
            display inline-block
            width 12px
            height 12px
            border-radius 50%
          .dot_col_from
            background #49C499
          .dot_col_to
            background #2B7FF3
          .from
            margin-left 27px
            outline  none 
            border none 
            height 100%
            width 90%
        .from_box_bor
          border-bottom 1px solid #F3F4F6
      .change
        position absolute
        top 96px
        right 0px
        width 20%
        figure
          width 51px
          height 51px
          margin-left 30px
          transform: rotate(90deg)
          img 
            transform translate(90deg)
    .search
      background #2B7FF3
      border-radius 10px
      height 88px
      margin 0 48px
      line-height 88px
      text-align center
      color #ffffff
  .cont-box
    margin-top 20px
    .route-box
      height 200px
      display flex
      align-items:center
      justify-content:center
      background #ffffff
      margin-bottom 20px
      .item
        flex auto 
        text-align center
        figure
          width 72px
          height 72px
          margin auto
          img 
            width 100%
      .time
        width 15%
        color #333333
        font-size 40px
      .item-text
        width 50%
        text-align left 
        .name
          color #333333
          font-size 40px
        .from
          color #333333
          font-size 28px
          margin-top -23px
          font-weight 600
        .to
          color #999999
          font-size 28px
          margin-top 30px
      .sign
        width 20%
    .none
      text-align center
</style>