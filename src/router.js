import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      redirect: '/zhuti'
    },
    {
      path: '/zhuti',
      name: 'zhuti',
      component: () => import('./views/ZhuTi'),
      children: [{
          path: 'shouye',
          component: () => import('./views/ShouYe'),
        },
        {
          path: 'yueke',
          component: () => import('./views/YueKe'),
        },
        {
          path: 'fuwu',
          component: () => import('./views/FuWu'),
        },
        {
          path: 'wode',
          component: () => import('./views/WoDe'),
        },
        {
          path: '/zhuti',
          redirect: '/zhuti/shouye'
        }
      ]
    },
    {
      path: '/denglu',
      name: 'denglu',
      component: () => import('./views/DengLu'),
    }
  ]
})