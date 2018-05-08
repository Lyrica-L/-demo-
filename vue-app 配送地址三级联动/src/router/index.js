import Vue from 'vue'
import Router from 'vue-router'
import DeliverAddress from '@/components/DeliverAddress'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DeliverAddress',
      component: DeliverAddress
    }
  ]
})
