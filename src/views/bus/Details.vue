<template>
  <div class="main">
    <div class="header">
      <div class="route-box">
        <div class="item item-text">
          <p class="name">{{details.busline_name}}</p>
          <div class="to">
            {{details.stStation}}
            <figure><img src="../../../static/imgs/thisbus.png" alt=""></figure>
            {{details.edStation}}
          </div>
          <p class="wait">
            <span class="FL-time">首末班:<span>{{ details.stime }}</span>-<span>{{ details.etime }}</span></span>
            <span class="money">基本票价:<span>{{ details.price_base }}</span><span>元</span></span>
            <span class="money">全程票价:<span>{{ details.price_all }}</span><span>元</span></span>
          </p>
        </div>
        <div class="item item-img">
          <figure class="col" @click="col">
            <img src="../../../static/imgs/col.png" alt="" v-show="col_active" width="100%" >
            <img src="../../../static/imgs/col_active.png" alt="" v-show="!col_active" width="100%">
          </figure>
          <figure class="cha" @click="change_active"><img src="../../../static/imgs/buschange.png" alt=""></figure>
        </div>
      </div>
      <p class="line"></p>
      <div class="near">车辆信息<span class="total">共 {{showList.length}} 辆车</span>(到下一站大约3~5分钟)</div>
      <div class="near">注：可左右滑动查看车辆</div>
      <div class="near">您到站点时间约为：</div>
      <div class="nearList">
        <swiper :options="swiperOption">
          <swiper-slide class="port" v-for="(item, index) of showList" :key="index">
            <div class="near-time">
              {{item.time}}分
            </div>
            <p class="distance">{{item.name}}</p>
          </swiper-slide>
        </swiper>
        <!-- <mt-swipe :show-indicators="false" :auto="0" class="nearList-item">
          <mt-swipe-item v-for="(item, index) in showList" :key='index' >
            <p class="near-time">{{item.time}}分</p>
            <p class="distance">{{item.name}}</p>
          </mt-swipe-item>
        </mt-swipe> -->
      </div>
    </div>
    <div class="busList">
      <!-- <div class="item-box" v-for="(item, index) in details.stations" :key="index">
        <figure>
          <img src="../../../static/imgs/lu.png" alt="" width="100%" height="100%">
        </figure>
        <div class="station">
          {{item.station_index}}.{{item.station_name}}
        </div> 
        <p :class="{'bus': ind === item.station_index}"></p>
         <p class="bus"><img src="../../../static/imgs/bus.png" alt="" width="100%" height="100%"></p>
        <p class="sign"><img src="../../../static/imgs/map2.png" alt="" width="100%" height="100%"></p>
      </div> -->
        <realtime 
          v-for="(item, index) in details.stations" 
          :key="index"
          :real="real"
          :details="item"
          :lat ="lat"
          :lng ="lng"
        />
    </div>
    <!-- <div class="type">地图模式</div> -->
  </div>
</template>

<script>
import qq from 'qq'
const geolocation = new qq.maps.Geolocation("2SHBZ-DDUCO-N75WO-SHEAB-4FVPF-WLFIW", "zs_app")

