<template>
  <div class="examples-index">
    <div>
      <mt-button @click="toast('success')">SuccessToast</mt-button>
      <mt-button @click="toast('error')">ErrorToast</mt-button>
    </div>
    <div>
      <mt-button @click="clickHandler('TyImg')">img 懒加载</mt-button>
      <mt-button @click="clickHandler('PeoperList')">人员选择示例</mt-button>
    </div>
    <div>
      <mt-button @click="clickHandler('SeparateLines')">分隔线</mt-button>
      <mt-button @click="clickHandler('TyEmpty')">空内容背景</mt-button>
      <mt-button @click="clickHandler('TyAutoLoad')">自动加载</mt-button>
    </div>
    <div>
      <mt-button @click="clickHandler('TyCell')">Cell</mt-button>
      <mt-button @click="clickHandler('TyCellSuper')">更强的cell</mt-button>
      <mt-button @click="clickHandler('TyCellWithImg')">img cell</mt-button>
    </div>
    <div>
      <mt-button @click="clickHandler('TyCircle')">TyCircle</mt-button>
      <mt-button @click="clickHandler('TyContent')">TyContent</mt-button>
      <mt-button @click="clickHandler('TyDatetimePicker')">TyDatetimePicker</mt-button>
    </div>
    <div>
      <mt-button @click="clickHandler('TyFaceBox')">TyFaceBox</mt-button>
      <mt-button @click="clickHandler('TyFileList')">TyFileList</mt-button>
      <mt-button @click="clickHandler('TyFooter')">TyFooter</mt-button>
    </div>
    <div>
      <mt-button @click="clickHandler('TyFooterOneButton')">TyFooterOneButton</mt-button>
      <mt-button @click="clickHandler('TyGeneralCell')">TyGeneralCell</mt-button>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    clickHandler(name) {
      this.$parent.title = name
      this.$router.push(name)
    },
    toast(type) {
      if (type === 'success') {
        TyCommon.success('成功')
      }
      else if (type === 'error') {
        TyCommon.error('失败')
      }
    }
  }
}
</script>
<style lang="less" scoped>
.examples-index {
  text-align: center;
  .weui-btn {
    width: 40%;
    display: inline-block;
    margin-right: 10px;
  }
}
</style>


