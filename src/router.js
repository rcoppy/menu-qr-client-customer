import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Login from './components/Login.vue'
import Secure from './views/Secure.vue'
import Register from './components/Register.vue'
import { CartShow, OrderConfirmation, OrderShow, OrdersIndex, OrderSummary, Payment, RestaurantShow, RestaurantsIndex, TablesIndex } from "@/components";

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/secure',
      name: 'secure',
      component: Secure,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/restaurants',
      name: 'restaurants_index',
      component: RestaurantsIndex
    },
    {
      path: '/restaurants/:id',
      name: 'restaurant_show',
      component: RestaurantShow
    },
    {
      path: '/restaurants/:id/tables',
      name: 'tables_index',
      component: TablesIndex
    },
    {
      path: '/init/:restaurant_id/:table_id',
      name: 'init_session',
      component: RestaurantsIndex
    },
    {
      path: '/cart',
      name: 'cart_show',
      component: CartShow
    },
    {
      path: '/payment',
      name: 'payment',
      component: Payment
    },
    {
      path: '/confirmation',
      name: 'confirmation',
      component: OrderConfirmation
    },
    {
      path: '/orders',
      name: 'orders_index',
      component: OrdersIndex,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/orders/:id',
      name: 'order_show',
      component: OrderShow,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/summary',
      name: 'summary',
      component: OrderSummary
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router