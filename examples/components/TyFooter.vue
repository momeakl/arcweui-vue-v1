<template>
  <div>
    <TyFooter :btnName="btnName" v-on:input="input" v-model="showFoot" v-on:click="click"/>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        btnName: ['取消', '确定'],
        showFoot: -1
      }
    },
    methods: {
      input(Index) {
        if (Index === 0) {
          TyCommon.msgBox('点击了取消')
        } else {
          TyCommon.msgBox('点击了确定')
        }
      },
      click(e) {
        this.showFoot = e
      }
    }
  }
</script>
