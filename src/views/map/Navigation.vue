<template>
  <div class="navi">
    <transition name="header">
      <!-- 测试 -->
      <!-- <a
        v-show="!overlayShow"
        class="header"
        href="https://apis.map.qq.com/tools/locpicker?search=1&type=0&backurl=http://192.168.1.120:8081/map/navigation&key=ZU2BZ-HUKKU-PUNV3-B26M6-BOVOQ-H5F4F&referer=xfyj-app">
        <figure class="header-icon">
          <img src="../../../static/imgs/location.png" width="100%">
        </figure>
        <p class="header-text">{{addr}}</p>
      </a> -->
      <div
        v-show="!overlayShow"
        class="header"
        @click="gotoPostion"
      >
        <figure class="header-icon">
          <img src="../../../static/imgs/location.png" width="100%">
        </figure>
        <p class="header-text">{{addr}}</p>
      </div>
    </transition>
    <!-- 地图 -->
    <div class="container-wrap">
      <div id="container"></div>
    </div>
    <!-- 点击地图标记显示覆盖物 -->
    <div v-if="overlayShow" :style="overlayStyle" class="overlay">
      <h3 class="overlay-title">{{search_list[chosen_marker].name}}</h3>
      <a 
        class="overlay-contact"
        :href="'tel:' + search_list[chosen_marker].phone">
        <figure class="overlay-contact-icon">
          <img src="../../../static/imgs/phone.png" width="100%">
        </figure>
        <span class="overlay-contact-text" v-if="search_list[chosen_marker].phone.length > 2">{{search_list[chosen_marker].phone}}</span>
        <span class="overlay-contact-text" v-else>暂无号码</span>
      </a>
    </div>
    <!-- 搜索内容 -->
    <div @click="overlayShow = false">
      <div class="nav">
        <div class="nav-ripple" v-for="(item, index) in sort" :key="index">
          <div
            class="nav-item"
            @click="search(item, index)"
            v-if="sortLastShow !== index"
          >
            <p :class="{'sort-active': sort_active === index}">{{item.text}}</p>
            <div class="active-line" v-show="sort_active === index"></div>
          </div>
        </div>
      </div>
      <!-- 等待加载 -->
      <!-- <transition name="loading">
        <div class="loading" v-show="lodingShow">
          <mt-spinner type="triple-bounce" color="#2B7FF3" :size="20"></mt-spinner>
        </div>
      </transition> -->
      <div 
        class="search-content"
      >
        <div class="content-ripple" v-for="(item, index) in search_list" :key="index">
          <dir 
            class="search-item"
            @click="setMapscenter(item.latLng, index)"
          >
            <div class="item-text">
              <p class="item-name">{{item.name}}</p>
              <p class="item-dist">
                <span>{{item.dist}}公里</span>
                <span class="item-dist-addr">{{item.address}}</span>
              </p>
            </div>
            <a 
              :href="'tel:' + item.phone" 
              class="item-phone"
              v-if="item.phone.length > 2"
            >
              <figure class="item-phone-icon">
                <img src="../../../static/imgs/navi01.png" width="100%">
              </figure>
              <p>电话</p>
            </a>
            <div class="item-nav" @click="click_nav(item)">
              <figure class="item-nav-icon">
                <img src="../../../static/imgs/navi02.png" width="100%">
              </figure>
              <p>导航</p>
            </div>
          </dir>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import qq from 'qq'
import { nearbySearch } from '@/tool/map'
import { baseLinkUrl } from '@/tool/baseUrl'
const geolocation = new qq.maps.Geolocation("2SHBZ-DDUCO-N75WO-SHEAB-4FVPF-WLFIW", "zs_app")

