import Vue from 'vue';
import Router from 'vue-router';

const Login = () => import('pages/Login/Login');
const Main = () => import('pages/Main/Main');
const Apply =() => import('pages/Apply/Apply');
const Book = () =>import('pages/Book/Book') ;
import Trip from 'pages/Trip/Trip';
import Trip1 from 'pages/Trip/Trip1';
const Me = () => import('pages/Me/Me') ;
const PlaneSearch = () => import('pages/PlaneSearch/PlaneSearch');
const DomeSearchResult = () => import('pages/DomeSearchResult/DomeSearchResult');
const DomeOrder = () => import('pages/DomeOrder/DomeOrder');
const OrderList = () => import('pages/OrderList/OrderList');
const OrderDetailDome = () => import('pages/OrderDetail/OrderDetailDome');
const OrderDetailInter = () => import('pages/OrderDetail/OrderDetailInter');
import Triping from 'pages/Triping/Triping';
import TripPlan from 'pages/TripPlan/TripPlan';
import Triped from 'pages/Triped/Triped';
import airportServer from 'pages/airportServer/airportServer'
import airportActive from 'pages/airportActive/airportActive'
import commonPage from 'pages/commonPage/commonPage'
import airportCustomer from 'pages/airportCustomer/airportCustomer'
import airportSearchResult from 'pages/airportSearchResult/airportSearchResult'
import airportSearchDetail from 'pages/airportSearchDetail/airportSearchDetail'
const NotFound = () => import('pages/NotFound/NotFound');
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
    {
      path:'/error',
      name:'error',
      component:NotFound
    },
    {
      path: '*',
      redirect:'/error',
    }
  ]
})
export default router;
