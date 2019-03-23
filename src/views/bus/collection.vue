<template>
  <div class="main">
    <div class="route-box" v-for="(item, index) in list" :key="index">
      <div class="item time" @click="detail(index)">{{item.busName}}</div>
      <div class="item item-text" @click="detail(index)">
        <p class="from">始发站：<span>{{ item.startStop }}</span></p>
        <p class="to">开往<span>{{item.endStop}}</span></p>
      </div>
    </div>
    <div v-show='this.list.length ===0 ' class="none">暂无收藏</div>
  </div>
</template>

<script>
export default {
  name: 'collection',
  data () {
    return {
      list: [],
    }
  },
  methods: {
    getHistory () {
      this.axios.get('http://218.5.185.82:58080/f/zs/historybus/getHistory',{
        params: {
          openId: this.$store.state.common.openId,
          type: 2
        }
      }).then((res) => {
        this.list = JSON.parse(res.data.data)
        // console.log(JSON.parse(res.data.data))
        let hash = {}; 
        this.list= this.list.reduce((preVal, curVal) => {
          hash[curVal.busName]  ? '' : hash[curVal.busName] = true && preVal.push(curVal); 
          return preVal 
        }, [])
      }).catch(() => {
      });
    },
    detail(index){
      this.$router.push({
        path: '/bus/index/home/details',
        query: {
          busName: this.list[index].busName,
          direction: this.list[index].direction
        }
      })
    }
  },
  mounted () {
    this.getHistory()
  }
}
</script>

<style lang="stylus" scoped>
.main
  background #f3f4f6
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
  .route-box:last-child
    margin-bottom 100px
  .none
    margin-top 20px
    text-align center
    font-size 30px
</style>
