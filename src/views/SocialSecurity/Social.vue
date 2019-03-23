<template>
  <div class="main">
    <div class="content">
      <p class="title">{{text}}</p>
      <form>
        <label for="name">姓名</label>
        <div class="info">
          <input type="text" placeholder="请填写真实姓名" id="name" v-model="name" @change="username"/>
        </div>
        <label for="num">身份证号</label>
        <div class="info">
          <input type="text" placeholder="请输入身份证号" id="num" v-model="num" @change="usernum"/>
        </div>
        <label for="card">社保卡号</label>
        <div class="info">
          <input type="text" placeholder="请输入18位社保卡号" id="card" v-model="card" @change="usercard"/>
          <!-- <figure><img src="../../../static/imgs/photo.png" alt=""></figure>
          <p class="code">手动输入不便？试试扫描添加！</p> -->
        </div>
      </form>
      <div>
        <p class="add" @click="saveMedicalCard">确认添加</p>
      </div>
    </div>
    <mt-popup
      v-model="popupVisible"
      popup-transition="popup-fade"
      >
      <div class="popup-box">
          <figure class="popup-img">
          <img src="../../../static/imgs/alert.png" width="100%">
          </figure>
          <p class="popup-p1">更多功能正在测试联调中</p>
          <p class="popup-p2">敬请期待......</p>
          <figure class="popup-close" @click="click_close">
          <img src="../../../static/imgs/close.png" width="100%">
          </figure>
      </div>
    </mt-popup>
  </div>
</template>

<script>
export default {
  name: 'Social',
  data () {
    return {
      name: '',
      num: '',
      card: '',
      text: '发卡单位：社保局',
      popupVisible: false,
    }
  },
  methods: {    
    username () {
        if (this.name === '') {
          this.$messagebox.alert('姓名不可为空');
        } else {
            var reg=/^[\u4e00-\u9fa5]{2,4}$/
            if(!reg.test(this.name)){
              this.$messagebox.alert('请输入真实有效的姓名');
            }
        }
    },
    usernum () {
        if (this.num === '') {
          this.$messagebox.alert('身份证不可为空');
        } else {
            var reg=/(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
            if(!reg.test(this.num)){
              this.$messagebox.alert('请输入正确的身份证');
            }
        }
    },
    usercard () {
        if (this.card === '') {
          this.$messagebox.alert('社保卡号不可为空');
        } else {
            var reg=/^\d{18}$/;
            if(!reg.test(this.card)){
              this.$messagebox.alert('请输入正确的社保卡号');
            }
        }
    },
    //添加就诊卡
    saveMedicalCard () {
      this.axios.post('http://zsht.bloomworks.cn/f/zs/medicalCard/saveMedicalCard',{
        openId: this.$store.state.common.openId,
        type: 1,
        personalId: this.num,    //身份证
        cardNumber: this.card,   //社保卡号
        name: this.name          //姓名
      }).then(() => {
        this.$toast('添加成功')
        this.num = ''
        this.card = ''
        this.name = ''
      }).catch(() => {
    
      })
    },
    click_close () {
        this.popupVisible = false
    }
  }
}
</script>
<style scoped lang="stylus">
.main
  min-height 100vh
  background #ffffff
  .content
    padding  0 50px
    .title
      margin 57px 0 51px 0
    form
      label  
        margin 15px 0
      .info
        width 100%
        margin-bottom 30px
        position relative
        input::-webkit-input-placeholder
          color #CDCDCD
        input
          width 100%
          border none
          outline none
          border-bottom 1px solid #cccccc
          line-height 90px
        figure
          position absolute
          width 42px
          height 52px
          right 60px
          top 0px
        // .code
        //   text-align right
        //   font-size 30px
        //   line-height 70px
        //   color #666666
    div
      width 100% 
      .add
        color #ffffff
        text-align center
        margin 160px 50px 0 50px
        line-height 100px
        background #2B7FF3
        border-radius 5px
  .popup-box
      text-align center
      padding 50px 0
      width 70vw
      position relative
      overflow hidden
    .popup-img
      width 110px
      margin 0 auto
    .popup-p1
      font-size 28px
      color #999999
      margin-top 34px
    .popup-p2
      font-size 32px
      color #333333
      margin-top 28px
    .popup-close
      width 46px
      position absolute
      top -4px
      right -4px
</style>
