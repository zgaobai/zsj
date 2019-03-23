<template>
  <div class="main">
    <div class="title">各科室通讯录</div>
    <div class="content">
      <table width="100%" border="0" cellspacing="1" cellpadding="0">
        <th>科室名称</th>
        <th>电话</th>
        <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <td>{{item.name}}</td>
            <td>{{item.tel}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tel",
  data() {
    return {
        items: [
            { name: "急救电话", tel: "0596-6895120" },
            { name: "导诊电话", tel: "0596-6078107" },
            { name: "急诊护士站", tel: "0596-6078200" },
            { name: "住院部护士站", tel: "0596-6078217" },
            { name: "门诊妇产科", tel: "0596-6078206" },
            { name: "康复理疗科", tel: "0596-6078198" },
            { name: "口腔科", tel: "0596-6078201" },
            { name: "体检科", tel: "0596-6078207" },
            { name: "公卫科（预防接种室）", tel: "0596-6078212" },
            { name: "妇幼保健室", tel: "0596-6078219" },
            { name: "放射科", tel: "0596-6078203" },
            { name: "超声科", tel: "0596-6078211" },
            { name: "检验科", tel: "0596-6078210" },
            { name: "心电图室", tel: "0596-6078216" },
            { name: "药房", tel: "0596-6078202" },
            { name: "行政办公室", tel: "0596-6078106" },
            { name: "财务科", tel: "0596-6078109" },
            { name: "信息科", tel: "0596-6078209" },
            { name: "收费处", tel: "0596-6078205" }
        ]
    }
  }
};
</script>

<style lang="stylus" scoped>
.main
  min-height 100vh
  background #ffffff
  text-align center
  .title
    width 100%
    text-align center
    padding-top 50px
  .content
    width 100%
    padding 20px
    // position absolute
    // left 50%
    // top 50%
    // transform translate(-50%, -50%)
    table 
      background #CCC
      color #F00
      th 
        color #000
        line-height 50px
        background #FFF
      td 
        heigh 50px
        line-height 50px
        text-align center
        background #FFF
        color #000
</style>
