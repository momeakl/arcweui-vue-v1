/*
 *通用帮助类
 */
/**
 * 数据会话存储
 * @param {String} key
 * @param {JSON} value
 */
export function putSession(key, value) {
  if (value) {
    sessionStorage.setItem(key, JSON.stringify(value))
  }
}

/**
 * 用户登录信息
 * @param {JSON} value
 */
export function putUserInfo(value) {
  putSession('userInfo', value)
}

export function clearUserInfo(value) {
  sessionStorage.removeItem('userInfo')
}

/**
 * 获取会话数据
 * @param {String} key
 */
export function getSession(key) {
  return JSON.parse(sessionStorage.getItem(key))
}

export function getUserInfo() {
  return getSession('userInfo')
}

/**
 * 数据本地存储
 * @param {String} key
 * @param {Object} value
 */
export function putLocal(key, value) {
  if (value) {
    localStorage.setItem(key, JSON.stringify(value))
  }
}

/**
 * 获取本地数据
 * @param {String} key
 */
export function getLocal(key) {
  return JSON.parse(localStorage.getItem(key))
}

/**
 * 设置全局token
 * @param {String} token
 */
export function setGlobalToken(token) {
  if (token) {
    sessionStorage.setItem('token', token)
  }
  window.Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

/**
 * 获取全局token
 */
export function getGlobalToken() {
  return sessionStorage.getItem('token')
}

/**
 * 清除token
 */
export function clearToken() {
  sessionStorage.removeItem('token')
}

export function updateDocumentTitle(value) {
  document.title = value
}

//author: meizz
// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format('yyyy-MM-dd hh:mm:ss.S') ==> 2006-07-02 08:09:04.423
// (new Date()).Format('yyyy-M-d h:m:s.S')      ==> 2006-7-2 8:9:4.18

Date.prototype.Format = function(fmt) {
  let o = {
    'M+': this.getMonth() + 1, //月份
    'd+': this.getDate(), //日
    'h+': this.getHours(), //小时
    'm+': this.getMinutes(), //分
    's+': this.getSeconds(), //秒
    'q+': Math.floor((this.getMonth() + 3) / 3), //季度
    'S': this.getMilliseconds() //毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}

String.prototype.isNullOrEmpty = function() {
  if (!this || !/\S+/.test(this) || !this.replace(/&nbsp;/ig, '').replace(/^\s+|\s+$/g, '')) {
    return false
  } else {
    return true
  }
}

export function GetQueryString(name) {
  let reg = new RegExp('(^|)' + name + '=([^&]*)(&|$)')
  let indexOf = window.location.href.indexOf('?')
  if (indexOf > -1) {
    let r = window.location.href.substr(indexOf).match(reg)
    if (r != null) return unescape(r[2])
  }
  return null
}

export function info(msg) {
  Vue.$toast(msg.toString())
}

export function success(msg = '操作成功') {
  msgInfo('success', msg)
}

function msgInfo(msgType, message) {
  let msgInfo = {
    msg: message,
    isShow: true,
    isWait: false,
    msgType: msgType
  }
  bus.$emit('showWaitingChange', msgInfo)
  setTimeout(() => {
    msgInfo.isShow = false
    bus.$emit('showWaitingChange', msgInfo)
  }, 3000)
}

export function error(msg) {
  msgInfo('error', msg)
}

export function msgBox(msg, title) {
  Vue.$messagebox.alert(msg, title)
}

export function showWaiting() {
  closeWaiting()
  bus.$emit('showWaitingChange', {
    msg: '数据加载中',
    isShow: true,
    isWait: true,
    msgType: 'success'
  })
}

export function closeWaiting() {
  bus.$emit('showWaitingChange', {
    msg: '数据加载中',
    isShow: false,
    isWait: true,
    msgType: 'success'
  })
}

/**
 * 滚动到顶部
 */
export function scrollTop() {
  document.body.scrollTop = 0
}

/**
 * 数组去重
 * @param {Array} data
 * @param {Boolean} isJson
 */
export function distinct(data, isJson = true) {
  let generalData = data
  if (isJson) {
    generalData = data.map((item) => {
      delete item.deptId
      return JSON.stringify(item)
    })
  }
  let distinctData = Array.from(new Set(generalData))
  if (isJson) {
    let restoreData = distinctData.map((item) => { return JSON.parse(item) })
    return restoreData
  } else {
    return distinctData
  }
}

export function getWeek(day) {
  if (!day) {
    day = new Date().getDay()
  }
  let week = '星期'
  switch (day) {
    case 0:
      week += '日'
      break
    case 1:
      week += '一'
      break
    case 2:
      week += '二'
      break
    case 3:
      week += '三'
      break
    case 4:
      week += '四'
      break
    case 5:
      week += '五'
      break
    case 6:
      week += '六'
      break
  }
  return week
}

/**
 * 判断页面是否出现滚动条
 * @param {Number} itemsLength 列表项长度
 * @param {Number} itemsHeight 单个列表项高度
 * @param {Number} otherHeight 其它元素高度
 */
export function checkPageScroll(itemsLength, itemsHeight, otherHeight) {
  if (itemsLength * itemsHeight + otherHeight <= document.documentElement.offsetHeight) {
    return false
  } else {
    return true
  }
}

export function isIphone() {
  let ua = navigator.userAgent
  if (ua.indexOf('iPhone') > 0) {
    return true
  }
  return false
}

/**
 * 返回日期
 * @param {String|Number} value
 * @returns Date
 */
export function formatDate(value) {
  let valueType = typeof value
  if (valueType === 'string') {
    return new Date(value.replace(/-/g, '/'))
  } else if (valueType === 'number') {
    return new Date(value)
  } else {
    return value
  }
}