export default {
  name: 'Map',
  data () {
    return {
      sort: [
        {
          id: 0,
          key: '酒店/旅馆',
          text: '酒店/旅馆'
        },
        {
          id: 1,
          key: '饭店',
          text: '饭店'
        },
        {
          id: 2,
          key: '景点',
          text: '景点'
        },
        {
          id: 3,
          key: '超市',
          text: '超市'
        },
        {
          id: 4,
          key: '公交站',
          text: '公交'
        },
        {
          id: 5,
          key: '码头',
          text: '轮船'
        },
        // 预留搜索
        {
          id: 6,
          key: '',
          text: ''
        }
      ],
      sortLastShow: 6,
      sort_active: 2,
      addr: '我的位置',
      search_list: [],
      map: {},
      markersArray: [],
      overlayShow: false,
      overlayStyle: {
        top: 0,
        left: 0
      },
      chosen_marker: 0,
      lodingShow: false
    }
  },
  methods: {
    gotoPostion () {
      const backurl = encodeURIComponent(baseLinkUrl + '/#/map/navigation')
      window.location.href = `https://apis.map.qq.com/tools/locpicker?search=1&type=0&backurl=${backurl}&key=2SHBZ-DDUCO-N75WO-SHEAB-4FVPF-WLFIW&referer=zs_app`
    },
    // 设置地图中心点
    setMapscenter (latlng, index) {
      this.map.setCenter(latlng)
      // 清空图标弹跳
      for (const key in this.markersArray) {
        if (this.markersArray.hasOwnProperty(key)) {
          this.markersArray[key].setAnimation(null)
        }
      }
      // 设置当前图标弹跳
      this.markersArray[index].setAnimation(qq.maps.MarkerAnimation.BOUNCE)
    },
    // 前往导航组件
    click_nav (item) {
      this.nowLocation().then((res) => {
        let url = `https://apis.map.qq.com/tools/routeplan/eword=${item.address}&epointx=${item.latLng.lat}&epointy=${item.latLng.lng}&spointx=${res.lat}&spointy=${res.lng}?back=1&backurl=http://192.168.30.5:8080/map/navigation&referer=zs_app&key=2SHBZ-DDUCO-N75WO-SHEAB-4FVPF-WLFIW`
        window.location.href = url
      }).catch(() => {
        this.$toast('导航失败')
      })
    },
    // 初始化地图
    initMap () {
      this.nowLocation().then((res) => {
        this.map = new qq.maps.Map(document.getElementById('container'), {
          center: res,
          zoom: 13,
          mapTypeControl: false,
          zoomControl: false,
          mapStyleId: 'style1'
        })
        // 拖动地图时显示头部 我的位置
        const This = this
        qq.maps.event.addListener(this.map, 'dragstart', function() {
          This.overlayShow = false
        })
      })
    },
    // 获取目前定位
    nowLocation () {
      let query = this.$route.query
      let lat, lng
      return new Promise(resolve => {
        // 用户选取了地址
        if (query.latng && query.latng !== '') {
          let latng = query.latng.split(',')
          lat = latng[0]
          lng = latng[1]
          // 设置展示地址字段
          this.addr = query.addr
          resolve(new qq.maps.LatLng(lat, lng))
        } else {
          // 否则用自身定位
          geolocation.getLocation(function (res) {
          // 设置展示地址字段
            this.addr = res.addr
            resolve(new qq.maps.LatLng(res.lat, res.lng))
          })
        }
      })
    },
    // 绘制图标
    marker (arr) {
      // 删除已存在图标
      if (this.markersArray) {
        for (const i in this.markersArray) {
          this.markersArray[i].setMap(null)
        }
        this.markersArray.length = 0
      }
      const icon = new qq.maps.MarkerImage(require('../../../static/imgs/marker.png'))
      // 进行描绘
      for (const key in arr) {
        if (arr.hasOwnProperty(key)) {
          let marker = new qq.maps.Marker({
            icon: icon,
            map: this.map,
            position: arr[key].latLng,
            setClickable: true
          })
          // 标记，方便点击图标判断是哪个数据，从而生成覆盖物
          marker.key = key
          this.markersArray.push(marker)
          // 监听图标点击事件
          const This = this
          qq.maps.event.addListener(marker, 'click', function(res) {
            // 设置当前点击的标记下标
            This.chosen_marker = parseInt(res.target.key)
            // 显示覆盖物，调整定位
            This.overlayShow = true
            This.overlayStyle.left = res.pixel.x + 'px'
            This.overlayStyle.top = res.pixel.y - 28 + 'px'
            // 停止所有标记动画
            for (const key in This.markersArray) {
              if (This.markersArray.hasOwnProperty(key)) {
                This.markersArray[key].setAnimation(null)
              }
            }
          })
        }
      }
    },
    // 搜索附近
    search (item, index) {
      this.lodingShow = true
      this.sort_active = parseInt(index)
      // 如果不在已有导航列表
      if (index === 6) {
        this.sortLastShow = true
        this.sort[index].key = item.key
        this.sort[index].text = item.text
      }
      this.nowLocation().then((res) => {
        nearbySearch({
          key: item.key,
          latlng: res
        }).then((res) => {
          // 冒泡排序，根据距离由近到远排序
          for (let i = 0; i < res.length - 1; i++) {
            for (let j = i + 1; j < res.length; j++) {
              if (res[i].dist > res[j].dist) {
                [res[i], res[j]] = [res[j], res[i]]
              }
            }
          }
          // 过滤数组，距离单位由米改为公里
          res.map((v) => {
            v.dist = (v.dist / 1000).toFixed(1)
          })
          this.search_list = res
          // 描绘图标
          this.marker(res)
          this.lodingShow = false
        }).catch(() => {
          this.$toast('无法搜索到数据')
          this.lodingShow = false
        })
      })
    }
  },
  mounted () {
    this.initMap()
    if (this.$route.query.key) {
      this.search({
        key: this.$route.query.key,
        text: this.$route.query.text
      }, this.$route.query.index)
    } else {
      // 默认景点
      this.search(this.sort[2], 2)
    }
  }
}
</script>
<style scoped lang="stylus">
.navi
  background-color #fff
