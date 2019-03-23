// 触摸波纹插件
import Vue from 'vue'
import VueTouchRipple from 'vue-touch-ripple'
import 'vue-touch-ripple/dist/vue-touch-ripple.css'

Vue.use(VueTouchRipple, {
  color: '#ccc',
  opacity: 0.2,
  speed: 2,
  transition: 'ease'
})

 /* 
 参数二：
 {
  // default global options
  color: '#fff',
  opacity: 0.3,
  speed: 1,
  transition: 'ease'
} 
*/