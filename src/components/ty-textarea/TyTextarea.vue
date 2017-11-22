<template>
  <div class="ty-textarea weui-cells">
    <mt-field type="textarea" v-model="content" :attr="{maxLength:maxLength}" rows="5" :placeholder="'内容（'+maxLength+'个字符以内）'"></mt-field>
    <div class="max-length" v-if="isShowTip">
      <span class="cur" v-text="curLength"></span>{{"/"+maxLength}}</div>
  </div>
</template>
<script>
export default {
  name: 'TyTextarea',
  props: {
    value: {
      type: String,
      default: ''
    },
    maxLength: {
      type: Number,
      default: 0
    },
    isShowTip: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    value(newValue) {
      this.content = newValue
    },
    content(newValue) {
      this.curLength = newValue.length
      this.$emit('input', newValue)
    }
  },
  data() {
    return {
      content: this.value,
      curLength: 0
    }
  }
}
</script>
<style lang="less">
.ty-textarea {
  .max-length {
    color: #b2b2b2;
    text-align: right;
    margin-right: 15px;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
  }
  .mint-cell:last-child {
    background-image: none;
  }
  .cur {
    color: #eb801f;
  }
}
</style>


