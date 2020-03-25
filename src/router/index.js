import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sewing from '../views/Sewing.vue'
import HospitalList from '../views/HospitalList.vue'
import HospitalInput from '../views/HospitalInput.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sewing-page',
    name: 'Sewing',
    component: Sewing
  },
  {
    path: '/hospital-list',
    name: 'HospitalList',
    component: HospitalList
  },
  {
    path: '/hospital-input',
    name: 'HospitalInput',
    component: HospitalInput
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router