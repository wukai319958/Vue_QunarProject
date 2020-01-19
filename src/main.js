// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick' // 引入fastclick
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/index.js'
import 'swiper/dist/css/swiper.css'
import 'styles/iconfont.css'
import 'styles/reset.css'
import 'styles/border.css'

Vue.config.productionTip = false
fastClick.attach(document.body) // 绑定到document.body
Vue.use(VueAwesomeSwiper /* {default global options} */)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // ES6写法相当于ruuter:router
  store,
  components: { App }, // ES6写法相当于components:{App:App}
  template: '<App/>'
})
// 路由就是根据网址的不同返回不同的内容给用户
