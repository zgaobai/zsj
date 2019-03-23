<template>
  <div class="main_law">
    <div class="info">
      <div class="title">
        <h4>最新讯息</h4>
        <p class="line2"></p>
        <p class="more" @click="more">更多 ></p>
      </div>
      <div class="content">
        <image-text v-for="(item, index) of newList" :list='item' :key="index" size="big" v-show='index<3'></image-text>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'law' ,
  components: {
    ImageText: () => import('../../components/education/imageText')
  },
  data () {
    return {
      newList: [
        // {
        //   funtionUrl: '/Education/index/esDetails/artDet',
        //   imageUrl: require('../../../static/imgs/ees.png'),
        //   title: '[教育新闻]开发区领导现场办公 力推进教育工程项目建设',
        //   cont: '3月1日下午，开发区管委会副主任刘永祥、许明召开教育工程现场会，协调解决教育事件'
        // },
        // {
        //   funtionUrl: '/',
        //   imageUrl: require('../../../static/imgs/ees.png'),
        //   title: '[教育新闻]开发区领导现场办公 力推进教育工程项目建设',
        //   cont: '3月1日下午，开发区管委会副主任刘永祥、许明召开教育工程现场会，协调解决教育事件'
        // },
        // {
        //   funtionUrl: '/',
        //   imageUrl: require('../../../static/imgs/ees.png'),
        //   title: '[教育新闻]开发区领导现场办公 力推进教育工程项目建设',
        //   cont: '3月1日下午，开发区管委会副主任刘永祥、许明召开教育工程现场会，协调解决教育事件'
        // }
      ],
      num: 1,
      textActive: false,
    };
  },
  methods: {
    more () {
      this.$router.push({
        path: '/Education/index/esDetails',
        query: {
          id: this.num
        }
      })
    },
    getList () {
      let url = 'http://zsht.bloomworks.cn/api/public/getEdtList?'
      this.axios.get(url,{
        params: {
          type: this.num
        }
      }).then((res) => {
        this.newList = JSON.parse(res.data.data)
      }).catch(() => {  
      });
    },
  },
  mounted() {
    this.getList()
  },
}

</script>
<style lang='stylus' scoped>
.main_law
  // min-height 100vh
  background #ffffff
  .info
    padding 0 20px
    .title
      position relative
      margin-bottom 40px
      padding 1px
      h4
        position absolute
        color #333333
        bottom 0 
        top 0
        left 5px
        z-index 2
      .line2
        position absolute
        width 135px
        height 18px
        bottom -34px
        left -3px
        opacity: 0.5
        border-radius 4px
        background #6C9BFE
      .more 
        position absolute
        right 0
        color #666
        font-size 24px
</style>