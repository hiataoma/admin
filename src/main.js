import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// 加载element组件
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css

import './icons' // icon

import './permission' // permission control

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
 if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

// import myPlugin from 'marvin_mahaitao_test_test'
Vue.config.productionTip = false

// Vue.use(myPlugin)

Vue.use(Element, { size: 'mini' })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
