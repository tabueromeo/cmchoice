import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/panier',
      name: 'panier',
      component: () => import('../views/PanierView.vue')
    } ,
    {
      path: '/Cart/Checkout',
      name: 'Checkout name',
      component: () => import('../views/CheckoutView.vue') ,
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
      component: () => import('../views/AddProductView.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('../views/ShopView.vue')
    },
    {
      path: '/panier',
      name: 'panier',
      component: () => import('../views/PanierView.vue')
    },
    {
      path: '/favoris',
      name: 'favoris',
      component: () => import('../views/FavorisView.vue')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('../views/DetailView.vue'),
      props:true,
    },
  ]
})

export default router
