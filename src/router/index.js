import Vue from 'vue';
import Router from 'vue-router';
import Login from 'pages/Login/Login';
import Main from 'pages/Main/Main';
import Book from 'pages/Book/Book';
import Me from 'pages/Me/Me';
import PlaneSearch from 'pages/PlaneTicketSearch/PlaneTicketSearch';
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
          path: 'book',
          component: Book
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
