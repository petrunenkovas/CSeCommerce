import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('../Layout/Base.vue'),
      children: [ 
        { path: '', component: () => import('../views/home/Products.vue') },
        { path: 'details/:idProduct', component: () => import('../views/home/Details.vue') },
        { path: 'cart', component: () => import('../views/home/Cart.vue') }
      ]
    },
    {
      path: '/login',
      component: () => import('../views/account/Login.vue')
    },
  ]
})
