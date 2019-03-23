<template>
  <div class="navbar">
    <div
      class="navbar-item" 
      v-for="(item, index) in list" 
      :key="index" 
    >
      <div @click="itemClick(item, index)">
        <div class="navbar-img-box">
          <img :src="item.img" v-show="index !== nav_active">
          <img :src="item.imgAct" v-show="index === nav_active">
        </div>
        <p :class="{'title-active': index === nav_active}">{{item.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  props: {
    nav_active: Number
  },
  data () {
    return {
      list: [
        {
          title: '首页',
          img: require('../../../static/imgs/busnor.png'),
          imgAct: require('../../../static/imgs/bushome.png'),
          path: '/bus/index/home/recommend'
        },
        {
          title: '路线',
          img: require('../../../static/imgs/toline.png'),
          imgAct: require('../../../static/imgs/line_a.png'),
          path: '/bus/index/toline'
        },
        {
          title: '附近',
          img: require('../../../static/imgs/near.png'),
          imgAct: require('../../../static/imgs/near_a.png'),
          path: '/bus/index/near'
        }
      ]
    }
  },
  methods: {
    itemClick (item) {
      this.$router.push(item.path)
    }
  }
}
</script>
<style scoped lang="stylus">
.navbar
  user-select none
  display flex
  position fixed
  bottom 0
  right 0
  left 0
  background #ffffff
  color #999999
  font-size 20px
  letter-spacing 1.6px
  border-top 1px solid #E2E2E2
  .navbar-item
    padding 6px 0
    width 25%
    text-align center
    .navbar-img-box
      width 50px
      height 50px
      margin 4px auto
      img
        width 100%
.title-active
  color #4e84fe
</style>
