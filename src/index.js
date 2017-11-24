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
import TyFaceBox from './components/ty-facebox'
import TyFileList from './components/ty-file-list'
import TyFooter from './components/ty-footer'
import TyFooterOneButton from './components/ty-footer-one-button'
import TyGeneralCell from './components/ty-general-cell'

import TyHoursLabel from './components/ty-hours-label'
import TyLabel from './components/ty-label'
import TyListItem from './components/ty-listitem'
import TyLoadMore from './components/ty-loadmore'

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
  TyDatetimePicker,
  TyFaceBox,
  TyFileList,
  TyFooter,
  TyFooterOneButton,
  TyGeneralCell,
  TyHoursLabel,
  TyLabel,
  TyListItem,
  TyLoadMore
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
