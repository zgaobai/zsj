<template>
  <div class="main">
    <div class="head">
        <div class="head-box">
            <figure>
                <img src="../../../static/imgs/rule1.png" alt="" width="100%">
            </figure>
            <p class="head-box-title">1、预检分诊处设配配备</p> 
        </div>
        <ul>
            <li>1.“发热病人预检分诊处”标识</li>
            <li>2.红外人体表面温度快速筛查仪</li>
            <li>3.一次性外科口罩</li>
            <li>4.发热病人预检分诊登记本</li>
            <li>5.快速手消毒剂</li>
        </ul>
    </div>
    <div class="head">
        <div class="head-box">
            <figure>
                <img src="../../../static/imgs/rule2.png" alt="" width="100%">
            </figure>
            <p class="head-box-title">2、预检分诊处人员配备</p> 
        </div>
        <ul type="1">
            <li>预检分诊处人员应经过专门培训，且有丰富工作经验的医护人员承担。</li>
        </ul>
    </div>
    <div class="head">
        <div class="head-box">
            <figure>
                <img src="../../../static/imgs/rule3.png" alt="" width="100%">
            </figure>
            <p class="head-box-title">3、发热病人预检分诊处流程</p> 
        </div>
        <ul type="1">
            <li>1.门诊病人就诊前，首先到发热病人预检分诊处测量体温。</li>
            <li>2.“红外人体表面温度快速筛查仪”报警温度为37.5℃。若仪器报警，及时询问是否来自流感疫区、有无密切接触史等。若患者前7天内到过疫区或有密切接触史、有流感样症状（流涕、鼻塞、咽痛、咳嗽、头痛、肌痛、乏力、呕吐或腹泻），戴防护口罩，分诊至发热门诊就诊，并进行详细相关信息登记。若患者未到过疫区、无接触史、体温≥38℃、有流感样症状，戴防护口罩，分至发热门诊就诊，并进行详细相关信息登记。其他患者分诊到相关科室就诊。</li>
            <li>3.每次接触病人后立即进行手清洗和消毒，手消毒用快速手消毒剂消毒。</li>
            <li>4.发放H7N9流感预防宣传单，开展健康教育咨询。</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    name:'Rule',
    data () {
        return {

        }
    }
}
</script>

<style lang="stylus" scoped>
.main
  min-height 100vh
  background #ffffff
  .head
    padding-top 30px
    .head-box
        figure
            display inline-block
            margin 0 24px
            width 44px
            height 44px
            vertical-align middle
        .head-box-title
            display inline-block
            font-weight 800
            padding 13px 28px
            color #333
            font-size 30px
            background #ECF4FF
            border-radius 28px
    ul
      padding 0 44px 0 88px
      margin-top 28px
      li
        list-style-type none 
        margin-left 30px
        line-height 61px
        font-size 28px
        color #666666
</style>