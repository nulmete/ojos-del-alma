import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: () => import(/* webpackChunkName: "inicio" */ '@/views/Inicio.vue')
  },
  {
    path: '/proyectos',
    name: 'proyectos',
    component: () => import(/* webpackChunkName: "proyectos" */ '../views/Proyectos.vue')
  },
  {
    path: '/etapas',
    name: 'etapas',
    component: () => import(/* webpackChunkName: "etapas" */ '../views/Etapas.vue')
  },
  {
    path: '/nosotras',
    name: 'diseniadoras',
    component: () => import(/* webpackChunkName: "diseniadoras" */ '../views/Diseniadoras.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
