import Vue from 'vue'
import Router from 'vue-router'
import ImgSlider from '@/components/ImgSlider'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ImgSlider',
      component: ImgSlider
    }
  ]
})
