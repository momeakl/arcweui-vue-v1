<template>
  <div style="padding:15px;">
    <div class="img">
      <template v-for="item in faces">
        <span v-html="item"></span>
      </template>
    </div>
    <div style="position: relative;">
      <mt-button @click="() => show = !show" style="margin: 0 10px 50px;">选择表情</mt-button>
      <TyFaceBox v-model="show" v-on:selected-face="getFace"/>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        show: false,
        faces: []
      }
    },
    methods: {
      getFace(img) {
        this.faces.push(img)
      }
    }
  }
</script>
<style scoped>
  .img{ min-height: 200px;}
  .img img{ width: 50px; height: 50px;}
</style>
