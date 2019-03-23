<template>
  <div class="content">
      <div class="pay-box">
          <div class="pay" v-for="(item, index) in guideList" :key="index" @click="active(index)">
              <figure><img :src="item.img" alt=""></figure>
              <div class="text">{{item.text}}</div>
              <div class="radio">
                <svg class="icon return-icon" aria-hidden="true">
                  <use xlink:href="#icon-fanhui"></use>
                </svg>
              </div>
              <p class="line"></p>
          </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Guide',
  data () {
    return {
      listNum:0,
      guideList:[
        {
          img: require('../../../static/imgs/tel.png'),
          text: '各科室通讯录'
        },
        {
          img: require('../../../static/imgs/Process.png'),
          text: '就诊流程'
        },
        {
          img: require('../../../static/imgs/Rule.png'),
          text: '发热病人预检分诊流程及有关规定'
        }
      ]
    }
  },
  methods: {
    active (index) {
      this.guideList = index
        if ( index === 0){
          this.$router.push({
          path: '/Register/Register/Guide/Tel',  
          })
        } else if (index === 1 ){
          this.$router.push({
          path: '/Register/Register/Guide/Process', 
          })
        } else{
          this.$router.push({
          path: '/Register/Register/Guide/Rule', 
          })
        }
    }
  }
}
</script>
<style scoped lang="stylus">
.content
    background-color #ffffff
    padding-top 30px
    .pay-box
      padding 10px 40px
      width 100%
      float left
      background-color #ffffff
      .pay
        padding-bottom 40px 
        vertical-align middle
        position relative
        figure
          display inline-block
          vertical-align middle
          width 38px
          img 
            width 100%
        .text
          display inline-block
          vertical-align middle
          padding-left 70px
          color #333333
          font-size 30px
        .radio
          position absolute
          right 0
          top 6px
          width 24px
          .return-icon
            transform rotateZ(-180deg)
        .line
          height 1px 
          background-color #f4f4f4
          margin 0 
          margin-top 30px
</style>
