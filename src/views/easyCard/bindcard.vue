<template>
  <div class="main">
    <div class="header">
      <mt-field label="卡号：" placeholder="请输入19位e卡通卡号或异型卡卡号" class="info line" v-model="cardnum" type="number"></mt-field>
    </div>
    <div class="sure" @click="search">查询</div>
  </div>
</template>

<script>
export default {
  name: 'bindcard',
  data() {
    return {
      cardnum: '',
      mag: ''
    }
  },
  computed: {
    
  },
  methods: {
    search () { 
      var reg=/^\d{19}$/
      if (this.cardnum === '') {
        this.$messagebox.alert('卡号不可为空');
      } else if(!reg.test(this.cardnum)){
        this.$messagebox.alert('请输入正确的卡号');
      } else {
        if(this.msg === "失败"){
          this.saveCard()
        }this.$router.push({
          path: '/index/bindcard/deal',
          query: {
            number: this.cardnum
          }
        }) 
      }
        
    },
    //保存卡号数据
    saveCard () {
       this.axios.post('http://zsht.bloomworks.cn/f/zs/card/saveCard',{
            openId: this.$store.state.common.openId,
            cardId: this.cardnum
          }).then(()=>{
            //  this.$toast('添加成功')
          }).catch(()=>{
            // console.log(err)
          })
          
    },
    //获取卡号数据
    getCard () {
      this.axios.get('http://zsht.bloomworks.cn/f/zs/card/getCard',{
        params: {
          openId: this.$store.state.common.openId
        }
      }).then((res) => {
        // console.log(JSON.parse(res.data.data))
        this.msg = res.data.msg
        // console.log(this.msg)
        this.cardnum = JSON.parse(res.data.data)
        // console.log(res.data.data)
        // console.log(JSON.parse(res.data.data))
      }).catch(() => {
        // console.log(err)
      });
    }
  },
  mounted () {
    this.getCard()
  }
}
</script>

<style lang="stylus" scoped>
.main
  min-height 100vh
  background #F3F4F6
  .header
    background #ffffff
    .info
      height 120px
    .line
      border-bottom 1px solid #ECECEC
  .sure
    margin 90px 70px 0 70px
    background #2B7FF3
    color #ffffff
    font-size 30px
    height 88px
    line-height 88px
    text-align center
    border-radius 10px
</style>
