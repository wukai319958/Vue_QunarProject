import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/', // 访问根目录下时，路由到Home.vue文件
    name: 'Home',
    component: Home
  },
  {
    path: '/city', // 访问根目录下时，路由到Home.vue文件
    name: 'City',
    component: City
  },
  {
    path: '/detail/:id', // 访问根目录下时，路由到Home.vue文件
    name: 'Deatail',
    component: Detail
  }]
})
