<template>
  <div>
    <div class="item-box">
      <figure>
        <img src="../../../static/imgs/lu.png" alt="" width="100%" height="100%">
      </figure>
      <div class="station">
        {{details.station_index}}.{{details.station_name}}
      </div> 
      <p class="bus" v-if="show === 0 "><img src="../../../static/imgs/bus.png" alt="" width="100%" height="100%"></p>
      <p class="bus2" v-if="show === 1 "><img src="../../../static/imgs/bus.png" alt="" width="100%" height="100%"></p>
      <!-- <p class="sign" v-show="self === 1"><img src="../../../static/imgs/map2.png" alt="" width="100%" height="100%"></p> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'realtime',
  props: {
    real: {
      type: Array,
      required: true
    },
    details: {
      type: Object,
      required: true
    },
  },
  data () {
    return {
    };
  },
  computed: {
    show () {
      // @return 0: 上图标. 1: 下图标. 2: 不显示
      let index = this.details.station_index
      let result = this.real.find(item => {
        return item.curStation && item.curStation === index
      })
      if (result) {
        return result.inOutFlag
      } else {
        return 2
      }
    },
    // self () {
    //   let lat = this.details.lat
    //   let lng = this.details.lng
    //   this.lat 
    //   if(this.lat === lat && this.lng === lng){
    //     return 1
    //   }
    // }
  },
}

</script>
<style lang='stylus' scoped>
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
  .bus2
    position absolute
    left 50px
    top 130px
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
</style>