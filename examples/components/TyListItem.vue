<template>
  <div>
    <TyListItem title="demo1" showChecked v-model="checked" :label="checked + ':'" v-on:input="input" v-on:click="click"/>
    <TyListItem title="demo2" content="111" showChecked/>
    <TyListItem title="demo3" content="111" label="222" :showChecked="false"/>

    <TyListItem title="demo4" side="333"></TyListItem>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        checked: true
      }
    },
    methods: {
      input(e) {
        console.log(e)
      },
      click() {
        TyCommon.success('点击列')
      }
    }
  }
</script>
