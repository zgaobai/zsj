<template>
  <div class="main">
    <div class="top">
        <div class="header">
          <p class="line-left-1 line title"></p>
          <p class="line-left-2 line title"></p>
          <p class="title">卡片申请</p>
          <p class="line-right-1 line title"></p>
          <p class="line-right-2 line title"></p>
        </div>
        <p class="top-text">
          漳州开发区幸福家园卡是由漳州招商局经济技术开发区管委会与招商银行厦门分行联名发卡，向区内机关单位，企事业单位正常缴交社保的员工，学校师生以及开发区常驻户籍人员开放服务。目前仅接受机关、企事业单位、学校、居委会等机构批量递交刷卡申请，暂不开放柜台面向个人申请。
        </p>
        <p class="top-text"> 
          办卡申请人员需向所属单位或居委会提供相关材料，并准备身份证复印件以及电子照片。单位或居委会收集材料后提供给开发区管委会信息中心核查。
        </p>
        <p class="top-text">
          卡片制作完成后，居民持本人身份证到招商银行开发区支行领取卡片，银行工作人员现场激活卡片相关应用
        </p>
    </div>
    <div class="top">
        <div class="header">
          <p class="line-left-1 line title"></p>
          <p class="line-left-2 line title"></p>
          <p class="nav title">招商开发区幸福家园卡申请流程</p>
          <p class="line-right-1 line title"></p>
          <p class="line-right-2 line title"></p>
        </div>
        <div class="pro">
          <div class="item">
            <figure class="img">
              <img src="../../../static/imgs/hou.png" alt="" width="100%">
            </figure>
          </div>
          <div class="item">
            <p class="num">01</p>
            <p class="text">政府机关，企事业单位学校，居委会</p>
          </div>
        </div>
        <div class="pro">
          <div class="item">
            <p class="item-num">02</p>
            <p class="item-text">填写相关材料身份证原件及电子照片</p>
          </div>
          <div class="item">
            <figure class="item-img">
              <img src="../../../static/imgs/eep.png" alt="" width="100%">
            </figure>
          </div>
        </div>
         <div class="pro">
          <div class="item">
            <figure class="img">
              <img src="../../../static/imgs/make.png" alt="" width="100%">
            </figure>
          </div>
          <div class="item">
            <p class="num">03</p>
            <p class="text">制卡，领证</p>
          </div>
        </div>
         <div class="pro">
          <div class="item">
            <p class="item-num">04</p>
            <p class="item-text">激活银行卡</p>
          </div>
          <div class="item">
            <figure class="item-img">
              <img src="../../../static/imgs/activ.png" alt="" width="100%">
            </figure>
          </div>
        </div>
    </div>
    <div class="top">
        <div class="header">
          <p class="line-left-1 line title"></p>
          <p class="line-left-2 line title"></p>
          <p class="title">信用消费</p>
          <p class="line-right-1 line title"></p>
          <p class="line-right-2 line title"></p>
        </div>
        <div class="text-box">
          <p class="text-msg">
            居民在公交、轮渡等信用消费场景刷卡后，费用将从银行卡的活期账户内自动扣除。请确保卡内活期余额充足。扣款失败时，将收到银行发送的【欠费提醒】。连续欠费达到20元，将收到银行发送的【服务暂停提醒】，系统将冻结信用额度，费用服务暂缓提供。服务恢复需等还款后次日生效。服务暂停超过30天，系统将用户信息记入黑名单，不再为该用户提供信用消费服务
          </p>
          <p class="mes">
            咨询电话：0596-6850967
          </p>
        </div>
    </div>
    <div class="bot">
      <div class="header">
        <p class="line-left-1 line title"></p>
        <p class="line-left-2 line title"></p>
        <p class="title">幸福家园卡</p>
        <p class="line-right-1 line title"></p>
        <p class="line-right-2 line title"></p>
      </div>
      <div class="bot-box">
        <div class="nav-title">
          <figure>
            <img src="../../../static/imgs/fund.png" alt="" width="100%">
          </figure>
          <p class="fund">银行存款</p>
        </div>
        <div class="content">
          <p class="means">存款方法</p>
          <p class="ways">通过取款或转账方式将资金存入银行卡活期账户即可。</p>
          <p class="use">使用场景</p>
          <p class="ways">1.所有可以识别到银联标志钱卡的pos机。例如超市，便利店，酒店，自动存取一体机等</p>
          <p class="ways">2.开发区内标有“幸福家园”标志的信用消费终端，例如轮渡，公交2路车等</p>
        </div>
      </div>
      <div class="bot-box">
        <div class="nav-title">
          <figure>
            <img src="../../../static/imgs/bug.png" alt="" width="100%">
          </figure>
          <p class="fund">电子钱包</p>
        </div>
        <div class="content">
          <p class="means">存款方法</p>
          <p class="ways">可通过e卡通app存钱后再银行、码头、公交场站、轮渡等补登机上图存</p>
          <p class="use">使用场景</p>
          <p class="ways">区外交通卡应用范围，例如：厦门公交，BRT，地铁；北京，上海，天津，深圳，漳州，泉州等全国164家互联互通城市使用</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'flow',
  data() {
    return {
      
    }
  },
}
</script>

