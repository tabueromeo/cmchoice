import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: '/Cart',
      name: 'Cart name',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PanierView.vue')
    } ,
    {
      path: '/Cart/Checkout',
      name: 'Checkout name',
      component: () => import('../views/CheckoutView.vue')
    },
    {
      path: '/Cart/Checkout/Delivery',
      name: 'Delivery name',
      component: () => import('../views/DeliveryView.vue')
    },
  ]
})

export default router
