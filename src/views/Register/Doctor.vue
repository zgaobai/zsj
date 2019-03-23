<template>
    <div class="main">
            <div class="warp">
                <div class="box">
                    <div class="head">
                        <img src="../../../static/imgs/touxiang2.png" alt="">
                    </div>
                    <div class="text">
                        <p class="name">李飙</p>
                        <p>内科 | 副主任医师</p>
                    </div>
                </div>   
            </div>
            <div class="content-box">
                <div>
                    <p class="header">{{list1.part1.title}}</p>
                    <p class="content" v-for="(value, key) in list1.part1.content" :key="key">{{value}}</p>
                </div>
                <div>
                    <p class="header">{{list1.part2.title}}</p>
                    <p class="content" v-for="(value, key) in list1.part2.content" :key="key">{{value}}</p>
                </div>
            </div>  
    </div>
</template>

<script>
export default {
    name: 'Doctor',
    data () {
      return {
        list1: 
            {
                part1: {
                    title: '擅长',
                    content: ['麻醉胃肠镜检查及镜下治疗，消化系统常见病诊疗，擅长以中西医结合的办法治疗内科疑难杂症，尤其在萎缩性胃炎伴肠腺样化生、不典型增生，消化系统肿瘤等积累丰富经验。']
                },
                part2: {
                    title: '医师简介',
                    content: [
                        '麻醉胃肠镜检查及镜下治疗，消化系统常见病诊疗，擅长以中西医结合的办法治疗内科疑难杂症，尤其在萎缩性胃炎伴肠腺样化生、不典型增生，消化系统肿瘤等积累丰富经验。',
                        '福建医科大学临床医学专业毕业，本科学历，学士学位，福建省医学会消化分会会员、南平市医学会消化分会常委南平医学会肝病分会会员。曾在南京军区福州总医院、福建中医药大学、朱良春中医药研究所进修学习。在省级以上医疗刊物发表相关论文著作5篇，2006年主持的麻醉辅助下的胃镜检查术，获海峡职工创新博览会银奖。'
                     ]
                }
            }
        ,
      }
    },
    methods: {

    }
}
</script>

<style scoped lang="stylus">
.main
  min-height 100vh
  background-image: url('../../../static/imgs/bg.png')
  background-repeat no-repeat
  background-size 100% 270px
  overflow hidden
  .warp
    background #F7FAFF
    height 195px
    margin 76px 20px 0 20px
    border-radius 45px 45px 0 0
    .box
      .head
        float left
        overflow hidden
        width 110px
        height 110px
        margin 40px
        border-radius 50%
        box-shadow 0 0 15px gray
        img 
          width 100%
          height 100%
      .text
        float left
        margin-top 50px
        .name
          color #333333
          font-size 50px
          line-height 40px
          margin-bottom 25px 
  .content-box
    margin 0 20px 50px 20px
    .header
        margin 49px 0px 20px 26px
        line-height 70px
        font-size 34px
        color #333333
    .content
        background #F7FAFF
        padding 30px
        color #333333
        font-size 28px
        line-height 48px
</style>