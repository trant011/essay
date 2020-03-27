import Vue from 'vue'
import Home from './home.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import store from './vuex'

Vue.use(ElementUI) 
// Vue.config.productionTip = false
 
new Vue({
 router,

 render: h => h(Home)
}).$mount('#home')