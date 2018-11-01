import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'
import Home from './views/Home.vue'
import Seereview from './views/Seereview.vue'
import Writereview from './views/Writereview.vue'
import Addinstructor from './views/Addinstructor.vue'
import AddDropzone from './views/AddDropzone.vue'
import DzPage from './views/DzPage.vue'
import UserPage from './views/UserPage.vue'
import AddDropzone1 from './views/AddDropzone1.vue'


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
      component: Login,
      props: true
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
    {
      path: '/addinstructor',
      name: 'Addinstructor',
      component: Addinstructor,
    },
    {
      path: '/adddropzone',
      name: 'AddDropzone',
      component: AddDropzone,
    },
    {
      path: '/dzpage',
      name: 'dzpage',
      component: DzPage,
    },
    {
      path: '/AddDropzone1',
      name: 'AddDropzone1',
      component: AddDropzone1,
    },
    {
      path: '/users/:userName/',
      name: 'UserPage',
      component: UserPage,
      props: true
    },
  ]
})
