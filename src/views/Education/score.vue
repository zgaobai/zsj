<template>
  <!-- <div> -->
    <stars-score size="big"></stars-score>
  <!-- </div> -->
</template>

<script>
export default {
  name: 'score' ,
  components: {
    starsScore: () => import('../../components/common/stars')
  },
  data () {
    return {
    };
  },

}

</script>
<style lang='stylus' scoped>
</style>