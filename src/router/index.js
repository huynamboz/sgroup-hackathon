import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('@/views/Dashboard.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/users',
    name: 'users',
    meta: { requiresAuth: true, roles: ['ADMIN'] },
    component: () => import('@/views/UserList.vue'),
  },
  {
    path: '/login',
    name: 'login',
    meta: { layout: 'empty' },
    component: () => import('@/views/auth/LoginPage.vue'),
  },
  {
    path: '/register',
    name: 'register',
    meta: { layout: 'empty' },
    component: () => import('@/views/auth/RegisterPage.vue'),
  },
  {
    path: '/update-profile',
    name: 'update-profile',
    component: () => import('@/views/auth/UpdateProfile.vue'),
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
