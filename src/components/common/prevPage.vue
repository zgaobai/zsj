<template>
  <div>
    <svg class="icon return-icon" aria-hidden="true" @click="routerBack()">
      <use xlink:href="#icon-fanhui"></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'PrevPageIcon',
  methods: {
    routerBack () {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped lang="stylus">
.return-icon
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  padding 10px
</style>
