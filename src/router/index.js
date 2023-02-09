import Vue from 'vue'
import Router from 'vue-router'

import Home from 'pages/HomePage'
import About from 'pages/AboutPage'

Vue.use(Router)

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

export default new Router({
  routes
})
