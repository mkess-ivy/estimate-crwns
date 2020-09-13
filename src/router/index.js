import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/custom-proposal',
    name: 'Custom Proposals',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "custom-proposal" */ '../views/custom-proposal.vue')
  },
  {
    path: '/tier1',
    name: 'Tier 1 Packages',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "tier1" */ '../views/tier1.vue')
  },
  {
    path: '/tier2',
    name: 'Tier 2 Packages',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "tier2" */ '../views/tier2.vue')
  },
  {
    path: '/brand-mgmt',
    name: 'Brand Management',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "brand-mgmt" */ '../views/brand-mgmt.vue')
  },
  {
    path: '/brand-foundation',
    name: 'Brand Foundation',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "brand-foundation" */ '../views/brand-foundation.vue')
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  mode: 'history',
  routes
})

export default router
