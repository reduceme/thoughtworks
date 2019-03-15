import Vue from 'vue'
import Router from 'vue-router'
const container = r => require.ensure([], () => r(require('../page/Container')), 'container')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'container',
      component: container,
      redirect: '/agent',
      children: [
        {
          path: '/dashboard',
          name: 'DASHBOARD',
          component: container,
          children: [],
          icon: 'icon-dashboard'
        },
        {
          path: '/agent',
          name: 'AGENT',
          component: container,
          children: [],
          icon: 'icon-sitemap'
        },
        {
          path: '/my-cruise',
          name: 'MY CRUISE',
          component: container,
          children: [],
          icon: 'icon-boat'
        },
        {
          path: '/help',
          name: 'HELP',
          component: container,
          children: [],
          icon: 'icon-life-bouy'
        }
      ]
    }
  ]
})
