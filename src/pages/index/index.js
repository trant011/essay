import Vue from 'vue'
import Index from './index.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import store from './vuex'
 
// Vue.config.productionTip = false
Vue.use(ElementUI) 
new Vue({
 router,

 render: h => h(Index)
}).$mount('#app')