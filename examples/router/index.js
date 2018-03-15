import Vue from 'vue'
import Router from 'vue-router'
import PageTransition from '../PageTransition'

// 路由配置
let components = []
components.push({ component: 'Index', name: 'Index', path: '/' })
components.push({ component: 'TyImg', name: 'TyImg', path: '/TyImg' })
components.push({ component: 'PeoperList', name: 'PeoperList', path: '/PeoperList' })
components.push({ component: 'Persion', name: 'Persion', path: '/Persion' })
components.push({ component: 'SeparateLines', name: 'SeparateLines', path: '/SeparateLines' })
components.push({ component: 'TyEmpty', name: 'TyEmpty', path: '/TyEmpty' })
components.push({ component: 'TyAutoLoad', name: 'TyAutoLoad', path: '/TyAutoLoad' })
components.push({ component: 'TyCell', name: 'TyCell', path: '/TyCell' })
components.push({ component: 'TyCellSuper', name: 'TyCellSuper', path: '/TyCellSuper' })
components.push({ component: 'TyCellWithImg', name: 'TyCellWithImg', path: '/TyCellWithImg' })
components.push({ component: 'TyCircle', name: 'TyCircle', path: '/TyCircle' })
components.push({ component: 'TyContent', name: 'TyContent', path: '/TyContent' })
components.push({ component: 'TyDatetimePicker', name: 'TyDatetimePicker', path: '/TyDatetimePicker' })
components.push({ component: 'TyFaceBox', name: 'TyFaceBox', path: '/TyFaceBox' })
components.push({ component: 'TyFileList', name: 'TyFileList', path: '/TyFileList' })
components.push({ component: 'TyFooter', name: 'TyFooter', path: '/TyFooter' })
components.push({ component: 'TyFooterOneButton', name: 'TyFooterOneButton', path: '/TyFooterOneButton' })
components.push({ component: 'TyGeneralCell', name: 'TyGeneralCell', path: '/TyGeneralCell' })
components.push({ component: 'TyHoursLabel', name: 'TyHoursLabel', path: '/TyHoursLabel' })
components.push({ component: 'TyLabel', name: 'TyLabel', path: '/TyLabel' })
components.push({ component: 'TyListItem', name: 'TyListItem', path: '/TyListItem' })
components.push({ component: 'TyPicker', name: 'TyPicker', path: '/TyPicker' })
components.push({ component: 'TyPrompt', name: 'TyPrompt', path: '/TyPrompt' })
components.push({ component: 'TyTopTips', name: 'TyTopTips', path: '/TyTopTips' })
components.push({ component: 'TyRemark', name: 'TyRemark', path: '/TyRemark' })
components.push({ component: 'TyReplyContent', name: 'TyReplyContent', path: '/TyReplyContent' })
components.push({ component: 'TyReplyList', name: 'TyReplyList', path: '/TyReplyList' })
components.push({ component: 'TyRoomList', name: 'TyRoomList', path: '/TyRoomList' })
components.push({ component: 'TySearch', name: 'TySearch', path: '/TySearch' })
components.push({ component: 'TyTextarea', name: 'TyTextarea', path: '/TyTextarea' })
components.push({ component: 'TyTitle', name: 'TyTitle', path: '/TyTitle' })
components.push({ component: 'UploadFile', name: 'UploadFile', path: '/UploadFile' })

let routerObj = []
for (let index = 0; index < components.length; index++) {
  let element = components[index]
  routerObj.push({
    path: element.path,
    name: element.name,
    component: () =>
      import ('../components/' + element.component)
  })
}

Vue.use(Router)
const routers = new Router({
  routes: [{
    path: '/',
    component: PageTransition, // 引入页面切换组件
    children: routerObj
  }]
})
export default routers
