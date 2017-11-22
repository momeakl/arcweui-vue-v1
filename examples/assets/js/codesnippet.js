/**
 * 查询员工基础信息
 * @param {Array} empIds
 * @param {Array} deptIds
 * @param {Function} callback
 */
export function getContactsBaseInfo(empIds = [], deptIds = [], callback) {
  if (!empIds) {
    empIds = []
  }
  if (!deptIds) {
    deptIds = []
  }
  Vue.prototype.$http.post('contacts/getBaseInfo', { 'empIds': empIds.toString(), 'deptIds': deptIds.toString() }).then((res) => {
    if (res.data.code === 0) {
      let newData = []
      if (res.data.data) {
        newData = res.data.data.map((value) => {
          return { id: value.empId, name: value.trueName, avatar: value.header, deptId: value.deptId }
        })
      }
      res.data.data = newData
      if (callback) {
        callback(res)
      }
    } else {
      TyCommon.error(res.data.message)
      if (callback) {
        callback(res)
      }
    }
  }).catch((error) => {
    TyCommon.error(error.message)
    if (callback) {
      callback(null)
    }
  })
}

export function getSdkParams() {
  let pro = 'tje2c346c8cfca5d87 '
  let test = 'tj55a0625522ac7b59'
  let contact = 'tjebfa5de716921682'
  if (Vue.prototype.$TyApp.mark === 'contacts') {
    return contact
  }
  if (location.href.indexOf('http://ty.tunnel.lyarc.com') > -1 || location.href.indexOf('http://localhost') > -1) {
    return test
  }
  if (location.href.indexOf('http://ty.lyarc.com/') > -1) {
    return pro
  }
}

/* eslint-disable */

export function wxJsSdkInit(callback) {
  let wxData = null
  let error = false
  let suiteId = getSdkParams()
  Vue.prototype.$http.get('weixin/jssdk', {
    params: {
      'corpId': '',
      'suiteId': suiteId,
      'url': location.href
    }
  }).then((res) => {
    if (res.data.code === 0) {
      wxData = res.data.data
      wx.config({
        debug: false,
        beta: true,
        appId: wxData.jsapiSignature.appId,
        timestamp: wxData.jsapiSignature.timestamp,
        nonceStr: wxData.jsapiSignature.nonceStr,
        signature: wxData.jsapiSignature.signature,
        jsApiList: ['selectEnterpriseContact', 'getLocation']
      })
    } else {
      alert(res.data.message)
    }

    wx.ready(() => {
      wx.checkJsApi({
        jsApiList: ['selectEnterpriseContact', 'getLocation'],
        success: function(res) {
          if (!res.checkResult.selectEnterpriseContact) {
            TyCommon.msgBox('微信版本过低，请升级到最版本', '提示')
            return
          }
          if (callback && !error) {
            callback(wxData)
          }
        }
      })
    })

    wx.error(function(res) {
      error = true
      TyCommon.msgBox('微信授权错误，请重新打开', '错误')
    })
  }).catch((error) => {
    TyCommon.error(error.message)
  })
}

/**
 * 打开通讯录
 * @param {Array} initDatas 初始化默认选中员工
 * @param {JSON} wxData 微信配置信息
 * @param {Function} callback 回调函数
 */
export function openWxContacts(initDatas, wxData, callback) {
  let oldIds = initDatas.map((item) => {
    if (item.id) {
      return item.id
    } else {
      return item
    }
  })
  try {
    WeixinJSBridge.invoke('selectEnterpriseContact', {
      fromDepartmentId: 0,
      mode: 'multi',
      type: ['department', 'user'],
      selectedDepartmentIds: [],
      selectedUserIds: oldIds,
      groupId: wxData.groupSignature.groupId,
      timestamp: wxData.groupSignature.timestamp,
      nonceStr: wxData.groupSignature.nonceStr,
      signature: wxData.groupSignature.signature
    }, (res) => {
      if (res.err_msg.indexOf('function_not_exist') > 0) {
        TyCommon.info('版本过低请升级')
        return
      } else if (res.err_msg.indexOf('openEnterpriseContact:fail') > 0) {
        TyCommon.info('授权失败，请重试')
        return
      }
      let result = res.result
      if (typeof res.result === 'string') {
        result = JSON.parse(res.result)
      }
      let selectAll = result.selectAll
      if (!selectAll) {
        let deptIds = null
        if (result.departmentList && result.departmentList.length > 0) {
          deptIds = result.departmentList.map((value) => { return value.id })
        }
        if (callback) {
          callback({
            'deptIds': deptIds,
            'userList': result.userList
          })
        }
      }
    })
  } catch (error) {
    TyCommon.error(error.message)
  }
}

export function getLocation(callback) {
  wx.getLocation({
    type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
    success: function(res) {
      if (callback) {
        callback(res)
      }
    }
  })
}

/**
 * 获取登陆信息
 */
export function getLoginInfo(callback) {
  Vue.prototype.$http.post('login/get', {}).then((res) => {
    if (res.data.code === 0) {
      TyCommon.putUserInfo(res.data.data)
      if (callback) {
        callback(true)
      }
    } else {
      TyCommon.clearUserInfo()
      TyCommon.msgBox(res.data.message, '错误')
      if (callback) {
        callback(false)
      }
    }
  }).catch((error) => {
    TyCommon.error(error.message)
    if (callback) {
      callback(false)
    }
  })
}

/**
 * 获取应用统计信息
 */
export function getStat(callback) {
  Vue.prototype.$http.get(Vue.prototype.$TyApp.api.stat, {}).then((res) => {
    if (res.data.code === 0) {
      callback(res.data.data)
    } else {
      TyCommon.error(res.data.message)
    }
  }).catch((error) => {
    TyCommon.error(error.message)
  })
}