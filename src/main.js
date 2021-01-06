import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//导入axios
import axios from '@/api/http';
//需要将对应的内容挂载到vue的原型上，(后续每次在使用的时候不必每次import)
Vue.prototype.$http = axios;


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
