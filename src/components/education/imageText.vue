<template>
<div class="box">
  <div class="content_box" @click="port" @touchstart="portTouchStart" @touchmove="portTouchMove" @touchend="portTouchEnd" :class="{textActive: textActive}">
    <div class="left_img" :class="size">
      <img :src="list.imgUrl" alt="" width="100%" height="100%">
    </div>
    <div class="right_text">
      <div class="right_text_title" :class="size + 't'">
        {{list.title}}
      </div>
      <div class="right_text_cont" :class="size + 'c'">
        <!-- <p>{{list.context}}</p> -->
      </div>
    </div>
  </div>
</div>
 
</template>

<script>
export default {
  name: 'imageText',
  props:{
    list: Object,
    size: String
  },
  data () {
    return {
      textActive: false,
    };
  },
  methods: {
    port () {
      if (this.list.funtionUrl === '/') {
        this.$emit('showClose')
      } else {
        // this.$router.push(this.list.funtionUrl)
        this.$router.push({
        path: '/Education/index/esDetails/artOther',
        query: {
          id: this.list.id
        }
      }) 
      }
    },
    portTouchStart () {
      this.textActive = true
    },
    portTouchMove () {
      if (this.textActive) {
        this.textActive = false
      }
    },
    portTouchEnd () {
      this.textActive = false
    },
  }
}

</script>
<style lang='stylus' scoped>
.box
  padding 34px 0px
  border-bottom 1px solid #f3f4f6
  .content_box
    touch-action none
    .left_img
      display inline-block
      position relative
      // width 230px
      // height 174px
      height 80px
      border-radius 5px
      overflow hidden
    .big
      width 230px
      height 174px
    .right_text
      vertical-align top
      display inline-block
      width 460px
      margin-left 20px
      .right_text_title
        // font-size 32px
        // height 52px
        // line-height 52px
      .bigt
        font-size 32px
        height 52px
        line-height 52px
      .right_text_cont
        margin-top 60px
        // font-size 24px
        // line-height 36px
        color #999999
        overflow hidden
        text-overflow ellipsis
        display -webkit-box
        -webkit-line-clamp 2
        -webkit-box-orient vertical
      .bigc
        font-size 24px
        line-height 36px
  .textActive
    background-color #f1f1f1
</style>