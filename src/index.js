import '@/assets/css/index.less'
require('core-js')

const ArcWeUiV1 = {}

const install = function(Vue, config = {}) {
  Object.keys(ArcWeUiV1).forEach(key => {
    Vue.component(key, ArcWeUiV1[key])
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Object.assign(ArcWeUiV1, { install })
