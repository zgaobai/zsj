<template>
  <div class="main">
    <div class="del_box">
      <div class="del" v-for="(item, index) in list" :key="index" @click="active(index)">
        <div class="info">
          <div class="info_name item">{{item.busline_name}}</div>
          <div class="info_to item">开往<span>{{item.edStation}}</span></div>
          <!-- <div class="info_next item">
            <figure>
              <img src="../../../static/imgs/map2.png" alt width="100%" height="100%">
            </figure>
            <p class="info_next_to">下一站：<span>管委会</span></p>
          </div> -->
        </div>
      </div>
      <div class='null' v-if="this.list === null ">暂无数据</div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'near_del' ,
  data () {
    return {
      list: []
    };
  },
  methods: {
    getStationInfo () {
      this.axios.get('http://218.5.185.82:58080/api/public/getStationInfo',{
        params: {
          station_id: this.$route.query.station_id
        }
      }).then((res) => {
        let data = JSON.parse(res.data.data)
        // let det  = JSON.parse(data)
        this.list = JSON.parse(data).Content.Records[0].buslines
        // console.log( JSON.parse(data).Content.Records[0].buslines)
      }).catch(() => {
        // console.log(err)
      });
    },
    active(index) {
      this.$router.push({
        path: '/bus/index/home/details',
        query: {
          busName: this.list[index].busline_name,
        }
      })
    }
  },
  mounted() {
    this.getStationInfo()
  },
}

</script>
<style lang='stylus' scoped>
.main
  background #F3F4F6
  min-height 100vh
  .del_box
    padding 20px 25px
    .del
      height 200px
      background-image:  url('../../../static/imgs/neardel.png')
      background-repeat no-repeat
      background-size 100% 200px
      margin-bottom 20px
      .info
        display flex
        flex-direction column
        justify-content center
        margin-left 40px
        .item
          flex auto 
        .info_name
          margin 25px 0
          color #333333
          font-size 40px
        .info_to
          color #666666
          font-size 28px
        .info_next
          margin-top 20px
          color #666666
          font-size 28px
          figure
            display inline-block
            width 30px
            height 30px
            vertical-align bottom 
          .info_next_to
            display inline-block
            margin-left 10px
    .null
      text-align center
      margin-top 200px
</style>