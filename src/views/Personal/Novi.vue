<template>
  <div class="main">
    <div class="show-img">
      <figure>
        <img src="../../../static/imgs/norecharge.png" alt="">
      </figure>
      <p class="text">暂无就诊记录</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Novi',
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="stylus" scoped>
.main
  min-height 100vh
  background-color #ffffff
  .show-img 
    position absolute
    left 50%
    top 50%
    transform translate(-50%, -50%)
    figure
      img 
        width 100%
    .text
      width 100%
      text-align center
      font-size 28px
      line-height 48px
      margin-top 60px
</style>
