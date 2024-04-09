import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/fontawesome'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'animate.css/animate.css'
// import {library} from '@fortawesome/fontawesome-svg-core'
// import {fasShoppingCart} from '@fortawesome/free-solid-svg-icons'

// library.add(fasShoppingCart)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
