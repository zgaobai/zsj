import axios from '../plugins/axios'
const wx = require('weixin-js-sdk')

wx.setWxConfig = function(url) {
  url = encodeURIComponent(url)
  axios.get(`/api/wx/getJSAPITicket?useUrl=${url}`).then((res) => {
    const appId = 'wxff3e830bc7057fb9'
    const nonceStr = res.noncestr
    const signature = res.signature //签名
    const timestamp = res.timestamp //时间戳
    wx.config({
      // debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId, // 必填，公众号的唯一标识
      timestamp, // 必填，生成签名的时间戳
      nonceStr, // 必填，生成签名的随机串
      signature,// 必填，签名
      jsApiList: [ // 必填，需要使用的JS接口列表
        'JSAPI',
        'updateAppMessageShareData',
        'updateTimelineShareData',
        'onMenuShareAppMessage',
        'onMenuShareTimeline',
        'getLocation',
        'openLocation',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'startRecord',
        'stopRecord',
        'onVoiceRecordEnd',
        'playVoice',
        'pauseVoice',
        'stopVoice',
        'onVoicePlayEnd',
        'uploadVoice',
        'hideMenuItems',
        'translateVoice'
      ]
    })
    // 旧版本，有个图片上传ios回显的兼容问题，新版本有问题，先保留
    // wx.onMenuShareTimeline({
    //   title: '智慧怡锦', // 分享标题
    //   link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    // })
    // wx.onMenuShareAppMessage({
    //   title: '智慧怡锦', // 分享标题
    //   desc: '智慧怡锦', // 分享描述
    //   link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    // })
    // 新版本，写上再说
    // wx.updateAppMessageShareData({
    //   title: '智慧怡锦', // 分享标题
    //   desc: '智慧怡锦', // 分享描述
    //   link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    // })
    // wx.updateTimelineShareData({
    //   title: '智慧怡锦', // 分享标题
    //   desc: '智慧怡锦', // 分享描述
    //   link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    // })
    
  })
}

export default wx