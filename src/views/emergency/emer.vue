<template>
  <div class="main_">
    <nav class="nav">
      <div
        class="nav-item" 
        :class="{'nav-item-active': nav_num === index}"
        v-for="(item, index) in nav_list" :key="index" 
      >
        <div @click="click_nav(index)">{{item}}</div>
      </div>
    </nav>
    <div class="line" :class="line_active"></div>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'ShipBus',
  data () {
    return {
      nav_num: 0,
      nav_list: ['雨量', '水库']
    }
  },
  methods: {
    click_nav (n) {
      this.nav_num = n
      if (n === 0) {
        this.$router.replace('/emer/rainfall')
      } else {
        this.$router.replace('/emer/reservoir')
      }
    },
    set_nav_num () {
      const path = this.$route.path
      if (path === '/emer/reservoir') {
        this.nav_num = 1
      } else {
        this.nav_num = 0
      }
    }
  },
  computed: {
    line_active () {
      return `nav-line-${this.nav_num}`
    },
  },
  created () {
    this.set_nav_num()
  }
}
</script>
<style scoped lang="stylus">
.main_
  min-height 100vh
  background #ffffff
  .nav
    user-select none
    display flex
    flex-flow row nowrap
    justify-content space-around
    font-size: 32px
    color: #333333
    background-color #fff
    line-height 92px
    .nav-item
      text-align center
      width 33.33%
    .nav-item-active
      color #2B7FF3
  .line
    position relative
    top -6px
    width: 61px
    height: 6px
    background-color: #2B7FF3
    border-radius: 3px
    transition all .1s linear
  // .nav-item-active
  //   color #5287fe
  //   // border-bottom 6px solid #2B7FF3
  .nav-line-0
    transform translateX(calc(21vw - 0px))
  .nav-line-1
    transform translateX(calc(71vw - 0px))
</style>
