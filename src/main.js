import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import axios from 'axios';
import router from './router'
import './plugins/iview.js'
import echarts from 'echarts'
import qs from	'qs'
import 'swiper/dist/css/swiper.css'

Vue.prototype.$echarts = echarts
Vue.prototype.qs = qs;
//Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
