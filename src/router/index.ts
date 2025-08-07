import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Login from '@/views/login.vue'
import Layout from '@/views/layout.vue'
import MapView from '@/views/mapView/index.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/layout',
    name: 'layout',
    component: Layout,
    children:[
      {
        path: '/dataCenter',
        name: 'dataCenter', 
        component: () => import( '@/views/dataCenter/index.vue'),
        children:[
          {
            path: '/dataCenter/home',
            name: 'Home', 
            component: () => import( '@/views/dataCenter/components/Home/index.vue'),
          },
          {
            path: '/dataCenter/RoadLine',
            name: 'RoadLine', 
            component: () => import( '@/views/dataCenter/components/RoadLine/index.vue'),
          },
        ]
      },
      {
        path:'/mapview',
        name:'MapView',
        component:MapView,
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;
