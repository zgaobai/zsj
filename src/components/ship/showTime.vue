<template>
  <div>
    <div class="dates" :class="{'dates-active': show}">
      <div
        v-for="(item, index) in nowDates" :key="'A' + index"
        class="item"
        :class="{'item-active': nowDatesActive === index}"
        v-show="!show"
      >
        {{item}}
      </div>
      <div
        v-for="(item, index) in allDates" :key="'B' + index"
        class="item"
        :class="{'item-active': allDatesActive === index}"
        v-show="show"
      >
        {{item}}
      </div>
    </div>
    <p class="all" @click="changeShow" v-if="allDates.length > 15">{{ show ? showList[1] : showList[0] }}</p>
  </div>
</template>

<script>
// import date from '@/../static/data/date'
export default {
  name: 'showTime',
  props: {
    allDates: Array,
  },
  data () {
    return {
      week: 0,
      now: 0,
      after: 0,
      before: 0,
      showList: ['展开全部','收起全部'],
      show: false,
    }
  },
  computed: {
    nowDates () {
      return this.allDates.slice(this.now - this.before, this.now + this.after)
    },
    nowDatesActive () {
      if (this.nowDates.length > 0) {
        let arr = []
        let nowUnit = 0
        let i = 0
        for (const key in this.nowDates) {
          if (this.nowDates.hasOwnProperty(key)) {
            arr = this.nowDates[key].split(':')
            nowUnit = this.changeUnit(arr[0], arr[1])
            if (nowUnit > this.now) {
              i = key
              break
            }
          }
        }
        return parseInt(i)
      }
    },
    allDatesActive () {
      if (this.allDates.length > 0) {
        let arr = this.allDates[0].split(':')
        let nowUnit = this.changeUnit(arr[0], arr[1])
        let i = 0
        for (const key in this.allDates) {
          if (this.allDates.hasOwnProperty(key)) {
            arr = this.allDates[key].split(':')
            nowUnit = this.changeUnit(arr[0], arr[1])
            if (nowUnit > this.now) {
              i = key
              break
            }
          }
        }
        return parseInt(i)
      }
    }
  },
  methods: {
    getWeek (){
      let date = new Date()
      this.week = date.getDay()
    },
    getNowDate () {
      let date = new Date()
      let h = date.getHours()
      let m = date.getMinutes()
      // 讲时间除以15转换为数字单位，首班的单位为27，末班的单位为this.B_X_Z_Date.length
      let now = this.changeUnit(h, m)
      this.now = now
      let length = this.allDates.length
      let before = now
      let after = length - now
      if (before < 7) {
        this.after = 15 - before
        this.before = before
      } else if (after < 7) {
        this.before = 15 - after
        this.after = after
      } else {
        this.before = 7
        this.after = 8
      }
    },
    changeUnit (h, m) {
      return h * 4 + Math.floor(m / 15) - 27
    },
    changeShow () {
      this.show = !this.show
    }
  },
  created (){
    this.getWeek()
    this.getNowDate()
  }
}
</script>

<style lang="stylus" scoped>
.dates
  display flex
  flex-flow row wrap
  overflow hidden
  .item
    text-align center
    width 20%
    flex none
    line-height 100px
    color #333
    font-size 30px
    position relative
  .item-active
    color #FF4A4A
  .item-active:after
    content: '最近'
    position absolute
    top 0
    left 0
    width 100%
    transform translateY(40px)
    font-size 22px
.all
  text-align center
  color #2B7FF3
  font-size 26px
  margin-top 20px
.dates-active
  height auto
</style>