import Vue from 'vue'
import App from './App'
import '@/styles/global.less'

import router from '@/router'


new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')