<template>
  <div class="ty-content">
    <h4 class="title-gray" v-if="title.length>0" v-html="title">
    </h4>
    <div v-if="isShowHtml" class="content" :class="{'weui-cells':!clearBorderTop}" v-html="content">
    </div>
    <div v-else class="content" :class="{'weui-cells':!clearBorderTop}" v-text="content">
    </div>
  </div>
</template>
<script>
export default {
  name: 'TyContent',
  props: {
    content: {
      type: String,
      default: ''
    },
    isShowHtml: {
      type: Boolean,
      default: false
    },
    clearBorderTop: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  },
  data() { return {} }
}
</script>
<style lang="less">
.ty-content {
  padding: 10px 15px 20px 15px;
  .content {
    white-space: pre-wrap;
    word-wrap: break-word;
    font-size: 15px;
  }
  .title-gray {
    font-size: 15px;
    color: #999;
    font-weight: normal;
    overflow: hidden;
    height: 24px;
    margin-bottom: 0.2em;
  }
}
</style>


