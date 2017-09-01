import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Hello from '@/components/Hello'
import table from '../components/table'
import demo from '../components/demo'

Vue.use(Router)
Vue.use(ElementUI)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/wq',
      name: 'world',
      component: table
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    }
  ]
})
