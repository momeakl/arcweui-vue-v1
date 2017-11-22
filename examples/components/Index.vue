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


