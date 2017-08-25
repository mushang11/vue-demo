import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import table from '../components/table'

Vue.use(Router)

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
    }
  ]
})
