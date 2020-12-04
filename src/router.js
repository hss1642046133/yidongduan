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
      children: [
        //首页
        {
          path: 'shouye',
          component: () => import('./views/ShouYe'),
        },
        //约课
        {
          path: 'yueke',
          component: () => import('./views/YueKe'),
        },
        //服务
        {
          path: 'fuwu',
          component: () => import('./views/FuWu'),
        },
        //我的
        {
          path: 'wode',
          name: 'wode',
          component: () => import('./views/WoDe'),
        },
        {
          path: '/zhuti',
          redirect: '/zhuti/shouye'
        }
      ]
    },
    //登录
    {
      path: '/denglu',
      name: 'denglu',
      component: () => import('./views/DengLu'),
    },
    //设置
    {
      path: '/shezhi',
      name: 'shezhi',
      component: () => import('./views/SheZhi'),
    },
    //课程列表
    {
      path: '/kechengliebiao',
      name: 'kechengliebiao',
      component: () => import('./views/KeChengLieBiao'),
    }
  ]
})