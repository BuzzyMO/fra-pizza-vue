import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Auth from '../views/Auth.vue'
import SignUp from '../views/SignUp.vue'
import Order from '../views/Order.vue'
import AdminIngredients from '../views/AdminIngredients.vue'
import AdminPizzerias from '../views/AdminPizzerias.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/login',
    name: 'Auth',
    component: Auth 
  },

  {
    path: '/registration',
    name: 'SignUp',
    component: SignUp
  },

  {
    path: '/order',
    name: 'order',
    component: Order
  },

  {
    path: '/admin/ingredients',
    name: 'ingredients',
    component: AdminIngredients
  },

  {
    path: '/admin/pizzerias',
    name: 'pizzerias',
    component: AdminPizzerias
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
