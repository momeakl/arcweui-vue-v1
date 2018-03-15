<template>
  <div class="weui-cells" @click="clickHandler" :class="[prefixCls,!showBorderTop?'clear-top':'',!showBorderBottom?'clear-bottom':'']">
    <div class="weui-cell breadcrumb">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TitleCell',
  props: {
    showBorderTop: Boolean,
    showBorderBottom: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      prefixCls: 'arc-weui-title-cell'
    }
  },
  methods: {
    clickHandler() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="less">
  .breadcrumb {
    height: 100%;
    width: 90%;
    overflow: hidden;
    overflow-x: scroll;
    white-space: nowrap;
    /*text-align: justify;*/
  }
</style>
