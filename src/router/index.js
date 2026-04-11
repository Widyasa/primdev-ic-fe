import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'
import ProductDetailView from '@/views/ProductDetailView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import CartView from '@/views/CartView.vue' 


// Definisi Routes: Mapping URL ke Component
const routes = [
  {
    path: '/',              // URL: <http://localhost:5173/>
    component: HomeView,    // Komponen yang akan ditampilkan
  },
  {
    path: '/product/:id',   // URL dinamis, contoh: /product/1
    component: ProductDetailView,
    props: true,            // Kirim route params sebagai props
  },
  {
    path: '/about',          // URL: <http://localhost:5173/about>
    component: AboutView,    // Komponen yang akan ditampilkan
  },
  {
    path: '/cart',           // URL: URL: <http://localhost:5173/cart>
    component: CartView,     // Komponen yang akan ditampilkan
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
