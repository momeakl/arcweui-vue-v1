<template>
  <div class="weui-toptips weui-toptips_warn" v-if="message.length>0" v-html="message">
  </div>
</template>
<script>
export default {
  name: 'TyTopTips',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  watch: {
    value(newValue) {
      this.message = newValue
      if (newValue.length > 0) {
        setTimeout(() => {
          this.message = ''
          this.$emit('input', '')
        }, 2000)
      }
    }
  },
  data() {
    return {
      message: this.value
    }
  }
}
</script>
<style lang="less">
.weui-toptips_warn {
  display: block;
  background-color: #e35d5d;
}
</style>

