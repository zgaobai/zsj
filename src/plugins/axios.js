import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

axios.defaults.baseURL = 'http://zs.bloomworks.cn'

// axios.interceptors.response.use(function (res) {
//   let data
//   if (res.data.status === 'success') {
//     data = JSON.parse(res.data.data)
//   } else {
//     data = null
//   }
//   return data
// }, function (err) {
//   return Promise.reject(err)
// })


export default axios