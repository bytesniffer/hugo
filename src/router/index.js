import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import movie from '@/components/movie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/movie',
      name: 'movie',
      component: movie
    }
  ]
})
