<template>
  <div class="port_box">
    <swiper :options="swiperOption">
      <swiper-slide class="port" :class='width' v-for="(item, index) of list" :key="index">
        <div @click="go(index)">
          <div class="port-img" :class="size">
            <img :src="item.imageUrl" width="100%">
          </div>
          <p class="port-info" :class="size + 'p'">{{item.name}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination m_top"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "MultiGraph",
  props: {
    list: Array,
    size: String,
    view: Number,
    column: Number
  },
  data() {
    return {
      portActive: false,
      swiperOption: {
        autoplay: false,
        // loop: true,
        slidesPerView : this.view || 4,
        slidesPerColumn: this.column,
        pagination: {
          el: '.swiper-pagination',
          type : 'progressbar',
        },
      }
    };
  },
  methods: {
    go(index) {
      this.$router.push(this.list[index].funtionUrl);
    },
  },
  computed: {
    width () {
      let width= parseInt(100 / this.view )+ `%`
      return width
    }
  },
};
</script>
<style scoped lang="stylus">
.port_box 
  padding 20px 10px 0
  width 100vw
  .m_top
    top 98%
  .port 
    display inline-block
    margin-bottom 20px
    touch-action none
    .port-img 
      border-radius 50%
      overflow hidden
      margin auto
      img 
        width 100%
        height 100%
    .port-info
      width 100%
      margin-top 20px
      text-align center
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
    .big
      width 120px
      height 120px
    .bigp
      font-size 30px
      margin-top 20px
    .mid
      width 100px
      height 100px
    .midp
      font-size 28px
      margin-top 24px
    .small
      width 80px
      height 80px
    .smallp
      font-size 26px
      margin-top 26px
</style>
