// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick' // 引入fastclick
import './assets/styles/reset.css'
import './assets/styles/border.css'

Vue.config.productionTip = false
fastClick.attach(document.body) // 绑定到document.body
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // ES6写法相当于ruuter:router
  components: { App }, // ES6写法相当于components:{App:App}
  template: '<App/>'
})
// 路由就是根据网址的不同返回不同的内容给用户
