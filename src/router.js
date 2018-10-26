import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'
import Home from './views/Home.vue'
import Seereview from './views/Seereview.vue'
import Writereview from './views/Writereview.vue'

Vue.use(Router)

export default new Router({
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
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/seereview',
      name: 'Seereview',
      component: Seereview
    },
    {
      path: '/writereview',
      name: 'Writereview',
      component: Writereview
    },
  ]
})
