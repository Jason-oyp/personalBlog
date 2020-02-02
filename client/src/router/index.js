import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/page/1'
  },
  {
    path: '/page/:id',
    name: 'home',
    component: Home,

  },
  {
    path: '/tag/:tagName/:id',
    name: 'tag',
    component: Home
  },
  {
    path: '/s',
    name: 'search',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/comments',
    name: 'comments',
    component: () => import('../views/Comments')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('../views/Detail')
  },
  {
    path: '*',
    name: 'error',
    component:()=>import('../views/Error')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
