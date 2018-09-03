import Vue from 'vue';
import Router from 'vue-router';

import Login from 'pages/Login/Login';
import Main from 'pages/Main/Main';
import Apply from 'pages/Apply/Apply';
import Book from 'pages/Book/Book';
import Trip from 'pages/Trip/Trip';
import Me from 'pages/Me/Me';
import PlaneSearch from 'pages/PlaneSearch/PlaneSearch';
import Triping from 'pages/Triping/Triping';
import TripPlan from 'pages/TripPlan/TripPlan';
import Triped from 'pages/Triped/Triped';

Vue.use(Router)


const router = new Router({
  routes: [
    {
      path: '/',
      name:'index',
      redirect:'/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/main',
      name: 'main',
      component: Main,
      redirect: '/main/book',
      children: [{
          path: 'apply',
          component: Apply
        },
        {
          path: 'book',
          name:'mainBook',
          component: Book
        },
        {
          path: 'trip',
          component: Trip,
          redirect:'/main/trip/triping',
          children: [{
              path: '/main/trip/triping',
              // name: 'triping',
              component: Triping
            },
            {
              path: '/main/trip/tripPlan',
              // name: 'tripPlan',
              component: TripPlan
            },
            {
              path: '/main/trip/triped',
              // name: 'triped',
              component: Triped
            },
          ]
        },
        {
          path: 'me',
          component: Me
        }
      ]
    },
    {
      path: '/planeSearch',
      name: 'planeSearch',
      component: PlaneSearch
    }
  ]
})
export default  router;