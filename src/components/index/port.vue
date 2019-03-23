<template>
  <div class="port" @click="savePortInfo" @touchstart="portTouchStart" @touchmove="portTouchMove" @touchend="portTouchEnd" :class="{portActive: portActive}">
    <a class="port-a" :href="list.funtionUrl" v-if="isOutLink"></a>
    <!-- <router-link class="port-a" :to="list.funtionUrl" v-else></router-link> -->
    <div class="port-a" @click="click_port" v-else></div>
    <div class="port-img" :class="size">
      <img :src="list.imageUrl">
    </div>
    <p class="port-info c3" :class="size + 'p'">{{list.name}}</p>
  </div>
</template>

<script>
export default {
  name: 'Port',
  props: {
    list: Object,
    size: String
  },
  data () {
    return {
      portActive: false
    }
  },
  computed: {
    isOutLink () {
      if (this.list.funtionUrl.indexOf('http') !== -1) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    click_port () {
      if (this.list.funtionUrl === '/') {
        this.$emit('showClose')
      } else {
        // this.$router.push(this.list.funtionUrl)
        this.$router.push({
          path: this.list.funtionUrl,
          query: {
            id: this.list.id
          }
        }) 
      }
    },
    savePortInfo () {
      sessionStorage.setItem('portInfo', JSON.stringify(this.list))
    },
    portTouchStart () {
      this.portActive = true
    },
    portTouchMove () {
      if (this.portActive) {
        this.portActive = false
      }
    },
    portTouchEnd () {
      this.portActive = false
    }
  }
}
</script>
<style scoped lang="stylus">
.port
  display flex
  flex-flow column nowrap
  justify-content space-between
  align-items center
  position relative
.port-a
  position absolute
  top 0
  right 0
  bottom 0
  left 0
.port-img
  img
    width 100%
    height 100%
.img-fail
  width 60px
  height 60px
  background #f1f1f1
  border-radius 100%
.portActive
  background-color #f1f1f1
.big
  width 98px
  height 98px
.bigp
  font-weight bold
  font-size 26px
  margin-top 26px
.small
  width 54px
  height 54px
.smallp
  font-size 28px
  margin-top 30px
</style>
