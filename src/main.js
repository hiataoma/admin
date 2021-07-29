import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import myPlugin from 'marvin_mahaitao_test_test'
Vue.config.productionTip = false

// Vue.use(myPlugin)

Vue.use(Element, { size: 'mini' })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
