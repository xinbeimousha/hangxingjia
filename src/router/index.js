import Vue from 'vue';
import Router from 'vue-router';

import Login from 'pages/Login/Login';
import Main from 'pages/Main/Main';
import Apply from 'pages/Apply/Apply';
import Book from 'pages/Book/Book';
import Trip from 'pages/Trip/Trip';
import Me from 'pages/Me/Me';
import PlaneSearch from 'pages/PlaneSearch/PlaneSearch';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/main',
      name: 'main',
      component: Main,
      redirect:'/main/book',
      children:[
        {
          path: 'apply',
          component: Apply
        },
        {
          path: 'book',
          component: Book
        },
        {
          path: 'trip',
          component: Trip
        },
        {
          path: 'me',
          component: Me
        }
      ]
    },
    {
      path: '/planeSearch',
      name:'planeSearch',
      component:PlaneSearch
    }
  ]
})
