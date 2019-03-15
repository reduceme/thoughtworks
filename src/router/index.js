import Vue from 'vue'
import Router from 'vue-router'
const container = r => require.ensure([], () => r(require('../components/Container')), 'container')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'container',
      component: container
    }
  ]
})
