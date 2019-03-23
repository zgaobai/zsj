<template>
  <div class="main">
    <nav class="nav">
      <div 
        v-for="(item, index) in nav_list" 
        :key="index" 
        class="nav-item" 
        @click="active(index)"
        :class="{'nav-item-active': num === index}"
      >
        {{item}}
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'SecurityAdd',
  data () {
    return {
      num: 0,
      text: '发卡医院：漳州开发区第一医院',
      nav_list: ['就诊卡' , '社保卡'],
    }
  },
  methods: {
   active (index) {
      this.num = index
      if (index === 0) {
        this.$router.replace('/SocialSecurity/SecurityAdd/Visit')
      } else {
        this.$router.replace('/SocialSecurity/SecurityAdd/Social')
      }
    },
    set_num () {
      const path = this.$route.path
      if (path === '/SocialSecurity/SecurityAdd/Visit') {
        this.num = 0
      } else{
        this.num = 1
      }
    },
    created () {
    this.set_num()
    }
  }
}
</script>
<style scoped lang="stylus">
.main
  min-height 100vh
  background #ffffff
  .nav
    display flex
    flex-flow row nowrap
    justify-content center
    margin 0px 20px
    font-size: 32px
    background-color #fff
    line-height 80px
    overflow hidden
    border-radius 12px
    border 1px solid #1F7DFF
    .nav-item
      overflow hidden
      text-align center
      width 100%
      font-size 33px 
      color: #1F7DFF
    .nav-item-active
      background #2B7FF3
      color: #ffffff
</style>