<style lang="stylus" scoped>
.main
  min-height 100vh
  background #FCFDFF
  padding-bottom 30px
  .top
    .header
      padding 42px 0 30px 66px
      background #ffffff
      .title
        display inline-block
        color #333333
        font-size 38px
      .nav
        // margin-bottom 56px
        font-size 34px
        color #333333
      .line
        width 6px
        height 27px
        background linear-gradient(#FFE3BB,#FEFEFE)
      .line-left-1 
        margin-right 7px
      .line-left-2
        margin-right 9px
      .line-right-1
        margin-left 11px
      .line-right-2
        margin-left 7px
    .text-box
      background #ffffff
      .text-msg
        font-size 28px
        color #666666
        line-height 52px
        padding 0 30px
        text-indent 48px
        background-color #ffffff
      .mes
        font-size 28px
        color #2B7FF3
        // padding 0 30px
        margin 55px 0 92px 30px
        background-color #ffffff
    .top-text
      font-size 28px
      color #666666
      line-height 52px
      padding 0 30px
      text-indent 48px
      background-color #ffffff
    // .mes
    //   font-size 28px
    //   color #2B7FF3
    //   // padding 0 30px
    //   margin 55px 0 92px 30px
    //   background-color #ffffff
    .pro
      padding 0 30px
      display flex
      height 315px
      background-image:  url('../../../static/imgs/ee.png')
      background-repeat no-repeat
      background-size 100% 315px
      .item
        flex 1 
        .img
          width 144px
          height 144px
          margin 52px 108px 0 71px
        .num 
          color #0061C4
          font-size 53px
          margin 36px 0 22px
          opacity 0.5
        .text
          font-size 30px
          color #333333
          line-height 46px
          margin-right 64px
        .item-num
          margin 36px 0 23px 50px
          color #0061C4
          opacity 0.5
          font-size 53px
        .item-text
          margin-left 48px
          line-height 46px 
          font-size 30px
          color #333333
        .item-img
          width 231px
          height 242px
          margin 0 45px
  .bot
    padding 0 30px
    .header
      text-align center
      margin-bottom 51px
      .title
        display inline-block
        color #333333
        font-size 38px
      .nav
        margin-bottom 56px
        font-size 34px
        color #333333
      .line
        width 6px
        height 27px
        background linear-gradient(#FFE3BB,#FEFEFE)
      .line-left-1 
        margin-right 7px
      .line-left-2
        margin-right 9px
      .line-right-1
        margin-left 11px
      .line-right-2
        margin-left 7px
    .bot-box
      background #ffffff
      .nav-title
        figure
          display inline-block
          width 33px
          height 33px
          margin-right 15px
          vertical-align middle
          margin-top -10px
        .fund
          display inline-block
          color #333333
          font-size 34px
          line-height 48px
      .content
        margin-left 61px
        margin-bottom 50px
        background #ffffff
        .means
          font-size 30px
          color #333333
          margin 40px 0 23px
        .ways
          font-size 28px
          color #999999
          line-height 48px
        .use
          margin 30px 0 23px
          font-size 30px
          color #333333
</style>
