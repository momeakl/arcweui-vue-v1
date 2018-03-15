import 'static/clouds/style.css'
import '@/assets/css/index.less'
import 'vodal/common.css'
import 'vodal/slide-right.css'
import Mint from 'mint-ui'
import LoadingToast from './components/loading-toast'
import TyImg from './components/ty-img'
import PeoperList from './components/peoper-list'
import Persion from './components/persion'
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
import TyPicker from './components/ty-picker'
import TyPrompt from './components/ty-prompt'
import TyTopTips from './components/ty-toptips'
import TyRemark from './components/ty-remark'
import TyReplyContent from './components/ty-reply-content'
import TyReplyList from './components/ty-reply-list'
import TyRoomList from './components/ty-room-list'
import TySearch from './components/ty-search'
import TyTextarea from './components/ty-textarea'
import TyTitle from './components/ty-title'
import UploadFile from './components/ty-uploadfile'

import axios from 'axios'
require('core-js')

const ArcWeUiV1 = {
  LoadingToast,
  TyImg,
  PeoperList,
  Persion,
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
  TyPicker,
  TyPrompt,
  TyTopTips,
  TyRemark,
  TyReplyContent,
  TyReplyList,
  TyRoomList,
  TySearch,
  TyTextarea,
  TyTitle,
  UploadFile
}

const install = function(Vue, config = {}) {
  Object.keys(ArcWeUiV1).forEach(key => {
    Vue.component(key, ArcWeUiV1[key])
  })

  Vue.use(Mint, {
    lazyload: {
      error: require('./assets/head.png'),
      loading: require('./assets/head.png')
    }
  })
  Vue.prototype.$http = axios
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Object.assign(ArcWeUiV1, { install })
