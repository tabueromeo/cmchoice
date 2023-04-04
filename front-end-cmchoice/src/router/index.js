import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/panier',
      name: 'panier',
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
    {
      path: '/Home/AddProduct',
      name: 'AddProduct name',
      component: () => import('../views/AddProductView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutWhoView.vue')
    },
  ]
})

export default router
