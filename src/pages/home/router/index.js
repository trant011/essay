import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../home.vue'
// import menu1 from '../docker.vue'
// import menu2 from '../vue.vue'
// import menu3 from '../menu3.vue'
// import menu4 from '../eleui.vue'
// import socketio from '../socketio.vue'
// import airtest from '../airtest.vue'
// import jenkins from '../jenkins.vue'
// import sqlcode from '../sqlcode.vue'
// import apitest from '../apitest.vue'
// import selenium from '../selenium.vue'
import axios from 'axios'
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'

Vue.use(VueRouter,axios,codemirror)

const home = r => require.ensure([], () => r(require('../home.vue')), 'home')
const docker = r => require.ensure([], () => r(require('../docker.vue')), 'docker')
const menu2 = r => require.ensure([], () => r(require('../vue.vue')), 'menu2')
const menu3 = r => require.ensure([], () => r(require('../menu3.vue')), 'menu3')
const eleui = r => require.ensure([], () => r(require('../eleui.vue')), 'eleui')
const socketio = r => require.ensure([], () => r(require('../socketio.vue')), 'socketio')
const airtest = r => require.ensure([], () => r(require('../airtest.vue')), 'airtest')
const jenkins = r => require.ensure([], () => r(require('../jenkins.vue')), 'jenkins')
const sqlcode = r => require.ensure([], () => r(require('../sqlcode.vue')), 'sqlcode')
const apitest = r => require.ensure([], () => r(require('../apitest.vue')), 'apitest')
const selenium = r => require.ensure([], () => r(require('../selenium.vue')), 'selenium')
const mysql = r => require.ensure([], () => r(require('../mysql.vue')), 'mysql')
const routes = [
	
 //  {
 //    path: '/',
 //    // name: 'home',
 //    // component: Home,
	// redirect:'/home',
	
 //  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/docker',
    name: 'docker',
    component: docker
  },
  {
    path: '/menu2',
    name: 'menu2',
    component: menu2
  },
  {
    path: '/menu3',
    name: 'menu3',
    component: menu3
  },
  {
    path: '/eleui',
    name: 'eleui',
    component: eleui
  },
  {
    path: '/socketio',
    name: 'socketio',
    component: socketio
  },
  {
    path: '/airtest',
    name: 'airtest',
    component: airtest
  },
  {
    path: '/jenkins',
    name: 'jenkins',
    component: jenkins
  },
  {
    path: '/sqlcode',
    name: 'sqlcode',
    component: sqlcode
  },
  {
    path: '/apitest',
    name: 'apitest',
    component: apitest
  },
  {
    path: '/selenium',
    name: 'selenium',
    component: selenium
  },
  {
    path: '/mysql',
    name: 'mysql',
    component: mysql
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
	// mode:'history',
  routes
})

export default router
