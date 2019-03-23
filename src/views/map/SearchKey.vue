<template>
  <div>
    <mt-search
      v-model="key"
      cancel-text="取消"
      placeholder="搜索"
    >
    </mt-search>
  </div>
</template>

<script>
export default {
  name: 'SearchKey',
  data () {
    return {
      key: ''
    }
  },
  mounted () {
    this.$toast('hello')
  }
}
</script>
<style scoped lang="stylus">
</style>

<style lang="stylus">
</style>

