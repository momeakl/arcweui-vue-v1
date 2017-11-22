<template>
  <div :style="{display:msgInfo.isShow?'':'none'}">
    <div class="weui-mask_transparent"></div>
    <div class="weui-toast">
      <i class="weui-icon_toast" :class="iconClass"></i>
      <p class="weui-toast__content">{{msgInfo.msg}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LoadingToast',
  props: {
    msgInfo: {
      type: Object,
      default: {
        msg: '数据加载中',
        isShow: false,
        isWait: true,
        msgType: 'success'
      }
    }
  },
  computed: {
    iconClass() {
      let className = ''
      if (!this.msgInfo.isWait) {
        switch (this.msgInfo.msgType) {
          case 'error':
            className = 'clouds-msg-error'
            break
          case 'success':
            className = 'weui-icon-success-no-circle'
            break
        }
      } else {
        className = 'weui-loading'
      }
      return className
    }
  },
  data() {
    return {}
  }
}
</script>

