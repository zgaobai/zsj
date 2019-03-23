<template>
  <div class="main">
    <div class="bot">
      <!-- <input type="text" class="search" placeholder="搜索公交线路、车站、地点"> -->
      <a class="search">
        <figure class="search-icon">
          <img src="../../../static/imgs/searchicon.png" width="100%">
        </figure>
        <input class="from" type="text" value="" placeholder="搜索公交线路、车站" v-model="adr"/>
      </a>
        <!-- <p class="search_button">查询</p> -->
    </div>
    <div class="content">
      <div class="content_item" v-for="(item, index) in sea_list" :key="index" @click="active(index)">
        <figure>
          <img src="../../../static/imgs/mapicon03.png" width="100%">
        </figure>
        <p class="text">{{sea_list[index].busline_name || sea_list[index].station_name}}</p>
      </div>
    </div>
    <div class="record">
      <div class="re_title">历史记录</div>
      <div class="re_list" v-for="(item, index) in st_name" :key="index">
        <p class="text">{{item.busName}}</p>
      </div>
      <div class="re_list" v-for="item in st" :key="item.index">
        <p class="text">{{item.stationName}}</p>
      </div>
    </div>
    <div class="none" @click="clear">清空列表</div>
  </div>
</template>

<script>
export default {
  name: 'search' ,
  data () {
    return {
      adr: '',
      sea_list: [],
      sea_list_bus: [],
      sea_list_sta: [],
      list_info: [],
      sta_info: [],
      records: [],
      st: [],
      st_name: []
    };
  },
  watch: {
    adr () {
      this.axios.get('http://218.5.185.82:58080/api/public/getQueryInfo',{
        params:{
          busName: this.adr
        }
      }).then((res) => {
        let data = JSON.parse(res.data.data)
        this.sea_list_sta=JSON.parse(data).Content.Records[0].stations
        this.sea_list_bus=JSON.parse(data).Content.Records[0].buslines
        // console.log(this.sea_list_sta)
        // console.log(this.sea_list_bus)
        this.sea_list = Object.assign(this.sea_list_sta,this.sea_list_bus)
        // console.log(this.sea_list)
      }).catch(() => {
        // console.log(err)
      });
    }
  },
  methods: {
    active (index) {
      if (this.sea_list[index].busline_name) {
        this.$router.push({
          path: '/bus/index/home/details',
          query: {
            busName: this.sea_list[index].busline_name,
          }
        })
        //获取搜索的信息 
        this.axios.get('http://218.5.185.82:58080/api/public/getBusMessage',{
          params: {
            busName: this.sea_list[index].busline_name,
            direction: 1
          }   
        }).then((res) => {
          // console.log(res)
          let data = JSON.parse(res.data.data)
          // let det  = JSON.parse(data)
          this.list_info = JSON.parse(data[0]).Content.Records[0]
          // console.log( this.list_info)
          // console.log(this.list_info.busline_name)
          // 保存搜索车信息
          this.axios.post('http://218.5.185.82:58080/f/zs/historybus/saveHistory',{
            openId: this.$store.state.common.openId,
            type: 1 ,
            busName: this.list_info.busline_name,
            endStop: this.list_info.edStation,
            startStop: this.list_info.stStation
          }).then(() => {
            // console.log(res)
          })
        }).catch(() => {
        });
        // console.log(this.list_info.busline_name)
      }
      if (this.sea_list[index].station_name) {
        this.$router.push({
          path: '/bus/index/home/search/stations',
          query: {
            station_id: this.sea_list[index].station_id,
          }
        })
        //获取站点信息
        this.axios.get('http://218.5.185.82:58080/api/public/getStationInfo',{
          params: {
            station_id: this.sea_list[index].station_id
          }
        }).then((res) => {
          // console.log(this.sea_list[index].station_id)
          let data = JSON.parse(res.data.data)
          this.sta_info = JSON.parse(data).Content.Records[0].buslines
          // console.log( this.sta_info)
          //保存站点
          // console.log( this.sta_info[index] )
          // console.log(index)
          this.axios.post('http://218.5.185.82:58080/f/zs/historybus/saveHistory',{
            openId: this.$store.state.common.openId,
            type: 1 ,
            stationName: this.sta_info[0].stStation,
            busName: this.sta_info[0].busline_name,
            stationId: this.sea_list[index].station_id
          }).then(() => {
            // console.log(res)
          })
        }).catch(() => {
          // console.log(err)
        });    
      }
    },
    //删除所有历史记录
    clear () {
      this.axios.post('http://218.5.185.82:58080/f/zs/historybus/deleteAll',{
        openId: this.$store.state.common.openId,
        type: 1 ,
        delFlag: 1 //删除标志
      }).then(() => {
      
      }).catch(() => {

      })
      this.st = ''
      this.st_name = ''
    },
    //获取历史记录
     getHistory () {
      this.axios.get('http://218.5.185.82:58080/f/zs/historybus/getHistory',{
        params: {
          openId: this.$store.state.common.openId,
          type: 1
        }
      }).then((res) => {
        let data = JSON.parse(res.data.data)
        // console.log(data)
        this.st_name = data[0]
        this.st = data[1]
        let hash = {}; 
        this.st_name= this.st_name.reduce((preVal, curVal) => {
          hash[curVal.busName]  ? '' : hash[curVal.busName] = true && preVal.push(curVal); 
          return preVal 
        }, [])
        this.st = this.st.reduce((preVal, curVal) => {
          hash[curVal.stationName]  ? '' : hash[curVal.stationName] = true && preVal.push(curVal); 
          return preVal 
        }, [])
        this.records = Object.assign(this.st_name,this.st)
        // this.records= this.st_name.concat(this.st)
        // console.log(this.st)
        // console.log(this.st_name)
        // console.log(this.records)
      }).catch(() => {
      });
    },
  },
  mounted() {
    this.getHistory()
  },
}

</script>

<style lang='stylus' scoped>
.main
  min-height 100vh
  .bot
    width 100%
    background #ffffff
    padding-bottom 20px
    padding-right 50px
    .search
      display inline-block
      padding-right 50px
      position relative
      width 100%
      height 70px
      line-height 70px
      margin 13px 21px 0 25px
      border-radius 35px
      background #F1F0F5
      color #999999
      font-size 24px
      padding-left 55px
      .search-icon
        position absolute
        display inline-block
        width 30px
        height 70px
        top 7px
        left 27px 
      .from 
        margin-left 27px
        padding-right 50px
        outline  none 
        border none 
        width 100%
        height 100%
        background #F1F0F5
        color #999999
        font-size 24px
    .search_button
      display inline-block
      background #E3EFFF
      color #2B7FF3
      padding 11px 18px
      border-radius 24px
      font-size 28px
  .content
    background #ffffff
    .content_item
      width 100%
      height 100px
      line-height 100px
      padding-left 46px
      border-bottom 1px solid #F3F4F6
      figure
        display inline-block
        // vertical-align middle
        width 30px
        height 30px
      .text
        display inline-block
        font-size 32px
        color #333333
        margin-left 43px
  .record
    background #fff
    .re_title
      width 100%
      height 100px
      line-height 100px
      text-align center
      color #666666
      font-size 28px
    .re_list
      width 100%
      height 100px
      line-height 100px
      padding-left 46px
      color #666666
      border-bottom 1px solid #F3F4F6
  .none
    width 100%
    height 100px
    line-height 100px
    text-align center
    color #666666
    font-size 28px
</style>