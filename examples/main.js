// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/base.less'

import ArcWeUIV1 from '@/index.js'
import * as common from '$demo/assets/js/common'
import * as codeSnippet from '$demo/assets/js/codesnippet'

Vue.use(ArcWeUIV1)
Vue.config.productionTip = false

window.bus = new Vue()
window.Vue = Vue
window.TyCommon = common
window.CodeSnippet = codeSnippet

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
