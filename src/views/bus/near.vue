<template>
  <div class="main_b">
    <div class="content_box">
      <div class="cont_box" v-for="(item, index) in showList" :key="index" @click="click_(index)">
        <div class="item">
          <div class="item_box">
            <figure>
              <img src="../../../static/imgs/map2.png" alt width="100%" height="100%">
            </figure>
            <p class="name">{{item.station_name}}</p>
          </div>
        </div>
        <div class="item">
          <div class="far">
            <span>{{item.distance}}</span>m
            <div class="radio">
              <svg class="icon return-icon" aria-hidden="true">
                <use xlink:href="#icon-fanhui"></use>
              </svg>
            </div>
          </div>
        </div>  
      </div>
      <div v-show="this.showList.length === 0" class="none">附近无站点</div>
      <!-- <div class="map" @click="map">
        切换地图模式
      </div> -->
    </div>
  </div>
</template>

<script>
import qq from "qq";
const geolocation = new qq.maps.Geolocation("2SHBZ-DDUCO-N75WO-SHEAB-4FVPF-WLFIW", "zs-app")

export default {
  name: "near",
  data() {
    return {
      isShow:false,
      lng: null, //经度
      lat: null, //纬度
      // lng: 118048016,
      // lat: 24410316,
      list: [],  //站点信息
      info: [],  //距离
      info_list: [],

    };
  },
  computed: {
    showList () {
      return this.list.map((item, index) => {
        // 深拷贝
        let listItem = JSON.stringify(item)
        let showListItem = JSON.parse(listItem)
        showListItem.distance = this.info[index] ? this.info[index].distance : 0
        return showListItem
      })
      // let arr = []
      // this.list.map((item, index) => {
      //   console.log(item)
      //   item.distance = this.info[index].distance
      //   arr.push(item)
      //   console.log(item.distance)
      // })
      // return arr
    }
  },
  methods: {
    getNearStations () {
      this.axios.get('http://218.5.185.82:58080/api/public/getNearStations',{
        params: {
          station_lat: this.lat, //纬度
          station_lng: this.lng,  //经度
          // station_lat: 24410879, //纬度
          // station_lng: 118048879,  //经度
          station_radius: 150
        }
      }).then((res) => {
        let data = JSON.parse(res.data.data)
        // let det  = JSON.parse(data)
        // this.list = JSON.parse(data).Content.Records
        this.list = JSON.parse(data).Content.Records
        // console.log( this.list = JSON.parse(data).Content.Records)
        this.getDistance()
        // this.isShow = false;
      }).catch(() => {
        // console.log(err)
      });
    },
    //获取自身定位
    nowLocation () {
      return new Promise(resolve => {
        // geolocation.getLocation( (res) => {
        //   this.lng = Math.round(res.lng*1000000)
        //   this.lat = Math.round(res.lat*1000000)
        //   // this.isShow = true;
        //   console.log(this.lng, this.lat)
        //   resolve(new qq.maps.LatLng(res.lat, res.lng))
        // })
        geolocation.getLocation( (res) => {
          this.lat = Math.round(res.lat*1000000)
          this.lng = Math.round(res.lng*1000000)
          // console.log(this.lat,this.lng)
          this.getNearStations()
          this.getDistance()
          resolve(new qq.maps.LatLng(res.lat, res.lng))
        })
      })
    },
    //距离
    getDistance () {
      var to = '';
      // for (var item of this.list){
      //   console.log(item)
      
      // } 
      this.list.forEach(item => {
        to = to + (item.lat / 1000000) + ',' + (item.lng / 1000000) + ';'
      })
      to = to.slice(0, to.length - 1)
      // const from = '24.410316' + ',' + '118.048016'
      const from = this.lat / 1000000 + ',' + this.lng / 1000000
      // console.log(from)
      // https://apis.map.qq.com/ws/distance/v1
      this.axios.get('http://zsht.bloomworks.cn/api/public/getDistance', {
        params: {
          // mode: 'driving',
          from,
          to,
          key: '2SHBZ-DDUCO-N75WO-SHEAB-4FVPF-WLFIW'
        }
      }).then((res)=>{
        let data = JSON.parse(res.data.data)
        // console.log((JSON.parse(data).result).elements)
        this.info = (JSON.parse(data).result).elements
        // console.log(this.list)
        // console.log(this.info)
      })
    },
    //点击进入详情
    click_(index) {
      this.$router.push({
          path: '/bus/index/near/near_del',
          query: {
            station_id: this.list[index].station_id,
          }
        })
    },
    //切换地图模式
    map (index) {
      let url = `https://apis.map.qq.com/tools/routeplan/eword=${this.list[index].station_name}&epointx=${this.list[index].lat}&epointy=${this.list[index].lng}?referer=zs_app&key=2SHBZ-DDUCO-N75WO-SHEAB-4FVPF-WLFIW`
      window.location.href = url
    },
  },
  mounted() {
    this.nowLocation()
    // this.getNearStations ()
  }
}
</script>

<style lang="stylus" scope>
.main_b {
  min-height: 100vh;
  background: #F3F4F6;
  .content_box {
    .none{
      text-align: center;
      height: 136px;
      line-height: 136px;
      background: #ffffff;
      border-bottom 1px solid #f3f4f6;
    }
    .cont_box {
      display: flex;
      height: 136px;
      line-height: 136px;
      // padding: 0 42px;
      background: #ffffff;
      border-bottom 1px solid #f3f4f6;
      .item {
        flex: 1;
        background:#ffffff;
        .item_box {
          background: #ffffff;
          padding: 0 42px;
          figure {
            display: inline-block;
            width: 30px;
            height: 30px;
          }
          .name {
            display: inline-block;
            margin-left: 16px;
            font-size: 34px;
            color: #333333;
            font-weight: 500;
          }
        }
        .all {
          font-size: 28px;
          color: #999999;
          margin-top: 24px;
        }
        .far {
          text-align: right;
          color: #999999;
          background: #ffffff;
          padding: 0 42px;
          .radio {
            // position: absolute;
            display: inline-block;
            right: 0;
            top: 5px;
            width: 24px;
            .return-icon {
              color: #999999;
              transform: rotateZ(-180deg);
            }
          }
        }
      }
    } 
    .map{
      position: fixed;
      height: 98px;
      width:80%;
      margin: 0 10%;
      line-height: 98px;
      text-align: center;
      background-image:  url('../../../static/imgs/nearbtn.png');
      background-repeat: no-repeat;
      background-size: 100% 200px;
      bottom :100px;
      box-sizing: border-box;
    }
  }
}
</style>