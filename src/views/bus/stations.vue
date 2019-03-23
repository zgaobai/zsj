<template>
  <div class="main">
    <div class="route-box" v-for="(item, index) in list" :key="index">
      <div class="item time" @click="detail(index)">{{item.busline_name}}</div>
      <div class="item item-text" @click="detail(index)">
        <p class="from">始发站：<span>{{ item.stStation }}</span></p>
        <p class="to">开往<span>{{item.edStation}}</span></p>
      </div>
      <div class="item sign" @click="active_change(index)">
        <figure><img src="../../../static/imgs/buschange.png" alt=""></figure>
      </div>
    </div>
    <div class="none" v-show="this.list.length === 0">暂无信息</div>
  </div>
</template>

<script>
export default {
  name: 'stations',
  data () {
    return {
      list: [],
      num:0,
      active: true,  // 判断是否点击了切换   ture: 始发到终点   false: 终点到始发
      direction: ''  // 始发到终点为  1   终点到始发为 2
    }
  },
  methods: {
    active_change (index) {
      this.num = index
      this.active = !this.active
      // console.log(this.active)
      // console.log(this.list[index].busline_name)
      let stStation = this.list[index].stStation 
      this.list[index].stStation = this.list[index].edStation
      this.list[index].edStation = stStation
    },
    detail (index) {
      this.num = index
      let list = this.list
      if (this.active === false) {
        this.direction = 2
      }else{
        this.direction = 1
      }
      // console.log(this.active)
      // console.log(list[index].busline_name)
      this.$router.push({
        path: '/bus/index/home/details',
        query: {
          busName: list[index].busline_name,
          direction: this.direction   // 始发到终点为  1   终点到始发为 2
        }
      })
    },
    //获取站点信息
    getStationInfo () {
      this.axios.get('http://218.5.185.82:58080/api/public/getStationInfo',{
        params: {
          station_id: this.$route.query.station_id
        }
      }).then((res) => {
        let data = JSON.parse(res.data.data)
        // let det  = JSON.parse(data)
        this.list = JSON.parse(data).Content.Records[0].buslines
        // console.log( JSON.parse(data).Content.Records[0])
      }).catch(() => {
        // console.log(err)
      });
    }
  },
  mounted() {
    this.getStationInfo()
  },
}
</script>

<style lang="stylus" scoped>
.main
  background #f3f4f6
  min-height 100vh
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
      width 30%
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
    padding-top 60px
</style>
