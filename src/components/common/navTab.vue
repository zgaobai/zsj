<template>
  <div class="nav-box" @click="click_nav" :class="{active:active}" @touchstart="touchstart" @touchend="touchend">
    <div class="img-item">
     <span v-show='!bol'>
        <slot name='normalImg'></slot>
      </span>
      <span v-show='bol'>
        <slot name='activeImg'></slot>
      </span>
    </div>
    <div  :class="{colorWarp:bol}"  class="text-item">{{navtab.name}}</div>
  </div>
</template>

<script>
export default {
  name: 'navTab',
  props: {
    navtab: Object,
    sel: String
  },
  data () {
    return {
      active: false
    }
  },
  methods: {
    click_nav () {
      this.$router.push(this.navtab.funtionUrl)
      this.$emit('changeUrl',this.navtab.funtionUrl)
    },
    touchstart () {
      this.active = true
    },
    touchend () {
      this.active = false
    }
  },
  computed: {
    bol () {
      if(this.sel == this.navtab.funtionUrl){
        return true;
      }
        return false;
    }
  }
}
</script>

<style lang="stylus" scoped>
.nav-box
  display flex
  flex-flow column nowrap
  align-items center
  height 98px
  background #ffffff
  .img-item
    margin-top 12px
    width 44px
    height 44px
    img 
      width 100%
      height 100% 
  .text-item
    font-size 20px
    margin-top 12px
.active
  background-color #f1f1f1
.colorWarp
	color #6EAAFD
</style>
