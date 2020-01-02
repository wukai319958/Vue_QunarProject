import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', // 访问根目录下时，路由到HelloWorld.vue文件
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
