import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import login from './global/login'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(require('vue-cookies'))

Vue.config.productionTip = false

Vue.$cookies.config('5s')

Vue.prototype.$global = {
  user: {
    isLogin: false,
    name: ''
  }
}

Vue.mixin(login)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
