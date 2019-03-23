<template>
<div class="bottom-tab">
    <div class="tab-item" @click="switchTo('/bus/index/home')">
            <img :src="'/bus/index/home' === $route.path ? tabBarImgArr[0].selected : tabBarImgArr[0].normal" alt="首页">
            <span :class="{on: '/bus/index/home' === $route.path}">首页</span>
        </div>
    <div class="tab-item" @click="switchTo('/bus/index/toline')">
            <img :src="'/bus/index/toline' === $route.path ? tabBarImgArr[1].selected : tabBarImgArr[1].normal" alt="路线">
            <span :class="{on: '/bus/index/toline' === $route.path}">路线</span>
        </div>
    <div class="tab-item" @click="switchTo('/bus/index/near')">
            <img :src="'/bus/index/near' === $route.path ? tabBarImgArr[2].selected : tabBarImgArr[2].normal" alt="附近">
            <span :class="{on: '/bus/index/near' === $route.path}">附近</span>
      </div>
  </div>
</template>
 
<script type="text/javascript">
	
	export default{
    name: 'index',
		data(){
			return {
				tabBarImgArr:[   //图片切换
        {normal: require('../../../static/imgs/busnor.png'), selected: require('../../../static/imgs/bushome.png')},
        {normal: require('../../../static/imgs/toline.png'), selected: require('../../../static/imgs/line_a.png')},
        {normal:  require('../../../static/imgs/near.png'), selected: require('../../../static/imgs/near_a.png')},
      ]
			}
    },
    methods:{
      switchTo(path){
        // console.log(this.$router)
        this.$router.replace(path)
      }
  }
	} 
 
</script>

<style lang="stylus" scoped>
.bottom-tab
  width 100%
  height 50px
  background-color #fff
  position fixed
  left 0px
  bottom 0px
  display flex
  z-index 999
  .tab-item
    display flex
    flex 1
    flex-direction column
    align-items center
    justify-content center
    font-size 14px
    color #666
    img
      width 35%
        margin-bottom 2px
    .on
      color red
</style>
