<template>
  <div class="ty-search-example">
    <mt-button @click="setReadonly">{{readonly==''?'设置只读':'清除只读取'}}</mt-button>
    <TySearch v-on:search="search" v-model="inputValue" :readonly="readonly">
    </TySearch>
    <br>
    <br>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputValue: '',
      readonly: ''
    }
  },
  methods: {
    search() {
      this.$toast('搜索关键字:' + this.inputValue)
    },
    setReadonly() {
      if (this.readonly === '') {
        this.readonly = 'readonly'
      } else {
        this.readonly = ''
      }
    }
  }
}
</script>
<style lang="less">
.ty-search-example {
  .ty-search {
    top: 120px !important;
  }
}
</style>


