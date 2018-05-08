import Vue from 'vue'
import Router from 'vue-router'
import Pay from '@/components/Pay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pay',
      component: Pay
    }
  ]
})
