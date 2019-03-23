<template>
  <div class="main">
    <div class="content" v-for="(item, index) in detList" :key='index' @click="goArt(index)">
      <p class="content_line"></p>
      <div class="content_info">
        <p class="content_info_text">
          <!-- 漳州招商局经济技术开发区招生考试办公室关于201考具有开发区户籍在省外就读的考生报名安排的通知 -->
          {{item.title}}
        </p>
        <p class="content_info_time">
          <!-- 2017-12-29 16:55:12 -->
          {{item.releaseTime}}
        </p>
      </div>
    </div>
    <div v-show=" this.detList.length === 0 " class="none">暂无信息</div>
  </div>
</template>

<script>
export default {
  name: 'esDetails' ,
  data () {
    return {
      detList:
      [
        // {
        //   text: '漳州招商局经济技术开发区招生考试办公室关于201考具有开发区户籍在省外就读的考生报名安排的通知',
        //   time: '2017-12-29 16:55:12'
        // },
        // {
        //   text: '漳州招商局经济技术开发区2017年教师补充招聘考试总成绩公布',
        //   time: '2017-12-29 16:55:12'
        // },
        // {
        //   text: '漳州招商局经济技术开发区2017年教师补充招聘考试总成绩公布',
        //   time: '2017-12-29 16:55:12'
        // },
        // {
        //   text: '漳州招商局经济技术开发区招生考试办公室关于201考具有开发区户籍在省外就读的考生报名安排的通知',
        //   time: '2017-12-29 16:55:12'
        // },
        // {
        //   text: '大径幼儿园举办第十二期家长学校大径幼儿园举办第十二期家长学校',
        //   time: '2017-12-29 16:55:12'
        // },
      ]
    };
  },
  methods: {
    getList () {
      let url = 'http://zsht.bloomworks.cn/api/public/getEdtList?'
      this.axios.get(url,{
        params: {
          type: this.$route.query.id
        }
      }).then((res) => {
        this.detList = JSON.parse(res.data.data)
      }).catch(() => {  
      });
    },
    goArt (index) {
      this.$router.push({
        path: '/Education/index/esDetails/artOther',
        query: {
          id: this.detList[index].id
        }
      }) 
    }
  },
  mounted () {
    this.getList()
  }
}

</script>
<style lang='stylus' scoped>
.main
  min-height 100vh
  background #FFFFFF
  padding 0 22px
  position:relative
  .content
    position relative
    // height 187px
    padding-top 20px
    .content_line
      position absolute
      top 32px
      width 5px
      height 20px
      background #4F7FFD
    .content_info
      display inline-block
      width 100%
      margin-left 15px
      padding-bottom 20px
      border-bottom 1px solid #F3F4F6
      .content_info_text
        line-height 50px
        font-size 30px
        color #333333
      .content_info_time
        margin-top 20px
        font-size 22px
        color #D7D7D7
  .none
    position: absolute;
    top:50%;
    left:50%;
    width:100%;
    transform:translate(-50%,-50%);
    text-align: center;
    font-size: 36px;
</style>