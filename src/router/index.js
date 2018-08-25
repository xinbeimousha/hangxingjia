import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/pages/Login/Login';
import Main from '@/pages/Main/Main';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    }
  ]
})
