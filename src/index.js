import '@/assets/css/index.less'
import 'mint-ui/lib/style.css'
import 'static/clouds/style.css'
import Mint from 'mint-ui'
import LoadingToast from './components/loading-toast'
import TyImg from './components/ty-img'
import PeoperList from './components/peoper-list'
import SeparateLines from './components/separate-lines'
import TyEmpty from './components/ty-empty'
import TyAutoLoad from './components/ty-auto-load'
import TyCell from './components/ty-cell'
import TyCellSuper from './components/ty-cell-super'
import TyCellWithImg from './components/ty-cell-with-img'

import TyCircle from './components/ty-circle'
import TyContent from './components/ty-content'
import TyDatetimePicker from './components/ty-datetime-picker'

require('core-js')
const ArcWeUiV1 = {
  LoadingToast,
  TyImg,
  PeoperList,
  SeparateLines,
  TyEmpty,
  TyAutoLoad,
  TyCell,
  TyCellSuper,
  TyCellWithImg,
  TyCircle,
  TyContent,
  TyDatetimePicker
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
