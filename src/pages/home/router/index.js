import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../home.vue'
import menu1 from '../docker.vue'
import menu2 from '../vue.vue'
import menu3 from '../menu3.vue'
import menu4 from '../eleui.vue'
import socketio from '../socketio.vue'
import airtest from '../airtest.vue'
import jenkins from '../jenkins.vue'
import sqlcode from '../sqlcode.vue'
import axios from 'axios'
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'

Vue.use(VueRouter,axios,codemirror)

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
    path: '/menu1',
    name: 'menu1',
    component: menu1
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
    path: '/menu4',
    name: 'menu4',
    component: menu4
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
