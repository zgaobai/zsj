<template>
  <div class="mapIndex">
    <div class="search" @click="gotoPostion">
      <figure class="search-icon">
        <img src="../../../static/imgs/searchicon.png" width="100%">
      </figure>
      <span>查找附近美食、公交</span>
    </div>
    <div class="sort">
      <div 
        v-for="(item, index) in sortList" :key="index"
        class="sort-item"
        :class="'sort-item' + index"
        @click="click_sort(item)"
      >
        <figure class="sort-icon">
          <img :src="item.img" width="100%">
        </figure>
        <span>{{item.text}}</span>
      </div>
    </div>
    <div class="list">
      <div
        class="list-item"
        v-for="(item, index) in keys" :key="index"
        @click="click_list(item)"
      >
        <figure class="item-img">
          <img :src="item.img" width="100%">
        </figure>
        <div class="item-text">
          <div class="item-text-basic">
            <div class="text-tip">
              <p>{{item.tip}}<p>
              <figure class="tip-bg">
                <img :src="item.tipbg" width="100%">
              </figure>
            </div>
            <p class="text-key">附近{{item.key}}</p>
          </div>
          <p class="text-near"><span class="text-near-info">{{item.near}}</span> I {{item.dist}}米</p>
        </div>
        <figure class="right-icon">
          <img src="../../../static/imgs/right.png" width="100%">
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import { nearbySearch } from '@/tool/map'
import { baseLinkUrl } from '@/tool/baseUrl'
export default {
  name: 'MapIndex',
  data () {
    return {
      sortList: [
        {
          img: require('../../../static/imgs/mapicon01.png'),
          text: '商场购物',
          key: '商场',
          index: 6
        },
        {
          img: require('../../../static/imgs/mapicon02.png'),
          text: '特色景点',
          key: '景点',
          index: 2
        },
        {
          img: require('../../../static/imgs/mapicon03.png'),
          text: '公交站',
          key: '公交站',
          index: 4
        },
        {
          img: require('../../../static/imgs/mapicon04.png'),
          text: '停车场',
          key: '停车场',
          index: 6
        },
        {
          img: require('../../../static/imgs/mapicon05.png'),
          text: '医疗社康',
          key: '医疗',
          index: 6
        }
      ],
      keys: [
        // near: 附近店名，dist：距离多少米
        {
          id: 0,
          key: '饭店',
          tip: '吃得好',
          tipbg: require('../../../static/imgs/keys01.png'),
          near: '',
          dist: '',
          img: require('../../../static/imgs/mapimg02.png'),
          index: 1
        }, 
        {
          id: 1,
          key: '酒店',
          tip: '睡得香',
          tipbg: require('../../../static/imgs/keys02.png'),
          near: '',
          dist: '',
          img: require('../../../static/imgs/mapimg03.png'),
          index: 0
        },
        {
          id: 2,
          key: '景点',
          tip: '玩得嗨',
          tipbg: require('../../../static/imgs/keys03.png'),
          near: '',
          dist: '',
          img: require('../../../static/imgs/mapimg04.png'),
          index: 2
        }
      ]
    }
  },
  methods: {
    click_sort (item) {
      this.$router.push({
        path: '/map/navigation',
        query: {
          key: item.key,
          text: item.text,
          index: item.index
        }
      })
    },
    click_list (item) {
      this.$router.push({
        path: '/map/navigation',
        query: {
          key: item.key,
          index: item.index
        }
      })
    },
    gotoPostion () {
      const backurl = encodeURIComponent(baseLinkUrl + '/#/map?selectPosition=true')
      // const backurl = encodeURIComponent('http://192.168.1.120:8080/#/map?selectPosition=true')
      window.location.href = `https://apis.map.qq.com/tools/locpicker?search=1&type=0&backurl=${backurl}&key=2SHBZ-DDUCO-N75WO-SHEAB-4FVPF-WLFIW&referer=zs_app`
    }
  },
  mounted () {
    const u = navigator.userAgent;
    if(u.indexOf('Android') > -1 || u.indexOf('Linux') > -1){
      if (!this.$route.query.selectPosition) {
        this.gotoPostion()
      }
    }
    for (const item of this.keys) {
      nearbySearch({
        key: item.key
      }).then((res) => {
        item.near = res[0].name
        item.dist = res[0].dist
      }).catch(() => {
        this.$toast('无法搜索到数据')
      })
    }
  }
}
</script>
<style scoped lang="stylus">
span
  line-height inherit
.mapIndex
  background url(../../../static/imgs/map.png)
  background-size 100% 100%
  min-height 100vh
  overflow hidden
.search
  background-color #fff
  text-align center
  color #999999
  font-size:26px
  line-height 88px
  height 88px
  margin 20px 24px
  display flex
  justify-content center
  box-shadow: 1px 1px 16px 1px rgba(179, 179, 179, .23)
  .search-icon
    width 30px
    margin-top 4px
    margin-right 30px
.sort
  height 460px
  position relative
.sort-item
  width 231px
  height 105px
  background url(../../../static/imgs/mapimg01.png)
  background-size 100% 100%
  font-size 28px
  color #666666
  line-height 100px
  text-align center
  position absolute
  display flex
  justify-content center
  .sort-icon
    width 34px
    margin-right 10px
    margin-top 6px
.sort-item0
  top 24px
  left 446px
.sort-item1
  top 98px
  left 52px
.sort-item2
  top 210px
  left 268px
.sort-item3
  top 289px
  left 56px
.sort-item4
  top 296px
  left 473px
.list
  padding 0 24px
  .list-item  
    display flex
    align-items center
    padding 16px 42px
    background #fff
    border-radius 15px
    box-shadow: 4px 7px 21px 0px rgba(148, 148, 148, 0.25)
    margin-bottom 20px
    .item-img
      width 176px
      height 176px
      font-size 0
      flex none
    .item-text
      flex auto
      margin-left 10px
      .item-text-basic
        display flex
        align-items center
        line-height 40px
        .text-tip
          font-size 38px
          color #333333
          font-weight bold
          position relative
          padding-bottom 10px
          p
            position relative
            z-index 2
          .tip-bg
            position absolute
            left 0
            right 0
            bottom 0
        .text-key
          font-size: 24px
          color: #333333
          margin-left 70px
      .text-near
        font-size 24px
        color: #999999
        margin-top 32px
        vertical-align middle
        .text-near-info
          vertical-align middle
          max-width 230px
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
          display inline-block
          margin-top -8px
    .right-icon
      width 15px
</style>
