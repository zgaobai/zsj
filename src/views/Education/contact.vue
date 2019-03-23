<template>
  <div class="main_con">
    <div class="tel">
      <figure>
        <img src="../../../static/imgs/ed_tel.png" alt="" width="100%">
      </figure>
      <p class="tel_text">联系电话：</p>
      <p class="tel_num">
        0596-6895375,6895699,6895133（教育局）                       
      </p>
      <p class="tel_num p_bot">
        0596-6895513,6895960（招生办公室）
      </p>
    </div>
    <div class="tel">
      <figure>
        <img src="../../../static/imgs/ed_adr.png" alt="" width="100%">
      </figure>
      <p class="tel_text">地址：</p>
      <p class="tel_num p_bot">
        福建省漳州招商局经济技术开发区招商大道49号海关大厦505室                                             
      </p>
    </div>
    <div class="tel">
      <figure>
        <img src="../../../static/imgs/ed_em.png" alt="" width="100%">
      </figure>
      <p class="tel_text">邮编：</p>
      <p class="p_bot in">
        363122                                            
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact' ,
  data () {
    return {
    };
  },
}

</script>
<style lang='stylus' scoped>
.main_con
  min-height 100vh
  background #F3F4F6
  padding 14px 24px 0 24px
  .tel
    background #ffffff
    // height 160px
    margin-bottom 15px
    figure
      margin 0px 17px 0 14px
      width 48px
      height 48px
      display inline-block
      vertical-align middle
    .tel_text 
      display inline-block
      font-size 28px
      color #333333
      margin-top 23px
      font-weight 600
    .tel_num
      margin-left 63px
      font-size 28px
      color #666666
      line-height 48px
    .p_bot
      padding-bottom 20px
    .in
      display  inline-block
      margin-left 10px
      font-size 28px
      color #666666
      line-height 48px
</style>