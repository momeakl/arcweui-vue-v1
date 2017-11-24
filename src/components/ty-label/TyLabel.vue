<template>
  <div class="ty-label weui-cells" :class="{fix:fixed,top:fixed=='top',bottom:fixed=='bottom'}" :style="{height:height+'px','line-height':height+'px','text-align':textAlign}">
    <p class="weui-cells__tips" v-html="content" :style="{'text-align':textAlign}"></p>
  </div>
</template>
<script>
export default {
  name: 'TyLabel',
  props: {
    content: {
      type: String,
      default: ''
    },
    height: {
      type: Number,
      default: 40
    },
    fixed: {
      type: String,
      default: ''
    },
    textAlign: {
      type: String,
      default: 'center'
    }
  },
  data() {
    return {}
  }
}
</script>
<style lang="less">
.ty-label {
  background-color: #f8f8f8;
  width: 100%;
  z-index: 999;
  .weui-cells__tips {
    margin-top: 0px;
    font-size: 12px;
  }
}

.ty-label.fix {
  position: fixed; z-index: 1000;
}

.ty-label.top {
  top: 0;
}

.ty-label.bottom {
  bottom: 0;
}

.ty-label.weui-cells {
  margin-top: 0px;
}
</style>

