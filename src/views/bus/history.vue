<template>
  <div class="main">
    <div class="cont">
      <div class="route-box" v-for="(item, index) in list" :key="index"  @click="detail(index)">
        <div class="item time">{{item.busName}}</div>
        <div class="item item-text">
          <p class="from">始发站：<span>{{ item.startStop }}</span></p>
          <p class="to">开往<span>{{item.endStop}}</span></p>
        </div>
      </div>
      <div class="stations" v-for="(it, value) in stations" :key="'it'+value" @click="click_(value)">
        <div class="item_box">
          <p class="name">{{it.stationName}}</p>
        </div>
        <p class="all">{{it.busName}}</p>
      </div>
      <div v-show="this.list.length === 0 && this.stations.length === 0 " class="none">暂无历史记录</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'history',
  data () {
    return {
      list: [],
      stations:[],
      data: []
    }
  },
  // computed: {
  //   listFilter() {
  //     return this.list.forEach((item) => {
  //       console.log(item)
       
  //     })
  //   }
  // },
  methods: {
    getHistory () {
      this.axios.get('http://218.5.185.82:58080/f/zs/historybus/getHistory',{
        params: {
          openId: this.$store.state.common.openId,
          type: 1
        }
      }).then((res) => {
        let data = JSON.parse(res.data.data)
        // console.log(data)
        this.list = data[0]
        this.stations = data[1]
        let hash = {}; 
        this.list = this.list.reduce((preVal, curVal) => {
          hash[curVal.busName]  ? '' : hash[curVal.busName] = true && preVal.push(curVal); 
          return preVal 
        }, [])
         this.stations = this.stations.reduce((preVal, curVal) => {
          hash[curVal.stationName]  ? '' : hash[curVal.stationName] = true && preVal.push(curVal); 
          return preVal 
        }, [])
        // console.log(this.list = data[0])
        // console.log(this.stations = data[1])
      }).catch(() => {
      });
    },
     //获取站点信息
    // getStationInfo () {
    //   this.axios.get('http://zsht.bloomworks.cn/api/public/getStationInfo',{
    //     params: {
    //       station_id: this.stations.stationId
    //     }
    //   }).then((res) => {
    //     let data = JSON.parse(res.data.data)
    //     // let det  = JSON.parse(data)
    //     // this.data = JSON.parse(data).Content.Records[0].buslines
    //     // console.log( JSON.parse(data))
    //   }).catch(() => {
    //     // console.log(err)
    //   });
    // },
     //点击进入详情
    click_(value) {
      this.$router.push({
          path: '/bus/index/near/near_del',
          query: {
            station_id: this.stations[value].stationId,
          }
        })
    },
    detail(index){
      this.$router.push({
        path: '/bus/index/home/details',
        query: {
          busName: this.list[index].busName,
          direction: 1
        }
      })
    }
  },
  mounted() {
    this.getHistory()
    // this.getStationInfo()
  },
}
</script>

<style lang="stylus" scoped>
.main
  background #f3f4f6
  .cont
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
  .sta_info
    padding-bottom 20px
    text-align center
  .stations
    background #ffffff
    height 200px
    margin-bottom 20px
    .item_box
      padding-top 40px
      margin-left 50px
      .name
        display inline-block
        font-size 28px
        color #333333
        font-weight 600
    .all
      margin-left 50px
      font-size 28px
      color #999999
      margin-top 30px
  .stations:last-child
    margin-bottom 100px
  .none
    text-align center
    font-size 30px
    margin-top 20px
</style>