export default {
  name: 'Details',
  data () {
    return {
      details:[],
      list: [],
      real: [],
      newReal: [],
      // lat: 24410204,
      // lng: 118046744,
      lat: '',
      lng: '',
      col_active: true, //默认没有收藏  为灰色状态
      active: true,    // 判断是否点击了切换   ture: 始发到终点   false: 终点到始发
      direction: '',    // 始发到终点为  1   终点到始发为 2
      swiperOption: {
        autoplay: false,
        // loop: true,
        slidesPerView : 2,
        slidesPerColumn: 2,
      }
    }
  },
   components: {
    realtime: () => import('../../components/bus/realtime')
  },
  computed: {
    showList () {
      return this.real.filter((item) => {
        if (typeof item.curStation === 'number') {
          var radLat1 = (this.lat/ 1000000) *Math.PI / 180.0;
          var radLat2 = (item.latitude / 1000000)*Math.PI / 180.0;
          var a = radLat1 - radLat2;
          var  b = (this.lng/ 1000000) *Math.PI / 180.0 - (item.longitude/ 1000000) *Math.PI / 180.0;
          var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a/2),2) +
          Math.cos(radLat1)*Math.cos(radLat2)*Math.pow(Math.sin(b/2),2)));
          s = s *6378.137 ;// EARTH_RADIUS;
          s = Math.round(s * 10000) / 10000;
          var time = Math.round( s / 6 *60)
          item.time = time
          this.details.stations.forEach((stationItem) => {
            if (stationItem.station_index === item.curStation) {
              // let i = stationItem.station_index-1
              item.name = stationItem.station_name
              // item.lat = lat
              // item.lng = stationItem[index].lng
            }
          })
          return true
        } else {
          return false
        }
      })
    }
  },
  methods: {
    getDetails () {
      this.axios.get('http://218.5.185.82:58080/api/public/getBusMessage',{
        params: {
          busName: this.$route.query.busName,
          direction: this.$route.query.direction
        }
      }).then((res) => {
        let data = JSON.parse(res.data.data)
        this.details = JSON.parse(data[0]).Content.Records[0]
        // console.log( JSON.parse(data[0]).Content.Records[0])
        this.real = JSON.parse(data[1]).Content.Records
        this.getHistory()
      }).catch(() => {
      });
    },
    //点击收藏或者取消收藏  
    col () {
      // this.col_active = !this.col_active
      if(this.col_active === false){ //删除收藏
        this.col_active = true
        this.deleteHistory()
        // this.getHistory()
      }else( //添加收藏
        this.col_active = false,
        this.saveHistory(),
        this.getHistory()
      )
    },
    //删除收藏
    deleteHistory () {
      for (var i in this.list) {  
          // console.log(i,this.list[i].id);  
        if(this.list[i].busName === this.details.busline_name && this.list[i].startStop === this.details.stStation && this.list[i].endStop === this.details.edStation){
        this.axios.post('http://218.5.185.82:58080/f/zs/historybus/deleteHistory',{
          id: this.list[i].id
        }).then(() => {
          this.$toast('收藏取消')
        })
      }}
    },
    //添加收藏
    saveHistory () {
      let direction = this.$route.query.direction
      this.axios.post('http://218.5.185.82:58080/f/zs/historybus/saveHistory',{
        openId: this.$store.state.common.openId,
        type: 2 ,
        endStop: this.details.edStation,
        startStop: this.details.stStation,
        busName: this.details.busline_name,
        direction: direction,
      }).then(() => {
        this.$toast('已添加收藏')
      })
    },
    //获取历史 收藏
    getHistory () {
      this.axios.get('http://218.5.185.82:58080/f/zs/historybus/getHistory',{
        params: {
          openId: this.$store.state.common.openId,
          type: 2
        }
      }).then((res) => {
        this.list = JSON.parse(res.data.data)
        // console.log(this)
        // console.log(this.details.busline_name)
        // console.log(this.list)
        for (var i in this.list) {  
          // console.log(i,this.list[i]); 
          if(this.list[i].busName === this.details.busline_name && this.list[i].startStop === this.details.stStation && this.list[i].endStop === this.details.edStation){
              this.col_active = false
              return
          }else{
              this.col_active = true
          }
        }  
      }).catch(() => {
      });
    },
    //点击切换反方向显示
    change_active () {
      // console.log(this.$route.query.direction)
      if(this.$route.query.direction === 1){
          this.$route.query.direction = 2
      }else{
          this.$route.query.direction = 1
      }
      this.getDetails()
    },
     //获取自身定位
    nowLocation () {
      geolocation.getLocation( (res) => {
        this.lat = Math.round(res.lat*1000000)
        this.lng = Math.round(res.lng*1000000)
        // console.log(this.lat,this.lng)
      })
    },
  },
  mounted() {
    this.nowLocation()
    this.getDetails()
  },
}
</script>

<style lang="stylus" scoped>
.main
  background #F3F4F6
  min-height 100vh
  padding 25px 24px 0 24px
  .header
    // height 417px
    background #ffffff
    .route-box
      height 200px
      display flex
      align-items center
      align-content center
      background #ffffff
      margin-bottom 20px
      .item
        flex auto 
        text-align left 
        figure
          width 72px
          height 72px
          margin auto
          img 
            width 100%
      .item-text
        text-align left
        margin-left 36px
        flex 80%
        .name
          color #000000
          font-size 40px
          margin-top 20px
        .to
          color #333333
          font-size 32px
          margin 20px 0 32px 0
          figure
            display inline-block
            width 40px
            height 17px
            margin 0 10px
            img 
              width 100%
        .wait
          color #999999
          font-size 24px
          .money
            margin-left 20px
      .item-img
        flex 20%
        .col
          width 44px
          height 44px
          margin-top -30px
          0px
        .col_active
          background #FCC866
        .cha
          margin-top 10px
    .line
      border 2px dashed #DCDCDC
      margin 0 36px
    .near
      color #999999
      font-size 24px
      margin 35px 0 5px 36px
      .total
        color #000
        font-size 28px
        padding 0 15px
    .nearList
      // display flex
      margin-left 20px
      // align-items:center
      // justify-content:flex-start
      // flex-direction: row
      // flex-wrap: wrap;
      // .nearList-item
      //   height 100px
      //   flex 30%
      //   margin-bottom 10px
      .port 
        width 50%
        display inline-block
        margin-bottom 20px
        .near-time
          color #2B7FF3
          font-size 36px
          text-align center
          margin-bottom 22px
        .distance
          color #2B7FF3
          font-size 24px
          text-align center
  .busList
    position relative
    background #ffffff
    margin-top 15px
    .item-box
      position relative
      height 150px
      figure
        display inline-block
        vertical-align middle
        width 55px
        height 150px
        margin-left 43px
      .station
        display inline-block
        margin-left 40px
        font-size 28px
        color #333
      .bus
        position absolute
        left 50px
        top 0px
        width 43px
        height 41px
        // background: url(../../../static/imgs/bus.png) no-repeat center;
        // background-size: 100%;
        z-index 2
      .sign
        position absolute
        left 50px
        top 60px
        width 43px
        height 41px
        z-index 3
  .type
    position fixed
    right 56px
    top 800px
    bottom 0
    margin auto 0
    width 170px
    height 56px
    text-align center
    line-height 56px
    font-size 26px
    color #ffffff
    border-radius 28px
    background:linear-gradient(66deg,rgba(43,127,243,1),rgba(110,170,253,1))
</style>
