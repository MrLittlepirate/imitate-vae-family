import Vue from 'vue'
import Router from 'vue-router'

/* 使用路由 */
Vue.use(Router)

// 可以用inport引入单文件组件，也可以这样用require引入
const login = r => require.ensure([], () => r(require('@/page/login/index'), 'login'))

/** 定义路由 */
const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  }
]

export default new Router({
  routes
})
