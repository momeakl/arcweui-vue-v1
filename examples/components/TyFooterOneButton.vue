<template>
  <div>
    <TyFooterOneButton name="删除" type="danger" :tag="{name: 1}" v-on:click="click"/>
    <!--<TyFooterOneButton name="确定" type="primary" tag="demo1" v-on:click="click"/>
    <TyFooterOneButton name="返回" type="default" tag="demo2" v-on:click="click"/>-->
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    methods: {
      click(e) {
        console.log(e)
      }
    }
  }
</script>
