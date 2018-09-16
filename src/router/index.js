import Vue from 'vue';
import Router from 'vue-router';

import Login from 'pages/Login/Login';
import Main from 'pages/Main/Main';
import Apply from 'pages/Apply/Apply';
import Book from 'pages/Book/Book';
import Trip from 'pages/Trip/Trip';
import Trip1 from 'pages/Trip/Trip1';
import Me from 'pages/Me/Me';
import PlaneSearch from 'pages/PlaneSearch/PlaneSearch';
import DomeSearchResult from 'pages/DomeSearchResult/DomeSearchResult';
import DomeOrder from 'pages/DomeOrder/DomeOrder';
import OrderList from 'pages/OrderList/OrderList';
import OrderDetailDome from 'pages/OrderDetail/OrderDetailDome';
import OrderDetailInter from 'pages/OrderDetail/OrderDetailInter';
import Triping from 'pages/Triping/Triping';
import TripPlan from 'pages/TripPlan/TripPlan';
import Triped from 'pages/Triped/Triped';
import airportServer from 'pages/airportServer/airportServer'
import airportActive from 'pages/airportActive/airportActive'
import commonPage from 'pages/commonPage/commonPage'
import airportCustomer from 'pages/airportCustomer/airportCustomer'
import airportSearchResult from 'pages/airportSearchResult/airportSearchResult'
import airportSearchDetail from 'pages/airportSearchDetail/airportSearchDetail'
Vue.use(Router)


const router = new Router({
  routes: [{
      path: '/',
      name: 'index',
      redirect: '/login'
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
          name: 'mainBook',
          component: Book
        },
        {
          path: 'trip',
          component: Trip1,
          // redirect:'/main/trip/triping',
          // children: [{
          //     path: 'triping',
          //     // name: 'triping',
          //     component: Triping
          //   },
          //   {
          //     path: 'tripPlan',
          //     // name: 'tripPlan',
          //     component: TripPlan
          //   },
          //   {
          //     path: 'triped',
          //     // name: 'triped',
          //     component: Triped
          //   },
          // ]
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
      path: '/domeSearchResult/:id',
      name: 'domeSearchResult',
      component: DomeSearchResult,
      props: true
    },
    {
      path: '/domeOrder',
      name: 'domeOrder',
      component: DomeOrder
    },
    {
      path: '/order',
      name: 'order',
      component: OrderList,
      children: [
        {
        path: 'orderDetailDome/:detailId',
        name: 'orderDetailDome',
        component: OrderDetailDome,
        props: true
      },
      {
        path: 'orderDetailInter/:detailId/:orderId',
        name: 'orderDetailInter',
        component: OrderDetailInter,
        props: true
      }
    ]
    },
    {
      path: '/airportServer',
      // name: 'airportServer',
      component: airportServer
    },
    {
      path: '/airportActive',
      component: airportActive
    },
    {
      path: '/commonPage',
      name: 'commonPage',
      component: commonPage
    },
    {
      path: '/airportCustomer',
      // name:'aitportCustomer',
      component: airportCustomer
    },
    {
      path: '/airportSearchResult',
      name: 'airportSearchResult',
      component: airportSearchResult
    },
    {
      path: '/airportSearchDetail',
      name: 'airportSearchDetail',
      component: airportSearchDetail
    },
  ]
})
export default router;
