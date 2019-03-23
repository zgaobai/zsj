<template>
  <div class="main">
    <router-view></router-view>
    <div class="box">
      <nav-tab class="box-item" v-for="(item, index) of list" :navtab="item" :key="index" :sel='selected' @changeUrl='getVal'>
        <img :src="item.normalImg" slot='normalImg'>
        <img :src="item.activeImg" slot='activeImg'>
      </nav-tab>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      selected:'bus/index/home',
      list: [
        {
          funtionUrl: '/bus/index/home',
          normalImg: require('../../../static/imgs/busnor.png'),
          activeImg: require('../../../static/imgs/bushome.png'),
          name: '首页'
        },
        {
          funtionUrl: '/bus/index/toline',
          normalImg: require('../../../static/imgs/toline.png'),
          activeImg: require('../../../static/imgs/line_a.png'),
          name: '线路'
        },
        {
          funtionUrl: '/bus/index/near',
          normalImg: require('../../../static/imgs/near.png'),
          activeImg: require('../../../static/imgs/near_a.png'),
          name: '附近'
        },
      ],
    }
  },
  components: {
    navTab: () => import('../../components/common/navTab')
  },
  methods: {
    getVal (res) {
      this.selected = res;
    },
  },
}
</script>

<style lang="stylus" scoped>
.main
  min-height 100vh
  .box
    display flex
    position fixed
    bottom 0
    left 0
    width 100%
    flex-flow row wrap
    background #ffffff
    .box-item
      width 25%
      flex auto
</style>
