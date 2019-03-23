import Vue from 'vue'
import 'es6-promise/auto'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import FastClick from 'fastclick'
import store from './store'
import './tool/globalHttp'
import './plugins/axios'
import './plugins/mint-ui'
import './plugins/ripple'
import VueJsonp from 'vue-jsonp'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueJsonp)
Vue.use(Vuex)
Vue.use(VueAwesomeSwiper, /* { default global options } */)

FastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
