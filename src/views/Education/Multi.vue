<template>
  <div>
    <MultiGraph :list='imgText' :view='4' :column="2" size="mid"></MultiGraph>
  </div>
</template>
<script>
// 引入swiper相关组件
export default {
  name: "Multi",
  components: {
    MultiGraph: () => import('../../components/common/MultiGraph')
  },
  data() {
    return {
      imgText: [
        {
          id: "1",
          funtionUrl: "/Education/index/contact",
          imageUrl: require("../../../static/imgs/touxiang2.png"),
          name: "通知公告通知公告通知公告"
        },
        {
          id: "2",
          funtionUrl: "/Education/index/esDetails",
          imageUrl: require("../../../static/imgs/touxiang2.png"),
          name: "法律法规"
        },
        {
          id: "3",
          funtionUrl: "/Education/index/esDetails",
          imageUrl: require("../../../static/imgs/touxiang2.png"),
          name: "招生信息"
        },
        {
          id: "4",
          funtionUrl: "/Education/index/esDetails",
          imageUrl: require("../../../static/imgs/touxiang2.png"),
          name: "安全管理"
        },
        {
          id: "5",
          funtionUrl: "/Education/index/contact",
          imageUrl: require("../../../static/imgs/touxiang2.png"),
          name: "教学教研"
        },
        {
          id: "6",
          funtionUrl: "/Education/index/esDetails",
          imageUrl: require("../../../static/imgs/touxiang2.png"),
          name: "教育督导"
        },
        {
          id: "7",
          funtionUrl: "/Education/index/score",
          imageUrl: require("../../../static/imgs/touxiang2.png"),
          name: "教育督导"
        },
        {
          id: "8",
          funtionUrl: "/Education/index/esDetails",
          imageUrl: require("../../../static/imgs/touxiang2.png"),
          name: "教育督导"
        },
        {
          id: "9",
          funtionUrl: "/Education/index/esDetails",
          imageUrl: require("../../../static/imgs/touxiang2.png"),
          name: "教育督导"
        },
        {
          id: "10",
          funtionUrl: "/Education/index/esDetails",
          imageUrl: require("../../../static/imgs/touxiang2.png"),
          name: "10督导"
        },
        {
          id: "11",
          funtionUrl: "/Education/index/esDetails",
          imageUrl: require("../../../static/imgs/touxiang2.png"),
          name: "最后督导"
        }
      ]
    };
  },
  methods: {
  
  },
};
</script>
<style lang="stylus" scoped="scoped">

</style>