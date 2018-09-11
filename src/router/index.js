import Vue from 'vue';
import Router from 'vue-router';

import Login from 'pages/Login/Login';
import Main from 'pages/Main/Main';
import Apply from 'pages/Apply/Apply';
import Book from 'pages/Book/Book';
import Trip from 'pages/Trip/Trip';
import Me from 'pages/Me/Me';
import PlaneSearch from 'pages/PlaneSearch/PlaneSearch';
import PlaneSearchResult from 'pages/PlaneSearchResult/PlaneSearchResult';
import Triping from 'pages/Triping/Triping';
import TripPlan from 'pages/TripPlan/TripPlan';
import Triped from 'pages/Triped/Triped';
import airportServer from 'pages/airportServer/airportServer'
import airportActive from 'pages/airportActive/airportActive'
import commonPage from 'pages/commonPage/commonPage'
import airportCustomer from 'pages/airportCustomer/airportCustomer'

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
              path: 'triping',
              // name: 'triping',
              component: Triping
            },
            {
              path: 'tripPlan',
              // name: 'tripPlan',
              component: TripPlan
            },
            {
              path: 'triped',
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
      component: PlaneSearch,
    },
    {
      path: '/planeSearchResult/:id',
      name:'planeSearchResult',
      component:PlaneSearchResult,
      props:true
    },
    {
      path: '/airportServer',
      // name: 'airportServer',
      component: airportServer
    },
    {
      path:'/airportActive',
      component:airportActive
    },
    {
      path:'/commonPage',
      name:'commonPage',
      component:commonPage
    },
    {
      path:'/airportCustomer',
      // name:'aitportCustomer',
      component:airportCustomer
    }
  ]
})
export default  router;