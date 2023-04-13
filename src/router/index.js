import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/what-we-do',
    name: 'What we do',
    component: () => import('../views/WhatWeDoView.vue'),
  },
  {
    path: '/digital-divide',
    name: 'Digital divide',
    component: () => import('../views/DigitalDivideView.vue'),
  },
  {
    path: '/get-involved',
    name: 'Get involved',
    component: () => import('../views/GetInvolvedView.vue'),
  },
  {
    path: '/our-network',
    name: 'Our network',
    component: () => import('../views/OurNetworkView.vue'),
  },
  {
    path: '/insights',
    name: 'Insights',
    component: () => import('../views/InsightsView.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
