<template>
  <div>
    <nav class="nav">
      <div 
        v-for="(item, index) in nav_list" 
        :key="index" 
        @click="click_nav(index)"
        class="nav-item" 
        :class="{'nav-item-active': nav_num === index}"
      >
        {{item}}
      </div>
      <p class="line"></p>
    </nav>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'ShipBus',
  data () {
    return {
      nav_num: 0,
      nav_list: ['车轮客渡', '巴士']
    }
  },
  methods: {
    click_nav (n) {
      this.nav_num = n
      if (n === 1) {
        this.$router.replace('/Ship/Bus')
      } else {
        this.$router.replace('/Ship/ship')
      }
    },
    set_nav_num () {
      const path = this.$route.path
      if (path === '/Ship/Bus') {
        this.nav_num = 1
      } else {
        this.nav_num = 0
      }
    }
  },
  created () {
    this.set_nav_num()
  }
}
</script>
<style scoped lang="stylus">
.nav
  display flex
  flex-flow row nowrap
  justify-content center
  position relative
  font-size: 30px
  color: #333333
  background-color #fff
  line-height 92px
  border-bottom 1px solid #f0f0f0
  .nav-item
    text-align center
    width 50%
  .line
    position absolute
    bottom 0
    left 0
    height 6px
    width 50%
  .nav-item-active
    color #5287fe
    border-bottom 6px solid #2B7FF3
</style>
