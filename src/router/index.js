import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DeliveryView from '../views/DeliveryView.vue'
import DondeComerView from '../views/DondeComerView.vue'
import TakeAwayView from '../views/TakeAwayView.vue'
import ShopView from '../views/ShopView.vue'
import SearchResult from '../views/SearchResult.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/delivery',
    name: 'delivery',
    component: DeliveryView
  },
  {
    path: '/dondecomer',
    name: 'dondecomer',
    component: DondeComerView
  },
  {
    path: '/takeaway',
    name: 'takeaway',
    component: TakeAwayView
  },
  {
    path: '/shop/:id',
    name: 'shop',
    component: ShopView
  },
  {
    path: '/search/:search',
    name: 'search',
    component: SearchResult
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
