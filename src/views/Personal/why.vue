<template>
  <div class="main">
    <div class="box" v-for="(item, index) in list" :key="index">
      <div class="title">{{item.title}}</div>
      <div class="box-item" v-for="(value, index) in item.qs" :key="index">
        <div v-for="(key, ins) in value.qa" :key="ins"> 
          <!-- <div v-for="(val, inns) in key" :key="inns"> -->
            <div class="question">{{key[0]}}</div>
            <div class="answer">{{key[1]}}</div>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'why',
  data () {
    return {
      list: [
        {
          title: "01:注册",
          qs: [
            {
              qa: {
                qa1: ['Q:可以用邮箱注册么？','A:掌上医院注册需要手机号进行，通过验证手机短信验证码进行注册，不支持邮箱注册',],
                qa2: ['Q:注册过程中未收到短信验证码怎么办?','A:短信验证根据不同的运营商，收到的时间长短会有所不同，通常在一分钟内可以收到，如果超过一分钟可以点击再次发送']
              }
            }
          ]
        },
        {
          title: "02.登录",
          qs: [
            {
              qa: {
                qa1: ['Q:登录系统需要输入哪些信息?','A:您的手机号和密码'],
                qa2: ['Q:登录之后怎么办?','A:请确认手机号是否正确，如果忘记密码可通过找回密码功能进行找回密码操作']
              }
            }
          ]
        },
        {
          title: "03.绑定就诊卡",
          qs: [
            {
              qa: {
                qa1: ['Q:我有多个社保卡要怎么用?','A:我们提供多社保卡服务，一个手机号可以绑定多张社保卡。通过点击个人中心(右上角图标)，选择我的卡包，添加新的社保卡信息'],
                qa2: ['Q:就诊卡如何解除绑定?','A:在我的卡包功能页中，点选相应的卡包，会出现删除功能，直接删除即可。']
              }
            }
          ]
        },
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.main
  min-height 100vh
  background #ffffff
  .box
    padding 42px 0 0px 21px
    .title
      color #1E7BFB
      font-size 32px
      line-height 30px
      font-weight 600
    .box-item
      .question
        margin 43px 0 31px 0
        font-size 30px
        line-height 30px
        color #333333
        font-weight 400
      .answer
        font-size 28px
        line-height 44px
        color #999999
        margin-right 31px
</style>
