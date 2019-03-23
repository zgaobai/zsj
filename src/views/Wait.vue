<template>
  <div class="wait">
    <prev-page class="return"></prev-page>
    <img class="dev" src="../../static/imgs/dev.jpg" alt="dev">
    <p class="info">该功能暂未开放...</p>
  </div>
</template>

<script>
export default {
  name: 'Wait',
  components: {
    PrevPage: () => import('../components/common/prevPage.vue')
  },
  created () {
    this.axios.get(`http://localhost:8081/rest`)
      .then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
  }
}
</script>
<style scoped lang="stylus">
.wait
  text-align center
  padding-top 200px
  .dev
    width 160px
    height 160px
  .info
    color #333
    font-size 50px
    margin-top 40px
  .return
    position absolute
    top 30px
    left 30px
</style>
