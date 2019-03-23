<template>
  <div class="main">
    <div class="header">
      <p class="header_line"></p>
      <p class="header_title">{{art.title}}</p>
    </div>
    <div class="info">
      作者： <span class="info_author">{{art.author}}</span>   发布时间： <span>{{art.releaseTime}}</span>
    </div>
    <!-- <div class="content">
      {{noHtml}}
    </div> -->
    <div v-html="art.context"></div>
    <!-- <div class="showImg" v-for="(item, index) in list" :key="index"> 
      <figure>
        <img v-bind:src="'http://edu.i-zhangzhougang.com/uploadfiles/exchange/(131590032992900391)75A7C7EA56370BEBE38E5BF6D5230538.jpg'" width="100%">
      </figure>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'artOther' ,
  data () {
    return {
      art: '',
      list:""
    };
  },
  computed: {
    // imgs () {
    //   // var imgUrl =  (this.art.imgUrl || '').replace(')', '%29').replace('(', '%28') 
    //   console.log(this.art)
    //   //let list = this.art.imgUrl.split(',')
    //   // console.log(list)
    //   // return list;
    //   return ""
    // }
  },
  methods: {
    getList () {
      let url = 'http://zsht.bloomworks.cn/api/public/getDetails?'
      this.axios.get(url,{
        params: {
          id: this.$route.query.id
        }
      }
      ).then((res) => {
        this.art = JSON.parse(res.data.data)
        this.list = this.art.imgUrl.split(",");
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
.main
  min-height 100vh
  background #ffffff
  padding 0 22px 100px 22px
  .header
    padding 28px 0 30px
    font-size 44px
    color #333333
    // font-weight 500
    .header_line
      position absolute
      display inline-block
      top 32px
      width 5px
      height 40px
      background #4F7FFD
      // margin-right 10px
    .header_title
      margin-left 15px
  .info
    width 100%
    text-align center
    font-size 26px
    color #999999
    margin 15px 0
    .info_author
      margin-right 20px
  .content
    margin-top 20px
    font-size 30px
    color #333333
    line-height 60px
    text-indent 60px
  .showImg
    // height 415px
    margin-top 20px
    // background #4F7FFD
    figure
      // height 415px
      width 100%
      img 
        border 0
</style>