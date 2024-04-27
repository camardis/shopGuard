// router/index.js

import { createRouter, createWebHistory } from 'vue-router'; // Import createRouter and createWebHistory from vue-router
import Home from '../views/Home.vue';
import Signup from '../views/Signup.vue';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import Product from '../views/products/Products.vue';

// Create a new router instance using createRouter function
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/products',
      name: 'Product',
      component: Product
    }
  ]
});

export default router;
