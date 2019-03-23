<template>
  <div class="main">
    <div class="show-img">
      <figure><img src="../../../static/imgs/3.png" alt=""></figure>
      <p>尚未关联社保卡、医保卡</p>
    </div>
    <div >
        <p class="relation" @click="Add">马上关联</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Security',
  data () {
    return {
  
    }
  },
  methods: {
   Add() {
      this.$router.push({
        path: '/SocialSecurity/SecurityAdd',  
      })
    },
  }
}
</script>
<style scoped lang="stylus">
.main
  min-height 100vh
  background #ffffff
  .show-img
    width 100%
    padding 280px 0 100px 0
    text-align center 
    figure
      width 514px
      height 514px
      margin-left 120px
      img 
        width 100% 
  .relation
    margin 0 60px
    background #247cf8
    text-align center
    line-height 90px
    color #fff
    border-radius 5px
</style>