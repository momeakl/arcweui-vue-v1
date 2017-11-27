<template>
  <div>
    <mt-button @click="test">打开测试消息</mt-button>
    <TyTopTips v-model="error"></TyTopTips>
  </div>
</template>
<script>
export default {
  data() {
    return {
      error: ''
    }
  },
  methods: {
    test() {
      this.error = "这是错误提示信息"
    }
  }
}
</script>
