import Vue from 'vue'
import Router from 'vue-router'
import ShoppingCart from '@/components/ShoppingCart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShoppingCart',
      component: ShoppingCart
    }
  ]
})