.header
  position absolute
  top 16px
  left 24px
  right 24px
  background #ffffff
  z-index 9
  display flex
  vertical-align middle
  line-height 92px
  padding-left 50px
  box-shadow:0px 1px 8px 1px rgba(191,191,191,0.16)
  .header-icon
    width 23px
  .header-text
    font-size 26px
    color #999999
    margin-left 26px
.container-wrap
  height 44vh
  overflow hidden
#container
  width 100%
  height 50vh
.nav
  height 76px
  display flex
  flex-flow row nowrap
  overflow-x scroll
  border-bottom 1px solid #f8f8f8
  .nav-ripple
    order 2
  .nav-ripple:last-child
    order 1
  .nav-item
    line-height 76px
    padding 0 28px
    flex none
    font-size 28px
    color #999999
.nav::-webkit-scrollbar 
  display:none
.search-content
  height 49vh
  overflow-y scroll
  .search-item
    display flex
    padding 34px 42px 34px 32px
    border-bottom 1px solid #f8f8f8
    height 174px
    .item-text
      flex auto
      padding-top 8px
      .item-name
        font-weight bold
        color #333333
        font-size 34px
        max-width 480px
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
      .item-dist
        font-size 26px
        color #999999
        span
          vertical-align middle
        .item-dist-addr
          display inline-block
          max-width 330px
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
          margin-left 24px
    .item-phone
    .item-nav
      flex none
      font-size 26px
      color #2B7FF3
      text-align center
      .item-phone-icon
      .item-nav-icon
        width 50px
        height 50px
        margin 0 auto
    .item-nav
      margin-left 64px
    .item-text
    .item-phone
    .item-nav
      display flex
      flex-flow column nowrap
      justify-content space-between
.sort-active
  color #2B7FF3
.active-line
  width 44px
  height 4px
  background #2B7FF3
  margin -4px auto 0
.overlay
  position absolute
  top 0
  left 0
  transform translate(-50%, -100%)
  width 373px
  height 181px
  background url('../../../static/imgs/overlay.png') no-repeat
  background-size 100%
  padding 12px 16px
  .overlay-title
    max-width 100%
    line-height 78px
    height 78px
    color #fff
    font-size 30px
    overflow hidden
    text-overflow ellipsis
    white-space nowrap
    padding 0 20px
  .overlay-contact
    line-height 68px
    height 68px
    display flex
    padding-left 24px
    .overlay-contact-icon
      width 28px
      height 28px
      margin-top 2px
    .overlay-contact-text
      color #333
      font-size 26px
      margin-left 18px
      overflow: hidden
      text-overflow: ellipsis
      white-space: nowrap
.loading
  display flex
  justify-content center
  padding-top 10px
  height 60px
.header-enter-active, .header-leave-active {
  transition all .2s linear
}
.header-enter, .header-leave-to {
  transform translateY(-10vh)
}
.loading-enter-active, .loading-leave-active {
  transition all .3s linear
}
.loading-enter, .loading-leave-to {
  height 0
  opacity 0
  transform translateY(-20px)
}
</style>

<style lang="stylus">
.nav-ripple
  flex none
.content-ripple
  width 100%
</style>
