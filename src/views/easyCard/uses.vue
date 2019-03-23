<template>
  <div class="main">
    <div class="top">
      <div class="title">
          <h4>交通应用</h4>
          <p class="line2"></p>
        </div>
      <div class="content">
        <div class="explain">
          居民在漳州开发区幸福家园卡活期账户内存钱，在区内的 公交车，电召车，出租车，轮渡，公共自行车等具有“幸福家园”标志的机具上挥卡，即可进行“信用乘车/船，先乘车/船后付款，无押金不充值。再区外的”信用乘车“场景同样可以使用，例如厦门公交22，118路等；对于传统的电子钱包支付的交通应用场景，可在开发区银行，码头，学校等服务网点对电子钱包进行圈存，即可在漳州、厦门等全国164家交通卡互联互通城市中使用。
        </div>
        <figure>
          <img src="../../../static/imgs/busc.png" alt="" width="100%">
        </figure>
      </div>
    </div>
    <div class="top">
      <div class="title">
          <h4>校园应用</h4>
          <p class="line2"></p>
        </div>
      <div class="content">
        <div class="explain">
         漳州开发区幸福家园卡芯片内预留校园一卡通钱包账户，可加载宿舍门禁，食堂，饭卡，便利商超等应用，师生可持新卡进行校内钱包的充值、使用。未来配合校园线上缴费平台，可实现学费、电费水费缴存。
        </div>
        <figure>
          <img src="../../../static/imgs/sc.png" alt="" width="100%">
        </figure>
      </div>
    </div>
    <div class="top">
      <div class="title">
          <h4>其他应用</h4>
          <p class="line2"></p>
        </div>
      <div class="content">
        <p class="title">未来将在下述场景拓展运用：</p>
        <div class="other">
          <p class="dic"></p>
          <p class="other-title">医疗运用：</p>
          <p class="other-explain">享受自助体检，预约，挂号，就诊。</p>
        </div>
        <div class="other">
          <p class="dic"></p>
          <p class="other-title">文体娱乐：</p>
          <p class="other-explain">工会活动场所信用消费，免购票出入。</p>
        </div>
        <div class="other">
          <p class="dic"></p>
          <p class="other-title">代缴应用:</p>
          <p class="other-explain">在银行办理水，电，燃气，物业费等代缴代扣业务</p>
        </div>
        <div class="other">
          <p class="all">*上述服务功能具体启动时间以官方公告为准</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'uses',
  data() {
    return {
      
    }
  },
  methods: {
    
  },
}
</script>

<style lang="stylus" scoped>
.main
  min-height 100vh
  background #ffffff
  padding 0 30px
  .top
    .title
      position relative
      padding-top 40px
      margin-bottom 60px
      h4
        position absolute
        color #333333
        font-size 34px
        bottom 0 
        top 35px
        left 5px
        z-index 2
      .line2
        position absolute
        width 145px
        height 18px
        bottom -38px
        left -3px
        opacity: 0.5
        border-radius 4px
        background #6C9BFE
    .content
      margin 33px 0 0 6px
      .explain
        font-size 28px
        line-height 52px
        color #666666
      figure
        height  246px
        margin-top 30px
      .title
        margin 34px 0 38px
        color #333333
        font-size 28px
        line-height 52px
      .other
        padding 0 68px
        position relative
        .dic
          position absolute
          width 13px
          height 13px
          left 23px
          top 10px
          border-radius 50%
          background #63ABFF
        .other-title
          color #333333
          font-size 28px
        .other-explain
          color #666666
          font-size 28px
          line-height 62px
        .all
          font-size 26px
          color #666666
          padding 36px 0 53px
</style>
