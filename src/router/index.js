import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: function () {
      return import('../views/HomeView.vue')
    }
  },
  {
    path: '/search',
    name: 'SearchViwe',
    component: function () {
      return import('../views/SearchView.vue')
    }
  },
  {
    path: '/mybook',
    name: 'mybook',
    component: function () {
      return import('../views/MybookView.vue')
    }
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
