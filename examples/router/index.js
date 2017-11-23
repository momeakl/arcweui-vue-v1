import Vue from 'vue'
import Router from 'vue-router'

// 路由配置
let components = []
components.push({ component: 'Index', name: 'Index', path: '/' })
components.push({ component: 'TyImg', name: 'TyImg', path: '/TyImg' })
components.push({ component: 'PeoperList', name: 'PeoperList', path: '/PeoperList' })
components.push({ component: 'SeparateLines', name: 'SeparateLines', path: '/SeparateLines' })
components.push({ component: 'TyEmpty', name: 'TyEmpty', path: '/TyEmpty' })
components.push({ component: 'TyAutoLoad', name: 'TyAutoLoad', path: '/TyAutoLoad' })
components.push({ component: 'TyCell', name: 'TyCell', path: '/TyCell' })
components.push({ component: 'TyCellSuper', name: 'TyCellSuper', path: '/TyCellSuper' })
components.push({ component: 'TyCellWithImg', name: 'TyCellWithImg', path: '/TyCellWithImg' })

components.push({ component: 'TyCircle', name: 'TyCircle', path: '/TyCircle' })
components.push({ component: 'TyContent', name: 'TyContent', path: '/TyContent' })
components.push({ component: 'TyDatetimePicker', name: 'TyDatetimePicker', path: '/TyDatetimePicker' })

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

export default new Router({
  routes: routerObj
})
