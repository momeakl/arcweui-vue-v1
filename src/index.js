import '@/assets/css/index.less'
import 'mint-ui/lib/style.css'
import 'static/clouds/style.css'
import Mint from 'mint-ui'
import LoadingToast from './components/loading-toast'
import TyImg from './components/ty-img'
import PeoperList from './components/peoper-list'

require('core-js')
const ArcWeUiV1 = {
  LoadingToast,
  TyImg,
  PeoperList
}

const install = function(Vue, config = {}) {
  Object.keys(ArcWeUiV1).forEach(key => {
    Vue.component(key, ArcWeUiV1[key])
  })
  Vue.use(Mint, {
    lazyload: {
      error: require('./assets/img/head.png'),
      loading: require('./assets/img/head.png')
    }
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Object.assign(ArcWeUiV1, { install })
