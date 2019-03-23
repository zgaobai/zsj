import axios from '../plugins/axios'
import store from '../store'
// import { baseLinkUrl } from '@/tool/baseUrl'

const globalData = async function (to) {
  const meta = to.meta
  // 微信授权
  if (meta.needAuth && store.state.common.openId === '') { // 检索vuex是否有数据
    await new Promise(resolve => {
      let zsOpenId = localStorage.getItem('zsOpenId')
      if (zsOpenId) { // 检索存储在本地的数据
        store.commit('set_openId', zsOpenId)
        resolve()
      } else if (location.href.indexOf('code') !== -1) { // 返回url带有code
        let code = location.href.match(/code=(\S*)&/)[1] // 提取code
        axios.get(`http://zsht.bloomworks.cn/api/public/getOpenId?code=${code}`).then((res) => {
          store.commit('set_openId', JSON.parse(res.data.data))
          localStorage.setItem('zsOpenId', JSON.parse(res.data.data))
          // console.log(res)
          resolve()
        })
      } else {
        const path = encodeURIComponent('http://zszj.i-zhangzhougang.com' + '/#' + to.fullPath)
        window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxff3e830bc7057fb9&redirect_uri=${path}&response_type=code&scope=snsapi_userinfo&state=ok#wechat_redirect`
      }
    })
  }

  if (meta.needCommunity && !store.state.common.community.id) { // 需要社区信息并且vuex没有存储
    await new Promise((resolve) => {
      axios.get('/f/gzh/index/alloffice').then((res) => {
        store.commit('set_community', res[0])
        resolve()
      })
    })
  }

  // 获取用户头像和昵称，关键字为 needUserTag ，请确保已授权，即需要关键字 needAuth 为前提
  if (meta.needUserTag && !store.state.common.userInfo.openId) {
    await new Promise((resolve) => {
      axios.get(`/f/gzh/user/info?openId=${store.state.common.openId}`).then((res) => {
        store.commit('set_userInfo', res)
        // console.log(res)
        resolve()
      })
    })
  }
}

export {
  globalData
}