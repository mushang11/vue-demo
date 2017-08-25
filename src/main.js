// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  VueResource,
  template: '<App/>',
  components: { App }
})
this.$http.interceptors.push((resquest, next) => {
  // 发送请求前的处理
  next((response) => {
     // 根据请求的状态 response 参数会返回给 successCallback 或者 errorCallBack
    return response
  })
})
