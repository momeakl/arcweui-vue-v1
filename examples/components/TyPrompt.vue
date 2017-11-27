<template>
  <div>
    <mt-button @click="showPrompt">点击弹出输入对话框</mt-button>
    <TyPrompt v-model="visible" title="输入对话框" :content="content" v-on:prompt="callback"></TyPrompt>
    <div>
      {{result+','+ content}}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      content: '',
      result: false
    }
  },
  methods: {
    showPrompt() {
      this.visible = true
    },
    callback(result, content) {
      this.result = result
      if (result) {
        this.content = content
      }
    }
  }
}
</script>
