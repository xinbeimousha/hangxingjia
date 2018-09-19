import Vue from 'vue';
import Router from 'vue-router';

const Login = () => import('pages/Login/Login');
const Main = () => import('pages/Main/Main');
const Apply =() => import('pages/Apply/Apply');
const Book = () =>import('pages/Book/Book') ;
const Trip = () => import('pages/Trip/Trip');
const Me = () => import('pages/Me/Me') ;
const PlaneSearch = () => import('pages/PlaneSearch/PlaneSearch');
const DomeSearchResult = () => import('pages/DomeSearchResult/DomeSearchResult');
const DomeOrder = () => import('pages/DomeOrder/DomeOrder');
const OrderList = () => import('pages/OrderList/OrderList');
const OrderDetailDome = () => import('pages/OrderDetail/OrderDetailDome');
const OrderDetailInter = () => import('pages/OrderDetail/OrderDetailInter');
const airportServer = () => import('pages/airportServer/airportServer');
const airportActive = () => import('pages/airportActive/airportActive');
const commonPage = () => import('pages/commonPage/commonPage');
const airportCustomer = () => import('pages/airportCustomer/airportCustomer');
const airportSearchResult = () => import('pages/airportSearchResult/airportSearchResult');
const airportSearchDetail = () => import('pages/airportSearchDetail/airportSearchDetail');
const TripOrderList = () => import('pages/OrderList/TripOrderList');
const NotFound = () => import('pages/NotFound/NotFound');
const CityList = () => import('pages/CityList/CityList');
Vue.use(Router)


const router = new Router({
  routes: [{
      path: '/',
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
          component: Trip,
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
        name: 'orderDetailDome1',
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
    },{
      path: '/cityList/:id',
      name:'cityList',
      component:CityList,
      props: true
    },
    {
      path: '/TripOrderList',
      name: 'TripOrderList',
      component: TripOrderList,
      children:[
        {
        path: 'orderDetailDome/:detailId',
        name: 'orderDetailDome2',
        component: OrderDetailDome,
        props: true
        }
      ]
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
