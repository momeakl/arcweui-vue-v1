<template>
  <div class="ty-prompt weui_dialog_confirm" v-if="visible">
    <div v-show="visible" class="weui-mask"></div>
    <div class="weui-dialog">
      <div class=" weui-dialog__hd " style="border-bottom:1px solid #d5d5d6; ">
        <strong class="weui-dialog__title" v-html="title"></strong>
      </div>
      <textarea class="weui_textarea " rows="3 " v-model="input "></textarea>
      <div class="weui-dialog__ft ">
        <a class="weui-dialog__btn weui-dialog__btn_default " @click="cancel(false)">取消</a>
        <a class="weui-dialog__btn weui-dialog__btn_primary " @click="ok">确定</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TyPrompt',
  props: {
    title: {
      type: String
    },
    content: {
      type: String
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value(newValue) {
      this.visible = newValue
      if (this.input !== this.content) {
        this.input = this.content
      }
    },
    content(newValue) {
      this.input = newValue
    }
  },
  data() {
    return {
      visible: this.value,
      input: this.content
    }
  },
  methods: {
    cancel(result) {
      this.visible = false
      this.$emit('input', false)
      this.$emit('prompt', result, this.input)
    },
    ok() {
      this.cancel(true)
    }
  }
}
</script>
<style lang="less">
.ty-prompt {
  .weui_textarea {
    display: block;
    border: 0;
    resize: none;
    color: inherit;
    outline: 0;
    min-height: 120px !important;
    max-height: 200px;
    overflow-y: auto;
    font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
      sans-serif;
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: break-all;
    width: 90%;
    margin: 0 auto;
    padding: 10px;
    font-size: 16px;
    border-radius: 10px;
    line-height: 16px;
  }
  .weui-dialog {
    z-index: 4000;
  }
}
</style>

