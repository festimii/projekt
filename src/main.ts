import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)

import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../src/assets/main.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

Vue.component('Navbar', require('./components/Navbar.vue').default);
import PortalVue from 'portal-vue';
Vue.use(PortalVue);