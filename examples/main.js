// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/base.less'

import ArcWeUIV1 from '@/index.js'
import 'mint-ui/lib/style.css'
import * as common from '$demo/assets/js/common'
import * as codeSnippet from '$demo/assets/js/codesnippet'

Vue.prototype.$fileServer = '/weixin/api/'

Vue.use(ArcWeUIV1)
Vue.config.productionTip = false

let appMark = 'worklog'
Vue.prototype.$TyApp = {
  mark: appMark,
  view: {
    index: {
      name: 'Index',
      title: ['工作日志']
    },
    demo: {
      name: 'Demo',
      title: ['Demo']
    },
    create: {
      name: 'Create',
      title: ['写日志']
    },
    mySelf: {
      name: 'MySelf',
      title: ['草稿箱', '已提交']
    },
    toMe: {
      name: 'ToMe',
      title: ['与我相关']
    },
    detail: {
      name: 'Detail',
      title: ['日志详情', '回复']
    }
  },
  api: {
    stat: appMark + '/getStat?',
    create: appMark + '/add?',
    edit: appMark + '/update?',
    delete: appMark + '/delete?',
    type: appMark + '/getOptions?',
    mySelf: appMark + '/myList?',
    mySelfDraft: appMark + '/draftList?',
    toMe: appMark + '/relateList?',
    myAudit: appMark + '/approverList?',
    detail: appMark + '/getDetail?',
    relatedPersons: appMark + '/getLastPersons?',
    fileUpload: 'file/upload',
    fileList: 'file/getListByObj?',
    fileDelete: 'file/delete?',
    replyCreate: 'reply/add',
    replyList: 'reply/list',
    replyDelete: 'reply/delete?'
  },
  validate: {
    content: '日志内容不能为空',
    replyContent: '回复内容不能为空',
    worklogType: '日志类型为空，请联系管理员',
    noLastPersons: '未获取到上次相关人',
    nullPersons: '请选择相关人',
    initPersons: '正在初始化人员信息'
  }
}

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
