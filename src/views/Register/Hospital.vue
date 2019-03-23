<template>
  <div class="main">
   <div class="content">
        <div class="title">
          <h4>医院介绍</h4>
          <p class="line2"></p>
        </div>
        <p class="explain">漳州招商局经济技术开发区第一医院成立于2013年10月，是经漳州市政府批复成立的一所集医疗、保健、预防为一体的非营利性公益性事业编制医疗机构。医院占地36.2亩，目前总建筑面积有5340平方米，年接诊量达5万多人次。
        </p>
        <p class="show-img">
          <img src="../../../static/imgs/yiyuan1.png" alt="">
        </p>
        <p class="explain">医院重视建设素质高、医术精湛、医德医风好、结构合理的人才队伍，现拥有中高级职称23人，并每年有计划选送医务人员到省内外各大医院进修学习。同时，医院对学科建设和技术创新，大力引进和开展新技术、新项目高度重视，整体医疗水平逐渐提高，现设有内科、外科、妇产科、儿科、中医科、康复理疗科、耳鼻喉科、口腔科、公共卫生科、检验科、彩超室、放射科、心电图室、胃肠镜室等科室，承担开发区居民常见病的诊疗、急诊急救、预防接种、慢性病管理、孕产妇保健等工作。我院还设有体检科，承担开发区相关从业人员健康证办理，提供政府机关、企事业单位团体及个人、招工、入学、调职等体检服务。
        </p>
        <p class="show-img">
          <img src="../../../static/imgs/yiyuan.jpg" alt="">
        </p>
        <p class="explain">医院先后引进了德国西门子16层螺旋CT、岛津多功能X光数字拍片机（DR）、西门子ACUSON Antares彩超机、贝克曼全自动生化分析仪、Sysmex血凝仪、奥林巴斯电子胃肠镜等大型医疗设备，不仅为临床诊疗提供了坚实的后盾，也为广大患者提供了优质服务。医院始终坚持“以病人为中心、以质量为核心”的服务宗旨，以温馨的就医环境、精湛的医疗技术、优质的服务及合理的收费为开发区群众提供优质、高效、便捷的医疗服务！医院二期新综合大楼建设工程已于2017年1月3日正式奠基开工，工期约670天，拟建成一家总床位约300张、总建筑面积约32000平方米的二级甲等综合性医院。
        </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hospital',
  data () {
    return {}      
  },
  methods: {
  }
}
</script>
<style scoped lang="stylus">
.main
  background #ffffff
  min-height 100vh
  .content
      padding 0 20px
      .title
        position relative
        margin-bottom 100px
        padding 1px
        h4
          position absolute
          color #333333
          bottom 0 
          top 0
          left 5px
          z-index 2
        .line2
          position absolute
          width 145px
          height 18px
          bottom -38px
          left -3px
          opacity: 0.5
          border-radius 4px
          background #6C9BFE
      .explain
        line-height 48px
        // letter-spacing 1px
        text-indent 55px
        color #333333
      .show-img
        margin 23px 0
        img
          width 100%
      .bottom
        margin 23px 0 60px 0
        img
          width 100%
</style>