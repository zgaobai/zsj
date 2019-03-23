import Vue from 'vue'
import Router from 'vue-router'
// import wx from './plugins/wxsdk'
import { globalData } from '@/tool/globalHttp'

Vue.use(Router)

const router =  new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  // meta字段所对应的效果：
  // index: 存在表示显示底部导航条，并且会按照数字大小进行左右滑动的切换效果
  // needCommunity: true  需要获取社区信息
  // needAuth: true 需要微信授权
  // needUserTag: true 需要获取用户信息
  routes: [
    {
      path: '/',
      component: () => import('./views/Index.vue')
    },
    {
      path: '/map',
      component: () => import('./views/map/Index')
    },
    {
      path: '/map/navigation',
      component: () => import('./views/map/Navigation')
    },
    {
      path: '/map/searchKey',
      component: () => import('./views/map/SearchKey')
    },
    {
      path: '/bus/index',
      redirect: '/bus/index/home',
      component: () => import('./views/bus/Index'),
      children: [
        {
          path: 'home',
          name: 'home',
          redirect: '/bus/index/home/recommend',
          component: () => import('./views/bus/home'),
          children: [
            {
              path: 'recommend',
              name: 'recommend',
              component: () => import('./views/bus/recommend')
            },
            {
              path: 'history',
              name: 'history',
              component: () => import('./views/bus/history'),
              meta: {
                needAuth: true
              }
            },
            {
              path: 'collection',
              name: 'collection',
              component: () => import('./views/bus/collection'),
              meta: {
                needAuth: true
              }
            },
          ]
        },
        {
          path: 'toline',
          name: 'toline',
          component: () => import('./views/bus/toline'),

        },
        {
          path: 'near',
          name: 'near',
          component: () => import('./views/bus/near')
        }
      ]
    },
    {
      path: '/bus/index/home/details',
      component: () => import('./views/bus/Details'),
      meta: {
        needAuth: true
      }
    },
    {
      path: '/bus/index/near/near_del',
      component: () => import('./views/bus/near_del.vue'),
    },
    // {
    //   path: '/bus/index/home/2',
    //   component: () => import('./views/bus/2')
    // },
    {
      path: '/bus/index/home/search',
      component: () => import('./views/bus/search'),
      meta: {
        needAuth: true
      }
    },
    {
      path: '/bus/index/home/search/stations',
      component: () => import('./views/bus/stations')
    },
    {
      path: '/Ship',
      redirect: '/Ship/Bus',
      component: () => import('./views/Ship/ShipBus'),
      children: [
        {
          path: 'Ship',
          component: () => import('./views/Ship/Ship'),
        },
        {
          path: 'Bus',
          component: () => import('./views/Ship/Bus'),
        }
      ]
    },
    {
      path: '/wait',
      name: 'wait',
      component: () => import('./views/Wait.vue')
    },
    {
      path: '/Register/Register',
      redirect: '/Register/Register/Hospital',
      component: () => import('./views/Register/Register'),
      children: [
        {
          path: 'Hospital',
          name: 'Hospital',
          component: () => import('./views/Register/Hospital'),
        },
        {
          path: 'Expert',
          name: 'Expert',
          component: () => import('./views/Register/Expert'),
        },
        {
          path: 'Guide',
          name: 'Guide',
          component: () => import('./views/Register/Guide')
        }
      ]
    },
    {
      path: '/Register/Register/Guide/Tel',
      name: 'Tel',
      component: () =>import('./views/Register/Tel.vue')
    },
    {
      path: '/Register/Register/Guide/Process',
      name: 'Process',
      component: () =>import('./views/Register/Process.vue')
    },
    {
      path: '/Register/Register/Guide/Rule',
      name: 'Rule',
      component: () =>import('./views/Register/Rule.vue')
    },
    {
      path: '/Register/Doctor',
      name: 'Doctor',
      component: () => import('./views/Register/Doctor.vue')
    },
    {
      path: '/SocialSecurity/Security',
      name: 'Security',
      component: () => import('./views/SocialSecurity/Security.vue')
    },
    {
      path: '/SocialSecurity/Recharge',
      name: 'Recharge',
      component: () => import('./views/SocialSecurity/Recharge.vue')
    },
    {
      path: '/SocialSecurity/SecurityAdd',
      component: () => import('./views/SocialSecurity/SecurityAdd'),
      children: [
        {
          path: '',
          alias: 'Visit',
          name: 'Visit',
          component: () => import('./views/SocialSecurity/Visit'),
          meta: {
            needAuth: true
          }
        },
        {
          path: 'Social',
          name: 'Social',
          component: () => import('./views/SocialSecurity/Social'),
          meta: {
            needAuth: true
          }
        },
      ]
    },
    {
      path: '/Personal/Center',
      name: 'Center',
      component: () => import('./views/Personal/Center')
    },
    {
      path: '/Personal/Center/Info/Order',
      name: 'Noorder',
      component: () => import('./views/Personal/Noorder')
    },
    {
      path: '/Personal/Center/Info/NoRechargeRe',
      name: 'NoRecharge',
      component: () => import('./views/Personal/NoRecharge')
    },
    {
      path: '/Personal/Center/Info/Vcard',
      name: 'Vcard',
      component: () => import('./views/Personal/Vcard'),
      meta: {
        needAuth: true
      }
    },
    {
      path: '/Personal/Center/Info/Novi',
      name: 'Novi',
      component: () => import('./views/Personal/Novi')
    },
    {
      path: '/Personal/Center/Info/Scard',
      name: 'Scard',
      component: () => import('./views/Personal/Scard'),
      meta: {
        needAuth: true
      }
    },
    {
      path: '/Personal/Center/why',
      name: 'why',
      component: () => import('./views/Personal/why')
    },
    {
      path: '/Personal/Center/Info/record',
      name: 'record',
      component: () => import('./views/Personal/record')
    },
    {
      path: '/Personal/Center/Info/Vrecord',
      name: 'Vrecord',
      component: () => import('./views/Personal/Vrecord')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('./views/easyCard/index')
    },
    {
      path: '/index/bindcard/deal',
      name: 'deal',
      component: () => import('./views/easyCard/deal')
    },
    {
      path: '/index/bindcard',
      name: 'bindcard',
      component: () => import('./views/easyCard/bindcard'),
      meta: {
        needAuth: true
      }
    },
    {
      path: '/index/search',
      name: 'search',
      component: () => import('./views/easyCard/search')
    },
    {
      path: '/index/uses',
      name: 'uses',
      component: () => import('./views/easyCard/uses')
    },
    {
      path: '/index/flow',
      name: 'flow',
      component: () => import('./views/easyCard/flow')
    },
    {
      path: '/emer',
      redirect: '/emer/rainfall',
      component: () => import('./views/emergency/emer'),
      children: [
        {
          path: 'rainfall',
          component: () => import('./views/emergency/rainfall'),
        },
        {
          path: 'reservoir',
          component: () => import('./views/emergency/reservoir')
        }
      ]
    },
    {
      path: '/env',
      name: 'env',
      component: () => import('./views/env/env')
    },
    {
      path: '/Education/edIndex',
      // name: 'edIndex',
      redirect: '/Education/edIndex/law',
      component: () => import('./views/Education/edIndex'),
      children: [
        {
          path: 'law',
          name: 'law',
          component: () => import('./views/Education/law'),
        },
        {
          path: 'survey',
          name: 'survey',
          component: () => import('./views/Education/survey'),
        }, 
      ]
    },
    {
      path: '/Education/index/contact',
      name: 'contact',
      component: () => import('./views/Education/contact'),
    },
    {
      path: '/Education/index/esDetails',
      name: 'esDetails',
      component: () => import('./views/Education/esDetails'),
    },
    {
      path: '/Education/index/score',
      name: 'score',
      component: () => import('./views/Education/score')
    },
    {
      path: '/Education/index/Multi',
      name: 'Multi',
      component: () => import('./views/Education/Multi'),
    },
    {
      path: '/Education/index/esDetails/artDet',
      name: 'artDet',
      component: () => import('./views/Education/artDet'),
    },
    {
      path: '/Education/index/esDetails/artOther',
      name: 'artOther',
      component: () => import('./views/Education/artOther'),
    },
    {
      path: '*',
      component: () => import('./views/Index.vue'),
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  globalData(to).then(() => { // 通过meta字段设置的行为，这该方法里面进行操作
    next()
  })
})

// router.afterEach(() => { // 微信签名
//   const url = location.href.split('#')[0]
//   wx.setWxConfig(url)
// })

export default router