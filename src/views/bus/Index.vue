<template>
<div class="main">
  <router-view></router-view>
  <div class="bottom-tab">
    <div class="tab-item" @click="switchTo('/bus/index/home/recommend')">
      <figure class="item-img-box">
        <img :src="'/bus/index/home/recommend' === $route.path ? tabBarImgArr[0].selected : tabBarImgArr[0].normal" alt="" width="100%">
      </figure>
      <p :class="{on: '/bus/index/home/recommend' === $route.path}">首页</p>
    </div>
    <div class="tab-item" @click="switchTo('/bus/index/toline')">
      <figure class="item-img-box">
        <img :src="'/bus/index/toline' === $route.path ? tabBarImgArr[1].selected : tabBarImgArr[1].normal" alt="" width="100%">
      </figure>
      <p :class="{on: '/bus/index/toline' === $route.path}">路线</p>
    </div>
    <div class="tab-item" @click="switchTo('/bus/index/near')">
      <figure class="item-img-box">
        <img :src="'/bus/index/near' === $route.path ? tabBarImgArr[2].selected : tabBarImgArr[2].normal" alt="" width="100%">
      </figure>
      <p :class="{on: '/bus/index/near' === $route.path}">附近</p>
    </div>
  </div>
</div>
</template>
 
<script>	
	export default{
    name: 'Index',
		data(){
			return {
				tabBarImgArr:[   //图片切换
        {
          normal: require('../../../static/imgs/busnor.png'), 
          selected: require('../../../static/imgs/bushome.png')
        },
        {
          normal: require('../../../static/imgs/toline.png'), 
          selected: require('../../../static/imgs/line_a.png')
        },
        {
          normal:  require('../../../static/imgs/near.png'), 
          selected: require('../../../static/imgs/near_a.png')
        },
      ]
			}
    },
    methods:{
      switchTo(path){
        this.$router.replace(path)
      }
  }
	} 
 
</script>

<style lang="stylus" scoped>
.main
  min-height 100vh
  .bottom-tab
    width 100%
    height 98px
    background-color #fff
    position fixed
    left 0px
    bottom 0px
    display flex
    flex-flow row wrap
    color #999999
    font-size 20px
    .tab-item
      width 25%
      flex auto
      text-align center
      .item-img-box
        text-align center
        width 44px
        height 44px
        margin 10px auto
      .on
        color #4e84fe
</style>
