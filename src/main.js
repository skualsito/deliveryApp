import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css' //Vuesax styles
import '@mdi/font/css/materialdesignicons.css';
Vue.use(Vuesax, {
  colors: {
    primary:'rgb(145, 76, 142)'
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
