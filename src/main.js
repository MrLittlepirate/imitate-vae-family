// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'   /** 引入vue-router */
import store from './store'     /** 引入vuex */

import ElementUI from 'element-ui';   /** 引入 Element */
import 'element-ui/lib/theme-chalk/index.css'; /** 引入Element样式文件 */

Vue.use(ElementUI); /** 使用 ElementUI*/

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,   /** 实例化vue-router */
  store,    /** 实例化vuex */
  components: { App },
  template: '<App/>'
})
