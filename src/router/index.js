import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/pages/Login/Login';

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
    } 
  ]
})
