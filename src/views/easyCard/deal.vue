<template>
  <div class="main">
    <div class="header">
      <div class="header-title">交易卡号</div>
      <div class="card">{{this.$route.query.number | hideMiddle}}</div>
    </div>
    <div class="content" ref="wrapper" :style="{ height: (wrapperHeight) + 'px' }">
      <mt-loadmore @top-status-change="handleTopChange"  @bottom-status-change="handleBottomChange" :bottom-method="loadBottom" :top-method="loadTop"  :auto-fill='false' :bottom-all-loaded="allLoaded" bottomPullText="up" ref="loadmore">
        <div class="box" v-for="(item, index) in dataList" :key="index">
          <div class="box-item">
            <p class="adr">{{item.txnmchntName}}</p>
            <p class="time">{{item.centdate}}</p>
          </div>
          <div class="box-item money">
            消费金额：{{item.orgamt}}
          </div>
        </div>
      </mt-loadmore>
    </div>
    <div v-show=" dataList === undefined" class="nodata">
      无消费记录或卡号输入错误
    </div>
  </div>
</template>

<script>
// import { formatDate } from '@/tool/Changedate'
export default {
  name: 'deal',
  data () {
    return {
      dataList: [],
      size: 0,
      allLoaded: false,
      bottomStatus: '',
      topStatus: '',
      isAutoFill: false,
      wrapperHeight: 0,
    }
  },
  methods: {
    //请求交易记录数据
    getInfo () {
      this.size = 1
      // number=   3105060809000005871
      //'http://10.161.4.18:56061/queryXF/query?'
      let url = 'http://218.5.185.82:56061/queryXF/query?'
      this.axios.get(url,{
        params: {
          size: this.size,
          number: this.$route.query.number
        }
      }).then((res) => {
        this.dataList = res.data.success
      }).catch(() => {   
        this.$messagebox.alert('无消费记录或卡号输入错误')
      });
    },
    //下拉刷新
    loadTop (id) {
      this.getInfo();
      this.$refs.loadmore.onTopLoaded(id)
      // this.loadFrist()
    },
    handleTopChange(status) {
      this.topStatus = status;
    },
    handleBottomChange(status) {
      this.bottomStatus = status;
    },
    //上拉加载
    loadBottom () {
      this.loadMore();
    },
    //加载更多
    
    loadMore() {
      let url = 'http://218.5.185.82:56061/queryXF/query?'
      this.axios.get(url,{
          params: {
            size : this.size = this.size + 1,
            number: this.$route.query.number
          }
        })
        .then(res => {
          // concat数组的追加
          this.dataList = this.dataList.concat(res.data.success);
          // if (this.size > 100) {
          //   this.allLoaded = true; // 若数据已全部获取完毕
          // }
          this.$refs.loadmore.onBottomLoaded();
        })
        .catch( () => {
          this.$messagebox.alert("网络错误，不能访问");
        });
    },
    //下拉刷新
    // loadFrist() {
    //   this.size = 1
    //   let url = 'http://sct.bloomworks.cn/queryXF/query?'
    //   this.axios.get(url,{
    //     params:{
    //       size: this.size,
    //       number: this.$route.query.number
    //     }
    //   })
    //     .then(res => {
    //       this.allLoaded = false; // 可以进行上拉
    //       this.dataList= res.data.success;
    //       this.$refs.loadmore.onTopLoaded();
    //     })
    //     .catch(error => {
    //       console.log(error);
    //       alert("网络错误，不能访问");
    //     });
    // },
},
    // 卡号中间的隐藏，用*号显示
  filters: {
    hideMiddle(val) {
      return `${val.substring(0,6)}****${val.substring(val.length-5)}`
    }
  },
  mounted () {
    this.getInfo()
    this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
  },
}
</script>

<style lang="stylus" scoped>
.main
  min-height 100vh
  background #ffffff
  .header
    background-image:  url('../../../static/imgs/dealbj.png')
    background-repeat no-repeat
    background-size 100% 274px
    height 274px
    padding-left 30px
    .header-title
      color #ffffff
      font-size 26px
      padding 82px 0 48px
    .card
      color #ffffff
      font-size 48px
  .content
    overflow: scroll
    background #ffffff
    .box
      height 161px
      display flex
      padding 0 30px
      justify-items center
      border-bottom 1px solid #ECECEC
      .box-item
        flex auto
        .adr
          margin 36px 0
          font-size 32px
          color #333333
        .time
          color #999999
          font-size 26px
      .money
        text-align right
        margin-top 64px
        color #333333
        font-size 34px
  .nodata
    width 100%
    height 300px
    line-height 300px
    text-align center
    position:absolute;
    left:0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto; 
</style>
