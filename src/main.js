import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import axios from 'axios';
import router from './router'
import './plugins/iview.js'

//Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
